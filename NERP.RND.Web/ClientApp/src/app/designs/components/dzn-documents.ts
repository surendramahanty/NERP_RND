import { Component, Input } from '@angular/core';
import { Helper } from '../../common/helper';
import { Document } from '../../common/models/document';
import { Design } from '../models/design';

@Component({
    selector: 'dzn-documents',
    templateUrl: './dzn-documents.html'
})
export class DesignDocuments {

    @Input() public design: Design = new Design();
    documentCategory: string = "";

    constructor(public helper: Helper) { }

    fileChangeEvent(event: any) {
        var files = event.target.files;

        if (this.design.documents == null)
            this.design.documents = new Array<Document>();

        for (var i = 0; i < files.length; i++) {

            if (files[i].name.length > 200) {
                this.helper.showAlertMessage("Document file name cannot be greater than 200 characters", "error");
            }
            else {

                var document = new Document();
                document.category = this.documentCategory;
                document.fileName = files[i].name;
                document.fileSize = files[i].size;
                document.file = files[i];

                this.design.documents.push(document);
            }
        }
    }

    removeDocument(index: number, document: Document) {
        this.design.documents.splice(index, 1);

      //if (document.id != null) {
      //   this.designService.deleteDocument(this.design.id, document.id)
      //      .subscribe(() => {
      //         this.helper.showAlertMessage("Document deleted", "success");
      //      },
      //         (err) => {
      //            let msg = `Unable to delete document : ${err.message}`;
      //            this.helper.showAlertMessage(msg, "error");
      //         });
      //}
    }

}
