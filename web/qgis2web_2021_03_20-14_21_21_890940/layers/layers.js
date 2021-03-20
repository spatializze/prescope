var wms_layers = [];


lyr_covid_preprints_projects_0.setVisible(true);
var layersList = [lyr_covid_preprints_projects_0];
lyr_covid_preprints_projects_0.set('fieldAliases', {'field_1': 'field_1', 'tsne_coordinates': 'tsne_coordinates', 'umap_coordinates': 'umap_coordinates', 'source': 'source', 'identifier': 'identifier', 'identifier_type': 'identifier_type', 'posted_date': 'posted_date', 'title': 'title', 'abstract': 'abstract', 'tsne_x': 'tsne_x', 'tsne_y': 'tsne_y', 'umap_x': 'umap_x', 'umap_y': 'umap_y', });
lyr_covid_preprints_projects_0.set('fieldImages', {'field_1': 'Range', 'tsne_coordinates': 'TextEdit', 'umap_coordinates': 'TextEdit', 'source': 'TextEdit', 'identifier': 'TextEdit', 'identifier_type': 'TextEdit', 'posted_date': 'DateTime', 'title': 'TextEdit', 'abstract': 'TextEdit', 'tsne_x': 'TextEdit', 'tsne_y': 'TextEdit', 'umap_x': 'TextEdit', 'umap_y': 'TextEdit', });
lyr_covid_preprints_projects_0.set('fieldLabels', {'field_1': 'no label', 'tsne_coordinates': 'no label', 'umap_coordinates': 'no label', 'source': 'no label', 'identifier': 'no label', 'identifier_type': 'no label', 'posted_date': 'no label', 'title': 'no label', 'abstract': 'no label', 'tsne_x': 'no label', 'tsne_y': 'no label', 'umap_x': 'no label', 'umap_y': 'no label', });
lyr_covid_preprints_projects_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});