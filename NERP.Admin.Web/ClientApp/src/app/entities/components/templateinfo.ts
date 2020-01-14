import { Component, Input } from '@angular/core';
import { temaplateinfo } from '../../common/models/templateinfo';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'templateinfo',
   templateUrl: './templateinfo.html'
})
export class templateinfoComponent {

   @Input() public template: temaplateinfo[] = new Array<temaplateinfo>();
   @Input() Flag: string;
   constructor(private route: ActivatedRoute) { }
  
   addNewTemplate() {
      console.log(this.Flag);
      if (this.template == null)
         this.template = [];

      this.template.push({
           templateCode: "",
          templateName: "",
          pigtailCount:0,
           odfCount: 0,
          splitterCount: 0
        });
    }

   deletetemplate(index: number) {
      this.template.splice(index, 1);
    }

}
