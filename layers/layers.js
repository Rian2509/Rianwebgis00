var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Admin_Kecamatan_TNG_1 = new ol.format.GeoJSON();
var features_Admin_Kecamatan_TNG_1 = format_Admin_Kecamatan_TNG_1.readFeatures(json_Admin_Kecamatan_TNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kecamatan_TNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kecamatan_TNG_1.addFeatures(features_Admin_Kecamatan_TNG_1);
var lyr_Admin_Kecamatan_TNG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Admin_Kecamatan_TNG_1, 
                style: style_Admin_Kecamatan_TNG_1,
                popuplayertitle: 'Admin_Kecamatan_TNG',
                interactive: false,
                title: '<img src="styles/legend/Admin_Kecamatan_TNG_1.png" /> Admin_Kecamatan_TNG'
            });
var format_Admin_Kelurahan_TNG_2 = new ol.format.GeoJSON();
var features_Admin_Kelurahan_TNG_2 = format_Admin_Kelurahan_TNG_2.readFeatures(json_Admin_Kelurahan_TNG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kelurahan_TNG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kelurahan_TNG_2.addFeatures(features_Admin_Kelurahan_TNG_2);
var lyr_Admin_Kelurahan_TNG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Admin_Kelurahan_TNG_2, 
                style: style_Admin_Kelurahan_TNG_2,
                popuplayertitle: 'Admin_Kelurahan_TNG',
                interactive: true,
    title: 'Admin_Kelurahan_TNG<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_0.png" /> Alamjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_1.png" /> Batuceper<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_2.png" /> Batujaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_3.png" /> Batusari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_4.png" /> Bencongan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_5.png" /> Benda<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_6.png" /> Blendung<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_7.png" /> Bojongjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_8.png" /> Bugel<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_9.png" /> Cibodas<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_10.png" /> Cibodasbaru<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_11.png" /> Cibodassari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_12.png" /> Cikokol<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_13.png" /> Cimone<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_14.png" /> Cimonejaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_15.png" /> Cipadu<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_16.png" /> Cipadujaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_17.png" /> Cipete<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_18.png" /> Cipondoh<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_19.png" /> Gaga<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_20.png" /> Gandasari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_21.png" /> Gebangraya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_22.png" /> Gembor<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_23.png" /> Gerendeng<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_24.png" /> Gondrong<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_25.png" /> Jatake<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_26.png" /> Jatiuwung<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_27.png" /> Jurumudi<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_28.png" /> Jurumudibaru<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_29.png" /> Kaongjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_30.png" /> Karang Tengah<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_31.png" /> Karang Timur<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_32.png" /> Karanganyar<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_33.png" /> Karangmulya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_34.png" /> Karangsari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_35.png" /> Karawaci<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_36.png" /> Karawacibaru<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_37.png" /> Kebon Besar<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_38.png" /> Kedaung Wetan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_39.png" /> Kedaungbaru<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_40.png" /> Keroncong<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_41.png" /> Kreo<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_42.png" /> Kreo Selatan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_43.png" /> Kunciran<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_44.png" /> Larangan Selatan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_45.png" /> Larangan Utara<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_46.png" /> Laranganindah<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_47.png" /> Manisjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_48.png" /> Margasari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_49.png" /> Mekarsari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_50.png" /> Nambojaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_51.png" /> Neglasari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_52.png" /> Nusajaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_53.png" /> Pabuaran<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_54.png" /> Pabuarantumpeng<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_55.png" /> Padurenan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_56.png" /> Pajang<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_57.png" /> Paninggilan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_58.png" /> Paninggilan Utara<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_59.png" /> Panunggangan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_60.png" /> Panunggangan Barat<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_61.png" /> Parungjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_62.png" /> Parungserab<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_63.png" /> Pasarbaru<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_64.png" /> Pasirjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_65.png" /> Periuk<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_66.png" /> Periukjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_67.png" /> Petir<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_68.png" /> Pinang<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_69.png" /> Pondokbahar<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_70.png" /> Porisgaga<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_71.png" /> Porisgagabaru<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_72.png" /> Porisjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_73.png" /> Porisplawad<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_74.png" /> Sangiangjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_75.png" /> Selapajangjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_76.png" /> Sudimara Barat<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_77.png" /> Sudimara Selatan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_78.png" /> Sudimara Timur<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_79.png" /> Sudimarajaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_80.png" /> Sukajadi<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_81.png" /> Sukarasa<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_82.png" /> Sukasari<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_83.png" /> Sumurpancing<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_84.png" /> Tajur<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_85.png" /> Tanahtinggi<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_86.png" /> Uwungjaya<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_87.png" /> <br />' });
var format_Jalan_TNG_3 = new ol.format.GeoJSON();
var features_Jalan_TNG_3 = format_Jalan_TNG_3.readFeatures(json_Jalan_TNG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_TNG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_TNG_3.addFeatures(features_Jalan_TNG_3);
var lyr_Jalan_TNG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_TNG_3, 
                style: style_Jalan_TNG_3,
                popuplayertitle: 'Jalan_TNG',
                interactive: true,
    title: 'Jalan_TNG<br />\
    <img src="styles/legend/Jalan_TNG_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_TNG_3_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_TNG_3_2.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/Jalan_TNG_3_3.png" /> <br />' });
var format_Rumah_Sakit_TNG_4 = new ol.format.GeoJSON();
var features_Rumah_Sakit_TNG_4 = format_Rumah_Sakit_TNG_4.readFeatures(json_Rumah_Sakit_TNG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_TNG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_TNG_4.addFeatures(features_Rumah_Sakit_TNG_4);
var lyr_Rumah_Sakit_TNG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_TNG_4, 
                style: style_Rumah_Sakit_TNG_4,
                popuplayertitle: 'Rumah_Sakit_TNG',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_TNG_4.png" /> Rumah_Sakit_TNG'
            });
var format_Puskesmas_TNG_5 = new ol.format.GeoJSON();
var features_Puskesmas_TNG_5 = format_Puskesmas_TNG_5.readFeatures(json_Puskesmas_TNG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_TNG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_TNG_5.addFeatures(features_Puskesmas_TNG_5);
var lyr_Puskesmas_TNG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_TNG_5, 
                style: style_Puskesmas_TNG_5,
                popuplayertitle: 'Puskesmas_TNG',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_TNG_5.png" /> Puskesmas_TNG'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Admin_Kecamatan_TNG_1.setVisible(true);lyr_Admin_Kelurahan_TNG_2.setVisible(true);lyr_Jalan_TNG_3.setVisible(true);lyr_Rumah_Sakit_TNG_4.setVisible(true);lyr_Puskesmas_TNG_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Admin_Kecamatan_TNG_1,lyr_Admin_Kelurahan_TNG_2,lyr_Jalan_TNG_3,lyr_Rumah_Sakit_TNG_4,lyr_Puskesmas_TNG_5];
lyr_Admin_Kecamatan_TNG_1.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Admin_Kelurahan_TNG_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_TNG_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Rumah_Sakit_TNG_4.set('fieldAliases', {'namobj': 'namobj', 'rsalamat': 'rsalamat', 'jplyrs': 'jplyrs', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', });
lyr_Puskesmas_TNG_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'JPLPKM': 'JPLPKM', 'KMPPKM': 'KMPPKM', 'PKMKAT': 'PKMKAT', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', 'KWKPKM': 'KWKPKM', });
lyr_Admin_Kecamatan_TNG_1.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Admin_Kelurahan_TNG_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_TNG_3.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Rumah_Sakit_TNG_4.set('fieldImages', {'namobj': 'TextEdit', 'rsalamat': 'TextEdit', 'jplyrs': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', });
lyr_Puskesmas_TNG_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'JPLPKM': '', 'KMPPKM': '', 'PKMKAT': '', 'PKMKODE': '', 'PKMLMT': '', 'KWKPKM': '', });
lyr_Admin_Kecamatan_TNG_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', });
lyr_Admin_Kelurahan_TNG_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_TNG_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_Rumah_Sakit_TNG_4.set('fieldLabels', {'namobj': 'inline label - always visible', 'rsalamat': 'no label', 'jplyrs': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', });
lyr_Puskesmas_TNG_5.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'JPLPKM': 'no label', 'KMPPKM': 'no label', 'PKMKAT': 'no label', 'PKMKODE': 'no label', 'PKMLMT': 'no label', 'KWKPKM': 'no label', });
lyr_Puskesmas_TNG_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});