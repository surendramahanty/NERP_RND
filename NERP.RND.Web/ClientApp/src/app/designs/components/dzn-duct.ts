import { Component, Input, OnInit } from '@angular/core';
import { DuctSettings } from '../models/design';
import { Duct } from '../../entities/models/duct';
import { DuctService } from '../../entities/services/duct.service';

@Component({
    selector: 'dzn-duct',
    templateUrl: './dzn-duct.html'
})
export class DesignDuct implements OnInit {

    @Input() public ductSettings: DuctSettings = new DuctSettings();

    ductsMaster: Duct[] = new Array<Duct>();
    statusMessage: string ="No ducts selected";
    selectedDuct: Duct;

    constructor(private ductService: DuctService ) {
        this.selectedDuct = null;
    }

    ngOnInit() {
        this.getExistingDucts();
    }

    getExistingDucts() {

        this.ductService.getDucts().subscribe(
            resp => {

                this.ductsMaster = null;

                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.ductsMaster = resp.data;
                    }
                    else {
                        this.statusMessage = "There are no registered ducts.";
                    }
                }
            },
            (err) => {
                this.ductsMaster = null;
                this.statusMessage = "Error fetching ducts.";
            });
    }

    addDuct() {
        if (this.selectedDuct) {
            if (this.ductSettings.ducts == null)
                this.ductSettings.ducts = new Array<Duct>();

            var index = this.ductSettings.ducts.findIndex(x => x.id == this.selectedDuct.id);

            if (index == -1) {
                this.ductSettings.ducts.push(this.selectedDuct);
                this.selectedDuct = null;
            }
        }
    }

    removeDuct(index: number) {
        this.ductSettings.ducts.splice(index, 1);
    }

}
