import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Design, CableSettings } from '../models/design';
import { Cable } from '../../entities/models/cable';
import { CableService } from '../../entities/services/cable.service';
import { ConditionOperator, Operator, SortOrder } from '../../common/models/paginationRequest';
import { Chamber } from '../../entities/models/chamber';
import { Pole } from '../../entities/models/pole';
import { PoleService } from '../../entities/services/pole.service';
import { ChamberService } from '../../entities/services/chamber.service';

@Component({
    selector: 'dzn-cable',
    templateUrl: './dzn-cable.html'
})
export class DesignCable implements OnInit, OnChanges {

    @Input() public cableSettings: CableSettings = new CableSettings();
    @Input() public allDesigns: Design[] = new Array<Design>();

    cablesMaster: Cable[] = new Array<Cable>();
    polesMaster: Pole[] = new Array<Pole>();
    chambersMaster: Chamber[] = new Array<Chamber>();

    statusMessage: string = "No cable selected";
    selectedCable: Cable;

    constructor(private cableService: CableService,
        private poleService: PoleService,
        private chamberService: ChamberService) {
    }

    ngOnInit() {
        this.getExistingChambers();
        this.getExistingPoles();
    }

    ngOnChanges(changes: SimpleChanges) {

      if (this.cableSettings.cableType)
          this.getCablesMaster(this.cableSettings.cableType);
 
    }

    onCableTypeChange(cableType) {

        this.cableSettings.cables = null;

        this.getCablesMaster(cableType);

        this.cableSettings.pole = new Pole();
        this.cableSettings.chamber = new Chamber();

        if (cableType == "underground")
            this.getExistingChambers();
        else
            this.getExistingPoles();

    }

    getCablesMaster(cableType) {

            var paginationRequest = {
                page: null,
                pageSize: null,
                filter: {
                    conditionOperator: ConditionOperator.AND,
                    filters: [{
                        propertyName: "isUnderground",
                        operator: Operator.equals,
                        value: cableType == "underground"? true: false,
                        caseSensitive: false
                    }]
                },
                order: {
                    orderByProperty: "UpdatedDate",
                    sortOrder: SortOrder.descending
                }
            };

            this.cableService.getCables(paginationRequest).subscribe(
                resp => {
                    this.cablesMaster = null;
                    if (resp.status.toLowerCase() == "error") {
                        this.statusMessage = resp.message;
                    }
                    else {
                        if (resp.data != null && resp.data.length > 0) {
                            this.cablesMaster = resp.data;
                        }
                        else {
                            this.statusMessage = "There are no registered cables.";
                        }
                    }
                },
                (err) => {
                    this.cablesMaster = null;
                    this.statusMessage = "Error fetching cables.";
                });
    }

    getExistingPoles() {

        if (this.polesMaster.length == 0) {

            this.poleService.getPoles().subscribe(
                resp => {
                    this.polesMaster = null;
                    if (resp.data != null && resp.data.length > 0) {
                        this.polesMaster = resp.data;
                    }
                },
                (err) => {
                    this.polesMaster = new Array<Pole>();
                });
        }
    }

    getExistingChambers() {

        if (this.chambersMaster.length == 0) {

            this.chamberService.getChambers().subscribe(
                resp => {
                    this.chambersMaster = null;
                    if (resp.data != null && resp.data.length > 0) {
                        this.chambersMaster = resp.data;
                    }
                },
                (err) => {
                    this.chambersMaster = new Array<Chamber>();
                });
        }
    }

    addCable() {
        if (this.selectedCable) {
            if (this.cableSettings.cables == null)
                this.cableSettings.cables = new Array<Cable>();

            var index = this.cableSettings.cables.findIndex(x => x.id == this.selectedCable.id);

            if (index == -1) {
                this.cableSettings.cables.push(this.selectedCable);
                this.selectedCable = null;
            }
        }
    }

    onPoleChange(poleId: string) {
        this.cableSettings.pole = this.polesMaster.find(x => x.id == poleId);
    }

    onChamberChange(id: string) {
        this.cableSettings.chamber = this.chambersMaster.find(x => x.id == id);
    }

    removeCable(index: number) {
        this.cableSettings.cables.splice(index, 1);
    }
}
