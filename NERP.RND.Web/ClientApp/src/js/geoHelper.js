//var GeoHelper = {

//    getBrowserLocation: function () {
//        var options = { enableHighAccuracy: true, maximumAge: 75000 };

//        if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(function (position) {
//                return { lat: position.coords.latitude, lng: position.coords.longitude };
//            });
//        } else {
//            return { lat: 6.261696, lng: 100.426226 };
//        }
        
//        return { lat: 6.261696, lng: 100.426226 };
//    },

//    initializeEntities: function () {

//        var iconBase = '/images/entity_icon/';

//        return {
//            pop: {
//                geoType: 'point',
//                label: 'Point of Presence',
//                icon: iconBase + 'pop.png',
//                ParentType:'Network Layers'
//            },
//            splice: {
//                geoType: 'point',
//                label: 'Splice Closure',
//                icon: iconBase + 'spliceclosure.png',
//                ParentType: 'Network Layers'
//            },
//            splitter: {
//                geoType: 'point',
//                label: 'Splitter',
//                icon: iconBase + 'splitter.png',
//                 ParentType: 'Network Layers'
//            },
//            pole: {
//                geoType: 'point',
//                label: 'Pole',
//                icon: iconBase + 'pole.png',
//                ParentType: 'Network Layers'
//            },
//            chamber: {
//                geoType: 'point',
//                label: 'Chamber',
//                icon: iconBase + 'chamber.png',
//                ParentType: 'Network Layers'
//            },
//            odf: {
//                geoType: 'point',
//                label: 'ODF',
//                icon: iconBase + 'odf.png',
//                ParentType: 'Network Layers'
//            },
//            duct: {
//                geoType: 'point',
//                label: 'Duct',
//                icon: iconBase + 'duct.png',
//                ParentType: 'Network Layers'
//            }
//        };
//    },

//    //convertStringToLatLng: function (latlngString) {

//    //    if (latlngString == null || latlngString == '') return null;

//    //    var coord = latlngString.split(",");
//    //    return { lat: parseFloat(coord[0]), lng: parseFloat(coord[1]) };
//    //},


//}
