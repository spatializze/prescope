
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "covid_preprints_projects_0": {
            "type": "geojson",
            "data": json_covid_preprints_projects_0
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_covid_preprints_projects_0_0",
            "type": "circle",
            "source": "covid_preprints_projects_0",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'source'], 'AfricArXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'AgriXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'arXiv'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Authorea'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'BioHackrXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'bioRxiv'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Cambridge University Press'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'ChemRxiv'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Copernicus GmbH'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'EcoEvoRxiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'EdArXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'engrXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'ESSOAR'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Figshare'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Frenxiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'INA-Rxiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'IndiaRxiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'JMIR'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'LawArXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'MediArXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'medRxiv'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'MetaArXiV (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'NutriXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'OSF Preprints'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Preprints.org'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'PsyArXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'RePEc'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Research Square'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'ResearchGate'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'SAGE'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'SciELO'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'ScienceOpen'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'SocArXiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'SportRxiv (OSF)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'SSRN'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Techrxiv (IEEE)'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'WHO'], ['/', 3.571428571428571, 2], ['==', ['get', 'source'], 'Zenodo'], ['/', 3.571428571428571, 2], ['/', 3.571428571428571, 2]], 'circle-color': ['case', ['==', ['get', 'source'], 'AfricArXiv (OSF)'], '#5dda81', ['==', ['get', 'source'], 'AgriXiv (OSF)'], '#5297db', ['==', ['get', 'source'], 'arXiv'], '#c476e0', ['==', ['get', 'source'], 'Authorea'], '#9be024', ['==', ['get', 'source'], 'BioHackrXiv (OSF)'], '#79cb2b', ['==', ['get', 'source'], 'bioRxiv'], '#74e0c3', ['==', ['get', 'source'], 'Cambridge University Press'], '#d162aa', ['==', ['get', 'source'], 'ChemRxiv'], '#17e6f0', ['==', ['get', 'source'], 'Copernicus GmbH'], '#cc6175', ['==', ['get', 'source'], 'EcoEvoRxiv (OSF)'], '#45dc59', ['==', ['get', 'source'], 'EdArXiv (OSF)'], '#84cbdc', ['==', ['get', 'source'], 'engrXiv (OSF)'], '#c971b8', ['==', ['get', 'source'], 'ESSOAR'], '#922adc', ['==', ['get', 'source'], 'Figshare'], '#dae418', ['==', ['get', 'source'], 'Frenxiv (OSF)'], '#8588ee', ['==', ['get', 'source'], 'INA-Rxiv (OSF)'], '#db1d23', ['==', ['get', 'source'], 'IndiaRxiv (OSF)'], '#8b74c9', ['==', ['get', 'source'], 'JMIR'], '#8476f0', ['==', ['get', 'source'], 'LawArXiv (OSF)'], '#2443cb', ['==', ['get', 'source'], 'MediArXiv (OSF)'], '#d9a04a', ['==', ['get', 'source'], 'medRxiv'], '#eb2488', ['==', ['get', 'source'], 'MetaArXiV (OSF)'], '#d9b034', ['==', ['get', 'source'], 'NutriXiv (OSF)'], '#cb6456', ['==', ['get', 'source'], 'OSF Preprints'], '#e6721e', ['==', ['get', 'source'], 'Preprints.org'], '#5082e4', ['==', ['get', 'source'], 'PsyArXiv (OSF)'], '#8ee779', ['==', ['get', 'source'], 'RePEc'], '#eb6838', ['==', ['get', 'source'], 'Research Square'], '#5ed290', ['==', ['get', 'source'], 'ResearchGate'], '#b8c971', ['==', ['get', 'source'], 'SAGE'], '#dbd06a', ['==', ['get', 'source'], 'SciELO'], '#90edc7', ['==', ['get', 'source'], 'ScienceOpen'], '#27ca21', ['==', ['get', 'source'], 'SocArXiv (OSF)'], '#80e74c', ['==', ['get', 'source'], 'SportRxiv (OSF)'], '#d9809f', ['==', ['get', 'source'], 'SSRN'], '#1cd9c6', ['==', ['get', 'source'], 'Techrxiv (IEEE)'], '#2093d1', ['==', ['get', 'source'], 'WHO'], '#d471e1', ['==', ['get', 'source'], 'Zenodo'], '#8b47e3', '#ea72e6'], 'circle-opacity': ['case', ['==', ['get', 'source'], 'AfricArXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'AgriXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'arXiv'], 0.25, ['==', ['get', 'source'], 'Authorea'], 0.25, ['==', ['get', 'source'], 'BioHackrXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'bioRxiv'], 0.25, ['==', ['get', 'source'], 'Cambridge University Press'], 0.25, ['==', ['get', 'source'], 'ChemRxiv'], 0.25, ['==', ['get', 'source'], 'Copernicus GmbH'], 0.25, ['==', ['get', 'source'], 'EcoEvoRxiv (OSF)'], 0.25, ['==', ['get', 'source'], 'EdArXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'engrXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'ESSOAR'], 0.25, ['==', ['get', 'source'], 'Figshare'], 0.25, ['==', ['get', 'source'], 'Frenxiv (OSF)'], 0.25, ['==', ['get', 'source'], 'INA-Rxiv (OSF)'], 0.25, ['==', ['get', 'source'], 'IndiaRxiv (OSF)'], 0.25, ['==', ['get', 'source'], 'JMIR'], 0.25, ['==', ['get', 'source'], 'LawArXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'MediArXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'medRxiv'], 0.25, ['==', ['get', 'source'], 'MetaArXiV (OSF)'], 0.25, ['==', ['get', 'source'], 'NutriXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'OSF Preprints'], 0.25, ['==', ['get', 'source'], 'Preprints.org'], 0.25, ['==', ['get', 'source'], 'PsyArXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'RePEc'], 0.25, ['==', ['get', 'source'], 'Research Square'], 0.25, ['==', ['get', 'source'], 'ResearchGate'], 0.25, ['==', ['get', 'source'], 'SAGE'], 0.25, ['==', ['get', 'source'], 'SciELO'], 0.25, ['==', ['get', 'source'], 'ScienceOpen'], 0.25, ['==', ['get', 'source'], 'SocArXiv (OSF)'], 0.25, ['==', ['get', 'source'], 'SportRxiv (OSF)'], 0.25, ['==', ['get', 'source'], 'SSRN'], 0.25, ['==', ['get', 'source'], 'Techrxiv (IEEE)'], 0.25, ['==', ['get', 'source'], 'WHO'], 0.25, ['==', ['get', 'source'], 'Zenodo'], 0.25, 0.25], 'circle-stroke-width': ['case', ['==', ['get', 'source'], 'AfricArXiv (OSF)'], 0, ['==', ['get', 'source'], 'AgriXiv (OSF)'], 0, ['==', ['get', 'source'], 'arXiv'], 0, ['==', ['get', 'source'], 'Authorea'], 0, ['==', ['get', 'source'], 'BioHackrXiv (OSF)'], 0, ['==', ['get', 'source'], 'bioRxiv'], 0, ['==', ['get', 'source'], 'Cambridge University Press'], 0, ['==', ['get', 'source'], 'ChemRxiv'], 0, ['==', ['get', 'source'], 'Copernicus GmbH'], 0, ['==', ['get', 'source'], 'EcoEvoRxiv (OSF)'], 0, ['==', ['get', 'source'], 'EdArXiv (OSF)'], 0, ['==', ['get', 'source'], 'engrXiv (OSF)'], 0, ['==', ['get', 'source'], 'ESSOAR'], 0, ['==', ['get', 'source'], 'Figshare'], 0, ['==', ['get', 'source'], 'Frenxiv (OSF)'], 0, ['==', ['get', 'source'], 'INA-Rxiv (OSF)'], 0, ['==', ['get', 'source'], 'IndiaRxiv (OSF)'], 0, ['==', ['get', 'source'], 'JMIR'], 0, ['==', ['get', 'source'], 'LawArXiv (OSF)'], 0, ['==', ['get', 'source'], 'MediArXiv (OSF)'], 0, ['==', ['get', 'source'], 'medRxiv'], 0, ['==', ['get', 'source'], 'MetaArXiV (OSF)'], 0, ['==', ['get', 'source'], 'NutriXiv (OSF)'], 0, ['==', ['get', 'source'], 'OSF Preprints'], 0, ['==', ['get', 'source'], 'Preprints.org'], 0, ['==', ['get', 'source'], 'PsyArXiv (OSF)'], 0, ['==', ['get', 'source'], 'RePEc'], 0, ['==', ['get', 'source'], 'Research Square'], 0, ['==', ['get', 'source'], 'ResearchGate'], 0, ['==', ['get', 'source'], 'SAGE'], 0, ['==', ['get', 'source'], 'SciELO'], 0, ['==', ['get', 'source'], 'ScienceOpen'], 0, ['==', ['get', 'source'], 'SocArXiv (OSF)'], 0, ['==', ['get', 'source'], 'SportRxiv (OSF)'], 0, ['==', ['get', 'source'], 'SSRN'], 0, ['==', ['get', 'source'], 'Techrxiv (IEEE)'], 0, ['==', ['get', 'source'], 'WHO'], 0, ['==', ['get', 'source'], 'Zenodo'], 0, 0], 'circle-stroke-color': ['case', ['==', ['get', 'source'], 'AfricArXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'AgriXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'arXiv'], '#232323', ['==', ['get', 'source'], 'Authorea'], '#232323', ['==', ['get', 'source'], 'BioHackrXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'bioRxiv'], '#232323', ['==', ['get', 'source'], 'Cambridge University Press'], '#232323', ['==', ['get', 'source'], 'ChemRxiv'], '#232323', ['==', ['get', 'source'], 'Copernicus GmbH'], '#232323', ['==', ['get', 'source'], 'EcoEvoRxiv (OSF)'], '#232323', ['==', ['get', 'source'], 'EdArXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'engrXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'ESSOAR'], '#232323', ['==', ['get', 'source'], 'Figshare'], '#232323', ['==', ['get', 'source'], 'Frenxiv (OSF)'], '#232323', ['==', ['get', 'source'], 'INA-Rxiv (OSF)'], '#232323', ['==', ['get', 'source'], 'IndiaRxiv (OSF)'], '#232323', ['==', ['get', 'source'], 'JMIR'], '#232323', ['==', ['get', 'source'], 'LawArXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'MediArXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'medRxiv'], '#232323', ['==', ['get', 'source'], 'MetaArXiV (OSF)'], '#232323', ['==', ['get', 'source'], 'NutriXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'OSF Preprints'], '#232323', ['==', ['get', 'source'], 'Preprints.org'], '#232323', ['==', ['get', 'source'], 'PsyArXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'RePEc'], '#232323', ['==', ['get', 'source'], 'Research Square'], '#232323', ['==', ['get', 'source'], 'ResearchGate'], '#232323', ['==', ['get', 'source'], 'SAGE'], '#232323', ['==', ['get', 'source'], 'SciELO'], '#232323', ['==', ['get', 'source'], 'ScienceOpen'], '#232323', ['==', ['get', 'source'], 'SocArXiv (OSF)'], '#232323', ['==', ['get', 'source'], 'SportRxiv (OSF)'], '#232323', ['==', ['get', 'source'], 'SSRN'], '#232323', ['==', ['get', 'source'], 'Techrxiv (IEEE)'], '#232323', ['==', ['get', 'source'], 'WHO'], '#232323', ['==', ['get', 'source'], 'Zenodo'], '#232323', '#232323']}
        }
],
}