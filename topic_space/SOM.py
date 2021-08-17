from minisom import MiniSom
import pandas as pd
from ast import literal_eval


def compute_som(self):
    som = MiniSom(100, 100, 10, sigma=0.3, learning_rate=0.5)
    som.train(self, 1000)
    return som


def get_memberships(self):
    return [t[1] for t in self]


if __name__ == '__main__':
    projects = pd.read_csv("../data/covid-preprints_projects.csv")
    topics = projects['topic_affiliation'].apply(literal_eval)
    # print(type(topics))
    topics = topics.apply(lambda s: get_memberships(s))
    topics = topics[:100]
    som = compute_som(topics)
    winners = []
    for cnt, sample in enumerate(topics):
        w = som.winner(sample)
        #winners.iloc[cnt] = w
        winners.append(w)
        #print(w[0], ',', w[1])
    winners_out = pd.DataFrame(winners, columns=['x', 'y'])
    print(winners_out.hist(bis=10))
    winners_out.to_csv("../data/projects_som.csv")
