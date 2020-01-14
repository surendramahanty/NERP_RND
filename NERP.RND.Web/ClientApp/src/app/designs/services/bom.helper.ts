import { Injectable } from '@angular/core';
import { GeoNode } from '../../common/geo/geoNode';
import { Helper } from '../../common/helper';
import { Costing, Design } from '../models/design';

@Injectable()
export class BomHelper {

    private design: Design = new Design();

    constructor(
        private helper: Helper) { }

    generateBOQ(design: Design) {
        this.design = design;
        this.design.boq = new Array<Costing>();
        this.generateBOQRec(design.bluePrint, this.design.boq);
    }

    generateBOQRec(group: GeoNode, boq: Costing[]) {

        if (group.segments) {
            group.segments.forEach(x => {

                //Add Cable Cost
                if (x.cable) {
                    var supplier = x.cable.suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'Cable',
                            code: x.cable.code,
                            units: 'Meters',
                            quantity: x.cable.measuredLength,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.cable.name
                        });
                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for cable - " + x.cable.name);
                }

                //Add Chambers Cost
                if (x.chambers) {
                    supplier = x.chambers[0].suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'Chamber',
                            code: "",
                            units: 'Nos',
                            quantity: x.chambers.length,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.chambers[0].name
                        });
                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for Chamber - " + x.chambers[0].name);
                }

                //Add Ducts Cost
                if (x.ducts) {
                    supplier = x.ducts.suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'Duct',
                            code: "",
                           units: 'meters',
                           quantity: x.ducts.measuredLength,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.ducts.name
                        });
                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for Duct - " + x.ducts.name);
                }

                //Add ODF Cost
                if (x.odfs) {
                    supplier = x.odfs[0].suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'ODF',
                            code: "",
                            units: 'nos',
                            quantity: x.odfs.length,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.odfs[0].name
                        });

                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for ODF - " + x.odfs[0].name);
                }

                //Add Poles Cost
                if (x.poles) {
                    supplier = x.poles[0].suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'Pole',
                            code: "",
                            units: 'nos',
                            quantity: x.poles.length,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.poles[0].name
                        });
                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for Pole - " + x.poles[0].name);
                }

                //Add Splitters Cost
               if (x.splitters && x.splitters[0].suppliers) {
                    supplier = x.splitters[0].suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'Splitter',
                            code: "",
                            units: 'nos',
                            quantity: x.splitters.length,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.splitters[0].name
                        });
                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for Splitter - " + x.splitters[0].name);
                }

                //Add Splice Closures Cost
                if (x.spliceClosures) {
                    supplier = x.spliceClosures[0].suppliers.find(s => s.isPrefered == true);

                    if (supplier) {
                        boq.push({
                            levelName: group.levelName,
                            level: group.level,
                            entityType: 'SpliceClosure',
                            code: "",
                            units: 'nos',
                            quantity: x.spliceClosures.length,
                            materialCost: supplier.price,
                           serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                            currency: supplier.currency,
                            description: x.spliceClosures[0].name
                        });
                    }
                    else
                        this.helper.log(this.design, "Error", "Supplier not available for Splice Closure - " + x.spliceClosures[0].name);
                }

                //Add CivilWorks Cost
                //this.generateBoqEntry(boq, x.civilworks, "Civilwork", group, "");
                if (x.civilworks) {
                    x.civilworks.forEach(cw => {
                        supplier = cw.suppliers.find(s => s.isPrefered == true);

                        if (supplier) {
                            boq.push({
                                levelName: group.levelName,
                                level: group.level,
                                entityType: 'Civilwork',
                                code: "",
                                units: '',
                                quantity: 1,
                                materialCost: supplier.price,
                               serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                                currency: supplier.currency,
                                description: cw.name
                            });
                        }
                        else
                            this.helper.log(this.design, "Error", "Supplier not available for Civil work - " + cw.name);

                    });
                }

                //Add Accessories Cost
                //this.generateBoqEntry(boq, x.accessories, "Accessory", group, "");
                if (x.accessories) {
                    x.accessories.forEach(a => {
                        supplier = a.suppliers.find(s => s.isPrefered == true);

                        if (supplier) {
                            boq.push({
                                levelName: group.levelName,
                                level: group.level,
                                entityType: "Accessory",
                                code: "",
                                units: '',
                                quantity: 1,
                                materialCost: supplier.price,
                               serviceCost: supplier.serviceCost == null ? 0 : supplier.serviceCost,
                                currency: supplier.currency,
                                description: a.parentEntityType + ' - Accessories'
                            });

                        }
                        else
                            this.helper.log(this.design, "Error", "Supplier not available for Accessory - " + a.name);
                    });
                }

            });
        }

        if (group.children && group.children.length > 0)
            group.children.forEach(g => {
                this.generateBOQRec(g, boq);
            });

    }

    //generateBoqEntry(boq: any, entities: any, entityName: string, group: any, units: string) {

    //    if (entities && entities.length > 0) {

    //        entities.forEach(a => {
    //            let supplier = a.suppliers.find(s => s.isPrefered == true);

    //            if (supplier) {
    //                boq.push({
    //                    levelName: group.levelName,
    //                    level: group.level,
    //                    entityType: entityName,
    //                    code: "",
    //                    units: units,
    //                    quantity: 1,
    //                    materialCost: supplier.price,
    //                    serviceCost: supplier.serviceCost,
    //                    currency: supplier.currency,
    //                    description: a.parentEntityType != null ? `${a.parentEntityType} - ${entityName}` : a.name
    //                });
    //            }
    //            else
    //                this.helper.log(this.design, "Error", `Supplier not available for ${entityName} - ${a.name}`);
    //        });
    //    }

    //}
}
