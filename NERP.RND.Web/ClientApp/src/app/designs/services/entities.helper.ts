import { GeoHelper } from '../../common/geo/geoHelper';
import { Position, Point, LineString } from '../../common/geo/geometry';
import { Segment } from '../../common/geo/geoNode';
import { Helper } from '../../common/helper';
import { Chamber } from '../../entities/models/chamber';
import { Pole } from '../../entities/models/pole';
import { Splitter } from '../../entities/models/splitter';
import { CodeId } from '../models/design';
import * as _ from "lodash";
import { Cable } from '../../entities/models/cable';
import { SpliceClosure } from '../../entities/models/spliceClosure';

export class EntitiesHelper {

   bookingIds: any;
   generatedCodes: any;

   constructor(bookingIds, generatedCodes) {
      this.bookingIds = bookingIds;
      this.generatedCodes = generatedCodes;
   }

   createCable(prefCable: Cable, coordinates: Array<number[]>) {

      var cable = _.cloneDeep(prefCable);

      cable.id = Helper.generateObjectId();
      cable.entityType = "Cable";
      cable.code = this.generateEntityCode("Cable");
      cable.name = cable.code;
      cable.geometry = new LineString(coordinates);
      cable.measuredLength = GeoHelper.getLength(coordinates) *1000;
      cable.isUnderground = prefCable.isUnderground;
      cable.noOfTubes = prefCable.noOfTubes;
      cable.corePerTube = prefCable.corePerTube;
      cable.suppliers = prefCable.suppliers;
      cable.customFields = prefCable.customFields;
      cable.aLocation = coordinates[0][0] + "," + coordinates[0][1];
      cable.bLocation = coordinates[coordinates.length - 1][0] + "," + coordinates[coordinates.length - 1][1];

      return cable;

   }

   createChambers(prefChamber: Chamber, interval: number, segment: Segment, loopLength: number, loopEnd: number): Chamber[] {

      let intervalPoints = GeoHelper.getPointsAtDistance(segment.coordinates, (interval / 1000));
      let chambers = new Array<Chamber>();

      for (var i = 0; i < intervalPoints.length; i++) {

         if (i == intervalPoints.length - 1)
            var chamber = this.createChamber(prefChamber, intervalPoints[i], (loopLength + loopEnd));
         else
            var chamber = this.createChamber(prefChamber, intervalPoints[i], loopLength);
         chambers.push(chamber);
      }

      return chambers;

   }

   createChamber(prefChamber: Chamber, coordinate: Position, loopLength: number): Chamber {

      var chamber = _.cloneDeep(prefChamber);

      chamber.entityType = "Chamber";
      chamber.id = Helper.generateObjectId();
      chamber.code = this.generateEntityCode("Chamber");
      chamber.name = chamber.code;
      chamber.geometry = new Point(coordinate);
      chamber.loopLength = loopLength;
      return chamber;

   }

   createPoles(prefPole: Pole, interval: number, segment: Segment, loopLength: number, loopEnd: number): Pole[] {

      let intervalPoints = GeoHelper.getPointsAtDistance(segment.coordinates, (interval / 1000));
      let poles = new Array<Pole>();

      for (var i = 0; i < intervalPoints.length; i++) {

         if (i == intervalPoints.length - 1)
            var pole = this.createPole(prefPole, intervalPoints[i], (loopLength + loopEnd));
         else
            var pole = this.createPole(prefPole, intervalPoints[i], loopLength);

         poles.push(pole);
      }

      return poles;

   }

   createPole(prefPole: Pole, coordinate: Position, loopLength: number): Pole {

      var pole = _.cloneDeep(prefPole);

      pole.entityType = "Pole";
      pole.id = Helper.generateObjectId();
      pole.code = this.generateEntityCode("Pole");
      pole.name = pole.code;
      pole.geometry = new Point(coordinate);
      pole.loopLength = loopLength;
      return pole;

   }

   createSplitter(prefSplitter: Splitter, coordinates: Position): Splitter {

      var splitter = _.cloneDeep(prefSplitter);

      splitter.id = Helper.generateObjectId();
      splitter.entityType = "Splitter";
      splitter.code = this.generateEntityCode("Splitter");
      splitter.name = splitter.code;
      splitter.geometry = new Point(coordinates);

      return splitter;

   }

   createSpliceClosure(prefSpliceClosure: SpliceClosure, coordinates: Position): Splitter {

      var spliceClosure = _.cloneDeep(prefSpliceClosure);

      spliceClosure.id = Helper.generateObjectId();
      spliceClosure.entityType = "SpliceClosure";
      spliceClosure.code = this.generateEntityCode("SpliceClosure");
      spliceClosure.name = spliceClosure.code;
      spliceClosure.geometry = new Point(coordinates);

      return spliceClosure;

   }
   generateEntityCode(entityType: string) {

      let entityCode = "";
      let maxId = null;

      let bookingId = this.bookingIds.find(x => x.entityType == entityType);

      if (this.generatedCodes == null)
         this.generatedCodes = new Array<CodeId>();

      let codeId = this.generatedCodes.find(x => x.entityType == entityType);

      if (codeId) {
         maxId = codeId.maxId + bookingId.step;
         entityCode = bookingId.format.replace('{code}', maxId.toString());

         codeId.maxId = maxId;
      }
      else {
         maxId = bookingId.sequenceStart;
         entityCode = bookingId.format.replace('{code}', maxId.toString());

         this.generatedCodes.push({ entityType: entityType, maxId: maxId });
      }

      return entityCode;
   }
}
