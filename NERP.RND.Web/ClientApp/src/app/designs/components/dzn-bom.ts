import { Component, Input, OnChanges, SimpleChanges, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Costing } from '../models/design';
import { Helper } from '../../common/helper';
import { DesignService } from '../services/design.service';
import { Design } from '../models/design';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import * as $ from 'jquery';

@Component({
    selector: 'dzn-bom',
    templateUrl: './dzn-bom.html'
})
export class DesignBOM implements OnInit, OnChanges {
    //@Input() public boq: Costing[] = new Array<Costing>();
    @Input() public boq: Design = new Design();

    cableGroups = new Array<Costing>();
    chamberGroups = new Array<Costing>();
    ductGroups = new Array<Array<Costing>>();
    odfGroups = new Array<Array<Costing>>();
    poleGroups = new Array<Array<Costing>>();
    splitterGroups = new Array<Array<Costing>>();
    spliceClosureGroups = new Array<Array<Costing>>();
    accessoryGroups = new Array<Array<Costing>>();
    civilworkGroups = new Array<Array<Costing>>();

    cableSummary = new Costing();
    chamberSummary = new Costing();
    ductSummary = new Costing();
    odfSummary = new Costing();
    poleSummary = new Costing();
    splitterSummary = new Costing();
    spliceClosureSummary = new Costing();
    accessorySummary = new Costing();
    civilworkSummary = new Costing();

    totalMaterialCost: number;
    totalServiceCost: number;
    totalCost: number;
    excel = [];

    statusMessage: string = "";

    constructor(private route: ActivatedRoute, private designService: DesignService, private helper: Helper) {

    }

    @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
    @ViewChild('TABLE1', { static: false }) TABLE1: ElementRef;
    title = 'Excel';

    ExportTOExcel() {
        var ref_this = $("ul#myNavTabs1 li.active").text()
        //if (ref_this == "Summary") {
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        const ws1: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE1.nativeElement);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.utils.book_append_sheet(wb, ws1, 'Sheet2');
        XLSX.writeFile(wb, 'Summary.xlsx');
        //} else {
        //    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE1.nativeElement);
        //    const wb: XLSX.WorkBook = XLSX.utils.book_new();
        //    XLSX.utils.book_append_sheet(wb, ws, 'Sheet2');
        //    XLSX.writeFile(wb, 'Details.xlsx');
        //}
    }
    ExportTOKml() {
        this.designService.exportDesign(this.boq.id).subscribe(
            resp => {
                //this.designs = null;

                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                    this.helper.showAlertMessage(this.statusMessage, "error");
                }
                else {
                    if (resp.data != null) {
                        if (resp.data != "") {

                            window.location.href = "/Designs/Download?fileName=" + resp.data;
                        }

                    }
                    else {
                        this.statusMessage = "There are no registered designs.";
                    }

                    // this.getFormData();
                }

                $("#ajax-loading").hide();
            },
            (err) => {
                $("#ajax-loading").hide();
                //this.designs = null;
                let msg = `Unable to export designs : ${err.message}`;
                this.helper.showAlertMessage(msg, "error");
                this.statusMessage = "Error export designs.";
            });
    }
    ngOnInit() {
        this.generateBOQ();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.generateBOQ();
    }

    reset() {
        this.cableSummary = new Costing();
        this.chamberSummary = new Costing();
        this.ductSummary = new Costing();
        this.odfSummary = new Costing();
        this.poleSummary = new Costing();
        this.splitterSummary = new Costing();
        this.spliceClosureSummary = new Costing();
        this.accessorySummary = new Costing();
        this.civilworkSummary = new Costing();
        this.totalMaterialCost = 0;
        this.totalServiceCost = 0;
        this.totalCost = 0;
    }

    stringify(obj: any) {
        return JSON.stringify(obj);
    }

    generateBOQ() {

        this.reset();

        if (this.boq.boq == null) return;

        let cables = this.boq.boq.filter(x => x.entityType == "Cable");
        this.cableGroups = Helper.groupBy(cables, 'level');

        cables.forEach(x => {
            this.cableSummary.materialCost += (x.materialCost * x.quantity);

            if (x.serviceCost)
                this.cableSummary.serviceCost += (x.serviceCost * x.quantity);

            this.cableSummary.quantity += (x.quantity * 1000);
            this.cableSummary.units = x.units;
        });

        let chambers = this.boq.boq.filter(x => x.entityType == "Chamber");
        this.chamberGroups = Helper.groupBy(chambers, 'level');

        chambers.forEach(x => {
            this.chamberSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.chamberSummary.serviceCost += (x.serviceCost * x.quantity);
            this.chamberSummary.quantity += x.quantity;
            this.chamberSummary.units = x.units;
        });

        let ducts = this.boq.boq.filter(x => x.entityType == "Duct");
        this.ductGroups = Helper.groupBy(ducts, 'level');

        ducts.forEach(x => {
            this.ductSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.ductSummary.serviceCost += (x.serviceCost * x.quantity);
            this.ductSummary.quantity += x.quantity;
            this.ductSummary.units = x.units;
        });

        let odfs = this.boq.boq.filter(x => x.entityType == "ODF");
        this.odfGroups = Helper.groupBy(odfs, 'level');

        odfs.forEach(x => {
            this.odfSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.odfSummary.serviceCost += (x.serviceCost * x.quantity);
            this.odfSummary.quantity += x.quantity;
            this.odfSummary.units = x.units;
        });

        let poles = this.boq.boq.filter(x => x.entityType == "Pole");
        this.poleGroups = Helper.groupBy(poles, 'level');
        poles.forEach(x => {
            this.poleSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.poleSummary.serviceCost += (x.serviceCost * x.quantity);
            this.poleSummary.quantity += x.quantity;
            this.poleSummary.units = x.units;
        });

        let splitters = this.boq.boq.filter(x => x.entityType == "Splitter");
        this.splitterGroups = Helper.groupBy(splitters, 'level');
        splitters.forEach(x => {
            this.splitterSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.splitterSummary.serviceCost += (x.serviceCost * x.quantity);
            this.splitterSummary.quantity += x.quantity;
            this.splitterSummary.units = x.units;
        });

        let spliceClosures = this.boq.boq.filter(x => x.entityType == "SpliceClosure");
        this.spliceClosureGroups = Helper.groupBy(spliceClosures, 'level');
        spliceClosures.forEach(x => {
            this.spliceClosureSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.spliceClosureSummary.serviceCost += (x.serviceCost * x.quantity);
            this.spliceClosureSummary.quantity += x.quantity;
            this.spliceClosureSummary.units = x.units;
        });

        let accessories = this.boq.boq.filter(x => x.entityType == "Accessory");
        this.accessoryGroups = Helper.groupBy(accessories, 'level');
        accessories.forEach(x => {
            this.accessorySummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.accessorySummary.serviceCost += (x.serviceCost * x.quantity);
            this.accessorySummary.quantity += x.quantity;
            this.accessorySummary.units = x.units;
        });

        let civilworks = this.boq.boq.filter(x => x.entityType == "Civilwork");
        this.civilworkGroups = Helper.groupBy(civilworks, 'level');
        civilworks.forEach(x => {
            this.civilworkSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.civilworkSummary.serviceCost += (x.serviceCost * x.quantity);
            this.civilworkSummary.quantity += x.quantity;
            this.civilworkSummary.units = x.units;
        });

        this.totalMaterialCost = this.cableSummary.materialCost +
            this.chamberSummary.materialCost +
            this.ductSummary.materialCost +
            this.odfSummary.materialCost +
            this.poleSummary.materialCost +
            this.splitterSummary.materialCost +
            this.spliceClosureSummary.materialCost +
            this.accessorySummary.materialCost +
            this.civilworkSummary.materialCost;

        this.totalServiceCost = this.cableSummary.serviceCost +
            this.chamberSummary.serviceCost +
            this.ductSummary.serviceCost +
            this.odfSummary.serviceCost +
            this.poleSummary.serviceCost +
            this.splitterSummary.serviceCost +
            this.spliceClosureSummary.serviceCost +
            this.accessorySummary.serviceCost +
            this.civilworkSummary.serviceCost;

        this.totalCost = this.totalMaterialCost + this.totalServiceCost;
    }
}
