import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NetworkSetting } from '../models/design';
import { Cable } from '../../entities/models/cable';
import { Chamber } from '../../entities/models/chamber';
import { GeoNode } from '../../common/geo/geoNode';
import { Pole } from '../../entities/models/pole';
import { Accessory } from '../../accessories/models/accessory';
import { Duct } from '../../entities/models/duct';
import { SpliceClosure } from '../../entities/models/spliceClosure';
import { Civilwork } from '../../civilworks/models/civilwork';
import { ODF } from '../../entities/models/odf';
import { Splitter } from '../../entities/models/splitter';
//import { CustomField, ControlType, DataType } from '../../../common/customField';

@Component({
    selector: 'dzn-costing',
    templateUrl: './dzn-costing.html'
})
export class DesignCosting implements OnChanges {

    @Input() public networkSettings: NetworkSetting[] = new Array<NetworkSetting>();

    entityType: string = "Cable";

    cables: Cable[] = new Array<Cable>();
    chambers: Chamber[] = new Array<Chamber>();
    ducts: Duct[] = new Array<Duct>();
    odfs: ODF[] = new Array<ODF>();
    poles: Pole[] = new Array<Pole>();
    splitters: Splitter[] = new Array<Splitter>();
    spliceClosures: SpliceClosure[] = new Array<SpliceClosure>();

    accessories: Accessory[] = new Array<Accessory>();
    civilworks: Civilwork[] = new Array<Civilwork>();

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {

        if (this.networkSettings == null) return;

        this.networkSettings.forEach(level => {

            this.cables = new Array<Cable>();
            this.chambers = new Array<Chamber>();
            this.ducts = new Array<Duct>();
            this.odfs = new Array<ODF>();
            this.poles = new Array<Pole>();
            this.splitters = new Array<Splitter>();
            this.spliceClosures = new Array<SpliceClosure>();

            this.accessories = new Array<Accessory>();
            this.civilworks = new Array<Civilwork>();

            //start node
            if (level.startNode) {
                if (level.startNode.accessorySettings.accessories != null) {
                    level.startNode.accessorySettings.accessories.forEach(accessory => {

                        let index = this.accessories.findIndex(c => c.name == accessory.name);

                        if (index == -1)
                            this.accessories.push(accessory);
                    });
                }

                if (level.startNode.civilworkSettings.civilworks != null) {
                    level.startNode.civilworkSettings.civilworks.forEach(civilwork => {

                        let index = this.civilworks.findIndex(c => c.name == civilwork.name);

                        if (index == -1)
                            this.civilworks.push(civilwork);
                    });
                }

                if (level.startNode.entitySettings.dataSource == "automatic") {
                    if (level.startNode.entitySettings.splitters != null && level.startNode.entitySettings.splitters.length > 0) {
                        let index = this.splitters.findIndex(s => s.name == level.startNode.entitySettings.splitters[0].name);

                        if (index == -1)
                            this.splitters.push(level.startNode.entitySettings.splitters[0]);
                    }
                }
            }

            if (level.destinationNode) {
                //destination node
                if (level.destinationNode.accessorySettings.accessories != null) {
                    level.destinationNode.accessorySettings.accessories.forEach(accessory => {

                        let index = this.accessories.findIndex(c => c.name == accessory.name);

                        if (index == -1)
                            this.accessories.push(accessory);
                    });
                }

                if (level.destinationNode.civilworkSettings.civilworks != null) {
                    level.destinationNode.civilworkSettings.civilworks.forEach(civilwork => {

                        let index = this.civilworks.findIndex(c => c.name == civilwork.name);

                        if (index == -1)
                            this.civilworks.push(civilwork);
                    });
                }

                if (level.destinationNode.entitySettings.dataSource == "automatic") {
                    if (level.destinationNode.entitySettings.splitters != null && level.destinationNode.entitySettings.splitters.length > 0) {
                        let index = this.splitters.findIndex(s => s.name == level.destinationNode.entitySettings.splitters[0].name);

                        if (index == -1)
                            this.splitters.push(level.destinationNode.entitySettings.splitters[0]);
                    }
                }

                //if (level.destinationNode.entitySettings.splitter != null) {
                //    let index = this.splitters.findIndex(s => s.name == level.destinationNode.entitySettings.splitter.name);

                //    if (index == -1)
                //        this.splitters.push(level.destinationNode.entitySettings.splitter);
                //}

            }

            if (level.fdpNode) {
                //FDP node
                if (level.fdpNode.accessorySettings.accessories != null) {
                    level.fdpNode.accessorySettings.accessories.forEach(accessory => {

                        let index = this.accessories.findIndex(c => c.name == accessory.name);

                        if (index == -1)
                            this.accessories.push(accessory);
                    });
                }

                if (level.fdpNode.civilworkSettings.civilworks != null) {
                    level.fdpNode.civilworkSettings.civilworks.forEach(civilwork => {

                        let index = this.civilworks.findIndex(c => c.name == civilwork.name);

                        if (index == -1)
                            this.civilworks.push(civilwork);
                    });
                }

                //if (level.destinationNode.entitySettings.dataSource == "automatic") {
                //    if (level.destinationNode.entitySettings.splitters != null && level.destinationNode.entitySettings.splitters.length > 0) {
                //        let index = this.splitters.findIndex(s => s.name == level.destinationNode.entitySettings.splitters[0].name);

                //        if (index == -1)
                //            this.splitters.push(level.destinationNode.entitySettings.splitters[0]);
                //    }
                //}
            }

            //Cabling
            if (level.cabling.cableSettings.cables != null) {
                level.cabling.cableSettings.cables.forEach(cable => {

                    let index = this.cables.findIndex(c => c.name == cable.name);

                    if (index == -1)
                        this.cables.push(cable);
                });
            }

            if (level.cabling.cableSettings.chamber.name) {
                let chamber = level.cabling.cableSettings.chamber;
                let index = this.chambers.findIndex(c => c.name == chamber.name);
                if (index == -1)
                    this.chambers.push(chamber);
            }

            if (level.cabling.cableSettings.pole.name) {
                let pole = level.cabling.cableSettings.pole;
                let index = this.poles.findIndex(c => c.name == pole.name);
                if (index == -1)
                    this.poles.push(pole);
            }
            if (level.cabling.accessorySettings.accessories != null) {
                level.cabling.accessorySettings.accessories.forEach(accessory => {

                    let index = this.accessories.findIndex(c => c.name == accessory.name);

                    if (index == -1)
                        this.accessories.push(accessory);
                });
            }

            if (level.cabling.ductSettings.ducts != null) {
                level.cabling.ductSettings.ducts.forEach(duct => {

                    let index = this.ducts.findIndex(c => c.name == duct.name);

                    if (index == -1)
                        this.ducts.push(duct);
                });
            }

            if (level.cabling.spliceClosureSettings.spliceClosures != null) {
                level.cabling.spliceClosureSettings.spliceClosures.forEach(spliceClosure => {

                    let index = this.spliceClosures.findIndex(c => c.name == spliceClosure.name);

                    if (index == -1)
                        this.spliceClosures.push(spliceClosure);
                });
            }
        });
    }

    checkPriceValidity(validFrom?: string, validTill?: string) {

        let today = new Date();
        let vf = new Date(validFrom);
        let vt = new Date(validTill);

        if (vf <= today && vt > today)
            return true;
        else
            return false;

    }
}
