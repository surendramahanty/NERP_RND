import { Injectable } from '@angular/core';
import { Helper } from '../../common/helper';
import { Costing, Design } from '../models/design';
import { BomHelper } from './bom.helper';
import { FTTxHelper } from './fttx.helper';
import { BackboneHelper } from './backbone.helper';

declare var $: any;

@Injectable()
export class DesignHelper {

    private design: Design;

    constructor(
        private bomHelper: BomHelper,
        private fttxHelper: FTTxHelper,
        private backboneHelper: BackboneHelper,
        private helper: Helper,) { }

    async generateDesign(design: Design) {

        $("#ajax-loading").show();

        this.design = design;

        this.design.generatedCodes = null;
        this.design.boq = null;
        this.design.bluePrint = null;

        let status = false;

        if (this.design.designType == 'FTTx') {
            status = await this.fttxHelper.generateFTTxDesign(this.design);
        }
        else
            status = await this.backboneHelper.generateBackboneDesign(this.design);

        if (status) {
            //Generate BOQ
            this.helper.log(this.design, "Information", "Generating BOQ...");

            this.design.boq = new Array<Costing>();
            this.bomHelper.generateBOQ(this.design);

            this.helper.log(this.design, "Information", "Generated BOQ...");

            this.helper.log(this.design, "Information", "Design generated...");
            this.helper.showAlertMessage("Design Generated", "info");
        }
        else {
            this.helper.log(this.design, "Error", "Error generating design...");
            this.helper.showAlertMessage("Error generating design.", "error");
        }

        $("#ajax-loading").hide();
       
    }
}
