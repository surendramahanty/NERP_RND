import { GeoNode } from '../../common/geo/geoNode';

export class GeoNodeHelper {

    constructor() { }

    getSegmentById() {

    }

    static deleteSegmentEntity(geoNode: GeoNode, entityId: string, entityType: string) {
       var i = 0;
        if (geoNode) {

            //if (group.children)
            //    group.children.forEach(x => {
            //        this.removeMapObject(x);
            //    });
          
            if (geoNode.segments) {
                geoNode.segments.forEach(x => {
                   i = i + 1;
                   if ((entityType == "Cable" || x.cable.entityType =="Cable") && (x.cable.id == entityId)) {
                      //x.cable = null;
                      //geoNode.segments.slice[i - 1];

                      var index = geoNode.segments.map(x => { return x.cable.id }).indexOf(entityId);

                      geoNode.segments.splice(index, 1);
                    }

                   if (entityType == "Chamber" && x.chambers) {

                        let index = x.chambers.findIndex(i => i.id == entityId);

                        if (index >= 0)
                            x.chambers.splice(index, 1);
                    }

                    //if (entityType == "Duct") {
                    //    x.ducts.forEach(duct => {
                    //        if (duct.id == entityId)
                    //            duct = null;
                    //    })
                    //}

                   if (entityType == "ODF" && x.odfs) {

                        let index = x.odfs.findIndex(i => i.id == entityId);

                        if (index >= 0)
                            x.odfs.splice(index, 1);
                    }

                   if (entityType == "Pole" && x.poles) {
                        let index = x.poles.findIndex(i => i.id == entityId);

                        if (index >= 0)
                            x.poles.splice(index, 1);
                    }

                   if (entityType == "Splitter" && x.splitters) {

                        let index = x.splitters.findIndex(i => i.id == entityId);

                        if (index >= 0)
                            x.splitters.splice(index, 1);
                    }

                   if (entityType == "SpliceClosure" && x.spliceClosures) {

                        let index = x.spliceClosures.findIndex(i => i.id == entityId);

                        if (index >= 0)
                            x.spliceClosures.splice(index, 1);
                   }
                   if (entityType == "FAT" && x.fats) {

                      let index = x.fats.findIndex(i => i.id == entityId);

                      if (index >= 0)
                         x.fats.splice(index, 1);
                   }
                   if (entityType == "FDT" && x.fdts) {

                      let index = x.fdts.findIndex(i => i.id == entityId);

                      if (index >= 0)
                         x.fdts.splice(index, 1);
                   }
                   if ((entityType == "MicroDuct" || x.microduct.entityType == "MicroDuct") && x.microduct.id == entityId) {
                      var index = geoNode.segments.map(x => { return x.microduct.id }).indexOf(entityId);
                      geoNode.segments.splice(index, 1);
                   }

                });
            }

            if (geoNode.children && geoNode.children.length > 0)
                geoNode.children.forEach(g => {
                    this.deleteSegmentEntity(g, entityId, entityType);
                });
        }
   }
   static deleteLineSegmentEntity(geoNode: GeoNode, entityId: string, entityType: string) {
      //console.log(geoNode);
      //console.log(entityId);
      //console.log(entityType);
      if (entityType == "Duct") {
         for (var i = 0; i <= geoNode.children.length - 1; i++) {
            for (var j = 0; j <= geoNode.children[i].segments.length - 1; j++) {
               if (geoNode.children[i].segments[j].ducts != undefined) {
                  if (geoNode.children[i].segments[j].ducts.id == entityId) {
                     geoNode.children[i].segments.splice(j,1);
                     return false;
                  }
               }
            }
         }
      }
      if (entityType == "MicroDuct") {
         for (var i = 0; i <= geoNode.children.length - 1; i++) {
            for (var j = 0; j <= geoNode.children[i].segments.length - 1; j++) {
               if (geoNode.children[i].segments[j].microduct != undefined) {
                  if (geoNode.children[i].segments[j].microduct.id == entityId) {
                     geoNode.children[i].segments.splice(j,1);
                     return false;
                  }
               }
            }
         }
      }
   }

   static getLastSegment(geoNode: GeoNode) {

      let segment = null;

      if (geoNode) {

         if (geoNode.segments) {
            geoNode.segments.forEach(x => {

               segment = x;
            });
         }

         if (geoNode.children && geoNode.children.length > 0)
            geoNode.children.forEach(g => {
               this.getLastSegment(g);
            });
      }

      return segment;
   }
}
