var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Expanded_CMA_1 = new ol.format.GeoJSON();
var features_Expanded_CMA_1 = format_Expanded_CMA_1.readFeatures(json_Expanded_CMA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Expanded_CMA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Expanded_CMA_1.addFeatures(features_Expanded_CMA_1);
var lyr_Expanded_CMA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Expanded_CMA_1, 
                style: style_Expanded_CMA_1,
                popuplayertitle: "Expanded_CMA",
                interactive: false,
                title: '<img src="styles/legend/Expanded_CMA_1.png" /> Expanded_CMA'
            });
var format_Old_CMA_2 = new ol.format.GeoJSON();
var features_Old_CMA_2 = format_Old_CMA_2.readFeatures(json_Old_CMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Old_CMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Old_CMA_2.addFeatures(features_Old_CMA_2);
var lyr_Old_CMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Old_CMA_2, 
                style: style_Old_CMA_2,
                popuplayertitle: "Old_CMA",
                interactive: false,
                title: '<img src="styles/legend/Old_CMA_2.png" /> Old_CMA'
            });
var format_Avadi_Corporation_3 = new ol.format.GeoJSON();
var features_Avadi_Corporation_3 = format_Avadi_Corporation_3.readFeatures(json_Avadi_Corporation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Avadi_Corporation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avadi_Corporation_3.addFeatures(features_Avadi_Corporation_3);
var lyr_Avadi_Corporation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Avadi_Corporation_3, 
                style: style_Avadi_Corporation_3,
                popuplayertitle: "Avadi_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Avadi_Corporation_3.png" /> Avadi_Corporation'
            });
var format_Kancheepurami_Corporation_4 = new ol.format.GeoJSON();
var features_Kancheepurami_Corporation_4 = format_Kancheepurami_Corporation_4.readFeatures(json_Kancheepurami_Corporation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kancheepurami_Corporation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kancheepurami_Corporation_4.addFeatures(features_Kancheepurami_Corporation_4);
var lyr_Kancheepurami_Corporation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kancheepurami_Corporation_4, 
                style: style_Kancheepurami_Corporation_4,
                popuplayertitle: "Kancheepurami_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Kancheepurami_Corporation_4.png" /> Kancheepurami_Corporation'
            });
var format_Tambaram_Corporation_5 = new ol.format.GeoJSON();
var features_Tambaram_Corporation_5 = format_Tambaram_Corporation_5.readFeatures(json_Tambaram_Corporation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambaram_Corporation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambaram_Corporation_5.addFeatures(features_Tambaram_Corporation_5);
var lyr_Tambaram_Corporation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambaram_Corporation_5, 
                style: style_Tambaram_Corporation_5,
                popuplayertitle: "Tambaram_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Tambaram_Corporation_5.png" /> Tambaram_Corporation'
            });
var format_GCC_6 = new ol.format.GeoJSON();
var features_GCC_6 = format_GCC_6.readFeatures(json_GCC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCC_6.addFeatures(features_GCC_6);
var lyr_GCC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCC_6, 
                style: style_GCC_6,
                popuplayertitle: "GCC",
                interactive: false,
                title: '<img src="styles/legend/GCC_6.png" /> GCC'
            });
var format_all_road_to_cumtatnega_7 = new ol.format.GeoJSON();
var features_all_road_to_cumtatnega_7 = format_all_road_to_cumtatnega_7.readFeatures(json_all_road_to_cumtatnega_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_all_road_to_cumtatnega_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_all_road_to_cumtatnega_7.addFeatures(features_all_road_to_cumtatnega_7);
var lyr_all_road_to_cumtatnega_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_all_road_to_cumtatnega_7, 
                style: style_all_road_to_cumtatnega_7,
                popuplayertitle: "all_road_to_cumta tnega",
                interactive: true,
                title: '<img src="styles/legend/all_road_to_cumtatnega_7.png" /> all_road_to_cumta tnega'
            });
var format_RoadNetwork_Chennai_link_8 = new ol.format.GeoJSON();
var features_RoadNetwork_Chennai_link_8 = format_RoadNetwork_Chennai_link_8.readFeatures(json_RoadNetwork_Chennai_link_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadNetwork_Chennai_link_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_Chennai_link_8.addFeatures(features_RoadNetwork_Chennai_link_8);
var lyr_RoadNetwork_Chennai_link_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_Chennai_link_8, 
                style: style_RoadNetwork_Chennai_link_8,
                popuplayertitle: "Road Network_Chennai_link",
                interactive: true,
                title: '<img src="styles/legend/RoadNetwork_Chennai_link_8.png" /> Road Network_Chennai_link'
            });
var format_all_CMP_roads_above_9m_9 = new ol.format.GeoJSON();
var features_all_CMP_roads_above_9m_9 = format_all_CMP_roads_above_9m_9.readFeatures(json_all_CMP_roads_above_9m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_all_CMP_roads_above_9m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_all_CMP_roads_above_9m_9.addFeatures(features_all_CMP_roads_above_9m_9);
var lyr_all_CMP_roads_above_9m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_all_CMP_roads_above_9m_9, 
                style: style_all_CMP_roads_above_9m_9,
                popuplayertitle: "all_CMP_roads_above_9m",
                interactive: true,
                title: '<img src="styles/legend/all_CMP_roads_above_9m_9.png" /> all_CMP_roads_above_9m'
            });
var format_Alljunctions_10 = new ol.format.GeoJSON();
var features_Alljunctions_10 = format_Alljunctions_10.readFeatures(json_Alljunctions_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alljunctions_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alljunctions_10.addFeatures(features_Alljunctions_10);
var lyr_Alljunctions_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alljunctions_10, 
                style: style_Alljunctions_10,
                popuplayertitle: "All junctions",
                interactive: false,
                title: '<img src="styles/legend/Alljunctions_10.png" /> All junctions'
            });
var format_Junctionsin9mroads_11 = new ol.format.GeoJSON();
var features_Junctionsin9mroads_11 = format_Junctionsin9mroads_11.readFeatures(json_Junctionsin9mroads_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junctionsin9mroads_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junctionsin9mroads_11.addFeatures(features_Junctionsin9mroads_11);
var lyr_Junctionsin9mroads_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junctionsin9mroads_11, 
                style: style_Junctionsin9mroads_11,
                popuplayertitle: "Junctions in 9m roads",
                interactive: false,
                title: '<img src="styles/legend/Junctionsin9mroads_11.png" /> Junctions in 9m roads'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Expanded_CMA_1.setVisible(true);lyr_Old_CMA_2.setVisible(true);lyr_Avadi_Corporation_3.setVisible(true);lyr_Kancheepurami_Corporation_4.setVisible(true);lyr_Tambaram_Corporation_5.setVisible(true);lyr_GCC_6.setVisible(true);lyr_all_road_to_cumtatnega_7.setVisible(true);lyr_RoadNetwork_Chennai_link_8.setVisible(true);lyr_all_CMP_roads_above_9m_9.setVisible(true);lyr_Alljunctions_10.setVisible(true);lyr_Junctionsin9mroads_11.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Expanded_CMA_1,lyr_Old_CMA_2,lyr_Avadi_Corporation_3,lyr_Kancheepurami_Corporation_4,lyr_Tambaram_Corporation_5,lyr_GCC_6,lyr_all_road_to_cumtatnega_7,lyr_RoadNetwork_Chennai_link_8,lyr_all_CMP_roads_above_9m_9,lyr_Alljunctions_10,lyr_Junctionsin9mroads_11];
lyr_Expanded_CMA_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Old_CMA_2.set('fieldAliases', {'T_CODE': 'T_CODE', 'T_NAME': 'T_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Dist_name': 'Dist_name', 'Area_Gaz': 'Area_Gaz', });
lyr_Avadi_Corporation_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MP_I': 'MP_I', 'GisKey2013': 'GisKey2013', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'taluk_code': 'taluk_code', 'taluk_name': 'taluk_name', 'lb_code': 'lb_code', 'lb_name': 'lb_name', 'lb_type': 'lb_type', 'vill_code': 'vill_code', 'vill_name': 'vill_name', 'landuse_co': 'landuse_co', 'landuse_de': 'landuse_de', 'VCODE_': 'VCODE_', 'LocalBodyT': 'LocalBodyT', 'LocalBodyN': 'LocalBodyN', 'VillageNam': 'VillageNam', 'Taluk_': 'Taluk_', 'District_': 'District_', 'BlockNo_': 'BlockNo_', 'SurveyNo_': 'SurveyNo_', 'SubDn_No_': 'SubDn_No_', 'SubDn_A_': 'SubDn_A_', 'SMP_DDP_': 'SMP_DDP_', 'DDP_Name_': 'DDP_Name_', 'CRZ_': 'CRZ_', 'ARA_': 'ARA_', 'RCA_': 'RCA_', 'CBA_': 'CBA_', 'EWS_': 'EWS_', 'IT_Corrido': 'IT_Corrido', 'MRTS_Influ': 'MRTS_Influ', 'Airport_': 'Airport_', 'StreetAlig': 'StreetAlig', 'LayoutAppr': 'LayoutAppr', 'Reclassifi': 'Reclassifi', 'GreenBelt_': 'GreenBelt_', 'ZONE_No': 'ZONE_No', 'DIVISION_N': 'DIVISION_N', 'Block_A': 'Block_A', 'ASI': 'ASI', 'IAF': 'IAF', 'Key_Adanga': 'Key_Adanga', 'Ownership': 'Ownership', 'Adangal_Re': 'Adangal_Re', 'Plot_No': 'Plot_No', 'Block_No': 'Block_No', 'Survey_No': 'Survey_No', 'AirportExp': 'AirportExp', 'AirforceSt': 'AirforceSt', 'LB2013': 'LB2013', 'ProposedLa': 'ProposedLa', 'MSB': 'MSB', 'GH': 'GH', 'Remarks': 'Remarks', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Kancheepurami_Corporation_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TALUK_': 'TALUK_', 'TALUK_ID': 'TALUK_ID', 'T_CODE': 'T_CODE', 'T_NAME': 'T_NAME', 'Vilg_Num': 'Vilg_Num', 'VilgNo_Sub': 'VilgNo_Sub', 'Vil_Name': 'Vil_Name', 'Taluk_Vilg': 'Taluk_Vilg', 'District_N': 'District_N', 'Local_Body': 'Local_Body', 'LB_Type': 'LB_Type', });
lyr_Tambaram_Corporation_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MP_I': 'MP_I', 'GisKey2013': 'GisKey2013', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'taluk_code': 'taluk_code', 'taluk_name': 'taluk_name', 'lb_code': 'lb_code', 'lb_name': 'lb_name', 'lb_type': 'lb_type', 'vill_code': 'vill_code', 'vill_name': 'vill_name', 'landuse_co': 'landuse_co', 'VCODE_': 'VCODE_', 'LocalBodyT': 'LocalBodyT', 'LocalBodyN': 'LocalBodyN', 'VillageNam': 'VillageNam', 'Taluk_': 'Taluk_', 'District_': 'District_', 'BlockNo_': 'BlockNo_', 'SurveyNo_': 'SurveyNo_', 'SubDn_No_': 'SubDn_No_', 'SubDn_A_': 'SubDn_A_', 'SMP_DDP_': 'SMP_DDP_', 'DDP_Name_': 'DDP_Name_', 'CRZ_': 'CRZ_', 'ARA_': 'ARA_', 'RCA_': 'RCA_', 'CBA_': 'CBA_', 'EWS_': 'EWS_', 'IT_Corrido': 'IT_Corrido', 'MRTS_Influ': 'MRTS_Influ', 'Airport_': 'Airport_', 'StreetAlig': 'StreetAlig', 'LayoutAppr': 'LayoutAppr', 'Reclassifi': 'Reclassifi', 'GreenBelt_': 'GreenBelt_', 'ZONE_No': 'ZONE_No', 'DIVISION_N': 'DIVISION_N', 'Block_A': 'Block_A', 'ASI': 'ASI', 'IAF': 'IAF', 'Key_Adanga': 'Key_Adanga', 'Ownership': 'Ownership', 'Adangal_Re': 'Adangal_Re', 'Plot_No': 'Plot_No', 'Block_No': 'Block_No', 'Survey_No': 'Survey_No', 'AirportExp': 'AirportExp', 'AirforceSt': 'AirforceSt', 'LB2013': 'LB2013', 'ProposedLa': 'ProposedLa', 'MSB': 'MSB', 'GH': 'GH', 'Remarks': 'Remarks', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_GCC_6.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'dist_name': 'dist_name', 'drd_dcode': 'drd_dcode', 'drddcode': 'drddcode', 'dist_mmm': 'dist_mmm', 'cen_dcode2': 'cen_dcode2', 'cen_dcod_1': 'cen_dcod_1', 'cen_dcode': 'cen_dcode', 'dcode': 'dcode', 'district': 'district', 'district_t': 'district_t', 'ed_distric': 'ed_distric', 'FID_1': 'FID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_all_road_to_cumtatnega_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'title': 'title', 'all_rcode': 'all_rcode', 'source': 'source', 'type': 'type', 'name': 'name', 'shape_leng': 'shape_leng', });
lyr_RoadNetwork_Chennai_link_8.set('fieldAliases', {'NO': 'NO', 'FROMNODENO': 'FROMNODENO', 'TONODENO': 'TONODENO', 'TYPENO': 'TYPENO', 'ROAD_NAME': 'ROAD_NAME', 'ROAD_OWNER': 'ROAD_OWNER', 'T_CW_WIDTH': 'T_CW_WIDTH', });
lyr_all_CMP_roads_above_9m_9.set('fieldAliases', {'NO': 'NO', 'FROMNODENO': 'FROMNODENO', 'TONODENO': 'TONODENO', 'TYPENO': 'TYPENO', 'ROAD_NAME': 'ROAD_NAME', 'ROAD_OWNER': 'ROAD_OWNER', 'T_CW_WIDTH': 'T_CW_WIDTH', 'length': 'length', });
lyr_Alljunctions_10.set('fieldAliases', {'NO': 'NO', 'CODE': 'CODE', 'NAME': 'NAME', 'TYPENO': 'TYPENO', 'CONTROLT~1': 'CONTROLT~1', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'T0PRT': 'T0PRT', 'VOLPRT': 'VOLPRT', 'SCTYPE': 'SCTYPE', });
lyr_Junctionsin9mroads_11.set('fieldAliases', {'NO': 'NO', 'CODE': 'CODE', 'NAME': 'NAME', 'TYPENO': 'TYPENO', 'CONTROLT~1': 'CONTROLT~1', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'T0PRT': 'T0PRT', 'VOLPRT': 'VOLPRT', 'SCTYPE': 'SCTYPE', });
lyr_Expanded_CMA_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Old_CMA_2.set('fieldImages', {'T_CODE': '', 'T_NAME': '', 'Shape_Leng': '', 'Shape_Area': '', 'Dist_name': '', 'Area_Gaz': '', });
lyr_Avadi_Corporation_3.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'MP_I': '', 'GisKey2013': '', 'dist_code': '', 'dist_name': '', 'taluk_code': '', 'taluk_name': '', 'lb_code': '', 'lb_name': '', 'lb_type': '', 'vill_code': '', 'vill_name': '', 'landuse_co': '', 'landuse_de': '', 'VCODE_': '', 'LocalBodyT': '', 'LocalBodyN': '', 'VillageNam': '', 'Taluk_': '', 'District_': '', 'BlockNo_': '', 'SurveyNo_': '', 'SubDn_No_': '', 'SubDn_A_': '', 'SMP_DDP_': '', 'DDP_Name_': '', 'CRZ_': '', 'ARA_': '', 'RCA_': '', 'CBA_': '', 'EWS_': '', 'IT_Corrido': '', 'MRTS_Influ': '', 'Airport_': '', 'StreetAlig': '', 'LayoutAppr': '', 'Reclassifi': '', 'GreenBelt_': '', 'ZONE_No': '', 'DIVISION_N': '', 'Block_A': '', 'ASI': '', 'IAF': '', 'Key_Adanga': '', 'Ownership': '', 'Adangal_Re': '', 'Plot_No': '', 'Block_No': '', 'Survey_No': '', 'AirportExp': '', 'AirforceSt': '', 'LB2013': '', 'ProposedLa': '', 'MSB': '', 'GH': '', 'Remarks': '', 'Note': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Kancheepurami_Corporation_4.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'TALUK_': '', 'TALUK_ID': '', 'T_CODE': '', 'T_NAME': '', 'Vilg_Num': '', 'VilgNo_Sub': '', 'Vil_Name': '', 'Taluk_Vilg': '', 'District_N': '', 'Local_Body': '', 'LB_Type': '', });
lyr_Tambaram_Corporation_5.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'MP_I': '', 'GisKey2013': '', 'dist_code': '', 'dist_name': '', 'taluk_code': '', 'taluk_name': '', 'lb_code': '', 'lb_name': '', 'lb_type': '', 'vill_code': '', 'vill_name': '', 'landuse_co': '', 'VCODE_': '', 'LocalBodyT': '', 'LocalBodyN': '', 'VillageNam': '', 'Taluk_': '', 'District_': '', 'BlockNo_': '', 'SurveyNo_': '', 'SubDn_No_': '', 'SubDn_A_': '', 'SMP_DDP_': '', 'DDP_Name_': '', 'CRZ_': '', 'ARA_': '', 'RCA_': '', 'CBA_': '', 'EWS_': '', 'IT_Corrido': '', 'MRTS_Influ': '', 'Airport_': '', 'StreetAlig': '', 'LayoutAppr': '', 'Reclassifi': '', 'GreenBelt_': '', 'ZONE_No': '', 'DIVISION_N': '', 'Block_A': '', 'ASI': '', 'IAF': '', 'Key_Adanga': '', 'Ownership': '', 'Adangal_Re': '', 'Plot_No': '', 'Block_No': '', 'Survey_No': '', 'AirportExp': '', 'AirforceSt': '', 'LB2013': '', 'ProposedLa': '', 'MSB': '', 'GH': '', 'Remarks': '', 'Note': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_GCC_6.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'dist_name': 'TextEdit', 'drd_dcode': 'TextEdit', 'drddcode': 'TextEdit', 'dist_mmm': 'TextEdit', 'cen_dcode2': 'TextEdit', 'cen_dcod_1': 'TextEdit', 'cen_dcode': 'TextEdit', 'dcode': 'TextEdit', 'district': 'TextEdit', 'district_t': 'TextEdit', 'ed_distric': 'TextEdit', 'FID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_all_road_to_cumtatnega_7.set('fieldImages', {'ogc_fid': '', 'title': '', 'all_rcode': '', 'source': '', 'type': '', 'name': '', 'shape_leng': '', });
lyr_RoadNetwork_Chennai_link_8.set('fieldImages', {'NO': 'Range', 'FROMNODENO': 'Range', 'TONODENO': 'Range', 'TYPENO': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'ROAD_OWNER': 'TextEdit', 'T_CW_WIDTH': 'TextEdit', });
lyr_all_CMP_roads_above_9m_9.set('fieldImages', {'NO': 'Range', 'FROMNODENO': 'Range', 'TONODENO': 'Range', 'TYPENO': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'ROAD_OWNER': 'TextEdit', 'T_CW_WIDTH': 'TextEdit', 'length': 'TextEdit', });
lyr_Alljunctions_10.set('fieldImages', {'NO': '', 'CODE': '', 'NAME': '', 'TYPENO': '', 'CONTROLT~1': '', 'XCOORD': '', 'YCOORD': '', 'T0PRT': '', 'VOLPRT': '', 'SCTYPE': '', });
lyr_Junctionsin9mroads_11.set('fieldImages', {'NO': '', 'CODE': '', 'NAME': '', 'TYPENO': '', 'CONTROLT~1': '', 'XCOORD': '', 'YCOORD': '', 'T0PRT': '', 'VOLPRT': '', 'SCTYPE': '', });
lyr_Expanded_CMA_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Old_CMA_2.set('fieldLabels', {'T_CODE': 'no label', 'T_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Dist_name': 'no label', 'Area_Gaz': 'no label', });
lyr_Avadi_Corporation_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MP_I': 'no label', 'GisKey2013': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'taluk_code': 'no label', 'taluk_name': 'no label', 'lb_code': 'no label', 'lb_name': 'no label', 'lb_type': 'no label', 'vill_code': 'no label', 'vill_name': 'no label', 'landuse_co': 'no label', 'landuse_de': 'no label', 'VCODE_': 'no label', 'LocalBodyT': 'no label', 'LocalBodyN': 'no label', 'VillageNam': 'no label', 'Taluk_': 'no label', 'District_': 'no label', 'BlockNo_': 'no label', 'SurveyNo_': 'no label', 'SubDn_No_': 'no label', 'SubDn_A_': 'no label', 'SMP_DDP_': 'no label', 'DDP_Name_': 'no label', 'CRZ_': 'no label', 'ARA_': 'no label', 'RCA_': 'no label', 'CBA_': 'no label', 'EWS_': 'no label', 'IT_Corrido': 'no label', 'MRTS_Influ': 'no label', 'Airport_': 'no label', 'StreetAlig': 'no label', 'LayoutAppr': 'no label', 'Reclassifi': 'no label', 'GreenBelt_': 'no label', 'ZONE_No': 'no label', 'DIVISION_N': 'no label', 'Block_A': 'no label', 'ASI': 'no label', 'IAF': 'no label', 'Key_Adanga': 'no label', 'Ownership': 'no label', 'Adangal_Re': 'no label', 'Plot_No': 'no label', 'Block_No': 'no label', 'Survey_No': 'no label', 'AirportExp': 'no label', 'AirforceSt': 'no label', 'LB2013': 'no label', 'ProposedLa': 'no label', 'MSB': 'no label', 'GH': 'no label', 'Remarks': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Kancheepurami_Corporation_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TALUK_': 'no label', 'TALUK_ID': 'no label', 'T_CODE': 'no label', 'T_NAME': 'no label', 'Vilg_Num': 'no label', 'VilgNo_Sub': 'no label', 'Vil_Name': 'no label', 'Taluk_Vilg': 'no label', 'District_N': 'no label', 'Local_Body': 'no label', 'LB_Type': 'no label', });
lyr_Tambaram_Corporation_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MP_I': 'no label', 'GisKey2013': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'taluk_code': 'no label', 'taluk_name': 'no label', 'lb_code': 'no label', 'lb_name': 'no label', 'lb_type': 'no label', 'vill_code': 'no label', 'vill_name': 'no label', 'landuse_co': 'no label', 'VCODE_': 'no label', 'LocalBodyT': 'no label', 'LocalBodyN': 'no label', 'VillageNam': 'no label', 'Taluk_': 'no label', 'District_': 'no label', 'BlockNo_': 'no label', 'SurveyNo_': 'no label', 'SubDn_No_': 'no label', 'SubDn_A_': 'no label', 'SMP_DDP_': 'no label', 'DDP_Name_': 'no label', 'CRZ_': 'no label', 'ARA_': 'no label', 'RCA_': 'no label', 'CBA_': 'no label', 'EWS_': 'no label', 'IT_Corrido': 'no label', 'MRTS_Influ': 'no label', 'Airport_': 'no label', 'StreetAlig': 'no label', 'LayoutAppr': 'no label', 'Reclassifi': 'no label', 'GreenBelt_': 'no label', 'ZONE_No': 'no label', 'DIVISION_N': 'no label', 'Block_A': 'no label', 'ASI': 'no label', 'IAF': 'no label', 'Key_Adanga': 'no label', 'Ownership': 'no label', 'Adangal_Re': 'no label', 'Plot_No': 'no label', 'Block_No': 'no label', 'Survey_No': 'no label', 'AirportExp': 'no label', 'AirforceSt': 'no label', 'LB2013': 'no label', 'ProposedLa': 'no label', 'MSB': 'no label', 'GH': 'no label', 'Remarks': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_GCC_6.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'dist_name': 'no label', 'drd_dcode': 'no label', 'drddcode': 'no label', 'dist_mmm': 'no label', 'cen_dcode2': 'no label', 'cen_dcod_1': 'no label', 'cen_dcode': 'no label', 'dcode': 'no label', 'district': 'no label', 'district_t': 'no label', 'ed_distric': 'no label', 'FID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_all_road_to_cumtatnega_7.set('fieldLabels', {'ogc_fid': 'no label', 'title': 'no label', 'all_rcode': 'no label', 'source': 'no label', 'type': 'inline label - always visible', 'name': 'inline label - always visible', 'shape_leng': 'inline label - always visible', });
lyr_RoadNetwork_Chennai_link_8.set('fieldLabels', {'NO': 'no label', 'FROMNODENO': 'no label', 'TONODENO': 'no label', 'TYPENO': 'no label', 'ROAD_NAME': 'inline label - always visible', 'ROAD_OWNER': 'inline label - always visible', 'T_CW_WIDTH': 'inline label - always visible', });
lyr_all_CMP_roads_above_9m_9.set('fieldLabels', {'NO': 'no label', 'FROMNODENO': 'no label', 'TONODENO': 'no label', 'TYPENO': 'no label', 'ROAD_NAME': 'inline label - always visible', 'ROAD_OWNER': 'inline label - always visible', 'T_CW_WIDTH': 'inline label - always visible', 'length': 'inline label - always visible', });
lyr_Alljunctions_10.set('fieldLabels', {'NO': 'no label', 'CODE': 'no label', 'NAME': 'no label', 'TYPENO': 'no label', 'CONTROLT~1': 'no label', 'XCOORD': 'no label', 'YCOORD': 'no label', 'T0PRT': 'no label', 'VOLPRT': 'no label', 'SCTYPE': 'no label', });
lyr_Junctionsin9mroads_11.set('fieldLabels', {'NO': 'no label', 'CODE': 'no label', 'NAME': 'no label', 'TYPENO': 'no label', 'CONTROLT~1': 'no label', 'XCOORD': 'no label', 'YCOORD': 'no label', 'T0PRT': 'no label', 'VOLPRT': 'no label', 'SCTYPE': 'no label', });
lyr_Junctionsin9mroads_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});