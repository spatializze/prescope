import json
import pandas as pd
from sklearn.manifold import TSNE

def convert_projects(filename):
    print(f'Converting "{filename}"')
    with open(filename) as json_data:
        jsonData = json.load(json_data)
    df = pd.json_normalize(jsonData['projects'])
    print(df)
    df.to_csv("../data/covid-preprints_projects.csv")

def convert_topics(filename):
    print(f'Converting "{filename}"')
    with open(filename) as json_file:
        json_data = json.load(json_file)
    df = pd.json_normalize(json_data['lda_topics'])
    #df = pd.DataFrame(jsonData)
    df.to_csv("../data/covid-preprints_topics.csv")

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    convert_projects("../data/extended_covid_preprints.json")
    #convert_topics("../data/extended_covid_preprints.json")