(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/views/accessory-details.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/views/accessory-details.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Accessories <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/accessories']\"> Accessories</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Accessory Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"accessory.name\" required />\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"accessory.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"PoP\">PoP</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                                 <mat-option value=\"Customer\">Customer</mat-option>\r\n                                 <mat-option value=\"Microduct\">Microduct</mat-option>\r\n                                 <mat-option value=\"Site\">Site</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"accessory.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"accessory.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"accessory.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\" style=\"padding-top: 35px;\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"accessory.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"accessory.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th style=\"width:200px\">Supplier</th>\r\n                                             <th style=\"width:200px\">SKU</th>\r\n                                             <th style=\"width:200px\">Price</th>\r\n                                             <th style=\"width: 140px;\">Valid From</th>\r\n                                             <th style=\"width: 140px;\">Valid To</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addNewSupplier()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fas fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='accessory.suppliers && accessory.suppliers.length > 0'>\r\n                                             <tr *ngFor='let supplier of accessory.suppliers; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.name\"></td>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.sku\"></td>\r\n                                                <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                                                <td><input type=\"date\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [ngModel]=\"supplier.validFrom | date:'yyyy-MM-dd'\" (ngModelChange)=\"supplier.validFrom = $event\"></td>\r\n                                                <td><input type=\"date\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [ngModel]=\"supplier.validTo | date:'yyyy-MM-dd'\" (ngModelChange)=\"supplier.validTo = $event\"></td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteSupplier(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fas fa-trash-alt\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='accessory.suppliers == null || accessory.suppliers.length == 0'>\r\n                                             <td colspan=\"6\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Supplier not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/views/accessory-list.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/views/accessory-list.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Accessories</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Accessory List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Accessory</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"ParentEntityType\" class=\"table-sorter\" style=\"max-width:300px\">Parent Type</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:60px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='accessories && accessories.length > 0'>\r\n                        <tr *ngFor='let accessory of accessories'>\r\n                           <td>{{accessory.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{accessory.parentEntityType}}</td>\r\n                           <td>{{accessory.updatedBy}}</td>\r\n                           <td>{{accessory.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', accessory.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(accessory)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='accessories == null || accessories.length == 0'>\r\n                        <td colspan=\"5\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activityLogs/views/activityLog-details.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activityLogs/views/activityLog-details.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Activity Log Details</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/activityLogs']\"> Activity Logs</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Activity Log Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"activityLogForm\" action=\"javascript:{}\" #activityLogForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div>\r\n                     <div class=\"col-md-6 form-group\">\r\n                        <label for=\"createdDate\" class=\"control-label\">Activity Date</label>\r\n                        <input type=\"text\" class=\"form-control input-sm\" name=\"loginId\" [ngModel]=\"activityLog.activityOn\" readonly>\r\n                     </div>\r\n                     <div class=\"col-md-6 form-group\">\r\n                        <label for=\"loginUser\" class=\"control-label\">Accessed By</label>\r\n                        <input type=\"text\" class=\"form-control input-sm\" name=\"loginUser\" [ngModel]=\"activityLog.loginId\" readonly>\r\n                     </div>\r\n                     <div class=\"col-md-6 form-group\">\r\n                        <label for=\"webServer\" class=\"control-label\">Web Server</label>\r\n                        <input type=\"text\" class=\"form-control input-sm\" name=\"webServer\" [ngModel]=\"activityLog.webServer\" readonly>\r\n                     </div>\r\n                     <div class=\"col-md-6 form-group\">\r\n                        <label for=\"ipAddress\" class=\"control-label\">Source IP Address</label>\r\n                        <input type=\"text\" class=\"form-control input-sm\" name=\"ipAddress\" [ngModel]=\"activityLog.sourceIP\" readonly>\r\n                     </div>\r\n                     <div class=\"col-md-6 form-group\">\r\n                        <label for=\"application\" class=\"control-label\">Application</label>\r\n                        <input type=\"text\" class=\"form-control input-sm\" name=\"application\" [ngModel]=\"activityLog.application\" readonly>\r\n                     </div>\r\n                     <div class=\"col-md-6 form-group\">\r\n                        <label for=\"module\" class=\"control-label\">Module/Function</label>\r\n                        <input type=\"text\" class=\"form-control input-sm\" name=\"module\" [ngModel]=\"module_function\" readonly>\r\n                     </div>\r\n                     <div class=\"col-md-12 form-group\">\r\n                        <label for=\"otherInfo\" class=\"control-label\">Other Information (Parameters)</label>\r\n                        <textarea class=\"form-control\" rows=\"15\" name=\"otherInfo\" [ngModel]=\"otherInfo\" readonly></textarea>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <div>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activityLogs/views/activityLog-list.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activityLogs/views/activityLog-list.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Activity Logs</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Activity Logs</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table id=\"groups\" class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"ActivityOn\" class=\"table-sorter\" style=\"width: 200px;\">Activity Date</th>\r\n                        <th data-column=\"LoginId\" class=\"table-sorter\">Accessed By</th>\r\n                        <th data-column=\"SourceIP\" class=\"table-sorter\" style=\"width: 130px;\">Source IP</th>\r\n                        <th data-column=\"Application\" class=\"table-sorter\">Application</th>\r\n                        <th data-column=\"Module\" class=\"table-sorter\">Module</th>\r\n                        <th data-column=\"Action\" class=\"table-sorter\">Action</th>\r\n                        <th style=\"width:42px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='activityLogs && activityLogs.length > 0'>\r\n                        <tr *ngFor='let activityLog of activityLogs'>\r\n                           <td>{{activityLog.createdDate | date:'dd-MM-yyyy'}} {{ activityLog.createdDate | date:'HH:mm:ss a'}}</td>\r\n                           <td>{{activityLog.loginId}}</td>\r\n                           <td>{{activityLog.sourceIP}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{activityLog.application}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{activityLog.module}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{activityLog.action}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', activityLog.id]\" title=\"View\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='activityLogs == null || activityLogs.length == 0'>\r\n                        <td colspan=\"7\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n   <header class=\"main-header\">\r\n      <a href=\"/\" class=\"logo\">\r\n         <img src=\"images/logo.svg\" style=\"height: 35px;\">\r\n      </a>\r\n      <nav class=\"navbar\" role=\"navigation\">\r\n         <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n            <i class=\"fas fa-bars\"></i>\r\n         </a>\r\n         <div class=\"navbar-custom-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n               <li>\r\n                  <a href=\"#\">\r\n                     <span class=\"hidden-xs\">{{loginUser.name}}</span>\r\n                  </a>\r\n               </li>\r\n               <li>\r\n                  <a [routerLink]=\"\" title=\"Logout\" class=\"nav-link\" (click)=\"onLogout()\"><i class=\"fas fa-sign-out-alt\"></i></a>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n      </nav>\r\n   </header>\r\n   <aside class=\"main-sidebar\">\r\n      <section class=\"sidebar\">\r\n         <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n            <li class=\"header\">MAIN NAVIGATION</li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/home']\"><span>Home</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/groups']\"><span>Groups</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/roles']\"><span>Roles</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/users']\"><span>Users</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/entities']\"><span>Entities</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/accessories']\"><span>Accessories</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/civilworks']\"><span>Civil Works</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/layers']\"><span>Layers</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/generalSettings']\"><span>General Settings</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/activityLogs']\"><span>Activity Logs</span></a></li>\r\n         </ul>\r\n      </section>\r\n   </aside>\r\n   <div class=\"content-wrapper\">\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n   <footer class=\"main-footer\">\r\n      <span>&copy; Pitney Bowes 2019</span>\r\n      <!--<div class=\"pull-right hidden-xs\">\r\n         <span>Best view with IE 11, Mozilla 51, Chrome 55 and Safari 10 and above</span>\r\n      </div>-->\r\n   </footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/civilworks/views/civilwork-details.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/civilworks/views/civilwork-details.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Civil Works <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/civilworks']\"> Civilworks</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Civil Work Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"civilwork.name\" required  />\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"civilwork.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"PoP\">PoP</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                                 <mat-option value=\"Customer\">Customer</mat-option>\r\n                                 <mat-option value=\"Microduct\">Microduct</mat-option>\r\n                                 <mat-option value=\"Site\">Site</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th style=\"width:200px\">Contractor</th>\r\n                                             <th style=\"width:200px\">Service Cost</th>\r\n                                             <th style=\"width: 140px;\">Valid From</th>\r\n                                             <th style=\"width: 140px;\">Valid To</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addNewSupplier()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fas fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='civilwork.suppliers && civilwork.suppliers.length > 0'>\r\n                                             <tr *ngFor='let supplier of civilwork.suppliers; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.name\"></td>\r\n                                                <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                                                <td><input type=\"date\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [ngModel]=\"supplier.validFrom | date:'yyyy-MM-dd'\" (ngModelChange)=\"supplier.validFrom = $event\"></td>\r\n                                                <td><input type=\"date\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [ngModel]=\"supplier.validTo | date:'yyyy-MM-dd'\" (ngModelChange)=\"supplier.validTo = $event\"></td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteSupplier(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fas fa-trash-alt\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='civilwork.suppliers == null || civilwork.suppliers.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Contractor not added\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/civilworks/views/civilwork-list.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/civilworks/views/civilwork-list.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Civil Works</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Civil Work List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Civilwork</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"ParentEntityType\" class=\"table-sorter\" style=\"max-width:300px\">Parent Type</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:72px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='civilworks && civilworks.length > 0'>\r\n                        <tr *ngFor='let civilwork of civilworks'>\r\n                           <td>{{civilwork.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{civilwork.parentEntityType}}</td>\r\n                           <td>{{civilwork.updatedBy}}</td>\r\n                           <td>{{civilwork.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', civilwork.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(civilwork)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='civilworks == null || civilworks.length == 0'>\r\n                        <td colspan=\"5\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/dt-pagination.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/dt-pagination.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pull-left\">\r\n   <span style=\"padding-right: 10px;font-size: small;\">Pages</span>\r\n   <div class=\"btn-group\" style=\"padding-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-default dropdown-toggle btn-sm\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n         <span style=\"padding-right: 5px;\"> {{pageSize}} </span>\r\n         <span class=\"caret\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\">\r\n         <li><a [routerLink]=\"\" (click)=\"pageSize = 10; pageSizeChange()\">10</a></li>\r\n         <li><a [routerLink]=\"\" (click)=\"pageSize = 20; pageSizeChange()\">20</a></li>\r\n         <li><a [routerLink]=\"\" (click)=\"pageSize = 50; pageSizeChange()\">50</a></li>\r\n         <li><a [routerLink]=\"\" (click)=\"pageSize = 100; pageSizeChange()\">100</a></li>\r\n      </ul>\r\n   </div>\r\n</div>\r\n<div class=\"pull-right\">\r\n   <span style=\"padding-right: 10px;font-size: small;\">Showing page {{currentPage}} of {{totalPages}}</span>\r\n   <div class=\"btn-group\" style=\"padding-bottom:5px\">\r\n      <button class=\"btn btn-default btn-sm\" type=\"button\" (click)=\"setPage(currentPage - 1)\" [ngClass]=\"{disabled:currentPage === 1}\"><i class=\"fa fa-chevron-left fa-fw\"></i></button>\r\n      <button class=\"btn btn-default btn-sm\" type=\"button\" (click)=\"setPage(currentPage + 1)\" [ngClass]=\"{disabled:currentPage === totalPages}\"><i class=\"fa fa-chevron-right fa-fw\"></i></button>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/dt-search.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/dt-search.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group input-group-sm\" style=\"padding-bottom:20px\">\r\n   <div class=\"input-group-btn\">\r\n      <button type=\"button\" class=\"btn btn-warning dropdown-toggle search-dropdown\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n         {{selectedField.label}}\r\n         <span class=\"fa fa-caret-down\"></span>\r\n      </button>\r\n      <ul class=\"dropdown-menu\">\r\n         <ng-container *ngIf='searchFields && searchFields.length > 0'>\r\n            <li *ngFor='let searchField of searchFields'>\r\n               <a [routerLink]=\"\" (click)=setSearchField(searchField)>{{searchField.label}}</a>\r\n            </li>\r\n         </ng-container>\r\n         <li class=\"divider\"></li>\r\n         <li><a [routerLink]=\"\" data-toggle=\"modal\" data-target=\"#advancedSearch\">Advanced Search</a></li>\r\n\r\n      </ul>\r\n   </div>\r\n   <input [type]=selectedField.dataType class=\"form-control\" name=\"dateSearch\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n   <span class=\"input-group-btn\">\r\n      <button type=\"button\" class=\"btn btn-info btn-flat\" (click)=\"search()\"><i class=\"fas fa-search\"></i></button>\r\n   </span>\r\n</div>\r\n<ng-container *ngIf=\"searchFilter && searchFilter.filters.length > 0\">\r\n   <div style=\"padding-bottom: 8px; border-bottom: 1px solid #ddd; margin-bottom: 10px;\">\r\n      <label>Search Filters:</label>\r\n      <div class=\"row\">\r\n         <ng-container *ngFor='let filter of filterPills; let rowIndex = index;'>\r\n            <span class=\"search-param\">{{filter.propertyName}} = {{filter.value}} <a (click)=\"removeFilter(rowIndex)\" style=\"cursor:pointer\"><i class=\"fa fa-times\" title=\"Remove\" style=\"color: Red; padding-left: 10px;\"></i></a></span>\r\n         </ng-container>\r\n      </div>\r\n   </div>\r\n</ng-container>\r\n\r\n<div id=\"advancedSearch\" class=\"modal fade\" role=\"dialog\">\r\n   <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"border-radius:3px\">\r\n         <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Advanced Search</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <div class=\"pull-right\">\r\n               <span style=\"padding-right:5px; vertical-align: top;\">Condition</span>\r\n               <label class=\"switch\">\r\n                  <input type=\"checkbox\" [checked]=\"conditionOption\" [(ngModel)]=\"conditionOption\">\r\n                  <span class=\"slider round\"></span>\r\n               </label>\r\n            </div>\r\n            <table class=\"table table-bordered\">\r\n               <thead>\r\n                  <tr>\r\n                     <th style=\"width: 200px;\">Field</th>\r\n                     <th>Value</th>\r\n                  </tr>\r\n               </thead>\r\n               <tbody>\r\n                  <ng-container *ngIf='searchFields && searchFields.length > 0'>\r\n                     <tr *ngFor='let searchField of searchFields'>\r\n                        <td>{{searchField.label}}</td>\r\n                        <td><input [type]=searchField.dataType class=\"form-control input-sm\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchField.value\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n                  <tr *ngIf='searchFields == null || searchFields.length == 0'>\r\n                     <td colspan=\"2\" style=\"text-align: center;\">\r\n                        No search fields defined\r\n                     </td>\r\n                  </tr>\r\n               </tbody>\r\n            </table>\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n            <button class=\"btn btn-info\" data-dismiss=\"modal\" type=\"button\" (click)=\"advancedSearch()\">Search</button>\r\n            <button class=\"btn btn-default pull-left\" data-dismiss=\"modal\" type=\"button\" (click)=\"clearSearch()\">Clear</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/views/dashboard.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/views/dashboard.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n    <h1>Dashboard</h1>\r\n</section>\r\n\r\n<!--<section class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box\">\r\n                <div class=\"box-header with-border ui-sortable-handle\">\r\n                    <h3 class=\"box-title\">Task</h3>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                   <div class=\"row\">\r\n\r\n                   </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/components/custom-fields.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/components/custom-fields.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr>\r\n            <th style=\"width:200px\">Category</th>\r\n            <th style=\"width:200px\">Display Name</th>\r\n            <th style=\"width: 140px;\">Control Type</th>\r\n            <th style=\"width: 140px;\">Data Type</th>\r\n            <th>Value(s)</th>\r\n            <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n               <a (click)=\"addCustomField()\" style=\"cursor:pointer\">\r\n                  <i class=\"fas fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n               </a>\r\n            </th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='customFields && customFields.length > 0'>\r\n            <tr *ngFor='let customField of customFields; let rowIndex = index;'>\r\n               <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"customField.category\"></td>\r\n               <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"customField.label\"></td>\r\n               <td>\r\n                  <mat-select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"customField.controlType\">\r\n                     <mat-option [value]=1>Text</mat-option>\r\n                     <mat-option [value]=2>Dropdown</mat-option>\r\n                     <mat-option [value]=3>Date</mat-option>\r\n                     <mat-option [value]=4>Radio</mat-option>\r\n                     <mat-option [value]=5>Checkbox</mat-option>\r\n                     <!--<mat-option *ngFor=\"let control of keys(controlType)\" [value]=\"controlType[control]\">{{control}}</mat-option>-->\r\n                  </mat-select>\r\n               </td>\r\n               <td>\r\n                  <mat-select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"customField.dataType\">\r\n                     <mat-option [value]=1>String</mat-option>\r\n                     <mat-option [value]=2>Number</mat-option>\r\n                     <mat-option [value]=3>Boolean</mat-option>\r\n                     <mat-option [value]=4>Date</mat-option>\r\n                  </mat-select>\r\n               </td>\r\n               <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"customField.controlType=='Date' || customField.controlType=='Text'\" [(ngModel)]=\"customField.values\"></td>\r\n               <td style=\"text-align:center;padding-top: 14px;\">\r\n                  <a (click)=\"deleteCustomField(rowIndex)\" style=\"cursor:pointer\">\r\n                     <i class=\"fas fa-trash-alt\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                  </a>\r\n               </td>\r\n            </tr>\r\n         </ng-container>\r\n         <tr *ngIf='customFields == null || customFields.length == 0'>\r\n            <td colspan=\"6\" class=\"check-mail\" style=\"text-align: center;\">\r\n               Custom fields not defined\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/components/supplier.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/components/supplier.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr>\r\n            <th>Supplier</th>\r\n            <th>SKU</th>\r\n            <th>Stock Qty</th>\r\n            <th>Price</th>\r\n            <th>Currency</th>\r\n            <th>Valid From</th>\r\n            <th>Valid To</th>\r\n            <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n               <a (click)=\"addNewSupplier()\" style=\"cursor:pointer\">\r\n                  <i class=\"fas fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n               </a>\r\n            </th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='supplierList && supplierList.length > 0'>\r\n            <tr *ngFor='let supplier of supplierList; let rowIndex = index;'>\r\n               <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.name\"></td>\r\n               <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.sku\"></td>\r\n               <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.stockQty\"></td>\r\n               <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n               <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.currency\"></td>\r\n               <td><input type=\"date\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [ngModel]=\"supplier.validFrom | date:'yyyy-MM-dd'\" (ngModelChange)=\"supplier.validFrom = $event\"></td>\r\n               <td><input type=\"date\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [ngModel]=\"supplier.validTo | date:'yyyy-MM-dd'\" (ngModelChange)=\"supplier.validTo = $event\"></td>\r\n               <td style=\"text-align:center;padding-top: 14px;\">\r\n                  <a (click)=\"deleteSupplier(rowIndex)\" style=\"cursor:pointer\">\r\n                     <i class=\"fas fa-trash-alt\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                  </a>\r\n               </td>\r\n            </tr>\r\n         </ng-container>\r\n         <tr *ngIf='supplierList == null || supplierList.length == 0'>\r\n            <td colspan=\"8\" class=\"check-mail\" style=\"text-align: center;\">\r\n               Supplier not defined\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/cable-details.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/cable-details.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Cable Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"cable.name\" required/>\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"cable.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"isUnderground\" class=\"control-label\" style=\"width:100%\">&nbsp;</label>\r\n                              <mat-checkbox name=\"isUnderground\" [(ngModel)]=\"cable.isUnderground\" [checked]=\"cable.isUnderground\">Is Underground Cable</mat-checkbox>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"cable.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"cable.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"cable.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#cableInfo\">Cable Information</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"cableInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"noOfTubes\" class=\"control-label\">Number of Tubes</label>\r\n                                    <input type=\"number\" name=\"noOfTubes\" class=\"form-control input-sm\" [(ngModel)]=\"cable.noOfTubes\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"corePerTube\" class=\"control-label\">Core Per Tube</label>\r\n                                    <input type=\"number\" name=\"corePerTube\" class=\"form-control input-sm\" [(ngModel)]=\"cable.corePerTube\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#optics\">Optical Information</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"optics\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"frequency\" class=\"control-label\">Frequency</label>\r\n                                    <input type=\"number\" name=\"frequency\" class=\"form-control input-sm\" [(ngModel)]=\"cable.optics.frequency\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"attenuationDb\" class=\"control-label\">Attenuation</label>\r\n                                    <input type=\"number\" name=\"attenuationDb\" class=\"form-control input-sm\" [(ngModel)]=\"cable.optics.attenuationDb\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"opticalInPutPower\" class=\"control-label\">Optical InPut Power</label>\r\n                                    <input type=\"number\" name=\"opticalInPutPower\" class=\"form-control input-sm\" [(ngModel)]=\"cable.optics.opticalInPutPower\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"opticalOutputPower\" class=\"control-label\">Optical Output Power</label>\r\n                                    <input type=\"number\" name=\"opticalOutputPower\" class=\"form-control input-sm\" [(ngModel)]=\"cable.optics.opticalOutputPower\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"resistanceOhm\" class=\"control-label\">Resistance</label>\r\n                                    <input type=\"number\" name=\"resistanceOhm\" class=\"form-control input-sm\" [(ngModel)]=\"cable.optics.resistanceOhm\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"wavelength\" class=\"control-label\">Wavelength</label>\r\n                                    <input type=\"number\" name=\"wavelength\" class=\"form-control input-sm\" [(ngModel)]=\"cable.optics.wavelength\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"cable.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"cable.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"cable.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"cable.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/chamber-details.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/chamber-details.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Chamber Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.name\" required />\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"chamber.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#chamberInfo\">Chamber Information</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"chamberInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"category\" class=\"control-label\">Category</label>\r\n                                    <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.category\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"closureType\" class=\"control-label\">Closure Type</label>\r\n                                    <input type=\"text\" name=\"closureType\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.closureType\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"spliceTrayCount\" class=\"control-label\">Splice Tray Count</label>\r\n                                    <input type=\"text\" name=\"spliceTrayCount\" class=\"form-control input-sm\" [(ngModel)]=\"chamber.spliceTrayCount\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"isBuried\" class=\"control-label\" style=\"width:100%\">&nbsp;</label>\r\n                                    <mat-checkbox name=\"isBuried\" [(ngModel)]=\"chamber.isBuried\" [checked]=\"chamber.isBuried\">Is Buried</mat-checkbox>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"chamber.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"chamber.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"chamber.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"chamber.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/duct-details.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/duct-details.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Duct Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"duct.name\" required/>\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"duct.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"duct.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"duct.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"duct.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#ductInfo\">Duct Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"ductInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"height\" class=\"control-label\">Height</label>\r\n                                    <input type=\"number\" name=\"height\" class=\"form-control input-sm\" [(ngModel)]=\"duct.height\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"width\" class=\"control-label\">Width</label>\r\n                                    <input type=\"number\" name=\"width\" class=\"form-control input-sm\" [(ngModel)]=\"duct.width\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"innerDiameter\" class=\"control-label\">Inner Diameter</label>\r\n                                    <input type=\"number\" name=\"innerDiameter\" class=\"form-control input-sm\" [(ngModel)]=\"duct.innerDiameter\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"outerDiameter\" class=\"control-label\">Outer Diameter</label>\r\n                                    <input type=\"number\" name=\"outerDiameter\" class=\"form-control input-sm\" [(ngModel)]=\"duct.outerDiameter\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"duct.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"duct.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"duct.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"duct.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/entity-list.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/entity-list.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Entity List</h3>\r\n               <div class=\"box-tools pull-right\">\r\n                  <div class=\"btn-group\" data-toggle=\"btn-toggle\">\r\n                     <button aria-expanded=\"false\" class=\"btn btn-primary btn-xs dropdown-toggle\" data-toggle=\"dropdown\" style=\"text-align: left;\" type=\"button\">\r\n                        New Entity\r\n                     <div class=\"fa fa-caret-down pull-right\" style=\"padding-top: 2px;padding-right: 2px;padding-left: 10px;\"></div>\r\n                     </button>\r\n                     <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['cable','']\">Cable</a></li>\r\n                        <li><a [routerLink]=\"['chamber','']\">Chamber</a></li>\r\n                        <li><a [routerLink]=\"['duct','']\">Duct</a></li>\r\n                        <li><a [routerLink]=\"['odf','']\">ODF</a></li>\r\n                        <li><a [routerLink]=\"['pole','']\">Pole</a></li>\r\n                        <li><a [routerLink]=\"['pop','']\">POP</a></li>\r\n                        <li><a [routerLink]=\"['spliceclosure','']\">Splice Closure</a></li>\r\n                        <li><a [routerLink]=\"['splitter','']\">Splitter</a></li>\r\n                        <!--<li class=\"divider\"></li>-->\r\n                        <li><a [routerLink]=\"['homepass','']\">Homepass</a></li>\r\n                     </ul>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <div class=\"input-group input-group-sm\" style=\"padding-bottom:20px\">\r\n                  <div class=\"input-group-btn\">\r\n                     <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width:100px;text-align: left; border-radius: 3px;\">\r\n                        {{selectedEntityType}}\r\n                        <span class=\"fa fa-caret-down btn-caret-down\"></span>\r\n                     </button>\r\n                     <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('Cable')\">Cable</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('Chamber')\">Chamber</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('Duct')\">Duct</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('ODF')\">ODF</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('Pole')\">Pole</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('SpliceClosure')\">Splice Closure</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('Splitter')\">Splitter</a></li>\r\n                        <li><a [routerLink]=\"\" (click)=\"onEntityTypeChange('Homepass')\">Homepass</a></li>\r\n                     </ul>\r\n                  </div>\r\n                  <div class=\"input-group-btn\" style=\"padding-left:10px\">\r\n                     <button type=\"button\" class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width:100px;border-bottom-right-radius: 0px;border-top-right-radius: 0px;text-align: left;\">\r\n                        {{selectedField.label}}\r\n                        <span class=\"fa fa-caret-down btn-caret-down\"></span>\r\n                     </button>\r\n                     <ul class=\"dropdown-menu\">\r\n                        <ng-container *ngIf='searchFields && searchFields.length > 0'>\r\n                           <li *ngFor='let searchField of searchFields'>\r\n                              <a [routerLink]=\"\" (click)=setSearchField(searchField)>{{searchField.label}}</a>\r\n                           </li>\r\n                        </ng-container>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a [routerLink]=\"\" data-toggle=\"modal\" data-target=\"#advancedSearch\">Advanced Search</a></li>\r\n\r\n                     </ul>\r\n                  </div>\r\n                  <input [type]=selectedField.dataType class=\"form-control\" name=\"dateSearch\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n                  <span class=\"input-group-btn\">\r\n                     <button type=\"button\" class=\"btn btn-info btn-flat\" (click)=\"currentPage = 1; search()\"><i class=\"fas fa-search\"></i></button>\r\n                  </span>\r\n               </div>\r\n               <div>\r\n                  <div class=\"pull-left\">\r\n                     <span style=\"padding-right: 10px;font-size: small;\">Pages</span>\r\n                     <div class=\"btn-group\" style=\"padding-right: 10px;\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle btn-sm\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                           <span style=\"padding-right: 5px;\"> {{pageSize}} </span>\r\n                           <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\">\r\n                           <li><a [routerLink]=\"\" (click)=\"pageSize = 10; getFormData()\">10</a></li>\r\n                           <li><a [routerLink]=\"\" (click)=\"pageSize = 20; getFormData()\">20</a></li>\r\n                           <li><a [routerLink]=\"\" (click)=\"pageSize = 50; getFormData()\">50</a></li>\r\n                           <li><a [routerLink]=\"\" (click)=\"pageSize = 100; getFormData()\">100</a></li>\r\n                        </ul>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"pull-right\">\r\n                     <span style=\"padding-right: 10px;font-size: small;\">Showing page {{currentPage}} of {{totalPages}}</span>\r\n                     <div class=\"btn-group\" style=\"padding-bottom:5px\">\r\n                        <button class=\"btn btn-default btn-sm\" type=\"button\" (click)=\"setPage(currentPage - 1)\" [ngClass]=\"{disabled:currentPage === 1}\"><i class=\"fa fa-chevron-left fa-fw\"></i></button>\r\n                        <button class=\"btn btn-default btn-sm\" type=\"button\" (click)=\"setPage(currentPage + 1)\" [ngClass]=\"{disabled:currentPage === totalPages}\"><i class=\"fa fa-chevron-right fa-fw\"></i></button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\">Name</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:72px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='entities && entities.length > 0'>\r\n                        <tr *ngFor='let entity of entities'>\r\n                           <td>{{entity.name}}</td>\r\n                           <td>{{entity.updatedBy}}</td>\r\n                           <td>{{entity.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"[selectedEntityType.toLowerCase(), entity.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(entity)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='entities == null || entities.length == 0'>\r\n                        <td colspan=\"4\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n<div id=\"advancedSearch\" class=\"modal fade\" role=\"dialog\">\r\n   <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"border-radius:3px\">\r\n         <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Advanced Search</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <table class=\"table table-bordered\">\r\n               <thead>\r\n                  <tr>\r\n                     <th style=\"width: 200px;\">Field</th>\r\n                     <th>Value</th>\r\n                  </tr>\r\n               </thead>\r\n               <tbody>\r\n                  <ng-container *ngIf='searchFields && searchFields.length > 0'>\r\n                     <tr *ngFor='let searchField of searchFields'>\r\n                        <td>{{searchField.label}}</td>\r\n                        <td><input [type]=searchField.dataType class=\"form-control input-sm\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchField.value\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n                  <tr *ngIf='searchFields == null || searchFields.length == 0'>\r\n                     <td colspan=\"2\" style=\"text-align: center;\">\r\n                        No search fields defined\r\n                     </td>\r\n                  </tr>\r\n               </tbody>\r\n            </table>\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n            <button class=\"btn btn-info\" data-dismiss=\"modal\" type=\"button\" (click)=\"advancedSearch()\">Search</button>\r\n            <button class=\"btn btn-default pull-left\" data-dismiss=\"modal\" type=\"button\" (click)=\"clearSearch()\">Close</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/homepass-details.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/homepass-details.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Homepass Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"homepass.name\" required/>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#homepassInfo\">Homepass Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"homepassInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"homepass.type\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"homepass.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"homepass.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"homepass.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/odf-details.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/odf-details.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">ODF Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"odf.name\" required />\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"odf.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"odf.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"odf.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"odf.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#odfInfo\">ODF Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"odfInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"noOfPorts\" class=\"control-label\">No Of Ports</label>\r\n                                    <input type=\"number\" name=\"noOfPorts\" class=\"form-control input-sm\" [(ngModel)]=\"odf.noOfPorts\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"mountingType\" class=\"control-label\">Mounting Type</label>\r\n                                    <input type=\"text\" name=\"mountingType\" class=\"form-control input-sm\" [(ngModel)]=\"odf.mountingType\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"height\" class=\"control-label\">Height</label>\r\n                                    <input type=\"number\" name=\"height\" class=\"form-control input-sm\" [(ngModel)]=\"odf.height\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"width\" class=\"control-label\">Width</label>\r\n                                    <input type=\"number\" name=\"width\" class=\"form-control input-sm\" [(ngModel)]=\"odf.width\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"length\" class=\"control-label\">Length</label>\r\n                                    <input type=\"number\" name=\"length\" class=\"form-control input-sm\" [(ngModel)]=\"odf.length\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"odf.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"odf.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"odf.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"odf.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/pole-details.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/pole-details.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Pole Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"pole.name\" required/>\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"pole.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"pole.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"pole.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"pole.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#poleInfo\">Pole Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"poleInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"height\" class=\"control-label\">Height</label>\r\n                                    <input type=\"number\" name=\"height\" class=\"form-control input-sm\" [(ngModel)]=\"pole.height\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"pole.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"pole.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"pole.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"pole.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/spliceClosure-details.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/spliceClosure-details.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">SpliceClosure Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"spliceClosure.name\" required />\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"spliceClosure.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"spliceClosure.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"spliceClosure.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"spliceClosure.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#spliceClosureInfo\">SpliceClosure Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"spliceClosureInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"noOfPorts\" class=\"control-label\">No Of Ports</label>\r\n                                    <input type=\"number\" name=\"noOfPorts\" class=\"form-control input-sm\" [(ngModel)]=\"spliceClosure.noOfPorts\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"spliceClosure.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"spliceClosure.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"spliceClosure.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"spliceClosure.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/splitter-details.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/splitter-details.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Entities <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/entities']\"> Entities</a></li>\r\n   </ol>\r\n</section>\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">Splitter Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           General Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.name\" required />\r\n                           </div>\r\n                           <div class=\"form-group col-md-6\">\r\n                              <label for=\"parentType\" class=\"control-label\">Parent Type</label>\r\n                              <mat-select name=\"parentType\" [(ngModel)]=\"splitter.parentEntityType\">\r\n                                 <mat-option>Select Parent Entity Type</mat-option>\r\n                                 <mat-option value=\"Cable\">Cable</mat-option>\r\n                                 <mat-option value=\"Chamber\">Chamber</mat-option>\r\n                                 <mat-option value=\"Duct\">Duct</mat-option>\r\n                                 <mat-option value=\"ODF\">ODF</mat-option>\r\n                                 <mat-option value=\"Pole\">Pole</mat-option>\r\n                                 <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n                                 <mat-option value=\"Splitter\">Splitter</mat-option>\r\n                              </mat-select>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#make\">Make</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"make\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"type\" class=\"control-label\">Type</label>\r\n                                    <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.type\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                                    <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.brand\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"model\" class=\"control-label\">Model</label>\r\n                                    <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.model\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#splitterInfo\">Splitter Information</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"splitterInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"splitterRatio\" class=\"control-label\">Splitter Ratio</label>\r\n                                    <input type=\"text\" name=\"splitterRatio\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.splitterRatio\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"lossValue\" class=\"control-label\">Loss Value</label>\r\n                                    <input type=\"number\" name=\"lossValue\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.lossValue\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#optics\">Optical Information</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"optics\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"frequency\" class=\"control-label\">Frequency</label>\r\n                                    <input type=\"number\" name=\"frequency\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.optics.frequency\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"attenuationDb\" class=\"control-label\">Attenuation</label>\r\n                                    <input type=\"number\" name=\"attenuationDb\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.optics.attenuationDb\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"opticalInPutPower\" class=\"control-label\">Optical InPut Power</label>\r\n                                    <input type=\"number\" name=\"opticalInPutPower\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.optics.opticalInPutPower\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"opticalOutputPower\" class=\"control-label\">Optical Output Power</label>\r\n                                    <input type=\"number\" name=\"opticalOutputPower\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.optics.opticalOutputPower\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"resistanceOhm\" class=\"control-label\">Resistance</label>\r\n                                    <input type=\"number\" name=\"resistanceOhm\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.optics.resistanceOhm\" />\r\n                                 </div>\r\n                                 <div class=\"form-group col-md-6\">\r\n                                    <label for=\"wavelength\" class=\"control-label\">Wavelength</label>\r\n                                    <input type=\"number\" name=\"wavelength\" class=\"form-control input-sm\" [(ngModel)]=\"splitter.optics.wavelength\" />\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#zoomSettings\">Zoom Settings</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"zoomSettings\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-11\">\r\n                                 <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"splitter.zoomLevel\"></mat-slider>\r\n                              </div>\r\n                              <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                                 <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"splitter.zoomLevel\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#pricing\">Pricing</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"pricing\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <suppliers [supplierList]=\"splitter.suppliers\"></suppliers>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#customFields\">Custom Fields</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"customFields\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <custom-fields [customFields]=\"splitter.customFields\"></custom-fields>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generalSettings/views/generalSetting-details.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generalSettings/views/generalSetting-details.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage General Settings</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">General Settings</h3>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate>\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <!--<div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#boundaryHierarchies\">Boundary Hierarchies</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"boundaryHierarchies\" class=\"panel-collapse collapse in\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th style=\"width: 50px; text-align:center\">Level</th>\r\n                                             <th>Name</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addBoundaryHierarchy()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fa fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='generalSettings.boundaryHierarchies && generalSettings.boundaryHierarchies.length > 0'>\r\n                                             <tr *ngFor='let boundary of generalSettings.boundaryHierarchies; let rowIndex = index;'>\r\n                                                <td style=\"text-align:center\">{{rowIndex + 1}}</td>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"boundary.name\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteboundaryHierarchy(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fa fa-remove\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='generalSettings.boundaryHierarchies == null || generalSettings.boundaryHierarchies.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Boundry Hierarchies not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#constructionStages\">Construction Stages</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"constructionStages\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th>Name</th>\r\n                                             <th style=\"width: 202px;\">Color Code</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addConstructionStage()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fa fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='generalSettings.constructionStages && generalSettings.constructionStages.length > 0'>\r\n                                             <tr *ngFor='let constStage of generalSettings.constructionStages; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"constStage.name\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td>\r\n                                                   <input type=\"text\" class=\"form-control input-sm text-color-picker\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"constStage.colorCode\" readonly>\r\n                                                </td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteConstructionStage(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fa fa-remove\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='generalSettings.constructionStages == null || generalSettings.constructionStages.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Construction Stages not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#activationStages\">Activation Stage</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"activationStages\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th>Name</th>\r\n                                             <th style=\"width: 202px;\">Color Code</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addActivationStage()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fa fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='generalSettings.activationStages && generalSettings.activationStages.length > 0'>\r\n                                             <tr *ngFor='let activationStage of generalSettings.activationStages; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"activationStage.name\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td>\r\n                                                   <input type=\"text\" class=\"form-control input-sm text-color-picker\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"activationStage.colorCode\" readonly>\r\n                                                </td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteActivationStage(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fa fa-remove\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='generalSettings.activationStages == null || generalSettings.activationStages.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Activation Stages not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accessibilities\">Accessibilities</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"accessibilities\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th>Name</th>\r\n                                             <th style=\"width: 202px;\">Color Code</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addAccessibility()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fa fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='generalSettings.accessibilities && generalSettings.accessibilities.length > 0'>\r\n                                             <tr *ngFor='let accessibility of generalSettings.accessibilities; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"accessibility.name\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td>\r\n                                                   <input type=\"text\" class=\"form-control input-sm text-color-picker\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"accessibility.colorCode\" readonly>\r\n                                                </td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteAccessibility(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fa fa-remove\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='generalSettings.accessibilities == null || generalSettings.accessibilities.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Accessibilities not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#hierarchyTypes\">Hierarchy Types</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"hierarchyTypes\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th>Name</th>\r\n                                             <th style=\"width: 202px;\">Color Code</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addHierarchyType()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fa fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; color: #3e53a4;margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='generalSettings.hierarchyTypes && generalSettings.hierarchyTypes.length > 0'>\r\n                                             <tr *ngFor='let hierarchyType of generalSettings.hierarchyTypes; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"hierarchyType.name\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td>\r\n                                                   <input type=\"text\" class=\"form-control input-sm text-color-picker\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"hierarchyType.colorCode\" readonly>\r\n                                                </td>\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteHierarchyType(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fa fa-remove\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='generalSettings.hierarchyTypes == null || generalSettings.hierarchyTypes.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                Hierarchy types not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#opticalLinkBudget\">Optical Link Budget</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"opticalLinkBudget\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th style=\"width:50px;\">WaveLength Name</th>\r\n                                             <th style=\"width:150px;\">Cable length loss (dB)</th>\r\n                                             <th style=\"width: 130px;\"> Splice Loss (dB)</th>\r\n                                             <th style=\"width: 120px;\">Patching Loss (dB)</th>\r\n                                             <th style=\"width: 120px;\">Patch - connector loss (dB)</th>\r\n                                             <th style=\"text-align: center;padding: 2px 0px;width: 50px;\">\r\n                                                <a (click)=\"addOpticalLinkBudget()\" style=\"cursor:pointer\">\r\n                                                   <i class=\"fa fa-plus-circle\" title=\"Add\" style=\"font-size: 20px; margin: 5px;\"></i>\r\n                                                </a>\r\n                                             </th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='generalSettings.opticalLinkBudget && generalSettings.opticalLinkBudget.length > 0'>\r\n                                             <tr *ngFor='let opticalLink of generalSettings.opticalLinkBudget; let rowIndex = index;'>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"opticalLink.waveLengthName\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"opticalLink.cablelengthLoss\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"opticalLink.spliceLoss\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"opticalLink.patchingLoss\" (keypress)=\"restrictAlpha($event)\"></td>\r\n                                                <td><input type=\"text\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"opticalLink.patchConnectorLoss\" (keypress)=\"restrictAlpha($event)\"></td>\r\n\r\n                                                <td style=\"text-align:center;padding-top: 14px;\">\r\n                                                   <a (click)=\"deleteOpticalLinkBudget(rowIndex)\" style=\"cursor:pointer\">\r\n                                                      <i class=\"fa fa-remove\" title=\"Delete\" style=\"font-size: 15px; color: Red;\"></i>\r\n                                                   </a>\r\n                                                </td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='generalSettings.opticalLinkBudget == null || generalSettings.opticalLinkBudget.length == 0'>\r\n                                             <td colspan=\"5\" class=\"check-mail\" style=\"text-align: center;\">\r\n                                                opticalLinkBudget not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>-->\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#fileAttachments\">File Attachments</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"fileAttachments\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdDate\" class=\"control-label\">Size limit (MBs)</label>\r\n                                    <input type=\"number\" class=\"form-control input-sm\" name=\"sizeLimit\" required value=\"0\" onkeypress=\"return (event.keyCode != 8 || event.keyCode !=32 ) && !(event.keyCode < 48 || event.keyCode > 57)\" [(ngModel)]=\"generalSettings.fileAttachmentLimit\">\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <div>\r\n                        <button type=\"submit\" class=\"btn btn-success\" tabindex=\"12\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/views/group-details.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/views/group-details.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Groups <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/groups']\"> Groups</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Group Details</h3>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"saveGroup()\" [disabled]=\"groupForm.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"groupForm\" action=\"javascript:{}\" #groupForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">Group Info</h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                 <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                                 <input type=\"text\" class=\"form-control input-sm\" name=\"name\" pattern=\"[a-zA-Z][a-zA-Z-' ]+\" minlength=\"3\" maxlength=\"50\"  #name=\"ngModel\" required [(ngModel)]=\"group.name\">\r\n                                 <div *ngIf=\"name.errors && (name.dirty || name.touched)\">\r\n                                    <div [hidden]=\"!name.errors.required\">\r\n                                       <span style=\"color: red;\">Name required</span>\r\n                                    </div>\r\n                                    <div [hidden]=\"!name.errors.minlength\">\r\n                                       <span style=\"color:red;\">Name should be in 3 to 50 characters</span>\r\n                                    </div>\r\n                                    <div [hidden]=\"!name.errors.pattern\">\r\n                                       <span style=\"color: red;\">Invalid characters! </span>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <label for=\"description\" class=\"control-label\">Description </label>\r\n                                 <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"group.description\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accessPermissions\">Access Permissions</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"accessPermissions\" class=\"panel-collapse collapse in\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                  <!--<p-tree [value]=\"treeModules\" selectionMode=\"checkbox\" [(selection)]=\"selectedModules\" [style]=\"{'width':'100%'}\" dataKey=\"id\"></p-tree>-->\r\n                                  <p-treeTable [value]=\"treeModules\" selectionMode=\"checkbox\" [(selection)]=\"selectedModules\">\r\n                                    <ng-template pTemplate=\"header\" let-columns>\r\n                                      <tr>\r\n                                        <th style=\"padding-left: 15px;\"><p-treeTableHeaderCheckbox></p-treeTableHeaderCheckbox> <span style=\"padding-left: 8px;\">Modules</span></th>\r\n                                      </tr>\r\n                                    </ng-template>\r\n                                    <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n                                      <tr>\r\n                                        <td>\r\n                                          <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                                          <p-treeTableCheckbox [value]=\"rowNode\"></p-treeTableCheckbox>\r\n                                          {{rowData.name}}\r\n                                        </td>\r\n                                      </tr>\r\n                                    </ng-template>\r\n                                  </p-treeTable>\r\n                                </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <!--<div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#remarks\">Remarks</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"remarks\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"remarks\" class=\"control-label\">Comments</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" name=\"remarks\" tabindex=\"8\" [(ngModel)]=\"group.remarks\"></textarea>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#otherInfo\">Other Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"otherInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdDate\" class=\"control-label\">Created Date</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"createdDate\" tabindex=\"9\" [ngModel]=\"group.createdDate | date:'dd/MM/yyyy'\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdBy\" class=\"control-label\">Created By</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"createdBy\" tabindex=\"10\" [(ngModel)]=\"group.createdBy\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"lastUpdatedDate\" class=\"control-label\">Last Updated Date</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"lastUpdatedDate\" tabindex=\"11\" [ngModel]=\"group.updatedDate | date:'dd/MM/yyyy'\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"updatedBy\" class=\"control-label\">Updated By</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"updatedBy\" tabindex=\"12\" [(ngModel)]=\"group.updatedBy\" disabled>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>-->\r\n                  </div>\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <div>\r\n                        <button type=\"submit\" class=\"btn btn-danger\" tabindex=\"13\" (click)=\"goBack()\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-success\" tabindex=\"14\" style=\"margin-left:10px\" (click)=\"saveGroup()\" [disabled]=\"groupForm.invalid\">Save</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/views/group-list.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/views/group-list.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Groups</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Group List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Group</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"Description\" class=\"table-sorter\" style=\"max-width:300px\">Description</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:60px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='groups && groups.length > 0'>\r\n                        <tr *ngFor='let group of groups'>\r\n                           <td>{{group.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{group.description}}</td>\r\n                           <td>{{group.updatedBy}}</td>\r\n                           <td>{{group.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', group.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(group)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='groups == null || groups.length == 0'>\r\n                        <td colspan=\"5\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layers/views/layer-details.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layers/views/layer-details.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Layers <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/layers']\"> Layers</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Layer Details</h3>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">Layer Info</h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                 <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                                 <input type=\"text\" class=\"form-control input-sm\" name=\"name\" pattern=\"[a-zA-Z][a-zA-Z-' ]+\" minlength=\"3\" maxlength=\"50\" #name=\"ngModel\" required [(ngModel)]=\"layer.name\">\r\n                                 <div *ngIf=\"name.errors && (name.dirty || name.touched)\">\r\n                                    <div [hidden]=\"!name.errors.required\">\r\n                                       <span style=\"color: red;\">Name required</span>\r\n                                    </div>\r\n                                    <div [hidden]=\"!name.errors.minlength\">\r\n                                       <span style=\"color:red;\">Name should be in 3 to 50 characters</span>\r\n                                    </div>\r\n                                    <div [hidden]=\"!name.errors.pattern\">\r\n                                       <span style=\"color: red;\">Invalid characters! </span>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <label for=\"description\" class=\"control-label\">Description </label>\r\n                                 <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"layer.description\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accessPermissions\">Access Permissions</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"accessPermissions\" class=\"panel-collapse collapse in\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <p-treeTable [value]=\"treeModules\" selectionMode=\"checkbox\" [(selection)]=\"selectedModules\">\r\n                                       <ng-template pTemplate=\"header\" let-columns>\r\n                                          <tr>\r\n                                             <th style=\"padding-left: 15px;\"><p-treeTableHeaderCheckbox></p-treeTableHeaderCheckbox> <span style=\"padding-left: 8px;\">Modules/Permissions</span></th>\r\n                                          </tr>\r\n                                       </ng-template>\r\n                                       <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n                                          <tr>\r\n                                             <td>\r\n                                                <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                                                <p-treeTableCheckbox [value]=\"rowNode\"></p-treeTableCheckbox>\r\n                                                {{rowData.name}}\r\n                                             </td>\r\n                                          </tr>\r\n                                       </ng-template>\r\n                                    </p-treeTable>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <!--<div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#remarks\">Remarks</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"remarks\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"remarks\" class=\"control-label\">Comments</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" name=\"remarks\" tabindex=\"8\" [(ngModel)]=\"group.remarks\"></textarea>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#otherInfo\">Other Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"otherInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdDate\" class=\"control-label\">Created Date</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"createdDate\" tabindex=\"9\" [ngModel]=\"group.createdDate | date:'dd/MM/yyyy'\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdBy\" class=\"control-label\">Created By</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"createdBy\" tabindex=\"10\" [(ngModel)]=\"group.createdBy\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"lastUpdatedDate\" class=\"control-label\">Last Updated Date</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"lastUpdatedDate\" tabindex=\"11\" [ngModel]=\"group.updatedDate | date:'dd/MM/yyyy'\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"updatedBy\" class=\"control-label\">Updated By</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"updatedBy\" tabindex=\"12\" [(ngModel)]=\"group.updatedBy\" disabled>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>-->\r\n                  </div>\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <div>\r\n                        <button type=\"submit\" class=\"btn btn-danger\" tabindex=\"13\" (click)=\"goBack()\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-success\" tabindex=\"14\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layers/views/layer-list.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layers/views/layer-list.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Layers</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Layer List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Layer</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table id=\"layers\" class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"Description\" class=\"table-sorter\" style=\"max-width:300px\">Description</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width:150px\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width:125px\">Updated On</th>\r\n                        <th style=\"width:72px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='layers && layers.length > 0'>\r\n                        <tr *ngFor='let layer of layers'>\r\n                           <td>{{layer.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{layer.description}}</td>\r\n                           <td>{{layer.updatedBy}}</td>\r\n                           <td>{{layer.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', layer.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(layer)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='layers == null || layers.length == 0'>\r\n                        <td colspan=\"5\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/views/role-details.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/views/role-details.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Roles <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/roles']\"> Roles</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Role Details</h3>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">Role Info</h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                 <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                                 <input type=\"text\" class=\"form-control input-sm\" name=\"name\" pattern=\"[a-zA-Z][a-zA-Z-' ]+\" minlength=\"3\" maxlength=\"50\" #name=\"ngModel\" required [(ngModel)]=\"role.name\">\r\n                                 <div *ngIf=\"name.errors && (name.dirty || name.touched)\">\r\n                                    <div [hidden]=\"!name.errors.required\">\r\n                                       <span style=\"color: red;\">Name required</span>\r\n                                    </div>\r\n                                    <div [hidden]=\"!name.errors.minlength\">\r\n                                       <span style=\"color:red;\">Name should be in 3 to 50 characters</span>\r\n                                    </div>\r\n                                    <div [hidden]=\"!name.errors.pattern\">\r\n                                       <span style=\"color: red;\">Invalid characters! </span>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                 <label for=\"description\" class=\"control-label\">Description </label>\r\n                                 <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"role.description\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accessPermissions\">Access Permissions</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"accessPermissions\" class=\"panel-collapse collapse in\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <p-treeTable [value]=\"treeModules\" selectionMode=\"checkbox\" [(selection)]=\"selectedModules\">\r\n                                       <ng-template pTemplate=\"header\" let-columns>\r\n                                          <tr>\r\n                                             <th style=\"padding-left: 15px;\"><p-treeTableHeaderCheckbox></p-treeTableHeaderCheckbox> <span style=\"padding-left: 8px;\">Modules/Permissions</span></th>\r\n                                          </tr>\r\n                                       </ng-template>\r\n                                       <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n                                          <tr>\r\n                                             <td>\r\n                                                <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                                                <p-treeTableCheckbox [value]=\"rowNode\"></p-treeTableCheckbox>\r\n                                                {{rowData.name}}\r\n                                             </td>\r\n                                          </tr>\r\n                                       </ng-template>\r\n                                    </p-treeTable>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <!--<div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#remarks\">Remarks</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"remarks\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"remarks\" class=\"control-label\">Comments</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" name=\"remarks\" tabindex=\"8\" [(ngModel)]=\"group.remarks\"></textarea>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#otherInfo\">Other Info</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"otherInfo\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdDate\" class=\"control-label\">Created Date</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"createdDate\" tabindex=\"9\" [ngModel]=\"group.createdDate | date:'dd/MM/yyyy'\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"createdBy\" class=\"control-label\">Created By</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"createdBy\" tabindex=\"10\" [(ngModel)]=\"group.createdBy\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"lastUpdatedDate\" class=\"control-label\">Last Updated Date</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"lastUpdatedDate\" tabindex=\"11\" [ngModel]=\"group.updatedDate | date:'dd/MM/yyyy'\" disabled>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"updatedBy\" class=\"control-label\">Updated By</label>\r\n                                    <input type=\"text\" class=\"form-control input-sm\" name=\"updatedBy\" tabindex=\"12\" [(ngModel)]=\"group.updatedBy\" disabled>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>-->\r\n                  </div>\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <div>\r\n                        <button type=\"submit\" class=\"btn btn-danger\" tabindex=\"13\" (click)=\"goBack()\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-success\" tabindex=\"14\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/views/role-list.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/views/role-list.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Roles</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Role List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Role</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"Description\" class=\"table-sorter\" style=\"max-width:300px\">Description</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width:150px\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width:125px\">Updated On</th>\r\n                        <th style=\"width:60px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='roles && roles.length > 0'>\r\n                        <tr *ngFor='let role of roles'>\r\n                           <td>{{role.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{role.description}}</td>\r\n                           <td>{{role.updatedBy}}</td>\r\n                           <td>{{role.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', role.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(role)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='roles == null || roles.length == 0'>\r\n                        <td colspan=\"5\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/views/user-details.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/views/user-details.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Users <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/users']\"> Users</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <h3 class=\"box-title\">User Details</h3>\r\n               <div class=\"box-tools pull-right\" data-original-title=\"Status\" data-toggle=\"tooltip\" title=\"\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"saveUser()\" [disabled]=\"userForm.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <form name=\"userForm\" action=\"javascript:{}\" #userForm=\"ngForm\" novalidate autocomplete=\"off\">\r\n               <div class=\"box-body\">\r\n                  <div class=\"panel panel-default\">\r\n                     <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                           Personal Information\r\n                        </h4>\r\n                     </div>\r\n                     <div class=\"panel-collapse collapse in\">\r\n                        <div class=\"panel-body\">\r\n                           <div class=\"form-group\">\r\n                              <label for=\"loginId\" class=\"control-label\">Login Id <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" class=\"form-control input-sm\" name=\"loginId\" required [(ngModel)]=\"user.loginId\" #loginId=\"ngModel\" pattern=\"[A-Za-z0-9]*\" minlength=\"5\" maxlength=\"20\">\r\n                              <div *ngIf=\"loginId.errors && (loginId.dirty || loginId.touched)\" style=\"font-size: smaller;\">\r\n                                 <div [hidden]=\"!loginId.errors.required\">\r\n                                    <span style=\"color:red ;\"> Login Id is required</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!loginId.errors.minlength\">\r\n                                    <span style=\"color:red;\"> Login Id should be in 5 to 20 characters</span>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label for=\"password\" class=\"control-label\">Password <span style=\"color:red;\">*</span></label>\r\n                              <div class=\"pull-right\" style=\"font-size:smaller\">\r\n                                 <!--<p-checkbox name=\"changePassword\" value=\"changePassword\" label=\"Change Password\" (onChange)=\"setNewPassword($event)\" *ngIf=\"user.id\"></p-checkbox>-->\r\n                                 <mat-checkbox name=\"changePassword\" [checked]=\"changePassword\" (change)=\"setNewPassword($event)\" *ngIf=\"user.id\">Change Password</mat-checkbox>\r\n                              </div>\r\n                              <input type=\"password\" class=\"form-control input-sm\" name=\"password\" required #password=\"ngModel\" [(ngModel)]=\"user.password\" pattern=\"(?=^.{8,30}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;?/>.<,])(?!.*\\s).*$\" [disabled]=\"changePassword? null: 'disabled'\">\r\n                              <div *ngIf=\"password.errors && (password.dirty || password.touched)\" style=\"font-size: smaller;\">\r\n                                 <div [hidden]=\"!password.errors.required\">\r\n                                    <span style=\"color:red ;\"> Password is required</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!password.errors.minlength\">\r\n                                    <span style=\"color:red;\"> Password should be min 8 characters long</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!password.errors.pattern\">\r\n                                    <span style=\"color: red;\"> Password needs to have minimum of 8 characters, 1 capital letter, 1 number and 1 symbol. </span>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label for=\"firstName\" class=\"control-label\">First Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" class=\"form-control input-sm\" name=\"firstName\" required #firstName=\"ngModel\" [(ngModel)]=\"user.firstName\" pattern=\"[a-zA-Z][a-zA-Z-' ]+\" minlength=\"3\" maxlength=\"50\">\r\n                              <div *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\" style=\"font-size: smaller;\">\r\n                                 <div [hidden]=\"!firstName.errors.required\">\r\n                                    <span style=\"color: red;\">First Name is required</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!firstName.errors.minlength\">\r\n                                    <span style=\"color:red;\"> First Name should be in 3 to 50 characters</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!firstName.errors.pattern\">\r\n                                    <span style=\"color: red;\"> Invalid characters! </span>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label for=\"lastName\" class=\"control-label\">Last Name <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"text\" class=\"form-control input-sm\" name=\"lastName\" required #lastName=\"ngModel\" [(ngModel)]=\"user.lastName\" pattern=\"[a-zA-Z][a-zA-Z-' ]+\" minlength=\"3\" maxlength=\"50\">\r\n                              <div *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\" style=\"font-size: smaller;\">\r\n                                 <div [hidden]=\"!lastName.errors.required\">\r\n                                    <span style=\"color: red;\">Last Name is required</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!lastName.errors.pattern\">\r\n                                    <span style=\"color: red;\"> Invalid characters! </span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!lastName.errors.minlength\">\r\n                                    <span style=\"color:red;\"> Last Name should be in 3 to 50 characters</span>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label for=\"emailId\" class=\"control-label\">Email Id <span style=\"color:red;\">*</span></label>\r\n                              <input type=\"email\" class=\"form-control input-sm\" name=\"emailId\" #emailId=\"ngModel\" required [(ngModel)]=\"user.emailId\" maxlength=\"50\" minlength=\"8\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\">\r\n                              <div *ngIf=\"emailId.errors && (emailId.dirty || emailId.touched)\" style=\"font-size: smaller;\">\r\n                                 <div [hidden]=\"!emailId.errors.required\">\r\n                                    <span style=\"color: red;\">Email Id is required</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!emailId.errors.minlength\">\r\n                                    <span style=\"color:red;\"> Email Id should be in 8 to 50 characters</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!emailId.errors.pattern\">\r\n                                    <span style=\"color: red;\"> Invalid Email Id</span>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label for=\"phoneNumber\" class=\"control-label\">Phone <span style=\"color:red;\"></span></label>\r\n                              <input type=\"text\" class=\"form-control input-sm\" name=\"phoneNumber\" minlength=\"8\" maxlength=\"20\" #phoneNumber=\"ngModel\" pattern=\"[0-9+-.]+\" [(ngModel)]=\"user.phoneNumber\">\r\n                              <div *ngIf=\"phoneNumber.errors && (phoneNumber.dirty || phoneNumber.touched)\" style=\"font-size: smaller;\">\r\n                                 <div [hidden]=\"!phoneNumber.errors.minlength\">\r\n                                    <span style=\"color:red; \"> Phone Number  should be in 8 to 20 characters</span>\r\n                                 </div>\r\n                                 <div [hidden]=\"!phoneNumber.errors.pattern\">\r\n                                    <span style=\"color:red;\"> Invalid characters!</span>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"panel-group\" id=\"accordion\">\r\n\r\n                     <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accessPermissions\">Access Permissions</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"accessPermissions\" class=\"panel-collapse collapse in\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"roles\" class=\"control-label\">Role <span style=\"color:red;\">*</span></label>\r\n                                    <mat-select name=\"roles\" [(ngModel)]=\"user.roleId\" #role=\"ngModel\">\r\n                                       <mat-option *ngFor=\"let role of roles\" [value]=\"role.id\">\r\n                                          {{role.name}}\r\n                                       </mat-option>\r\n                                    </mat-select>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"country\" class=\"control-label\">Groups</label>\r\n                                    <table class=\"table table-bordered table-striped\">\r\n                                       <thead>\r\n                                          <tr>\r\n                                             <th style=\"width:40px;text-align: center;\">\r\n                                                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                                              [checked]=\"user.groups?.length > 0 && isAllSelected()\"\r\n                                                              [indeterminate]=\"user.groups?.length > 0 && !isAllSelected()\">\r\n                                                </mat-checkbox>\r\n                                             </th>\r\n                                             <th>Groups</th>\r\n                                          </tr>\r\n                                       </thead>\r\n                                       <tbody>\r\n                                          <ng-container *ngIf='groups && groups.length > 0'>\r\n                                             <tr *ngFor='let group of groups'>\r\n                                                <td style=\"text-align: center;\">\r\n                                                   <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                                                                 (change)=\"$event ? toggleSelection(group) : null\"\r\n                                                                 [checked]=\"user.groups?.includes(group.id)\">\r\n                                                   </mat-checkbox>\r\n                                                </td>\r\n                                                <td>{{group.name}}</td>\r\n                                             </tr>\r\n                                          </ng-container>\r\n                                          <tr *ngIf='groups == null || groups.length == 0'>\r\n                                             <td colspan=\"2\" style=\"text-align: center;\">\r\n                                                Groups not defined\r\n                                             </td>\r\n                                          </tr>\r\n                                       </tbody>\r\n                                    </table>\r\n                                 </div>\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"country\" class=\"control-label\">Activate User <span style=\"color:red;\">*</span></label>\r\n\r\n                                    <mat-radio-group name=\"isActive\" [(ngModel)]=\"user.isActive\">\r\n                                       <div class=\"form-group\" style=\"padding-bottom:20px;\">\r\n                                          <mat-radio-button [value]=\"true\" style=\"padding-right:20px\">Yes</mat-radio-button>\r\n                                          <mat-radio-button [value]=\"false\">No</mat-radio-button>\r\n                                       </div>\r\n                                    </mat-radio-group>\r\n\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n\r\n                     <!--<div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                           <h4 class=\"panel-title\">\r\n                              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#remarks\">Remarks</a>\r\n                           </h4>\r\n                        </div>\r\n                        <div id=\"remarks\" class=\"panel-collapse collapse\">\r\n                           <div class=\"panel-body\">\r\n                              <div class=\"col-sm-12\">\r\n                                 <div class=\"form-group\">\r\n                                    <label for=\"remarks\" class=\"control-label\">Comments</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" name=\"remarks\" [(ngModel)]=\"user.remarks\"></textarea>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>-->\r\n\r\n                  </div>\r\n\r\n               </div>\r\n               <div class=\"box-footer\">\r\n                  <div class=\"pull-right\">\r\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                     <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"saveUser()\" [disabled]=\"userForm.invalid\">Save</button>\r\n                  </div>\r\n               </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/views/user-list.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/views/user-list.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Users</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">User List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <div class=\"btn-group\" data-toggle=\"btn-toggle\">\r\n                     <button id=\"AddNewUser\" [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New User</button>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table id=\"users\" class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"LoginId\" class=\"table-sorter\">Login Id</th>\r\n                        <th data-column=\"FirstName\" class=\"table-sorter\">Name</th>\r\n                        <th data-column=\"EmailId\" class=\"table-sorter\" style=\"width:250px\">Email Id</th>\r\n                        <th data-column=\"Role\" class=\"table-sorter\">Role</th>\r\n                        <th data-column=\"Status\" class=\"table-sorter\" style=\"width:80px\">Status</th>\r\n                        <th style=\"width:72px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='users && users.length > 0'>\r\n                        <tr *ngFor='let user of users'>\r\n                           <td>{{user.loginId}}</td>\r\n                           <td>{{user.firstName}} {{user.lastName}}</td>\r\n                           <td>{{user.emailId}}</td>\r\n                           <td>{{getRoleDescription(user.roleId)}}</td>\r\n                           <td>{{user.isActive == true ? 'Active' : 'Block'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', user.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(user)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='users == null || users.length == 0'>\r\n                        <td colspan=\"6\" class=\"check-mail\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/accessories/accessory.module.ts":
/*!*************************************************!*\
  !*** ./src/app/accessories/accessory.module.ts ***!
  \*************************************************/
/*! exports provided: AccessoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryModule", function() { return AccessoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _accessory_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessory.routes */ "./src/app/accessories/accessory.routes.ts");
/* harmony import */ var _services_accessory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/accessory.service */ "./src/app/accessories/services/accessory.service.ts");
/* harmony import */ var _views_accessory_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/accessory-details */ "./src/app/accessories/views/accessory-details.ts");
/* harmony import */ var _views_accessory_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/accessory-list */ "./src/app/accessories/views/accessory-list.ts");










let AccessoryModule = class AccessoryModule {
};
AccessoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _accessory_routes__WEBPACK_IMPORTED_MODULE_6__["AccessoryRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [
            _views_accessory_list__WEBPACK_IMPORTED_MODULE_9__["AccessoryList"],
            _views_accessory_details__WEBPACK_IMPORTED_MODULE_8__["AccessoryDetails"],
        ],
        providers: [
            _services_accessory_service__WEBPACK_IMPORTED_MODULE_7__["AccessoryService"],
        ]
    })
], AccessoryModule);



/***/ }),

/***/ "./src/app/accessories/accessory.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/accessories/accessory.routes.ts ***!
  \*************************************************/
/*! exports provided: accessoryRoutes, AccessoryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessoryRoutes", function() { return accessoryRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryRouting", function() { return AccessoryRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_accessory_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/accessory-details */ "./src/app/accessories/views/accessory-details.ts");
/* harmony import */ var _views_accessory_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/accessory-list */ "./src/app/accessories/views/accessory-list.ts");




const accessoryRoutes = [
    {
        path: 'accessories',
        children: [
            { path: '', component: _views_accessory_list__WEBPACK_IMPORTED_MODULE_3__["AccessoryList"] },
            { path: 'details', component: _views_accessory_details__WEBPACK_IMPORTED_MODULE_2__["AccessoryDetails"] },
            { path: 'details/:id', component: _views_accessory_details__WEBPACK_IMPORTED_MODULE_2__["AccessoryDetails"] }
        ]
    },
];
const AccessoryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(accessoryRoutes);


/***/ }),

/***/ "./src/app/accessories/models/accessory.ts":
/*!*************************************************!*\
  !*** ./src/app/accessories/models/accessory.ts ***!
  \*************************************************/
/*! exports provided: Accessory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessory", function() { return Accessory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class Accessory extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
    constructor() {
        super(...arguments);
        this.customFields = new Array();
        this.suppliers = new Array();
    }
}


/***/ }),

/***/ "./src/app/accessories/services/accessory.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/accessories/services/accessory.service.ts ***!
  \***********************************************************/
/*! exports provided: AccessoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryService", function() { return AccessoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let AccessoryService = class AccessoryService {
    constructor(http) {
        this.http = http;
        this.getAccessoriesApi = 'Accessories/GetAccessories/';
        this.getAccessoryApi = 'Accessories/GetAccessory/';
        this.checkNameExistsApi = 'Accessories/CheckNameExists/';
        this.saveAccessoryApi = 'Accessories/SaveAccessory/';
        this.deleteAccessoryApi = 'Accessories/DeleteAccessory/';
    }
    getAccessories(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "UpdatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getAccessoriesApi, paginationRequest);
    }
    getAccessory(accessoryId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('accessoryId', accessoryId);
        return this.http.get(this.getAccessoryApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveAccessory(accessory) {
        return this.http.post(this.saveAccessoryApi, accessory);
    }
    deleteAccessory(accessoryId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('accessoryId', accessoryId);
        return this.http.delete(this.deleteAccessoryApi, { params });
    }
};
AccessoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AccessoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AccessoryService);



/***/ }),

/***/ "./src/app/accessories/views/accessory-details.ts":
/*!********************************************************!*\
  !*** ./src/app/accessories/views/accessory-details.ts ***!
  \********************************************************/
/*! exports provided: AccessoryDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryDetails", function() { return AccessoryDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_accessory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/accessory.service */ "./src/app/accessories/services/accessory.service.ts");
/* harmony import */ var _models_accessory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/accessory */ "./src/app/accessories/models/accessory.ts");







let AccessoryDetails = class AccessoryDetails {
    constructor(location, route, accessoryService, helper) {
        this.location = location;
        this.route = route;
        this.accessoryService = accessoryService;
        this.helper = helper;
        this.accessory = new _models_accessory__WEBPACK_IMPORTED_MODULE_6__["Accessory"]();
        this.title = "New Accessory";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.accessoryId = params['id'];
            if (this.accessoryId != null)
                this.title = "Edit Accessory";
            else {
                this.title = "New Accessory";
            }
            this.getFormData(this.accessoryId);
        });
    }
    getFormData(accessoryId) {
        if (this.accessoryId != null) {
            $("#ajax-loading").show();
            this.accessoryService.getAccessory(this.accessoryId).subscribe(resp => {
                this.accessory = new _models_accessory__WEBPACK_IMPORTED_MODULE_6__["Accessory"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.accessory = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.accessory = new _models_accessory__WEBPACK_IMPORTED_MODULE_6__["Accessory"]();
                this.helper.showAlertMessage("Unable to fetch accessory details", "error");
            });
        }
        else
            this.accessory = new _models_accessory__WEBPACK_IMPORTED_MODULE_6__["Accessory"]();
    }
    addNewSupplier() {
        if (this.accessory.suppliers == null)
            this.accessory.suppliers = [];
        this.accessory.suppliers.push({
            name: "",
            sku: "",
            price: null,
            validFrom: "",
            validTo: ""
        });
    }
    deleteSupplier(index) {
        this.accessory.suppliers.splice(index, 1);
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.accessory);
            if (errorMessages.length == 0) {
                this.accessoryService.saveAccessory(this.accessory).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Accessory information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save accessory information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save accessory information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(accessory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (accessory.name == null || accessory.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.accessoryService.checkNameExists(accessory.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
AccessoryDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_accessory_service__WEBPACK_IMPORTED_MODULE_5__["AccessoryService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
AccessoryDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accessory-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/views/accessory-details.html")).default,
        providers: [_services_accessory_service__WEBPACK_IMPORTED_MODULE_5__["AccessoryService"]],
    })
], AccessoryDetails);



/***/ }),

/***/ "./src/app/accessories/views/accessory-list.ts":
/*!*****************************************************!*\
  !*** ./src/app/accessories/views/accessory-list.ts ***!
  \*****************************************************/
/*! exports provided: AccessoryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryList", function() { return AccessoryList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_accessory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/accessory.service */ "./src/app/accessories/services/accessory.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let AccessoryList = class AccessoryList {
    //conditionOption: boolean = true;
    constructor(accessoryService, helper) {
        this.accessoryService = accessoryService;
        this.helper = helper;
        this.accessories = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'parentEntityType', label: 'Parent Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Accessories...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        this.accessoryService.getAccessories(paginationRequest).subscribe(resp => {
            this.accessories = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.accessories = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered accessories.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.accessories = null;
            let msg = `Unable to fetch accessories : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching accessories.";
        });
    }
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(accessory) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Accessory</b>",
            overlay: false,
            content: "Do you want to delete accessory - " + accessory.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.accessoryService.deleteAccessory(accessory.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Accessory deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting accessory", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting accessory", "error");
                });
            }
        }).open();
    }
};
AccessoryList.ctorParameters = () => [
    { type: _services_accessory_service__WEBPACK_IMPORTED_MODULE_2__["AccessoryService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
AccessoryList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accessory-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accessories/views/accessory-list.html")).default,
        providers: [_services_accessory_service__WEBPACK_IMPORTED_MODULE_2__["AccessoryService"]]
    })
], AccessoryList);



/***/ }),

/***/ "./src/app/activityLogs/activityLog.module.ts":
/*!****************************************************!*\
  !*** ./src/app/activityLogs/activityLog.module.ts ***!
  \****************************************************/
/*! exports provided: ActivityLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogModule", function() { return ActivityLogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _activityLog_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activityLog.routes */ "./src/app/activityLogs/activityLog.routes.ts");
/* harmony import */ var _services_activityLog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/activityLog.service */ "./src/app/activityLogs/services/activityLog.service.ts");
/* harmony import */ var _views_activityLog_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/activityLog-details */ "./src/app/activityLogs/views/activityLog-details.ts");
/* harmony import */ var _views_activityLog_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/activityLog-list */ "./src/app/activityLogs/views/activityLog-list.ts");










let ActivityLogModule = class ActivityLogModule {
};
ActivityLogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _activityLog_routes__WEBPACK_IMPORTED_MODULE_6__["ActivityLogRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [
            _views_activityLog_list__WEBPACK_IMPORTED_MODULE_9__["ActivityLogList"],
            _views_activityLog_details__WEBPACK_IMPORTED_MODULE_8__["ActivityLogDetails"]
        ],
        providers: [
            _services_activityLog_service__WEBPACK_IMPORTED_MODULE_7__["ActivityLogService"],
        ]
    })
], ActivityLogModule);



/***/ }),

/***/ "./src/app/activityLogs/activityLog.routes.ts":
/*!****************************************************!*\
  !*** ./src/app/activityLogs/activityLog.routes.ts ***!
  \****************************************************/
/*! exports provided: activityLogRoutes, ActivityLogRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityLogRoutes", function() { return activityLogRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogRouting", function() { return ActivityLogRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_activityLog_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/activityLog-details */ "./src/app/activityLogs/views/activityLog-details.ts");
/* harmony import */ var _views_activityLog_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/activityLog-list */ "./src/app/activityLogs/views/activityLog-list.ts");




const activityLogRoutes = [
    {
        path: 'activityLogs',
        children: [
            { path: '', component: _views_activityLog_list__WEBPACK_IMPORTED_MODULE_3__["ActivityLogList"] },
            { path: 'details/:id', component: _views_activityLog_details__WEBPACK_IMPORTED_MODULE_2__["ActivityLogDetails"] },
        ]
    },
];
const ActivityLogRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(activityLogRoutes);


/***/ }),

/***/ "./src/app/activityLogs/models/activityLog.ts":
/*!****************************************************!*\
  !*** ./src/app/activityLogs/models/activityLog.ts ***!
  \****************************************************/
/*! exports provided: ActivityLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLog", function() { return ActivityLog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class ActivityLog extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
}


/***/ }),

/***/ "./src/app/activityLogs/services/activityLog.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/activityLogs/services/activityLog.service.ts ***!
  \**************************************************************/
/*! exports provided: ActivityLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogService", function() { return ActivityLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ActivityLogService = class ActivityLogService {
    constructor(http) {
        this.http = http;
        this.getActivityLogsApi = 'ActivityLogs/GetActivityLogs/';
        this.getActivityLogApi = 'ActivityLogs/GetActivityLog/';
    }
    getActivityLogs(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "ActivityOn",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getActivityLogsApi, paginationRequest);
    }
    getActivityLog(activityLogId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('activityLogId', activityLogId);
        return this.http.get(this.getActivityLogApi, { params });
    }
};
ActivityLogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ActivityLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ActivityLogService);



/***/ }),

/***/ "./src/app/activityLogs/views/activityLog-details.ts":
/*!***********************************************************!*\
  !*** ./src/app/activityLogs/views/activityLog-details.ts ***!
  \***********************************************************/
/*! exports provided: ActivityLogDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogDetails", function() { return ActivityLogDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_activityLog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/activityLog.service */ "./src/app/activityLogs/services/activityLog.service.ts");
/* harmony import */ var _models_activityLog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/activityLog */ "./src/app/activityLogs/models/activityLog.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");







let ActivityLogDetails = class ActivityLogDetails {
    constructor(location, route, activityLogService, helper) {
        this.location = location;
        this.route = route;
        this.activityLogService = activityLogService;
        this.helper = helper;
        this.activityLogId = "";
        this.activityLog = new _models_activityLog__WEBPACK_IMPORTED_MODULE_5__["ActivityLog"]();
        this.module_function = "";
        this.otherInfo = "";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.activityLogId = params['id'];
            this.getFormData(this.activityLogId);
        });
    }
    getFormData(activityLogId) {
        $("#ajax-loading").show();
        this.activityLogService.getActivityLog(activityLogId).subscribe(resp => {
            if (resp.status.toLowerCase() == "error") {
                this.helper.showAlertMessage(resp.message, "error");
            }
            else {
                if (resp.data != null) {
                    this.activityLog = resp.data;
                    this.module_function = this.activityLog.module + " / " + this.activityLog.action;
                    this.otherInfo = JSON.stringify(JSON.parse(this.activityLog.otherInfo), undefined, 3);
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.helper.showAlertMessage("Error fetching activity log.", "error");
        });
    }
    goBack() {
        this.location.back();
    }
};
ActivityLogDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_activityLog_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"] }
];
ActivityLogDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activityLog-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activityLogs/views/activityLog-details.html")).default,
        providers: [_services_activityLog_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogService"]],
    })
], ActivityLogDetails);



/***/ }),

/***/ "./src/app/activityLogs/views/activityLog-list.ts":
/*!********************************************************!*\
  !*** ./src/app/activityLogs/views/activityLog-list.ts ***!
  \********************************************************/
/*! exports provided: ActivityLogList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogList", function() { return ActivityLogList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _services_activityLog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/activityLog.service */ "./src/app/activityLogs/services/activityLog.service.ts");





let ActivityLogList = class ActivityLogList {
    //conditionOption: boolean = true;
    constructor(activityLogService, helper) {
        this.activityLogService = activityLogService;
        this.helper = helper;
        this.activityLogs = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'ActivityOn', label: 'Activity Date', dataType: "date", value: "" });
        this.searchFields.push({ field: 'LoginId', label: 'Accessed By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'SourceIP', label: 'Source IP', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Application', label: 'Application', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Module', label: 'Module', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Action', label: 'Action', dataType: "text", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading activity logs...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].noSort;
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        this.activityLogService.getActivityLogs(paginationRequest).subscribe(resp => {
            this.activityLogs = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.activityLogs = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no activity logs generated.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.activityLogs = null;
            let msg = `Unable to fetch activity logs : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching activity logs.";
        });
    }
    //setSearchField(searchField: any) {
    //    this.selectedField = searchField;
    //    this.searchText = '';
    //}
    //search() {
    //    this.clearSearch();
    //    this.searchFields.forEach(x => x.value = '');
    //    if (this.searchText.trim() != "") {
    //        if (this.selectedField.dataType == 'date') {
    //            this.searchFilter.filters.push({
    //                propertyName: this.selectedField.field,
    //                operator: Operator.greaterThanOrEqual,
    //                value: new Date(this.searchText).toISOString(),
    //                caseSensitive: false
    //            });
    //            this.searchFilter.filters.push({
    //                propertyName: this.selectedField.field,
    //                operator: Operator.lessThan,
    //                value: this.helper.addDays(new Date(this.searchText), 1).toISOString(),
    //                caseSensitive: false
    //            });
    //        }
    //        else {
    //            this.searchFilter.filters.push({
    //                propertyName: this.selectedField.field,
    //                operator: Operator.contains,
    //                value: this.searchText,
    //                caseSensitive: false
    //            });
    //        }
    //    }
    //    this.getFormData();
    //}
    //advancedSearch() {
    //    this.clearSearch();
    //    this.searchText = "";
    //    for (var i = 0; i < this.searchFields.length; i++) {
    //        if (this.searchFields[i].value) {
    //            if (this.searchFields[i].dataType == 'date') {
    //                this.searchFilter.filters.push({
    //                    propertyName: this.searchFields[i].field,
    //                    operator: Operator.greaterThanOrEqual,
    //                    value: new Date(this.searchFields[i].value).toISOString(),
    //                    caseSensitive: false
    //                });
    //                this.searchFilter.filters.push({
    //                    propertyName: this.searchFields[i].field,
    //                    operator: Operator.lessThan,
    //                    value: this.helper.addDays(new Date(this.searchFields[i].value), 1).toISOString(),
    //                    caseSensitive: false
    //                });
    //            }
    //            else {
    //                this.searchFilter.filters.push({
    //                    propertyName: this.searchFields[i].field,
    //                    operator: Operator.contains,
    //                    value: this.searchFields[i].value,
    //                    caseSensitive: false
    //                });
    //            }
    //            //let operator = this.searchFields[i].dataType == 'date' ? Operator.equals : Operator.contains
    //            //this.searchFilter.filters.push({
    //            //    propertyName: this.searchFields[i].field,
    //            //    operator: operator,
    //            //    value: this.searchFields[i].value,
    //            //    caseSensitive: false
    //            //});
    //        }
    //    }
    //    this.getFormData();
    //}
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].ascending;
        }
        this.getFormData();
    }
};
ActivityLogList.ctorParameters = () => [
    { type: _services_activityLog_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"] }
];
ActivityLogList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activityLog-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activityLogs/views/activityLog-list.html")).default,
        providers: [_services_activityLog_service__WEBPACK_IMPORTED_MODULE_4__["ActivityLogService"]]
    })
], ActivityLogList);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");
/* harmony import */ var _common_models_loginUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/loginUser */ "./src/app/common/models/loginUser.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/helper */ "./src/app/common/helper.ts");





const STORE_KEY = 'NERP_Admin_LastAction';
const MINUTES_UNITL_AUTO_LOGOUT = 60; // in mins
const CHECK_INTERVAL = 15000; // in ms
let AppComponent = class AppComponent {
    constructor(authService, helperService) {
        this.authService = authService;
        this.helperService = helperService;
    }
    ngOnInit() {
        this.loginUser = new _common_models_loginUser__WEBPACK_IMPORTED_MODULE_3__["LoginUser"]();
        this.getFormData();
        this.initListener();
        this.initInterval();
    }
    getFormData() {
        this.loginUser = new _common_models_loginUser__WEBPACK_IMPORTED_MODULE_3__["LoginUser"]();
        this.authService.getLoginUserProfile().subscribe(res => {
            if (res.data && res.status.toLowerCase() == "ok") {
                this.loginUser = res.data;
                this.authService.loginUser = this.loginUser;
            }
            else {
                this.helperService.showAlertMessage(res.message, "error");
                this.onLogout();
            }
        }, err => {
            this.helperService.showAlertMessage(err.message, 'error');
            this.onLogout();
        });
    }
    initListener() {
        document.body.addEventListener('click', () => this.reset());
        document.body.addEventListener('mouseover', () => this.reset());
        document.body.addEventListener('mouseout', () => this.reset());
        document.body.addEventListener('keydown', () => this.reset());
        document.body.addEventListener('keyup', () => this.reset());
        document.body.addEventListener('keypress', () => this.reset());
    }
    reset() {
        this.setLastAction(Date.now());
    }
    getLastAction() {
        return parseInt(localStorage.getItem(STORE_KEY));
    }
    setLastAction(lastAction) {
        localStorage.setItem(STORE_KEY, lastAction.toString());
    }
    initInterval() {
        setInterval(() => {
            this.check();
        }, CHECK_INTERVAL);
    }
    check() {
        const now = Date.now();
        const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        const diff = timeleft - now;
        const isTimeout = diff < 0;
        if (isTimeout) {
            localStorage.clear();
            this.onLogout();
        }
    }
    onLogout() {
        localStorage.removeItem('NERP-Admin-token');
        //this.router.navigate(['/login']);
        window.location.href = '/Auth/Logout';
    }
    getFeatureAccess(featureCode) {
        return this.authService.getFeatureAccess(featureCode);
    }
};
AppComponent.ctorParameters = () => [
    { type: _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_interceptors_cacheInterceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/interceptors/cacheInterceptor */ "./src/app/common/interceptors/cacheInterceptor.ts");
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");
/* harmony import */ var _dashboard_views_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/views/dashboard */ "./src/app/dashboard/views/dashboard.ts");
/* harmony import */ var _groups_group_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./groups/group.module */ "./src/app/groups/group.module.ts");
/* harmony import */ var _roles_role_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./roles/role.module */ "./src/app/roles/role.module.ts");
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/user.module */ "./src/app/users/user.module.ts");
/* harmony import */ var _entities_entities_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entities/entities.module */ "./src/app/entities/entities.module.ts");
/* harmony import */ var _layers_layer_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layers/layer.module */ "./src/app/layers/layer.module.ts");
/* harmony import */ var _accessories_accessory_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./accessories/accessory.module */ "./src/app/accessories/accessory.module.ts");
/* harmony import */ var _civilworks_civilwork_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./civilworks/civilwork.module */ "./src/app/civilworks/civilwork.module.ts");
/* harmony import */ var _generalSettings_generalSettings_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./generalSettings/generalSettings.module */ "./src/app/generalSettings/generalSettings.module.ts");
/* harmony import */ var _activityLogs_activityLog_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./activityLogs/activityLog.module */ "./src/app/activityLogs/activityLog.module.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/helper */ "./src/app/common/helper.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _dashboard_views_dashboard__WEBPACK_IMPORTED_MODULE_11__["Dashboard"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["Routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _groups_group_module__WEBPACK_IMPORTED_MODULE_12__["GroupModule"],
            _roles_role_module__WEBPACK_IMPORTED_MODULE_13__["RoleModule"],
            _users_user_module__WEBPACK_IMPORTED_MODULE_14__["UserModule"],
            _entities_entities_module__WEBPACK_IMPORTED_MODULE_15__["EntitiesModule"],
            _layers_layer_module__WEBPACK_IMPORTED_MODULE_16__["LayerModule"],
            _accessories_accessory_module__WEBPACK_IMPORTED_MODULE_17__["AccessoryModule"],
            _civilworks_civilwork_module__WEBPACK_IMPORTED_MODULE_18__["CivilworkModule"],
            _generalSettings_generalSettings_module__WEBPACK_IMPORTED_MODULE_19__["GeneralSettingsModule"],
            _activityLogs_activityLog_module__WEBPACK_IMPORTED_MODULE_20__["ActivityLogModule"],
        ],
        providers: [
            _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _common_helper__WEBPACK_IMPORTED_MODULE_21__["Helper"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _common_interceptors_cacheInterceptor__WEBPACK_IMPORTED_MODULE_9__["CacheInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_views_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/views/dashboard */ "./src/app/dashboard/views/dashboard.ts");



const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _dashboard_views_dashboard__WEBPACK_IMPORTED_MODULE_2__["Dashboard"] },
    {
        path: 'groups',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./groups/group.module */ "./src/app/groups/group.module.ts")).then(m => m.GroupModule)
    },
    {
        path: 'roles',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./roles/role.module */ "./src/app/roles/role.module.ts")).then(m => m.RoleModule)
    },
    {
        path: 'users',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./users/user.module */ "./src/app/users/user.module.ts")).then(m => m.UserModule)
    },
    {
        path: 'entities',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./entities/entities.module */ "./src/app/entities/entities.module.ts")).then(a => a.EntitiesModule)
    },
    {
        path: 'accessories',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./accessories/accessory.module */ "./src/app/accessories/accessory.module.ts")).then(a => a.AccessoryModule)
    },
    {
        path: 'civilworks',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./civilworks/civilwork.module */ "./src/app/civilworks/civilwork.module.ts")).then(a => a.CivilworkModule)
    },
    {
        path: 'layers',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./layers/layer.module */ "./src/app/layers/layer.module.ts")).then(a => a.LayerModule)
    },
    {
        path: 'generalSettings',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./generalSettings/generalSettings.module */ "./src/app/generalSettings/generalSettings.module.ts")).then(a => a.GeneralSettingsModule)
    },
    {
        path: 'activityLogs',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./activityLogs/activityLog.module */ "./src/app/activityLogs/activityLog.module.ts")).then(a => a.ActivityLogModule)
    }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/civilworks/civilwork.module.ts":
/*!************************************************!*\
  !*** ./src/app/civilworks/civilwork.module.ts ***!
  \************************************************/
/*! exports provided: CivilworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilworkModule", function() { return CivilworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _civilwork_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./civilwork.routes */ "./src/app/civilworks/civilwork.routes.ts");
/* harmony import */ var _services_civilwork_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/civilwork.service */ "./src/app/civilworks/services/civilwork.service.ts");
/* harmony import */ var _views_civilwork_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/civilwork-details */ "./src/app/civilworks/views/civilwork-details.ts");
/* harmony import */ var _views_civilwork_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/civilwork-list */ "./src/app/civilworks/views/civilwork-list.ts");










let CivilworkModule = class CivilworkModule {
};
CivilworkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _civilwork_routes__WEBPACK_IMPORTED_MODULE_6__["CivilworkRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [
            _views_civilwork_list__WEBPACK_IMPORTED_MODULE_9__["CivilworkList"],
            _views_civilwork_details__WEBPACK_IMPORTED_MODULE_8__["CivilworkDetails"],
        ],
        providers: [
            _services_civilwork_service__WEBPACK_IMPORTED_MODULE_7__["CivilworkService"],
        ]
    })
], CivilworkModule);



/***/ }),

/***/ "./src/app/civilworks/civilwork.routes.ts":
/*!************************************************!*\
  !*** ./src/app/civilworks/civilwork.routes.ts ***!
  \************************************************/
/*! exports provided: civilworkRoutes, CivilworkRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "civilworkRoutes", function() { return civilworkRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilworkRouting", function() { return CivilworkRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_civilwork_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/civilwork-details */ "./src/app/civilworks/views/civilwork-details.ts");
/* harmony import */ var _views_civilwork_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/civilwork-list */ "./src/app/civilworks/views/civilwork-list.ts");




const civilworkRoutes = [
    {
        path: 'civilworks',
        children: [
            { path: '', component: _views_civilwork_list__WEBPACK_IMPORTED_MODULE_3__["CivilworkList"] },
            { path: 'details', component: _views_civilwork_details__WEBPACK_IMPORTED_MODULE_2__["CivilworkDetails"] },
            { path: 'details/:id', component: _views_civilwork_details__WEBPACK_IMPORTED_MODULE_2__["CivilworkDetails"] }
        ]
    },
];
const CivilworkRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(civilworkRoutes);


/***/ }),

/***/ "./src/app/civilworks/models/civilwork.ts":
/*!************************************************!*\
  !*** ./src/app/civilworks/models/civilwork.ts ***!
  \************************************************/
/*! exports provided: Civilwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Civilwork", function() { return Civilwork; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class Civilwork extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
    constructor() {
        super(...arguments);
        this.customFields = new Array();
        this.suppliers = new Array();
    }
}


/***/ }),

/***/ "./src/app/civilworks/services/civilwork.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/civilworks/services/civilwork.service.ts ***!
  \**********************************************************/
/*! exports provided: CivilworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilworkService", function() { return CivilworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let CivilworkService = class CivilworkService {
    constructor(http) {
        this.http = http;
        this.getCivilworksApi = 'Civilworks/GetCivilworks/';
        this.getCivilworkApi = 'Civilworks/GetCivilwork/';
        this.checkNameExistsApi = 'Civilworks/CheckNameExists/';
        this.saveCivilworkApi = 'Civilworks/SaveCivilwork/';
        this.deleteCivilworkApi = 'Civilworks/DeleteCivilwork/';
    }
    getCivilworks(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getCivilworksApi, paginationRequest);
    }
    getCivilwork(civilworkId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('civilworkId', civilworkId);
        return this.http.get(this.getCivilworkApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveCivilwork(civilwork) {
        return this.http.post(this.saveCivilworkApi, civilwork);
    }
    deleteCivilwork(civilworkId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('civilworkId', civilworkId);
        return this.http.delete(this.deleteCivilworkApi, { params });
    }
};
CivilworkService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CivilworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CivilworkService);



/***/ }),

/***/ "./src/app/civilworks/views/civilwork-details.ts":
/*!*******************************************************!*\
  !*** ./src/app/civilworks/views/civilwork-details.ts ***!
  \*******************************************************/
/*! exports provided: CivilworkDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilworkDetails", function() { return CivilworkDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_civilwork_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/civilwork.service */ "./src/app/civilworks/services/civilwork.service.ts");
/* harmony import */ var _models_civilwork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/civilwork */ "./src/app/civilworks/models/civilwork.ts");







let CivilworkDetails = class CivilworkDetails {
    constructor(location, route, civilworkService, helper) {
        this.location = location;
        this.route = route;
        this.civilworkService = civilworkService;
        this.helper = helper;
        this.civilwork = new _models_civilwork__WEBPACK_IMPORTED_MODULE_6__["Civilwork"]();
        this.title = "New Civilwork";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.civilworkId = params['id'];
            if (this.civilworkId != null)
                this.title = "Edit Civilwork";
            else {
                this.title = "New Civilwork";
            }
            this.getFormData(this.civilworkId);
        });
    }
    getFormData(civilworkId) {
        if (this.civilworkId != null) {
            $("#ajax-loading").show();
            this.civilworkService.getCivilwork(this.civilworkId).subscribe(resp => {
                this.civilwork = new _models_civilwork__WEBPACK_IMPORTED_MODULE_6__["Civilwork"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.civilwork = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.civilwork = new _models_civilwork__WEBPACK_IMPORTED_MODULE_6__["Civilwork"]();
                this.helper.showAlertMessage("Unable to fetch civilwork details", "error");
            });
        }
        else
            this.civilwork = new _models_civilwork__WEBPACK_IMPORTED_MODULE_6__["Civilwork"]();
    }
    addNewSupplier() {
        if (this.civilwork.suppliers == null)
            this.civilwork.suppliers = [];
        this.civilwork.suppliers.push({
            name: "",
            sku: "",
            price: null,
            validFrom: "",
            validTo: ""
        });
    }
    deleteSupplier(index) {
        this.civilwork.suppliers.splice(index, 1);
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.civilwork);
            if (errorMessages.length == 0) {
                this.civilworkService.saveCivilwork(this.civilwork).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Civilwork information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save civilwork information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save civilwork information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(civilwork) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (civilwork.name == null || civilwork.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.civilworkService.checkNameExists(civilwork.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
CivilworkDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_civilwork_service__WEBPACK_IMPORTED_MODULE_5__["CivilworkService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
CivilworkDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./civilwork-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/civilworks/views/civilwork-details.html")).default,
        providers: [_services_civilwork_service__WEBPACK_IMPORTED_MODULE_5__["CivilworkService"]],
    })
], CivilworkDetails);



/***/ }),

/***/ "./src/app/civilworks/views/civilwork-list.ts":
/*!****************************************************!*\
  !*** ./src/app/civilworks/views/civilwork-list.ts ***!
  \****************************************************/
/*! exports provided: CivilworkList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilworkList", function() { return CivilworkList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_civilwork_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/civilwork.service */ "./src/app/civilworks/services/civilwork.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let CivilworkList = class CivilworkList {
    constructor(civilworkService, helper) {
        this.civilworkService = civilworkService;
        this.helper = helper;
        this.civilworks = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'parentEntityType', label: 'Parent Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Civilworks...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        this.civilworkService.getCivilworks(paginationRequest).subscribe(resp => {
            this.civilworks = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.civilworks = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered civilworks.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.civilworks = null;
            let msg = `Unable to fetch civilworks : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching civilworks.";
        });
    }
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(civilwork) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Civilwork</b>",
            overlay: false,
            content: "Do you want to delete civilwork - " + civilwork.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.civilworkService.deleteCivilwork(civilwork.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Civilwork deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting civilwork", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting civilwork", "error");
                });
            }
        }).open();
    }
};
CivilworkList.ctorParameters = () => [
    { type: _services_civilwork_service__WEBPACK_IMPORTED_MODULE_2__["CivilworkService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
CivilworkList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./civilwork-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/civilworks/views/civilwork-list.html")).default,
        providers: [_services_civilwork_service__WEBPACK_IMPORTED_MODULE_2__["CivilworkService"]]
    })
], CivilworkList);



/***/ }),

/***/ "./src/app/common/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/common/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    authenticateUser(loginCredentials) {
        return this.http.post('/Auth/Authenticate', loginCredentials);
    }
    getLoginUserProfile() {
        return this.http.get('/Auth/GetLoginUserProfile');
    }
    getFeatureAccess(featureCode) {
        if (this.loginUser)
            return this.loginUser.features.includes(featureCode);
        else
            return false;
    }
    getFunctionalityAccess(permissionCode) {
        if (this.loginUser)
            return this.loginUser.permissions.includes(permissionCode);
        else
            return false;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/common/helper.ts":
/*!**********************************!*\
  !*** ./src/app/common/helper.ts ***!
  \**********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");



let Helper = class Helper {
    constructor() { }
    showAlertMessage(message, alertType) {
        if (alertType == "error") {
            toastr.options = {
                "closeButton": true,
                "timeOut": 3000,
                "preventDuplicates": true,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            };
            toastr.error(message, "Error").attr('style', 'width: 400px !important');
        }
        else if (alertType == "success") {
            toastr.options = {
                "closeButton": false,
                "timeOut": 3000,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            };
            toastr.success(message).attr('style', 'width: 400px !important');
        }
        else if (alertType == "info") {
            toastr.options = {
                "closeButton": false,
                "timeOut": 5000,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            };
            toastr.info(message).attr('style', 'width: 400px !important');
        }
    }
    formatBytes(bytes, decimals) {
        if (bytes == 0)
            return '0 Bytes';
        var k = 1024, dm = decimals || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    popupCenter(url, title, w, h) {
        // Fixes dual-screen position Most browsers Firefox
        var dualScreenLeft = window.screenLeft;
        var dualScreenTop = window.screenTop;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }
    getErrorMessagesText(errorMessages) {
        var li = "";
        for (let message of errorMessages) {
            li += "<li>" + message + "</li>";
        }
        return "<ul>" + li + "</li>";
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    getLastMonths(count) {
        var monthFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var months = [];
        var d = new Date();
        for (var i = 0; i < count; i++) {
            months.push({ "name": monthFull[d.getMonth()], "value": monthShort[d.getMonth()] });
            d.setMonth(d.getMonth() - 1);
        }
        return months;
    }
    getLastDay(year, month) {
        var monthIndex = this.getMonthIndex(month);
        return new Date(year, monthIndex + 1, 0).getDate();
    }
    getMonthIndex(month) {
        var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthIndex = monthShort.findIndex(x => x == month);
        return monthIndex;
    }
    addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    daysBetween(startDate, endDate) {
        let millisecondsPerDay = 1000 * 60 * 60 * 24;
        let startDateUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        let endDateUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        return Math.floor((endDateUTC - startDateUTC) / millisecondsPerDay);
    }
    static getChunks(items, chunkSize) {
        var index = 0;
        var arrayLength = items.length;
        var group = [];
        for (index = 0; index < arrayLength; index += chunkSize) {
            let chunk = items.slice(index, index + chunkSize);
            group.push(chunk);
        }
        return group;
    }
    search(selectedField, searchText, conditionOperator) {
        let searchFilter = null;
        if (searchText.trim() != "") {
            searchFilter = new _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SearchFilter"]();
            searchFilter.conditionOperator = conditionOperator;
            searchFilter.filters = new Array();
            if (selectedField.dataType == 'date') {
                searchFilter.filters.push({
                    propertyName: selectedField.field,
                    operator: _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["Operator"].greaterThanOrEqual,
                    value: new Date(searchText).toISOString(),
                    caseSensitive: false
                });
                searchFilter.filters.push({
                    propertyName: selectedField.field,
                    operator: _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["Operator"].lessThan,
                    value: this.addDays(new Date(searchText), 1).toISOString(),
                    caseSensitive: false
                });
            }
            else {
                searchFilter.filters.push({
                    propertyName: selectedField.field,
                    operator: _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["Operator"].contains,
                    value: searchText,
                    caseSensitive: false
                });
            }
        }
        return searchFilter;
    }
    advancedSearch(searchFields, conditionOperator) {
        let searchFilter = new _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SearchFilter"]();
        searchFilter.conditionOperator = conditionOperator;
        searchFilter.filters = new Array();
        for (var i = 0; i < searchFields.length; i++) {
            if (searchFields[i].value) {
                if (searchFields[i].dataType == 'date') {
                    searchFilter.filters.push({
                        propertyName: searchFields[i].field,
                        operator: _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["Operator"].greaterThanOrEqual,
                        value: new Date(searchFields[i].value).toISOString(),
                        caseSensitive: false
                    });
                    searchFilter.filters.push({
                        propertyName: searchFields[i].field,
                        operator: _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["Operator"].lessThan,
                        value: this.addDays(new Date(searchFields[i].value), 1).toISOString(),
                        caseSensitive: false
                    });
                }
                else {
                    searchFilter.filters.push({
                        propertyName: searchFields[i].field,
                        operator: _models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["Operator"].contains,
                        value: searchFields[i].value,
                        caseSensitive: false
                    });
                }
                //let operator = this.searchFields[i].dataType == 'date' ? Operator.equals : Operator.contains
                //this.searchFilter.filters.push({
                //    propertyName: this.searchFields[i].field,
                //    operator: operator,
                //    value: this.searchFields[i].value,
                //    caseSensitive: false
                //});
            }
        }
        return searchFilter;
    }
    generateTree(arr, parentId) {
        var out = [];
        for (var i in arr) {
            arr[i].label = arr[i].name;
            if (arr[i].parentId == parentId) {
                var children = this.generateTree(arr, arr[i].id);
                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }
        return out;
    }
    static generateObjectId() {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    }
    generateTreeTable(arr, parentId, expanded) {
        var out = [];
        for (var i in arr) {
            arr[i].label = arr[i].name;
            arr[i].data = {
                "name": arr[i].name
            };
            arr[i].expanded = expanded;
            if (arr[i].parentId == parentId) {
                var children = this.generateTree(arr, arr[i].id);
                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }
        return out;
    }
    findNode(id, currentNode) {
        var stack = [], node, ii;
        stack.push(currentNode);
        while (stack.length > 0) {
            node = stack.pop();
            if (node.id == id) {
                return node;
            }
            else if (node.children && node.children.length) {
                for (ii = 0; ii < node.children.length; ii += 1) {
                    stack.push(node.children[ii]);
                }
            }
        }
        return null;
    }
    log(logEntity, logType, message) {
        logEntity.log = logEntity.log + '\n' + new Date() + " [" + logType + "] " + message;
    }
    isDate(value) {
        return (null != value) && !isNaN(value) && ("undefined" !== typeof value.getDate);
    }
    static formatDate(value) {
        var dd = value.getDate();
        var mm = value.getMonth() + 1;
        var yyyy = value.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;
    }
    static groupBy(data, columnName) {
        //var groupedData;
        //data.reduce(function (result, current) {
        //    var currentVal = current[columnName];
        //    result[currentVal] = result[currentVal] || [];
        //    result[currentVal].push(current);
        //    groupedData = result;
        //}, {});
        //return groupedData;
        let group = data.reduce((r, a) => {
            r[a[columnName]] = [...r[a[columnName]] || [], a];
            return r;
        }, {});
        let tempGroups = [];
        for (var i in group) {
            tempGroups.push(group[i]);
        }
        return tempGroups;
    }
};
Helper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Helper);



/***/ }),

/***/ "./src/app/common/interceptors/cacheInterceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/interceptors/cacheInterceptor.ts ***!
  \*********************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CacheInterceptor = class CacheInterceptor {
    intercept(req, next) {
        const httpRequest = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
            })
        });
        return next.handle(httpRequest);
    }
};
CacheInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CacheInterceptor);



/***/ }),

/***/ "./src/app/common/models/customField.ts":
/*!**********************************************!*\
  !*** ./src/app/common/models/customField.ts ***!
  \**********************************************/
/*! exports provided: CustomField, ControlType, DataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomField", function() { return CustomField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlType", function() { return ControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomField {
}
var ControlType;
(function (ControlType) {
    ControlType[ControlType["TextBox"] = 1] = "TextBox";
    ControlType[ControlType["Dropdown"] = 2] = "Dropdown";
    ControlType[ControlType["Date"] = 3] = "Date";
    ControlType[ControlType["Radio"] = 4] = "Radio";
    ControlType[ControlType["Checkbox"] = 5] = "Checkbox";
})(ControlType || (ControlType = {}));
var DataType;
(function (DataType) {
    DataType[DataType["String"] = 1] = "String";
    DataType[DataType["Number"] = 2] = "Number";
    DataType[DataType["Boolean"] = 3] = "Boolean";
    DataType[DataType["Date"] = 4] = "Date";
})(DataType || (DataType = {}));


/***/ }),

/***/ "./src/app/common/models/dbBaseEntity.ts":
/*!***********************************************!*\
  !*** ./src/app/common/models/dbBaseEntity.ts ***!
  \***********************************************/
/*! exports provided: DbBaseEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbBaseEntity", function() { return DbBaseEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DbBaseEntity {
}


/***/ }),

/***/ "./src/app/common/models/loginUser.ts":
/*!********************************************!*\
  !*** ./src/app/common/models/loginUser.ts ***!
  \********************************************/
/*! exports provided: LoginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginUser {
}


/***/ }),

/***/ "./src/app/common/models/paginationRequest.ts":
/*!****************************************************!*\
  !*** ./src/app/common/models/paginationRequest.ts ***!
  \****************************************************/
/*! exports provided: PaginationRequest, SearchFilter, ConditionOperator, Filter, Operator, Order, SortOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationRequest", function() { return PaginationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilter", function() { return SearchFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionOperator", function() { return ConditionOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operator", function() { return Operator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return SortOrder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PaginationRequest {
}
class SearchFilter {
}
var ConditionOperator;
(function (ConditionOperator) {
    ConditionOperator[ConditionOperator["AND"] = 0] = "AND";
    ConditionOperator[ConditionOperator["OR"] = 1] = "OR";
})(ConditionOperator || (ConditionOperator = {}));
class Filter {
}
var Operator;
(function (Operator) {
    Operator[Operator["equals"] = 0] = "equals";
    Operator[Operator["greaterThan"] = 1] = "greaterThan";
    Operator[Operator["lessThan"] = 2] = "lessThan";
    Operator[Operator["greaterThanOrEqual"] = 3] = "greaterThanOrEqual";
    Operator[Operator["lessThanOrEqual"] = 4] = "lessThanOrEqual";
    Operator[Operator["contains"] = 5] = "contains";
    Operator[Operator["startsWith"] = 6] = "startsWith";
    Operator[Operator["endsWith"] = 7] = "endsWith";
    Operator[Operator["notEquals"] = 8] = "notEquals";
})(Operator || (Operator = {}));
class Order {
}
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["ascending"] = 1] = "ascending";
    SortOrder[SortOrder["descending"] = -1] = "descending";
    SortOrder[SortOrder["noSort"] = 0] = "noSort";
})(SortOrder || (SortOrder = {}));


/***/ }),

/***/ "./src/app/components/data-table/dt-pagination.ts":
/*!********************************************************!*\
  !*** ./src/app/components/data-table/dt-pagination.ts ***!
  \********************************************************/
/*! exports provided: DTPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTPagination", function() { return DTPagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DTPagination = class DTPagination {
    constructor() {
        this.totalPages = 1;
        this.onPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSize = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.pageSize = 10;
        this.currentPage = 1;
    }
    pageSizeChange() {
        this.onPageSizeChange.emit(this.pageSize);
    }
    setPage(page) {
        if (page < 1 || page > this.totalPages) {
            return;
        }
        this.currentPage = page;
        this.onPageChange.emit(this.currentPage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DTPagination.prototype, "totalPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DTPagination.prototype, "onPageSizeChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DTPagination.prototype, "onPageChange", void 0);
DTPagination = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dt-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dt-pagination.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/dt-pagination.html")).default
    })
], DTPagination);



/***/ }),

/***/ "./src/app/components/data-table/dt-search.ts":
/*!****************************************************!*\
  !*** ./src/app/components/data-table/dt-search.ts ***!
  \****************************************************/
/*! exports provided: DTSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTSearch", function() { return DTSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");




let DTSearch = class DTSearch {
    constructor(helper) {
        this.helper = helper;
        this.searchFields = new Array();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.conditionOption = true;
    }
    ngOnInit() {
        this.selectedField = this.searchFields[0];
        this.searchText = "";
    }
    setSearchField(searchField) {
        this.selectedField = searchField;
        this.searchText = '';
    }
    search() {
        let conditionOption = this.conditionOption ? _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["ConditionOperator"].AND : _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["ConditionOperator"].OR;
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, conditionOption);
        this.searchFields.forEach(x => x.value = '');
        this.searchText = '';
        this.populateFilterPills();
        this.onSearch.emit(this.searchFilter);
    }
    populateFilterPills() {
        let filters = new Array();
        this.searchFilter.filters.forEach(x => {
            var index = filters.findIndex(y => y.propertyName == x.propertyName);
            let newValue = x.value;
            if (newValue.includes('T00:00:00.000Z')) {
                newValue = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatDate(new Date(newValue));
            }
            if (index < 0) {
                filters.push({
                    operator: x.operator,
                    propertyName: x.propertyName,
                    caseSensitive: false,
                    value: newValue
                });
            }
        });
        this.filterPills = filters;
    }
    removeFilter(index) {
        if (index >= 0) {
            let filter = this.searchFilter.filters[index];
            this.searchFilter.filters = this.searchFilter.filters.filter(x => x.propertyName != filter.propertyName);
            this.populateFilterPills();
            this.onSearch.emit(this.searchFilter);
        }
    }
    advancedSearch() {
        let conditionOption = this.conditionOption ? _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["ConditionOperator"].AND : _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["ConditionOperator"].OR;
        this.searchFilter = this.helper.advancedSearch(this.searchFields, conditionOption);
        this.searchText = "";
        this.onSearch.emit(this.searchFilter);
        this.populateFilterPills();
    }
    clearSearch() {
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["ConditionOperator"].AND);
        this.searchFields.forEach(x => x.value = '');
        this.onSearch.emit(this.searchFilter);
    }
};
DTSearch.ctorParameters = () => [
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DTSearch.prototype, "searchFields", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DTSearch.prototype, "onSearch", void 0);
DTSearch = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dt-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dt-search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/dt-search.html")).default
    })
], DTSearch);



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DashboardService);



/***/ }),

/***/ "./src/app/dashboard/views/dashboard.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard/views/dashboard.ts ***!
  \**********************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");



let Dashboard = class Dashboard {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        //this.getFormData();
    }
    getFormData() {
        //$("#ajax-loading").show();
        //let taskSummarySvc = this.reportsService.getTaskSummary();
        //let realTimeSummarySvc = this.reportsService.getRealTimeSummary();
        //forkJoin([taskSummarySvc, realTimeSummarySvc]).subscribe(
        //   async results => {
        //      var roles=[]
        //      if (results[0] && results[0].data) {
        //         this.taskSummary = results[0].data;
        //      }
        //      if (results[1] && results[1].data) {
        //         //this.eDeliverySummary = results[1].data;
        //         //this.showRealTimeSummaryChart();
        //      }
        //      //await new Promise(resolve => {
        //      //   setTimeout(() => {
        //      //      roles = this.accountService.roles;
        //      //      resolve();
        //      //   }, 100);
        //      //});
        //      var loginUser = this.accountService.loginUser;
        //      this.userRole = roles.find(x => x.id.toLowerCase() == loginUser.role.toLowerCase());
        //      $("#ajax-loading").hide();
        //   },
        //   error => {
        //      $("#ajax-loading").hide();
        //   });
    }
};
Dashboard.ctorParameters = () => [
    { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
];
Dashboard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/views/dashboard.html")).default,
        providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]],
    })
], Dashboard);



/***/ }),

/***/ "./src/app/entities/components/custom-fields.ts":
/*!******************************************************!*\
  !*** ./src/app/entities/components/custom-fields.ts ***!
  \******************************************************/
/*! exports provided: CustomFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFields", function() { return CustomFields; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_customField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/customField */ "./src/app/common/models/customField.ts");



let CustomFields = class CustomFields {
    constructor() {
        this.customFields = new Array();
    }
    addCustomField() {
        if (this.customFields == null)
            this.customFields = [];
        this.customFields.push({
            category: "",
            label: "",
            controlType: _common_models_customField__WEBPACK_IMPORTED_MODULE_2__["ControlType"].TextBox,
            dataType: _common_models_customField__WEBPACK_IMPORTED_MODULE_2__["DataType"].String,
            values: ""
        });
    }
    deleteCustomField(index) {
        this.customFields.splice(index, 1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomFields.prototype, "customFields", void 0);
CustomFields = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'custom-fields',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-fields.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/components/custom-fields.html")).default
    })
], CustomFields);



/***/ }),

/***/ "./src/app/entities/components/supplier.ts":
/*!*************************************************!*\
  !*** ./src/app/entities/components/supplier.ts ***!
  \*************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupplierComponent = class SupplierComponent {
    constructor() {
        this.supplierList = new Array();
    }
    addNewSupplier() {
        if (this.supplierList == null)
            this.supplierList = [];
        this.supplierList.push({
            name: "",
            sku: "",
            price: null,
            validFrom: "",
            validTo: ""
        });
    }
    deleteSupplier(index) {
        this.supplierList.splice(index, 1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SupplierComponent.prototype, "supplierList", void 0);
SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'suppliers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./supplier.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/components/supplier.html")).default
    })
], SupplierComponent);



/***/ }),

/***/ "./src/app/entities/entities.module.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/entities.module.ts ***!
  \*********************************************/
/*! exports provided: EntitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesModule", function() { return EntitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _entities_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities.routes */ "./src/app/entities/entities.routes.ts");
/* harmony import */ var _views_entity_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/entity-list */ "./src/app/entities/views/entity-list.ts");
/* harmony import */ var _components_custom_fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/custom-fields */ "./src/app/entities/components/custom-fields.ts");
/* harmony import */ var _views_cable_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/cable-details */ "./src/app/entities/views/cable-details.ts");
/* harmony import */ var _views_chamber_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/chamber-details */ "./src/app/entities/views/chamber-details.ts");
/* harmony import */ var _views_duct_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/duct-details */ "./src/app/entities/views/duct-details.ts");
/* harmony import */ var _views_odf_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/odf-details */ "./src/app/entities/views/odf-details.ts");
/* harmony import */ var _views_pole_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/pole-details */ "./src/app/entities/views/pole-details.ts");
/* harmony import */ var _views_splitter_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/splitter-details */ "./src/app/entities/views/splitter-details.ts");
/* harmony import */ var _views_spliceClosure_details__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/spliceClosure-details */ "./src/app/entities/views/spliceClosure-details.ts");
/* harmony import */ var _services_cable_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/cable.service */ "./src/app/entities/services/cable.service.ts");
/* harmony import */ var _services_chamber_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/chamber.service */ "./src/app/entities/services/chamber.service.ts");
/* harmony import */ var _services_duct_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/duct.service */ "./src/app/entities/services/duct.service.ts");
/* harmony import */ var _services_odf_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/odf.service */ "./src/app/entities/services/odf.service.ts");
/* harmony import */ var _services_pole_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");
/* harmony import */ var _services_splitter_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/splitter.service */ "./src/app/entities/services/splitter.service.ts");
/* harmony import */ var _components_supplier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/supplier */ "./src/app/entities/components/supplier.ts");
/* harmony import */ var _services_homepass_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/homepass.service */ "./src/app/entities/services/homepass.service.ts");
/* harmony import */ var _views_homepass_details__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/homepass-details */ "./src/app/entities/views/homepass-details.ts");

























let EntitiesModule = class EntitiesModule {
};
EntitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _entities_routes__WEBPACK_IMPORTED_MODULE_5__["EntitiesRouting"]
        ],
        declarations: [
            _views_entity_list__WEBPACK_IMPORTED_MODULE_6__["EntityList"],
            _components_custom_fields__WEBPACK_IMPORTED_MODULE_7__["CustomFields"],
            _components_supplier__WEBPACK_IMPORTED_MODULE_22__["SupplierComponent"],
            _views_cable_details__WEBPACK_IMPORTED_MODULE_8__["CableDetails"],
            _views_chamber_details__WEBPACK_IMPORTED_MODULE_9__["ChamberDetails"],
            _views_duct_details__WEBPACK_IMPORTED_MODULE_10__["DuctDetails"],
            _views_odf_details__WEBPACK_IMPORTED_MODULE_11__["ODFDetails"],
            _views_pole_details__WEBPACK_IMPORTED_MODULE_12__["PoleDetails"],
            _views_splitter_details__WEBPACK_IMPORTED_MODULE_13__["SplitterDetails"],
            _views_spliceClosure_details__WEBPACK_IMPORTED_MODULE_14__["SpliceClosureDetails"],
            _views_homepass_details__WEBPACK_IMPORTED_MODULE_24__["HomepassDetails"]
        ],
        providers: [
            _services_cable_service__WEBPACK_IMPORTED_MODULE_15__["CableService"],
            _services_chamber_service__WEBPACK_IMPORTED_MODULE_16__["ChamberService"],
            _services_duct_service__WEBPACK_IMPORTED_MODULE_17__["DuctService"],
            _services_odf_service__WEBPACK_IMPORTED_MODULE_18__["ODFService"],
            _services_pole_service__WEBPACK_IMPORTED_MODULE_19__["PoleService"],
            _services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_20__["SpliceClosureService"],
            _services_splitter_service__WEBPACK_IMPORTED_MODULE_21__["SplitterService"],
            _services_homepass_service__WEBPACK_IMPORTED_MODULE_23__["HomepassService"]
        ]
    })
], EntitiesModule);



/***/ }),

/***/ "./src/app/entities/entities.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/entities.routes.ts ***!
  \*********************************************/
/*! exports provided: entitiesRoutes, EntitiesRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesRoutes", function() { return entitiesRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesRouting", function() { return EntitiesRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_entity_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/entity-list */ "./src/app/entities/views/entity-list.ts");
/* harmony import */ var _views_cable_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/cable-details */ "./src/app/entities/views/cable-details.ts");
/* harmony import */ var _views_chamber_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/chamber-details */ "./src/app/entities/views/chamber-details.ts");
/* harmony import */ var _views_duct_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/duct-details */ "./src/app/entities/views/duct-details.ts");
/* harmony import */ var _views_odf_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/odf-details */ "./src/app/entities/views/odf-details.ts");
/* harmony import */ var _views_pole_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pole-details */ "./src/app/entities/views/pole-details.ts");
/* harmony import */ var _views_splitter_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/splitter-details */ "./src/app/entities/views/splitter-details.ts");
/* harmony import */ var _views_spliceClosure_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/spliceClosure-details */ "./src/app/entities/views/spliceClosure-details.ts");
/* harmony import */ var _views_homepass_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/homepass-details */ "./src/app/entities/views/homepass-details.ts");











const entitiesRoutes = [
    {
        path: 'entities',
        children: [
            { path: '', component: _views_entity_list__WEBPACK_IMPORTED_MODULE_2__["EntityList"] },
            { path: 'cable', component: _views_cable_details__WEBPACK_IMPORTED_MODULE_3__["CableDetails"] },
            { path: 'cable/:id', component: _views_cable_details__WEBPACK_IMPORTED_MODULE_3__["CableDetails"] },
            { path: 'chamber', component: _views_chamber_details__WEBPACK_IMPORTED_MODULE_4__["ChamberDetails"] },
            { path: 'chamber/:id', component: _views_chamber_details__WEBPACK_IMPORTED_MODULE_4__["ChamberDetails"] },
            { path: 'duct', component: _views_duct_details__WEBPACK_IMPORTED_MODULE_5__["DuctDetails"] },
            { path: 'duct/:id', component: _views_duct_details__WEBPACK_IMPORTED_MODULE_5__["DuctDetails"] },
            { path: 'odf', component: _views_odf_details__WEBPACK_IMPORTED_MODULE_6__["ODFDetails"] },
            { path: 'odf/:id', component: _views_odf_details__WEBPACK_IMPORTED_MODULE_6__["ODFDetails"] },
            { path: 'pole', component: _views_pole_details__WEBPACK_IMPORTED_MODULE_7__["PoleDetails"] },
            { path: 'pole/:id', component: _views_pole_details__WEBPACK_IMPORTED_MODULE_7__["PoleDetails"] },
            { path: 'splitter', component: _views_splitter_details__WEBPACK_IMPORTED_MODULE_8__["SplitterDetails"] },
            { path: 'splitter/:id', component: _views_splitter_details__WEBPACK_IMPORTED_MODULE_8__["SplitterDetails"] },
            { path: 'spliceclosure', component: _views_spliceClosure_details__WEBPACK_IMPORTED_MODULE_9__["SpliceClosureDetails"] },
            { path: 'spliceclosure/:id', component: _views_spliceClosure_details__WEBPACK_IMPORTED_MODULE_9__["SpliceClosureDetails"] },
            { path: 'homepass', component: _views_homepass_details__WEBPACK_IMPORTED_MODULE_10__["HomepassDetails"] },
            { path: 'homepass/:id', component: _views_homepass_details__WEBPACK_IMPORTED_MODULE_10__["HomepassDetails"] },
        ]
    },
];
const EntitiesRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(entitiesRoutes);


/***/ }),

/***/ "./src/app/entities/models/baseNetworkEntity.ts":
/*!******************************************************!*\
  !*** ./src/app/entities/models/baseNetworkEntity.ts ***!
  \******************************************************/
/*! exports provided: BaseNetworkEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseNetworkEntity", function() { return BaseNetworkEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class BaseNetworkEntity extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
    constructor(id, code) {
        super();
        this.customFields = new Array();
        this.photos = new Array();
        this.attachments = new Array();
        this.suppliers = new Array();
        this.id = id;
        this.code = code;
    }
}


/***/ }),

/***/ "./src/app/entities/models/cable.ts":
/*!******************************************!*\
  !*** ./src/app/entities/models/cable.ts ***!
  \******************************************/
/*! exports provided: Cable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cable", function() { return Cable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optics */ "./src/app/entities/models/optics.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");





class Cable extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor(id, code, isUnderground, noOfTubes, corePerTube, optics) {
        super(id, code);
        this.optics = new _optics__WEBPACK_IMPORTED_MODULE_3__["Optics"]();
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_4__["Owner"]();
        this.isUnderground = isUnderground;
        this.noOfTubes = noOfTubes;
        this.corePerTube = corePerTube;
        this.optics = optics == null ? new _optics__WEBPACK_IMPORTED_MODULE_3__["Optics"]() : optics;
    }
}


/***/ }),

/***/ "./src/app/entities/models/chamber.ts":
/*!********************************************!*\
  !*** ./src/app/entities/models/chamber.ts ***!
  \********************************************/
/*! exports provided: Chamber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chamber", function() { return Chamber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");




class Chamber extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_3__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/duct.ts":
/*!*****************************************!*\
  !*** ./src/app/entities/models/duct.ts ***!
  \*****************************************/
/*! exports provided: Duct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duct", function() { return Duct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");




class Duct extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_3__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/homepass.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/models/homepass.ts ***!
  \*********************************************/
/*! exports provided: Homepass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homepass", function() { return Homepass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class Homepass extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
    constructor() {
        super(...arguments);
        this.customFields = new Array();
        this.photos = new Array();
        this.attachments = new Array();
    }
}


/***/ }),

/***/ "./src/app/entities/models/installation.ts":
/*!*************************************************!*\
  !*** ./src/app/entities/models/installation.ts ***!
  \*************************************************/
/*! exports provided: Installation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Installation", function() { return Installation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Installation {
}


/***/ }),

/***/ "./src/app/entities/models/odf.ts":
/*!****************************************!*\
  !*** ./src/app/entities/models/odf.ts ***!
  \****************************************/
/*! exports provided: ODF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODF", function() { return ODF; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");




class ODF extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_3__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/optics.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/models/optics.ts ***!
  \*******************************************/
/*! exports provided: Optics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Optics", function() { return Optics; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Optics {
}


/***/ }),

/***/ "./src/app/entities/models/owner.ts":
/*!******************************************!*\
  !*** ./src/app/entities/models/owner.ts ***!
  \******************************************/
/*! exports provided: Owner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Owner", function() { return Owner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Owner {
}


/***/ }),

/***/ "./src/app/entities/models/pole.ts":
/*!*****************************************!*\
  !*** ./src/app/entities/models/pole.ts ***!
  \*****************************************/
/*! exports provided: Pole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pole", function() { return Pole; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");




class Pole extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_3__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/spliceClosure.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/models/spliceClosure.ts ***!
  \**************************************************/
/*! exports provided: SpliceClosure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpliceClosure", function() { return SpliceClosure; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");




class SpliceClosure extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_3__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/splitter.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/models/splitter.ts ***!
  \*********************************************/
/*! exports provided: Splitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return Splitter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optics */ "./src/app/entities/models/optics.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");





class Splitter extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.optics = new _optics__WEBPACK_IMPORTED_MODULE_3__["Optics"]();
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_4__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/services/cable.service.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/services/cable.service.ts ***!
  \****************************************************/
/*! exports provided: CableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableService", function() { return CableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let CableService = class CableService {
    constructor(http) {
        this.http = http;
        this.getCablesApi = 'Cables/GetCables/';
        this.getCableApi = 'Cables/GetCable/';
        this.checkNameExistsApi = 'Cables/CheckNameExists/';
        this.saveCableApi = 'Cables/SaveCable/';
        this.deleteCableApi = 'Cables/DeleteCable/';
    }
    getCables(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getCablesApi, paginationRequest);
    }
    getCable(cableId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('cableId', cableId);
        return this.http.get(this.getCableApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveCable(cable) {
        return this.http.post(this.saveCableApi, cable);
    }
    deleteCable(cableId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('cableId', cableId);
        return this.http.delete(this.deleteCableApi, { params });
    }
};
CableService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CableService);



/***/ }),

/***/ "./src/app/entities/services/chamber.service.ts":
/*!******************************************************!*\
  !*** ./src/app/entities/services/chamber.service.ts ***!
  \******************************************************/
/*! exports provided: ChamberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamberService", function() { return ChamberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ChamberService = class ChamberService {
    constructor(http) {
        this.http = http;
        this.getChambersApi = 'Chambers/GetChambers/';
        this.getChamberApi = 'Chambers/GetChamber/';
        this.checkNameExistsApi = 'Chambers/CheckNameExists/';
        this.saveChamberApi = 'Chambers/SaveChamber/';
        this.deleteChamberApi = 'Chambers/DeleteChamber/';
    }
    getChambers(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getChambersApi, paginationRequest);
    }
    getChamber(chamberId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('chamberId', chamberId);
        return this.http.get(this.getChamberApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveChamber(chamber) {
        return this.http.post(this.saveChamberApi, chamber);
    }
    deleteChamber(chamberId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('chamberId', chamberId);
        return this.http.delete(this.deleteChamberApi, { params });
    }
};
ChamberService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ChamberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ChamberService);



/***/ }),

/***/ "./src/app/entities/services/duct.service.ts":
/*!***************************************************!*\
  !*** ./src/app/entities/services/duct.service.ts ***!
  \***************************************************/
/*! exports provided: DuctService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuctService", function() { return DuctService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let DuctService = class DuctService {
    constructor(http) {
        this.http = http;
        this.getDuctsApi = 'Ducts/GetDucts/';
        this.getDuctApi = 'Ducts/GetDuct/';
        this.checkNameExistsApi = 'Ducts/CheckNameExists/';
        this.saveDuctApi = 'Ducts/SaveDuct/';
        this.deleteDuctApi = 'Ducts/DeleteDuct/';
    }
    getDucts(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getDuctsApi, paginationRequest);
    }
    getDuct(ductId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('ductId', ductId);
        return this.http.get(this.getDuctApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveDuct(duct) {
        return this.http.post(this.saveDuctApi, duct);
    }
    deleteDuct(ductId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('ductId', ductId);
        return this.http.delete(this.deleteDuctApi, { params });
    }
};
DuctService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DuctService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], DuctService);



/***/ }),

/***/ "./src/app/entities/services/homepass.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/entities/services/homepass.service.ts ***!
  \*******************************************************/
/*! exports provided: HomepassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassService", function() { return HomepassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let HomepassService = class HomepassService {
    constructor(http) {
        this.http = http;
        this.getHomepassesApi = 'Homepasses/GetHomepasses/';
        this.getHomepassApi = 'Homepasses/GetHomepass/';
        this.checkNameExistsApi = 'Homepasses/CheckNameExists/';
        this.saveHomepassApi = 'Homepasses/SaveHomepass/';
        this.deleteHomepassApi = 'Homepasses/DeleteHomepass/';
    }
    getHomepasses(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getHomepassesApi, paginationRequest);
    }
    getHomepass(homepassId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('homepassId', homepassId);
        return this.http.get(this.getHomepassApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveHomepass(homepass) {
        return this.http.post(this.saveHomepassApi, homepass);
    }
    deleteHomepass(homepassId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('homepassId', homepassId);
        return this.http.delete(this.deleteHomepassApi, { params });
    }
};
HomepassService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HomepassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], HomepassService);



/***/ }),

/***/ "./src/app/entities/services/odf.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/services/odf.service.ts ***!
  \**************************************************/
/*! exports provided: ODFService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODFService", function() { return ODFService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ODFService = class ODFService {
    constructor(http) {
        this.http = http;
        this.getODFsApi = 'ODFs/GetODFs/';
        this.getODFApi = 'ODFs/GetODF/';
        this.checkNameExistsApi = 'ODFs/CheckNameExists/';
        this.saveODFApi = 'ODFs/SaveODF/';
        this.deleteODFApi = 'ODFs/DeleteODF/';
    }
    getODFs(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getODFsApi, paginationRequest);
    }
    getODF(odfId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('odfId', odfId);
        return this.http.get(this.getODFApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveODF(odf) {
        return this.http.post(this.saveODFApi, odf);
    }
    deleteODF(odfId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('odfId', odfId);
        return this.http.delete(this.deleteODFApi, { params });
    }
};
ODFService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ODFService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ODFService);



/***/ }),

/***/ "./src/app/entities/services/pole.service.ts":
/*!***************************************************!*\
  !*** ./src/app/entities/services/pole.service.ts ***!
  \***************************************************/
/*! exports provided: PoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoleService", function() { return PoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let PoleService = class PoleService {
    constructor(http) {
        this.http = http;
        this.getPolesApi = 'Poles/GetPoles/';
        this.getPoleApi = 'Poles/GetPole/';
        this.checkNameExistsApi = 'Poles/CheckNameExists/';
        this.savePoleApi = 'Poles/SavePole/';
        this.deletePoleApi = 'Poles/DeletePole/';
    }
    getPoles(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getPolesApi, paginationRequest);
    }
    getPole(poleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('poleId', poleId);
        return this.http.get(this.getPoleApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    savePole(pole) {
        return this.http.post(this.savePoleApi, pole);
    }
    deletePole(poleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('poleId', poleId);
        return this.http.delete(this.deletePoleApi, { params });
    }
};
PoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], PoleService);



/***/ }),

/***/ "./src/app/entities/services/spliceClosure.service.ts":
/*!************************************************************!*\
  !*** ./src/app/entities/services/spliceClosure.service.ts ***!
  \************************************************************/
/*! exports provided: SpliceClosureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpliceClosureService", function() { return SpliceClosureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let SpliceClosureService = class SpliceClosureService {
    constructor(http) {
        this.http = http;
        this.getSpliceClosuresApi = 'SpliceClosures/GetSpliceClosures/';
        this.getSpliceClosureApi = 'SpliceClosures/GetSpliceClosure/';
        this.checkNameExistsApi = 'SpliceClosures/CheckNameExists/';
        this.saveSpliceClosureApi = 'SpliceClosures/SaveSpliceClosure/';
        this.deleteSpliceClosureApi = 'SpliceClosures/DeleteSpliceClosure/';
    }
    getSpliceClosures(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getSpliceClosuresApi, paginationRequest);
    }
    getSpliceClosure(spliceClosureId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('spliceClosureId', spliceClosureId);
        return this.http.get(this.getSpliceClosureApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveSpliceClosure(spliceClosure) {
        return this.http.post(this.saveSpliceClosureApi, spliceClosure);
    }
    deleteSpliceClosure(spliceClosureId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('spliceClosureId', spliceClosureId);
        return this.http.delete(this.deleteSpliceClosureApi, { params });
    }
};
SpliceClosureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SpliceClosureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SpliceClosureService);



/***/ }),

/***/ "./src/app/entities/services/splitter.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/entities/services/splitter.service.ts ***!
  \*******************************************************/
/*! exports provided: SplitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterService", function() { return SplitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let SplitterService = class SplitterService {
    constructor(http) {
        this.http = http;
        this.getSplittersApi = 'Splitters/GetSplitters/';
        this.getSplitterApi = 'Splitters/GetSplitter/';
        this.checkNameExistsApi = 'Splitters/CheckNameExists/';
        this.saveSplitterApi = 'Splitters/SaveSplitter/';
        this.deleteSplitterApi = 'Splitters/DeleteSplitter/';
    }
    getSplitters(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "updatedDate",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getSplittersApi, paginationRequest);
    }
    getSplitter(splitterId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('splitterId', splitterId);
        return this.http.get(this.getSplitterApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveSplitter(splitter) {
        return this.http.post(this.saveSplitterApi, splitter);
    }
    deleteSplitter(splitterId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('splitterId', splitterId);
        return this.http.delete(this.deleteSplitterApi, { params });
    }
};
SplitterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SplitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SplitterService);



/***/ }),

/***/ "./src/app/entities/views/cable-details.ts":
/*!*************************************************!*\
  !*** ./src/app/entities/views/cable-details.ts ***!
  \*************************************************/
/*! exports provided: CableDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableDetails", function() { return CableDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_cable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cable.service */ "./src/app/entities/services/cable.service.ts");
/* harmony import */ var _models_cable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/cable */ "./src/app/entities/models/cable.ts");







let CableDetails = class CableDetails {
    constructor(location, route, cableService, helper) {
        this.location = location;
        this.route = route;
        this.cableService = cableService;
        this.helper = helper;
        this.title = "New Cable";
        this.cable = new _models_cable__WEBPACK_IMPORTED_MODULE_6__["Cable"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.cableId = params['id'];
            if (this.cableId != null)
                this.title = "Edit Cable";
            else {
                this.title = "New Cable";
            }
            this.getFormData(this.cableId);
        });
    }
    getFormData(cableId) {
        if (cableId != null) {
            $("#ajax-loading").show();
            this.cableService.getCable(cableId).subscribe(resp => {
                this.cable = new _models_cable__WEBPACK_IMPORTED_MODULE_6__["Cable"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.cable = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.cable = new _models_cable__WEBPACK_IMPORTED_MODULE_6__["Cable"]();
                this.helper.showAlertMessage("Unable to fetch cable details", "error");
            });
        }
        else
            this.cable = new _models_cable__WEBPACK_IMPORTED_MODULE_6__["Cable"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.cable);
            if (errorMessages.length == 0) {
                this.cableService.saveCable(this.cable).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Cable information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save cable information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save cable information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(cable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (cable.name == null || cable.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.cableService.checkNameExists(cable.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
CableDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_cable_service__WEBPACK_IMPORTED_MODULE_5__["CableService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
CableDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cable-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/cable-details.html")).default,
        providers: [_services_cable_service__WEBPACK_IMPORTED_MODULE_5__["CableService"]],
    })
], CableDetails);



/***/ }),

/***/ "./src/app/entities/views/chamber-details.ts":
/*!***************************************************!*\
  !*** ./src/app/entities/views/chamber-details.ts ***!
  \***************************************************/
/*! exports provided: ChamberDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamberDetails", function() { return ChamberDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_chamber_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chamber.service */ "./src/app/entities/services/chamber.service.ts");
/* harmony import */ var _models_chamber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/chamber */ "./src/app/entities/models/chamber.ts");







let ChamberDetails = class ChamberDetails {
    constructor(location, route, chamberService, helper) {
        this.location = location;
        this.route = route;
        this.chamberService = chamberService;
        this.helper = helper;
        this.title = "New Chamber";
        this.chamber = new _models_chamber__WEBPACK_IMPORTED_MODULE_6__["Chamber"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.chamberId = params['id'];
            if (this.chamberId != null)
                this.title = "Edit Chamber";
            else {
                this.title = "New Chamber";
            }
            this.getFormData(this.chamberId);
        });
    }
    getFormData(chamberId) {
        if (chamberId != null) {
            $("#ajax-loading").show();
            this.chamberService.getChamber(chamberId).subscribe(resp => {
                this.chamber = new _models_chamber__WEBPACK_IMPORTED_MODULE_6__["Chamber"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.chamber = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.chamber = new _models_chamber__WEBPACK_IMPORTED_MODULE_6__["Chamber"]();
                this.helper.showAlertMessage("Unable to fetch chamber details", "error");
            });
        }
        else
            this.chamber = new _models_chamber__WEBPACK_IMPORTED_MODULE_6__["Chamber"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.chamber);
            if (errorMessages.length == 0) {
                this.chamberService.saveChamber(this.chamber).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Chamber information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save chamber information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save chamber information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(chamber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (chamber.name == null || chamber.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.chamberService.checkNameExists(chamber.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
ChamberDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_chamber_service__WEBPACK_IMPORTED_MODULE_5__["ChamberService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
ChamberDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chamber-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/chamber-details.html")).default,
        providers: [_services_chamber_service__WEBPACK_IMPORTED_MODULE_5__["ChamberService"]],
    })
], ChamberDetails);



/***/ }),

/***/ "./src/app/entities/views/duct-details.ts":
/*!************************************************!*\
  !*** ./src/app/entities/views/duct-details.ts ***!
  \************************************************/
/*! exports provided: DuctDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuctDetails", function() { return DuctDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_duct_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/duct.service */ "./src/app/entities/services/duct.service.ts");
/* harmony import */ var _models_duct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/duct */ "./src/app/entities/models/duct.ts");







let DuctDetails = class DuctDetails {
    constructor(location, route, ductService, helper) {
        this.location = location;
        this.route = route;
        this.ductService = ductService;
        this.helper = helper;
        this.title = "New Duct";
        this.duct = new _models_duct__WEBPACK_IMPORTED_MODULE_6__["Duct"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.ductId = params['id'];
            if (this.ductId != null)
                this.title = "Edit Duct";
            else {
                this.title = "New Duct";
            }
            this.getFormData(this.ductId);
        });
    }
    getFormData(ductId) {
        if (ductId != null) {
            $("#ajax-loading").show();
            this.ductService.getDuct(ductId).subscribe(resp => {
                this.duct = new _models_duct__WEBPACK_IMPORTED_MODULE_6__["Duct"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.duct = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.duct = new _models_duct__WEBPACK_IMPORTED_MODULE_6__["Duct"]();
                this.helper.showAlertMessage("Unable to fetch duct details", "error");
            });
        }
        else
            this.duct = new _models_duct__WEBPACK_IMPORTED_MODULE_6__["Duct"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.duct);
            if (errorMessages.length == 0) {
                this.ductService.saveDuct(this.duct).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Duct information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save duct information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save duct information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(duct) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (duct.name == null || duct.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.ductService.checkNameExists(duct.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
DuctDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_duct_service__WEBPACK_IMPORTED_MODULE_5__["DuctService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
DuctDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duct-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/duct-details.html")).default,
        providers: [_services_duct_service__WEBPACK_IMPORTED_MODULE_5__["DuctService"]],
    })
], DuctDetails);



/***/ }),

/***/ "./src/app/entities/views/entity-list.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/views/entity-list.ts ***!
  \***********************************************/
/*! exports provided: EntityList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityList", function() { return EntityList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _services_cable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cable.service */ "./src/app/entities/services/cable.service.ts");
/* harmony import */ var _services_chamber_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chamber.service */ "./src/app/entities/services/chamber.service.ts");
/* harmony import */ var _services_odf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/odf.service */ "./src/app/entities/services/odf.service.ts");
/* harmony import */ var _services_duct_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/duct.service */ "./src/app/entities/services/duct.service.ts");
/* harmony import */ var _services_pole_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");
/* harmony import */ var _services_splitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/splitter.service */ "./src/app/entities/services/splitter.service.ts");
/* harmony import */ var _services_homepass_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/homepass.service */ "./src/app/entities/services/homepass.service.ts");












let EntityList = class EntityList {
    constructor(cableService, chamberService, ductService, odfService, poleService, spliceClosureService, splitterService, homepassService, helper) {
        this.cableService = cableService;
        this.chamberService = chamberService;
        this.ductService = ductService;
        this.odfService = odfService;
        this.poleService = poleService;
        this.spliceClosureService = spliceClosureService;
        this.splitterService = splitterService;
        this.homepassService = homepassService;
        this.helper = helper;
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending;
        this.selectedEntityType = "Cable";
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
        this.selectedField = this.searchFields[0];
    }
    ngOnInit() {
        this.statusMessage = "Loading Entities...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].noSort;
        this.searchText = "";
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        let entitySvc = null;
        switch (this.selectedEntityType) {
            case "Cable":
                entitySvc = this.cableService.getCables(paginationRequest);
                break;
            case "Chamber":
                entitySvc = this.chamberService.getChambers(paginationRequest);
                break;
            case "Duct":
                entitySvc = this.ductService.getDucts(paginationRequest);
                break;
            case "ODF":
                entitySvc = this.odfService.getODFs(paginationRequest);
                break;
            case "Pole":
                entitySvc = this.poleService.getPoles(paginationRequest);
                break;
            case "SpliceClosure":
                entitySvc = this.spliceClosureService.getSpliceClosures(paginationRequest);
                break;
            case "Splitter":
                entitySvc = this.splitterService.getSplitters(paginationRequest);
                break;
            case "Homepass":
                entitySvc = this.homepassService.getHomepasses(paginationRequest);
                break;
            default:
                entitySvc = this.cableService.getCables(paginationRequest);
        }
        entitySvc.subscribe(resp => {
            this.entities = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.entities = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered entities.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.entities = null;
            let msg = `Unable to fetch entities : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching entities.";
        });
        //let usersSvc = this.userService.getUsers(paginationRequest);
        //let rolesSvc = this.roleService.getRoles(null);
        //forkJoin([rolesSvc, usersSvc]).subscribe(results => {
        //    this.users = null;
        //    if (results[0] && results[0].data) {
        //        this.roles = results[0].data;
        //    }
        //    if (results[1].status.toLowerCase() == "error") {
        //        this.statusMessage = results[1].message;
        //        this.helper.showAlertMessage(this.statusMessage, "error");
        //    }
        //    else {
        //        if (results[1].data != null && results[1].data.length > 0) {
        //            this.users = results[1].data;
        //            this.totalPages = Math.ceil(results[1].recordCount / this.pageSize);
        //        }
        //        else {
        //            this.statusMessage = "There are no registered users.";
        //        }
        //    }
        //    $("#ajax-loading").hide();
        //},
        //    error => {
        //        this.users = null;
        //        $("#ajax-loading").hide();
        //    });
    }
    onEntityTypeChange(entityType) {
        this.selectedEntityType = entityType;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].noSort;
        this.searchText = "";
        this.getFormData();
    }
    setSearchField(searchField) {
        this.selectedField = searchField;
        this.searchText = '';
    }
    search() {
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["ConditionOperator"].AND);
        this.searchFields.forEach(x => x.value = '');
        this.getFormData();
    }
    advancedSearch() {
        this.searchFilter = this.helper.advancedSearch(this.searchFields, _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["ConditionOperator"].AND);
        this.searchText = "";
        this.getFormData();
    }
    clearSearch() {
        this.searchFilter = this.helper.search(this.selectedField, this.searchText, _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["ConditionOperator"].AND);
        this.searchFields.forEach(x => x.value = '');
    }
    setPage(page) {
        if (page < 1 || page > this.totalPages) {
            return;
        }
        this.currentPage = page;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(entity) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Entity</b>",
            overlay: false,
            content: `Do you want to delete ${this.selectedEntityType} - ${entity.name}`,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                let entitySvc = null;
                switch (this.selectedEntityType) {
                    case "Cable":
                        entitySvc = this.cableService.deleteCable(entity.id);
                        break;
                    case "Chamber":
                        entitySvc = this.chamberService.deleteChamber(entity.id);
                        break;
                    case "Duct":
                        entitySvc = this.ductService.deleteDuct(entity.id);
                        break;
                    case "ODF":
                        entitySvc = this.odfService.deleteODF(entity.id);
                        break;
                    case "Pole":
                        entitySvc = this.poleService.deletePole(entity.id);
                        break;
                    case "SpliceClosure":
                        entitySvc = this.spliceClosureService.deleteSpliceClosure(entity.id);
                        break;
                    case "Splitter":
                        entitySvc = this.splitterService.deleteSplitter(entity.id);
                        break;
                    case "Homepass":
                        entitySvc = this.homepassService.deleteHomepass(entity.id);
                        break;
                    default:
                        entitySvc = this.cableService.deleteCable(entity.id);
                }
                entitySvc.subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage(`${this.selectedEntityType} deleted`, "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage(`Error deleting ${this.selectedEntityType}`, "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage(`Error deleting ${this.selectedEntityType}`, "error");
                });
            }
        }).open();
    }
};
EntityList.ctorParameters = () => [
    { type: _services_cable_service__WEBPACK_IMPORTED_MODULE_4__["CableService"] },
    { type: _services_chamber_service__WEBPACK_IMPORTED_MODULE_5__["ChamberService"] },
    { type: _services_duct_service__WEBPACK_IMPORTED_MODULE_7__["DuctService"] },
    { type: _services_odf_service__WEBPACK_IMPORTED_MODULE_6__["ODFService"] },
    { type: _services_pole_service__WEBPACK_IMPORTED_MODULE_8__["PoleService"] },
    { type: _services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_9__["SpliceClosureService"] },
    { type: _services_splitter_service__WEBPACK_IMPORTED_MODULE_10__["SplitterService"] },
    { type: _services_homepass_service__WEBPACK_IMPORTED_MODULE_11__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"] }
];
EntityList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entity-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/entity-list.html")).default,
    })
], EntityList);



/***/ }),

/***/ "./src/app/entities/views/homepass-details.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/views/homepass-details.ts ***!
  \****************************************************/
/*! exports provided: HomepassDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassDetails", function() { return HomepassDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _models_homepass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/homepass */ "./src/app/entities/models/homepass.ts");
/* harmony import */ var _services_homepass_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/homepass.service */ "./src/app/entities/services/homepass.service.ts");







let HomepassDetails = class HomepassDetails {
    constructor(location, route, homepassService, helper) {
        this.location = location;
        this.route = route;
        this.homepassService = homepassService;
        this.helper = helper;
        this.title = "New Homepass";
        this.homepass = new _models_homepass__WEBPACK_IMPORTED_MODULE_5__["Homepass"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.homepassId = params['id'];
            if (this.homepassId != null)
                this.title = "Edit Homepass";
            else {
                this.title = "New Homepass";
            }
            this.getFormData(this.homepassId);
        });
    }
    getFormData(homepassId) {
        if (homepassId != null) {
            $("#ajax-loading").show();
            this.homepassService.getHomepass(homepassId).subscribe(resp => {
                this.homepass = new _models_homepass__WEBPACK_IMPORTED_MODULE_5__["Homepass"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.homepass = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.homepass = new _models_homepass__WEBPACK_IMPORTED_MODULE_5__["Homepass"]();
                this.helper.showAlertMessage("Unable to fetch homepass details", "error");
            });
        }
        else
            this.homepass = new _models_homepass__WEBPACK_IMPORTED_MODULE_5__["Homepass"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.homepass);
            if (errorMessages.length == 0) {
                this.homepassService.saveHomepass(this.homepass).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Homepass information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save homepass information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save homepass information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(homepass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (homepass.name == null || homepass.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.homepassService.checkNameExists(homepass.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
HomepassDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_homepass_service__WEBPACK_IMPORTED_MODULE_6__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
HomepassDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepass-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/homepass-details.html")).default,
        providers: [_services_homepass_service__WEBPACK_IMPORTED_MODULE_6__["HomepassService"]],
    })
], HomepassDetails);



/***/ }),

/***/ "./src/app/entities/views/odf-details.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/views/odf-details.ts ***!
  \***********************************************/
/*! exports provided: ODFDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODFDetails", function() { return ODFDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_odf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/odf.service */ "./src/app/entities/services/odf.service.ts");
/* harmony import */ var _models_odf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/odf */ "./src/app/entities/models/odf.ts");







let ODFDetails = class ODFDetails {
    constructor(location, route, odfService, helper) {
        this.location = location;
        this.route = route;
        this.odfService = odfService;
        this.helper = helper;
        this.title = "New ODF";
        this.odf = new _models_odf__WEBPACK_IMPORTED_MODULE_6__["ODF"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.odfId = params['id'];
            if (this.odfId != null)
                this.title = "Edit ODF";
            else {
                this.title = "New ODF";
            }
            this.getFormData(this.odfId);
        });
    }
    getFormData(odfId) {
        if (odfId != null) {
            $("#ajax-loading").show();
            this.odfService.getODF(odfId).subscribe(resp => {
                this.odf = new _models_odf__WEBPACK_IMPORTED_MODULE_6__["ODF"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.odf = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.odf = new _models_odf__WEBPACK_IMPORTED_MODULE_6__["ODF"]();
                this.helper.showAlertMessage("Unable to fetch odf details", "error");
            });
        }
        else
            this.odf = new _models_odf__WEBPACK_IMPORTED_MODULE_6__["ODF"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.odf);
            if (errorMessages.length == 0) {
                this.odfService.saveODF(this.odf).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("ODF information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save ODF information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save ODF information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(odf) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (odf.name == null || odf.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.odfService.checkNameExists(odf.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
ODFDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_odf_service__WEBPACK_IMPORTED_MODULE_5__["ODFService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
ODFDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./odf-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/odf-details.html")).default,
        providers: [_services_odf_service__WEBPACK_IMPORTED_MODULE_5__["ODFService"]],
    })
], ODFDetails);



/***/ }),

/***/ "./src/app/entities/views/pole-details.ts":
/*!************************************************!*\
  !*** ./src/app/entities/views/pole-details.ts ***!
  \************************************************/
/*! exports provided: PoleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoleDetails", function() { return PoleDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_pole_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _models_pole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/pole */ "./src/app/entities/models/pole.ts");







let PoleDetails = class PoleDetails {
    constructor(location, route, poleService, helper) {
        this.location = location;
        this.route = route;
        this.poleService = poleService;
        this.helper = helper;
        this.title = "New Pole";
        this.pole = new _models_pole__WEBPACK_IMPORTED_MODULE_6__["Pole"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.poleId = params['id'];
            if (this.poleId != null)
                this.title = "Edit Pole";
            else {
                this.title = "New Pole";
            }
            this.getFormData(this.poleId);
        });
    }
    getFormData(poleId) {
        if (poleId != null) {
            $("#ajax-loading").show();
            this.poleService.getPole(poleId).subscribe(resp => {
                this.pole = new _models_pole__WEBPACK_IMPORTED_MODULE_6__["Pole"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.pole = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.pole = new _models_pole__WEBPACK_IMPORTED_MODULE_6__["Pole"]();
                this.helper.showAlertMessage("Unable to fetch pole details", "error");
            });
        }
        else
            this.pole = new _models_pole__WEBPACK_IMPORTED_MODULE_6__["Pole"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.pole);
            if (errorMessages.length == 0) {
                this.poleService.savePole(this.pole).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Pole information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save pole information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save pole information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(pole) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (pole.name == null || pole.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.poleService.checkNameExists(pole.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
PoleDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_pole_service__WEBPACK_IMPORTED_MODULE_5__["PoleService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
PoleDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pole-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/pole-details.html")).default,
        providers: [_services_pole_service__WEBPACK_IMPORTED_MODULE_5__["PoleService"]],
    })
], PoleDetails);



/***/ }),

/***/ "./src/app/entities/views/spliceClosure-details.ts":
/*!*********************************************************!*\
  !*** ./src/app/entities/views/spliceClosure-details.ts ***!
  \*********************************************************/
/*! exports provided: SpliceClosureDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpliceClosureDetails", function() { return SpliceClosureDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");
/* harmony import */ var _models_spliceClosure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/spliceClosure */ "./src/app/entities/models/spliceClosure.ts");







let SpliceClosureDetails = class SpliceClosureDetails {
    constructor(location, route, spliceClosureService, helper) {
        this.location = location;
        this.route = route;
        this.spliceClosureService = spliceClosureService;
        this.helper = helper;
        this.title = "New SpliceClosure";
        this.spliceClosure = new _models_spliceClosure__WEBPACK_IMPORTED_MODULE_6__["SpliceClosure"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.spliceClosureId = params['id'];
            if (this.spliceClosureId != null)
                this.title = "Edit SpliceClosure";
            else {
                this.title = "New SpliceClosure";
            }
            this.getFormData(this.spliceClosureId);
        });
    }
    getFormData(spliceClosureId) {
        if (spliceClosureId != null) {
            $("#ajax-loading").show();
            this.spliceClosureService.getSpliceClosure(spliceClosureId).subscribe(resp => {
                this.spliceClosure = new _models_spliceClosure__WEBPACK_IMPORTED_MODULE_6__["SpliceClosure"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.spliceClosure = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.spliceClosure = new _models_spliceClosure__WEBPACK_IMPORTED_MODULE_6__["SpliceClosure"]();
                this.helper.showAlertMessage("Unable to fetch spliceClosure details", "error");
            });
        }
        else
            this.spliceClosure = new _models_spliceClosure__WEBPACK_IMPORTED_MODULE_6__["SpliceClosure"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.spliceClosure);
            if (errorMessages.length == 0) {
                this.spliceClosureService.saveSpliceClosure(this.spliceClosure).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Splice Closure information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save splice closure information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save splice closure information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(spliceClosure) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (spliceClosure.name == null || spliceClosure.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.spliceClosureService.checkNameExists(spliceClosure.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
SpliceClosureDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_5__["SpliceClosureService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
SpliceClosureDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spliceClosure-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/spliceClosure-details.html")).default,
        providers: [_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_5__["SpliceClosureService"]],
    })
], SpliceClosureDetails);



/***/ }),

/***/ "./src/app/entities/views/splitter-details.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/views/splitter-details.ts ***!
  \****************************************************/
/*! exports provided: SplitterDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterDetails", function() { return SplitterDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_splitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/splitter.service */ "./src/app/entities/services/splitter.service.ts");
/* harmony import */ var _models_splitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/splitter */ "./src/app/entities/models/splitter.ts");







let SplitterDetails = class SplitterDetails {
    constructor(location, route, splitterService, helper) {
        this.location = location;
        this.route = route;
        this.splitterService = splitterService;
        this.helper = helper;
        this.title = "New Splitter";
        this.splitter = new _models_splitter__WEBPACK_IMPORTED_MODULE_6__["Splitter"]();
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.splitterId = params['id'];
            if (this.splitterId != null)
                this.title = "Edit Splitter";
            else {
                this.title = "New Splitter";
            }
            this.getFormData(this.splitterId);
        });
    }
    getFormData(splitterId) {
        if (splitterId != null) {
            $("#ajax-loading").show();
            this.splitterService.getSplitter(splitterId).subscribe(resp => {
                this.splitter = new _models_splitter__WEBPACK_IMPORTED_MODULE_6__["Splitter"]();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.splitter = resp.data;
                    }
                }
                $("#ajax-loading").hide();
            }, (err) => {
                $("#ajax-loading").hide();
                this.splitter = new _models_splitter__WEBPACK_IMPORTED_MODULE_6__["Splitter"]();
                this.helper.showAlertMessage("Unable to fetch splitter details", "error");
            });
        }
        else
            this.splitter = new _models_splitter__WEBPACK_IMPORTED_MODULE_6__["Splitter"]();
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = yield this.validateEntity(this.splitter);
            if (errorMessages.length == 0) {
                this.splitterService.saveSplitter(this.splitter).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Splitter information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save splitter information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save splitter information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateEntity(splitter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (splitter.name == null || splitter.name.trim() == '')
                errorMessages.push("Name cannot be empty.");
            else {
                let resp = yield this.splitterService.checkNameExists(splitter.name);
                if (resp)
                    errorMessages.push("Name already exists.");
            }
            //    if (user.loginId == null || user.loginId.trim() == "")
            //        errorMessages.push("Login Id cannot be empty string");
            //    //if (user.password == null || user.password.trim() == "")
            //    //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
SplitterDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_splitter_service__WEBPACK_IMPORTED_MODULE_5__["SplitterService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
SplitterDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./splitter-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/views/splitter-details.html")).default,
        providers: [_services_splitter_service__WEBPACK_IMPORTED_MODULE_5__["SplitterService"]],
    })
], SplitterDetails);



/***/ }),

/***/ "./src/app/generalSettings/generalSettings.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/generalSettings/generalSettings.module.ts ***!
  \***********************************************************/
/*! exports provided: GeneralSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsModule", function() { return GeneralSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _generalSettings_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalSettings.routes */ "./src/app/generalSettings/generalSettings.routes.ts");
/* harmony import */ var _services_generalSettings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/generalSettings.service */ "./src/app/generalSettings/services/generalSettings.service.ts");
/* harmony import */ var _views_generalSettings_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/generalSettings-details */ "./src/app/generalSettings/views/generalSettings-details.ts");







//import { ColorPickerModule } from '../../components/color-picker/color-picker.module';
let GeneralSettingsModule = class GeneralSettingsModule {
};
GeneralSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _generalSettings_routes__WEBPACK_IMPORTED_MODULE_4__["GeneralSettingsRouting"],
        ],
        declarations: [
            _views_generalSettings_details__WEBPACK_IMPORTED_MODULE_6__["GeneralSettingsDetails"]
        ],
        providers: [
            _services_generalSettings_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSettingsService"]
        ]
    })
], GeneralSettingsModule);



/***/ }),

/***/ "./src/app/generalSettings/generalSettings.routes.ts":
/*!***********************************************************!*\
  !*** ./src/app/generalSettings/generalSettings.routes.ts ***!
  \***********************************************************/
/*! exports provided: generalSettingsRoutes, GeneralSettingsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalSettingsRoutes", function() { return generalSettingsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsRouting", function() { return GeneralSettingsRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_generalSettings_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/generalSettings-details */ "./src/app/generalSettings/views/generalSettings-details.ts");



const generalSettingsRoutes = [
    {
        path: 'generalSettings',
        children: [
            { path: '', component: _views_generalSettings_details__WEBPACK_IMPORTED_MODULE_2__["GeneralSettingsDetails"] },
        ]
    },
];
const GeneralSettingsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(generalSettingsRoutes);


/***/ }),

/***/ "./src/app/generalSettings/model/generalSettings.ts":
/*!**********************************************************!*\
  !*** ./src/app/generalSettings/model/generalSettings.ts ***!
  \**********************************************************/
/*! exports provided: GeneralSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettings", function() { return GeneralSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class GeneralSettings extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
    constructor() {
        //boundaryHierarchies: BoundaryHierarchy[];
        //constructionStages: ConstructionStage[];
        //activationStages: ActivationStage[];
        //accessibilities: Accessibility[]
        //hierarchyTypes: HierarchyType[];
        //opticalLinkBudget: OpticalLinkBudget[];
        //ofcUtilization: OFCUtilization[];
        super(...arguments);
        this.fileAttachmentLimit = 5;
    }
}
//export class ConstructionStage {
//   name: string;
//   colorCode: string;
//}
//export class OFCUtilization {
//   name: string;
//   colorCode: string;
//}
//export class ActivationStage {
//   name: string;
//   colorCode: string;
//}
//export class Accessibility {
//   name: string;
//   colorCode: string;
//}
//export class HierarchyType {
//   name: string;
//   colorCode: string;
//}
//export class BoundaryHierarchy {
//   name: string;
//   colorCode: string;
//}
//export class OpticalLinkBudget {
//   waveLengthName: string;
//   cablelengthLoss: string;
//   spliceLoss: string;
//   patchingLoss: string;
//   patchConnectorLoss: string;
//}


/***/ }),

/***/ "./src/app/generalSettings/services/generalSettings.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/generalSettings/services/generalSettings.service.ts ***!
  \*********************************************************************/
/*! exports provided: GeneralSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsService", function() { return GeneralSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GeneralSettingsService = class GeneralSettingsService {
    constructor(http) {
        this.http = http;
        this.getGeneralSettingsApi = 'GeneralSettings/GetGeneralSettings/';
        this.saveGeneralSettingApi = 'GeneralSettings/SaveGeneralSettings/';
    }
    getGeneralSettings() {
        return this.http.get(this.getGeneralSettingsApi);
    }
    saveGeneralSettings(generalSettings) {
        return this.http.post(this.saveGeneralSettingApi, generalSettings);
    }
};
GeneralSettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeneralSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GeneralSettingsService);



/***/ }),

/***/ "./src/app/generalSettings/views/generalSettings-details.ts":
/*!******************************************************************!*\
  !*** ./src/app/generalSettings/views/generalSettings-details.ts ***!
  \******************************************************************/
/*! exports provided: GeneralSettingsDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsDetails", function() { return GeneralSettingsDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_generalSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/generalSettings */ "./src/app/generalSettings/model/generalSettings.ts");
/* harmony import */ var _services_generalSettings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/generalSettings.service */ "./src/app/generalSettings/services/generalSettings.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");






let GeneralSettingsDetails = class GeneralSettingsDetails {
    constructor(router, route, generalSettingsService, helper) {
        this.router = router;
        this.route = route;
        this.generalSettingsService = generalSettingsService;
        this.helper = helper;
        this.generalSettings = new _model_generalSettings__WEBPACK_IMPORTED_MODULE_3__["GeneralSettings"]();
    }
    ngOnInit() {
        this.getFormData();
    }
    //public settings: PaletteSettings = {
    //   //palette: [
    //   //   "#7f8000", "#00ff00", "#0017ff", "#0098b3",
    //   //   "#9000ec", "#108810", "#505050", "#ffe134", "#ff0000",
    //   //   "#ff1193"
    //   //],
    //   palette: [
    //      "#00ff00", "#0017ff", "#9000ec", "#ffe134", "#ff0000",
    //   ],
    //   columns: 5,
    //   tileSize: 25
    //}
    // addBoundaryHierarchy() {
    //    if (this.generalSettings.boundaryHierarchies == null)
    //       this.generalSettings.boundaryHierarchies = [];
    //    this.generalSettings.boundaryHierarchies.push({ name: "", colorCode: "" });
    // }
    // deleteboundaryHierarchy(index) {
    //    this.generalSettings.boundaryHierarchies.splice(index, 1);
    // }
    ///* addUtilization() {
    //    if (this.generalSettings.ofcUtilization == null)
    //       this.generalSettings.ofcUtilization = [];
    //    this.generalSettings.ofcUtilization.push({ name: "", colorCode: "" });
    // }
    // deleteofcUtilization(index) {
    //    this.generalSettings.ofcUtilization.splice(index, 1);
    // }*/
    // addConstructionStage() {
    //    if (this.generalSettings.constructionStages == null)
    //       this.generalSettings.constructionStages = [];
    //    this.generalSettings.constructionStages.push({ name: "", colorCode: "#0017ff" });
    // }
    // deleteConstructionStage(index) {
    //    this.generalSettings.constructionStages.splice(index, 1);
    // }
    // addActivationStage() {
    //    if (this.generalSettings.activationStages == null)
    //       this.generalSettings.activationStages = [];
    //    this.generalSettings.activationStages.push({ name: "", colorCode: "#0017ff" });
    // }
    // deleteActivationStage(index) {
    //    this.generalSettings.activationStages.splice(index, 1);
    // }
    // addAccessibility() {
    //    if (this.generalSettings.accessibilities == null)
    //       this.generalSettings.accessibilities = [];
    //    this.generalSettings.accessibilities.push({ name: "", colorCode: "#0017ff" });
    // }
    // deleteAccessibility(index) {
    //    this.generalSettings.accessibilities.splice(index, 1);
    // }
    // addHierarchyType() {
    //    if (this.generalSettings.hierarchyTypes == null)
    //       this.generalSettings.hierarchyTypes = [];
    //    this.generalSettings.hierarchyTypes.push({ name: "", colorCode: "#0017ff" });
    // }
    // deleteHierarchyType(index) {
    //    this.generalSettings.hierarchyTypes.splice(index, 1);
    // }
    // addOpticalLinkBudget() {
    //    if (this.generalSettings.opticalLinkBudget == null)
    //       this.generalSettings.opticalLinkBudget = [];
    //    this.generalSettings.opticalLinkBudget.push({ waveLengthName: "", cablelengthLoss: "", spliceLoss: "", patchingLoss: "", patchConnectorLoss:""});
    // }
    // deleteOpticalLinkBudget(index) {
    //    this.generalSettings.opticalLinkBudget.splice(index, 1);
    // }
    getFormData() {
        $("#ajax-loading").show();
        this.generalSettingsService.getGeneralSettings().subscribe(resp => {
            this.generalSettings = new _model_generalSettings__WEBPACK_IMPORTED_MODULE_3__["GeneralSettings"]();
            if (resp.status.toLowerCase() == "error") {
                this.helper.showAlertMessage(resp.message, "error");
            }
            else {
                if (resp.data != null) {
                    this.generalSettings = resp.data;
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.generalSettings = new _model_generalSettings__WEBPACK_IMPORTED_MODULE_3__["GeneralSettings"]();
            let msg = `Unable to fetch general settings : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
        });
    }
    save() {
        var errorMessages = this.validateGeneralSetting(this.generalSettings);
        if (errorMessages.length == 0) {
            this.generalSettingsService.saveGeneralSettings(this.generalSettings).subscribe(resp => {
                if (resp && resp.data && resp.status.toLowerCase() == "ok")
                    this.helper.showAlertMessage("General settings are saved", "success");
                else
                    this.helper.showAlertMessage("error saving general settings", "error");
            }, err => {
                this.helper.showAlertMessage("Unable to save general settings.", "error");
            });
        }
        else {
            this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
        }
    }
    validateGeneralSetting(generalSetting) {
        var errorMessages = [];
        if (generalSetting.fileAttachmentLimit < 0 || generalSetting.fileAttachmentLimit > 20)
            errorMessages.push("File attachments must be within the range of 0 to 20 MBs");
        return errorMessages;
    }
};
GeneralSettingsDetails.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_generalSettings_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSettingsService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"] }
];
GeneralSettingsDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generalSetting-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generalSettings/views/generalSetting-details.html")).default,
        providers: [_services_generalSettings_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSettingsService"]],
    })
], GeneralSettingsDetails);



/***/ }),

/***/ "./src/app/groups/group.module.ts":
/*!****************************************!*\
  !*** ./src/app/groups/group.module.ts ***!
  \****************************************/
/*! exports provided: GroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_group_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/group-list */ "./src/app/groups/views/group-list.ts");
/* harmony import */ var _views_group_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/group-details */ "./src/app/groups/views/group-details.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/group.service */ "./src/app/groups/services/group.service.ts");
/* harmony import */ var _group_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group.routes */ "./src/app/groups/group.routes.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");











let GroupModule = class GroupModule {
};
GroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_5__["TreeTableModule"],
            _group_routes__WEBPACK_IMPORTED_MODULE_9__["GroupRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        declarations: [
            _views_group_list__WEBPACK_IMPORTED_MODULE_6__["GroupList"],
            _views_group_details__WEBPACK_IMPORTED_MODULE_7__["GroupDetails"]
        ],
        providers: [
            _services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"]
        ]
    })
], GroupModule);



/***/ }),

/***/ "./src/app/groups/group.routes.ts":
/*!****************************************!*\
  !*** ./src/app/groups/group.routes.ts ***!
  \****************************************/
/*! exports provided: groupRoutes, GroupRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRoutes", function() { return groupRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRouting", function() { return GroupRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_group_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/group-list */ "./src/app/groups/views/group-list.ts");
/* harmony import */ var _views_group_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/group-details */ "./src/app/groups/views/group-details.ts");




const groupRoutes = [
    {
        path: 'groups',
        children: [
            { path: '', component: _views_group_list__WEBPACK_IMPORTED_MODULE_2__["GroupList"] },
            { path: 'details', component: _views_group_details__WEBPACK_IMPORTED_MODULE_3__["GroupDetails"] },
            { path: 'details/:id', component: _views_group_details__WEBPACK_IMPORTED_MODULE_3__["GroupDetails"] },
        ]
    },
];
const GroupRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(groupRoutes);


/***/ }),

/***/ "./src/app/groups/models/group.ts":
/*!****************************************!*\
  !*** ./src/app/groups/models/group.ts ***!
  \****************************************/
/*! exports provided: Group, ModuleFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFeature", function() { return ModuleFeature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class Group extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
}
class ModuleFeature {
}


/***/ }),

/***/ "./src/app/groups/services/group.service.ts":
/*!**************************************************!*\
  !*** ./src/app/groups/services/group.service.ts ***!
  \**************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let GroupService = class GroupService {
    constructor(http) {
        this.http = http;
        this.getGroupsApi = 'Groups/GetGroups/';
        this.getGroupApi = 'Groups/GetGroup/';
        this.checkNameExistsApi = 'Groups/CheckNameExists/';
        this.saveGroupApi = 'Groups/SaveGroup/';
        this.deleteGroupApi = 'Groups/DeleteGroup/';
    }
    getGroups(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getGroupsApi, paginationRequest);
    }
    getGroup(groupId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('groupId', groupId);
        return this.http.get(this.getGroupApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveGroup(group) {
        return this.http.post(this.saveGroupApi, group);
    }
    deleteGroup(groupId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('groupId', groupId);
        return this.http.delete(this.deleteGroupApi, { params });
    }
};
GroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GroupService);



/***/ }),

/***/ "./src/app/groups/views/group-details.ts":
/*!***********************************************!*\
  !*** ./src/app/groups/views/group-details.ts ***!
  \***********************************************/
/*! exports provided: GroupDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetails", function() { return GroupDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/group */ "./src/app/groups/models/group.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/group.service */ "./src/app/groups/services/group.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _modules_services_module_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/services/module.service */ "./src/app/modules/services/module.service.ts");









let GroupDetails = class GroupDetails {
    constructor(location, route, groupService, moduleService, helper) {
        this.location = location;
        this.route = route;
        this.groupService = groupService;
        this.moduleService = moduleService;
        this.helper = helper;
        this.groupId = "";
        this.group = new _models_group__WEBPACK_IMPORTED_MODULE_5__["Group"]();
        this.modules = new Array();
        this.title = "New Group";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.groupId = params['id'];
            if (this.groupId == null)
                this.title = "New Group";
            else
                this.title = "Edit Group";
            this.getFormData(this.groupId);
        });
    }
    getFormData(groupId) {
        let groupsSvc = this.groupService.getGroup(groupId);
        let modulesSvc = this.moduleService.getModules(null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([modulesSvc, groupsSvc]).subscribe(results => {
            if (results[0] && results[0].data) {
                this.modules = results[0].data;
                let treeNodes = [];
                this.modules.forEach(m => {
                    let parentId = m.parentId == null ? "0" : m.parentId;
                    treeNodes.push({ name: m.name, id: m.id, parentId: parentId });
                    m.features.forEach(f => {
                        treeNodes.push({ name: f.name, id: f.code, parentId: m.id, isFeature: true });
                    });
                });
                this.treeModules = this.helper.generateTreeTable(treeNodes, "0", true);
            }
            if (groupId && results[1]) {
                if (results[1].status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(results[1].message, "error");
                }
                else {
                    if (results[1].data != null) {
                        this.group = results[1].data;
                        this.selectedModules = [];
                        //this.group.modules.forEach(x => {
                        //    let module = this.treeModules.find(m => m.id == x);
                        //    //module.parent = null;
                        //    //module.partialSelected = false;
                        //    this.selectedModules.push(module);
                        //});
                        this.group.moduleFeatures.forEach(x => {
                            x.featureCodes.forEach(code => {
                                var node = null;
                                for (var i = 0; i < this.treeModules.length; i++) {
                                    node = this.helper.findNode(code, this.treeModules[i]);
                                    if (node)
                                        break;
                                }
                                if (node) {
                                    this.selectedModules.push(node);
                                }
                            });
                        });
                    }
                    else
                        this.helper.showAlertMessage(results[1].message, "error");
                }
            }
            else
                this.group = new _models_group__WEBPACK_IMPORTED_MODULE_5__["Group"]();
        });
    }
    saveGroup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let errorMessages = yield this.validateGroup(this.group);
            this.group.moduleFeatures = [];
            var features = this.selectedModules.filter(x => x.isFeature == true);
            features.forEach(f => {
                var index = this.group.moduleFeatures.findIndex(x => x.moduleId == f.parentId);
                if (index < 0) {
                    this.group.moduleFeatures.push({
                        moduleId: f.parentId,
                        moduleName: f.parent.name,
                        featureCodes: [f.id]
                    });
                }
                else {
                    this.group.moduleFeatures[index].featureCodes.push(f.id);
                }
            });
            if (errorMessages.length == 0) {
                this.groupService.saveGroup(this.group).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Group information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save group information.", "error");
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Unable to save group information.", "error");
                });
            }
            else {
                let errorMessage = this.helper.getErrorMessagesText(errorMessages);
                this.helper.showAlertMessage(errorMessage, "error");
            }
        });
    }
    validateGroup(group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let errorMessages = [];
            if (group.name == null || group.name.trim() == '')
                errorMessages.push("Group name cannot be empty");
            else {
                let resp = yield this.groupService.checkNameExists(group.name);
                if (resp.data != null && resp.data != group.id)
                    errorMessages.push("Name already exists.");
            }
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
GroupDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"] },
    { type: _modules_services_module_service__WEBPACK_IMPORTED_MODULE_8__["ModuleService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"] }
];
GroupDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/views/group-details.html")).default,
        providers: [_services_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"], _modules_services_module_service__WEBPACK_IMPORTED_MODULE_8__["ModuleService"]],
    })
], GroupDetails);



/***/ }),

/***/ "./src/app/groups/views/group-list.ts":
/*!********************************************!*\
  !*** ./src/app/groups/views/group-list.ts ***!
  \********************************************/
/*! exports provided: GroupList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupList", function() { return GroupList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/group.service */ "./src/app/groups/services/group.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let GroupList = class GroupList {
    constructor(groupService, helper) {
        this.groupService = groupService;
        this.helper = helper;
        this.groups = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Groups...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        this.groupService.getGroups(paginationRequest).subscribe(resp => {
            this.groups = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.groups = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered groups.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.groups = null;
            let msg = `Unable to fetch groups : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching groups.";
        });
    }
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(group) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Group</b>",
            overlay: false,
            content: "Do you want to delete group - " + group.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.groupService.deleteGroup(group.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Group deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting group", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting group", "error");
                });
            }
        }).open();
    }
};
GroupList.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
GroupList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/views/group-list.html")).default,
        providers: [_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]]
    })
], GroupList);



/***/ }),

/***/ "./src/app/layers/layer.module.ts":
/*!****************************************!*\
  !*** ./src/app/layers/layer.module.ts ***!
  \****************************************/
/*! exports provided: LayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerModule", function() { return LayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_layer_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/layer-list */ "./src/app/layers/views/layer-list.ts");
/* harmony import */ var _views_layer_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/layer-details */ "./src/app/layers/views/layer-details.ts");
/* harmony import */ var _services_layer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/layer.service */ "./src/app/layers/services/layer.service.ts");
/* harmony import */ var _layer_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layer.routes */ "./src/app/layers/layer.routes.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");











let LayerModule = class LayerModule {
};
LayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_5__["TreeTableModule"],
            _layer_routes__WEBPACK_IMPORTED_MODULE_9__["LayerRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        declarations: [
            _views_layer_list__WEBPACK_IMPORTED_MODULE_6__["LayerList"],
            _views_layer_details__WEBPACK_IMPORTED_MODULE_7__["LayerDetails"]
        ],
        providers: [
            _services_layer_service__WEBPACK_IMPORTED_MODULE_8__["LayerService"]
        ]
    })
], LayerModule);



/***/ }),

/***/ "./src/app/layers/layer.routes.ts":
/*!****************************************!*\
  !*** ./src/app/layers/layer.routes.ts ***!
  \****************************************/
/*! exports provided: layerRoutes, LayerRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerRoutes", function() { return layerRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerRouting", function() { return LayerRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_layer_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/layer-list */ "./src/app/layers/views/layer-list.ts");
/* harmony import */ var _views_layer_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/layer-details */ "./src/app/layers/views/layer-details.ts");




const layerRoutes = [
    {
        path: 'layers',
        children: [
            { path: '', component: _views_layer_list__WEBPACK_IMPORTED_MODULE_2__["LayerList"] },
            { path: 'details', component: _views_layer_details__WEBPACK_IMPORTED_MODULE_3__["LayerDetails"] },
            { path: 'details/:id', component: _views_layer_details__WEBPACK_IMPORTED_MODULE_3__["LayerDetails"] },
        ]
    },
];
const LayerRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(layerRoutes);


/***/ }),

/***/ "./src/app/layers/models/layer.ts":
/*!****************************************!*\
  !*** ./src/app/layers/models/layer.ts ***!
  \****************************************/
/*! exports provided: Layer, ModulePermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePermission", function() { return ModulePermission; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class Layer extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
}
class ModulePermission {
}


/***/ }),

/***/ "./src/app/layers/services/layer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/layers/services/layer.service.ts ***!
  \**************************************************/
/*! exports provided: LayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerService", function() { return LayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let LayerService = class LayerService {
    constructor(http) {
        this.http = http;
        this.getLayersApi = 'Layers/GetLayers/';
        this.getLayerApi = 'Layers/GetLayer/';
        this.saveLayerApi = 'Layers/SaveLayer/';
        this.deleteLayerApi = 'Layers/DeleteLayer/';
    }
    getLayers(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getLayersApi, paginationRequest);
    }
    getLayer(layerId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('layerId', layerId);
        return this.http.get(this.getLayerApi, { params });
    }
    saveLayer(layer) {
        return this.http.post(this.saveLayerApi, layer);
    }
    deleteLayer(layerId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('layerId', layerId);
        return this.http.delete(this.deleteLayerApi, { params });
    }
};
LayerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LayerService);



/***/ }),

/***/ "./src/app/layers/views/layer-details.ts":
/*!***********************************************!*\
  !*** ./src/app/layers/views/layer-details.ts ***!
  \***********************************************/
/*! exports provided: LayerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerDetails", function() { return LayerDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_layer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/layer.service */ "./src/app/layers/services/layer.service.ts");
/* harmony import */ var _modules_services_module_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/services/module.service */ "./src/app/modules/services/module.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _models_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/layer */ "./src/app/layers/models/layer.ts");









let LayerDetails = class LayerDetails {
    constructor(location, route, layerService, moduleService, helper) {
        this.location = location;
        this.route = route;
        this.layerService = layerService;
        this.moduleService = moduleService;
        this.helper = helper;
        this.layerId = "";
        this.layer = new _models_layer__WEBPACK_IMPORTED_MODULE_8__["Layer"]();
        this.modules = new Array();
        this.title = "New Layer";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.layerId = params['id'];
            if (this.layerId == null)
                this.title = "New Layer";
            else
                this.title = "Edit Layer";
            this.getFormData(this.layerId);
        });
    }
    getFormData(layerId) {
        let layersSvc = this.layerService.getLayer(layerId);
        let modulesSvc = this.moduleService.getModules(null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([modulesSvc, layersSvc]).subscribe(results => {
            if (results[0] && results[0].data) {
                this.modules = results[0].data;
                let treeNodes = [];
                this.modules.forEach(m => {
                    let parentId = m.parentId == null ? "0" : m.parentId;
                    treeNodes.push({ name: m.name, id: m.id, parentId: parentId });
                    m.permissions.forEach(f => {
                        treeNodes.push({ id: f.code, name: f.name, parentId: m.id, isPermission: true });
                    });
                });
                this.treeModules = this.helper.generateTreeTable(treeNodes, "0", true);
            }
            if (layerId && results[1]) {
                if (results[1].status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(results[1].message, "error");
                }
                else {
                    if (results[1].data != null) {
                        this.layer = results[1].data;
                        this.selectedModules = [];
                        this.layer.modulePermissions.forEach(x => {
                            //this.checkNode(this.treeModules, x.permissionCodes);
                            x.permissionCodes.forEach(code => {
                                var node = null;
                                for (var i = 0; i < this.treeModules.length; i++) {
                                    node = this.helper.findNode(code, this.treeModules[i]);
                                    if (node)
                                        break;
                                }
                                if (node) {
                                    this.selectedModules.push(node);
                                }
                            });
                        });
                    }
                    else
                        this.helper.showAlertMessage(results[1].message, "error");
                }
            }
            else
                this.layer = new _models_layer__WEBPACK_IMPORTED_MODULE_8__["Layer"]();
        });
    }
    //checkNode(nodes: any, str: string[]) {
    //    for (let i = 0; i < nodes.length; i++) {
    //        //if (!nodes[i].leaf && nodes[i].children[0].leaf) {
    //            for (let j = 0; j < nodes[i].children.length; j++) {
    //                if (str.includes(nodes[i].children[j].id)) {
    //                    if (!this.selectedModules.includes(nodes[i].children[j])) {
    //                        this.selectedModules.push(nodes[i].children[j]);
    //                    }
    //                }
    //            }
    //        //}
    //        //if (nodes[i].leaf) {
    //        //    return;
    //        //}
    //        this.checkNode(nodes[i].children, str);
    //        let count = nodes[i].children.length;
    //        let c = 0;
    //        for (let j = 0; j < nodes[i].children.length; j++) {
    //            if (this.selectedModules.includes(nodes[i].children[j])) {
    //                c++;
    //            }
    //            if (nodes[i].children[j].partialSelected) nodes[i].partialSelected = true;
    //        }
    //        if (c == 0) { }
    //        else if (c == count) {
    //            nodes[i].partialSelected = false;
    //            if (!this.selectedModules.includes(nodes[i])) {
    //                this.selectedModules.push(nodes[i]);
    //            }
    //        }
    //        else {
    //            nodes[i].partialSelected = true;
    //        }
    //    }
    //}
    save() {
        let errorMessages = this.validateLayer(this.layer);
        this.layer.modulePermissions = [];
        var features = this.selectedModules.filter(x => x.isPermission == true);
        features.forEach(f => {
            var index = this.layer.modulePermissions.findIndex(x => x.moduleId == f.parentId);
            if (index < 0) {
                this.layer.modulePermissions.push({
                    moduleId: f.parentId,
                    permissionCodes: [f.id]
                });
            }
            else {
                this.layer.modulePermissions[index].permissionCodes.push(f.id);
            }
        });
        if (errorMessages.length == 0) {
            this.layerService.saveLayer(this.layer).subscribe(resp => {
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.helper.showAlertMessage("Layer information saved", "success");
                        this.goBack();
                    }
                    else
                        this.helper.showAlertMessage("Unable to save layer information.", "error");
                }
            }, (err) => {
                this.helper.showAlertMessage("Unable to save layer information.", "error");
            });
        }
        else {
            let errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }
    validateLayer(layer) {
        let errorMessages = [];
        if (layer.name == null || layer.name.trim() == '')
            errorMessages.push("Layer name cannot be empty");
        return errorMessages;
    }
    goBack() {
        this.location.back();
    }
};
LayerDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_layer_service__WEBPACK_IMPORTED_MODULE_5__["LayerService"] },
    { type: _modules_services_module_service__WEBPACK_IMPORTED_MODULE_6__["ModuleService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"] }
];
LayerDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layer-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layers/views/layer-details.html")).default,
        providers: [_services_layer_service__WEBPACK_IMPORTED_MODULE_5__["LayerService"], _modules_services_module_service__WEBPACK_IMPORTED_MODULE_6__["ModuleService"]],
    })
], LayerDetails);



/***/ }),

/***/ "./src/app/layers/views/layer-list.ts":
/*!********************************************!*\
  !*** ./src/app/layers/views/layer-list.ts ***!
  \********************************************/
/*! exports provided: LayerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerList", function() { return LayerList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_layer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layer.service */ "./src/app/layers/services/layer.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let LayerList = class LayerList {
    constructor(layerService, helper) {
        this.layerService = layerService;
        this.helper = helper;
        this.layers = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Layers...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        this.layerService.getLayers(paginationRequest).subscribe(resp => {
            this.layers = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.layers = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered layers.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.layers = null;
            let msg = `Unable to fetch layers : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching layers.";
        });
    }
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(layer) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Layer</b>",
            overlay: false,
            content: "Do you want to delete layer - " + layer.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.layerService.deleteLayer(layer.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Layer deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting layer", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting layer", "error");
                });
            }
        }).open();
    }
};
LayerList.ctorParameters = () => [
    { type: _services_layer_service__WEBPACK_IMPORTED_MODULE_2__["LayerService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
LayerList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layer-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layers/views/layer-list.html")).default,
        providers: [_services_layer_service__WEBPACK_IMPORTED_MODULE_2__["LayerService"]]
    })
], LayerList);



/***/ }),

/***/ "./src/app/modules/services/module.service.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/services/module.service.ts ***!
  \****************************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ModuleService = class ModuleService {
    constructor(http) {
        this.http = http;
        this.getModulesApi = "Modules/GetModules/";
        this.getModuleApi = 'Modules/GetModule/';
        this.saveModuleApi = 'Modules/SaveModule/';
        this.deleteModuleApi = 'Modules/DeleteModule/';
    }
    getModules(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getModulesApi, paginationRequest);
    }
    getModule(moduleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('moduleId', moduleId);
        return this.http.get(this.getModuleApi, { params });
    }
    saveModule(module) {
        return this.http.post(this.saveModuleApi, module);
    }
    deleteModule(moduleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('moduleId', moduleId);
        return this.http.delete(this.deleteModuleApi, { params });
    }
};
ModuleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ModuleService);



/***/ }),

/***/ "./src/app/roles/models/role.ts":
/*!**************************************!*\
  !*** ./src/app/roles/models/role.ts ***!
  \**************************************/
/*! exports provided: Role, ModulePermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePermission", function() { return ModulePermission; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class Role extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
}
class ModulePermission {
}


/***/ }),

/***/ "./src/app/roles/role.module.ts":
/*!**************************************!*\
  !*** ./src/app/roles/role.module.ts ***!
  \**************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_role_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/role-list */ "./src/app/roles/views/role-list.ts");
/* harmony import */ var _views_role_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/role-details */ "./src/app/roles/views/role-details.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/role.service */ "./src/app/roles/services/role.service.ts");
/* harmony import */ var _role_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role.routes */ "./src/app/roles/role.routes.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");





//import { TreeModule } from 'primeng/tree';






let RoleModule = class RoleModule {
};
RoleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_5__["TreeTableModule"],
            _role_routes__WEBPACK_IMPORTED_MODULE_9__["RoleRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        declarations: [
            _views_role_list__WEBPACK_IMPORTED_MODULE_6__["RoleList"],
            _views_role_details__WEBPACK_IMPORTED_MODULE_7__["RoleDetails"]
        ],
        providers: [
            _services_role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"]
        ]
    })
], RoleModule);



/***/ }),

/***/ "./src/app/roles/role.routes.ts":
/*!**************************************!*\
  !*** ./src/app/roles/role.routes.ts ***!
  \**************************************/
/*! exports provided: roleRoutes, RoleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleRoutes", function() { return roleRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRouting", function() { return RoleRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_role_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/role-list */ "./src/app/roles/views/role-list.ts");
/* harmony import */ var _views_role_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/role-details */ "./src/app/roles/views/role-details.ts");




const roleRoutes = [
    {
        path: 'roles',
        children: [
            { path: '', component: _views_role_list__WEBPACK_IMPORTED_MODULE_2__["RoleList"] },
            { path: 'details', component: _views_role_details__WEBPACK_IMPORTED_MODULE_3__["RoleDetails"] },
            { path: 'details/:id', component: _views_role_details__WEBPACK_IMPORTED_MODULE_3__["RoleDetails"] },
        ]
    },
];
const RoleRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(roleRoutes);


/***/ }),

/***/ "./src/app/roles/services/role.service.ts":
/*!************************************************!*\
  !*** ./src/app/roles/services/role.service.ts ***!
  \************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let RoleService = class RoleService {
    constructor(http) {
        this.http = http;
        this.getRolesApi = 'Roles/GetRoles/';
        this.getRoleApi = 'Roles/GetRole/';
        this.checkNameExistsApi = 'Roles/CheckNameExists/';
        this.saveRoleApi = 'Roles/SaveRole/';
        this.deleteRoleApi = 'Roles/DeleteRole/';
    }
    getRoles(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getRolesApi, paginationRequest);
    }
    getRole(roleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('roleId', roleId);
        return this.http.get(this.getRoleApi, { params });
    }
    checkNameExists(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('name', name);
            return yield this.http.get(this.checkNameExistsApi, { params }).toPromise();
        });
    }
    saveRole(role) {
        return this.http.post(this.saveRoleApi, role);
    }
    deleteRole(roleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('roleId', roleId);
        return this.http.delete(this.deleteRoleApi, { params });
    }
};
RoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RoleService);



/***/ }),

/***/ "./src/app/roles/views/role-details.ts":
/*!*********************************************!*\
  !*** ./src/app/roles/views/role-details.ts ***!
  \*********************************************/
/*! exports provided: RoleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetails", function() { return RoleDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/role.service */ "./src/app/roles/services/role.service.ts");
/* harmony import */ var _modules_services_module_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/services/module.service */ "./src/app/modules/services/module.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/role */ "./src/app/roles/models/role.ts");









let RoleDetails = class RoleDetails {
    constructor(location, route, roleService, moduleService, helper) {
        this.location = location;
        this.route = route;
        this.roleService = roleService;
        this.moduleService = moduleService;
        this.helper = helper;
        this.roleId = "";
        this.role = new _models_role__WEBPACK_IMPORTED_MODULE_8__["Role"]();
        this.modules = new Array();
        this.title = "New Role";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.roleId = params['id'];
            if (this.roleId == null)
                this.title = "New Role";
            else
                this.title = "Edit Role";
            this.getFormData(this.roleId);
        });
    }
    getFormData(roleId) {
        let rolesSvc = this.roleService.getRole(roleId);
        let modulesSvc = this.moduleService.getModules(null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([modulesSvc, rolesSvc]).subscribe(results => {
            if (results[0] && results[0].data) {
                this.modules = results[0].data;
                let treeNodes = [];
                this.modules.forEach(m => {
                    let parentId = m.parentId == null ? "0" : m.parentId;
                    treeNodes.push({ name: m.name, id: m.id, parentId: parentId });
                    m.permissions.forEach(f => {
                        treeNodes.push({ id: f.code, name: f.name, parentId: m.id, isPermission: true });
                    });
                });
                this.treeModules = this.helper.generateTreeTable(treeNodes, "0", true);
            }
            if (roleId && results[1]) {
                if (results[1].status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(results[1].message, "error");
                }
                else {
                    if (results[1].data != null) {
                        this.role = results[1].data;
                        this.selectedModules = [];
                        this.role.modulePermissions.forEach(x => {
                            //this.checkNode(this.treeModules, x.permissionCodes);
                            x.permissionCodes.forEach(code => {
                                var node = null;
                                for (var i = 0; i < this.treeModules.length; i++) {
                                    node = this.helper.findNode(code, this.treeModules[i]);
                                    if (node)
                                        break;
                                }
                                if (node) {
                                    this.selectedModules.push(node);
                                }
                            });
                        });
                    }
                    else
                        this.helper.showAlertMessage(results[1].message, "error");
                }
            }
            else
                this.role = new _models_role__WEBPACK_IMPORTED_MODULE_8__["Role"]();
        });
    }
    //checkNode(nodes: any, str: string[]) {
    //    for (let i = 0; i < nodes.length; i++) {
    //        //if (!nodes[i].leaf && nodes[i].children[0].leaf) {
    //            for (let j = 0; j < nodes[i].children.length; j++) {
    //                if (str.includes(nodes[i].children[j].id)) {
    //                    if (!this.selectedModules.includes(nodes[i].children[j])) {
    //                        this.selectedModules.push(nodes[i].children[j]);
    //                    }
    //                }
    //            }
    //        //}
    //        //if (nodes[i].leaf) {
    //        //    return;
    //        //}
    //        this.checkNode(nodes[i].children, str);
    //        let count = nodes[i].children.length;
    //        let c = 0;
    //        for (let j = 0; j < nodes[i].children.length; j++) {
    //            if (this.selectedModules.includes(nodes[i].children[j])) {
    //                c++;
    //            }
    //            if (nodes[i].children[j].partialSelected) nodes[i].partialSelected = true;
    //        }
    //        if (c == 0) { }
    //        else if (c == count) {
    //            nodes[i].partialSelected = false;
    //            if (!this.selectedModules.includes(nodes[i])) {
    //                this.selectedModules.push(nodes[i]);
    //            }
    //        }
    //        else {
    //            nodes[i].partialSelected = true;
    //        }
    //    }
    //}
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let errorMessages = yield this.validateRole(this.role);
            this.role.modulePermissions = [];
            var features = this.selectedModules.filter(x => x.isPermission == true);
            features.forEach(f => {
                var index = this.role.modulePermissions.findIndex(x => x.moduleId == f.parentId);
                if (index < 0) {
                    this.role.modulePermissions.push({
                        moduleId: f.parentId,
                        permissionCodes: [f.id]
                    });
                }
                else {
                    this.role.modulePermissions[index].permissionCodes.push(f.id);
                }
            });
            if (errorMessages.length == 0) {
                this.roleService.saveRole(this.role).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Role information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save role information.", "error");
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Unable to save role information.", "error");
                });
            }
            else {
                let errorMessage = this.helper.getErrorMessagesText(errorMessages);
                this.helper.showAlertMessage(errorMessage, "error");
            }
        });
    }
    validateRole(role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let errorMessages = [];
            if (role.name == null || role.name.trim() == '')
                errorMessages.push("Role name cannot be empty");
            else {
                let resp = yield this.roleService.checkNameExists(role.name);
                if (resp.data != null && resp.data != role.id)
                    errorMessages.push("Name already exists.");
            }
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
RoleDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"] },
    { type: _modules_services_module_service__WEBPACK_IMPORTED_MODULE_6__["ModuleService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"] }
];
RoleDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/views/role-details.html")).default,
        providers: [_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _modules_services_module_service__WEBPACK_IMPORTED_MODULE_6__["ModuleService"]],
    })
], RoleDetails);



/***/ }),

/***/ "./src/app/roles/views/role-list.ts":
/*!******************************************!*\
  !*** ./src/app/roles/views/role-list.ts ***!
  \******************************************/
/*! exports provided: RoleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleList", function() { return RoleList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/role.service */ "./src/app/roles/services/role.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let RoleList = class RoleList {
    constructor(roleService, helper) {
        this.roleService = roleService;
        this.helper = helper;
        this.roles = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Roles...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        this.roleService.getRoles(paginationRequest).subscribe(resp => {
            this.roles = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.roles = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered roles.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.roles = null;
            let msg = `Unable to fetch roles : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching roles.";
        });
    }
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(role) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Role</b>",
            overlay: false,
            content: "Do you want to delete role - " + role.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.roleService.deleteRole(role.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Role deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting role", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting role", "error");
                });
            }
        }).open();
    }
};
RoleList.ctorParameters = () => [
    { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
RoleList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/roles/views/role-list.html")).default,
        providers: [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]]
    })
], RoleList);



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_data_table_dt_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/data-table/dt-pagination */ "./src/app/components/data-table/dt-pagination.ts");
/* harmony import */ var _components_data_table_dt_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/data-table/dt-search */ "./src/app/components/data-table/dt-search.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        declarations: [
            _components_data_table_dt_search__WEBPACK_IMPORTED_MODULE_6__["DTSearch"],
            _components_data_table_dt_pagination__WEBPACK_IMPORTED_MODULE_5__["DTPagination"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _components_data_table_dt_search__WEBPACK_IMPORTED_MODULE_6__["DTSearch"],
            _components_data_table_dt_pagination__WEBPACK_IMPORTED_MODULE_5__["DTPagination"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/users/models/user.ts":
/*!**************************************!*\
  !*** ./src/app/users/models/user.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");


class User extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
}


/***/ }),

/***/ "./src/app/users/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.getUsersApi = "Users/GetUsers/";
        this.getUserApi = 'Users/GetUser/';
        this.checkLoginIdExistsApi = 'Users/CheckLoginIdExists/';
        this.saveUserApi = 'Users/SaveUser/';
        this.deleteUserApi = 'Users/DeleteUser/';
    }
    authenticateUser(loginCredentials) {
        return this.http.post('/Users/Authenticate', loginCredentials);
    }
    getUserProfile() {
        return this.http.get('/Users/GetUserProfile');
    }
    getUser(userId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.get(this.getUserApi, { params });
    }
    getUsers(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending
                }
            };
        return this.http.post(this.getUsersApi, paginationRequest);
    }
    checkLoginIdExists(loginId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('loginId', loginId);
            return yield this.http.get(this.checkLoginIdExistsApi, { params }).toPromise();
        });
    }
    saveUser(user) {
        return this.http.post(this.saveUserApi, user);
    }
    deleteUser(userId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', userId);
        return this.http.delete(this.deleteUserApi, { params });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/users/user.module.ts":
/*!**************************************!*\
  !*** ./src/app/users/user.module.ts ***!
  \**************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routes */ "./src/app/users/user.routes.ts");
/* harmony import */ var _views_user_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user-list */ "./src/app/users/views/user-list.ts");
/* harmony import */ var _views_user_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user-details */ "./src/app/users/views/user-details.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");










let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _user_routes__WEBPACK_IMPORTED_MODULE_5__["UserRouting"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [
            _views_user_list__WEBPACK_IMPORTED_MODULE_6__["UserList"],
            _views_user_details__WEBPACK_IMPORTED_MODULE_7__["UserDetails"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/users/user.routes.ts":
/*!**************************************!*\
  !*** ./src/app/users/user.routes.ts ***!
  \**************************************/
/*! exports provided: userRoutes, UserRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouting", function() { return UserRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_user_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/user-list */ "./src/app/users/views/user-list.ts");
/* harmony import */ var _views_user_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user-details */ "./src/app/users/views/user-details.ts");




const userRoutes = [
    {
        path: 'users',
        children: [
            { path: '', component: _views_user_list__WEBPACK_IMPORTED_MODULE_2__["UserList"] },
            { path: 'details', component: _views_user_details__WEBPACK_IMPORTED_MODULE_3__["UserDetails"] },
            { path: 'details/:id', component: _views_user_details__WEBPACK_IMPORTED_MODULE_3__["UserDetails"] },
        ]
    },
];
const UserRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes);


/***/ }),

/***/ "./src/app/users/views/user-details.ts":
/*!*********************************************!*\
  !*** ./src/app/users/views/user-details.ts ***!
  \*********************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/users/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _roles_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../roles/services/role.service */ "./src/app/roles/services/role.service.ts");
/* harmony import */ var _groups_services_group_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../groups/services/group.service */ "./src/app/groups/services/group.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");










// declare var $: any;
// declare var jBox: any;
let UserDetails = class UserDetails {
    constructor(location, route, userService, roleService, groupService, helper) {
        this.location = location;
        this.route = route;
        this.userService = userService;
        this.roleService = roleService;
        this.groupService = groupService;
        this.helper = helper;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.roles = new Array();
        this.groups = new Array();
        this.changePassword = false;
        this.title = "New User";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            if (this.userId != null)
                this.title = "Edit User";
            else {
                this.title = "New User";
                this.changePassword = true;
            }
            this.getFormData(this.userId);
        });
    }
    getFormData(userId) {
        let usersSvc = this.userService.getUser(userId);
        let rolesSvc = this.roleService.getRoles(null);
        let groupsSvc = this.groupService.getGroups(null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([rolesSvc, groupsSvc, usersSvc]).subscribe(results => {
            if (results[0] && results[0].data) {
                this.roles = results[0].data;
            }
            if (results[1] && results[1].data) {
                this.groups = results[1].data;
            }
            if (userId && results[2]) {
                if (results[2].data && results[2].status.toLowerCase() == "ok") {
                    this.user = results[2].data;
                    this.currentUserPassword = this.user.password;
                }
                else
                    this.helper.showAlertMessage(results[2].message, "error");
            }
            else
                this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        });
    }
    setNewPassword(event) {
        this.changePassword = event.checked;
        if (event.checked)
            this.user.password = "";
        else
            this.user.password = this.currentUserPassword;
    }
    isAllSelected() {
        const numSelected = this.user.groups ? this.user.groups.length : 0;
        const numRows = this.groups.length;
        return numSelected === numRows;
    }
    toggleSelection(group) {
        var index = -1;
        if (this.user.groups)
            index = this.user.groups.findIndex(x => x == group.id);
        else
            this.user.groups = [];
        if (index == -1)
            this.user.groups.push(group.id);
        else
            this.user.groups.splice(index, 1);
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.user.groups = [];
        }
        else {
            this.user.groups = [];
            this.groups.forEach(x => this.user.groups.push(x.id));
        }
    }
    saveUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.changePassword)
                this.user.password = this.currentUserPassword;
            var errorMessages = yield this.validateUser(this.user);
            if (errorMessages.length == 0) {
                this.userService.saveUser(this.user).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("User information saved", "success");
                            this.goBack();
                        }
                        else
                            this.helper.showAlertMessage("Unable to save user information.", "error");
                    }
                }, (err) => {
                    //let msg = `Unable to save user information : ${err.message}`;
                    this.helper.showAlertMessage("Unable to save user information.", "error");
                });
            }
            else {
                this.helper.showAlertMessage(this.helper.getErrorMessagesText(errorMessages), "error");
            }
        });
    }
    validateUser(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var errorMessages = [];
            if (user.firstName == null)
                errorMessages.push("User name cannot be empty.");
            if (user.loginId == null || user.loginId.trim() == "")
                errorMessages.push("Login Id cannot be empty string");
            else {
                let resp = yield this.userService.checkLoginIdExists(user.loginId);
                if (resp.data != null && resp.data != user.id)
                    errorMessages.push("Login Id already exists.");
            }
            //if (user.password == null || user.password.trim() == "")
            //   errorMessages.push("Password cannot be empty string");
            return errorMessages;
        });
    }
    goBack() {
        this.location.back();
    }
};
UserDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _roles_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] },
    { type: _groups_services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_9__["Helper"] }
];
UserDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/views/user-details.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _groups_services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"]],
    })
], UserDetails);



/***/ }),

/***/ "./src/app/users/views/user-list.ts":
/*!******************************************!*\
  !*** ./src/app/users/views/user-list.ts ***!
  \******************************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _roles_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../roles/services/role.service */ "./src/app/roles/services/role.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");







let UserList = class UserList {
    constructor(userService, roleService, helper) {
        this.userService = userService;
        this.roleService = roleService;
        this.helper = helper;
        this.users = new Array();
        this.roles = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_6__["SortOrder"].descending;
        this.statusMessage = "Loading Users...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_6__["SortOrder"].noSort;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'LoginId', label: 'Login Id', dataType: "text", value: "" });
        this.searchFields.push({ field: 'FirstName', label: 'First Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'LastName', label: 'Last Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'EmailId', label: 'Email Id', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Status', label: 'Status', dataType: "text", value: "" });
    }
    ngOnInit() {
        this.getFormData();
    }
    getFormData() {
        $("#ajax-loading").show();
        this.totalPages = 1;
        let paginationRequest = {
            page: this.currentPage,
            pageSize: this.pageSize,
            filter: this.searchFilter,
            order: {
                orderByProperty: this.sortColumn,
                sortOrder: this.sortOrder
            }
        };
        let usersSvc = this.userService.getUsers(paginationRequest);
        let rolesSvc = this.roleService.getRoles(null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([rolesSvc, usersSvc]).subscribe(results => {
            this.users = null;
            if (results[0] && results[0].data) {
                this.roles = results[0].data;
            }
            if (results[1].status.toLowerCase() == "error") {
                this.statusMessage = results[1].message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (results[1].data != null && results[1].data.length > 0) {
                    this.users = results[1].data;
                    this.totalPages = Math.ceil(results[1].recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered users.";
                }
            }
            $("#ajax-loading").hide();
        }, error => {
            this.users = null;
            $("#ajax-loading").hide();
        });
    }
    getRoleDescription(roleId) {
        if (this.roles)
            var roleDesc = this.roles.find(item => item.id == roleId);
        if (roleDesc)
            return roleDesc.name;
        else
            return "";
    }
    search(searchFilter) {
        this.searchFilter = searchFilter;
        this.getFormData();
    }
    onPageSizeChange(pageSize) {
        this.pageSize = pageSize;
        this.getFormData();
    }
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.getFormData();
    }
    onColumnClick(e) {
        if (this.previousElement && e.getAttribute('data-column') != this.previousElement.getAttribute('data-column')) {
            this.previousElement.classList.remove('table-sorter-desc');
            this.previousElement.classList.remove('table-sorter-asc');
        }
        this.previousElement = e;
        this.sortColumn = e.getAttribute('data-column');
        if (e.classList.contains("table-sorter-asc")) {
            e.classList.remove('table-sorter-asc');
            e.classList.add('table-sorter-desc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_6__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_6__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_6__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(user) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete User</b>",
            overlay: false,
            content: "Do you want to delete user - " + user.firstName + " " + user.lastName,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.userService.deleteUser(user.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("User deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting user", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting user", "error");
                });
            }
        }).open();
    }
};
UserList.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _roles_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"] }
];
UserList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/views/user-list.html")).default,
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
    })
], UserList);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    Url: ""
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SK\NERP_RND\Solution2\NERP.Admin.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);