import { Component, Input, OnInit } from '@angular/core';
import { Design, SpliceClosureSettings } from '../models/design';
import { SpliceClosure } from '../../entities/models/spliceClosure';
import { SpliceClosureService } from '../../entities/services/spliceClosure.service';

@Component({
    selector: 'dzn-spliceClosure',
    templateUrl: './dzn-spliceClosure.html'
})
export class DesignSpliceClosure implements OnInit{

    @Input() public spliceClosureSettings: SpliceClosureSettings = new SpliceClosureSettings();
    @Input() public allDesigns: Design[] = new Array<Design>();

    spliceClosuresMaster: SpliceClosure[] = new Array<SpliceClosure>();
    statusMessage: string;
    selectedSpliceClosure: SpliceClosure;
    selectedDesign: Design;

    constructor(private spliceClosureService: SpliceClosureService,) { }

    ngOnInit() {
        this.getSpliceClosuresMaster();
    }

    getSpliceClosuresMaster() {

        //this.spliceClosureSettings.spliceClosures = null;

        this.spliceClosureService.getSpliceClosures().subscribe(
            resp => {
                this.spliceClosuresMaster = null;
                if (resp.status.toLowerCase() == "error") {
                    this.statusMessage = resp.message;
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        this.spliceClosuresMaster = resp.data;
                    }
                    else {
                        this.statusMessage = "There are no registered spliceClosures.";
                    }
                }
            },
            (err) => {
                this.spliceClosuresMaster = null;
                this.statusMessage = "Error fetching spliceClosures.";
            });
    }

    //fileChangeEvent(event: any) {
    //    var files = event.target.files;

    //    this.populateDummyData();
    //}

    addSpliceClosure() {
        if (this.spliceClosureSettings.spliceClosures == null)
            this.spliceClosureSettings.spliceClosures = new Array<SpliceClosure>();

        var index = this.spliceClosureSettings.spliceClosures.findIndex(x => x.id == this.selectedSpliceClosure.id);

        if (index == -1) {
            this.spliceClosureSettings.spliceClosures.push(this.selectedSpliceClosure);
            this.selectedSpliceClosure = null;
        }
    }

    removeSpliceClosure(index: number) {
        this.spliceClosureSettings.spliceClosures.splice(index, 1);
    }


}
