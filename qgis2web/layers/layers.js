var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Streams_1 = new ol.format.GeoJSON();
var features_Streams_1 = format_Streams_1.readFeatures(json_Streams_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_1.addFeatures(features_Streams_1);
var lyr_Streams_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Streams_1, 
                style: style_Streams_1,
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_1_0.png" /> Foraging, Migrating, and Overwintering<br />\
    <img src="styles/legend/Streams_1_1.png" /> Spawning and Rearing<br />\
    <img src="styles/legend/Streams_1_2.png" /> Unknown<br />'
        });
var format_Lakes_2 = new ol.format.GeoJSON();
var features_Lakes_2 = format_Lakes_2.readFeatures(json_Lakes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakes_2.addFeatures(features_Lakes_2);
var lyr_Lakes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lakes_2, 
                style: style_Lakes_2,
                interactive: true,
                title: '<img src="styles/legend/Lakes_2.png" /> Lakes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Streams_1.setVisible(true);lyr_Lakes_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Streams_1,lyr_Lakes_2];
lyr_Streams_1.set('fieldAliases', {'FID_bt_dis': 'FID_bt_dis', 'BTID': 'BTID', 'NAME': 'NAME', 'OCCUPANCY': 'OCCUPANCY', 'STATE': 'STATE', 'STATE2': 'STATE2', 'H_USE_TYPE': 'H_USE_TYPE', 'SCALE': 'SCALE', 'HYDRO_SRC': 'HYDRO_SRC', 'EDIT_TYPE': 'EDIT_TYPE', 'EDIT_COMNT': 'EDIT_COMNT', 'BT_SOURCE': 'BT_SOURCE', 'WaWaterTyp': 'WaWaterTyp', 'FWS_OFFICE': 'FWS_OFFICE', 'Review': 'Review', 'FWSID': 'FWSID', 'PROP_CH': 'PROP_CH', 'New': 'New', 'LocalPop': 'LocalPop', 'FID_Core_A': 'FID_Core_A', 'Core_Area': 'Core_Area', 'State_1': 'State_1', 'Recovery_U': 'Recovery_U', 'Management': 'Management', 'CHSU': 'CHSU', 'CHU': 'CHU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Acres': 'Acres', 'Hectares': 'Hectares', 'LP_Name': 'LP_Name', 'Notes': 'Notes', 'RecovUnit': 'RecovUnit', 'MultiPops': 'MultiPops', 'InCOED': 'InCOED', 'Geo_Source': 'Geo_Source', 'OldPopID': 'OldPopID', 'NewPopID': 'NewPopID', 'CoreArea11': 'CoreArea11', 'WB_ID': 'WB_ID', '2005_CH': '2005_CH', '2010_CH': '2010_CH', 'TribTo': 'TribTo', 'HUC_4': 'HUC_4', 'YEAR_ADDED': 'YEAR_ADDED', 'ADDED_FROM': 'ADDED_FROM', 'DETERMINAT': 'DETERMINAT', 'Source': 'Source', 'CONFIDENCE': 'CONFIDENCE', });
lyr_Lakes_2.set('fieldAliases', {'BTID': 'BTID', 'Name': 'Name', 'Prop_CH': 'Prop_CH', 'State': 'State', 'RecoveryUn': 'RecoveryUn', 'CHU_Num': 'CHU_Num', 'CHU': 'CHU', 'CHSU': 'CHSU', 'H_USE_TYPE': 'H_USE_TYPE', 'OCCUPANCY': 'OCCUPANCY', 'Acres': 'Acres', 'Hectares': 'Hectares', 'FCH': 'FCH', 'Exclusion': 'Exclusion', });
lyr_Streams_1.set('fieldImages', {'FID_bt_dis': 'Range', 'BTID': 'TextEdit', 'NAME': 'TextEdit', 'OCCUPANCY': 'TextEdit', 'STATE': 'TextEdit', 'STATE2': 'TextEdit', 'H_USE_TYPE': 'TextEdit', 'SCALE': 'Range', 'HYDRO_SRC': 'TextEdit', 'EDIT_TYPE': 'Range', 'EDIT_COMNT': 'TextEdit', 'BT_SOURCE': 'TextEdit', 'WaWaterTyp': 'TextEdit', 'FWS_OFFICE': 'TextEdit', 'Review': 'Range', 'FWSID': 'Range', 'PROP_CH': 'Range', 'New': 'Range', 'LocalPop': 'Range', 'FID_Core_A': 'Range', 'Core_Area': 'TextEdit', 'State_1': 'TextEdit', 'Recovery_U': 'TextEdit', 'Management': 'TextEdit', 'CHSU': 'TextEdit', 'CHU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Acres': 'TextEdit', 'Hectares': 'TextEdit', 'LP_Name': 'TextEdit', 'Notes': 'TextEdit', 'RecovUnit': 'TextEdit', 'MultiPops': 'Range', 'InCOED': 'TextEdit', 'Geo_Source': 'TextEdit', 'OldPopID': 'Range', 'NewPopID': 'Range', 'CoreArea11': 'TextEdit', 'WB_ID': 'Range', '2005_CH': 'TextEdit', '2010_CH': 'TextEdit', 'TribTo': 'TextEdit', 'HUC_4': 'TextEdit', 'YEAR_ADDED': 'Range', 'ADDED_FROM': 'TextEdit', 'DETERMINAT': 'Range', 'Source': 'TextEdit', 'CONFIDENCE': 'Range', });
lyr_Lakes_2.set('fieldImages', {'BTID': 'TextEdit', 'Name': 'TextEdit', 'Prop_CH': 'Range', 'State': 'TextEdit', 'RecoveryUn': 'TextEdit', 'CHU_Num': 'Range', 'CHU': 'TextEdit', 'CHSU': 'TextEdit', 'H_USE_TYPE': 'TextEdit', 'OCCUPANCY': 'TextEdit', 'Acres': 'TextEdit', 'Hectares': 'TextEdit', 'FCH': 'Range', 'Exclusion': 'TextEdit', });
lyr_Streams_1.set('fieldLabels', {'FID_bt_dis': 'no label', 'BTID': 'no label', 'NAME': 'no label', 'OCCUPANCY': 'no label', 'STATE': 'no label', 'STATE2': 'no label', 'H_USE_TYPE': 'no label', 'SCALE': 'no label', 'HYDRO_SRC': 'no label', 'EDIT_TYPE': 'no label', 'EDIT_COMNT': 'no label', 'BT_SOURCE': 'no label', 'WaWaterTyp': 'no label', 'FWS_OFFICE': 'no label', 'Review': 'no label', 'FWSID': 'no label', 'PROP_CH': 'no label', 'New': 'no label', 'LocalPop': 'no label', 'FID_Core_A': 'no label', 'Core_Area': 'no label', 'State_1': 'no label', 'Recovery_U': 'no label', 'Management': 'no label', 'CHSU': 'no label', 'CHU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Acres': 'no label', 'Hectares': 'no label', 'LP_Name': 'no label', 'Notes': 'no label', 'RecovUnit': 'no label', 'MultiPops': 'no label', 'InCOED': 'no label', 'Geo_Source': 'no label', 'OldPopID': 'no label', 'NewPopID': 'no label', 'CoreArea11': 'no label', 'WB_ID': 'no label', '2005_CH': 'no label', '2010_CH': 'no label', 'TribTo': 'no label', 'HUC_4': 'no label', 'YEAR_ADDED': 'no label', 'ADDED_FROM': 'no label', 'DETERMINAT': 'no label', 'Source': 'no label', 'CONFIDENCE': 'no label', });
lyr_Lakes_2.set('fieldLabels', {'BTID': 'no label', 'Name': 'no label', 'Prop_CH': 'no label', 'State': 'no label', 'RecoveryUn': 'no label', 'CHU_Num': 'no label', 'CHU': 'no label', 'CHSU': 'no label', 'H_USE_TYPE': 'no label', 'OCCUPANCY': 'no label', 'Acres': 'no label', 'Hectares': 'no label', 'FCH': 'no label', 'Exclusion': 'no label', });
lyr_Lakes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});