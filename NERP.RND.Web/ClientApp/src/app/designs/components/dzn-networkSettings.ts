import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Design, NetworkSetting, NodeSettings, Cabling } from '../models/design';
import { Helper } from '../../common/helper';

@Component({
    selector: 'dzn-networkSettings',
    templateUrl: './dzn-networkSettings.html'
})
export class DesignNetworkSettings implements OnInit, OnChanges{

    hierarchyName: string;
    selectedSetting: NetworkSetting = new NetworkSetting();

    @Input() public design: Design = new Design();
    @Input() public allDesigns: Design[] = new Array<Design>();

    constructor(private helper: Helper) { }

    ngOnInit() {
       this.hierarchyName = "";

    }

    ngOnChanges(changes: SimpleChanges): void {
       if (this.design.networkSettings && this.design.networkSettings.length > 0) {
          this.selectedSetting = this.design.networkSettings[0];
          //this.ngOnInit();
       }
            
    }

    addHierarchy() {

        if (this.design.networkSettings == null)
            this.design.networkSettings = [];

        if (this.hierarchyName == null || this.hierarchyName.trim() == "") {
            this.helper.showAlertMessage("Please provide hierarchy name.", "info");
            return;
        }

        var index = this.design.networkSettings.findIndex(x => x.name == this.hierarchyName.trim());

        if (index >= 0) {
            this.helper.showAlertMessage("hierarchy name already exist.", "info");
            return;
        }

        var networkSetting = {
            id: Helper.generateObjectId(),
            name: this.hierarchyName,
            position: this.design.networkSettings.length,
            startNode: new NodeSettings(),
            destinationNode: new NodeSettings(),
            cabling: new Cabling()
        };

        if (this.design.designType == "FTTx") {
            this.design.networkSettings.push(networkSetting);
        }
        else {
            networkSetting.startNode = null;
            networkSetting.destinationNode = null;
            networkSetting['fdpNode'] = new NodeSettings();

            if (this.design.networkSettings.length == 0) {
                this.design.networkSettings.push(networkSetting);
            }
        }

        this.hierarchyName = '';
    }

    deleteHierarchy(index: number) {
        this.design.networkSettings.splice(index, 1);
    }
}
