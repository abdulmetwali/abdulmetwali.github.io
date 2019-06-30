var wms_layers = [];
var lyr_Espoonopaskartta_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kartat.espoo.fi/teklaogcweb/wms.ashx",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Opaskartta",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Espoon opaskartta",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Espoonopaskartta_0, 0]);var format_summaryofnegativecomments_1 = new ol.format.GeoJSON();
var features_summaryofnegativecomments_1 = format_summaryofnegativecomments_1.readFeatures(json_summaryofnegativecomments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_summaryofnegativecomments_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_summaryofnegativecomments_1.addFeatures(features_summaryofnegativecomments_1);var lyr_summaryofnegativecomments_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_summaryofnegativecomments_1, 
                style: style_summaryofnegativecomments_1,
                title: '<img src="styles/legend/summaryofnegativecomments_1.png" /> summary of negative comments'
            });var format_summaryofpositivecomments_2 = new ol.format.GeoJSON();
var features_summaryofpositivecomments_2 = format_summaryofpositivecomments_2.readFeatures(json_summaryofpositivecomments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_summaryofpositivecomments_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_summaryofpositivecomments_2.addFeatures(features_summaryofpositivecomments_2);var lyr_summaryofpositivecomments_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_summaryofpositivecomments_2, 
                style: style_summaryofpositivecomments_2,
                title: '<img src="styles/legend/summaryofpositivecomments_2.png" /> summary of positive comments'
            });

lyr_Espoonopaskartta_0.setVisible(true);lyr_summaryofnegativecomments_1.setVisible(true);lyr_summaryofpositivecomments_2.setVisible(true);
var layersList = [lyr_Espoonopaskartta_0,lyr_summaryofnegativecomments_1,lyr_summaryofpositivecomments_2];
lyr_summaryofnegativecomments_1.set('fieldAliases', {'respondent ID': 'respondent ID', 'Traffic condition': 'Traffic condition', 'Lighting condition': 'Lighting condition', 'Weather': 'Weather', 'Reason': 'Reason', 'Further description': 'Further description', });
lyr_summaryofpositivecomments_2.set('fieldAliases', {'respondent ID': 'respondent ID', 'Traffic condition': 'Traffic condition', 'Lighting condition': 'Lighting condition', 'Weather': 'Weather', 'Description': 'Description', 'Further description': 'Further description', });
lyr_summaryofnegativecomments_1.set('fieldImages', {'respondent ID': 'Range', 'Traffic condition': 'TextEdit', 'Lighting condition': 'TextEdit', 'Weather': 'TextEdit', 'Reason': 'TextEdit', 'Further description': 'TextEdit', });
lyr_summaryofpositivecomments_2.set('fieldImages', {'respondent ID': 'Range', 'Traffic condition': 'TextEdit', 'Lighting condition': 'TextEdit', 'Weather': 'TextEdit', 'Description': 'TextEdit', 'Further description': 'TextEdit', });
lyr_summaryofnegativecomments_1.set('fieldLabels', {'respondent ID': 'no label', 'Traffic condition': 'header label', 'Lighting condition': 'header label', 'Weather': 'header label', 'Reason': 'header label', 'Further description': 'header label', });
lyr_summaryofpositivecomments_2.set('fieldLabels', {'respondent ID': 'no label', 'Traffic condition': 'header label', 'Lighting condition': 'header label', 'Weather': 'header label', 'Description': 'header label', 'Further description': 'header label', });
lyr_summaryofpositivecomments_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});