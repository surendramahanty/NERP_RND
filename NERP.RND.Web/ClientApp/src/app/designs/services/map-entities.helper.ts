import { GMapsHelper } from '../../common/geo/googleMapsHelper';
import { GeoHelper } from '../../common/geo/geoHelper';

declare var google: any;
declare var GMHelper: any;
export class MapEntitiesHelper {

    map: any;

    constructor(map: any) {
        this.map = map;
    }

    drawPoint(entity: any, icon: any, isEditable: boolean, attachMapObject: boolean) {

        var coordinates = [];

        if (entity.geometry)
            coordinates = entity.geometry.coordinates;
        else if (entity.coordinates)
            coordinates = entity.coordinates;

        let location = GeoHelper.convertToPosition(coordinates);

        let marker = new google.maps.Marker({
            position: location,
            draggable: isEditable,
            cursor: 'pointer',
            id: entity.id,
            data: entity,
            //icon: {
            //    url: icon,
            //    ////origin: new google.maps.Point(96, 0),
            //    ////size: new google.maps.Size(96, 96),
            //    ////scaledSize: new google.maps.Size(192, 96),
            //    //anchor: new google.maps.Point(10, 10)
            //},
            icon: icon,
            map: this.map
        });

        //https://pepsized.com/customize-your-google-map-markers/

        marker.setTitle(entity.layerName);

        if (attachMapObject)
         entity['mapObject'] = marker;

        return marker;
    }

   drawLine(entity: any, lineColor: any, strokeWeight: number, isEditable: boolean, attachMapObject: boolean) {

      let colour = "#000000";
      let lineWeight = 3;

      if (lineColor)
         colour = lineColor;

      if (strokeWeight)
         lineWeight = strokeWeight;

      let polyline = new google.maps.Polyline({
         strokeColor: colour,
         strokeOpacity: 1.0,
         strokeWeight: lineWeight,
         editable: isEditable,
         data: entity,
         id: entity.id,
         map: this.map
      });

      let path = polyline.getPath();

      polyline.setMap(this.map);

      if (attachMapObject)
         entity['mapObject'] = polyline;

      if (entity.geometry != undefined) {
         if (entity.geometry.coordinates.length > 1) {
            for (var i = 0; i < entity.geometry.coordinates.length; i++) {
               path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
            }
            polyline.setEditable(false);
         }
      }
      else {

         GMHelper.clearClickListener(this.map, "click");

         GMHelper.addListener(this.map, "click", function (event) {
            polyline.setEditable(true);
            path = polyline.getPath();
            path.push(event.latLng);
         });

         this.map.setOptions({ draggableCursor: 'crosshair' });

         GMHelper.addListener(polyline, "rightclick", function (event) {
            GMHelper.clearClickListener(polyline, "rightclick");

            GMHelper.clearClickListener(polyline.map, "click");

            polyline.map.setOptions({ draggableCursor: '' });

            polyline.setEditable(false);

            entity['mapObject'] = polyline;

            return polyline;
         })
      }


      GMapsHelper.addListener(polyline, 'mouseover', function (latlng) {
         polyline.setOptions({ strokeColor: '#FF0000', strokeWeight: lineWeight + 2 });
      });

      GMapsHelper.addListener(polyline, 'mouseout', function (latlng) {
         polyline.setOptions({ strokeColor: lineColor, strokeWeight: lineWeight });
      });

      return polyline;
   }

    drawPolygon(entity: any, lineColor: string, strokeWeight: number, isEditable: boolean, attachMapObject: boolean) {

        let colour = "#000000";
        let lineWeight = 3;

        if (lineColor)
            colour = lineColor;

        if (strokeWeight)
            lineWeight = strokeWeight;

        let polygon = new google.maps.Polygon({
            strokeColor: colour,
            strokeOpacity: 1.0,
            strokeWeight: lineWeight,
            editable: isEditable,
            data: entity,
            id: entity.id
        });

        let path = polygon.getPath();

        polygon.setMap(this.map);

        if (attachMapObject)
            entity['mapObject'] = polygon;

        if (entity.geometry.coordinates.length > 1) {

            for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
            }

            polygon.setEditable(false);
        }

        return polygon;
    }

    removeMapObjects(entities: any) {

        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    if (x['mapObject']) {
                        x['mapObject'].setMap(null);
                    }
                });
            }
            else {
                if (entities['mapObject']) {
                    entities['mapObject'].setMap(null);
                }
            }
        }
    }

    //removeLines(entities: any) {

    //    if (entities) {
    //        if (entities.length > 0) {
    //            entities.forEach(x => {
    //                if (x['mapObject']) {
    //                    x['mapObject'].setMap(null);
    //                }
    //            });
    //        }
    //        else {
    //            if (entities['mapObject']) {
    //                entities['mapObject'].setMap(null);
    //            }
    //        }
    //    }
    //}
    drawDuctLine(entity: any, lineColor: any, strokeWeight: number, isEditable: boolean, attachMapObject: boolean) {
        let polyline: any;
        let lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };

        polyline = new google.maps.Polyline({
            strokeColor: '#FFA500',
            strokeOpacity: 0,
            editable: isEditable,
            data: entity,
            id: entity.id,
            map: this.map,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }],

        });

        let path = polyline.getPath();

        polyline.setMap(this.map);

        if (attachMapObject)
            entity['mapObject'] = polyline;

        if (entity.geometry != undefined) {
            if (entity.geometry.coordinates.length > 1) {
                for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                    path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
                }
                polyline.setEditable(false);
            }
        }
        else {

            GMHelper.clearClickListener(this.map, "click");

            GMHelper.addListener(this.map, "click", function (event) {
                polyline.setEditable(true);
                path = polyline.getPath();
                path.push(event.latLng);
            });

            this.map.setOptions({ draggableCursor: 'crosshair' });

            GMHelper.addListener(polyline, "rightclick", function (event) {
                GMHelper.clearClickListener(polyline, "rightclick");

                GMHelper.clearClickListener(polyline.map, "click");

                polyline.map.setOptions({ draggableCursor: '' });

                polyline.setEditable(false);

                entity['mapObject'] = polyline;

                return polyline;
            })
        }


        GMapsHelper.addListener(polyline, 'mouseover', function (latlng) {
            polyline.setOptions({ strokeColor: '#FFA500' });
        });

        GMapsHelper.addListener(polyline, 'mouseout', function (latlng) {
            polyline.setOptions({ strokeColor: 'FFA500' });
        });

        return polyline;
    }
    drawMicroDuctLine(entity: any, lineColor: any, strokeWeight: number, isEditable: boolean, attachMapObject: boolean) {
        let polyline: any;
        let lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };

        polyline = new google.maps.Polyline({
            strokeColor: '#000000',
            strokeOpacity: 0,
            editable: isEditable,
            data: entity,
            id: entity.id,
            map: this.map,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }],

        });

        let path = polyline.getPath();

        polyline.setMap(this.map);

        if (attachMapObject)
            entity['mapObject'] = polyline;

        if (entity.geometry != undefined) {
            if (entity.geometry.coordinates.length > 1) {
                for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                    path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
                }
                polyline.setEditable(false);
            }
        }
        else {

            GMHelper.clearClickListener(this.map, "click");

            GMHelper.addListener(this.map, "click", function (event) {
                polyline.setEditable(true);
                path = polyline.getPath();
                path.push(event.latLng);
            });

            this.map.setOptions({ draggableCursor: 'crosshair' });

            GMHelper.addListener(polyline, "rightclick", function (event) {
                GMHelper.clearClickListener(polyline, "rightclick");

                GMHelper.clearClickListener(polyline.map, "click");

                polyline.map.setOptions({ draggableCursor: '' });

                polyline.setEditable(false);

                entity['mapObject'] = polyline;

                return polyline;
            })
        }


        GMapsHelper.addListener(polyline, 'mouseover', function (latlng) {
            polyline.setOptions({ strokeColor: '#000000' });
        });

        GMapsHelper.addListener(polyline, 'mouseout', function (latlng) {
            polyline.setOptions({ strokeColor: '000000' });
        });

        return polyline;
    }
}
