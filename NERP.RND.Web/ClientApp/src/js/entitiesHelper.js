
var fromComponent = null;

var tempElements = [];
var _mapEntitiesIconBase = '/images/map_entities/';

var entitiesHelper = {

   initializeEntitesCreation: function (overlay) {

      var entityItems = $('.entityMenu img');

      for (var i = 0; i < entityItems.length; i++) {

         $(entityItems[i]).draggable({

            helper: 'clone', containment: '#designMap',

            stop: function (e) {

               var dropPoint = new google.maps.Point(e.pageX, e.pageY - 100);
               var entityType = $(this).attr("name");

               var latLng = GMHelper.getLatLongFromDragPoint(overlay, dropPoint);


               createEntity(entityType, latLng);
            }
         });
      }


      $("#btnSaveEelementCreation").click(function () {

         fromComponent.plotPointFromElementLibrary(tempElements);

      });
   },

   clearCreatedElements: function () {
      tempElements.length = 0;
   }

  
};


function createEntity(type, point,) {

   var entity = {};

   if (type.toLowerCase() != "cable") {
      entity["entity"] = type;
    
    

      var entityIcon = fromComponent.getIcon(type);

      var id = new Date().getDate() + ":" + new Date().getMinutes() + ":" + new Date().getHours() + ":" + new Date().getSeconds();
      var marker = GMHelper.createMarker(point, "../" + entityIcon.icon.url, true, id, fromComponent.map);
      marker.setTitle(entity.entityType);
      entity['mapObject'] = marker;
      entity.mapObject.setMap(fromComponent.map);

      tempElements.push(entity);

   }
   else {

      entity["entity"] = type;
  
      var id = new Date().getDate() + ":" + new Date().getMinutes() + ":" + new Date().getHours() + ":" + new Date().getSeconds();

      var polyline = new google.maps.Polyline({
         strokeColor: '#0000ff',
         strokeOpacity: 1.0,
         strokeWeight: 3,
         editable: true,
         id: id
      });

      var path = polyline.getPath();
      polyline.setMap(fromComponent.map);

      GMHelper.clearClickListener(fromComponent.map, "click");

      GMHelper.addListener(fromComponent.map, "click", function (event) {
         polyline.setEditable(true);
         path = polyline.getPath();
         path.push(event.latLng);
      });

      fromComponent.map.setOptions({ draggableCursor: 'crosshair' });

      GMHelper.addListener(polyline, "click", function (event) {
         GMHelper.clearClickListener(polyline, "click");
       
         GMHelper.clearClickListener(fromComponent.map, "click");

         fromComponent.map.setOptions({ draggableCursor: '' });


         polyline.setEditable(false);

         entity['mapObject'] = polyline;
        
         tempElements.push(entity);

      });
   }
}
