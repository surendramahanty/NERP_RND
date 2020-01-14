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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n   <header class=\"main-header\">\r\n      <a href=\"/\" class=\"logo\">\r\n         <img src=\"images/logo.svg\" style=\"height: 35px;\">\r\n      </a>\r\n      <nav class=\"navbar\" role=\"navigation\">\r\n         <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n            <i class=\"fas fa-bars\"></i>\r\n         </a>\r\n         <div class=\"navbar-custom-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n               <li>\r\n                  <a href=\"#\">\r\n                     <span class=\"hidden-xs\">{{loginUser.name}}</span>\r\n                  </a>\r\n               </li>\r\n               <li>\r\n                  <a [routerLink]=\"\" title=\"Logout\" class=\"nav-link\" (click)=\"onLogout()\"><i class=\"fas fa-sign-out-alt\"></i></a>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n      </nav>\r\n   </header>\r\n   <aside class=\"main-sidebar\">\r\n      <section class=\"sidebar\">\r\n         <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n            <li class=\"header\">MAIN NAVIGATION</li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/home']\"><span>Home</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/homepasses']\" *ngIf=\"getFeatureAccess('RND_HOMEPASSSES')\"><span>Homepasses</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/clusters']\" *ngIf=\"getFeatureAccess('RND_CLUSTERS')\"><span>Clusters</span></a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/designs']\" *ngIf=\"getFeatureAccess('RND_DESIGN')\"><span>Designs</span></a></li>\r\n         </ul>\r\n      </section>\r\n   </aside>\r\n   <div class=\"content-wrapper\">\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n   <footer class=\"main-footer\">\r\n      <span>&copy; Pitney Bowes 2019</span>\r\n      <!--<div class=\"pull-right hidden-xs\">\r\n         <span>Best view with IE 11, Mozilla 51, Chrome 55 and Safari 10 and above</span>\r\n      </div>-->\r\n   </footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clusters/views/cluster-details.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clusters/views/cluster-details.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage clusters <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/clusters']\"> clusters</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <ul class=\"nav nav-tabs form-menu\">\r\n                  <li [class]=\"isNew == true?'active': ''\" *ngIf=\"isNew == true\"><a href=\"#tab_import\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Import</span></a></li>\r\n                  <li [class]=\"isNew == false?'active': ''\"><a href=\"#tab_map\" data-toggle=\"tab\"><span style=\"font-size:1.2em\">{{tabTitle}}</span></a></li>\r\n               </ul>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" autocomplete=\"off\" novalidate>\r\n                  <div class=\"tab-content\">\r\n                     <div id=\"tab_import\" [class]=\"isNew == true?'tab-pane active': 'tab-pane'\">\r\n                        <div class=\"col-md-12\">\r\n                           <div class=\"form-group\">\r\n                              <label for=\"uploadFile\">Upload file</label>\r\n                              <div class=\"input-group\">\r\n                                 <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n                                 <span class=\"input-group-btn\">\r\n                                    <span class=\"btn btn-primary btn-file\">\r\n                                       Browse&hellip; <input type=\"file\" accept=\".csv, .kml, .zip\" (change)=\"fileChangeEvent($event)\">\r\n                                    </span>\r\n                                 </span>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label *ngIf=\"clusters && clusters.length > 0\">Total clusters: {{clusters.length}}</label>\r\n                              <table class=\"table table-bordered table-striped\">\r\n                                 <thead>\r\n                                    <tr>\r\n                                       <th style=\"width:150px\">Code</th>\r\n                                       <th>Name</th>\r\n                                       <th style=\"width:150px\">Type</th>\r\n                                       <th style=\"width:50px\" class='text-center'></th>\r\n                                    </tr>\r\n                                 </thead>\r\n                                 <tbody>\r\n                                    <ng-container *ngIf='clusters && clusters.length > 0'>\r\n                                       <tr *ngFor='let cstr of clusters;let rowIndex = index;'>\r\n                                          <td>{{cstr.code}}</td>\r\n                                          <td>{{cstr.name}}</td>\r\n                                          <td>{{cstr.type}}</td>\r\n                                          <td style=\"text-align:center\">\r\n                                             <a (click)=\"removeUploadedCluster(rowIndex)\" style=\"cursor:pointer\"><i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red;\" title=\"Delete\"></i></a>\r\n                                          </td>\r\n                                       </tr>\r\n                                    </ng-container>\r\n                                    <tr *ngIf='clusters == null || clusters.length == 0'>\r\n                                       <td colspan=\"4\" style=\"text-align: center;\">\r\n                                          Upload clusteres.\r\n                                       </td>\r\n                                    </tr>\r\n                                 </tbody>\r\n                              </table>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div id=\"tab_map\" [class]=\"isNew == false?'tab-pane active': 'tab-pane'\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"position: relative;\">\r\n                              <div id=\"clusterMap\" style=\"min-height: 481px;\"></div>\r\n                              <div class=\"box pull-right properties\" *ngIf=\"cluster != null\">\r\n                                 <div class=\"box-header with-border\">\r\n                                    <!--<div class=\"pull-right\">\r\n                                       <i class=\"pull-right fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"deleteCluster()\"></i>\r\n                                    </div>-->\r\n                                    <ul class=\"nav nav-tabs control-sidebar-tabs\">\r\n                                       <li class=\"active\"><a href=\"#tab_properties\" data-toggle=\"tab\" aria-expanded=\"true\">Properties</a></li>\r\n                                       <li style=\"border-right: 1px solid; border-left: 1px solid;\"><a href=\"#tab_homepasses\" data-toggle=\"tab\" aria-expanded=\"false\">Homepasses</a></li>\r\n                                       <li style=\"padding-top: 3px; padding-left: 30px;\"><i class=\"pull-right fas fa-trash-alt\" style=\"color: Red; cursor:pointer\" (click)=\"deleteCluster()\"></i></li>\r\n                                    </ul>\r\n                                 </div>\r\n                                 <div class=\"box-body tab-content\">\r\n                                    <div id=\"tab_properties\" class=\"tab-pane active\" style=\"height: 420px;\">\r\n                                       <div class=\"form-group\">\r\n                                          <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                                          <input type=\"text\" class=\"form-control input-sm\" name=\"name\" [(ngModel)]=\"cluster.name\">\r\n                                       </div>\r\n                                       <div class=\"form-group\">\r\n                                          <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                                          <input type=\"text\" class=\"form-control input-sm\" name=\"code\" [(ngModel)]=\"cluster.code\">\r\n                                       </div>\r\n                                       <div class=\"form-group\">\r\n                                          <label for=\"description\" class=\"control-label\">Description </label>\r\n                                          <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"cluster.description\">\r\n                                       </div>\r\n                                       <div class=\"form-group\">\r\n                                          <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                                          <textarea type=\"text\" rows=\"5\" class=\"form-control input-sm\" name=\"coordinates\" value=\"{{stringify(cluster.geometry.coordinates)}}\" readonly></textarea>\r\n                                       </div>\r\n                                    </div>\r\n                                    <div id=\"tab_homepasses\" class=\"tab-pane\" style=\"height: 419px;overflow-y: auto;\">\r\n                                       <table class=\"table table-bordered table-striped\">\r\n                                          <thead>\r\n                                             <tr>\r\n                                                <th style=\"width:40px;text-align: center;\">\r\n                                                   <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                                                 [checked]=\"cluster.homepasses?.length > 0 && isAllSelected()\"\r\n                                                                 [indeterminate]=\"cluster.homepasses?.length > 0 && !isAllSelected()\">\r\n                                                   </mat-checkbox>\r\n                                                </th>\r\n                                                <th>Code</th>\r\n                                                <th>Name</th>\r\n                                             </tr>\r\n                                          </thead>\r\n                                          <tbody>\r\n                                             <ng-container *ngIf='cluster.allHomepasses && cluster.allHomepasses.length > 0'>\r\n                                                <tr *ngFor='let homepass of cluster.allHomepasses'>\r\n                                                   <td style=\"text-align: center;\">\r\n                                                      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                                                                    (change)=\"$event ? toggleSelection(homepass) : null\"\r\n                                                                    [checked]=\"cluster.homepasses?.includes(homepass.id)\">\r\n                                                      </mat-checkbox>\r\n                                                   </td>\r\n                                                   <td>{{homepass.code}}</td>\r\n                                                   <td>{{homepass.name}}</td>\r\n                                                </tr>\r\n                                             </ng-container>\r\n                                             <tr *ngIf='cluster.allHomepasses == null || cluster.allHomepasses.length == 0'>\r\n                                                <td colspan=\"3\" style=\"text-align: center;\">\r\n                                                   No homepass available.\r\n                                                </td>\r\n                                             </tr>\r\n                                          </tbody>\r\n                                       </table>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n               <div class=\"pull-right\">\r\n                  <button type=\"submit\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                  <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clusters/views/cluster-list.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clusters/views/cluster-list.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Clusters</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Cluster List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Cluster</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Code\" class=\"table-sorter\" style=\"width: 200px;\">Code</th>\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"Description\" class=\"table-sorter\" style=\"max-width:300px\">Description</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:60px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='clusters && clusters.length > 0'>\r\n                        <tr *ngFor='let cluster of clusters'>\r\n                           <td>{{cluster.code}}</td>\r\n                           <td>{{cluster.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{cluster.description}}</td>\r\n                           <td>{{cluster.updatedBy}}</td>\r\n                           <td>{{cluster.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', cluster.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(cluster)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='clusters == null || clusters.length == 0'>\r\n                        <td colspan=\"6\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cf-group/cf-group.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cf-group/cf-group.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <ng-container *ngIf='customFields && customFields.length > 0'>\r\n      <ng-container *ngFor='let groups of customFieldGroups;let rowIndex = index;'>\r\n         <ng-container *ngFor='let item of groups'>\r\n            <div class=\"panel panel-borderless\">\r\n               <div class=\"panel-heading\">\r\n                  <h4 class=\"panel-title\">\r\n                     <a class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-parent]=\"'#'+accordionId\" [href]=\"'#cf_'+rowIndex\">{{item.category}}</a>\r\n                  </h4>\r\n               </div>\r\n               <div [id]=\"'cf_'+rowIndex\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                     <div class=\"form-group\">\r\n                        <label for=\"category\" class=\"control-label\">{{item.label}}</label>\r\n                        <input [type]=item.dataType class=\"form-control\" [name]=\"item.name\" [(ngModel)]=\"item.userValue\" autocomplete=\"off\">\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </ng-container>\r\n      </ng-container>\r\n   </ng-container>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-accessories.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-accessories.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group col-md-12\">\r\n   <div class=\"form-group\">\r\n      <label for=\"accessory\" class=\"control-label\">Select Accessory</label>\r\n      <div class=\"input-group input-group-sm\">\r\n         <mat-select name=\"accessory\" [(ngModel)]=\"selectedAccessory\">\r\n            <mat-option>Select Accessory</mat-option>\r\n            <ng-container *ngIf=\"accessoriesMaster && accessoriesMaster.length > 0\">\r\n               <mat-option *ngFor=\"let accessory of accessoriesMaster\" [value]=\"accessory\">\r\n                  {{accessory.name}}\r\n               </mat-option>\r\n            </ng-container>\r\n         </mat-select>\r\n         <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addAccessory()\"><i class=\"fas fa-plus\"></i></button></span>\r\n      </div>\r\n   </div>\r\n</div>\r\n<!--<div class=\"col-sm-6\">\r\n   <div class=\"form-group\">\r\n      <label for=\"equipment\" class=\"control-label\">Accessory Option</label>\r\n      <mat-select name=\"accessoryOption\" [(ngModel)]=\"accessorySettings.dataSource\">\r\n         <mat-option>Accessory Option</mat-option>\r\n         <mat-option value=\"import\">Import</mat-option>\r\n         <mat-option value=\"existing\">Use from existing design</mat-option>\r\n         <mat-option value=\"automatic\">Place Automatically</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</div>-->\r\n<!--<div class=\"form-group\" *ngIf=\"accessorySettings.dataSource == 'import'\">\r\n   <label for=\"equipment\" class=\"control-label\">Select Accessories File</label>\r\n   <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n      <span class=\"input-group-btn\">\r\n         <span class=\"btn btn-primary btn-file\">\r\n            Browse&hellip; <input type=\"file\" multiple #fileInput (click)=\"fileInput.value = null\" value=\"\" (change)=\"fileChangeEvent($event)\">\r\n         </span>\r\n      </span>\r\n   </div>\r\n</div>\r\n<div *ngIf=\"accessorySettings.dataSource == 'existing'\">\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"design\" class=\"control-label\">Select Design</label>\r\n         <mat-select name=\"design\" [(ngModel)]=\"accessorySettings.existingDesignId\" (ngModelChange)=\"onDesignChange($event)\">\r\n            <mat-option>Select Design</mat-option>\r\n            <mat-option *ngFor=\"let item of allDesigns\" [value]=\"item.id\">(ver {{item.version}}) {{item.name}}</mat-option>\r\n         </mat-select>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"accessoryType\" class=\"control-label\">Accessory Type</label>\r\n         <mat-select name=\"accessoryType\" (ngModelChange)=\"onAccessoryChange($event)\">\r\n            <mat-option>Select Accessory Type</mat-option>\r\n            <mat-option *ngFor=\"let item of designAccessories\" [value]=\"item\">{{item.name}}</mat-option>\r\n         </mat-select>\r\n      </div>\r\n   </div>\r\n</div>-->\r\n<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <table class=\"table table-bordered table-striped\">\r\n         <thead>\r\n            <tr>\r\n               <th>Name</th>\r\n               <th style=\"width:40px\"></th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <ng-container *ngIf='accessorySettings.accessories && accessorySettings.accessories.length > 0'>\r\n               <tr *ngFor='let accessory of accessorySettings.accessories;let rowIndex = index;'>\r\n                  <td>{{accessory.name}}</td>\r\n                  <td>\r\n                     <a>\r\n                        <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"removeAccessory(rowIndex)\" title=\"Remove\"></i>\r\n                     </a>\r\n                  </td>\r\n               </tr>\r\n            </ng-container>\r\n            <tr *ngIf='accessorySettings.accessories == null || accessorySettings.accessories.length == 0'>\r\n               <td colspan=\"2\" style=\"text-align: center;\">\r\n                  {{statusMessage}}\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </table>\r\n   </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-bom.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-bom.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-tabs\" id=\"myNavTabs1\">\r\n   <li class=\"active\"><a href=\"#divSummary\" data-toggle=\"tab\" aria-expanded=\"true\">Summary</a></li>\r\n   <li><a href=\"#divDetails\" data-toggle=\"tab\" aria-expanded=\"false\">Details</a></li>\r\n   <li class=\"btn-group pull-right open\" style=\"padding-left: 0px;\">\r\n      <button type=\"button\" (click)=\"ExportTOKml()\" class=\"btn btn-social-icon btn-md btn-default\">\r\n         <img src=\"images/file-ext/kml.svg\" style=\"width: 23px;margin-top: 5px;margin-left: 5px;\">\r\n      </button>\r\n   </li>\r\n   <li class=\"btn-group pull-right open\" style=\"padding-left: 10px;\">\r\n      <button type=\"button\" (click)=\"ExportTOExcel()\" class=\"btn btn-social-icon btn-md btn-default\">\r\n         <img src=\"images/file-ext/xlsx.svg\" style=\"width: 23px;margin-top: 5px;margin-left: 5px;\">\r\n      </button>\r\n   </li>\r\n</ul>\r\n<div class=\"panel-body\">\r\n   <div class=\"tab-content\">\r\n      <div id=\"divSummary\" class=\"tab-pane active\" #TABLE #table>\r\n         <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"2\" style=\"text-align:center;\"><b>Total Cost Summary</b></th>\r\n               </tr>\r\n            <tbody>\r\n               <tr>\r\n                  <td><b>Total Material Cost</b></td>\r\n                  <td style=\"text-align:right\">{{totalMaterialCost | number : '1.2-2'}}</td>\r\n               </tr>\r\n               <tr>\r\n                  <td><b>Total Service Cost</b></td>\r\n                  <td style=\"text-align:right\">{{totalServiceCost | number : '1.2-2'}}</td>\r\n               </tr>\r\n            </tbody>\r\n            <tfoot>\r\n               <tr>\r\n                  <td><b>Total Cost</b></td>\r\n                  <td style=\"text-align:right\">{{totalCost | number : '1.2-2'}}</td>\r\n               </tr>\r\n            </tfoot>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"7\" style=\"text-align:center;\"><b>Category Wise Cost Cummary</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr>\r\n                  <td style=\"text-align:center\">1</td>\r\n                  <td>Cables</td>\r\n                  <td style=\"text-align:center\">{{cableSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{cableSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{cableSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{cableSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(cableSummary.materialCost + cableSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">2</td>\r\n                  <td>Chambers</td>\r\n                  <td style=\"text-align:center\">{{chamberSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{chamberSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{chamberSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{chamberSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(chamberSummary.materialCost + chamberSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">3</td>\r\n                  <td>Ducts</td>\r\n                  <td style=\"text-align:center\">{{ductSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{ductSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{ductSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{ductSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(ductSummary.materialCost + ductSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">4</td>\r\n                  <td>ODFs</td>\r\n                  <td style=\"text-align:center\">{{odfSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{odfSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{odfSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{odfSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(odfSummary.materialCost + odfSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">5</td>\r\n                  <td>Poles</td>\r\n                  <td style=\"text-align:center\">{{poleSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{poleSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{poleSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{poleSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(poleSummary.materialCost + poleSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">6</td>\r\n                  <td>Splitters</td>\r\n                  <td style=\"text-align:center\">{{splitterSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{splitterSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{splitterSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{splitterSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(splitterSummary.materialCost + splitterSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">7</td>\r\n                  <td>Splice Closures</td>\r\n                  <td style=\"text-align:center\">{{spliceClosureSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{spliceClosureSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{spliceClosureSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{spliceClosureSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(spliceClosureSummary.materialCost + spliceClosureSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">8</td>\r\n                  <td>Accessories</td>\r\n                  <td style=\"text-align:center\">{{accessorySummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{accessorySummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{accessorySummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{accessorySummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(accessorySummary.materialCost + accessorySummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n               <tr>\r\n                  <td style=\"text-align:center\">9</td>\r\n                  <td>Civilworks</td>\r\n                  <td style=\"text-align:center\">{{civilworkSummary.units}}</td>\r\n                  <td style=\"text-align:right\">{{civilworkSummary.quantity | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{civilworkSummary.materialCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\">{{civilworkSummary.serviceCost | number : '1.2-2'}}</td>\r\n                  <td style=\"text-align:right\"><b>{{(civilworkSummary.materialCost + civilworkSummary.serviceCost) | number : '1.2-2'}}</b></td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n      </div>\r\n      <div id=\"divDetails\" class=\"tab-pane\" #TABLE1 #table>\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Cable</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='cableGroups && cableGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of cableGroups;'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='cableGroups == null || cableGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Chambers</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='chamberGroups && chamberGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of chamberGroups;'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='chamberGroups == null || chamberGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Ducts</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='ductGroups && ductGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of ductGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='ductGroups == null || ductGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>ODFs</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='odfGroups && odfGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of odfGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='odfGroups == null || odfGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Poles</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='poleGroups && poleGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of poleGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='poleGroups == null || poleGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Splitters</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='splitterGroups && splitterGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of splitterGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='splitterGroups == null || splitterGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Splice Closures</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='spliceClosureGroups && spliceClosureGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of spliceClosureGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='spliceClosureGroups == null || spliceClosureGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Accessories</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='accessoryGroups && accessoryGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of accessoryGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='accessoryGroups == null || accessoryGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n         <table class=\"table table-bordered table-striped\" style=\"font-size:smaller\">\r\n            <thead>\r\n               <tr>\r\n                  <th scope=\"col\" colspan=\"10\" style=\"text-align:center;\"><b>Civilworks</b></th>\r\n               </tr>\r\n               <tr>\r\n                  <th style=\"width: 60px;text-align: center;\">No.</th>\r\n                  <th>Description</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Quantity</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Currency</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Material <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Material Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Service <br />Cost/Unit</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Service Cost</th>\r\n                  <th style=\"width: 120px;text-align: center;\">Total <br />Cost</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='civilworkGroups && civilworkGroups.length > 0'>\r\n                  <ng-container *ngFor='let items of civilworkGroups; let rowIndex = index'>\r\n                     <tr>\r\n                        <td colspan=\"10\"><b>{{items[0].levelName}}</b></td>\r\n                     </tr>\r\n                     <tr *ngFor='let item of items; let rowIndex = index'>\r\n                        <td style=\"text-align:center\">{{rowIndex}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td style=\"text-align:center\">{{item.units}}</td>\r\n                        <td style=\"text-align:right\">{{item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:center; width:80px\">{{item.currency}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.materialCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost}}</td>\r\n                        <td style=\"text-align:right\">{{item.serviceCost * item.quantity | number : '1.2-2'}}</td>\r\n                        <td style=\"text-align:right\"><b>{{(item.materialCost * item.quantity) + (item.serviceCost * item.quantity) | number : '1.2-2'}}</b></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n               <tr *ngIf='civilworkGroups == null || civilworkGroups.length == 0'>\r\n                  <td colspan=\"10\" style=\"text-align: center;\">&nbsp;</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-bookingIds.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-bookingIds.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group col-md-12\">\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr>\r\n            <th style=\"width:125px\">Entity Type</th>\r\n            <th>Format</th>\r\n            <th style=\"width:150px\">Sequence Starting</th>\r\n            <th style=\"width:150px\">Sequence Ending</th>\r\n            <th style=\"width:50px\" class='text-center'></th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='design.bookingIds && design.bookingIds.length > 0'>\r\n            <ng-container *ngFor='let bookingId of design.bookingIds;let bookingIdIndex = index;'>\r\n               <tr>\r\n                  <td>{{bookingId.entityType}}</td>\r\n                  <td><input type=\"text\" class=\"form-control input-sm\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"bookingId.format\"></td>\r\n                  <td><input type=\"number\" style=\"width: 125px;\" class=\"form-control input-sm\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"bookingId.sequenceStart\"></td>\r\n                  <td><input type=\"number\" style=\"width: 125px;\" class=\"form-control input-sm\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"bookingId.sequenceEnd\"></td>\r\n                  <td style=\"vertical-align: middle;\" class=\"text-center\">\r\n                     <a (click)=\"clearBookingId(bookingIdIndex)\" style=\"cursor:pointer\"><i class=\"fas fa-eraser\" style=\"font-size: 15px; color: Red;\" title=\"Clear\"></i></a>\r\n                  </td>\r\n               </tr>\r\n            </ng-container>\r\n         </ng-container>\r\n         <tr *ngIf='design.bookingIds == null || design.bookingIds.length == 0'>\r\n            <td colspan=\"5\" style=\"text-align: center;\">\r\n               There are no phases defined.\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-cable.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-cable.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-6\">\r\n   <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"cableType\">Cable Type<span style=\"color:red;\">*</span></label>\r\n      <mat-select name=\"cableType\" [(ngModel)]=\"cableSettings.cableType\" (ngModelChange)=\"onCableTypeChange($event)\">\r\n         <mat-option>Select Type</mat-option>\r\n         <mat-option value=\"overhead\">Overhead</mat-option>\r\n         <mat-option value=\"underground\">Underground</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"form-group col-sm-6\">\r\n   <label for=\"cable\" class=\"control-label\">Core Configuration</label>\r\n   <div class=\"input-group input-group-sm\">\r\n      <mat-select name=\"cable\" [(ngModel)]=\"selectedCable\">\r\n         <mat-option>Select Cable</mat-option>\r\n         <mat-option *ngFor=\"let cable of cablesMaster\" [value]=\"cable\">\r\n            {{cable.name}}\r\n         </mat-option>\r\n      </mat-select>\r\n      <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addCable()\"><i class=\"fas fa-plus\"></i></button></span>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"form-group col-sm-12\">\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr>\r\n            <th>Name</th>\r\n            <th style=\"width:40px\"></th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='cableSettings.cables && cableSettings.cables.length > 0'>\r\n            <tr *ngFor='let cable of cableSettings.cables;let rowIndex = index;'>\r\n               <td>{{cable.name}}</td>\r\n               <td>\r\n                  <a>\r\n                     <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"removeCable(rowIndex)\" title=\"Remove\"></i>\r\n                  </a>\r\n               </td>\r\n            </tr>\r\n         </ng-container>\r\n         <tr *ngIf='cableSettings.cables == null || cableSettings.cables.length == 0'>\r\n            <td colspan=\"2\" style=\"text-align: center;\">\r\n               {{statusMessage}}\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n\r\n<div class=\"form-group col-sm-6\" *ngIf=\"cableSettings.cableType == 'overhead'\">\r\n   <label for=\"pole\" class=\"control-label\">Pole Type</label>\r\n   <mat-select name=\"pole\" [(ngModel)]=\"cableSettings.pole.id\" (ngModelChange)=\"onPoleChange($event)\">\r\n      <mat-option>Select Pole</mat-option>\r\n      <mat-option *ngFor=\"let pole of polesMaster\" [value]=\"pole.id\">\r\n         {{pole.name}}\r\n      </mat-option>\r\n   </mat-select>\r\n</div>\r\n\r\n<div class=\"form-group col-sm-6\" *ngIf=\"cableSettings.cableType == 'underground'\">\r\n   <label for=\"chamber\" class=\"control-label\">Chamber Type</label>\r\n   <mat-select name=\"chamber\" [(ngModel)]=\"cableSettings.chamber.id\"  (ngModelChange)=\"onChamberChange($event)\">\r\n      <mat-option>Select Chamber</mat-option>\r\n      <mat-option *ngFor=\"let chamber of chambersMaster\" [value]=\"chamber.id\">\r\n         {{chamber.name}}\r\n      </mat-option>\r\n   </mat-select>\r\n</div>\r\n\r\n<div class=\"col-sm-6\">\r\n   <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"interval\" *ngIf=\"cableSettings.cableType == 'underground'\">Chamber Interval</label>\r\n      <label class=\"control-label\" for=\"interval\" *ngIf=\"cableSettings.cableType != 'underground'\">Pole Interval</label>\r\n      <input class=\"form-control input-sm\" name=\"interval\" type=\"number\" [(ngModel)]=\"cableSettings.chamberInterval\">\r\n   </div>\r\n</div>\r\n<!--<div class=\"col-sm-6\">\r\n   <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"\"></label>\r\n   </div>\r\n</div>-->\r\n\r\n<!--<div>\r\n   <div class=\"row\" style=\"padding: 5px;font-size: smaller;\">\r\n      <span style=\"font-size: 12px;color: #3c8dbc;font-weight: 700;\">Loop Management</span>\r\n      <hr style=\"margin-top: 2px;\">\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"cableLoop\" class=\"control-label\">Cable loop (Meters)</label>\r\n         <input class=\"form-control\" name=\"cableLoop\" [(ngModel)]=\"cableSettings.cableLoop\" type=\"number\">\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"forEvery\" class=\"control-label\">For Every (Meters)</label>\r\n         <input class=\"form-control\" name=\"forEvery\" [(ngModel)]=\"cableSettings.loopInterval\" type=\"number\">\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"loopAtClosure\" class=\"control-label\">Loop at Closure (Meters)</label>\r\n         <input class=\"form-control\" name=\"loopAtClosure\" [(ngModel)]=\"cableSettings.loopAtClosure\" type=\"number\">\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"loopAtClosure\" class=\"control-label\">Connect %</label>\r\n         <input class=\"form-control\" name=\"loopAtClosure\" [(ngModel)]=\"cableSettings.connectionPercent\" type=\"number\">\r\n      </div>\r\n   </div>\r\n</div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-civilworks.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-civilworks.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group col-md-12\">\r\n   <label for=\"equipment\" class=\"control-label\">Select Civilwork</label>\r\n   <div class=\"input-group input-group-sm\">\r\n      <mat-select name=\"civilwork\" [(ngModel)]=\"selectedCivilwork\">\r\n         <mat-option>Select Civilwork</mat-option>\r\n         <ng-container *ngIf=\"civilworksMaster && civilworksMaster.length > 0\">\r\n            <mat-option *ngFor=\"let civilwork of civilworksMaster\" [value]=\"civilwork\">\r\n               {{civilwork.name}}\r\n            </mat-option>\r\n         </ng-container>\r\n      </mat-select>\r\n      <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addCivilwork()\"><i class=\"fas fa-plus\"></i></button></span>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"form-group col-md-12\">\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr>\r\n            <th>Name</th>\r\n            <th style=\"width:40px\"></th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='civilworkSettings.civilworks && civilworkSettings.civilworks.length > 0'>\r\n            <tr *ngFor='let civilwork of civilworkSettings.civilworks;let rowIndex = index;'>\r\n               <td>{{civilwork.name}}</td>\r\n               <td>\r\n                  <a>\r\n                     <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"removeCivilwork(rowIndex)\" title=\"Remove\"></i>\r\n                  </a>\r\n               </td>\r\n            </tr>\r\n         </ng-container>\r\n         <tr *ngIf='civilworkSettings.civilworks == null || civilworkSettings.civilworks.length == 0'>\r\n            <td colspan=\"2\" style=\"text-align: center;\">\r\n               {{statusMessage}}\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-clusters.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-clusters.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n   <div class=\"input-group input-group-sm\" style=\"padding-bottom:20px\">\r\n      <div class=\"input-group-btn\">\r\n         <button type=\"button\" class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width:100px\">\r\n            {{selectedField.label}}\r\n            <span class=\"fa fa-caret-down\"></span>\r\n         </button>\r\n         <ul class=\"dropdown-menu\">\r\n            <ng-container *ngIf='searchFields && searchFields.length > 0'>\r\n               <li *ngFor='let searchField of searchFields'>\r\n                  <a [routerLink]=\"\" (click)=setSearchField(searchField)>{{searchField.label}}</a>\r\n               </li>\r\n            </ng-container>\r\n         </ul>\r\n      </div>\r\n      <input [type]=selectedField.dataType class=\"form-control\" name=\"dateSearch\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n      <span class=\"input-group-btn\">\r\n         <button type=\"button\" class=\"btn btn-info btn-flat\" (click)=\"currentPage = 1; search()\"><i class=\"fas fa-search\"></i></button>\r\n      </span>\r\n   </div>\r\n   <div>\r\n      <div class=\"pull-left\">\r\n         <span style=\"padding-right: 10px;font-size: small;\">Pages</span>\r\n         <div class=\"btn-group\" style=\"padding-right: 10px;\">\r\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle btn-sm\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n               <span style=\"padding-right: 5px;\"> {{pageSize}} </span>\r\n               <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n               <li><a [routerLink]=\"\" (click)=\"pageSize = 10; getFormData()\">10</a></li>\r\n               <li><a [routerLink]=\"\" (click)=\"pageSize = 20; getFormData()\">20</a></li>\r\n               <li><a [routerLink]=\"\" (click)=\"pageSize = 50; getFormData()\">50</a></li>\r\n               <li><a [routerLink]=\"\" (click)=\"pageSize = 100; getFormData()\">100</a></li>\r\n            </ul>\r\n         </div>\r\n      </div>\r\n      <div class=\"pull-right\">\r\n         <span style=\"padding-right: 10px;font-size: small;\">Showing page {{currentPage}} of {{totalPages}}</span>\r\n         <div class=\"btn-group\" style=\"padding-bottom:5px\">\r\n            <button class=\"btn btn-default btn-sm\" type=\"button\" (click)=\"setPage(currentPage - 1)\" [ngClass]=\"{disabled:currentPage === 1}\"><i class=\"fa fa-chevron-left fa-fw\"></i></button>\r\n            <button class=\"btn btn-default btn-sm\" type=\"button\" (click)=\"setPage(currentPage + 1)\" [ngClass]=\"{disabled:currentPage === totalPages}\"><i class=\"fa fa-chevron-right fa-fw\"></i></button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr (click)=\"onColumnClick($event.target)\">\r\n            <th style=\"width: 45px;\"></th>\r\n            <th data-column=\"Name\" class=\"table-sorter\">Name</th>\r\n            <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n            <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='clusters && clusters.length > 0'>\r\n            <ng-container *ngFor='let cluster of clusters; let clusterIndex = index;'>\r\n               <tr>\r\n                  <td style=\"vertical-align: middle;\">\r\n                     <mat-radio-group [(ngModel)]=\"design.clusterId\">\r\n                        <mat-radio-button [value]=\"cluster.id\"></mat-radio-button>\r\n                     </mat-radio-group>\r\n                  </td>\r\n                  <td>{{cluster.name}}</td>\r\n                  <td>{{cluster.updatedBy}}</td>\r\n                  <td>{{cluster.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n               </tr>\r\n            </ng-container>\r\n         </ng-container>\r\n         <tr *ngIf='clusters == null || clusters.length == 0'>\r\n            <td colspan=\"4\" style=\"text-align: center;\">\r\n               {{statusMessage}}\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-costing.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-costing.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n   <div class=\"form-group\">\r\n      <label for=\"category\" class=\"control-label\">Entity </label>\r\n      <mat-select name=\"entityType\" [(ngModel)]=\"entityType\">\r\n         <mat-option>Select Entity Type</mat-option>\r\n         <mat-option value=\"All\">All Entities</mat-option>\r\n         <mat-option value=\"Cable\">Cables</mat-option>\r\n         <mat-option value=\"Chamber\">Chambers</mat-option>\r\n         <mat-option value=\"Duct\">Ducts</mat-option>\r\n         <mat-option value=\"ODF\">ODFs</mat-option>\r\n         <mat-option value=\"Pole\">Poles</mat-option>\r\n         <mat-option value=\"SpliceClosure\">Splice Closures</mat-option>\r\n         <mat-option value=\"Splitter\">Splitters</mat-option>\r\n         <mat-option value=\"Accessory\">Accessories</mat-option>\r\n         <mat-option value=\"Civilwork\">Civilworks</mat-option>\r\n      </mat-select>\r\n   </div>\r\n   <div class=\"form-group\">\r\n      <table class=\"table table-bordered table-striped\">\r\n         <thead>\r\n            <tr>\r\n               <th style=\"width: 30px;\"></th>\r\n               <th>Supplier</th>\r\n               <th style=\"width:150px;\">Material Cost</th>\r\n               <th style=\"width:150px\">Service Cost</th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Cable') && cables && cables.length > 0\">\r\n               <ng-container *ngFor='let cable of cables; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{cable.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of cable.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"cable.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Chamber') && chambers && chambers.length > 0\">\r\n               <ng-container *ngFor='let chamber of chambers; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{chamber.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of chamber.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"chamber.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Duct') && ducts && ducts.length > 0\">\r\n               <ng-container *ngFor='let duct of ducts; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{duct.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of duct.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"duct.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'ODF') && odfs && odfs.length > 0\">\r\n               <ng-container *ngFor='let odf of odfs; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{odf.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of odf.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"odf.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Pole') && poles && poles.length > 0\">\r\n               <ng-container *ngFor='let pole of poles; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{pole.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of pole.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"pole.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Splitter') && splitters && splitters.length > 0\">\r\n               <ng-container *ngFor='let splitter of splitters; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{splitter.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of splitter.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"splitter.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'SpliceClosure') && spliceClosures && spliceClosures.length > 0\">\r\n               <ng-container *ngFor='let spliceClosure of spliceClosures; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{spliceClosure.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of spliceClosure.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"spliceClosure.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Accessory') && accessories && accessories.length > 0\">\r\n               <ng-container *ngFor='let accessory of accessories; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{accessory.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of accessory.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"accessory.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"(entityType == 'All' || entityType == 'Civilwork') && civilworks && civilworks.length > 0\">\r\n               <ng-container *ngFor='let civilwork of civilworks; let rowIndex = index;'>\r\n                  <tr>\r\n                     <td colspan=\"4\" style=\"background-color: #f4f4f4\">{{civilwork.name}}</td>\r\n                  </tr>\r\n                  <ng-container *ngFor='let supplier of civilwork.suppliers; let sIndex = index;'>\r\n                     <tr *ngIf=\"checkPriceValidity(supplier.validFrom, supplier.validTo)\">\r\n                        <td style=\"text-align: center; vertical-align: middle;\">\r\n                           <mat-radio-group [name]=\"civilwork.name\" [(ngModel)]=\"supplier.isPrefered\">\r\n                              <mat-radio-button [value]=true></mat-radio-button>\r\n                           </mat-radio-group>\r\n                        </td>\r\n                        <td style=\"vertical-align: middle;\">{{supplier.name}}</td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.price\"></td>\r\n                        <td><input type=\"number\" class=\"form-control input-sm\" autocomplete=\"off\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"supplier.serviceCost\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n               </ng-container>\r\n            </ng-container>\r\n         </tbody>\r\n      </table>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-documents.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-documents.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n   <div class=\"form-group\">\r\n      <label for=\"category\" class=\"control-label\">Category </label>\r\n      <input type=\"text\" class=\"form-control\" name=\"category\" [(ngModel)]=\"documentCategory\">\r\n   </div>\r\n   <div class=\"form-group\">\r\n      <label for=\"uploadFile\">Upload file</label>\r\n      <div class=\"input-group\">\r\n         <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n         <span class=\"input-group-btn\">\r\n            <span class=\"btn btn-primary btn-file\">\r\n               Browse&hellip; <input type=\"file\" multiple #fileInput (click)=\"fileInput.value = null\" value=\"\" (change)=\"fileChangeEvent($event)\">\r\n            </span>\r\n         </span>\r\n      </div>\r\n   </div>\r\n   <div class=\"form-group\">\r\n      <table class=\"table table-bordered table-striped\">\r\n         <thead>\r\n            <tr>\r\n               <th>Category</th>\r\n               <th>File Name</th>\r\n               <th style=\"width:120px\">File Size</th>\r\n               <th style=\"width:70px\" class='text-center'></th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <ng-container *ngIf='design.documents && design.documents.length > 0'>\r\n               <tr *ngFor='let document of design.documents;let rowIndex = index;'>\r\n                  <td>{{document.category}}</td>\r\n                  <td>{{document.fileName}}</td>\r\n                  <td style=\"text-align: right;\">{{helper.formatBytes(document.fileSize, 2)}}</td>\r\n                  <td>\r\n                     <a href=\"Designs/GetDocument?designId={{design.id}}&documentId={{document.id}}\" download *ngIf=\"document.id != null\">\r\n                        <i class='fa fa-download' style='font-size: 15px; cursor:pointer' title='Download File'></i>\r\n                     </a>&nbsp;\r\n                     <a (click)=\"removeDocument(rowIndex, document)\" style=\"cursor:pointer\">\r\n                        <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red;\" title=\"Delete\"></i>\r\n                     </a>\r\n                  </td>\r\n               </tr>\r\n            </ng-container>\r\n            <tr *ngIf='design.documents == null || design.documents.length == 0'>\r\n               <td colspan=\"4\" style=\"text-align: center;\">\r\n                  There are no documents attached to design.\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </table>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-duct.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-duct.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group col-md-12\">\r\n   <div class=\"form-group\">\r\n      <label for=\"equipment\" class=\"control-label\">Select Duct</label>\r\n      <div class=\"input-group input-group-sm\">\r\n         <mat-select name=\"duct\" [(ngModel)]=\"selectedDuct\">\r\n            <mat-option>Select Duct</mat-option>\r\n            <ng-container *ngIf=\"ductsMaster && ductsMaster.length > 0\">\r\n               <mat-option *ngFor=\"let duct of ductsMaster\" [value]=\"duct\">\r\n                  {{duct.name}}\r\n               </mat-option>\r\n            </ng-container>\r\n         </mat-select>\r\n         <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addDuct()\"><i class=\"fas fa-plus\"></i></button></span>\r\n      </div>\r\n   </div>\r\n</div>\r\n<div class=\"form-group col-md-12\">\r\n   <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n         <tr>\r\n            <th>Name</th>\r\n            <th style=\"width:40px\"></th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <ng-container *ngIf='ductSettings.ducts && ductSettings.ducts.length > 0'>\r\n            <tr *ngFor='let duct of ductSettings.ducts;let rowIndex = index;'>\r\n               <td>{{duct.name}}</td>\r\n               <td>\r\n                  <a>\r\n                     <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"removeDuct(rowIndex)\" title=\"Remove\"></i>\r\n                  </a>\r\n               </td>\r\n            </tr>\r\n         </ng-container>\r\n         <tr *ngIf='ductSettings.ducts == null || ductSettings.ducts.length == 0'>\r\n            <td colspan=\"2\" style=\"text-align: center;\">\r\n               {{statusMessage}}\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-entities.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-entities.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-6\">\r\n   <div class=\"form-group\">\r\n      <label for=\"entityName\" class=\"control-label\">Entity Name</label>\r\n      <mat-select name=\"entityType\" [(ngModel)]=\"entitySettings.entityName\" (ngModelChange)=\"onEntityTypeChange($event)\">\r\n         <mat-option>Select Entity Type</mat-option>\r\n         <mat-option value=\"Chamber\">Chamber</mat-option>\r\n         <mat-option value=\"ODF\">ODF</mat-option>\r\n         <mat-option value=\"Pole\">Pole</mat-option>\r\n         <mat-option value=\"SpliceClosure\">Splice Closure</mat-option>\r\n         <mat-option value=\"Splitter\">Splitter</mat-option>\r\n         <mat-option value=\"Homepass\">Homepass</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</div>\r\n<div class=\"col-sm-6\">\r\n   <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"nodeOptions\">Node Options <span style=\"color:red;\">*</span></label>\r\n      <mat-select name=\"nodeOptions\" [(ngModel)]=\"entitySettings.dataSource\" [disabled]=\"entitySettings.entityName=='Homepass'?'disabled': null\">\r\n         <mat-option>Select Option</mat-option>\r\n         <mat-option value=\"import\">Import</mat-option>\r\n         <mat-option value=\"existing\">Use from existing design</mat-option>\r\n         <mat-option value=\"automatic\">Place Automatically</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"form-group col-sm-12\" *ngIf=\"entitySettings.dataSource == 'import'\">\r\n   <label for=\"equipment\" class=\"control-label\">Select Entities File</label>\r\n   <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n      <span class=\"input-group-btn\">\r\n         <span class=\"btn btn-primary btn-file\">\r\n            Browse&hellip; <input type=\"file\" #fileInput (click)=\"fileInput.value = null\" value=\"\" (change)=\"fileChangeEvent($event)\">\r\n         </span>\r\n      </span>\r\n   </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"entitySettings.dataSource == 'existing'\">\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"design\" class=\"control-label\">Select Design</label>\r\n         <mat-select name=\"design\" [(ngModel)]=\"entitySettings.existingDesignId\" (ngModelChange)=\"onDesignChange($event)\">\r\n            <mat-option>Select Design</mat-option>\r\n            <mat-option *ngFor=\"let item of allDesigns\" [value]=\"item.id\">(ver {{item.version}}) {{item.name}}</mat-option>\r\n         </mat-select>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"designEntities\" class=\"control-label\">Select {{entitySettings.entityName}}</label>\r\n         <mat-select name=\"designEntities\" (ngModelChange)=\"onDesignEntityChange($event)\">\r\n            <mat-option>Select {{entitySettings.entityName}}</mat-option>\r\n            <ng-container *ngIf=\"designEntities && designEntities.length > 0\">\r\n               <mat-option *ngFor=\"let designEntity of designEntities\" [value]=\"designEntity\">\r\n                  {{designEntity.name}}\r\n               </mat-option>\r\n            </ng-container>\r\n         </mat-select>\r\n      </div>\r\n   </div>\r\n</ng-container>\r\n\r\n<div class=\"form-group col-md-12\" *ngIf=\"entitySettings.dataSource == 'automatic' && entitySettings.entityName != 'Homepass'\">\r\n   <label for=\"masterEntities\" class=\"control-label\">Select {{entitySettings.entityName}}</label>\r\n   <div class=\"input-group input-group-sm\">\r\n      <mat-select name=\"masterEntities\" [(ngModel)]=\"selectedEntity\">\r\n         <mat-option>Select {{entitySettings.entityName}}</mat-option>\r\n         <ng-container *ngIf=\"masterEntities && masterEntities.length > 0\">\r\n            <mat-option *ngFor=\"let selectedEntity of masterEntities\" [value]=\"selectedEntity\">\r\n               {{selectedEntity.name}}\r\n            </mat-option>\r\n         </ng-container>\r\n      </mat-select>\r\n      <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addEntity()\"><i class=\"fas fa-plus\"></i></button></span>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"col-sm-12\" *ngIf=\"entitySettings.entityName != 'Homepass'\">\r\n   <div class=\"form-group\">\r\n      <div style=\"overflow-y:auto; max-height:250px\">\r\n         <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n               <tr>\r\n                  <th>Name</th>\r\n                  <th style=\"width:40px\"></th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='entities && entities.length > 0'>\r\n                  <tr *ngFor='let entity of entities;let rowIndex = index;'>\r\n                     <td>{{entity.name}}</td>\r\n                     <td>\r\n                        <a>\r\n                           <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"removeEntity(rowIndex)\" title=\"Remove\"></i>\r\n                        </a>\r\n                     </td>\r\n                  </tr>\r\n               </ng-container>\r\n               <tr *ngIf='entities == null || entities.length == 0'>\r\n                  <td colspan=\"2\" style=\"text-align: center;\">\r\n                     Entities not added.\r\n                  </td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-fdp.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-fdp.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"nodeOptions\">Node Options <span style=\"color:red;\">*</span></label>\r\n      <mat-select name=\"nodeOptions\" [(ngModel)]=\"fdpSettings.dataSource\">\r\n         <mat-option>Select Option</mat-option>\r\n         <mat-option value=\"import\">Import</mat-option>\r\n         <mat-option value=\"existing\">Use from existing design</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"form-group col-sm-12\" *ngIf=\"fdpSettings.dataSource == 'import'\">\r\n   <label for=\"equipment\" class=\"control-label\">Select FDP File</label>\r\n   <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n      <span class=\"input-group-btn\">\r\n         <span class=\"btn btn-primary btn-file\">\r\n            Browse&hellip; <input type=\"file\" #fileInput (click)=\"fileInput.value = null\" value=\"\" (change)=\"fileChangeEvent($event)\">\r\n         </span>\r\n      </span>\r\n   </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"fdpSettings.dataSource == 'existing'\">\r\n   <div class=\"form-group col-md-12\">\r\n      <label for=\"design\" class=\"control-label\">Select Design</label>\r\n      <mat-select name=\"design\" [(ngModel)]=\"fdpSettings.existingDesignId\" (ngModelChange)=\"onDesignChange($event)\">\r\n         <mat-option>Select Design</mat-option>\r\n         <mat-option *ngFor=\"let item of allDesigns\" [value]=\"item.id\">(ver {{item.version}}) {{item.name}}</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</ng-container>\r\n\r\n<div class=\"form-group col-md-12\">\r\n   <label for=\"designFDPs\" class=\"control-label\">Select FDPs</label>\r\n   <div class=\"input-group input-group-sm\">\r\n      <mat-select name=\"designFDPs\" [(ngModel)]=\"selectedFDP\">\r\n         <mat-option>Select FDP</mat-option>\r\n         <ng-container *ngIf=\"fdpSettings.fdps && fdpSettings.fdps.length > 0\">\r\n            <mat-option *ngFor=\"let selectedFDP of fdpSettings.fdps\" [value]=\"selectedFDP\">\r\n               {{selectedFDP.name}}\r\n            </mat-option>\r\n         </ng-container>\r\n      </mat-select>\r\n      <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"add()\"><i class=\"fas fa-plus\"></i></button></span>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <label class=\"control-label\">Pre Aggregates</label>\r\n      <div style=\"overflow:auto; max-height:250px;\">\r\n         <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n               <tr>\r\n                  <th>Name</th>\r\n                  <th style=\"width:40px\"></th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <ng-container *ngIf='fdpSettings.fdps && fdpSettings.fdps.length > 0'>\r\n                  <tr *ngFor='let fdp of fdpSettings.fdps;let rowIndex = index;'>\r\n                     <td>{{fdp.name}}</td>\r\n                     <td>\r\n                        <a>\r\n                           <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"remove(rowIndex)\" title=\"Remove\"></i>\r\n                        </a>\r\n                     </td>\r\n                  </tr>\r\n               </ng-container>\r\n               <tr *ngIf='fdpSettings.fdps == null || fdpSettings.fdps.length == 0'>\r\n                  <td colspan=\"2\" style=\"text-align: center;\">\r\n                     FDPs not added.\r\n                  </td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-info.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-info.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n   <div class=\"col-sm-12\">\r\n      <div class=\"pull-right\">\r\n         <div class=\"form-group\">\r\n            <label for=\"version\" class=\"control-label\" style=\"float:left; padding: 5px 5px;\">Ver.</label>\r\n            <mat-select name=\"version\" [(ngModel)]=\"selectedVersion\" (ngModelChange)=\"versionChange($event)\" style=\"width:75px\">\r\n               <mat-option>Version</mat-option>\r\n               <mat-option *ngFor=\"let design of designs\" [value]=\"design.version\">\r\n                  {{design.version}}\r\n               </mat-option>\r\n            </mat-select>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n         <input type=\"text\" class=\"form-control\" name=\"name\" required [(ngModel)]=\"design.name\">\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"code\" class=\"control-label\">Code </label>\r\n         <input type=\"text\" class=\"form-control\" name=\"code\" [(ngModel)]=\"design.code\">\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"designType\" class=\"control-label\">Design Type</label>\r\n         <mat-select name=\"designType\" [(ngModel)]=\"design.designType\" (ngModelChange)=\"clearNetworkSettings()\">\r\n            <mat-option>Select Design Type</mat-option>\r\n            <mat-option value='FTTx'>FTTx</mat-option>\r\n           <!-- <mat-option value='Backbone'>Backbone</mat-option>-->\r\n         </mat-select>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"form-group\">\r\n         <label for=\"assignedTo\" class=\"control-label\">Assigned To</label>\r\n         <mat-select name=\"assignedTo\" [(ngModel)]=\"design.assignedTo\">\r\n            <mat-option>Select user</mat-option>\r\n            <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\r\n               {{user.firstName}} {{user.lastName}}\r\n            </mat-option>\r\n         </mat-select>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-12\">\r\n      <div class=\"form-group\">\r\n         <label for=\"description\" class=\"control-label\">Description </label>\r\n         <textarea class=\"form-control\" rows=\"2\" name=\"description\" [(ngModel)]=\"design.description\"></textarea>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-map.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-map.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-tools\" style=\"background-color: #ddd;padding: 5px;\">\r\n   <button data-toggle=\"collapse\" data-target=\"#layers\" class=\"btn btn-social-icon btn-xs\" style=\"color:#605ca8\" type=\"submit\">\r\n      <i class=\"fas fa-layer-group\"></i>\r\n   </button>\r\n   <span *ngIf=\"selectedLayers.length >0\" style=\"color: #605ca8;padding-top: 3px;\"><b>+</b></span>\r\n   <div class=\"pull-right\">\r\n      <i class=\"fas fa-sync-alt\" style=\"font-size: 15px; color: #605ca8; cursor: pointer; padding: 5px;\" (click)=\"refreshBlueprint()\"></i>\r\n   </div>\r\n   <ul class=\"nav navbar-nav toolbar-Controls pull-right\">\r\n      <li>\r\n         <a href=\"#\" class=\"dropdown-toggle btn btn-social-icon btn-xs pull-right\" data-toggle=\"dropdown\" title=\"Network Element Library\">\r\n            <span style=\"color: #605ca8;padding-top: 3px;\"><b>+</b></span>\r\n         </a>\r\n\r\n         <div id=\"newNetwork\" class=\"dropdown-menu\" style=\"\">\r\n            <ul class=\"nav navbar-nav toolbar-Controls pull-right entityMenu\" style=\"padding: 5px;width: 333px;\">\r\n               <li>\r\n                  <a title=\"Chamber\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\chamber.png\" name=\"Chamber\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"Pole\" style=\"padding-top: 8px;border: 1px solid #ddd; padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\pole.png\" name=\"Pole\" class=\"iconImageStyle\" style=\"cursor: move; height: 20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"Pop\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\pop.png\" name=\"Pop\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"Underground cable\" style=\"padding-top: 8px;border: 1px solid #ddd; padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\Cable.png\" name=\"UndergroundCable\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"Overhead cable\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\OverheadCable.png\" name=\"Overhead Cable\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"Duct\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\duct.png\" name=\"Duct\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"Micro Duct\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\microduc.png\" name=\"Micro Duct\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"FAT\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\FAT.png\" name=\"FAT\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n               <li>\r\n                  <a title=\"FDT\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\"><img src=\"\\images\\map-entities\\FDT.png\" name=\"FDT\" class=\"iconImageStyle\" style=\"cursor:move;height:20px\" /></a>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n      </li>\r\n      <li>\r\n         <a title=\"\" style=\"height: 0px;\"><img src=\"images/file-ext/kml.svg\" (click)=\"ExportTOPdf()\" style=\"width: 16px;margin-top: -15px;margin-left: 0px;\"></a>\r\n      </li>\r\n   </ul>\r\n</div>\r\n<div id=\"layers\" class=\"layers collapse\">\r\n   <div style=\"height: 84.5vh;\">\r\n      <div class=\"box-header with-border\">\r\n         <h3 class=\"box-title\">Layers</h3>\r\n         <div class=\"pull-right\">\r\n            <i class=\"fas fa-sync-alt\" style=\"font-size: 15px; color: #605ca8; cursor: pointer;\" (click)=\"refreshLayers()\"></i>\r\n         </div>\r\n      </div>\r\n      <div class=\"box-body\">\r\n         <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n               <tr>\r\n                  <th style=\"width:40px;text-align: center;\">\r\n                     <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                   [checked]=\"selectedLayers?.length > 0 && isAllSelected()\"\r\n                                   [indeterminate]=\"selectedLayers?.length > 0 && !isAllSelected()\">\r\n                     </mat-checkbox>\r\n                  </th>\r\n                  <th>All</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor='let layer of layers'>\r\n                  <td style=\"text-align: center;\">\r\n                     <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                                   (change)=\"$event ? toggleSelection(layer) : null\"\r\n                                   [checked]=\"selectedLayers?.includes(layer.id)\">\r\n                     </mat-checkbox>\r\n                  </td>\r\n                  <td>{{layer.id}}</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div>\r\n\r\n</div>\r\n\r\n<div>\r\n   <div id=\"designMap\" style=\"height: 85vh;\"></div>\r\n   <div *ngIf=\"selectedEntity\" class=\"box pull-right properties\" style=\"border-radius: 0px;height: 85vh;overflow-y: auto; top:89px\">\r\n      <div class=\"box-header with-border\">\r\n         <h3 class=\"box-title\">Properties</h3>\r\n         <div class=\"box-tools pull-right\">\r\n            <p>\r\n               <span *ngIf=\"selectedEntity?.entityType == 'Chamber'\">\r\n                  <button title=\"Splitter\" style=\"padding-top: 8px;border: 1px solid #ddd; padding: 3px;height: auto;\" type=\"submit\" (click)=\"PlotEntity('Splitter')\">\r\n                     <img src=\"\\images\\map-entities\\splitter.png\" name=\"Splitter\" class=\"iconImageStyle\" style=\"height: 20px\" />\r\n                  </button>\r\n                  <button title=\"Splice Closure\" style=\"padding-top: 8px;border: 1px solid #ddd; padding: 3px; height: auto;\" type=\"submit\" (click)=\"PlotEntity('Splice Closure')\">\r\n                     <img src=\"\\images\\map-entities\\spliceclosure.png\" name=\"SpliceClosure\" class=\"iconImageStyle\" style=\"height: 20px\" />\r\n                  </button>\r\n               </span>\r\n               <span *ngIf=\"selectedEntity?.entityType == 'PoP'\">\r\n                  <a title=\"Odf\" style=\"padding-top: 8px;border: 1px solid #ddd;padding: 3px; height: auto;\" (click)=\"PlotEntity('odf')\"><img src=\"\\images\\map-entities\\odf.png\" name=\"Odf\" class=\"iconImageStyle\" style=\"height:20px\" /></a>\r\n               </span>\r\n               <button class=\"btn btn-social-icon btn-xs btn-default\" (click)=\"selectedEntity = null\">\r\n                  <i class=\"fas fa-times\"></i>\r\n               </button>\r\n               <button class=\"btn btn-social-icon btn-xs btn-default\" style=\"margin-left: 5px;\" type=\"submit\" data-toggle=\"modal\" data-target=\"#deleteEntity\">\r\n                  <i class=\"fas fa-trash-alt\" style=\"color: Red;\"></i>\r\n               </button>\r\n            </p>\r\n                 \r\n         </div>\r\n      </div>\r\n      <div class=\"box-body\">\r\n\r\n         <div *ngIf=\"selectedEntity?.entityType == 'Cable'\">\r\n            <div class=\"panel-group\" id=\"cableAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#cbl_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"cbl_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <textarea type=\"text\" rows=\"3\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates}}\"></textarea>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#cbl_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"cbl_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#cblInfo\">Cable Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"cblInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"aLocation\" class=\"control-label\">A Location</label>\r\n                           <input type=\"text\" name=\"aLocation\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.aLocation\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"bLocation\" class=\"control-label\">B Location</label>\r\n                           <input type=\"text\" name=\"bLocation\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.aLocation\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"measuredLength\" class=\"control-label\">Measured Length</label>\r\n                           <input type=\"text\" name=\"measuredLength\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.measuredLength\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"calculatedLength\" class=\"control-label\">Calculated Length</label>\r\n                           <input type=\"text\" name=\"calculatedLength\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.calculatedLength\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"noOfTubes\" class=\"control-label\">No Of Tubes</label>\r\n                           <input type=\"text\" name=\"noOfTubes\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.noOfTubes\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"corePerTube\" class=\"control-label\">Core Per Tube</label>\r\n                           <input type=\"text\" name=\"corePerTube\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.corePerTube\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n\r\n         <div *ngIf=\"selectedEntity?.entityType == 'Chamber'\">\r\n            <div class=\"panel-group\" id=\"chamberAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#chamberAccordion\" href=\"#cbr_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"cbr_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#chamberAccordion\" href=\"#cbr_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"cbr_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#chamberAccordion\" href=\"#chamberInfo\">Chamber Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"chamberInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"category\" class=\"control-label\">Category</label>\r\n                           <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberCategory\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"closureType\" class=\"control-label\">Closure Type</label>\r\n                           <input type=\"text\" name=\"closureType\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberClosureType\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"spliceTrayCount\" class=\"control-label\">Splice Tray Count</label>\r\n                           <input type=\"text\" name=\"spliceTrayCount\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.spliceTrayCount\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"isBuried\" class=\"control-label\" style=\"width:100%\">&nbsp;</label>\r\n                           <mat-checkbox name=\"isBuried\" [(ngModel)]=\"selectedEntity.isBuried\" [checked]=\"selectedEntity.isBuried\">Is Buried</mat-checkbox>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#chamberAccordion\" href=\"#chamberLoopInfo\">Loop Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"chamberLoopInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"category\" class=\"control-label\">Loop Length</label>\r\n                           <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.loopLength\" />\r\n                        </div>\r\n\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'Pole'\">\r\n            <div class=\"panel-group\" id=\"poleAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#poleAccordion\" href=\"#pole_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"pole_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#poleAccordion\" href=\"#pole_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"pole_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#poleAccordion\" href=\"#poleInfo\">Pole Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"poleInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"height\" class=\"control-label\">Height</label>\r\n                           <input type=\"number\" name=\"height\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.poleHeight\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#chamberAccordion\" href=\"#poleLoopInfo\">Loop Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"poleLoopInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"category\" class=\"control-label\">Loop Length</label>\r\n                           <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.loopLength\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'Splitter'\">\r\n            <div class=\"panel-group\" id=\"splitterAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#splitterAccordion\" href=\"#spt_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"spt_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#splitterAccordion\" href=\"#spt_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"spt_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#splitterAccordion\" href=\"#sptInfo\">Splitter Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"sptInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"splitterRatio\" class=\"control-label\">Splitter Ratio</label>\r\n                           <input type=\"text\" name=\"splitterRatio\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.splitterRatio\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"lossValue\" class=\"control-label\">Loss Value</label>\r\n                           <input type=\"number\" name=\"lossValue\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.lossValue\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#splitterAccordion\" href=\"#sptInfo1\">Splitter Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"sptInfo1\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\" style=\"height:200px; overflow:scroll;\">\r\n                        <table class=\"table table-bordered table-striped\">\r\n                           <thead>\r\n                              <tr>\r\n                                 <th>A-End</th>\r\n                                 <th style=\"width: 202px;\">B-End</th>\r\n                              </tr>\r\n                           </thead>\r\n                           <tbody>\r\n                              <ng-container *ngIf='this.filterResult && this.filterResult.length > 0'>\r\n                                 <tr *ngFor='let type of this.filterResult; let rowIndex = index;'>\r\n                                    <td (mouseover)=\"onspliterHover(entityType)\" (mouseleave)=\"onLeave()\">{{entityType}}</td>\r\n                                    <td (mouseover)=\"onHover(this.filterResult[rowIndex].coordinates)\" (mouseleave)=\"onLeave()\">\r\n                                       <ul style=\"list-style-type: none;\"><li>{{type.levelName}}<span>{{rowIndex}}</span></li></ul>\r\n                                    </td>\r\n                                 </tr>\r\n\r\n                              </ng-container>\r\n                           </tbody>\r\n                        </table>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'Homepass'\">\r\n            <div class=\"panel-group\" id=\"homepassAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#homepassAccordion\" href=\"#hp_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"hp_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"name\" [(ngModel)]=\"selectedEntity.name\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"code\" [(ngModel)]=\"selectedEntity.code\" readonly>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                        <div class=\"form-group\" *ngIf=\"selectedEntity.area\">\r\n                           <label for=\"area\" class=\"control-label\">Coordinates (Polygon) </label>\r\n                           <textarea type=\"text\" class=\"form-control input-sm\" name=\"area\" rows=\"5\" readonly value=\"{{stringify(selectedEntity.area.coordinates)}}\"></textarea>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"selectedEntity.type\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"description\" class=\"control-label\">Description </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"selectedEntity.description\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"connections\" class=\"control-label\">Connections </label>\r\n                           <input type=\"number\" class=\"form-control input-sm\" name=\"connections\" [(ngModel)]=\"selectedEntity.connections\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#splitterAccordion\" href=\"#spt_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"spt_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#splitterAccordion\" href=\"#sptInfo\">Splitter Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"sptInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"splitterRatio\" class=\"control-label\">Splitter Ratio</label>\r\n                           <input type=\"text\" name=\"splitterRatio\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.splitterRatio\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"lossValue\" class=\"control-label\">Loss Value</label>\r\n                           <input type=\"text\" name=\"lossValue\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.lossValue\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n\r\n         <div *ngIf=\"selectedEntity?.entityType == 'SpliceClosure'\">\r\n            <div class=\"panel-group\" id=\"spliceclosureAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#spliceclosureAccordion\" href=\"#spc_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"spc_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#spliceclosureAccordion\" href=\"#spc_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"spc_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#spliceclosureAccordion\" href=\"#spcInfo\">SpliceClosure Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"spcInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"splitterRatio\" class=\"control-label\">Port No</label>\r\n                           <input type=\"number\" name=\"splitterRatio\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.noOfPorts\" />\r\n                        </div>\r\n                        <!--<div class=\"form-group\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"col-sm-11\">\r\n                           <mat-slider name=\"zoomLevel\" thumbLabel step=\"1\" min=\"0\" max=\"21\" style=\"width:100%\" [(ngModel)]=\"selectedEntity.zoomLevel\"></mat-slider>\r\n                        </div>\r\n                        <div class=\"col-sm-1\" style=\"padding-top: 7px;\">\r\n                           <input type=\"number\" min=\"0\" max=\"21\" class=\"form-control input-sm\" name=\"zoom\" [(ngModel)]=\"selectedEntity.zoomLevel\">\r\n                        </div>\r\n                     </div>\r\n                  </div>-->\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType  == 'PoP'\">\r\n            <div class=\"panel-group\" id=\"PopAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#PopAccordion\" href=\"#pop_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"pop_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#spliceclosureAccordion\" href=\"#pop_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"pop_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Pop Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Pop Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Pop Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <!--<div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n               <h4 class=\"panel-title\">\r\n                  <a data-toggle=\"collapse\" data-parent=\"#spliceclosureAccordion\" href=\"#popInfo\">Pop Information</a>\r\n               </h4>\r\n            </div>\r\n            <div id=\"popInfo\" class=\"panel-collapse collapse\">\r\n               <div class=\"panel-body\">\r\n                  <div class=\"form-group\">\r\n                     <label for=\"splitterRatio\" class=\"control-label\">Port No</label>\r\n                     <input type=\"number\" name=\"splitterRatio\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.noOfPorts\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n            </div>\r\n               </div>\r\n            </div>\r\n         </div>-->\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'Duct'\">\r\n            <div class=\"panel-group\" id=\"DuctAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#DuctAccordion\" href=\"#duct_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"DuctAccordion\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <textarea type=\"text\" rows=\"3\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates}}\"></textarea>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#duct_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"duct_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#ductInfo\">Duct Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"ductInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"aLocation\" class=\"control-label\">A Location</label>\r\n                           <input type=\"text\" name=\"aLocation\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.aLocation\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"bLocation\" class=\"control-label\">B Location</label>\r\n                           <input type=\"text\" name=\"bLocation\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.aLocation\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"measuredLength\" class=\"control-label\">Measured Length</label>\r\n                           <input type=\"text\" name=\"measuredLength\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.measuredLength\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"calculatedLength\" class=\"control-label\">Calculated Length</label>\r\n                           <input type=\"text\" name=\"calculatedLength\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.calculatedLength\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"noOfTubes\" class=\"control-label\">No Of Tubes</label>\r\n                           <input type=\"text\" name=\"noOfTubes\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.noOfTubes\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"corePerTube\" class=\"control-label\">Core Per Tube</label>\r\n                           <input type=\"text\" name=\"corePerTube\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.corePerTube\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'MicroDuct'\">\r\n            <div class=\"panel-group\" id=\"DuctAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#MicroDuctAccordion\" href=\"#microduct_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"MicroDuctAccordion\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <textarea type=\"text\" rows=\"3\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates}}\"></textarea>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#microduct_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"microduct_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#cableAccordion\" href=\"#microductInfo\">Micro Duct Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"microductInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"aLocation\" class=\"control-label\">A Location</label>\r\n                           <input type=\"text\" name=\"aLocation\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.aLocation\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"bLocation\" class=\"control-label\">B Location</label>\r\n                           <input type=\"text\" name=\"bLocation\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.aLocation\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"measuredLength\" class=\"control-label\">Measured Length</label>\r\n                           <input type=\"text\" name=\"measuredLength\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.measuredLength\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"calculatedLength\" class=\"control-label\">Calculated Length</label>\r\n                           <input type=\"text\" name=\"calculatedLength\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.calculatedLength\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"noOfTubes\" class=\"control-label\">No Of Tubes</label>\r\n                           <input type=\"text\" name=\"noOfTubes\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.noOfTubes\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"corePerTube\" class=\"control-label\">Core Per Tube</label>\r\n                           <input type=\"text\" name=\"corePerTube\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.corePerTube\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'ODF'\">\r\n            <div class=\"panel-group\" id=\"ODFAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#ODFAccordion\" href=\"#odf_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"odf_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#ODFAccordion\" href=\"#odf_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"odf_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#ODFAccordion\" href=\"#odfInfo\">ODF Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"odfInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"category\" class=\"control-label\">Category</label>\r\n                           <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberCategory\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"closureType\" class=\"control-label\">Closure Type</label>\r\n                           <input type=\"text\" name=\"closureType\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberClosureType\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"spliceTrayCount\" class=\"control-label\">Splice Tray Count</label>\r\n                           <input type=\"text\" name=\"spliceTrayCount\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.spliceTrayCount\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"isBuried\" class=\"control-label\" style=\"width:100%\">&nbsp;</label>\r\n                           <mat-checkbox name=\"isBuried\" [(ngModel)]=\"selectedEntity.isBuried\" [checked]=\"selectedEntity.isBuried\">Is Buried</mat-checkbox>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'FAT'\">\r\n            <div class=\"panel-group\" id=\"FATAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#FATAccordion\" href=\"#fat_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"fat_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#FATAccordion\" href=\"#fat_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"fat_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#FATAccordion\" href=\"#fatInfo\">FAT Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"fatInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"category\" class=\"control-label\">Category</label>\r\n                           <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberCategory\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"closureType\" class=\"control-label\">Closure Type</label>\r\n                           <input type=\"text\" name=\"closureType\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberClosureType\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"spliceTrayCount\" class=\"control-label\">Splice Tray Count</label>\r\n                           <input type=\"text\" name=\"spliceTrayCount\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.spliceTrayCount\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"isBuried\" class=\"control-label\" style=\"width:100%\">&nbsp;</label>\r\n                           <mat-checkbox name=\"isBuried\" [(ngModel)]=\"selectedEntity.isBuried\" [checked]=\"selectedEntity.isBuried\">Is Buried</mat-checkbox>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div *ngIf=\"selectedEntity?.entityType == 'FDT'\">\r\n            <div class=\"panel-group\" id=\"FDTAccordion\">\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#FDTAccordion\" href=\"#fdt_info\">General Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"fdt_info\" class=\"panel-collapse collapse in\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"name\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.name\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                           <input type=\"text\" name=\"code\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.code\" readonly />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                           <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" readonly value=\"{{selectedEntity.geometry.coordinates[0]}}, {{selectedEntity.geometry.coordinates[1]}}\">\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#FDTAccordion\" href=\"#fdt_make\">Make</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"fdt_make\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"type\" class=\"control-label\">Type</label>\r\n                           <input type=\"text\" name=\"type\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.type\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"brand\" class=\"control-label\">Brand</label>\r\n                           <input type=\"text\" name=\"brand\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.brand\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"model\" class=\"control-label\">Model</label>\r\n                           <input type=\"text\" name=\"model\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.model\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                     <h4 class=\"panel-title\">\r\n                        <a data-toggle=\"collapse\" data-parent=\"#FDTAccordion\" href=\"#fdtInfo\">FAT Information</a>\r\n                     </h4>\r\n                  </div>\r\n                  <div id=\"fdtInfo\" class=\"panel-collapse collapse\">\r\n                     <div class=\"panel-body\">\r\n                        <div class=\"form-group\">\r\n                           <label for=\"category\" class=\"control-label\">Category</label>\r\n                           <input type=\"text\" name=\"category\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberCategory\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"closureType\" class=\"control-label\">Closure Type</label>\r\n                           <input type=\"text\" name=\"closureType\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.chamberClosureType\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"spliceTrayCount\" class=\"control-label\">Splice Tray Count</label>\r\n                           <input type=\"text\" name=\"spliceTrayCount\" class=\"form-control input-sm\" [(ngModel)]=\"selectedEntity.spliceTrayCount\" />\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                           <label for=\"isBuried\" class=\"control-label\" style=\"width:100%\">&nbsp;</label>\r\n                           <mat-checkbox name=\"isBuried\" [(ngModel)]=\"selectedEntity.isBuried\" [checked]=\"selectedEntity.isBuried\">Is Buried</mat-checkbox>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n<div id=\"deleteEntity\" class=\"modal fade\" role=\"dialog\" *ngIf=\"selectedEntity\">\r\n   <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" style=\"border-radius:3px\">\r\n         <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Delete {{selectedEntity.entityType}}</h4>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <p>Do you want to delete {{selectedEntity.entityType}} - {{selectedEntity.name}}?</p>\r\n\r\n            <!--<p>Do you want to delete {{selectedEntity.entityType}} - {{selectedEntity.name}}?</p>\r\n            <table class=\"table table-bordered\">\r\n               <thead>\r\n                  <tr>\r\n                     <th style=\"width: 200px;\">Field</th>\r\n                     <th>Value</th>\r\n                  </tr>\r\n               </thead>\r\n               <tbody>\r\n                  <ng-container *ngIf='searchFields && searchFields.length > 0'>\r\n                     <tr *ngFor='let searchField of searchFields'>\r\n                        <td>{{searchField.label}}</td>\r\n                        <td><input [type]=searchField.dataType class=\"form-control input-sm\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchField.value\"></td>\r\n                     </tr>\r\n                  </ng-container>\r\n                  <tr *ngIf='searchFields == null || searchFields.length == 0'>\r\n                     <td colspan=\"2\" style=\"text-align: center;\">\r\n                        No search fields defined\r\n                     </td>\r\n                  </tr>\r\n               </tbody>\r\n            </table>-->\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n            <button class=\"btn btn-info\" data-dismiss=\"modal\" type=\"button\" (click)=\"deleteEntity()\">Yes</button>\r\n            <button class=\"btn btn-default pull-left\" data-dismiss=\"modal\" type=\"button\">No</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" style=\"padding-top:15%\" data-keyboard=\"false\" data-backdrop=\"static\">\r\n   <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <!--<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>-->\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n               <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <div class=\"form-group\">\r\n               <div class=\"form-group\">\r\n                  <select class=\"form-control\" id=\"designEntity\">\r\n                     <option [value]=\"0\">Please select</option>\r\n                     <option *ngFor=\"let designEntity of masterEntities\" [value]=\"designEntity.id\">{{designEntity.name}}</option>\r\n                  </select>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"ClearEntities()\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"PlotPostEntities()\">Ok</button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-networkSettings.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-networkSettings.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n   <div class=\"col-md-4\">\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">Hierarchy Settings</h4>\r\n         </div>\r\n         <div class=\"panel-collapse collapse in\">\r\n            <div class=\"panel-body\">\r\n               <div class=\"col-sm-12\">\r\n                  <div class=\"form-group\">\r\n                     <label for=\"hierarchyName\" class=\"control-label\">Hierarchy Name <span style=\"color:red;\">*</span></label>\r\n                     <div class=\"input-group input-group-sm\">\r\n                        <input type=\"text\" name=\"hierarchyName\" [(ngModel)]=\"hierarchyName\" class=\"form-control\">\r\n                        <span class=\"input-group-btn\">\r\n                           <button type=\"button\" class=\"btn btn-info btn-flat\" (click)=\"addHierarchy()\"><i class=\"fas fa-plus\"></i></button>\r\n                        </span>\r\n                     </div>\r\n                  </div>\r\n                  <ng-container *ngIf='design.networkSettings && design.networkSettings.length > 0'>\r\n                     <ng-container *ngFor='let networkSetting of design.networkSettings; let rowIndex = index;'>\r\n                        <div class=\"box box-solid hierarchy\" [class.hactive]=\"selectedSetting == networkSetting\" (click)=\"selectedSetting = networkSetting\" style=\"cursor: pointer;\">\r\n                           <div class=\"box-header\">\r\n                              <div class=\"pull-right box-tools\" style=\"top: 0px;right: 0px;\">\r\n                                 <button type=\"button\" class=\"btn btn-sm pull-right\" style=\"padding: 5px;background: transparent;\" (click)=\"deleteHierarchy(rowIndex)\">\r\n                                    <i class=\"fas fa-trash-alt\" style=\"color:red\"></i>\r\n                                 </button>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"box-body\">\r\n                              <p>{{rowIndex + 1}}. {{networkSetting.name}}</p>\r\n                           </div>\r\n                        </div>\r\n                     </ng-container>\r\n                  </ng-container>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-md-8\">\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">{{selectedSetting?.name || 'Settings'}}</h4>\r\n         </div>\r\n         <div class=\"panel-collapse collapse in\">\r\n            <div class=\"panel-body\" style=\"padding: 7px;\" *ngIf=\"design.designType == 'FTTx'\">\r\n               <ul class=\"nav nav-tabs form-menu\" style=\"padding-bottom: 2px;border-bottom: 1px solid #ddd;\">\r\n                  <li class=\"active\"><a href=\"#tab_startNode\" data-toggle=\"tab\">Start Node</a></li>\r\n                  <li><a href=\"#tab_destinationNode\" data-toggle=\"tab\">Destination Node</a></li>\r\n                  <li><a href=\"#tab_cabling\" data-toggle=\"tab\">Cabling</a></li>\r\n               </ul>\r\n               <div class=\"tab-content\">\r\n                  <div id=\"tab_startNode\" class=\"tab-pane active\" style=\"padding: 10px;\">\r\n                     <div class=\"panel-group\" id=\"sn_accordion\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#sn_accordion\" href=\"#sn_entitySettings\">Entity Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"sn_entitySettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-entities [entitySettings]=\"selectedSetting.startNode.entitySettings\" [allDesigns]=\"allDesigns\"></dzn-entities>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#sn_accordion\" href=\"#sn_accessories\">Accessories</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"sn_accessories\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-accessories [accessorySettings]=\"selectedSetting.startNode.accessorySettings\" [parentEntityType]=\"selectedSetting.startNode.entitySettings.entityName\" [allDesigns]=\"allDesigns\"></dzn-accessories>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#sn_accordion\" href=\"#sn_civilWorks\">Civil works</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"sn_civilWorks\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-civilworks [civilworkSettings]=\"selectedSetting.startNode.civilworkSettings\" [parentEntityType]=\"selectedSetting.startNode.entitySettings.entityName\"></dzn-civilworks>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#sn_accordion\" href=\"#sn_fiber\">Fiber</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"sn_fiber\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <div class=\"form-group col-md-12\">\r\n                                    <label class=\"control-label\" for=\"fiberDrop\">Fiber Drop</label>\r\n                                    <input class=\"form-control\" name=\"fiberDrop\" [(ngModel)]=\"selectedSetting.startNode.fiberDrop\" type=\"number\">\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#sn_accordion\" href=\"#sn_ductSettings\">Duct Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"sn_ductSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-duct [ductSettings]=\"selectedSetting.startNode.ductSettings\"></dzn-duct>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div id=\"tab_destinationNode\" class=\"tab-pane\" style=\"padding: 10px;\">\r\n                     <div class=\"panel-group\" id=\"dn_accordion\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#dn_accordion\" href=\"#dn_entitySettings\">Entity Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"dn_entitySettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-entities [entitySettings]=\"selectedSetting.destinationNode.entitySettings\" [allDesigns]=\"allDesigns\"></dzn-entities>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#dn_accordion\" href=\"#dn_accessories\">Accessories</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"dn_accessories\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-accessories [accessorySettings]=\"selectedSetting.destinationNode.accessorySettings\" [parentEntityType]=\"selectedSetting.destinationNode.entitySettings.entityName\" [allDesigns]=\"allDesigns\"></dzn-accessories>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#dn_accordion\" href=\"#dn_civilWorks\">Civil works</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"dn_civilWorks\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-civilworks [civilworkSettings]=\"selectedSetting.destinationNode.civilworkSettings\" [parentEntityType]=\"selectedSetting.destinationNode.entitySettings.entityName\"></dzn-civilworks>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#dn_accordion\" href=\"#dn_fiber\">Fiber</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"dn_fiber\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <div class=\"form-group col-md-12\">\r\n                                    <label class=\"control-label\" for=\"dn_fiberDrop\">Fiber Drop</label>\r\n                                    <input class=\"form-control\" name=\"dn_fiberDrop\" [(ngModel)]=\"selectedSetting.destinationNode.fiberDrop\" type=\"number\">\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#dn_accordion\" href=\"#dn_ductSettings\">Duct Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"dn_ductSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-duct [ductSettings]=\"selectedSetting.destinationNode.ductSettings\"></dzn-duct>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div id=\"tab_cabling\" class=\"tab-pane\" style=\"padding: 10px;\">\r\n                     <div class=\"panel-group\" id=\"cbl_accordion\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_cableSettings\">Cable Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_cableSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-cable [cableSettings]=\"selectedSetting.cabling.cableSettings\"></dzn-cable>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_loopSettings\">Loop Management</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_loopSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"cableLoop\" class=\"control-label\">Cable loop (Meters)</label>\r\n                                       <input class=\"form-control\" name=\"cableLoop\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.cableLoop\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"forEvery\" class=\"control-label\">For Every (Meters)</label>\r\n                                       <input class=\"form-control\" name=\"forEvery\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.loopInterval\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"loopAtClosure\" class=\"control-label\">Loop at Closure (Meters)</label>\r\n                                       <input class=\"form-control\" name=\"loopAtClosure\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.loopAtClosure\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"loopAtClosure\" class=\"control-label\">Connect %</label>\r\n                                       <input class=\"form-control\" name=\"loopAtClosure\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.connectionPercent\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_spliceClosuresSettings\">Splice Closures</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_spliceClosuresSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-spliceClosure [spliceClosureSettings]=\"selectedSetting.cabling.spliceClosureSettings\"></dzn-spliceClosure>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_accessories\">Accessories</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_accessories\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-accessories [accessorySettings]=\"selectedSetting.cabling.accessorySettings\" parentEntityType=\"Cable\" [allDesigns]=\"allDesigns\"></dzn-accessories>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_duct\">Duct</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_duct\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-duct [ductSettings]=\"selectedSetting.cabling.ductSettings\"></dzn-duct>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"padding: 7px;\" *ngIf=\"design.designType == 'Backbone'\">\r\n               <ul class=\"nav nav-tabs form-menu\" style=\"padding-bottom: 2px;border-bottom: 1px solid #ddd;\">\r\n                  <li class=\"active\"><a href=\"#tab_fdp\" data-toggle=\"tab\">FDP Node</a></li>\r\n                  <li><a href=\"#tab_bb_cabling\" data-toggle=\"tab\">Cabling</a></li>\r\n               </ul>\r\n               <div class=\"tab-content\">\r\n                  <div id=\"tab_fdp\" class=\"tab-pane active\" style=\"padding: 10px;\">\r\n                     <div class=\"panel-group\" id=\"fdp_accordion\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#fdp_accordion\" href=\"#fdp_nodeSettings\">FDP Nodes</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"fdp_nodeSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-fdp [fdpSettings]=\"selectedSetting.fdpNode.fdpSettings\" [allDesigns]=\"allDesigns\"></dzn-fdp>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#fdp_accordion\" href=\"#fdp_accessories\">Accessories</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"fdp_accessories\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-accessories [accessorySettings]=\"selectedSetting.fdpNode.accessorySettings\" [parentEntityType]=\"selectedSetting.fdpNode.entitySettings.entityName\" [allDesigns]=\"allDesigns\"></dzn-accessories>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#fdp_accordion\" href=\"#fdp_civilWorks\">Civil works</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"fdp_civilWorks\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-civilworks [civilworkSettings]=\"selectedSetting.fdpNode.civilworkSettings\" [parentEntityType]=\"selectedSetting.fdpNode.entitySettings.entityName\"></dzn-civilworks>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#fdp_accordion\" href=\"#fdp_fiber\">Fiber</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"fdp_fiber\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <div class=\"form-group col-md-12\">\r\n                                    <label class=\"control-label\" for=\"fdpFiberDrop\">Fiber Drop</label>\r\n                                    <input class=\"form-control\" name=\"fdpFiberDrop\" [(ngModel)]=\"selectedSetting.fdpNode.fiberDrop\" type=\"number\">\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#fdp_accordion\" href=\"#fdp_ductSettings\">Duct Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"fdp_ductSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-duct [ductSettings]=\"selectedSetting.fdpNode.ductSettings\"></dzn-duct>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div id=\"tab_bb_cabling\" class=\"tab-pane\" style=\"padding: 10px;\">\r\n                     <div class=\"panel-group\" id=\"cbl_accordion\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_cableSettings\">Cable Settings</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_cableSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-cable [cableSettings]=\"selectedSetting.cabling.cableSettings\"></dzn-cable>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_loopSettings\">Loop Management</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_loopSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"cableLoop\" class=\"control-label\">Cable loop (Meters)</label>\r\n                                       <input class=\"form-control\" name=\"cableLoop\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.cableLoop\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"forEvery\" class=\"control-label\">For Every (Meters)</label>\r\n                                       <input class=\"form-control\" name=\"forEvery\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.loopInterval\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"loopAtClosure\" class=\"control-label\">Loop at Closure (Meters)</label>\r\n                                       <input class=\"form-control\" name=\"loopAtClosure\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.loopAtClosure\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                       <label for=\"loopAtClosure\" class=\"control-label\">Connect %</label>\r\n                                       <input class=\"form-control\" name=\"loopAtClosure\" [(ngModel)]=\"selectedSetting.cabling.cableSettings.connectionPercent\" type=\"number\">\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_spliceClosuresSettings\">Splice Closures</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_spliceClosuresSettings\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-spliceClosure [spliceClosureSettings]=\"selectedSetting.cabling.spliceClosureSettings\"></dzn-spliceClosure>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_accessories\">Accessories</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_accessories\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-accessories [accessorySettings]=\"selectedSetting.cabling.accessorySettings\" parentEntityType=\"Cable\" [allDesigns]=\"allDesigns\"></dzn-accessories>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"padding:5px\">\r\n                              <span>\r\n                                 <a data-toggle=\"collapse\" data-parent=\"#cbl_accordion\" href=\"#cbl_duct\">Duct</a>\r\n                              </span>\r\n                           </div>\r\n                           <div id=\"cbl_duct\" class=\"panel-collapse collapse\">\r\n                              <div class=\"panel-body\">\r\n                                 <dzn-duct [ductSettings]=\"selectedSetting.cabling.ductSettings\"></dzn-duct>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-spliceClosure.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-spliceClosure.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <label for=\"equipment\" class=\"control-label\">SpliceClosure Option</label>\r\n      <mat-select name=\"spliceClosureOption\" [(ngModel)]=\"spliceClosureSettings.dataSource\" (ngModelChange)=\"getExistingSpliceClosures()\">\r\n         <mat-option>SpliceClosure Option</mat-option>\r\n         <mat-option value=\"import\">Import SpliceClosure</mat-option>\r\n         <mat-option value=\"existing\">Use from existing</mat-option>\r\n         <mat-option value=\"automatic\">Place Automatically</mat-option>\r\n      </mat-select>\r\n   </div>\r\n</div>-->\r\n<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <label for=\"equipment\" class=\"control-label\">Select SpliceClosure</label>\r\n      <div class=\"input-group input-group-sm\">\r\n         <mat-select name=\"spliceClosure\" [(ngModel)]=\"selectedSpliceClosure\">\r\n            <mat-option>Select SpliceClosure</mat-option>\r\n            <mat-option *ngFor=\"let spliceClosure of spliceClosuresMaster\" [value]=\"spliceClosure\">\r\n               {{spliceClosure.name}}\r\n            </mat-option>\r\n         </mat-select>\r\n         <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addSpliceClosure()\"><i class=\"fas fa-plus\"></i></button></span>\r\n      </div>\r\n   </div>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <table class=\"table table-bordered table-striped\">\r\n         <thead>\r\n            <tr>\r\n               <th>Name</th>\r\n               <th style=\"width:40px\"></th>\r\n            </tr>\r\n         </thead>\r\n         <tbody>\r\n            <ng-container *ngIf='spliceClosureSettings.spliceClosures && spliceClosureSettings.spliceClosures.length > 0'>\r\n               <tr *ngFor='let spliceClosure of spliceClosureSettings.spliceClosures;let rowIndex = index;'>\r\n                  <td>{{spliceClosure.name}}</td>\r\n                  <td>\r\n                     <a>\r\n                        <i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red; cursor:pointer\" (click)=\"removeSpliceClosure(rowIndex)\" title=\"Remove\"></i>\r\n                     </a>\r\n                  </td>\r\n               </tr>\r\n            </ng-container>\r\n            <tr *ngIf='spliceClosureSettings.spliceClosures == null || spliceClosureSettings.spliceClosures.length == 0'>\r\n               <td colspan=\"2\" style=\"text-align: center;\">\r\n                  {{statusMessage}}\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </table>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"col-sm-12\">\r\n   <div class=\"form-group\">\r\n      <mat-checkbox name=\"scJoin\" [checked]=\"spliceClosureSettings.straightJoin\" [(ngModel)]=\"spliceClosureSettings.straightJoin\">Straight Joints as per cable drum length </mat-checkbox>\r\n   </div>\r\n   <div class=\"form-group\" *ngIf=\"spliceClosureSettings.straightJoin\">\r\n      <label for=\"drumLength\" class=\"control-label\">Drum Length</label>\r\n      <input class=\"form-control\" name=\"drumLength\" type=\"number\" [(ngModel)]=\"spliceClosureSettings.drumLength\">\r\n   </div>\r\n   <div class=\"form-group\" *ngIf=\"spliceClosureSettings.straightJoin\">\r\n      <mat-checkbox name=\"intersectionJoints\" [checked]=\"spliceClosureSettings.intersectionJoints\" [(ngModel)]=\"spliceClosureSettings.intersectionJoints\">Intersection Joints</mat-checkbox>\r\n   </div>\r\n</div>\r\n\r\n\r\n   <!--<div class=\"form-group\" *ngIf=\"spliceClosureOption == 'import'\">\r\n      <label for=\"equipment\" class=\"control-label\">Select SpliceClosure Shape File</label>\r\n      <div class=\"input-group\">\r\n         <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n         <span class=\"input-group-btn\">\r\n            <span class=\"btn btn-primary btn-file\">\r\n               Browse&hellip; <input type=\"file\" multiple (change)=\"fileChangeEvent($event)\">\r\n            </span>\r\n         </span>\r\n      </div>\r\n   </div>\r\n   <div *ngIf=\"spliceClosureOption == 'existing'\">\r\n      <div class=\"form-group\">\r\n         <label for=\"design\" class=\"control-label\">Select Design</label>\r\n         <mat-select name=\"design\" [(ngModel)]=\"selectedDesign\">\r\n            <mat-option>Select Design</mat-option>\r\n            <mat-option *ngFor=\"let item of allDesigns\" [value]=\"item.id\">(ver {{item.version}}) {{item.name}}</mat-option>\r\n         </mat-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n         <label for=\"equipment\" class=\"control-label\">Select SpliceClosure</label>\r\n         <div class=\"input-group input-group-sm\">\r\n            <mat-select name=\"spliceClosure\" [(ngModel)]=\"selectedSpliceClosure\">\r\n               <mat-option>Select SpliceClosure</mat-option>\r\n               <mat-option *ngFor=\"let spliceClosure of spliceClosuresMaster\" [value]=\"spliceClosure\">\r\n                  {{spliceClosure.name}}\r\n               </mat-option>\r\n            </mat-select>\r\n            <span class=\"input-group-btn\"><button class=\"btn btn-info btn-flat\" type=\"button\" (click)=\"addSpliceClosure()\"><i class=\"fas fa-plus\"></i></button></span>\r\n         </div>\r\n      </div>\r\n   </div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/views/design-details.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/views/design-details.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Designs <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/designs']\"> Designs</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <ul class=\"nav nav-tabs form-menu\">\r\n                  <li class=\"active\"><a href=\"#tab_designInfo\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Design Info</span></a></li>\r\n                  <li><a href=\"#tab_documents\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Documents</span></a></li>\r\n                  <!--<li *ngIf=\"design.designType == 'FTTx'\"><a href=\"#tab_clusters\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Clusters</span></a></li>-->\r\n                  <li><a href=\"#tab_clusters\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Clusters</span></a></li>\r\n                  <li><a href=\"#tab_bookingIds\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Booking Ids</span></a></li>\r\n                  <li><a href=\"#tab_networkSettings\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Settings</span></a></li>\r\n                  <li><a href=\"#tab_costing\" data-toggle=\"tab\"><span style=\"font-size:1.2em\">Costing</span></a></li>\r\n                  <li><a href=\"#tab_map\" data-toggle=\"tab\"><span style=\"font-size:1.2em\">Map</span></a></li>\r\n                  <li><a href=\"#tab_boq\" data-toggle=\"tab\"><span style=\"font-size:1.2em\">BOM</span></a></li>\r\n                  <li><a href=\"#tab_log\" data-toggle=\"tab\"><span style=\"font-size:1.2em\">Logs</span></a></li>\r\n               </ul>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" autocomplete=\"off\" novalidate>\r\n                  <div class=\"tab-content\">\r\n                     <div id=\"tab_designInfo\" class=\"tab-pane active\">\r\n                        <dzn-info [design]=\"design\" [designs]=\"designs\" (onVersionChange)=\"onVersionChange($event)\"></dzn-info>\r\n                     </div>\r\n                     <div id=\"tab_documents\" class=\"tab-pane\">\r\n                        <dzn-documents [design]=\"design\"></dzn-documents>\r\n                     </div>\r\n                     <div id=\"tab_clusters\" class=\"tab-pane\">\r\n                        <dzn-clusters [design]=\"design\"></dzn-clusters>\r\n                     </div>\r\n                     <div id=\"tab_bookingIds\" class=\"tab-pane\">\r\n                        <dzn-bookingIds [design]=\"design\"></dzn-bookingIds>\r\n                     </div>\r\n                     <div id=\"tab_networkSettings\" class=\"tab-pane\">\r\n                        <dzn-networkSettings [design]=\"design\" [allDesigns]=\"allDesigns\"></dzn-networkSettings>\r\n                     </div>\r\n                     <div id=\"tab_costing\" class=\"tab-pane\">\r\n                        <dzn-costing [networkSettings]=\"design.networkSettings\"></dzn-costing>\r\n                     </div>\r\n                     <div id=\"tab_map\" class=\"tab-pane\">\r\n                        <dzn-map [design]=\"design\"></dzn-map>\r\n                     </div>\r\n                     <div id=\"tab_boq\" class=\"tab-pane\">\r\n                        <dzn-bom [boq]=\"design\"></dzn-bom>\r\n                     </div>\r\n                     <div id=\"tab_log\" class=\"tab-pane\">\r\n                        <div class=\"col-md-12 form-group\">\r\n                           <textarea class=\"form-control\" rows=\"15\" name=\"processLog\" [ngModel]=\"design.log\" readonly></textarea>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n               <button type=\"submit\" class=\"btn btn-default pull-left\" (click)=\"saveNewVersion()\">Save as New Version</button>\r\n               <div class=\"pull-right\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"generateDesign()\" style=\"margin-right: 10px;\">Generate Design</button>\r\n                  <button type=\"submit\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                  <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/views/design-list.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/designs/views/design-list.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Designs</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Design List</h3>\r\n               <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Status\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Design</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\">Name</th>\r\n                        <th data-column=\"DesignType\" class=\"table-sorter\" style=\"max-width:200px\">Design Type</th>\r\n                        <th data-column=\"Version\" class=\"table-sorter\" style=\"max-width:100px\">Version</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:80px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='designs && designs.length > 0'>\r\n                        <tr *ngFor='let design of designs'>\r\n                           <td>{{design.name}}</td>\r\n                           <td>{{design.designType}}</td>\r\n                           <td>{{design.version}}</td>\r\n                           <td>{{design.updatedBy}}</td>\r\n                           <td>{{design.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td class=\"text-center\">\r\n                              <!--<a>\r\n                                 <i class=\"fa fa-code\" (click)=\"exportKML(design)\" title=\"Export\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;-->\r\n                              <a>\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', design.referenceId]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a>\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(design)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='designs == null || designs.length == 0'>\r\n                        <td colspan=\"6\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepasses/views/homepass-details.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepasses/views/homepass-details.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Homepasses <small> {{title}} </small></h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a></li>\r\n      <li><a [routerLink]=\"['/homepasses']\"> Homepasses</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border ui-sortable-handle\">\r\n               <ul class=\"nav nav-tabs form-menu\">\r\n                  <li [class]=\"isNew == true?'active': ''\" *ngIf=\"isNew == true\"><a href=\"#tab_import\" data-toggle=\"tab\"> <span style=\"font-size:1.2em\">Import</span></a></li>\r\n                  <li [class]=\"isNew == false?'active': ''\"><a href=\"#tab_map\" data-toggle=\"tab\"><span style=\"font-size:1.2em\">{{tabTitle}}</span></a></li>\r\n               </ul>\r\n               <div class=\"box-tools pull-right\">\r\n                  <button class=\"btn btn-social-icon btn-xs btn-danger\" (click)=\"goBack()\">\r\n                     <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-social-icon btn-xs btn-success\" type=\"submit\" style=\"margin-left: 5px;\" (click)=\"save()\" [disabled]=\"form.invalid\">\r\n                     <i class=\"far fa-save\"></i>\r\n                  </button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <form name=\"form\" action=\"javascript:{}\" #form=\"ngForm\" autocomplete=\"off\" novalidate>\r\n                  <div class=\"tab-content\">\r\n                     <div id=\"tab_import\" [class]=\"isNew == true?'tab-pane active': 'tab-pane'\">\r\n                        <div class=\"col-md-12\">\r\n                           <div class=\"form-group\">\r\n                              <label for=\"uploadFile\">Upload file</label>\r\n                              <div class=\"input-group\">\r\n                                 <input type=\"text\" class=\"form-control\" readonly id=\"uploadFile\" placeholder=\"Choose file\">\r\n                                 <span class=\"input-group-btn\">\r\n                                    <span class=\"btn btn-primary btn-file\">\r\n                                       Browse&hellip; <input type=\"file\" accept=\".csv, .kml, .zip\" #fileInput (click)=\"fileInput.value = null\" value=\"\" (change)=\"fileChangeEvent($event)\">\r\n                                    </span>\r\n                                 </span>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"form-group\">\r\n                              <label *ngIf=\"homepasses && homepasses.length > 0\">Total Homepasses: {{homepasses.length}}</label>\r\n                              <table class=\"table table-bordered table-striped\">\r\n                                 <thead>\r\n                                    <tr>\r\n                                       <th style=\"width:150px\">Code</th>\r\n                                       <th>Name</th>\r\n                                       <th style=\"width:150px\">Type</th>\r\n                                       <th style=\"width:200px\">Lng/Lat</th>\r\n                                       <th style=\"width:115px\"># Connections</th>\r\n                                       <th style=\"width:50px\" class='text-center'></th>\r\n                                    </tr>\r\n                                 </thead>\r\n                                 <tbody>\r\n                                    <ng-container *ngIf='homepasses && homepasses.length > 0'>\r\n                                       <tr *ngFor='let homepass of homepasses;let rowIndex = index;'>\r\n                                          <td>{{homepass.code}}</td>\r\n                                          <td>{{homepass.name}}</td>\r\n                                          <td>{{homepass.type}}</td>\r\n                                          <td>{{homepass.geometry.coordinates[0]}} , {{homepass.geometry.coordinates[1]}}</td>\r\n                                          <td>{{homepass.connections}}</td>\r\n                                          <td style=\"text-align:center\">\r\n                                             <a (click)=\"removeUploadedHomepass(rowIndex)\" style=\"cursor:pointer\"><i class=\"fas fa-trash-alt\" style=\"font-size: 15px; color: Red;\" title=\"Delete\"></i></a>\r\n                                          </td>\r\n                                       </tr>\r\n                                    </ng-container>\r\n                                    <tr *ngIf='homepasses == null || homepasses.length == 0'>\r\n                                       <td colspan=\"6\" style=\"text-align: center;\">\r\n                                          Upload homepasses.\r\n                                       </td>\r\n                                    </tr>\r\n                                 </tbody>\r\n                              </table>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div id=\"tab_map\" [class]=\"isNew == false?'tab-pane active': 'tab-pane'\">\r\n                        <div class=\"panel panel-default\">\r\n                           <div style=\"position: relative;\">\r\n                              <div id=\"homepassMap\" style=\"min-height: 481px;\"></div>\r\n                              <div class=\"box pull-right properties\" *ngIf=\"homepass != null\">\r\n                                 <div class=\"box-header with-border\">\r\n                                    <h3 class=\"box-title\">Properties</h3>\r\n                                    <div class=\"box-tools pull-right\">\r\n                                       <button class=\"btn btn-social-icon btn-xs btn-default\" (click)=\"homepass = null\">\r\n                                          <i class=\"fas fa-times\"></i>\r\n                                       </button>\r\n                                       <button class=\"btn btn-social-icon btn-xs btn-default\" style=\"margin-left: 5px;\" type=\"submit\" (click)=\"deleteHomepass()\">\r\n                                          <i class=\"fas fa-trash-alt\" style=\"color: Red;\"></i>\r\n                                       </button>\r\n                                    </div>\r\n                                 </div>\r\n                                 <div class=\"box-body\" style=\"height: 440px;overflow-y: auto;\">\r\n\r\n                                    <div class=\"panel-group\" [id]=\"homepass.name\">\r\n                                       <div class=\"panel panel-borderless\">\r\n                                          <div class=\"panel-heading\">\r\n                                             <h4 class=\"panel-title\">\r\n                                                <a class=\"accordion-toggle\" data-toggle=\"collapse\" [attr.data-parent]=\"'#'+homepass.name\" href=\"#info\">General Information</a>\r\n                                             </h4>\r\n                                          </div>\r\n                                          <div id=\"info\" class=\"panel-collapse collapse in\">\r\n                                             <div class=\"panel-body\">\r\n                                                <div class=\"form-group\">\r\n                                                   <label for=\"name\" class=\"control-label\">Name <span style=\"color:red;\">*</span></label>\r\n                                                   <input type=\"text\" class=\"form-control input-sm\" name=\"name\" [(ngModel)]=\"homepass.name\">\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                   <label for=\"code\" class=\"control-label\">Code <span style=\"color:red;\">*</span></label>\r\n                                                   <input type=\"text\" class=\"form-control input-sm\" name=\"code\" [(ngModel)]=\"homepass.code\">\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                   <label for=\"coordinates\" class=\"control-label\">Coordinates(Lng,Lat) </label>\r\n                                                   <input type=\"text\" class=\"form-control input-sm\" name=\"coordinates\" value=\"{{homepass.geometry.coordinates[0]}}, {{homepass.geometry.coordinates[1]}}\">\r\n                                                </div>\r\n                                                <div class=\"form-group\" *ngIf=\"homepass.area\">\r\n                                                   <label for=\"area\" class=\"control-label\">Coordinates (Polygon) </label>\r\n                                                   <textarea type=\"text\" class=\"form-control input-sm\" name=\"area\" rows=\"5\" readonly value=\"{{stringify(homepass.area.coordinates)}}\"></textarea>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                   <label for=\"type\" class=\"control-label\">Type </label>\r\n                                                   <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"homepass.type\">\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                   <label for=\"description\" class=\"control-label\">Description </label>\r\n                                                   <input type=\"text\" class=\"form-control input-sm\" name=\"description\" [(ngModel)]=\"homepass.description\">\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                   <label for=\"connections\" class=\"control-label\">Connections </label>\r\n                                                   <input type=\"number\" class=\"form-control input-sm\" name=\"connections\" [(ngModel)]=\"homepass.connections\">\r\n                                                </div>\r\n                                             </div>\r\n                                          </div>\r\n                                       </div>\r\n                                       <div style=\"padding-top:10px\">\r\n                                          <cf-group [customFields]=\"homepass.customFields\" [accordionId]=\"homepass.name\"></cf-group>\r\n                                       </div>\r\n                                       <!--<ng-container *ngIf='homepass.customFields && homepass.customFields.length > 0'>\r\n                                          <ng-container *ngFor='let groups of homepass.customFieldGroups;let rowIndex = index;'>\r\n                                             <ng-container *ngFor='let item of groups'>\r\n                                                <div class=\"panel panel-default\">\r\n                                                   <div class=\"panel-heading\">\r\n                                                      <h4 class=\"panel-title\">\r\n                                                         <a data-toggle=\"collapse\" data-parent=\"#accordion\" [href]=\"'#cf_'+rowIndex\">{{item.category}}</a>\r\n                                                      </h4>\r\n                                                   </div>\r\n                                                   <div [id]=\"'cf_'+rowIndex\" class=\"panel-collapse collapse\">\r\n                                                      <div class=\"panel-body\">\r\n                                                         <div class=\"form-group\">\r\n                                                            <label for=\"category\" class=\"control-label\">{{item.label}}</label>\r\n                                                         </div>\r\n                                                      </div>\r\n                                                   </div>\r\n                                                </div>\r\n                                             </ng-container>\r\n\r\n                                          </ng-container>\r\n                                       </ng-container>-->\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n               <div class=\"pull-right\">\r\n                  <button type=\"submit\" class=\"btn btn-danger\" (click)=\"goBack()\">Close</button>\r\n                  <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left:10px\" (click)=\"save()\" [disabled]=\"form.invalid\">Save</button>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepasses/views/homepass-list.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepasses/views/homepass-list.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n   <h1>Manage Homepasses</h1>\r\n   <ol class=\"breadcrumb\">\r\n      <li><a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> Home</a></li>\r\n   </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n         <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n               <h3 class=\"box-title\">Homepass List</h3>\r\n               <div class=\"box-tools pull-right\" title=\"\" *ngIf=\"permissions.add\">\r\n                  <button [routerLink]=\"['details']\" class=\"btn btn-block btn-xs btn-primary\"> New Homepass</button>\r\n               </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n               <dt-search [searchFields]=\"searchFields\" (onSearch)=\"search($event)\"></dt-search>\r\n               <dt-pagination [totalPages]=\"totalPages\" (onPageSizeChange)=\"onPageSizeChange($event)\" (onPageChange)=\"onPageChange($event)\"></dt-pagination>\r\n\r\n               <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                     <tr (click)=\"onColumnClick($event.target)\">\r\n                        <th data-column=\"Name\" class=\"table-sorter\" style=\"width: 200px;\">Name</th>\r\n                        <th data-column=\"Description\" class=\"table-sorter\" style=\"max-width:300px\">Description</th>\r\n                        <th data-column=\"Type\" class=\"table-sorter\" style=\"width: 100px;\">Type</th>\r\n                        <th data-column=\"UpdatedBy\" class=\"table-sorter\" style=\"width: 150px;\">Updated By</th>\r\n                        <th data-column=\"UpdatedDate\" class=\"table-sorter\" style=\"width: 125px;\">Updated On</th>\r\n                        <th style=\"width:60px\"></th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <ng-container *ngIf='homepasses && homepasses.length > 0'>\r\n                        <tr *ngFor='let homepass of homepasses'>\r\n                           <td>{{homepass.name}}</td>\r\n                           <td class=\"text-overflow-ellipsis\">{{homepass.description}}</td>\r\n                           <td>{{homepass.type}}</td>\r\n                           <td>{{homepass.updatedBy}}</td>\r\n                           <td>{{homepass.updatedDate | date:'dd/MM/yyyy'}}</td>\r\n                           <td>\r\n                              <a *ngIf=\"permissions.edit\">\r\n                                 <i class=\"fa fa-edit\" [routerLink]=\"['details', homepass.id]\" title=\"Edit\" style=\"font-size: 14px; cursor:pointer\"></i>\r\n                              </a>&nbsp;\r\n                              <a *ngIf=\"permissions.delete\">\r\n                                 <i class=\"fa fa-trash\" (click)=\"delete(homepass)\" title=\"Remove\" style=\"font-size: 14px; cursor:pointer; color:red\"></i>\r\n                              </a>\r\n                           </td>\r\n                        </tr>\r\n                     </ng-container>\r\n                     <tr *ngIf='homepasses == null || homepasses.length == 0'>\r\n                        <td colspan=\"5\" style=\"text-align: center;\">\r\n                           {{statusMessage}}\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n");

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
/* harmony import */ var _common_models_loginUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/loginUser */ "./src/app/common/models/loginUser.ts");
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/helper */ "./src/app/common/helper.ts");





const STORE_KEY = 'NERP_RND_LastAction';
const MINUTES_UNITL_AUTO_LOGOUT = 60; // in mins
const CHECK_INTERVAL = 15000; // in ms
let AppComponent = class AppComponent {
    constructor(authService, helperService) {
        this.authService = authService;
        this.helperService = helperService;
    }
    ngOnInit() {
        this.loginUser = new _common_models_loginUser__WEBPACK_IMPORTED_MODULE_2__["LoginUser"]();
        this.getFormData();
        this.initListener();
        this.initInterval();
    }
    getFormData() {
        this.loginUser = new _common_models_loginUser__WEBPACK_IMPORTED_MODULE_2__["LoginUser"]();
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
        localStorage.removeItem('NERP-token');
        //this.router.navigate(['/login']);
        window.location.href = '/Auth/Logout';
    }
    //getPermission(featureCode: string, accessType: string): boolean {
    //    return this.authService.getPermission(featureCode, accessType);
    //}
    getFeatureAccess(featureCode) {
        return this.authService.getFeatureAccess(featureCode);
    }
};
AppComponent.ctorParameters = () => [
    { type: _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppConfig = class AppConfig {
    constructor() {
        this.baseUrl = "";
        this.urls = {
            "Design": {
                getDesignsApi: "Designs/GetDesigns/",
                getDesignApi: "Designs/GetDesign/",
                saveDesignApi: "Designs/SaveDesign/",
                deleteDesignApi: "Designs/DeleteDesign/",
                deleteDocumentApi: "Designs/DeleteDocument/",
                exportDesignApi: "Designs/ExportDesign/"
            },
            "Routeware": {
                SortPoints: "http://183.82.114.169:4000/api/Routeware/SortPoints",
                GenerateMST: "http://183.82.114.169:4000/api/Routeware/GenerateMST",
                GenerateMSTRecursive: "http://183.82.114.169:4000/api/Routeware/GenerateMSTRecursive",
            },
        };
        this.settings = {
            "Region": 'Indonesia\\Jakarta',
            "MapCenter": [-6.14063, 106.734856]
        };
    }
};
AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppConfig);



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
/* harmony import */ var _dashboard_views_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/views/dashboard */ "./src/app/dashboard/views/dashboard.ts");
/* harmony import */ var _homepasses_homepass_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepasses/homepass.module */ "./src/app/homepasses/homepass.module.ts");
/* harmony import */ var _clusters_cluster_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clusters/cluster.module */ "./src/app/clusters/cluster.module.ts");
/* harmony import */ var _designs_design_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./designs/design.module */ "./src/app/designs/design.module.ts");
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_interceptors_cacheInterceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/interceptors/cacheInterceptor */ "./src/app/common/interceptors/cacheInterceptor.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _dashboard_views_dashboard__WEBPACK_IMPORTED_MODULE_9__["Dashboard"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["Routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _homepasses_homepass_module__WEBPACK_IMPORTED_MODULE_10__["HomepassModule"],
            _clusters_cluster_module__WEBPACK_IMPORTED_MODULE_11__["ClusterModule"],
            _designs_design_module__WEBPACK_IMPORTED_MODULE_12__["DesignModule"],
        ],
        providers: [
            _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _common_helper__WEBPACK_IMPORTED_MODULE_14__["Helper"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _common_interceptors_cacheInterceptor__WEBPACK_IMPORTED_MODULE_15__["CacheInterceptor"], multi: true }
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
        path: 'homepasses',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./homepasses/homepass.module */ "./src/app/homepasses/homepass.module.ts")).then(m => m.HomepassModule)
    },
    {
        path: 'clusters',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./clusters/cluster.module */ "./src/app/clusters/cluster.module.ts")).then(m => m.ClusterModule)
    },
    {
        path: 'designs',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./designs/design.module */ "./src/app/designs/design.module.ts")).then(m => m.DesignModule)
    }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


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

/***/ "./src/app/clusters/cluster.module.ts":
/*!********************************************!*\
  !*** ./src/app/clusters/cluster.module.ts ***!
  \********************************************/
/*! exports provided: ClusterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterModule", function() { return ClusterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _views_cluster_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/cluster-list */ "./src/app/clusters/views/cluster-list.ts");
/* harmony import */ var _views_cluster_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/cluster-details */ "./src/app/clusters/views/cluster-details.ts");
/* harmony import */ var _services_cluster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/cluster.service */ "./src/app/clusters/services/cluster.service.ts");
/* harmony import */ var _cluster_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cluster.routes */ "./src/app/clusters/cluster.routes.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");




//import { CheckboxModule } from 'primeng/checkbox';
//import { TreeModule } from 'primeng/tree';
//import { TreeTableModule } from 'primeng/treetable';






let ClusterModule = class ClusterModule {
};
ClusterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            //TreeTableModule,
            _cluster_routes__WEBPACK_IMPORTED_MODULE_8__["ClusterRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [
            _views_cluster_list__WEBPACK_IMPORTED_MODULE_5__["ClusterList"],
            _views_cluster_details__WEBPACK_IMPORTED_MODULE_6__["ClusterDetails"]
        ],
        providers: [
            _services_cluster_service__WEBPACK_IMPORTED_MODULE_7__["ClusterService"]
        ]
    })
], ClusterModule);



/***/ }),

/***/ "./src/app/clusters/cluster.routes.ts":
/*!********************************************!*\
  !*** ./src/app/clusters/cluster.routes.ts ***!
  \********************************************/
/*! exports provided: clusterRoutes, ClusterRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterRoutes", function() { return clusterRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterRouting", function() { return ClusterRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_cluster_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cluster-list */ "./src/app/clusters/views/cluster-list.ts");
/* harmony import */ var _views_cluster_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/cluster-details */ "./src/app/clusters/views/cluster-details.ts");




const clusterRoutes = [
    {
        path: 'clusters',
        children: [
            { path: '', component: _views_cluster_list__WEBPACK_IMPORTED_MODULE_2__["ClusterList"] },
            { path: 'details', component: _views_cluster_details__WEBPACK_IMPORTED_MODULE_3__["ClusterDetails"] },
            { path: 'details/:id', component: _views_cluster_details__WEBPACK_IMPORTED_MODULE_3__["ClusterDetails"] },
        ]
    },
];
const ClusterRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(clusterRoutes);


/***/ }),

/***/ "./src/app/clusters/services/cluster.service.ts":
/*!******************************************************!*\
  !*** ./src/app/clusters/services/cluster.service.ts ***!
  \******************************************************/
/*! exports provided: ClusterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterService", function() { return ClusterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ClusterService = class ClusterService {
    constructor(http) {
        this.http = http;
        this.getClustersApi = 'Clusters/GetClusters/';
        this.getClusterApi = 'Clusters/GetCluster/';
        this.saveClusterApi = 'Clusters/SaveCluster/';
        this.saveClustersApi = 'Clusters/SaveClusters/';
        this.deleteClusterApi = 'Clusters/DeleteCluster/';
    }
    getClusters(paginationRequest) {
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
        return this.http.post(this.getClustersApi, paginationRequest);
    }
    getCluster(clusterId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('clusterId', clusterId);
        return this.http.get(this.getClusterApi, { params });
    }
    saveCluster(cluster) {
        return this.http.post(this.saveClusterApi, cluster);
    }
    saveClusters(clusters) {
        return this.http.post(this.saveClustersApi, clusters);
    }
    deleteCluster(clusterId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('clusterId', clusterId);
        return this.http.delete(this.deleteClusterApi, { params });
    }
};
ClusterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClusterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ClusterService);



/***/ }),

/***/ "./src/app/clusters/views/cluster-details.ts":
/*!***************************************************!*\
  !*** ./src/app/clusters/views/cluster-details.ts ***!
  \***************************************************/
/*! exports provided: ClusterDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterDetails", function() { return ClusterDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_cluster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cluster.service */ "./src/app/clusters/services/cluster.service.ts");
/* harmony import */ var _homepasses_services_homepass_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../homepasses/services/homepass.service */ "./src/app/homepasses/services/homepass.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/geo/googleMapsHelper */ "./src/app/common/geo/googleMapsHelper.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _common_geo_geometry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/geo/geometry */ "./src/app/common/geo/geometry.ts");











let ClusterDetails = class ClusterDetails {
    constructor(location, route, httpClient, appConfig, clusterService, homepassService, helper) {
        this.location = location;
        this.route = route;
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.clusterService = clusterService;
        this.homepassService = homepassService;
        this.helper = helper;
        this.title = "New Cluster";
        this.tabTitle = "Add New";
        this.isNew = true;
        this.clusters = new Array();
        this.polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: false,
            draggable: false
        };
    }
    ngOnInit() {
        let location = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].getLatLng(this.appConfig.settings.MapCenter);
        this.map = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].initializeMap('clusterMap', location, 18, 21);
        this.drawingManager = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].drawingManagerTool(this.map, null, ['rectangle', 'polygon'], this.polyOptions);
        this.route.params.subscribe(params => {
            this.clusterId = params['id'];
            if (this.clusterId == null) {
                this.title = "New Cluster";
                this.isNew = true;
            }
            else {
                this.title = "Edit Cluster";
                this.tabTitle = "Edit Cluster";
                this.isNew = false;
                this.drawingManager.setMap(null);
            }
            this.getFormData(this.clusterId);
        });
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].addListener(this.drawingManager, 'overlaycomplete', (event) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.drawingManager.setDrawingMode(null);
            event.overlay.setOptions({ draggable: false });
            event.overlay.setOptions({ editable: false });
            let cluster = {
                name: "",
                code: "",
                description: "",
                geometry: null,
                homepasses: null,
                marker: event.overlay,
                allHomepasses: null
            };
            yield this.addHomepasses(cluster, event.type);
            this.clusters.push(cluster);
        }));
    }
    getFormData(clusterId) {
        this.clusterService.getCluster(clusterId).subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.cluster = null;
            if (resp.status.toLowerCase() == "error") {
                this.helper.showAlertMessage(resp.message, "error");
            }
            else {
                if (resp.data != null) {
                    var cluster = resp.data;
                    var polygon = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].createPolygon(cluster.geometry.coordinates, this.polyOptions);
                    polygon.setMap(this.map);
                    cluster.marker = polygon;
                    yield this.addHomepasses(cluster);
                    this.cluster = cluster;
                    this.clusters.push(this.cluster);
                    var latlngs = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].getLatLngsFromPolygon(cluster.geometry.coordinates);
                    _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].setBounds(latlngs, this.map);
                    //var center = GeoHelper.polygonCenter(this.cluster.geometry);
                    //this.clusterMap.setCenter({ lng: center[0], lat: center[1] });
                }
            }
            $("#ajax-loading").hide();
        }), (err) => {
            $("#ajax-loading").hide();
            this.cluster = null;
            let msg = `Unable to fetch cluster : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
        });
    }
    addHomepasses(cluster, drawingMode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let polygonArray;
            let radius = null;
            let center = null;
            if (drawingMode == 'rectangle') {
                polygonArray = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].boundsToPolygon(cluster.marker.getBounds());
            }
            else if (drawingMode == 'polygon') {
                polygonArray = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].pathArrayToPolygon(cluster.marker.getPath().getArray());
            }
            else {
                polygonArray = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].pathArrayToPolygon(cluster.marker.getPath().getArray());
            }
            //else if (drawingMode == 'circle') {
            //    center = [cluster.marker.center.lng(), cluster.marker.center.lat()];
            //    radius = cluster.marker.getRadius();
            //}
            cluster.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_10__["Polygon"](polygonArray);
            if (drawingMode == 'circle')
                cluster.allHomepasses = yield this.getHomepassesWithinRadius(center, radius);
            else
                cluster.allHomepasses = yield this.getHomepasses(cluster.geometry);
            this.addEventListners(cluster, drawingMode);
        });
    }
    getHomepassesWithinRadius(center, radius) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let homepasses = new Array();
            var resp = yield this.httpClient.post(this.homepassService.getHomepassesWithinRadiusApi, { Center: center, Radius: radius }).toPromise();
            if (resp.status.toLowerCase() != "error") {
                if (resp.data != null && resp.data.length > 0) {
                    homepasses = resp.data;
                }
            }
            return homepasses;
        });
    }
    getHomepasses(polygon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let homepasses = new Array();
            var resp = yield this.httpClient.post(this.homepassService.getHomepassesInPolygonApi, polygon).toPromise();
            if (resp.status.toLowerCase() != "error") {
                if (resp.data != null && resp.data.length > 0) {
                    homepasses = resp.data;
                }
            }
            return homepasses;
        });
    }
    addEventListners(cluster, drawingMode) {
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].addListener(cluster.marker, "rightclick", (event) => {
            if (cluster.marker.draggable == false) {
                cluster.marker.setOptions({ draggable: true, editable: true });
            }
            else {
                cluster.marker.setOptions({ draggable: false, editable: false });
            }
        });
        //GMapsHelper.addListener(cluster.marker, 'dragend', (event) => {
        //    cluster.marker.data.location.coordinates[0] = event.latLng.lng();
        //    cluster.marker.data.location.coordinates[1] = event.latLng.lat();
        //    this.cluster = cluster;
        //});
        //if (drawingMode == 'rectangle') {
        //    GMapsHelper.addListener(cluster.marker.getBounds(), 'set_at', async () => {
        //        let polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
        //        cluster.geometry = new Polygon(polygonArray);
        //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
        //    });
        //    GMapsHelper.addListener(cluster.marker.getBounds(), 'insert_at', async () => {
        //        let polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
        //        cluster.geometry = new Polygon(polygonArray);
        //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
        //    });
        //    GMapsHelper.addListener(cluster.marker.getBounds(), 'remove_at', async () => {
        //        let polygonArray = GMapsHelper.boundsToPolygon(cluster.marker.getBounds());
        //        cluster.geometry = new Polygon(polygonArray);
        //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
        //    });
        //}
        //else {
        //    GMapsHelper.addListener(cluster.marker.getPath(), 'set_at', async () => {
        //        let polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
        //        cluster.geometry = new Polygon(polygonArray);
        //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
        //    });
        //    GMapsHelper.addListener(cluster.marker.getPath(), 'insert_at', async () => {
        //        let polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
        //        cluster.geometry = new Polygon(polygonArray);
        //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
        //    });
        //    GMapsHelper.addListener(cluster.marker.getPath(), 'remove_at', async () => {
        //        let polygonArray = GMapsHelper.pathArrayToPolygon(cluster.marker.getPath().getArray());
        //        cluster.geometry = new Polygon(polygonArray);
        //        cluster.allHomepasses = await this.getHomepasses(cluster.geometry);
        //    });
        //}
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].addListener(cluster.marker, 'click', (event) => {
            this.cluster = cluster;
        });
    }
    stringify(obj) {
        return JSON.stringify(obj);
    }
    removeUploadedCluster(index) {
        var cluster = this.clusters[index];
        if (cluster.marker)
            cluster.marker.setMap(null);
        this.clusters.splice(index, 1);
    }
    isAllSelected() {
        const numSelected = this.cluster.homepasses ? this.cluster.homepasses.length : 0;
        const numRows = this.cluster.allHomepasses.length;
        return numSelected === numRows;
    }
    toggleSelection(homepass) {
        var index = -1;
        if (this.cluster.homepasses)
            index = this.cluster.homepasses.findIndex(x => x == homepass.id);
        else
            this.cluster.homepasses = [];
        if (index == -1)
            this.cluster.homepasses.push(homepass.id);
        else
            this.cluster.homepasses.splice(index, 1);
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.cluster.homepasses = [];
        }
        else {
            this.cluster.homepasses = [];
            this.cluster.allHomepasses.forEach(x => this.cluster.homepasses.push(x.id));
        }
    }
    fileChangeEvent(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        var fileExt = file.name.split('.').pop().toLowerCase();
        reader.onload = (e) => {
            try {
                if (fileExt == "kml") {
                    let kml = reader.result;
                    let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
                    this.populateClusters(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result).then((geojson) => {
                        this.populateClusters(geojson.features);
                    });
                }
            }
            catch (e) {
                this.helper.showAlertMessage("Could not parse the file.", "error");
            }
        };
        if (fileExt == "csv" || fileExt == "kml")
            reader.readAsText(file);
        else if (fileExt == "zip")
            reader.readAsArrayBuffer(file);
        else
            this.helper.showAlertMessage("Invalid file format", "error");
    }
    populateClusters(features) {
        this.clusters.length = 0;
        let clusters = new Array();
        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;
            let cluster = {
                name: properties.name,
                code: properties.name,
                description: "",
                geometry: features[i].geometry,
                homepasses: null,
                marker: null,
                allHomepasses: null
            };
            var polygon = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_8__["GMapsHelper"].createPolygon(cluster.geometry.coordinates, this.polyOptions);
            polygon.setMap(this.map);
            cluster.marker = polygon;
            clusters.push(cluster);
            this.addHomepasses(cluster);
        }
        this.clusters = clusters;
    }
    deleteCluster() {
        var index = this.clusters.findIndex(x => x.geometry.coordinates[0] == this.cluster.geometry.coordinates[0] && x.geometry.coordinates[1] == this.cluster.geometry.coordinates[1]);
        if (this.clusters[index].marker)
            this.clusters[index].marker.setMap(null);
        this.clusters.splice(index, 1);
        this.cluster = null;
        if (this.isNew == false) {
            this.clusterService.deleteCluster(this.cluster.id).subscribe(resp => {
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    this.helper.showAlertMessage("Cluster successfully deleted", "success");
                    this.goBack();
                }
            }, (err) => {
                this.helper.showAlertMessage("Unable to delete cluster information.", "error");
            });
        }
    }
    save() {
        var errorMessages = this.validateCluster(this.clusters);
        if (errorMessages.length == 0) {
            this.clusters.forEach(x => { x.marker = null; x.allHomepasses = null; });
            this.clusterService.saveClusters(this.clusters).subscribe(resp => {
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    this.helper.showAlertMessage("Cluster information saved", "success");
                    this.goBack();
                }
            }, (err) => {
                this.helper.showAlertMessage("Unable to save cluster information.", "error");
            });
        }
        else {
            var errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }
    validateCluster(clusters) {
        var errorMessages = [];
        this.clusters.forEach(cluster => {
            if (cluster.name == null || cluster.name.trim() == '')
                errorMessages.push("Cluster Name cannot be empty");
            if (cluster.code == null || cluster.code.trim() == '')
                errorMessages.push("Cluster Code cannot be empty");
        });
        return errorMessages;
    }
    goBack() {
        this.location.back();
    }
};
ClusterDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_9__["AppConfig"] },
    { type: _services_cluster_service__WEBPACK_IMPORTED_MODULE_5__["ClusterService"] },
    { type: _homepasses_services_homepass_service__WEBPACK_IMPORTED_MODULE_6__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"] }
];
ClusterDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cluster-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clusters/views/cluster-details.html")).default,
        providers: [_services_cluster_service__WEBPACK_IMPORTED_MODULE_5__["ClusterService"]],
    })
], ClusterDetails);



/***/ }),

/***/ "./src/app/clusters/views/cluster-list.ts":
/*!************************************************!*\
  !*** ./src/app/clusters/views/cluster-list.ts ***!
  \************************************************/
/*! exports provided: ClusterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterList", function() { return ClusterList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cluster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cluster.service */ "./src/app/clusters/services/cluster.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let ClusterList = class ClusterList {
    constructor(clusterService, helper) {
        this.clusterService = clusterService;
        this.helper = helper;
        this.clusters = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Code', label: 'Code', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Clusters...";
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
        this.clusterService.getClusters(paginationRequest).subscribe(resp => {
            this.clusters = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.clusters = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered clusters.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.clusters = null;
            let msg = `Unable to fetch clusters : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching clusters.";
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
    delete(cluster) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Cluster</b>",
            overlay: false,
            content: "Do you want to delete cluster - " + cluster.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.clusterService.deleteCluster(cluster.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Cluster deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting cluster", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting cluster", "error");
                });
            }
        }).open();
    }
};
ClusterList.ctorParameters = () => [
    { type: _services_cluster_service__WEBPACK_IMPORTED_MODULE_2__["ClusterService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
ClusterList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cluster-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clusters/views/cluster-list.html")).default
    })
], ClusterList);



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

/***/ "./src/app/common/geo/drawingMode.ts":
/*!*******************************************!*\
  !*** ./src/app/common/geo/drawingMode.ts ***!
  \*******************************************/
/*! exports provided: DrawingMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingMode", function() { return DrawingMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DrawingMode;
(function (DrawingMode) {
    DrawingMode[DrawingMode["CIRCLE"] = 0] = "CIRCLE";
    DrawingMode[DrawingMode["MARKER"] = 1] = "MARKER";
    DrawingMode[DrawingMode["POLYGON"] = 2] = "POLYGON";
    DrawingMode[DrawingMode["POLYLINE"] = 3] = "POLYLINE";
    DrawingMode[DrawingMode["RECTANGLE"] = 4] = "RECTANGLE";
})(DrawingMode || (DrawingMode = {}));


/***/ }),

/***/ "./src/app/common/geo/geoHelper.ts":
/*!*****************************************!*\
  !*** ./src/app/common/geo/geoHelper.ts ***!
  \*****************************************/
/*! exports provided: GeoHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoHelper", function() { return GeoHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./src/app/common/helper.ts");



class GeoHelper {
    ///**
    // * Get the distance between two coordinates.
    // * @param start Starting coordinates.
    // * @param end Ending coordinates.
    // * @param unit Unit of distance returned, defaults to Km.
    // * @returns The distance between two coordinates.
    // */
    //static distance(start: LatLng, end: LatLng, unit: string = 'km'): number {
    //    const startValid: Error = this.validateCoordinates(start);
    //    if (startValid instanceof Error) { throw new Error('Start coordinates: ' + startValid.message); }
    //    const endValid: Error = this.validateCoordinates(end);
    //    if (endValid instanceof Error) { throw new Error('End coordinates: ' + endValid.message); }
    //    const radius: number = (unit.toLowerCase() === 'miles') ? 3963 : 6371;
    //    const dLat: number = this.toRad(end.lat - start.lat);
    //    const dLon: number = this.toRad(end.lng - start.lng);
    //    const lat1: number = this.toRad(start.lat);
    //    const lat2: number = this.toRad(end.lat);
    //    const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    //    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //    return (radius * c);
    //}
    //static toRad(degrees: number): number {
    //    return (degrees * Math.PI / 180);
    //}
    static validateCoordinates(coordinates) {
        const error = [];
        if (coordinates.lat > 90) {
            error.push('Your latitude is greater than 90°');
        }
        if (coordinates.lat < -90) {
            error.push('Your latitude is less than -90°');
        }
        if (coordinates.lng > 180) {
            error.push('Your longitude is greater than 180°');
        }
        if (coordinates.lng < -180) {
            error.push('Your longitude is less than -180°');
        }
        if (error.length !== 0) {
            return new Error(error.join(' '));
        }
    }
    static convertToPosition(lngLat) {
        if (lngLat == null)
            return null;
        return { lng: lngLat[0], lat: lngLat[1] };
    }
    static getBrowserLocation(defaultLatLng) {
        var options = { enableHighAccuracy: true, maximumAge: 75000 };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                return { lat: position.coords.latitude, lng: position.coords.longitude };
            });
        }
        else {
            return defaultLatLng;
        }
        return defaultLatLng;
    }
    //getClusterCentroid(cluster: Cluster): Position {
    //    if (0 === cluster.points.length) {
    //        return cluster.centroid;
    //    }
    //    const centroid = cluster.points[0].concat();
    //    for (let i = 1; i < cluster.points.length; i++) {
    //        for (let d = 0; d < centroid.length; d++) {
    //            centroid[d] += cluster.points[i][d];
    //        }
    //    }
    //    for (let d = 0; d < centroid.length; d++) {
    //        centroid[d] /= cluster.points.length;
    //    }
    //    return centroid;
    //}
    //static getCentroid(points: Position[]): Position {
    //    const centroid = points[0].concat();
    //    for (let i = 1; i < points.length; i++) {
    //        for (let d = 0; d < centroid.length; d++) {
    //            centroid[d] += points[i][d];
    //        }
    //    }
    //    for (let d = 0; d < centroid.length; d++) {
    //        centroid[d] /= points.length;
    //    }
    //    return centroid;
    //}
    /**
    * Get the distance between two coordinates in Kilometers.
    * @param start Starting coordinates.
    * @param end Ending coordinates.
    * @returns The distance between two coordinates.
    */
    static distance(start, end) {
        let from = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["point"](start);
        let to = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["point"](end);
        return _turf_turf__WEBPACK_IMPORTED_MODULE_1__["distance"](from, to, { units: "kilometers" });
    }
    static getLength(points) {
        var line = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineString"](points);
        var length = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["length"](line, { units: 'kilometers' });
        return length;
    }
    static polygonCenter(polygon) {
        var turfPolygon = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon.coordinates);
        var centroid = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["centroid"](turfPolygon);
        return centroid.geometry.coordinates;
    }
    static center(geoNodes) {
        var featureCollection = GeoHelper.getFeatureCollection(geoNodes);
        var center = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["center"](featureCollection);
        return center.geometry.coordinates;
    }
    static clustersKmeans(geoNodes, numberOfClusters, level, levelName) {
        var featureCollection = GeoHelper.getFeatureCollection(geoNodes);
        var clustered = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["clustersKmeans"](featureCollection, { numberOfClusters: numberOfClusters });
        var tempClusters = new Array();
        _turf_turf__WEBPACK_IMPORTED_MODULE_1__["clusterEach"](clustered, 'cluster', (cluster, clusterValue, currentIndex) => {
            let points = [];
            let center = null;
            let connections = 0;
            cluster.features.forEach(x => {
                center = x.properties.centroid;
                connections += x.properties.connections;
                points.push({ id: x.properties.id, level: x.properties.level, coordinates: x.geometry.coordinates, connections: x.properties.connections, children: x.properties.children });
            });
            tempClusters.push({ id: _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].generateObjectId(), level: level, levelName: levelName, coordinates: center, connections: connections, children: points });
        });
        return tempClusters;
    }
    static getPointAtDistance(points, distance) {
        var line = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineString"](points);
        var along = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["along"](line, distance, { units: "kilometers" });
        return along.geometry.coordinates;
    }
    static getPointsAtDistance(points, distance) {
        let intervalPoints = new Array();
        var line = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineString"](points);
        var chunk = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineChunk"](line, distance, { units: "kilometers" });
        //Add first point
        intervalPoints.push(chunk.features[0].geometry.coordinates[0]);
        //Add last points
        chunk.features.forEach(x => {
            let lIndex = x.geometry.coordinates.length - 1;
            intervalPoints.push(x.geometry.coordinates[lIndex]);
        });
        return intervalPoints;
    }
    static lineChunk(points, distance) {
        let intervalPoints = new Array();
        var line = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineString"](points);
        var chunk = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineChunk"](line, distance, { units: "kilometers" });
        //Add last points
        chunk.features.forEach(x => {
            intervalPoints.push(x.geometry.coordinates);
        });
        return intervalPoints;
    }
    static cleanLineCoordinates(points) {
        var line = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineString"](points);
        return _turf_turf__WEBPACK_IMPORTED_MODULE_1__["cleanCoords"](line).geometry.coordinates;
    }
    static cleanMultiPointCoordinates(points) {
        var multiPoint = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["multiPoint"](points);
        return _turf_turf__WEBPACK_IMPORTED_MODULE_1__["cleanCoords"](multiPoint).geometry.coordinates;
    }
    static pointToLineDistance(point, line) {
        var distance = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["pointToLineDistance"](point, line, { units: 'kilometers' });
        return distance;
    }
    static nearestPointOnLine(point, line) {
        var lineStr = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["lineString"](line);
        var nearestPoint = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["nearestPointOnLine"](lineStr, point, { units: 'kilometers' });
        return nearestPoint.geometry.coordinates;
    }
    static nearestPoint(point, geoNodes) {
        var featureCollection = GeoHelper.getFeatureCollection(geoNodes);
        var nearestPoint = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["nearestPoint"](point, featureCollection);
        return geoNodes.find(x => x.id == nearestPoint.properties.id);
    }
    static nearestPoint2(point, points) {
        var features = new Array();
        points.forEach(x => { features.push(_turf_turf__WEBPACK_IMPORTED_MODULE_1__["point"](x)); });
        var featureCollection = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["featureCollection"](features);
        var nearestPoint = _turf_turf__WEBPACK_IMPORTED_MODULE_1__["nearestPoint"](point, featureCollection);
        return nearestPoint.geometry.coordinates;
    }
    static getFeatureCollection(geoNodes) {
        var features = new Array();
        geoNodes.forEach(x => { features.push(_turf_turf__WEBPACK_IMPORTED_MODULE_1__["point"](x.coordinates, { 'id': x.id, 'level': x.level, 'connections': x.connections, 'children': x.children })); });
        return _turf_turf__WEBPACK_IMPORTED_MODULE_1__["featureCollection"](features);
    }
}


/***/ }),

/***/ "./src/app/common/geo/geoNode.ts":
/*!***************************************!*\
  !*** ./src/app/common/geo/geoNode.ts ***!
  \***************************************/
/*! exports provided: GeoNode, Segment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoNode", function() { return GeoNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return Segment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GeoNode {
    constructor(id, coordinates) {
        //if (id == null || id == "")
        //    id = Helper.generateObjectId();
        this.coordinates = coordinates;
    }
}
class Segment {
}


/***/ }),

/***/ "./src/app/common/geo/geometry.ts":
/*!****************************************!*\
  !*** ./src/app/common/geo/geometry.ts ***!
  \****************************************/
/*! exports provided: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiPoint", function() { return MultiPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineString", function() { return LineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLineString", function() { return MultiLineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiPolygon", function() { return MultiPolygon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Point {
    constructor(coordinates) {
        this.type = "Point";
        this.coordinates = coordinates;
    }
}
class MultiPoint {
    constructor(coordinates) {
        this.type = "MultiPoint";
        this.coordinates = coordinates;
    }
}
class LineString {
    constructor(coordinates) {
        this.type = "LineString";
        this.coordinates = coordinates;
    }
}
class MultiLineString {
    constructor() {
        this.type = "MultiLineString";
    }
}
class Polygon {
    constructor(coordinates) {
        this.type = "Polygon";
        this.coordinates = coordinates;
    }
}
class MultiPolygon {
    constructor(coordinates) {
        this.type = "MultiPolygon";
        this.coordinates = coordinates;
    }
}
//export enum GeoJsonObjectType {
//    Feature = 0,
//    FeatureCollection = 1,
//    GeometryCollection = 2,
//    LineString = 3,
//    MultiLineString = 4,
//    MultiPoint = 5,
//    MultiPolygon = 6,
//    Point = 7,
//    Polygon = 8
//}


/***/ }),

/***/ "./src/app/common/geo/googleMapsHelper.ts":
/*!************************************************!*\
  !*** ./src/app/common/geo/googleMapsHelper.ts ***!
  \************************************************/
/*! exports provided: GMapsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapsHelper", function() { return GMapsHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _drawingMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawingMode */ "./src/app/common/geo/drawingMode.ts");
/* harmony import */ var _geoHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geoHelper */ "./src/app/common/geo/geoHelper.ts");



class GMapsHelper {
    static initializeMap(mapElementId, mapCenter, zoom, maxZoom) {
        if (mapCenter === null || mapCenter === "")
            mapCenter = _geoHelper__WEBPACK_IMPORTED_MODULE_2__["GeoHelper"].getBrowserLocation({ lat: 18.5245649, lng: 73.7228783 });
        var mapOptions = {
            zoom: zoom,
            maxZoom: maxZoom,
            center: mapCenter,
            fullscreenControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            controlSize: 30,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: true,
            //mapTypeControlOptions: {
            //    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            //    position: google.maps.ControlPosition.LEFT_BOTTOM
            //},
            styles: [
                {
                    "featureType": "water",
                    "stylers": [
                        { "saturation": 43 },
                        { "lightness": -11 },
                        { "hue": "#0088ff" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "hue": "#ff0000" },
                        { "saturation": -100 },
                        { "lightness": 99 }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "color": "#808080" },
                        { "lightness": 54 }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#ece2d9" }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "color": "#ccdca1" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "#767676" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "color": "#ffffff" }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "visibility": "on" },
                        { "color": "#b8cb93" }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        { "visibility": "on" }
                    ]
                },
                {
                    "featureType": "poi.sports_complex",
                    "stylers": [
                        { "visibility": "on" }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "stylers": [
                        { "visibility": "on" }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        { "visibility": "simplified" }
                    ]
                }
            ]
        };
        // Get all html elements for map
        var mapElement = document.getElementById(mapElementId);
        // Create the Google Map using elements
        return new google.maps.Map(mapElement, mapOptions);
    }
    static drawingManagerTool(map, strDrawingMode, drawingControlModes, drawingOption) {
        var drawingManager = new google.maps.drawing.DrawingManager();
        var drawingMode = GMapsHelper.getDrawingMode(strDrawingMode);
        drawingManager.setOptions({
            drawingMode: drawingMode,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                drawingModes: drawingControlModes
            },
            options: drawingOption
        });
        drawingManager.setMap(map);
        return drawingManager;
    }
    static addListener(entity, clickType, callback) {
        google.maps.event.addListener(entity, clickType, function (event) {
            if (typeof callback === "function")
                callback(event);
        });
    }
    static getDrawingMode(drawingMode) {
        switch (drawingMode) {
            case _drawingMode__WEBPACK_IMPORTED_MODULE_1__["DrawingMode"].POLYGON:
                return google.maps.drawing.OverlayType.POLYGON;
            case _drawingMode__WEBPACK_IMPORTED_MODULE_1__["DrawingMode"].CIRCLE:
                return google.maps.drawing.OverlayType.CIRCLE;
            case _drawingMode__WEBPACK_IMPORTED_MODULE_1__["DrawingMode"].POLYLINE:
                return google.maps.drawing.OverlayType.POLYLINE;
            case _drawingMode__WEBPACK_IMPORTED_MODULE_1__["DrawingMode"].RECTANGLE:
                return google.maps.drawing.OverlayType.RECTANGLE;
            case _drawingMode__WEBPACK_IMPORTED_MODULE_1__["DrawingMode"].MARKER:
                return google.maps.drawing.OverlayType.MARKER;
            default:
        }
    }
    static createPolygon(coordinates, polyOptions) {
        let tempCoordinates = GMapsHelper.getLatLngsFromPolygon(coordinates);
        return new google.maps.Polygon({
            paths: tempCoordinates,
            strokeWeight: polyOptions.strokeWeight,
            fillOpacity: polyOptions.fillOpacity,
            editable: polyOptions.editable,
            draggable: polyOptions.draggable
        });
    }
    static getLatLngsFromPolygon(coordinates) {
        var tempCoordinates = [];
        coordinates[0].forEach(x => { tempCoordinates.push({ lng: x[0], lat: x[1] }); });
        tempCoordinates.splice(tempCoordinates.length - 1, 1);
        return tempCoordinates;
    }
    static setBounds(latlngs, map) {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < latlngs.length; i++) {
            bounds.extend(latlngs[i]);
        }
        map.fitBounds(bounds);
    }
    static getLatLng(latlng) {
        return new google.maps.LatLng(latlng[0], latlng[1]);
    }
    static boundsToPolygon(bounds) {
        let northEastLatLngs = [];
        let southWestLatLngs = [];
        let northWestLatLngs = [];
        let southEastLatLngs = [];
        northEastLatLngs[0] = bounds.getNorthEast().lng();
        northEastLatLngs[1] = bounds.getNorthEast().lat();
        northWestLatLngs[0] = bounds.getSouthWest().lng();
        northWestLatLngs[1] = bounds.getNorthEast().lat();
        southWestLatLngs[0] = bounds.getSouthWest().lng();
        southWestLatLngs[1] = bounds.getSouthWest().lat();
        southEastLatLngs[0] = bounds.getNorthEast().lng();
        southEastLatLngs[1] = bounds.getSouthWest().lat();
        var tempCoordinates = [];
        tempCoordinates.push(northEastLatLngs);
        tempCoordinates.push(northWestLatLngs);
        tempCoordinates.push(southWestLatLngs);
        tempCoordinates.push(southEastLatLngs);
        tempCoordinates.push(northEastLatLngs);
        return [tempCoordinates];
    }
    static pathArrayToPolygon(pathArray) {
        var tempCoordinates = [];
        pathArray.forEach(x => { tempCoordinates.push([x.lng(), x.lat()]); });
        tempCoordinates.push([pathArray[0].lng(), pathArray[0].lat()]);
        return [tempCoordinates];
    }
    static getPointsAtDistance(points, distance) {
        let path = [];
        points.forEach(x => { path.push({ lng: x[0], lat: x[1] }); });
        return new google.maps.Polyline({
            path: path
        }).GetPointsAtDistance(distance);
    }
}


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

/***/ "./src/app/common/models/document.ts":
/*!*******************************************!*\
  !*** ./src/app/common/models/document.ts ***!
  \*******************************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Document {
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

/***/ "./src/app/common/models/supplier.ts":
/*!*******************************************!*\
  !*** ./src/app/common/models/supplier.ts ***!
  \*******************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Supplier {
}


/***/ }),

/***/ "./src/app/components/cf-group/cf-group.ts":
/*!*************************************************!*\
  !*** ./src/app/components/cf-group/cf-group.ts ***!
  \*************************************************/
/*! exports provided: CustomFieldsGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsGroup", function() { return CustomFieldsGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");



let CustomFieldsGroup = class CustomFieldsGroup {
    constructor(helper) {
        this.helper = helper;
        this.customFields = new Array();
        this.accordionId = "accordion";
    }
    ngOnInit() {
        this.customFieldGroups = this.getCustomFieldGroups();
    }
    getCustomFieldGroups() {
        let customFieldGroups = null;
        if (this.customFields && this.customFields.length > 0) {
            customFieldGroups = [];
            let customFields = this.customFields;
            //let groups = Helper.groupBy(customFields, 'category');
            //for (var i in groups) {
            //    customFieldGroups.push(groups[i]);
            //}
            customFieldGroups = _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].groupBy(customFields, 'category');
        }
        return customFieldGroups;
    }
};
CustomFieldsGroup.ctorParameters = () => [
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomFieldsGroup.prototype, "customFields", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomFieldsGroup.prototype, "accordionId", void 0);
CustomFieldsGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cf-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cf-group.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cf-group/cf-group.html")).default
    })
], CustomFieldsGroup);



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

/***/ "./src/app/designs/components/dzn-accessories.ts":
/*!*******************************************************!*\
  !*** ./src/app/designs/components/dzn-accessories.ts ***!
  \*******************************************************/
/*! exports provided: DesignAccessories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignAccessories", function() { return DesignAccessories; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _accessories_services_accessory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../accessories/services/accessory.service */ "./src/app/accessories/services/accessory.service.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let DesignAccessories = class DesignAccessories {
    //designAccessories: any;
    constructor(accessoryService) {
        this.accessoryService = accessoryService;
        this.accessorySettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["AccessorySettings"]();
        this.allDesigns = new Array();
        this.accessoriesMaster = new Array();
    }
    ngOnChanges(changes) {
        if (this.parentEntityType)
            this.getMasterAccessories(this.parentEntityType);
    }
    getMasterAccessories(parentEntityType) {
        //this.accessorySettings.existingAccessories = null;
        var paginationRequest = {
            page: null,
            pageSize: null,
            filter: {
                conditionOperator: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["ConditionOperator"].AND,
                filters: [{
                        propertyName: "ParentEntityType",
                        operator: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["Operator"].equals,
                        value: parentEntityType.toLowerCase(),
                        caseSensitive: false
                    }]
            },
            order: {
                orderByProperty: "UpdatedDate",
                sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending
            }
        };
        this.accessoryService.getAccessories(paginationRequest).subscribe(resp => {
            this.accessoriesMaster = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.accessoriesMaster = resp.data;
                }
                else {
                    this.statusMessage = "There are no registered accessories.";
                }
            }
        }, (err) => {
            this.accessoriesMaster = null;
            this.statusMessage = "Error fetching accessories.";
        });
    }
    //fileChangeEvent(event: any) {
    //    var files = event.target.files;
    //    //this.populateDummyData();
    //}
    addAccessory() {
        if (this.accessorySettings.accessories == null)
            this.accessorySettings.accessories = new Array();
        var index = this.accessorySettings.accessories.findIndex(x => x.id == this.selectedAccessory.id);
        if (index == -1)
            this.accessorySettings.accessories.push(this.selectedAccessory);
    }
    //getName(id: string) {
    //    let accessory = this.accessoriesMaster.find(x => x.id == id);
    //    if (accessory)
    //        return accessory.name;
    //    else
    //        return '';
    //}
    removeAccessory(index) {
        this.accessorySettings.accessories.splice(index, 1);
    }
};
DesignAccessories.ctorParameters = () => [
    { type: _accessories_services_accessory_service__WEBPACK_IMPORTED_MODULE_3__["AccessoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignAccessories.prototype, "accessorySettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignAccessories.prototype, "parentEntityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignAccessories.prototype, "allDesigns", void 0);
DesignAccessories = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-accessories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-accessories.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-accessories.html")).default
    })
], DesignAccessories);



/***/ }),

/***/ "./src/app/designs/components/dzn-bom.ts":
/*!***********************************************!*\
  !*** ./src/app/designs/components/dzn-bom.ts ***!
  \***********************************************/
/*! exports provided: DesignBOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignBOM", function() { return DesignBOM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/design.service */ "./src/app/designs/services/design.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);









let DesignBOM = class DesignBOM {
    constructor(route, designService, helper) {
        this.route = route;
        this.designService = designService;
        this.helper = helper;
        //@Input() public boq: Costing[] = new Array<Costing>();
        this.boq = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Design"]();
        this.cableGroups = new Array();
        this.chamberGroups = new Array();
        this.ductGroups = new Array();
        this.odfGroups = new Array();
        this.poleGroups = new Array();
        this.splitterGroups = new Array();
        this.spliceClosureGroups = new Array();
        this.accessoryGroups = new Array();
        this.civilworkGroups = new Array();
        this.cableSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.chamberSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.ductSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.odfSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.poleSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.splitterSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.spliceClosureSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.accessorySummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.civilworkSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.excel = [];
        this.statusMessage = "";
        this.title = 'Excel';
    }
    ExportTOExcel() {
        var ref_this = jquery__WEBPACK_IMPORTED_MODULE_7__("ul#myNavTabs1 li.active").text();
        //if (ref_this == "Summary") {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].table_to_sheet(this.TABLE.nativeElement);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
        const ws1 = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].table_to_sheet(this.TABLE1.nativeElement);
        xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(wb, ws1, 'Sheet2');
        xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](wb, 'Summary.xlsx');
        //} else {
        //    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE1.nativeElement);
        //    const wb: XLSX.WorkBook = XLSX.utils.book_new();
        //    XLSX.utils.book_append_sheet(wb, ws, 'Sheet2');
        //    XLSX.writeFile(wb, 'Details.xlsx');
        //}
    }
    ExportTOKml() {
        this.designService.exportDesign(this.boq.id).subscribe(resp => {
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
            jquery__WEBPACK_IMPORTED_MODULE_7__("#ajax-loading").hide();
        }, (err) => {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#ajax-loading").hide();
            //this.designs = null;
            let msg = `Unable to export designs : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error export designs.";
        });
    }
    ngOnInit() {
        this.generateBOQ();
    }
    ngOnChanges(changes) {
        this.generateBOQ();
    }
    reset() {
        this.cableSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.chamberSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.ductSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.odfSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.poleSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.splitterSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.spliceClosureSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.accessorySummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.civilworkSummary = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Costing"]();
        this.totalMaterialCost = 0;
        this.totalServiceCost = 0;
        this.totalCost = 0;
    }
    stringify(obj) {
        return JSON.stringify(obj);
    }
    generateBOQ() {
        this.reset();
        if (this.boq.boq == null)
            return;
        let cables = this.boq.boq.filter(x => x.entityType == "Cable");
        this.cableGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(cables, 'level');
        cables.forEach(x => {
            this.cableSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.cableSummary.serviceCost += (x.serviceCost * x.quantity);
            this.cableSummary.quantity += (x.quantity * 1000);
            this.cableSummary.units = x.units;
        });
        let chambers = this.boq.boq.filter(x => x.entityType == "Chamber");
        this.chamberGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(chambers, 'level');
        chambers.forEach(x => {
            this.chamberSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.chamberSummary.serviceCost += (x.serviceCost * x.quantity);
            this.chamberSummary.quantity += x.quantity;
            this.chamberSummary.units = x.units;
        });
        let ducts = this.boq.boq.filter(x => x.entityType == "Duct");
        this.ductGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(ducts, 'level');
        ducts.forEach(x => {
            this.ductSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.ductSummary.serviceCost += (x.serviceCost * x.quantity);
            this.ductSummary.quantity += x.quantity;
            this.ductSummary.units = x.units;
        });
        let odfs = this.boq.boq.filter(x => x.entityType == "ODF");
        this.odfGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(odfs, 'level');
        odfs.forEach(x => {
            this.odfSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.odfSummary.serviceCost += (x.serviceCost * x.quantity);
            this.odfSummary.quantity += x.quantity;
            this.odfSummary.units = x.units;
        });
        let poles = this.boq.boq.filter(x => x.entityType == "Pole");
        this.poleGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(poles, 'level');
        poles.forEach(x => {
            this.poleSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.poleSummary.serviceCost += (x.serviceCost * x.quantity);
            this.poleSummary.quantity += x.quantity;
            this.poleSummary.units = x.units;
        });
        let splitters = this.boq.boq.filter(x => x.entityType == "Splitter");
        this.splitterGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(splitters, 'level');
        splitters.forEach(x => {
            this.splitterSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.splitterSummary.serviceCost += (x.serviceCost * x.quantity);
            this.splitterSummary.quantity += x.quantity;
            this.splitterSummary.units = x.units;
        });
        let spliceClosures = this.boq.boq.filter(x => x.entityType == "SpliceClosure");
        this.spliceClosureGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(spliceClosures, 'level');
        spliceClosures.forEach(x => {
            this.spliceClosureSummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.spliceClosureSummary.serviceCost += (x.serviceCost * x.quantity);
            this.spliceClosureSummary.quantity += x.quantity;
            this.spliceClosureSummary.units = x.units;
        });
        let accessories = this.boq.boq.filter(x => x.entityType == "Accessory");
        this.accessoryGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(accessories, 'level');
        accessories.forEach(x => {
            this.accessorySummary.materialCost += (x.materialCost * x.quantity);
            if (x.serviceCost)
                this.accessorySummary.serviceCost += (x.serviceCost * x.quantity);
            this.accessorySummary.quantity += x.quantity;
            this.accessorySummary.units = x.units;
        });
        let civilworks = this.boq.boq.filter(x => x.entityType == "Civilwork");
        this.civilworkGroups = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].groupBy(civilworks, 'level');
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
};
DesignBOM.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignBOM.prototype, "boq", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TABLE', { static: false })
], DesignBOM.prototype, "TABLE", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TABLE1', { static: false })
], DesignBOM.prototype, "TABLE1", void 0);
DesignBOM = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-bom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-bom.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-bom.html")).default
    })
], DesignBOM);



/***/ }),

/***/ "./src/app/designs/components/dzn-bookingIds.ts":
/*!******************************************************!*\
  !*** ./src/app/designs/components/dzn-bookingIds.ts ***!
  \******************************************************/
/*! exports provided: DesignBookingIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignBookingIds", function() { return DesignBookingIds; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");



let DesignBookingIds = class DesignBookingIds {
    constructor() {
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Design"]();
        this.bookingIds = new Array();
    }
    ngOnInit() {
        if (this.design.bookingIds == null || this.design.bookingIds.length == 0) {
            this.design.bookingIds.push({ entityType: "Cable", format: "Cable_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Chamber", format: "Chamber_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Duct", format: "Duct_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "ODF", format: "ODF_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Pole", format: "Pole_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "SpliceClosure", format: "SpliceClosure_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
            this.design.bookingIds.push({ entityType: "Splitter", format: "Splitter_{code}", sequenceStart: 1, sequenceEnd: null, step: 1 });
        }
    }
    clearBookingId(index) {
        let item = this.design.bookingIds[index];
        item.format = "";
        item.sequenceStart = null;
        item.sequenceEnd = null;
        item.step = 1;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignBookingIds.prototype, "design", void 0);
DesignBookingIds = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-bookingIds',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-bookingIds.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-bookingIds.html")).default
    })
], DesignBookingIds);



/***/ }),

/***/ "./src/app/designs/components/dzn-cable.ts":
/*!*************************************************!*\
  !*** ./src/app/designs/components/dzn-cable.ts ***!
  \*************************************************/
/*! exports provided: DesignCable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignCable", function() { return DesignCable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _entities_services_cable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/services/cable.service */ "./src/app/entities/services/cable.service.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _entities_models_chamber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/models/chamber */ "./src/app/entities/models/chamber.ts");
/* harmony import */ var _entities_models_pole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/models/pole */ "./src/app/entities/models/pole.ts");
/* harmony import */ var _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../entities/services/chamber.service */ "./src/app/entities/services/chamber.service.ts");









let DesignCable = class DesignCable {
    constructor(cableService, poleService, chamberService) {
        this.cableService = cableService;
        this.poleService = poleService;
        this.chamberService = chamberService;
        this.cableSettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["CableSettings"]();
        this.allDesigns = new Array();
        this.cablesMaster = new Array();
        this.polesMaster = new Array();
        this.chambersMaster = new Array();
        this.statusMessage = "No cable selected";
    }
    ngOnInit() {
        this.getExistingChambers();
        this.getExistingPoles();
    }
    ngOnChanges(changes) {
        if (this.cableSettings.cableType)
            this.getCablesMaster(this.cableSettings.cableType);
    }
    onCableTypeChange(cableType) {
        this.cableSettings.cables = null;
        this.getCablesMaster(cableType);
        this.cableSettings.pole = new _entities_models_pole__WEBPACK_IMPORTED_MODULE_6__["Pole"]();
        this.cableSettings.chamber = new _entities_models_chamber__WEBPACK_IMPORTED_MODULE_5__["Chamber"]();
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
                conditionOperator: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["ConditionOperator"].AND,
                filters: [{
                        propertyName: "isUnderground",
                        operator: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["Operator"].equals,
                        value: cableType == "underground" ? true : false,
                        caseSensitive: false
                    }]
            },
            order: {
                orderByProperty: "UpdatedDate",
                sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending
            }
        };
        this.cableService.getCables(paginationRequest).subscribe(resp => {
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
        }, (err) => {
            this.cablesMaster = null;
            this.statusMessage = "Error fetching cables.";
        });
    }
    getExistingPoles() {
        if (this.polesMaster.length == 0) {
            this.poleService.getPoles().subscribe(resp => {
                this.polesMaster = null;
                if (resp.data != null && resp.data.length > 0) {
                    this.polesMaster = resp.data;
                }
            }, (err) => {
                this.polesMaster = new Array();
            });
        }
    }
    getExistingChambers() {
        if (this.chambersMaster.length == 0) {
            this.chamberService.getChambers().subscribe(resp => {
                this.chambersMaster = null;
                if (resp.data != null && resp.data.length > 0) {
                    this.chambersMaster = resp.data;
                }
            }, (err) => {
                this.chambersMaster = new Array();
            });
        }
    }
    addCable() {
        if (this.selectedCable) {
            if (this.cableSettings.cables == null)
                this.cableSettings.cables = new Array();
            var index = this.cableSettings.cables.findIndex(x => x.id == this.selectedCable.id);
            if (index == -1) {
                this.cableSettings.cables.push(this.selectedCable);
                this.selectedCable = null;
            }
        }
    }
    onPoleChange(poleId) {
        this.cableSettings.pole = this.polesMaster.find(x => x.id == poleId);
    }
    onChamberChange(id) {
        this.cableSettings.chamber = this.chambersMaster.find(x => x.id == id);
    }
    removeCable(index) {
        this.cableSettings.cables.splice(index, 1);
    }
};
DesignCable.ctorParameters = () => [
    { type: _entities_services_cable_service__WEBPACK_IMPORTED_MODULE_3__["CableService"] },
    { type: _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_7__["PoleService"] },
    { type: _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_8__["ChamberService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignCable.prototype, "cableSettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignCable.prototype, "allDesigns", void 0);
DesignCable = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-cable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-cable.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-cable.html")).default
    })
], DesignCable);



/***/ }),

/***/ "./src/app/designs/components/dzn-civilworks.ts":
/*!******************************************************!*\
  !*** ./src/app/designs/components/dzn-civilworks.ts ***!
  \******************************************************/
/*! exports provided: DesignCivilwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignCivilwork", function() { return DesignCivilwork; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _civilworks_services_civilwork_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../civilworks/services/civilwork.service */ "./src/app/civilworks/services/civilwork.service.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let DesignCivilwork = class DesignCivilwork {
    constructor(civilworkService) {
        this.civilworkService = civilworkService;
        this.civilworkSettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["CivilworkSettings"]();
        this.civilworksMaster = new Array();
    }
    ngOnChanges(changes) {
        if (this.parentEntityType)
            this.getExistingCivilworks(this.parentEntityType);
    }
    getExistingCivilworks(parentEntityType) {
        //this.civilworkSettings.civilworks = null;
        var paginationRequest = {
            page: null,
            pageSize: null,
            filter: {
                conditionOperator: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["ConditionOperator"].AND,
                filters: [{
                        propertyName: "ParentEntityType",
                        operator: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["Operator"].equals,
                        value: parentEntityType.toLowerCase(),
                        caseSensitive: false
                    }]
            },
            order: {
                orderByProperty: "UpdatedDate",
                sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending
            }
        };
        this.civilworkService.getCivilworks(paginationRequest).subscribe(resp => {
            this.civilworksMaster = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.civilworksMaster = resp.data;
                }
                else {
                    this.statusMessage = "There are no registered civilworks.";
                }
            }
        }, (err) => {
            this.civilworksMaster = null;
            this.statusMessage = "Error fetching civilworks.";
        });
    }
    addCivilwork() {
        if (this.selectedCivilwork) {
            if (this.civilworkSettings.civilworks == null)
                this.civilworkSettings.civilworks = new Array();
            var index = this.civilworkSettings.civilworks.findIndex(x => x.id == this.selectedCivilwork.id);
            if (index == -1) {
                this.civilworkSettings.civilworks.push(this.selectedCivilwork);
                this.selectedCivilwork = null;
            }
        }
    }
    removeCivilwork(index) {
        this.civilworkSettings.civilworks.splice(index, 1);
    }
};
DesignCivilwork.ctorParameters = () => [
    { type: _civilworks_services_civilwork_service__WEBPACK_IMPORTED_MODULE_3__["CivilworkService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignCivilwork.prototype, "civilworkSettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignCivilwork.prototype, "parentEntityType", void 0);
DesignCivilwork = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-civilworks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-civilworks.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-civilworks.html")).default
    })
], DesignCivilwork);



/***/ }),

/***/ "./src/app/designs/components/dzn-clusters.ts":
/*!****************************************************!*\
  !*** ./src/app/designs/components/dzn-clusters.ts ***!
  \****************************************************/
/*! exports provided: DesignClusters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignClusters", function() { return DesignClusters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _clusters_services_cluster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clusters/services/cluster.service */ "./src/app/clusters/services/cluster.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");






let DesignClusters = class DesignClusters {
    constructor(clusterService, helper) {
        this.clusterService = clusterService;
        this.helper = helper;
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Design"]();
        this.clusters = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
        this.selectedField = this.searchFields[0];
    }
    ngOnInit() {
        this.statusMessage = "Loading clusters...";
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
        this.clusterService.getClusters(paginationRequest).subscribe(resp => {
            this.clusters = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.clusters = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no clusters.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.clusters = null;
            let msg = `Unable to fetch clusters : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching clusters.";
        });
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
};
DesignClusters.ctorParameters = () => [
    { type: _clusters_services_cluster_service__WEBPACK_IMPORTED_MODULE_4__["ClusterService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignClusters.prototype, "design", void 0);
DesignClusters = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-clusters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-clusters.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-clusters.html")).default
    })
], DesignClusters);



/***/ }),

/***/ "./src/app/designs/components/dzn-costing.ts":
/*!***************************************************!*\
  !*** ./src/app/designs/components/dzn-costing.ts ***!
  \***************************************************/
/*! exports provided: DesignCosting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignCosting", function() { return DesignCosting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import { CustomField, ControlType, DataType } from '../../../common/customField';
let DesignCosting = class DesignCosting {
    constructor() {
        this.networkSettings = new Array();
        this.entityType = "Cable";
        this.cables = new Array();
        this.chambers = new Array();
        this.ducts = new Array();
        this.odfs = new Array();
        this.poles = new Array();
        this.splitters = new Array();
        this.spliceClosures = new Array();
        this.accessories = new Array();
        this.civilworks = new Array();
    }
    ngOnChanges(changes) {
        if (this.networkSettings == null)
            return;
        this.networkSettings.forEach(level => {
            this.cables = new Array();
            this.chambers = new Array();
            this.ducts = new Array();
            this.odfs = new Array();
            this.poles = new Array();
            this.splitters = new Array();
            this.spliceClosures = new Array();
            this.accessories = new Array();
            this.civilworks = new Array();
            //start node
            if (level.startNode) {
                if (level.startNode.accessorySettings.accessories != null) {
                    level.startNode.accessorySettings.accessories.forEach(accessory => {
                        let index = this.accessories.findIndex(c => c.name == accessory.name);
                        if (index == -1)
                            this.accessories.push(accessory);
                    });
                }
                if (level.startNode.civilworkSettings.civilworks != null) {
                    level.startNode.civilworkSettings.civilworks.forEach(civilwork => {
                        let index = this.civilworks.findIndex(c => c.name == civilwork.name);
                        if (index == -1)
                            this.civilworks.push(civilwork);
                    });
                }
                if (level.startNode.entitySettings.dataSource == "automatic") {
                    if (level.startNode.entitySettings.splitters != null && level.startNode.entitySettings.splitters.length > 0) {
                        let index = this.splitters.findIndex(s => s.name == level.startNode.entitySettings.splitters[0].name);
                        if (index == -1)
                            this.splitters.push(level.startNode.entitySettings.splitters[0]);
                    }
                }
            }
            if (level.destinationNode) {
                //destination node
                if (level.destinationNode.accessorySettings.accessories != null) {
                    level.destinationNode.accessorySettings.accessories.forEach(accessory => {
                        let index = this.accessories.findIndex(c => c.name == accessory.name);
                        if (index == -1)
                            this.accessories.push(accessory);
                    });
                }
                if (level.destinationNode.civilworkSettings.civilworks != null) {
                    level.destinationNode.civilworkSettings.civilworks.forEach(civilwork => {
                        let index = this.civilworks.findIndex(c => c.name == civilwork.name);
                        if (index == -1)
                            this.civilworks.push(civilwork);
                    });
                }
                if (level.destinationNode.entitySettings.dataSource == "automatic") {
                    if (level.destinationNode.entitySettings.splitters != null && level.destinationNode.entitySettings.splitters.length > 0) {
                        let index = this.splitters.findIndex(s => s.name == level.destinationNode.entitySettings.splitters[0].name);
                        if (index == -1)
                            this.splitters.push(level.destinationNode.entitySettings.splitters[0]);
                    }
                }
                //if (level.destinationNode.entitySettings.splitter != null) {
                //    let index = this.splitters.findIndex(s => s.name == level.destinationNode.entitySettings.splitter.name);
                //    if (index == -1)
                //        this.splitters.push(level.destinationNode.entitySettings.splitter);
                //}
            }
            if (level.fdpNode) {
                //FDP node
                if (level.fdpNode.accessorySettings.accessories != null) {
                    level.fdpNode.accessorySettings.accessories.forEach(accessory => {
                        let index = this.accessories.findIndex(c => c.name == accessory.name);
                        if (index == -1)
                            this.accessories.push(accessory);
                    });
                }
                if (level.fdpNode.civilworkSettings.civilworks != null) {
                    level.fdpNode.civilworkSettings.civilworks.forEach(civilwork => {
                        let index = this.civilworks.findIndex(c => c.name == civilwork.name);
                        if (index == -1)
                            this.civilworks.push(civilwork);
                    });
                }
                //if (level.destinationNode.entitySettings.dataSource == "automatic") {
                //    if (level.destinationNode.entitySettings.splitters != null && level.destinationNode.entitySettings.splitters.length > 0) {
                //        let index = this.splitters.findIndex(s => s.name == level.destinationNode.entitySettings.splitters[0].name);
                //        if (index == -1)
                //            this.splitters.push(level.destinationNode.entitySettings.splitters[0]);
                //    }
                //}
            }
            //Cabling
            if (level.cabling.cableSettings.cables != null) {
                level.cabling.cableSettings.cables.forEach(cable => {
                    let index = this.cables.findIndex(c => c.name == cable.name);
                    if (index == -1)
                        this.cables.push(cable);
                });
            }
            if (level.cabling.cableSettings.chamber.name) {
                let chamber = level.cabling.cableSettings.chamber;
                let index = this.chambers.findIndex(c => c.name == chamber.name);
                if (index == -1)
                    this.chambers.push(chamber);
            }
            if (level.cabling.cableSettings.pole.name) {
                let pole = level.cabling.cableSettings.pole;
                let index = this.poles.findIndex(c => c.name == pole.name);
                if (index == -1)
                    this.poles.push(pole);
            }
            if (level.cabling.accessorySettings.accessories != null) {
                level.cabling.accessorySettings.accessories.forEach(accessory => {
                    let index = this.accessories.findIndex(c => c.name == accessory.name);
                    if (index == -1)
                        this.accessories.push(accessory);
                });
            }
            if (level.cabling.ductSettings.ducts != null) {
                level.cabling.ductSettings.ducts.forEach(duct => {
                    let index = this.ducts.findIndex(c => c.name == duct.name);
                    if (index == -1)
                        this.ducts.push(duct);
                });
            }
            if (level.cabling.spliceClosureSettings.spliceClosures != null) {
                level.cabling.spliceClosureSettings.spliceClosures.forEach(spliceClosure => {
                    let index = this.spliceClosures.findIndex(c => c.name == spliceClosure.name);
                    if (index == -1)
                        this.spliceClosures.push(spliceClosure);
                });
            }
        });
    }
    checkPriceValidity(validFrom, validTill) {
        let today = new Date();
        let vf = new Date(validFrom);
        let vt = new Date(validTill);
        if (vf <= today && vt > today)
            return true;
        else
            return false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignCosting.prototype, "networkSettings", void 0);
DesignCosting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-costing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-costing.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-costing.html")).default
    })
], DesignCosting);



/***/ }),

/***/ "./src/app/designs/components/dzn-documents.ts":
/*!*****************************************************!*\
  !*** ./src/app/designs/components/dzn-documents.ts ***!
  \*****************************************************/
/*! exports provided: DesignDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignDocuments", function() { return DesignDocuments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_models_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/document */ "./src/app/common/models/document.ts");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");





let DesignDocuments = class DesignDocuments {
    constructor(helper) {
        this.helper = helper;
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_4__["Design"]();
        this.documentCategory = "";
    }
    fileChangeEvent(event) {
        var files = event.target.files;
        if (this.design.documents == null)
            this.design.documents = new Array();
        for (var i = 0; i < files.length; i++) {
            if (files[i].name.length > 200) {
                this.helper.showAlertMessage("Document file name cannot be greater than 200 characters", "error");
            }
            else {
                var document = new _common_models_document__WEBPACK_IMPORTED_MODULE_3__["Document"]();
                document.category = this.documentCategory;
                document.fileName = files[i].name;
                document.fileSize = files[i].size;
                document.file = files[i];
                this.design.documents.push(document);
            }
        }
    }
    removeDocument(index, document) {
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
};
DesignDocuments.ctorParameters = () => [
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignDocuments.prototype, "design", void 0);
DesignDocuments = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-documents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-documents.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-documents.html")).default
    })
], DesignDocuments);



/***/ }),

/***/ "./src/app/designs/components/dzn-duct.ts":
/*!************************************************!*\
  !*** ./src/app/designs/components/dzn-duct.ts ***!
  \************************************************/
/*! exports provided: DesignDuct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignDuct", function() { return DesignDuct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _entities_services_duct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/services/duct.service */ "./src/app/entities/services/duct.service.ts");




let DesignDuct = class DesignDuct {
    constructor(ductService) {
        this.ductService = ductService;
        this.ductSettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["DuctSettings"]();
        this.ductsMaster = new Array();
        this.statusMessage = "No ducts selected";
        this.selectedDuct = null;
    }
    ngOnInit() {
        this.getExistingDucts();
    }
    getExistingDucts() {
        this.ductService.getDucts().subscribe(resp => {
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
        }, (err) => {
            this.ductsMaster = null;
            this.statusMessage = "Error fetching ducts.";
        });
    }
    addDuct() {
        if (this.selectedDuct) {
            if (this.ductSettings.ducts == null)
                this.ductSettings.ducts = new Array();
            var index = this.ductSettings.ducts.findIndex(x => x.id == this.selectedDuct.id);
            if (index == -1) {
                this.ductSettings.ducts.push(this.selectedDuct);
                this.selectedDuct = null;
            }
        }
    }
    removeDuct(index) {
        this.ductSettings.ducts.splice(index, 1);
    }
};
DesignDuct.ctorParameters = () => [
    { type: _entities_services_duct_service__WEBPACK_IMPORTED_MODULE_3__["DuctService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignDuct.prototype, "ductSettings", void 0);
DesignDuct = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-duct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-duct.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-duct.html")).default
    })
], DesignDuct);



/***/ }),

/***/ "./src/app/designs/components/dzn-entities.ts":
/*!****************************************************!*\
  !*** ./src/app/designs/components/dzn-entities.ts ***!
  \****************************************************/
/*! exports provided: DesignEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignEntities", function() { return DesignEntities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _entities_services_splitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/services/splitter.service */ "./src/app/entities/services/splitter.service.ts");
/* harmony import */ var _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");
/* harmony import */ var _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _entities_services_odf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/services/odf.service */ "./src/app/entities/services/odf.service.ts");
/* harmony import */ var _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entities/services/chamber.service */ "./src/app/entities/services/chamber.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _common_geo_geometry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/geo/geometry */ "./src/app/common/geo/geometry.ts");











let DesignEntities = class DesignEntities {
    constructor(chamberService, odfService, poleService, spliceClosureService, splitterService, helper) {
        this.chamberService = chamberService;
        this.odfService = odfService;
        this.poleService = poleService;
        this.spliceClosureService = spliceClosureService;
        this.splitterService = splitterService;
        this.helper = helper;
        this.entitySettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["EntitySettings"]();
        this.allDesigns = new Array();
        this.entities = [];
    }
    ngOnInit() {
        this.loadMasterEntities(this.entitySettings.entityName);
        this.initializeEntities();
    }
    initializeEntities() {
        switch (this.entitySettings.entityName) {
            case "Chamber":
                if (this.entitySettings.chambers == null)
                    this.entitySettings.chambers = new Array();
                this.entities = this.entitySettings.chambers;
                break;
            case "ODF":
                if (this.entitySettings.odfs == null)
                    this.entitySettings.odfs = new Array();
                this.entities = this.entitySettings.odfs;
                break;
            case "Pole":
                if (this.entitySettings.poles == null)
                    this.entitySettings.poles = new Array();
                this.entities = this.entitySettings.poles;
                break;
            case "SpliceClosure":
                if (this.entitySettings.spliceClosures == null)
                    this.entitySettings.spliceClosures = new Array();
                this.entities = this.entitySettings.spliceClosures;
                break;
            case "Splitter":
                if (this.entitySettings.splitters == null)
                    this.entitySettings.splitters = new Array();
                this.entities = this.entitySettings.splitters;
                break;
        }
    }
    onEntityTypeChange(entityType) {
        if (this.entitySettings.entityName == 'Homepass') {
            this.entitySettings.dataSource = 'automatic';
        }
        else {
            this.entitySettings.chambers = null;
            this.entitySettings.odfs = null;
            this.entitySettings.poles = null;
            this.entitySettings.spliceClosures = null;
            this.entitySettings.splitters = null;
            this.initializeEntities();
            this.loadMasterEntities(entityType);
        }
    }
    loadMasterEntities(entityType) {
        let masterSvc = null;
        switch (entityType) {
            case "Chamber":
                masterSvc = this.chamberService.getChambers();
                break;
            case "ODF":
                masterSvc = this.odfService.getODFs();
                break;
            case "Pole":
                masterSvc = this.poleService.getPoles();
                break;
            case "SpliceClosure":
                masterSvc = this.spliceClosureService.getSpliceClosures();
                break;
            case "Splitter":
                masterSvc = this.splitterService.getSplitters();
                break;
            default:
                masterSvc = this.splitterService.getSplitters();
                break;
        }
        masterSvc.subscribe(resp => {
            this.masterEntities = null;
            if (resp.data != null && resp.data.length > 0) {
                this.masterEntities = resp.data;
            }
        }, (err) => {
            this.masterEntities = new Array();
        });
    }
    addEntity() {
        if (this.entities == null)
            this.entities = [];
        if (this.selectedEntity) {
            var index = this.entities.findIndex(x => x.id == this.selectedEntity.id);
            if (index == -1) {
                this.entities.push(this.selectedEntity);
                this.selectedEntity = null;
            }
        }
    }
    removeEntity(index) {
        this.entities.splice(index, 1);
    }
    fileChangeEvent(event) {
        this.entitySettings.chambers = null;
        this.entitySettings.odfs = null;
        this.entitySettings.poles = null;
        this.entitySettings.spliceClosures = null;
        this.entitySettings.splitters = null;
        this.initializeEntities();
        var file = event.target.files[0];
        var reader = new FileReader();
        var fileExt = file.name.split('.').pop().toLowerCase();
        reader.onload = (e) => {
            try {
                if (fileExt == "kml") {
                    let kml = reader.result;
                    let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
                    this.populateEntities(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result).then((geojson) => {
                        this.populateEntities(geojson.features);
                    });
                }
                else if (fileExt == "csv") {
                    let csv = reader.result;
                    this.populateEntitiesCsv(csv);
                }
            }
            catch (e) {
                this.helper.showAlertMessage("Could not parse the file.", "error");
            }
        };
        if (fileExt == "csv" || fileExt == "kml")
            reader.readAsText(file);
        else if (fileExt == "zip")
            reader.readAsArrayBuffer(file);
        else
            this.helper.showAlertMessage("Invalid file format", "error");
    }
    populateEntities(features) {
        this.entities.length = 0;
        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;
            let latLng = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_9__["GeoHelper"].convertToPosition([features[i].geometry.coordinates[0], features[i].geometry.coordinates[1]]);
            const isValid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_9__["GeoHelper"].validateCoordinates(latLng);
            if ((isValid instanceof Error) == false) {
                let index = this.entities.findIndex(x => x.code == properties.name);
                if (index == -1) {
                    let entity = {
                        name: properties.name,
                        code: properties.name,
                        geometry: new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_10__["Point"]([latLng.lng, latLng.lat]),
                    };
                    entity["splitterRatio"] = "1:8";
                    this.entities.push(entity);
                }
            }
        }
    }
    populateEntitiesCsv(csvData) {
        this.entities.length = 0;
        var allRows = csvData.split(/\r?\n|\r/);
        for (var i = 1; i < allRows.length; i++) {
            if (allRows[i].trim() == "")
                continue;
            let properties = allRows[i].split(',');
            let lat = parseFloat(properties[3]);
            let lng = parseFloat(properties[4]);
            let latLng = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_9__["GeoHelper"].convertToPosition([lng, lat]);
            const isValid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_9__["GeoHelper"].validateCoordinates(latLng);
            if ((isValid instanceof Error) == false) {
                let index = this.entities.findIndex(x => x.code == properties.Test);
                if (index == -1) {
                    let entity = {
                        name: properties[1],
                        code: properties[0],
                        geometry: new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_10__["Point"]([lng, lat]),
                    };
                    this.entities.push(entity);
                }
            }
        }
    }
    onDesignChange(designId) {
        let design = this.allDesigns.find(x => x.id == designId);
    }
    onDesignEntityChange(designEntity) {
    }
};
DesignEntities.ctorParameters = () => [
    { type: _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_7__["ChamberService"] },
    { type: _entities_services_odf_service__WEBPACK_IMPORTED_MODULE_6__["ODFService"] },
    { type: _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_5__["PoleService"] },
    { type: _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_4__["SpliceClosureService"] },
    { type: _entities_services_splitter_service__WEBPACK_IMPORTED_MODULE_3__["SplitterService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_8__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignEntities.prototype, "entitySettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignEntities.prototype, "allDesigns", void 0);
DesignEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-entities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-entities.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-entities.html")).default
    })
], DesignEntities);



/***/ }),

/***/ "./src/app/designs/components/dzn-fdp.ts":
/*!***********************************************!*\
  !*** ./src/app/designs/components/dzn-fdp.ts ***!
  \***********************************************/
/*! exports provided: DesignFPDs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignFPDs", function() { return DesignFPDs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _common_geo_geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/geo/geometry */ "./src/app/common/geo/geometry.ts");






let DesignFPDs = class DesignFPDs {
    //existingFDPs: FDP[] = new Array<FDP>();
    constructor(helper) {
        this.helper = helper;
        this.fdpSettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["FDPSettings"]();
        this.allDesigns = new Array();
    }
    add() {
        if (this.fdpSettings.aggregateFdps == null)
            this.fdpSettings.aggregateFdps = new Array();
        if (this.selectedFDP) {
            var index = this.fdpSettings.aggregateFdps.findIndex(x => x.code == this.selectedFDP.code);
            if (index == -1) {
                this.fdpSettings.aggregateFdps.push(this.selectedFDP);
                this.selectedFDP = null;
            }
        }
    }
    remove(index) {
        this.fdpSettings.aggregateFdps.splice(index, 1);
    }
    fileChangeEvent(event) {
        if (this.fdpSettings.fdps)
            this.fdpSettings.fdps.length = 0;
        if (this.fdpSettings.aggregateFdps)
            this.fdpSettings.aggregateFdps.length = 0;
        var file = event.target.files[0];
        var reader = new FileReader();
        var fileExt = file.name.split('.').pop().toLowerCase();
        reader.onload = (e) => {
            try {
                if (fileExt == "kml") {
                    let kml = reader.result;
                    let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
                    this.populateFDPs(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result).then((geojson) => {
                        this.populateFDPs(geojson.features);
                    });
                }
                else if (fileExt == "csv") {
                    let csv = reader.result;
                    this.populateFDPsCsv(csv);
                }
            }
            catch (e) {
                this.helper.showAlertMessage("Could not parse the file.", "error");
            }
        };
        if (fileExt == "csv" || fileExt == "kml")
            reader.readAsText(file);
        else if (fileExt == "zip")
            reader.readAsArrayBuffer(file);
        else
            this.helper.showAlertMessage("Invalid file format", "error");
    }
    populateFDPs(features) {
        this.fdpSettings.fdps.length = 0;
        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;
            let latLng = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_4__["GeoHelper"].convertToPosition([features[i].geometry.coordinates[0], features[i].geometry.coordinates[1]]);
            const isValid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_4__["GeoHelper"].validateCoordinates(latLng);
            if ((isValid instanceof Error) == false) {
                let index = this.fdpSettings.fdps.findIndex(x => x.code == properties.Test);
                if (index == -1) {
                    let fdp = {
                        name: properties.Test,
                        code: properties.Test,
                        geometry: new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_5__["Point"]([latLng.lng, latLng.lat]),
                    };
                    this.fdpSettings.fdps.push(fdp);
                }
            }
        }
    }
    populateFDPsCsv(csvData) {
        this.fdpSettings.fdps.length = 0;
        var allRows = csvData.split(/\r?\n|\r/);
        for (var i = 1; i < allRows.length; i++) {
            if (allRows[i].trim() == "")
                continue;
            let properties = allRows[i].split(',');
            let lat = parseFloat(properties[3]);
            let lng = parseFloat(properties[4]);
            let latLng = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_4__["GeoHelper"].convertToPosition([lng, lat]);
            const isValid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_4__["GeoHelper"].validateCoordinates(latLng);
            if ((isValid instanceof Error) == false) {
                let index = this.fdpSettings.fdps.findIndex(x => x.code == properties.Test);
                if (index == -1) {
                    let fdp = {
                        name: properties[1],
                        code: properties[0],
                        geometry: new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_5__["Point"]([lng, lat]),
                    };
                    this.fdpSettings.fdps.push(fdp);
                }
            }
        }
    }
    onDesignChange(designId) {
        let design = this.allDesigns.find(x => x.id == designId);
        if (design.networkSettings && design.networkSettings[0].fdpNode)
            this.fdpSettings.fdps = design.networkSettings[0].fdpNode.fdpSettings.fdps;
    }
};
DesignFPDs.ctorParameters = () => [
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignFPDs.prototype, "fdpSettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignFPDs.prototype, "allDesigns", void 0);
DesignFPDs = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-fdp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-fdp.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-fdp.html")).default
    })
], DesignFPDs);



/***/ }),

/***/ "./src/app/designs/components/dzn-info.ts":
/*!************************************************!*\
  !*** ./src/app/designs/components/dzn-info.ts ***!
  \************************************************/
/*! exports provided: DesignInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignInfo", function() { return DesignInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");




let DesignInfo = class DesignInfo {
    constructor(userService) {
        this.userService = userService;
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_3__["Design"]();
        this.designs = new Array();
        this.onVersionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.users = new Array();
    }
    ngOnInit() {
        this.getFormData();
    }
    ngOnChanges(changes) {
        this.selectedVersion = this.design.version;
    }
    getFormData() {
        //this.design.designType = "FTTx";
        this.userService.getUsers().subscribe(resp => {
            this.users = null;
            if (resp.status.toLowerCase() != "error" && resp.data != null && resp.data.length > 0) {
                this.users = resp.data;
            }
        });
    }
    versionChange(event) {
        this.onVersionChange.emit(event);
    }
    clearNetworkSettings() {
        this.design.networkSettings = [];
    }
};
DesignInfo.ctorParameters = () => [
    { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignInfo.prototype, "design", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignInfo.prototype, "designs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DesignInfo.prototype, "onVersionChange", void 0);
DesignInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-info.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-info.html")).default
    })
], DesignInfo);



/***/ }),

/***/ "./src/app/designs/components/dzn-map.ts":
/*!***********************************************!*\
  !*** ./src/app/designs/components/dzn-map.ts ***!
  \***********************************************/
/*! exports provided: DesignMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignMap", function() { return DesignMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_bom_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/bom.helper */ "./src/app/designs/services/bom.helper.ts");
/* harmony import */ var _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/geo/googleMapsHelper */ "./src/app/common/geo/googleMapsHelper.ts");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _services_entities_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/entities.helper */ "./src/app/designs/services/entities.helper.ts");
/* harmony import */ var _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/geo/geoNode */ "./src/app/common/geo/geoNode.ts");
/* harmony import */ var _services_map_entities_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/map-entities.helper */ "./src/app/designs/services/map-entities.helper.ts");
/* harmony import */ var _services_geoNode_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/geoNode.helper */ "./src/app/designs/services/geoNode.helper.ts");
/* harmony import */ var _entities_models_chamber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../entities/models/chamber */ "./src/app/entities/models/chamber.ts");
/* harmony import */ var _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/geo/geometry */ "./src/app/common/geo/geometry.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _entities_models_pole__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../entities/models/pole */ "./src/app/entities/models/pole.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _entities_models_splitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../entities/models/splitter */ "./src/app/entities/models/splitter.ts");
/* harmony import */ var _entities_models_cable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../entities/models/cable */ "./src/app/entities/models/cable.ts");
/* harmony import */ var src_app_entities_models_spliceClosure__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/entities/models/spliceClosure */ "./src/app/entities/models/spliceClosure.ts");
/* harmony import */ var src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/common/models/supplier */ "./src/app/common/models/supplier.ts");
/* harmony import */ var _entities_models_MicroDuct__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../entities/models/MicroDuct */ "./src/app/entities/models/MicroDuct.ts");
/* harmony import */ var _entities_models_pop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../entities/models/pop */ "./src/app/entities/models/pop.ts");
/* harmony import */ var _entities_models_odf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../entities/models/odf */ "./src/app/entities/models/odf.ts");
/* harmony import */ var _entities_models_duct__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../entities/models/duct */ "./src/app/entities/models/duct.ts");
/* harmony import */ var _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../entities/services/chamber.service */ "./src/app/entities/services/chamber.service.ts");
/* harmony import */ var _entities_services_odf_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../entities/services/odf.service */ "./src/app/entities/services/odf.service.ts");
/* harmony import */ var _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../entities/services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../entities/services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");
/* harmony import */ var _entities_services_splitter_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../entities/services/splitter.service */ "./src/app/entities/services/splitter.service.ts");
/* harmony import */ var _entities_services_fat_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../entities/services/fat.service */ "./src/app/entities/services/fat.service.ts");
/* harmony import */ var _entities_services_fdt_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../entities/services/fdt.service */ "./src/app/entities/services/fdt.service.ts");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _entities_models_fat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../entities/models/fat */ "./src/app/entities/models/fat.ts");
/* harmony import */ var _entities_models_Solution2_zip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../entities/models/Solution2.zip */ "./src/app/entities/models/Solution2.zip.ts");
/* harmony import */ var _entities_services_duct_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../entities/services/duct.service */ "./src/app/entities/services/duct.service.ts");
/* harmony import */ var _entities_services_cable_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../entities/services/cable.service */ "./src/app/entities/services/cable.service.ts");




















//import { Customer } from '../../entities/models/customer';
//import { Duct } from '../../entities/models/duct';

















let DesignMap = class DesignMap {
    constructor(appConfig, helper, bomHelper, chamberService, odfService, poleService, spliceClosureService, splitterService, fatService, fdtService, ductService, cableService) {
        this.appConfig = appConfig;
        this.helper = helper;
        this.bomHelper = bomHelper;
        this.chamberService = chamberService;
        this.odfService = odfService;
        this.poleService = poleService;
        this.spliceClosureService = spliceClosureService;
        this.splitterService = splitterService;
        this.fatService = fatService;
        this.fdtService = fdtService;
        this.ductService = ductService;
        this.cableService = cableService;
        this.entitySettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["EntitySettings"]();
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Design"]();
        this.entityIcons = [];
        this.layers = [];
        this.isEntitiesGenerated = false;
        this.changedSegments = [];
        this.chamber = new _entities_models_chamber__WEBPACK_IMPORTED_MODULE_11__["Chamber"]();
        this.poles = new _entities_models_pole__WEBPACK_IMPORTED_MODULE_14__["Pole"]();
        this.entities = [];
        this.selectedLayers = ["Cable", "Chamber", "Pole", "Splitter", "PoP", "Duct", "MicroDuct"];
        this.PoleIncrementalID = 0;
        this.ChamberIncrementalID = 0;
        this.CableIncrementalID = 0;
        this.OdfIncrementalID = 0;
        this.SplitterIncrementalID = 0;
        this.PopIncrementalID = 0;
        this.SpliceClosureIncrementalID = 0;
        this.fatdata = new _entities_models_fat__WEBPACK_IMPORTED_MODULE_33__["FAT"]();
        this.fdt = new _entities_models_Solution2_zip__WEBPACK_IMPORTED_MODULE_34__["FDT"]();
        this.FatIncrementalID = 0;
        this.FdtIncrementalID = 0;
        this.entityIcons.push({ entityType: "Homepass", icon: { url: "images/map-entities/homepass.png" } });
        this.entityIcons.push({ entityType: "Chamber", icon: { url: "images/map-entities/chamber.png", anchor: new google.maps.Point(10, 10) } });
        this.entityIcons.push({ entityType: "ODF", icon: { url: "images/map-entities/odf.png" } });
        this.entityIcons.push({ entityType: "Pole", icon: { url: "images/map-entities/pole.png" } });
        this.entityIcons.push({ entityType: "PoP", icon: { url: "images/map-entities/pop.png" } });
        this.entityIcons.push({ entityType: "Splitter", icon: { url: "images/map-entities/splitter.png" } });
        this.entityIcons.push({ entityType: "SpliceClosure", icon: { url: "images/map-entities/spliceclosure.png" } });
        this.layers.push({ id: "Cable", name: "Cable" });
        this.layers.push({ id: "Duct", name: "Duct" });
        this.layers.push({ id: "MicroDuct", name: "MicroDuct" });
        this.layers.push({ id: "Chamber", name: "Chamber" });
        this.layers.push({ id: "ODF", name: "ODF" });
        this.layers.push({ id: "Pole", name: "Pole" });
        this.layers.push({ id: "PoP", name: "PoP" });
        this.layers.push({ id: "SpliceClosure", name: "Splice Closure" });
        this.layers.push({ id: "Splitter", name: "Splitter" });
        this.layers.push({ id: "Homepass", name: "Homepass" });
        this.entityIcons.push({ entityType: "FAT", icon: { url: "images/map-entities/FAT.png" } });
        this.entityIcons.push({ entityType: "FDT", icon: { url: "images/map-entities/FDT.png" } });
        this.layers.push({ id: "FAT", name: "FAT" });
        this.layers.push({ id: "FDT", name: "FDT" });
        this.isEntitiesGenerated = false;
    }
    ngOnInit() {
        this.DeleteFlag = null;
        this.selectedEntity = null;
        this.CurrentselectedEntity = null;
        this.designEntity = 0;
        let location = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].getLatLng(this.appConfig.settings.MapCenter);
        if (this.design.bluePrint) {
            location = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].convertToPosition(this.design.bluePrint.coordinates);
        }
        this.map = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].initializeMap('designMap', location, 18, 21);
        this.mapEntitiesHelper = new _services_map_entities_helper__WEBPACK_IMPORTED_MODULE_9__["MapEntitiesHelper"](this.map);
        var overlay = GMHelper.createOverlay(this.map);
        var entityItems = $('.entityMenu img');
        this.entitiesHelper = new _services_entities_helper__WEBPACK_IMPORTED_MODULE_7__["EntitiesHelper"](this.design.bookingIds, this.design.generatedCodes);
        let mapEntitiesHelper = new _services_map_entities_helper__WEBPACK_IMPORTED_MODULE_9__["MapEntitiesHelper"](this.map);
        let des = this.des;
        for (var i = 0; i < entityItems.length; i++) {
            $(entityItems[i]).draggable({
                helper: 'clone', containment: '#designMap',
                stop: (e) => {
                    let seg = this.design.bluePrint.children[0].segments;
                    this.Data = this.design.bluePrint.children;
                    var dropPoint = new google.maps.Point(e.pageX - 250, e.pageY - 200);
                    var entityType = e.target.attributes[1].nodeValue;
                    var latLng = GMHelper.getLatLongFromDragPoint(overlay, dropPoint);
                    if (entityType == "Chamber") {
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.chamberService.getChambers();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                if (seg) {
                                    this.CurrentselectedEntity = null;
                                    this.chamber = null;
                                    if (seg[0].chambers == null) {
                                        seg[0].chambers = new Array();
                                        this.chamber.entityType = "Chamber";
                                        this.chamber.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.chamber.code = this.entitiesHelper.generatedCodes('Chamber');
                                        this.chamber.name = this.chamber.code;
                                        this.chamber.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.chamber, { url: "images/map-entities/chamber.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.chamber.suppliers = new Array();
                                        this.chamber.suppliers.push(supplier);
                                        seg[0].chambers.push(this.chamber);
                                        this.isEditable(true, marker);
                                    }
                                    else {
                                        this.CurrentselectedEntity = null;
                                        this.chamber = null;
                                        this.chamber = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].chambers[0]);
                                        if (this.chamber == undefined) {
                                            this.chamber = null;
                                        }
                                        if (this.ChamberIncrementalID == 0) {
                                            for (var i = seg[0].chambers.length - 1; i >= 0; i--) {
                                                if (seg[0].chambers[i].code != undefined || seg[0].chambers[i].code != null) {
                                                    var ID2 = seg[0].chambers[i].code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    this.ChamberIncrementalID = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            this.ChamberIncrementalID = this.ChamberIncrementalID + 1;
                                        }
                                        this.chamber.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.chamber.code = 'Chamber_' + this.ChamberIncrementalID;
                                        this.chamber.name = 'Chamber_' + this.ChamberIncrementalID;
                                        this.chamber.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.chamber, { url: "images/map-entities/chamber.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let getdata = $.grep(this.masterEntities, function (l) {
                                            return l.default == "true";
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.chamber.suppliers = new Array();
                                        this.chamber.suppliers.push(supplier);
                                        seg[0].chambers.push(this.chamber);
                                        this.isEditable(true, marker);
                                    }
                                }
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "Pole") {
                        this.getdata = null;
                        let masterSvc = this.poleService.getPoles();
                        masterSvc.subscribe(resp => {
                            if (resp.data != null && resp.data.length > 0) {
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                if (seg) {
                                    this.poles = null;
                                    if (seg[0].poles == null) {
                                        seg[0].poles = new Array();
                                        this.poles.entityType = "Pole";
                                        this.poles.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.poles.code = this.entitiesHelper.generatedCodes('Pole');
                                        ;
                                        this.poles.name = this.poles.code;
                                        this.poles.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.poles, { url: "images/map-entities/pole.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.poles.suppliers = new Array();
                                        this.poles.suppliers.push(supplier);
                                        seg[0].poles.push(this.poles);
                                        this.isEditable(true, marker);
                                    }
                                    else {
                                        this.CurrentselectedEntity = null;
                                        this.poles = null;
                                        if (this.PoleIncrementalID == 0) {
                                            for (var i = seg[0].poles.length - 1; i >= 0; i--) {
                                                //seg[0].splitters[20].code
                                                if (seg[0].poles[i].code != undefined || seg[0].poles[i].code != null) {
                                                    var ID2 = seg[0].poles[i].code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    this.PoleIncrementalID = parseInt(ID4[1]) + 1;
                                                    //k = true;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            this.PoleIncrementalID = this.PoleIncrementalID + 1;
                                        }
                                        this.poles = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].poles[0]);
                                        this.poles.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.poles.code = 'Poles_' + this.PoleIncrementalID;
                                        this.poles.name = 'Poles_' + this.PoleIncrementalID;
                                        //newPole.name = newPole.code;
                                        this.poles.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.poles, { url: "images/map-entities/pole.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.poles.suppliers = new Array();
                                        this.poles.suppliers.push(supplier);
                                        seg[0].poles.push(this.poles);
                                        this.isEditable(true, marker);
                                    }
                                }
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "UndergroundCable") {
                        let seg1 = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_8__["Segment"](); // this.design.bluePrint.children[0].segments;
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.cableService.getCables();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                //var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);
                                var parentThis = this;
                                let colour = "#000000";
                                let lineWeight = 3;
                                let polyline = new google.maps.Polyline({
                                    strokeColor: colour,
                                    strokeOpacity: 1.0,
                                    strokeWeight: lineWeight,
                                    map: this.map
                                });
                                let path = polyline.getPath();
                                polyline.setMap(this.map);
                                GMHelper.clearClickListener(this.map, "click");
                                GMHelper.addListener(this.map, "click", function (event) {
                                    polyline.setEditable(true);
                                    path = polyline.getPath();
                                    path.push(event.latLng);
                                });
                                this.map.setOptions({ draggableCursor: 'crosshair' });
                                GMHelper.addListener(polyline, "rightclick", function (event) {
                                    GMHelper.clearClickListener(polyline, "rightclick");
                                    GMHelper.clearClickListener(polyline.map, "click");
                                    polyline.map.setOptions({ draggableCursor: '' });
                                    polyline.setEditable(false);
                                    //if (this.CableIncrementalID == undefined) {
                                    let id = 0;
                                    if (seg.length != undefined && seg.length > 0) {
                                        if (id == 0) {
                                            for (var i = seg.length - 1; i >= 0; i--) {
                                                if (seg[i].cable != undefined || seg[i].cable != null) {
                                                    var ID2 = seg[i].cable.code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    id = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            id = id + 1;
                                        }
                                    }
                                    //let seg1 = new Segment();// this.design.bluePrint.children[0].segments;
                                    if (id == 0) {
                                        id = 1;
                                    }
                                    seg1.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    let cable = new _entities_models_cable__WEBPACK_IMPORTED_MODULE_17__["Cable"]();
                                    cable.entityType = "Cable";
                                    cable.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    cable.code = 'Cable_' + id;
                                    cable.name = cable.code;
                                    cable.isUnderground = true;
                                    seg1.cable = cable;
                                    //this.isEditable(true, marker);
                                    var coords = polyline.getPath().getArray();
                                    let newCoords = new Array();
                                    coords.forEach(x => {
                                        newCoords.push([x.lng(), x.lat()]);
                                    });
                                    cable.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["LineString"]();
                                    cable.geometry.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].cleanLineCoordinates(newCoords);
                                    cable.measuredLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].getLength(cable.geometry.coordinates);
                                    let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                    supplier.currency = parentThis.getdata.currency;
                                    supplier.name = parentThis.getdata.name;
                                    supplier.stockQty = parentThis.getdata.stockQty;
                                    supplier.price = parentThis.getdata.price;
                                    supplier.validFrom = parentThis.getdata.validFrom;
                                    supplier.validTo = parentThis.getdata.validTo;
                                    cable.suppliers = new Array();
                                    cable.suppliers.push(supplier);
                                    seg1.coordinates = cable.geometry.coordinates;
                                    seg1.cable = cable;
                                    parentThis.design.bluePrint.children[0].segments.push(seg1);
                                    var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);
                                    //this.selectedEntity = polyline.data;
                                    _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                        parentThis.selectedEntity = marker.data;
                                    });
                                });
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "Overhead Cable") {
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.ductService.getDucts();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                //var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);
                                var parentThis = this;
                                let colour = "#000000";
                                let lineWeight = 3;
                                let polyline = new google.maps.Polyline({
                                    strokeColor: colour,
                                    strokeOpacity: 1.0,
                                    strokeWeight: lineWeight,
                                    map: this.map
                                });
                                let path = polyline.getPath();
                                polyline.setMap(this.map);
                                GMHelper.clearClickListener(this.map, "click");
                                GMHelper.addListener(this.map, "click", function (event) {
                                    polyline.setEditable(true);
                                    path = polyline.getPath();
                                    path.push(event.latLng);
                                });
                                this.map.setOptions({ draggableCursor: 'crosshair' });
                                GMHelper.addListener(polyline, "rightclick", function (event) {
                                    GMHelper.clearClickListener(polyline, "rightclick");
                                    GMHelper.clearClickListener(polyline.map, "click");
                                    polyline.map.setOptions({ draggableCursor: '' });
                                    polyline.setEditable(false);
                                    let id = 0;
                                    if (seg.length != undefined && seg.length > 0) {
                                        if (id == 0) {
                                            for (var i = seg.length - 1; i >= 0; i--) {
                                                if (seg[i].cable != undefined || seg[i].cable != null) {
                                                    var ID2 = seg[i].cable.code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    id = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    //id = 1;
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            id = id + 1;
                                        }
                                    }
                                    if (id == 0) {
                                        id = 1;
                                    }
                                    let seg1 = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_8__["Segment"](); // this.design.bluePrint.children[0].segments;
                                    seg1.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    let cable = new _entities_models_cable__WEBPACK_IMPORTED_MODULE_17__["Cable"]();
                                    cable.entityType = "Cable";
                                    cable.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    var ids = cable.id.toString();
                                    cable.name = "Cable_" + id;
                                    cable.code = "Cable_" + id;
                                    cable.isUnderground = false;
                                    seg1.cable = cable;
                                    //this.isEditable(true, marker);
                                    var coords = polyline.getPath().getArray();
                                    let newCoords = new Array();
                                    coords.forEach(x => {
                                        newCoords.push([x.lng(), x.lat()]);
                                    });
                                    cable.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["LineString"]();
                                    cable.geometry.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].cleanLineCoordinates(newCoords);
                                    cable.measuredLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].getLength(cable.geometry.coordinates);
                                    let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                    supplier.currency = parentThis.getdata.currency;
                                    supplier.name = parentThis.getdata.name;
                                    supplier.stockQty = parentThis.getdata.stockQty;
                                    supplier.price = parentThis.getdata.price;
                                    supplier.validFrom = parentThis.getdata.validFrom;
                                    supplier.validTo = parentThis.getdata.validTo;
                                    cable.suppliers = new Array();
                                    cable.suppliers.push(supplier);
                                    seg1.coordinates = cable.geometry.coordinates;
                                    seg1.cable = cable;
                                    parentThis.design.bluePrint.children[0].segments.push(seg1);
                                    var marker = mapEntitiesHelper.drawLine(cable, "#000000", 2, false, true);
                                    //this.selectedEntity = polyline.data;
                                    _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                        parentThis.selectedEntity = marker.data;
                                    });
                                });
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    //createEntity(entityType, latLng);
                    if (entityType == "Duct") {
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.ductService.getDucts();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                var lineSymbol = {
                                    path: 'M 0,-1 0,1',
                                    strokeOpacity: 1,
                                    scale: 4
                                };
                                var polyline = new google.maps.Polyline({
                                    strokeColor: '#FFA500',
                                    strokeOpacity: 0,
                                    editable: true,
                                    icons: [{
                                            icon: lineSymbol,
                                            offset: '0',
                                            repeat: '20px'
                                        }],
                                });
                                var parentThis = this;
                                let path = polyline.getPath();
                                polyline.setMap(this.map);
                                GMHelper.clearClickListener(this.map, "click");
                                GMHelper.addListener(this.map, "click", function (event) {
                                    polyline.setEditable(true);
                                    path = polyline.getPath();
                                    path.push(event.latLng);
                                });
                                this.map.setOptions({ draggableCursor: 'crosshair' });
                                GMHelper.addListener(polyline, "rightclick", function (event) {
                                    GMHelper.clearClickListener(polyline, "rightclick");
                                    GMHelper.clearClickListener(polyline.map, "click");
                                    polyline.map.setOptions({ draggableCursor: '' });
                                    polyline.setEditable(false);
                                    let id = 0;
                                    if (seg.length != undefined && seg.length > 0) {
                                        if (id == 0) {
                                            for (var i = seg.length - 1; i >= 0; i--) {
                                                if (seg[i].ducts != undefined || seg[i].ducts != null) {
                                                    var ID2 = seg[i].ducts.code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    id = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    id = 1;
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            id = id + 1;
                                        }
                                    }
                                    let seg1 = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_8__["Segment"](); // this.design.bluePrint.children[0].segments;
                                    //seg1.id = Helper.generateObjectId();
                                    let duct = new _entities_models_duct__WEBPACK_IMPORTED_MODULE_23__["Duct"]();
                                    duct.entityType = "Duct";
                                    duct.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    duct.name = "Duct_" + id;
                                    duct.code = "Duct_" + id;
                                    //seg1.ducts = duct;
                                    //this.isEditable(true, marker);
                                    var coords = polyline.getPath().getArray();
                                    let newCoords = new Array();
                                    coords.forEach(x => {
                                        newCoords.push([x.lng(), x.lat()]);
                                    });
                                    duct.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["LineString"]();
                                    duct.geometry.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].cleanLineCoordinates(newCoords);
                                    duct.measuredLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].getLength(duct.geometry.coordinates);
                                    let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                    supplier.currency = parentThis.getdata.currency;
                                    supplier.name = parentThis.getdata.name;
                                    supplier.stockQty = parentThis.getdata.stockQty;
                                    supplier.price = parentThis.getdata.price;
                                    supplier.validFrom = parentThis.getdata.validFrom;
                                    supplier.validTo = parentThis.getdata.validTo;
                                    duct.suppliers = new Array();
                                    duct.suppliers.push(supplier);
                                    //seg1.coordinates = duct.geometry.coordinates;
                                    seg1.ducts = duct;
                                    parentThis.design.bluePrint.children[0].segments.push(seg1);
                                    var marker = mapEntitiesHelper.drawDuctLine(duct, "#000000", 2, false, true);
                                    //this.selectedEntity = polyline.data;
                                    _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                        parentThis.selectedEntity = marker.data;
                                    });
                                });
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "Micro Duct") {
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.ductService.getDucts();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                var lineSymbol = {
                                    path: 'M 0,-1 0,1',
                                    strokeOpacity: 1,
                                    scale: 4
                                };
                                var polyline = new google.maps.Polyline({
                                    strokeColor: '#000000',
                                    strokeOpacity: 0,
                                    editable: true,
                                    icons: [{
                                            icon: lineSymbol,
                                            offset: '0',
                                            repeat: '20px'
                                        }],
                                });
                                var parentThis = this;
                                let path = polyline.getPath();
                                polyline.setMap(this.map);
                                GMHelper.clearClickListener(this.map, "click");
                                GMHelper.addListener(this.map, "click", function (event) {
                                    polyline.setEditable(true);
                                    path = polyline.getPath();
                                    path.push(event.latLng);
                                });
                                this.map.setOptions({ draggableCursor: 'crosshair' });
                                GMHelper.addListener(polyline, "rightclick", function (event) {
                                    GMHelper.clearClickListener(polyline, "rightclick");
                                    GMHelper.clearClickListener(polyline.map, "click");
                                    polyline.map.setOptions({ draggableCursor: '' });
                                    polyline.setEditable(false);
                                    let id = 0;
                                    if (seg.length != undefined && seg.length > 0) {
                                        if (id == 0) {
                                            for (var i = seg.length - 1; i >= 0; i--) {
                                                if (seg[i].ducts != undefined || seg[i].ducts != null) {
                                                    var ID2 = seg[i].ducts.code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    id = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    id = 1;
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            id = id + 1;
                                        }
                                    }
                                    let seg1 = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_8__["Segment"](); // this.design.bluePrint.children[0].segments;
                                    seg1.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    let microduct = new _entities_models_MicroDuct__WEBPACK_IMPORTED_MODULE_20__["MicroDuct"]();
                                    microduct.entityType = "MicroDuct";
                                    microduct.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                    var ids = microduct.id.toString();
                                    microduct.name = "MicroDuct_" + id;
                                    microduct.code = "MicroDuct_" + id;
                                    seg1.microduct = microduct;
                                    //this.isEditable(true, marker);
                                    var coords = polyline.getPath().getArray();
                                    let newCoords = new Array();
                                    coords.forEach(x => {
                                        newCoords.push([x.lng(), x.lat()]);
                                    });
                                    microduct.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["LineString"]();
                                    microduct.geometry.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].cleanLineCoordinates(newCoords);
                                    microduct.measuredLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].getLength(microduct.geometry.coordinates);
                                    let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                    supplier.currency = parentThis.getdata.currency;
                                    supplier.name = parentThis.getdata.name;
                                    supplier.stockQty = parentThis.getdata.stockQty;
                                    supplier.price = parentThis.getdata.price;
                                    supplier.validFrom = parentThis.getdata.validFrom;
                                    supplier.validTo = parentThis.getdata.validTo;
                                    microduct.suppliers = new Array();
                                    microduct.suppliers.push(supplier);
                                    //seg1.coordinates = microduct.geometry.coordinates;
                                    seg1.microduct = microduct;
                                    parentThis.design.bluePrint.children[0].segments.push(seg1);
                                    var marker = mapEntitiesHelper.drawMicroDuctLine(microduct, "#000000", 2, false, true);
                                    //this.selectedEntity = polyline.data;
                                    _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                        parentThis.selectedEntity = marker.data;
                                    });
                                });
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "Pop") {
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.chamberService.getChambers();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                if (seg) {
                                    if (seg[0].pops == null) {
                                        seg[0].pops = new Array();
                                        let pop = new _entities_models_pop__WEBPACK_IMPORTED_MODULE_21__["PoP"]();
                                        pop.entityType = "PoP";
                                        pop.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        var Uid = pop.id.toString();
                                        pop.name = 'POP_' + Uid.substring(0, 5);
                                        pop.code = pop.name;
                                        pop.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(pop, { url: "images/map-entities/pop.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = "dollar";
                                        supplier.name = "supplier1";
                                        supplier.stockQty = 7;
                                        supplier.price = 1200;
                                        supplier.validFrom = "2019-12-18";
                                        supplier.validTo = "2019-12-25";
                                        pop.suppliers = new Array();
                                        pop.suppliers.push(supplier);
                                        seg[0].pops.push(pop);
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        this.isEditable(true, marker);
                                    }
                                    else {
                                        var popLength = seg[0].pops.length + 1;
                                        let newpop = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].pops[0]);
                                        var LastPopIndex = this.Data.length - 1;
                                        var k = false;
                                        if (this.PopIncrementalID == 0) {
                                            for (var i = seg[0].pops.length - 1; i >= 0; i--) {
                                                //seg[0].splitters[20].code
                                                if (seg[0].pops[i].code != undefined || seg[0].pops[i].code != null) {
                                                    var ID2 = seg[0].pops[i].code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    this.PopIncrementalID = parseInt(ID4[1]) + 1;
                                                    k = true;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            this.PopIncrementalID = this.PopIncrementalID + 1;
                                        }
                                        newpop.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        newpop.code = 'Pop_' + this.PopIncrementalID;
                                        newpop.name = 'Pop_' + this.PopIncrementalID;
                                        newpop.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(newpop, { url: "images/map-entities/pop.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        seg[0].pops.push(newpop);
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        this.isEditable(true, marker);
                                    }
                                }
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "FAT") {
                        this.fatdata = new _entities_models_fat__WEBPACK_IMPORTED_MODULE_33__["FAT"]();
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.fatService.getfats();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                if (seg) {
                                    this.CurrentselectedEntity = null;
                                    if (seg[0].fats == null) {
                                        seg[0].fats = new Array();
                                        this.fatdata.entityType = "FAT";
                                        this.fatdata.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.fatdata.code = "Fat_1";
                                        this.fatdata.name = "Fat_1";
                                        this.fatdata.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.fatdata, { url: "images/map-entities/FAT.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.fatdata.suppliers = new Array();
                                        this.fatdata.suppliers.push(supplier);
                                        seg[0].fats.push(this.fatdata);
                                        this.isEditable(true, marker);
                                    }
                                    else {
                                        this.CurrentselectedEntity = null;
                                        //this.fatdata = null;
                                        this.fatdata = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].fats[0]);
                                        if (this.fatdata == undefined) {
                                            this.fatdata = new _entities_models_fat__WEBPACK_IMPORTED_MODULE_33__["FAT"]();
                                        }
                                        if (this.FatIncrementalID == 0) {
                                            for (var i = seg[0].fats.length - 1; i >= 0; i--) {
                                                if (seg[0].fats[i].code != undefined || seg[0].fats[i].code != null) {
                                                    var ID2 = seg[0].fats[i].code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    this.FatIncrementalID = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            this.FatIncrementalID = this.FatIncrementalID + 1;
                                        }
                                        this.fatdata.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.fatdata.code = 'Fat_' + this.FatIncrementalID;
                                        this.fatdata.name = 'Fat_' + this.FatIncrementalID;
                                        this.fatdata.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.fatdata, { url: "images/map-entities/FAT.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.fatdata.suppliers = new Array();
                                        this.fatdata.suppliers.push(supplier);
                                        seg[0].fats.push(this.fatdata);
                                        this.isEditable(true, marker);
                                    }
                                }
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                    if (entityType == "FDT") {
                        this.fatdata = new _entities_models_fat__WEBPACK_IMPORTED_MODULE_33__["FAT"]();
                        this.masterEntities = null;
                        this.getdata = null;
                        let masterSvc = this.fdtService.getfdts();
                        masterSvc.subscribe(resp => {
                            this.masterEntities = null;
                            if (resp.data != null && resp.data.length > 0) {
                                this.masterEntities = resp.data;
                                for (var i = 0; i <= resp.data.length - 1; i++) {
                                    for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                        if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                            this.getdata = resp.data[i].suppliers[j];
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                if (seg) {
                                    this.CurrentselectedEntity = null;
                                    if (seg[0].fdts == null) {
                                        seg[0].fdts = new Array();
                                        this.fdt.entityType = "FDT";
                                        this.fdt.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.fdt.code = "Fdt_1";
                                        this.fdt.name = "Fdt_1";
                                        ;
                                        this.fdt.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.fdt, { url: "images/map-entities/FDT.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.fdt.suppliers = new Array();
                                        this.fdt.suppliers.push(supplier);
                                        seg[0].fdts.push(this.fdt);
                                        this.isEditable(true, marker);
                                    }
                                    else {
                                        this.CurrentselectedEntity = null;
                                        this.fdt = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].fdts[0]);
                                        if (this.fdt == undefined) {
                                            this.fdt = new _entities_models_Solution2_zip__WEBPACK_IMPORTED_MODULE_34__["FDT"]();
                                        }
                                        if (this.FdtIncrementalID == 0) {
                                            for (var i = seg[0].fdts.length - 1; i >= 0; i--) {
                                                if (seg[0].fdts[i].code != undefined || seg[0].fdts[i].code != null) {
                                                    var ID2 = seg[0].fdts[i].code;
                                                    var ID3 = ID2.toString();
                                                    var ID4 = ID3.split('_');
                                                    this.FdtIncrementalID = parseInt(ID4[1]) + 1;
                                                    break;
                                                }
                                                else {
                                                    continue;
                                                }
                                            }
                                        }
                                        else {
                                            this.FdtIncrementalID = this.FdtIncrementalID + 1;
                                        }
                                        this.fdt.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                        this.fdt.code = 'Fdt_' + this.FdtIncrementalID;
                                        this.fdt.name = 'Fdt_' + this.FdtIncrementalID;
                                        this.fdt.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([latLng.lng(), latLng.lat()]);
                                        var marker = mapEntitiesHelper.drawPoint(this.fdt, { url: "images/map-entities/FDT.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                        this.CurrentselectedEntity = marker.data;
                                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                            this.selectedEntity = marker.data;
                                        });
                                        let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                        supplier.currency = this.getdata.currency;
                                        supplier.name = this.getdata.name;
                                        supplier.stockQty = this.getdata.stockQty;
                                        supplier.price = this.getdata.price;
                                        supplier.validFrom = this.getdata.validFrom;
                                        supplier.validTo = this.getdata.validTo;
                                        this.fdt.suppliers = new Array();
                                        this.fdt.suppliers.push(supplier);
                                        seg[0].fdts.push(this.fdt);
                                        this.isEditable(true, marker);
                                        //this.isEditable(true, marker);
                                    }
                                }
                            }
                        }, (err) => {
                            this.masterEntities = new Array();
                        });
                    }
                }
            });
        }
    }
    onHover(event) {
        var location = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].convertToPosition(event);
        var bounds = new google.maps.LatLngBounds();
        if (this.marker != null) {
            this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
            position: location,
            cursor: 'pointer',
            icon: 'images/dwnArrow.png',
            map: this.map
        });
        this.marker.setAnimation(google.maps.Animation.BOUNCE);
        bounds.extend(location);
        this.map.fitBounds(bounds);
    }
    onspliterHover(event) {
        let data;
        let laln;
        let id;
        //for (let i = 0; i < this.design.bluePrint.children.length; i++) {
        //    for (let j = 0; j < this.design.bluePrint.children[i].segments.length; j++) {
        //        if (this.design.bluePrint.children[i].segments[j].splitters != undefined) {
        //            data = $.grep(this.design.bluePrint.children[i].segments[j].splitters, function (n) {
        //                if (n.code == event) {
        //                    laln = n.geometry.coordinates;
        //                    return laln;
        //                }
        //            })
        //        }
        //    }
        //}
        for (let i = 0; i < this.design.bluePrint.children.length; i++) {
            for (let j = 0; j < this.design.bluePrint.children[i].children.length; j++) {
                data = $.grep(this.design.bluePrint.children[i].children[j].segments[0].splitters, function (n) {
                    return n.geometry.coordinates;
                });
            }
        }
        for (let i = 0; i < data.length; i++) {
            var location = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].convertToPosition(data[i].geometry.coordinates);
            //Check if the Location is in Bounds of the Map
            //this.map.getBounds().contains(location);
            var bounds = new google.maps.LatLngBounds();
            if (this.marker != null) {
                this.marker.setMap(null);
            }
            this.marker = new google.maps.Marker({
                position: location,
                cursor: 'pointer',
                icon: 'images/dwnArrow.png',
                map: this.map
            });
            this.marker.setAnimation(google.maps.Animation.BOUNCE);
            this.marker.Animation = "Bounce";
            bounds.extend(location);
            this.map.fitBounds(bounds);
        }
        //for (let i = 0; i < this.design.bluePrint.children.length; i++) {
        //    for (let i = 0; i < this.design.bluePrint.children[i].children.length; i++) {
        //        data = $.grep(this.design.bluePrint.children[i].children, function (n) {
        //            if (n.levelId == id) {
        //                return n;
        //            }
        //        })
        //    }
        //}
    }
    onLeave() {
        //this.marker.setAnimation(null);
        this.map.setMap(null);
        this.marker.setMap(null);
        // this.map(null);
    }
    isEditable(value, marker) {
        if (value) {
            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, "rightclick", (event) => {
                if (marker.draggable)
                    marker.setDraggable(false);
                else
                    marker.setDraggable(true);
            });
            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'dragend', (event) => {
                var latLng = event.latLng;
                marker.data.geometry.coordinates = [latLng.lng(), latLng.lat()];
                //let index = this.changedSegments.findIndex(x => (x.levelId == marker.data.levelId && x.segmentId == marker.data.segmentId));
                //if (index == -1)
                //   this.changedSegments.push({ levelId: marker.data.levelId, segmentId: marker.data.segmentId });
            });
        }
    }
    ngOnChanges(changes) {
        this.selectedEntity = null;
        if (this.design.bluePrint && this.design.bluePrint.children && this.design.bluePrint.children.length > 0) {
            this.entitiesHelper = new _services_entities_helper__WEBPACK_IMPORTED_MODULE_7__["EntitiesHelper"](this.design.bookingIds, this.design.generatedCodes);
            this.generateMapEntities(this.design.bluePrint);
            this.isEntitiesGenerated = true;
            this.map.setCenter({ lat: this.design.bluePrint.coordinates[1], lng: this.design.bluePrint.coordinates[0] });
        }
        else {
            this.isEntitiesGenerated = false;
        }
        this.des = this.design.bluePrint;
    }
    isAllSelected() {
        const numSelected = this.selectedLayers ? this.selectedLayers.length : 0;
        const numRows = this.layers.length;
        return numSelected === numRows;
    }
    toggleSelection(layer) {
        var index = -1;
        if (this.selectedLayers)
            index = this.selectedLayers.findIndex(x => x == layer.id);
        else
            this.selectedLayers = [];
        if (index == -1)
            this.selectedLayers.push(layer.id);
        else
            this.selectedLayers.splice(index, 1);
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.selectedLayers = [];
        }
        else {
            this.selectedLayers = [];
            this.layers.forEach(x => this.selectedLayers.push(x.id));
        }
    }
    PlotEntity(value) {
        this.DeleteFlag = null;
        this.DeleteFlag = value;
        let ent = this.selectedEntity;
        let seg = this.design.bluePrint.children[0].segments;
        let mapEntitiesHelper = new _services_map_entities_helper__WEBPACK_IMPORTED_MODULE_9__["MapEntitiesHelper"](this.map);
        if (seg) {
            if (value == 'Splitter') {
                this.getdata = null;
                let masterSvc = this.splitterService.getSplitters();
                masterSvc.subscribe(resp => {
                    this.masterEntities = null;
                    if (resp.data != null && resp.data.length > 0) {
                        this.masterEntities = resp.data;
                        for (var i = 0; i <= resp.data.length - 1; i++) {
                            for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                        if (seg) {
                            if (seg[0].splitters == null) {
                                seg[0].splitters = new Array();
                                let splitters = new _entities_models_splitter__WEBPACK_IMPORTED_MODULE_16__["Splitter"]();
                                splitters.entityType = "Splitter";
                                splitters.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                splitters.code = "Splitter_1";
                                splitters.name = "Splitter_1";
                                splitters.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                                var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                supplier.currency = this.getdata.currency;
                                supplier.name = this.getdata.name;
                                supplier.stockQty = this.getdata.stockQty;
                                supplier.price = this.getdata.price;
                                supplier.validFrom = this.getdata.validFrom;
                                supplier.validTo = this.getdata.validTo;
                                splitters.suppliers = new Array();
                                splitters.suppliers.push(supplier);
                                seg[0].splitters.push(splitters);
                                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                });
                                this.isEditable(true, marker);
                            }
                            else {
                                let splitters = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].splitters[0]);
                                if (splitters == undefined) {
                                    splitters = new _entities_models_splitter__WEBPACK_IMPORTED_MODULE_16__["Splitter"]();
                                }
                                var k = false;
                                if (this.SplitterIncrementalID == 0) {
                                    for (var i = seg[0].splitters.length - 1; i >= 0; i--) {
                                        //seg[0].splitters[20].code
                                        if (seg[0].splitters[i].code != undefined || seg[0].splitters[i].code != null) {
                                            var ID2 = seg[0].splitters[i].code;
                                            var ID3 = ID2.toString();
                                            var ID4 = ID3.split('_');
                                            this.SplitterIncrementalID = parseInt(ID4[1]) + 1;
                                            k = true;
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                else {
                                    this.SplitterIncrementalID = this.SplitterIncrementalID + 1;
                                }
                                splitters.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                splitters.code = 'Splitter_' + this.SplitterIncrementalID;
                                splitters.name = 'Splitters_' + this.SplitterIncrementalID;
                                //newPole.name = newPole.code;
                                splitters.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                                var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/splitter.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                supplier.currency = this.getdata.currency;
                                supplier.name = this.getdata.name;
                                supplier.stockQty = this.getdata.stockQty;
                                supplier.price = this.getdata.price;
                                supplier.validFrom = this.getdata.validFrom;
                                supplier.validTo = this.getdata.validTo;
                                splitters.suppliers = new Array();
                                splitters.suppliers.push(supplier);
                                seg[0].splitters.push(splitters);
                                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                });
                                this.isEditable(true, marker);
                            }
                        }
                    }
                }, (err) => {
                    this.masterEntities = new Array();
                });
            }
            if (value == 'Splice Closure') {
                this.getdata = null;
                let masterSvc = this.spliceClosureService.getSpliceClosures();
                masterSvc.subscribe(resp => {
                    this.masterEntities = null;
                    if (resp.data != null && resp.data.length > 0) {
                        this.masterEntities = resp.data;
                        for (var i = 0; i <= resp.data.length - 1; i++) {
                            for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                        if (seg) {
                            this.onEntityTypeChange("SpliceClosure");
                            if (seg[0].spliceClosures == null) {
                                seg[0].spliceClosures = new Array();
                                let spliceclosures = new src_app_entities_models_spliceClosure__WEBPACK_IMPORTED_MODULE_18__["SpliceClosure"]();
                                spliceclosures.entityType = "SpliceClosure";
                                spliceclosures.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                spliceclosures.name = "SpliceClosure_1";
                                spliceclosures.code = "SpliceClosure_1";
                                spliceclosures.parentId = ent.id;
                                spliceclosures.parentEntityType = ent.entityType;
                                spliceclosures.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                                var marker = mapEntitiesHelper.drawPoint(spliceclosures, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                supplier.currency = this.getdata.currency;
                                supplier.name = this.getdata.name;
                                supplier.stockQty = this.getdata.stockQty;
                                supplier.price = this.getdata.price;
                                supplier.validFrom = this.getdata.validFrom;
                                supplier.validTo = this.getdata.validTo;
                                spliceclosures.suppliers = new Array();
                                spliceclosures.suppliers.push(supplier);
                                seg[0].spliceClosures.push(spliceclosures);
                                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                });
                                this.isEditable(true, marker);
                            }
                            else {
                                let spliceClosure = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].spliceClosures[0]);
                                if (spliceClosure == undefined) {
                                    spliceClosure = new src_app_entities_models_spliceClosure__WEBPACK_IMPORTED_MODULE_18__["SpliceClosure"]();
                                }
                                var k = false;
                                if (this.SpliceClosureIncrementalID == 0) {
                                    for (var i = seg[0].spliceClosures.length - 1; i >= 0; i--) {
                                        //seg[0].splitters[20].code
                                        if (seg[0].spliceClosures[i].code != undefined || seg[0].spliceClosures[i].code != null) {
                                            var ID2 = seg[0].spliceClosures[i].code;
                                            var ID3 = ID2.toString();
                                            var ID4 = ID3.split('_');
                                            this.SpliceClosureIncrementalID = parseInt(ID4[1]) + 1;
                                            k = true;
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                else {
                                    this.SpliceClosureIncrementalID = this.SpliceClosureIncrementalID + 1;
                                }
                                spliceClosure.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                spliceClosure.code = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                                spliceClosure.name = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                                spliceClosure.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                                var marker = mapEntitiesHelper.drawPoint(spliceClosure, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                supplier.currency = this.getdata.currency;
                                supplier.name = this.getdata.name;
                                supplier.stockQty = this.getdata.stockQty;
                                supplier.price = this.getdata.price;
                                supplier.validFrom = this.getdata.validFrom;
                                supplier.validTo = this.getdata.validTo;
                                spliceClosure.suppliers = new Array();
                                spliceClosure.suppliers.push(supplier);
                                seg[0].spliceClosures.push(spliceClosure);
                                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                });
                                this.isEditable(true, marker);
                            }
                        }
                    }
                }, (err) => {
                    this.masterEntities = new Array();
                });
            }
            if (value == 'odf') {
                this.masterEntities = null;
                this.getdata = null;
                let masterSvc = this.odfService.getODFs();
                masterSvc.subscribe(resp => {
                    this.masterEntities = null;
                    if (resp.data != null && resp.data.length > 0) {
                        this.masterEntities = resp.data;
                        for (var i = 0; i <= resp.data.length - 1; i++) {
                            for (var j = 0; j <= resp.data[i].suppliers.length - 1; j++) {
                                if (resp.data[i].suppliers[j].default != undefined && resp.data[i].suppliers[j].default == "true") {
                                    this.getdata = resp.data[i].suppliers[j];
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                        if (seg) {
                            if (seg[0].odfs == null) {
                                seg[0].odfs = new Array();
                                let odf = new _entities_models_odf__WEBPACK_IMPORTED_MODULE_22__["ODF"]();
                                odf.entityType = "ODF";
                                odf.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                var Uid = odf.id.toString();
                                odf.code = 'ODF_1';
                                odf.name = odf.code;
                                odf.parentId = ent.id;
                                odf.parentEntityType = ent.entityType;
                                odf.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                                var marker = mapEntitiesHelper.drawPoint(odf, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                supplier.currency = this.getdata.currency;
                                supplier.name = this.getdata.name;
                                supplier.stockQty = this.getdata.stockQty;
                                supplier.price = this.getdata.price;
                                supplier.validFrom = this.getdata.validFrom;
                                supplier.validTo = this.getdata.validTo;
                                odf.suppliers = new Array();
                                odf.suppliers.push(supplier);
                                seg[0].odfs.push(odf);
                                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                });
                                this.isEditable(true, marker);
                            }
                            else {
                                let odfss = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].odfs[0]);
                                if (odfss == undefined) {
                                    odfss = new _entities_models_odf__WEBPACK_IMPORTED_MODULE_22__["ODF"]();
                                }
                                var k = false;
                                if (this.OdfIncrementalID == 0) {
                                    for (var i = seg[0].odfs.length - 1; i >= 0; i--) {
                                        //seg[0].splitters[20].code
                                        if (seg[0].odfs[i].code != undefined || seg[0].odfs[i].code != null) {
                                            var ID2 = seg[0].odfs[i].code;
                                            var ID3 = ID2.toString();
                                            var ID4 = ID3.split('_');
                                            this.OdfIncrementalID = parseInt(ID4[1]) + 1;
                                            k = true;
                                            break;
                                        }
                                        else {
                                            continue;
                                        }
                                    }
                                }
                                else {
                                    this.OdfIncrementalID = this.OdfIncrementalID + 1;
                                }
                                odfss.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                                odfss.code = 'Odf_' + this.OdfIncrementalID;
                                odfss.name = 'Odf_' + this.OdfIncrementalID;
                                odfss.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                                var marker = mapEntitiesHelper.drawPoint(odfss, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                                let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                                supplier.currency = this.getdata.currency;
                                supplier.name = this.getdata.name;
                                supplier.stockQty = this.getdata.stockQty;
                                supplier.price = this.getdata.price;
                                supplier.validFrom = this.getdata.validFrom;
                                supplier.validTo = this.getdata.validTo;
                                odfss.suppliers = new Array();
                                odfss.suppliers.push(supplier);
                                seg[0].odfs.push(odfss);
                                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                    this.selectedEntity = marker.data;
                                });
                                this.isEditable(true, marker);
                            }
                        }
                    }
                }, (err) => {
                    this.masterEntities = new Array();
                });
            }
        }
    }
    refreshLayers() {
        if (this.design.bluePrint) {
            if (this.isEntitiesGenerated == false) {
                this.generateMapEntities(this.design.bluePrint);
                this.isEntitiesGenerated = true;
                this.map.setCenter({ lat: this.design.bluePrint.coordinates[1], lng: this.design.bluePrint.coordinates[0] });
            }
        }
        this.toggleEntities(this.design.bluePrint);
    }
    refreshBlueprint() {
        $("#ajax-loading").show();
        this.entitiesHelper = new _services_entities_helper__WEBPACK_IMPORTED_MODULE_7__["EntitiesHelper"](this.design.bookingIds, this.design.generatedCodes);
        this.changedSegments.forEach(x => {
            this.refreshSegment(this.design.bluePrint, x.levelId, x.segmentId);
        });
        this.bomHelper.generateBOQ(this.design);
        $("#ajax-loading").hide();
    }
    refreshSegment(geoNode, levelId, segmentId) {
        if (geoNode.segments) {
            let segment = geoNode.segments.find(x => x.id == segmentId);
            if (segment) {
                if (segment.chambers && segment.chambers.length > 0) {
                    segment.coordinates = segment.cable.geometry.coordinates;
                    this.mapEntitiesHelper.removeMapObjects(segment.chambers);
                    segment.chambers = this.entitiesHelper.createChambers(segment.chambers[0], 100, segment, 10, 10);
                    this.plotPointEntities(segment.chambers, "Chamber", levelId, segmentId, true, true);
                }
                if (segment.poles && segment.poles.length > 0) {
                    segment.coordinates = segment.cable.geometry.coordinates;
                    this.mapEntitiesHelper.removeMapObjects(segment.poles);
                    segment.poles = this.entitiesHelper.createPoles(segment.poles[0], 100, segment, 10, 10);
                    this.plotPointEntities(segment.poles, "Pole", levelId, segmentId, true, true);
                }
                return false;
            }
        }
        if (geoNode.children && geoNode.children.length > 0)
            geoNode.children.forEach(g => {
                this.refreshSegment(g, g.id, segmentId);
            });
    }
    toggleEntities(group) {
        if (group.children) {
            group.children.forEach(x => {
                if (x.levelName == "homepasses") {
                    //this.toggleEntity(x, this.selectedLayers.includes("Homepass"));
                    this.setEntitiesVisible(x, this.selectedLayers.includes("Homepass"));
                }
                //if (x.level == "Feeder") {
                //    this.toggleEntity(x, this.selectedLayers.includes("Splitter"));
                //}
            });
        }
        if (group.segments)
            group.segments.forEach(x => {
                this.setEntitiesVisible(x.cable, this.selectedLayers.includes("Cable"));
                this.setEntitiesVisible(x.ducts, this.selectedLayers.includes("Duct"));
                this.setEntitiesVisible(x.microduct, this.selectedLayers.includes("MicroDuct"));
                this.setEntitiesVisible(x.chambers, this.selectedLayers.includes("Chamber"));
                this.setEntitiesVisible(x.odfs, this.selectedLayers.includes("ODF"));
                this.setEntitiesVisible(x.poles, this.selectedLayers.includes("Pole"));
                this.setEntitiesVisible(x.splitters, this.selectedLayers.includes("Splitter"));
                this.setEntitiesVisible(x.spliceClosures, this.selectedLayers.includes("SpliceClosure"));
                this.setEntitiesVisible(x.pops, this.selectedLayers.includes("PoP"));
            });
        if (group.children && group.children.length > 0)
            group.children.forEach(g => {
                this.toggleEntities(g);
            });
    }
    setEntitiesVisible(entities, isVisible) {
        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    if (x && x['mapObject']) {
                        x['mapObject'].setVisible(isVisible);
                    }
                });
            }
            else {
                if (entities['mapObject']) {
                    entities['mapObject'].setVisible(isVisible);
                }
            }
        }
    }
    generateMapEntities(group) {
        let levelId = group.id;
        if (group.children)
            group.children.forEach(x => {
                if (x.levelName == "homepasses") {
                    //x['entityType'] = "Homepass";
                    //let entityIcon = this.entityIcons.find(i => i.entityType == 'Homepass');
                    //this.drawPoint(x, entityIcon.icon, false);
                    this.plotPointEntities(x, "Homepass", levelId, x.id, true, true);
                }
                //else {
                //    x['entityType'] = "Splitter";
                //    let entityIcon = this.entityIcons.find(i => i.entityType == 'Splitter');
                //    this.drawPoint(x, entityIcon.icon, true);
                //}
            });
        if (group.segments)
            group.segments.forEach(x => {
                this.plotLineEntities(x.cable, "Cable", levelId, x.id, true, true);
                this.plotLineEntities(x.ducts, "Duct", levelId, x.id, true, true);
                this.plotLineEntities(x.microduct, "MicroDuct", levelId, x.id, true, true);
                this.plotPointEntities(x.chambers, "Chamber", levelId, x.id, true, true);
                this.plotPointEntities(x.odfs, "ODF", levelId, x.id, true, true);
                this.plotPointEntities(x.poles, "Pole", levelId, x.id, true, true);
                this.plotPointEntities(x.splitters, "Splitter", levelId, x.id, true, true);
                this.plotPointEntities(x.spliceClosures, "SpliceClosure", levelId, x.id, true, true);
                this.plotPointEntities(x.pops, "PoP", levelId, x.id, true, true);
                this.plotPointEntities(x.fats, "FAT", levelId, x.id, true, true);
                this.plotPointEntities(x.fdts, "FDT", levelId, x.id, true, true);
            });
        if (group.children && group.children.length > 0)
            group.children.forEach(g => {
                this.generateMapEntities(g);
            });
    }
    ExportTOPdf() {
        var data = window.document.getElementById('designMap');
        html2canvas__WEBPACK_IMPORTED_MODULE_31___default()(data, { allowTaint: true, useCORS: true }).then(canvas => {
            const contentDataURL = canvas.toDataURL('image/jpeg');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_32___default.a('landscape'); // A4 size page of PDF  
            pdf.addImage(contentDataURL, 'JPEG', 10, 10, 280, 150, null, 'FAST');
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    }
    plotPointEntities(entities, entityType, levelId, segmentId, isEditable, attachMapObject) {
        let entityIcon = this.entityIcons.find(i => i.entityType == entityType);
        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    this.plotPointEntity(x, entityIcon.icon, levelId, segmentId, isEditable, attachMapObject);
                });
            }
            else {
                this.plotPointEntity(entities, entityIcon.icon, levelId, segmentId, isEditable, attachMapObject);
            }
        }
    }
    plotPointEntity(entity, entityIcon, levelId, segmentId, isEditable, attachMapObject) {
        if (entity) {
            entity["levelId"] = levelId;
            entity["segmentId"] = segmentId;
            let marker = this.mapEntitiesHelper.drawPoint(entity, entityIcon, isEditable, attachMapObject);
            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                if (marker.data.levelName == "homepasses") {
                    let homepass = this.design.homepasses.find(x => x.id == marker.data.id);
                    if (homepass) {
                        this.selectedEntity = homepass;
                        this.selectedEntity["entityType"] = "Homepass";
                    }
                }
                else
                    this.selectedEntity = marker.data;
                if (this.selectedEntity.entityType == "Splitter") {
                    this.entityType = this.selectedEntity.code;
                    for (let i = 0; i < this.design.bluePrint.children.length; i++) {
                        for (let j = 0; j < this.design.bluePrint.children[i].segments.length; j++) {
                            for (let k = 0; k < this.design.bluePrint.children[i].segments[j].splitters.length; j++) {
                                if (this.design.bluePrint.children[i].segments[j].splitters[k].code == this.entityType) {
                                    this.filterResult = this.design.bluePrint.children[i].children;
                                }
                            }
                        }
                    }
                }
                //if (this.selectedEntity.entityType == "Splitter") {
                //    this.entityType = this.selectedEntity.code;
                //    for (let i = 0; i < this.design.bluePrint.children.length; i++) {
                //        if (this.design.bluePrint.children[i].id == this.selectedEntity.levelId) {
                //            this.filterResult = this.design.bluePrint.children[i].children;
                //        }
                //    }
                //}
            });
            if (isEditable) {
                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, "rightclick", (event) => {
                    if (marker.draggable)
                        marker.setDraggable(false);
                    else
                        marker.setDraggable(true);
                });
                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'dragend', (event) => {
                    var latLng = event.latLng;
                    marker.data.geometry.coordinates = [latLng.lng(), latLng.lat()];
                    //let index = this.changedSegments.findIndex(x => (x.levelId == marker.data.levelId && x.segmentId == marker.data.segmentId));
                    //if (index == -1)
                    //   this.changedSegments.push({ levelId: marker.data.levelId, segmentId: marker.data.segmentId });
                });
            }
        }
    }
    plotLineEntities(entities, entityType, levelId, segmentId, isEditable, attachMapObject) {
        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    this.plotLineEntity(x, levelId, segmentId, isEditable, attachMapObject);
                });
            }
            else {
                this.plotLineEntity(entities, levelId, segmentId, isEditable, attachMapObject);
            }
        }
    }
    plotLineEntity(entity, levelId, segmentId, isEditable, attachMapObject) {
        if (entity) {
            entity["levelId"] = levelId;
            entity["segmentId"] = segmentId;
            let polyLine = this.mapEntitiesHelper.drawLine(entity, "#000", 2, isEditable, attachMapObject);
            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(polyLine, 'click', (event) => {
                this.selectedEntity = polyLine.data;
            });
            if (isEditable) {
                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(polyLine, "rightclick", (event) => {
                    if (polyLine.editable)
                        polyLine.setEditable(false);
                    else
                        polyLine.setEditable(true);
                });
                _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(polyLine.getPath(), 'set_at', () => {
                    var coords = polyLine.getPath().getArray();
                    let newCoords = new Array();
                    coords.forEach(x => {
                        newCoords.push([x.lng(), x.lat()]);
                    });
                    polyLine.data.geometry.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].cleanLineCoordinates(newCoords);
                    polyLine.data.measuredLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].getLength(polyLine.data.geometry.coordinates);
                    let index = this.changedSegments.findIndex(x => (x.levelId == polyLine.data.levelId && x.segmentId == polyLine.data.segmentId));
                    if (index == -1)
                        this.changedSegments.push({ levelId: polyLine.data.levelId, segmentId: polyLine.data.segmentId });
                });
            }
        }
    }
    deleteEntity() {
        let seg = this.design.bluePrint.children[0].segments;
        let segments = this.design.bluePrint.children;
        if (this.selectedEntity.entityType == 'Chamber') {
            for (var i = seg[0].splitters.length - 1; i >= 0; i--) {
                if (seg[0].splitters[i].parentId == this.selectedEntity.id) {
                    this.mapEntitiesHelper.removeMapObjects(seg[0].splitters[i]);
                }
            }
            for (var i = seg[0].spliceClosures.length - 1; i >= 0; i--) {
                if (seg[0].spliceClosures[i].parentId == this.selectedEntity.id) {
                    this.mapEntitiesHelper.removeMapObjects(seg[0].spliceClosures[i]);
                }
            }
        }
        if (this.selectedEntity.entityType == 'PoP') {
            for (var i = seg[0].pops.length - 1; i >= 0; i--) {
                if (seg[0].pops[i].parentId == this.selectedEntity.id) {
                    this.mapEntitiesHelper.removeMapObjects(seg[0].pops[i]);
                }
            }
        }
        if (this.selectedEntity.entityType == 'Cable') {
            for (var i = 0; i <= segments.length - 1; i++) {
                //let S = this.design.bluePrint.children[i].segments.length;
                for (var j = 0; j <= segments[i].segments.length - 1; j++) {
                    if (this.design.bluePrint.children[i].segments[j].cable != undefined) {
                        if (this.design.bluePrint.children[i].segments[j].cable.code == this.selectedEntity.code) {
                            //this.design.bluePrint.children[i].segments.findIndex(j);
                            if (this.design.bluePrint.children[i].segments[j].poles != undefined) {
                                var Poles = this.design.bluePrint.children[i].segments[j].poles.length;
                                if (Poles > 0) {
                                    for (var k = 0; k <= Poles - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].poles[k]);
                                    }
                                }
                            }
                            if (this.design.bluePrint.children[i].segments[j].chambers != undefined) {
                                var Chambers = this.design.bluePrint.children[i].segments[j].chambers.length;
                                if (Chambers > 0) {
                                    for (var k = 0; k <= Chambers - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].chambers[k]);
                                    }
                                }
                            }
                            if (this.design.bluePrint.children[i].segments[j].homepasses != undefined) {
                                var HomePasses = this.design.bluePrint.children[i].segments[j].homepasses.length;
                                if (HomePasses > 0) {
                                    for (var k = 0; k <= HomePasses - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].homepasses[k]);
                                    }
                                }
                            }
                            if (this.design.bluePrint.children[i].segments[j].odfs != undefined) {
                                var ODFS = this.design.bluePrint.children[i].segments[j].odfs.length;
                                if (ODFS > 0) {
                                    for (var k = 0; k <= ODFS - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].odfs[k]);
                                    }
                                }
                            }
                            if (this.design.bluePrint.children[i].segments[j].pops != undefined) {
                                var POPS = this.design.bluePrint.children[i].segments[j].pops.length;
                                if (POPS > 0) {
                                    for (var k = 0; k <= POPS - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].pops[k]);
                                    }
                                }
                            }
                            if (this.design.bluePrint.children[i].segments[j].spliceClosures != undefined) {
                                var SpliceClosures = this.design.bluePrint.children[i].segments[j].spliceClosures.length;
                                if (SpliceClosures > 0) {
                                    for (var k = 0; k <= SpliceClosures - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].spliceClosures[k]);
                                    }
                                }
                            }
                            if (this.design.bluePrint.children[i].segments[j].splitters != undefined) {
                                var Splitters = this.design.bluePrint.children[i].segments[j].splitters.length;
                                if (Splitters > 0) {
                                    for (var k = 0; k <= Splitters - 1; k++) {
                                        this.mapEntitiesHelper.removeMapObjects(this.design.bluePrint.children[i].segments[j].splitters[k]);
                                    }
                                }
                            }
                            //this.design.bluePrint.children.splice(i, 1);
                            this.design.bluePrint.children[i].segments.splice(j, 1);
                            this.mapEntitiesHelper.removeMapObjects(this.selectedEntity);
                            return false;
                        }
                    }
                }
            }
        }
        this.mapEntitiesHelper.removeMapObjects(this.selectedEntity);
        if (this.selectedEntity.entityType == "MicroDuct" || this.selectedEntity.entityType == "Duct") {
            _services_geoNode_helper__WEBPACK_IMPORTED_MODULE_10__["GeoNodeHelper"].deleteLineSegmentEntity(this.design.bluePrint, this.selectedEntity.id, this.selectedEntity.entityType);
        }
        else {
            _services_geoNode_helper__WEBPACK_IMPORTED_MODULE_10__["GeoNodeHelper"].deleteSegmentEntity(this.design.bluePrint, this.selectedEntity.id, this.selectedEntity.entityType);
        }
        this.selectedEntity = null;
        this.refreshBlueprint();
    }
    stringify(object) {
        return JSON.stringify(object);
    }
    onEntityTypeChange(entityType) {
        if (this.entitySettings.entityName == 'Homepass') {
            this.entitySettings.dataSource = 'automatic';
        }
        else {
            this.entitySettings.chambers = null;
            this.entitySettings.odfs = null;
            this.entitySettings.poles = null;
            this.entitySettings.spliceClosures = null;
            this.entitySettings.splitters = null;
            this.initializeEntities();
            this.loadMasterEntities(entityType);
        }
    }
    initializeEntities() {
        switch (this.entitySettings.entityName) {
            case "Chamber":
                if (this.entitySettings.chambers == null)
                    this.entitySettings.chambers = new Array();
                this.entities = this.entitySettings.chambers;
                break;
            case "ODF":
                if (this.entitySettings.odfs == null)
                    this.entitySettings.odfs = new Array();
                this.entities = this.entitySettings.odfs;
                break;
            case "Pole":
                if (this.entitySettings.poles == null)
                    this.entitySettings.poles = new Array();
                this.entities = this.entitySettings.poles;
                break;
            case "SpliceClosure":
                if (this.entitySettings.spliceClosures == null)
                    this.entitySettings.spliceClosures = new Array();
                this.entities = this.entitySettings.spliceClosures;
                break;
            case "Splitter":
                if (this.entitySettings.splitters == null)
                    this.entitySettings.splitters = new Array();
                this.entities = this.entitySettings.splitters;
                break;
            case "Pop":
                if (this.entitySettings.pops == null)
                    this.entitySettings.pops = new Array();
                this.entities = this.entitySettings.pops;
                break;
        }
    }
    loadMasterEntities(entityType) {
        let masterSvc = null;
        switch (entityType) {
            case "Chamber":
                masterSvc = this.chamberService.getChambers();
                break;
            case "ODF":
                masterSvc = this.odfService.getODFs();
                break;
            case "Pole":
                masterSvc = this.poleService.getPoles();
                break;
            case "SpliceClosure":
                masterSvc = this.spliceClosureService.getSpliceClosures();
                break;
            case "Splitter":
                masterSvc = this.splitterService.getSplitters();
                break;
            case "Pop":
                masterSvc = this.splitterService.getSplitters();
                break;
            default:
                masterSvc = this.splitterService.getSplitters();
                break;
        }
        this.Flag = entityType;
        masterSvc.subscribe(resp => {
            this.masterEntities = null;
            if (resp.data != null && resp.data.length > 0) {
                this.masterEntities = resp.data;
            }
        }, (err) => {
            this.masterEntities = new Array();
        });
    }
    PlotPostEntities() {
        let ent = this.selectedEntity;
        let SelectedValue = null;
        SelectedValue = $('#designEntity').val();
        if (SelectedValue != 0) {
            let getdata = $.grep(this.masterEntities, function (l) {
                return l.id == SelectedValue;
            });
            let ent = this.selectedEntity;
            let seg = this.design.bluePrint.children[0].segments;
            let mapEntitiesHelper = new _services_map_entities_helper__WEBPACK_IMPORTED_MODULE_9__["MapEntitiesHelper"](this.map);
            if (seg) {
                if (this.Flag == 'Splitter') {
                    if (seg[0].splitters == null) {
                        seg[0].splitters = new Array();
                        let splitters = new _entities_models_splitter__WEBPACK_IMPORTED_MODULE_16__["Splitter"]();
                        splitters.entityType = "Splitter";
                        splitters.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                        splitters.code = this.entitiesHelper.generatedCodes('Splitter');
                        splitters.name = splitters.code;
                        splitters.parentId = ent.id;
                        splitters.parentEntityType = ent.entityType;
                        splitters.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                        var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                        splitters.suppliers = new Array();
                        splitters.suppliers.push(getdata.suppliers);
                        seg[0].splitters.push(splitters);
                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                            this.selectedEntity = marker.data;
                        });
                        this.isEditable(true, marker);
                    }
                    else {
                        let splitters = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].splitters[0]);
                        var k = false;
                        if (this.SplitterIncrementalID == 0) {
                            for (var i = seg[0].splitters.length - 1; i >= 0; i--) {
                                //seg[0].splitters[20].code
                                if (seg[0].splitters[i].code != undefined || seg[0].splitters[i].code != null) {
                                    var ID2 = seg[0].splitters[i].code;
                                    var ID3 = ID2.toString();
                                    var ID4 = ID3.split('_');
                                    this.SplitterIncrementalID = parseInt(ID4[1]) + 1;
                                    k = true;
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                        else {
                            this.SplitterIncrementalID = this.SplitterIncrementalID + 1;
                        }
                        splitters.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                        splitters.code = 'Splitter_' + this.SplitterIncrementalID;
                        splitters.name = 'Splitters_' + this.SplitterIncrementalID;
                        splitters.parentId = ent.id;
                        splitters.parentEntityType = ent.entityType;
                        //newPole.name = newPole.code;
                        splitters.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                        var marker = mapEntitiesHelper.drawPoint(splitters, { url: "images/map-entities/splitter.png", anchor: new google.maps.Point(10, 10) }, true, true);
                        seg[0].splitters.push(splitters);
                        splitters.suppliers = new Array();
                        splitters.suppliers.push(getdata.suppliers);
                        seg[0].splitters.push(splitters);
                        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                            this.selectedEntity = marker.data;
                        });
                        this.isEditable(true, marker);
                    }
                }
                if (this.Flag == 'SpliceClosure') {
                    if (seg) {
                        if (seg[0].spliceClosures == null) {
                            seg[0].spliceClosures = new Array();
                            let spliceclosures = new src_app_entities_models_spliceClosure__WEBPACK_IMPORTED_MODULE_18__["SpliceClosure"]();
                            spliceclosures.entityType = "SpliceClosure";
                            spliceclosures.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                            var Uid = spliceclosures.id.toString();
                            spliceclosures.code = this.entitiesHelper.generatedCodes('SpliceClosure');
                            spliceclosures.name = spliceclosures.code;
                            spliceclosures.parentId = ent.id;
                            spliceclosures.parentEntityType = ent.entityType;
                            spliceclosures.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                            var marker = mapEntitiesHelper.drawPoint(spliceclosures, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                            spliceclosures.suppliers = new Array();
                            spliceclosures.suppliers.push(getdata.suppliers);
                            seg[0].spliceClosures.push(spliceclosures);
                            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                this.selectedEntity = marker.data;
                            });
                            this.isEditable(true, marker);
                        }
                        else {
                            let spliceClosure = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].spliceClosures[0]);
                            var k = false;
                            if (this.SpliceClosureIncrementalID == 0) {
                                for (var i = seg[0].spliceClosures.length - 1; i >= 0; i--) {
                                    if (seg[0].spliceClosures[i].code != undefined || seg[0].spliceClosures[i].code != null) {
                                        var ID2 = seg[0].spliceClosures[i].code;
                                        var ID3 = ID2.toString();
                                        var ID4 = ID3.split('_');
                                        this.SpliceClosureIncrementalID = parseInt(ID4[1]) + 1;
                                        k = true;
                                        break;
                                    }
                                    else {
                                        continue;
                                    }
                                }
                            }
                            else {
                                this.SpliceClosureIncrementalID = this.SpliceClosureIncrementalID + 1;
                            }
                            spliceClosure.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                            spliceClosure.code = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                            spliceClosure.name = 'SpliceClosure_' + this.SpliceClosureIncrementalID;
                            spliceClosure.parentId = ent.id;
                            spliceClosure.parentEntityType = ent.entityType;
                            spliceClosure.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                            var marker = mapEntitiesHelper.drawPoint(spliceClosure, { url: "images/map-entities/spliceclosure.png", anchor: new google.maps.Point(10, 10) }, true, true);
                            spliceClosure.suppliers = new Array();
                            spliceClosure.suppliers.push(getdata.suppliers);
                            //seg[0].spliceClosures.push(spliceClosure);
                            seg[0].spliceClosures.push(spliceClosure);
                            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                this.selectedEntity = marker.data;
                            });
                            this.isEditable(true, marker);
                        }
                    }
                }
                if (this.Flag == 'odf') {
                    if (seg) {
                        if (seg[0].odfs == null) {
                            seg[0].odfs = new Array();
                            let odf = new _entities_models_odf__WEBPACK_IMPORTED_MODULE_22__["ODF"]();
                            odf.entityType = "ODF";
                            odf.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                            var Uid = odf.id.toString();
                            odf.code = this.entitiesHelper.generatedCodes('Odf');
                            odf.name = odf.code;
                            odf.parentId = ent.id;
                            odf.parentEntityType = ent.entityType;
                            odf.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                            var marker = mapEntitiesHelper.drawPoint(odf, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                            odf.suppliers = new Array();
                            odf.suppliers.push(getdata.suppliers);
                            seg[0].odfs.push(odf);
                            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                this.selectedEntity = marker.data;
                            });
                            this.isEditable(true, marker);
                        }
                        else {
                            let odfss = lodash__WEBPACK_IMPORTED_MODULE_15__["cloneDeep"](seg[0].odfs[0]);
                            var odfssLength = seg[0].odfs.length + 1;
                            var k = false;
                            if (this.OdfIncrementalID == 0) {
                                for (var i = seg[0].odfs.length - 1; i >= 0; i--) {
                                    //seg[0].splitters[20].code
                                    if (seg[0].odfs[i].code != undefined || seg[0].odfs[i].code != null) {
                                        var ID2 = seg[0].odfs[i].code;
                                        var ID3 = ID2.toString();
                                        var ID4 = ID3.split('_');
                                        this.OdfIncrementalID = parseInt(ID4[1]) + 1;
                                        break;
                                    }
                                    else {
                                        continue;
                                    }
                                }
                            }
                            else {
                                this.OdfIncrementalID = this.OdfIncrementalID + 1;
                            }
                            odfss.id = _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"].generateObjectId();
                            odfss.code = 'Odf_' + this.OdfIncrementalID;
                            odfss.name = 'Odf_' + this.OdfIncrementalID;
                            odfss.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_12__["Point"]([ent.geometry.coordinates[0], ent.geometry.coordinates[1]]);
                            odfss.parentId = ent.id;
                            odfss.parentEntityType = ent.entityType;
                            var marker = mapEntitiesHelper.drawPoint(odfss, { url: "images/map-entities/odf.png", anchor: new google.maps.Point(10, 10) }, true, true);
                            odfss.suppliers = new Array();
                            odfss.suppliers.push(getdata.suppliers);
                            seg[0].odfs.push(odfss);
                            _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_5__["GMapsHelper"].addListener(marker, 'click', (event) => {
                                this.selectedEntity = marker.data;
                            });
                            this.isEditable(true, marker);
                        }
                    }
                }
                if (this.Flag == 'Chamber') {
                    let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                    supplier.currency = getdata[0].currency;
                    supplier.name = getdata[0].name;
                    supplier.stockQty = getdata[0].stockQty;
                    supplier.price = getdata[0].price;
                    supplier.validFrom = getdata[0].validFrom;
                    supplier.validTo = getdata[0].validTo;
                    this.chamber.suppliers = new Array();
                    //seg[0].chambers = new Array<Chamber>();
                    //this.chamber.suppliers = new Array<Supplier>();
                    this.chamber.suppliers.push(supplier);
                    seg[0].chambers.push(this.chamber);
                }
                if (this.Flag == 'Pole') {
                    let supplier = new src_app_common_models_supplier__WEBPACK_IMPORTED_MODULE_19__["Supplier"]();
                    supplier.currency = getdata[0].currency;
                    supplier.name = getdata[0].name;
                    supplier.stockQty = getdata[0].stockQty;
                    supplier.price = getdata[0].price;
                    supplier.validFrom = getdata[0].validFrom;
                    supplier.validTo = getdata[0].validTo;
                    this.poles.suppliers = new Array();
                    this.poles.suppliers.push(supplier);
                    seg[0].poles.push(this.poles);
                }
                $("#exampleModalCenter").modal("hide");
            }
        }
        else {
            this.helper.showAlertMessage("Please select template", "error");
        }
    }
    ClearEntities() {
        if (this.DeleteFlag == null) {
            this.mapEntitiesHelper.removeMapObjects(this.CurrentselectedEntity);
        }
    }
};
DesignMap.ctorParameters = () => [
    { type: _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_13__["Helper"] },
    { type: _services_bom_helper__WEBPACK_IMPORTED_MODULE_4__["BomHelper"] },
    { type: _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_24__["ChamberService"] },
    { type: _entities_services_odf_service__WEBPACK_IMPORTED_MODULE_25__["ODFService"] },
    { type: _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_26__["PoleService"] },
    { type: _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_27__["SpliceClosureService"] },
    { type: _entities_services_splitter_service__WEBPACK_IMPORTED_MODULE_28__["SplitterService"] },
    { type: _entities_services_fat_service__WEBPACK_IMPORTED_MODULE_29__["fatService"] },
    { type: _entities_services_fdt_service__WEBPACK_IMPORTED_MODULE_30__["fdtService"] },
    { type: _entities_services_duct_service__WEBPACK_IMPORTED_MODULE_35__["DuctService"] },
    { type: _entities_services_cable_service__WEBPACK_IMPORTED_MODULE_36__["CableService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignMap.prototype, "entitySettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignMap.prototype, "design", void 0);
DesignMap = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-map.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-map.html")).default
    })
], DesignMap);



/***/ }),

/***/ "./src/app/designs/components/dzn-networkSettings.ts":
/*!***********************************************************!*\
  !*** ./src/app/designs/components/dzn-networkSettings.ts ***!
  \***********************************************************/
/*! exports provided: DesignNetworkSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignNetworkSettings", function() { return DesignNetworkSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");




let DesignNetworkSettings = class DesignNetworkSettings {
    constructor(helper) {
        this.helper = helper;
        this.selectedSetting = new _models_design__WEBPACK_IMPORTED_MODULE_2__["NetworkSetting"]();
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_2__["Design"]();
        this.allDesigns = new Array();
    }
    ngOnInit() {
        this.hierarchyName = "";
    }
    ngOnChanges(changes) {
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
            id: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId(),
            name: this.hierarchyName,
            position: this.design.networkSettings.length,
            startNode: new _models_design__WEBPACK_IMPORTED_MODULE_2__["NodeSettings"](),
            destinationNode: new _models_design__WEBPACK_IMPORTED_MODULE_2__["NodeSettings"](),
            cabling: new _models_design__WEBPACK_IMPORTED_MODULE_2__["Cabling"]()
        };
        if (this.design.designType == "FTTx") {
            this.design.networkSettings.push(networkSetting);
        }
        else {
            networkSetting.startNode = null;
            networkSetting.destinationNode = null;
            networkSetting['fdpNode'] = new _models_design__WEBPACK_IMPORTED_MODULE_2__["NodeSettings"]();
            if (this.design.networkSettings.length == 0) {
                this.design.networkSettings.push(networkSetting);
            }
        }
        this.hierarchyName = '';
    }
    deleteHierarchy(index) {
        this.design.networkSettings.splice(index, 1);
    }
};
DesignNetworkSettings.ctorParameters = () => [
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignNetworkSettings.prototype, "design", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignNetworkSettings.prototype, "allDesigns", void 0);
DesignNetworkSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-networkSettings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-networkSettings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-networkSettings.html")).default
    })
], DesignNetworkSettings);



/***/ }),

/***/ "./src/app/designs/components/dzn-spliceClosure.ts":
/*!*********************************************************!*\
  !*** ./src/app/designs/components/dzn-spliceClosure.ts ***!
  \*********************************************************/
/*! exports provided: DesignSpliceClosure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignSpliceClosure", function() { return DesignSpliceClosure; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");




let DesignSpliceClosure = class DesignSpliceClosure {
    constructor(spliceClosureService) {
        this.spliceClosureService = spliceClosureService;
        this.spliceClosureSettings = new _models_design__WEBPACK_IMPORTED_MODULE_2__["SpliceClosureSettings"]();
        this.allDesigns = new Array();
        this.spliceClosuresMaster = new Array();
    }
    ngOnInit() {
        this.getSpliceClosuresMaster();
    }
    getSpliceClosuresMaster() {
        //this.spliceClosureSettings.spliceClosures = null;
        this.spliceClosureService.getSpliceClosures().subscribe(resp => {
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
        }, (err) => {
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
            this.spliceClosureSettings.spliceClosures = new Array();
        var index = this.spliceClosureSettings.spliceClosures.findIndex(x => x.id == this.selectedSpliceClosure.id);
        if (index == -1) {
            this.spliceClosureSettings.spliceClosures.push(this.selectedSpliceClosure);
            this.selectedSpliceClosure = null;
        }
    }
    removeSpliceClosure(index) {
        this.spliceClosureSettings.spliceClosures.splice(index, 1);
    }
};
DesignSpliceClosure.ctorParameters = () => [
    { type: _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_3__["SpliceClosureService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignSpliceClosure.prototype, "spliceClosureSettings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DesignSpliceClosure.prototype, "allDesigns", void 0);
DesignSpliceClosure = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dzn-spliceClosure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dzn-spliceClosure.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/components/dzn-spliceClosure.html")).default
    })
], DesignSpliceClosure);



/***/ }),

/***/ "./src/app/designs/design.module.ts":
/*!******************************************!*\
  !*** ./src/app/designs/design.module.ts ***!
  \******************************************/
/*! exports provided: DesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignModule", function() { return DesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _design_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./design.routes */ "./src/app/designs/design.routes.ts");
/* harmony import */ var _views_design_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/design-list */ "./src/app/designs/views/design-list.ts");
/* harmony import */ var _views_design_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/design-details */ "./src/app/designs/views/design-details.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/design.service */ "./src/app/designs/services/design.service.ts");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../users/services/user.service */ "./src/app/users/services/user.service.ts");
/* harmony import */ var _entities_services_splitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../entities/services/splitter.service */ "./src/app/entities/services/splitter.service.ts");
/* harmony import */ var _components_dzn_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dzn-info */ "./src/app/designs/components/dzn-info.ts");
/* harmony import */ var _services_design_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/design.helper */ "./src/app/designs/services/design.helper.ts");
/* harmony import */ var _components_dzn_documents__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dzn-documents */ "./src/app/designs/components/dzn-documents.ts");
/* harmony import */ var _components_dzn_clusters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dzn-clusters */ "./src/app/designs/components/dzn-clusters.ts");
/* harmony import */ var _components_dzn_bookingIds__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dzn-bookingIds */ "./src/app/designs/components/dzn-bookingIds.ts");
/* harmony import */ var _components_dzn_networkSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dzn-networkSettings */ "./src/app/designs/components/dzn-networkSettings.ts");
/* harmony import */ var _components_dzn_entities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dzn-entities */ "./src/app/designs/components/dzn-entities.ts");
/* harmony import */ var _entities_services_cable_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../entities/services/cable.service */ "./src/app/entities/services/cable.service.ts");
/* harmony import */ var _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../entities/services/chamber.service */ "./src/app/entities/services/chamber.service.ts");
/* harmony import */ var _entities_services_duct_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../entities/services/duct.service */ "./src/app/entities/services/duct.service.ts");
/* harmony import */ var _entities_services_odf_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../entities/services/odf.service */ "./src/app/entities/services/odf.service.ts");
/* harmony import */ var _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../entities/services/pole.service */ "./src/app/entities/services/pole.service.ts");
/* harmony import */ var _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../entities/services/spliceClosure.service */ "./src/app/entities/services/spliceClosure.service.ts");
/* harmony import */ var _accessories_services_accessory_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../accessories/services/accessory.service */ "./src/app/accessories/services/accessory.service.ts");
/* harmony import */ var _civilworks_services_civilwork_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../civilworks/services/civilwork.service */ "./src/app/civilworks/services/civilwork.service.ts");
/* harmony import */ var _components_dzn_accessories__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dzn-accessories */ "./src/app/designs/components/dzn-accessories.ts");
/* harmony import */ var _components_dzn_civilworks__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dzn-civilworks */ "./src/app/designs/components/dzn-civilworks.ts");
/* harmony import */ var _components_dzn_duct__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dzn-duct */ "./src/app/designs/components/dzn-duct.ts");
/* harmony import */ var _components_dzn_cable__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dzn-cable */ "./src/app/designs/components/dzn-cable.ts");
/* harmony import */ var _components_dzn_spliceClosure__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dzn-spliceClosure */ "./src/app/designs/components/dzn-spliceClosure.ts");
/* harmony import */ var _components_dzn_costing__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dzn-costing */ "./src/app/designs/components/dzn-costing.ts");
/* harmony import */ var _components_dzn_map__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dzn-map */ "./src/app/designs/components/dzn-map.ts");
/* harmony import */ var _components_dzn_bom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/dzn-bom */ "./src/app/designs/components/dzn-bom.ts");
/* harmony import */ var _components_dzn_fdp__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dzn-fdp */ "./src/app/designs/components/dzn-fdp.ts");
/* harmony import */ var _services_bom_helper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/bom.helper */ "./src/app/designs/services/bom.helper.ts");
/* harmony import */ var _services_fttx_helper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/fttx.helper */ "./src/app/designs/services/fttx.helper.ts");
/* harmony import */ var _services_backbone_helper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/backbone.helper */ "./src/app/designs/services/backbone.helper.ts");
/* harmony import */ var _entities_services_fdt_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../entities/services/fdt.service */ "./src/app/entities/services/fdt.service.ts");
/* harmony import */ var _entities_services_fat_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../entities/services/fat.service */ "./src/app/entities/services/fat.service.ts");
/* harmony import */ var _entities_services_pop_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../entities/services/pop.service */ "./src/app/entities/services/pop.service.ts");










































let DesignModule = class DesignModule {
};
DesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _design_routes__WEBPACK_IMPORTED_MODULE_6__["DesignRouting"]
        ],
        declarations: [
            _views_design_list__WEBPACK_IMPORTED_MODULE_7__["DesignList"],
            _views_design_details__WEBPACK_IMPORTED_MODULE_8__["DesignDetails"],
            _components_dzn_info__WEBPACK_IMPORTED_MODULE_12__["DesignInfo"],
            _components_dzn_documents__WEBPACK_IMPORTED_MODULE_14__["DesignDocuments"],
            _components_dzn_clusters__WEBPACK_IMPORTED_MODULE_15__["DesignClusters"],
            _components_dzn_bookingIds__WEBPACK_IMPORTED_MODULE_16__["DesignBookingIds"],
            _components_dzn_networkSettings__WEBPACK_IMPORTED_MODULE_17__["DesignNetworkSettings"],
            _components_dzn_entities__WEBPACK_IMPORTED_MODULE_18__["DesignEntities"],
            _components_dzn_fdp__WEBPACK_IMPORTED_MODULE_35__["DesignFPDs"],
            _components_dzn_accessories__WEBPACK_IMPORTED_MODULE_27__["DesignAccessories"],
            _components_dzn_civilworks__WEBPACK_IMPORTED_MODULE_28__["DesignCivilwork"],
            _components_dzn_duct__WEBPACK_IMPORTED_MODULE_29__["DesignDuct"],
            _components_dzn_cable__WEBPACK_IMPORTED_MODULE_30__["DesignCable"],
            _components_dzn_spliceClosure__WEBPACK_IMPORTED_MODULE_31__["DesignSpliceClosure"],
            _components_dzn_costing__WEBPACK_IMPORTED_MODULE_32__["DesignCosting"],
            _components_dzn_map__WEBPACK_IMPORTED_MODULE_33__["DesignMap"],
            _components_dzn_bom__WEBPACK_IMPORTED_MODULE_34__["DesignBOM"]
        ],
        providers: [
            _services_design_service__WEBPACK_IMPORTED_MODULE_9__["DesignService"],
            _services_design_helper__WEBPACK_IMPORTED_MODULE_13__["DesignHelper"],
            _services_bom_helper__WEBPACK_IMPORTED_MODULE_36__["BomHelper"],
            _services_fttx_helper__WEBPACK_IMPORTED_MODULE_37__["FTTxHelper"],
            _services_backbone_helper__WEBPACK_IMPORTED_MODULE_38__["BackboneHelper"],
            _users_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _entities_services_cable_service__WEBPACK_IMPORTED_MODULE_19__["CableService"],
            _entities_services_chamber_service__WEBPACK_IMPORTED_MODULE_20__["ChamberService"],
            _entities_services_duct_service__WEBPACK_IMPORTED_MODULE_21__["DuctService"],
            _entities_services_odf_service__WEBPACK_IMPORTED_MODULE_22__["ODFService"],
            _entities_services_pole_service__WEBPACK_IMPORTED_MODULE_23__["PoleService"],
            _entities_services_spliceClosure_service__WEBPACK_IMPORTED_MODULE_24__["SpliceClosureService"],
            _entities_services_splitter_service__WEBPACK_IMPORTED_MODULE_11__["SplitterService"],
            _accessories_services_accessory_service__WEBPACK_IMPORTED_MODULE_25__["AccessoryService"],
            _civilworks_services_civilwork_service__WEBPACK_IMPORTED_MODULE_26__["CivilworkService"], _entities_services_fdt_service__WEBPACK_IMPORTED_MODULE_39__["fdtService"], _entities_services_fat_service__WEBPACK_IMPORTED_MODULE_40__["fatService"], _entities_services_pop_service__WEBPACK_IMPORTED_MODULE_41__["PopService"]
        ]
    })
], DesignModule);



/***/ }),

/***/ "./src/app/designs/design.routes.ts":
/*!******************************************!*\
  !*** ./src/app/designs/design.routes.ts ***!
  \******************************************/
/*! exports provided: designRoutes, DesignRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designRoutes", function() { return designRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignRouting", function() { return DesignRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_design_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/design-list */ "./src/app/designs/views/design-list.ts");
/* harmony import */ var _views_design_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/design-details */ "./src/app/designs/views/design-details.ts");




const designRoutes = [
    {
        path: 'designs',
        children: [
            { path: '', component: _views_design_list__WEBPACK_IMPORTED_MODULE_2__["DesignList"] },
            { path: 'details', component: _views_design_details__WEBPACK_IMPORTED_MODULE_3__["DesignDetails"] },
            { path: 'details/:id', component: _views_design_details__WEBPACK_IMPORTED_MODULE_3__["DesignDetails"] },
        ]
    },
];
const DesignRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(designRoutes);


/***/ }),

/***/ "./src/app/designs/models/design.ts":
/*!******************************************!*\
  !*** ./src/app/designs/models/design.ts ***!
  \******************************************/
/*! exports provided: Design, NetworkSetting, NodeSettings, EntitySettings, FDPSettings, AccessorySettings, CivilworkSettings, DuctSettings, EquipmentSettings, Cabling, CableSettings, SpliceClosureSettings, CodeId, Costing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Design", function() { return Design; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkSetting", function() { return NetworkSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeSettings", function() { return NodeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitySettings", function() { return EntitySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FDPSettings", function() { return FDPSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessorySettings", function() { return AccessorySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilworkSettings", function() { return CivilworkSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuctSettings", function() { return DuctSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentSettings", function() { return EquipmentSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cabling", function() { return Cabling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CableSettings", function() { return CableSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpliceClosureSettings", function() { return SpliceClosureSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeId", function() { return CodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Costing", function() { return Costing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dbBaseEntity */ "./src/app/common/models/dbBaseEntity.ts");
/* harmony import */ var _entities_models_chamber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/models/chamber */ "./src/app/entities/models/chamber.ts");
/* harmony import */ var _entities_models_pole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/models/pole */ "./src/app/entities/models/pole.ts");




class Design extends _common_models_dbBaseEntity__WEBPACK_IMPORTED_MODULE_1__["DbBaseEntity"] {
    constructor() {
        super(...arguments);
        this.version = 1;
        this.documents = new Array();
        this.bookingIds = new Array();
        this.networkSettings = new Array();
        this.log = "";
    }
}
class NetworkSetting {
    constructor() {
        this.startNode = new NodeSettings();
        this.destinationNode = new NodeSettings();
        this.fdpNode = new NodeSettings();
        this.cabling = new Cabling();
    }
}
class NodeSettings {
    constructor() {
        this.entitySettings = new EntitySettings();
        this.fdpSettings = new FDPSettings();
        this.accessorySettings = new AccessorySettings();
        this.civilworkSettings = new CivilworkSettings();
        this.ductSettings = new DuctSettings();
        this.equipmentSettings = new EquipmentSettings();
    }
}
class EntitySettings {
    constructor() {
        this.entityName = "";
        this.dataSource = "automatic";
        this.chambers = new Array();
        this.odfs = new Array();
        this.poles = new Array();
        this.spliceClosures = new Array();
        this.splitters = new Array();
        this.pops = new Array();
    }
}
class FDPSettings {
    constructor() {
        this.dataSource = "import";
        this.fdps = new Array();
        this.aggregateFdps = new Array();
    }
}
class AccessorySettings {
    constructor() {
        this.entityName = "";
        this.dataSource = "automatic";
        //existingDesignId?: string;
        //importedFile?: string;
        this.accessories = new Array();
        this.existingAccessories = new Array();
    }
}
class CivilworkSettings {
    constructor() {
        this.civilworks = new Array();
    }
}
class DuctSettings {
    constructor() {
        this.ducts = new Array();
    }
}
class EquipmentSettings {
    constructor() {
        this.entityName = "";
        this.dataSource = "";
        this.equipments = new Array();
    }
}
class Cabling {
    constructor() {
        this.cableSettings = new CableSettings();
        this.spliceClosureSettings = new SpliceClosureSettings();
        this.accessorySettings = new AccessorySettings();
        this.ductSettings = new DuctSettings();
    }
}
class CableSettings {
    constructor() {
        this.entityName = "Cable";
        this.dataSource = "";
        this.cables = new Array();
        this.pole = new _entities_models_pole__WEBPACK_IMPORTED_MODULE_3__["Pole"]();
        this.chamber = new _entities_models_chamber__WEBPACK_IMPORTED_MODULE_2__["Chamber"]();
        this.connectionPercent = 100;
    }
}
class SpliceClosureSettings {
    constructor() {
        this.entityName = "";
        this.dataSource = "";
        this.spliceClosures = new Array();
    }
    ;
}
class CodeId {
}
class Costing {
    constructor() {
        this.quantity = 0;
        this.materialCost = 0;
        this.serviceCost = 0;
    }
}


/***/ }),

/***/ "./src/app/designs/services/backbone.helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/designs/services/backbone.helper.ts ***!
  \*****************************************************/
/*! exports provided: BackboneHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackboneHelper", function() { return BackboneHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _homepasses_services_homepass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../homepasses/services/homepass.service */ "./src/app/homepasses/services/homepass.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/geo/geoNode */ "./src/app/common/geo/geoNode.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _entities_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities.helper */ "./src/app/designs/services/entities.helper.ts");









let BackboneHelper = class BackboneHelper {
    constructor(httpClient, appConfig, homepassService, helper) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.homepassService = homepassService;
        this.helper = helper;
    }
    generateBackboneDesign(design) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.design = design;
            this.entitiesHelper = new _entities_helper__WEBPACK_IMPORTED_MODULE_8__["EntitiesHelper"](design.bookingIds, design.generatedCodes);
            let status = false;
            try {
                this.helper.log(this.design, "Information", "Generating Backbone design...");
                if (this.design.networkSettings[0] == null)
                    throw new Error('No FDTs available to process...');
                let fdps = this.design.networkSettings[0].fdpNode.fdpSettings.fdps;
                let geoNodes = new Array();
                let level = this.design.networkSettings.length + 1;
                fdps.forEach(x => {
                    geoNodes.push({ id: x.id, level: level, levelName: "fdps", coordinates: x.geometry.coordinates, connections: 1 });
                });
                for (let index = this.design.networkSettings.length - 1; index >= 0; index--) {
                    let splitters = this.getSplitters(index);
                    if (splitters == null || splitters.length == 0) {
                        this.helper.log(this.design, "Error", "Splitters not defined at any of the levels...");
                        throw new Error('No splitters available to process...');
                    }
                    //geoNodes = GeoHelper.clustersKmeans(geoNodes, splitterCount, this.design.networkSettings[index].name);
                    geoNodes = yield this.createClusters(geoNodes, splitters, index);
                    let cableSettings = this.design.networkSettings[index].cabling.cableSettings;
                    let preferedCable = this.getPreferedCable(cableSettings, geoNodes.length);
                    if (preferedCable == null) {
                        this.helper.log(this.design, "Error", "Insufficient Cable Configuration");
                        throw new Error('Insufficient cable configuration');
                    }
                    //let levelIndex = index;
                    geoNodes = yield this.generateSegments(geoNodes);
                    geoNodes.forEach(x => {
                        this.generateSegmentEntities(preferedCable, x.segments, index);
                    });
                }
                let popCentroid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].center(geoNodes);
                var designTree = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
                designTree.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                designTree.levelName = "pop";
                designTree.coordinates = popCentroid;
                designTree.connections = 1;
                designTree.children = geoNodes;
                this.design.bluePrint = designTree;
                status = true;
            }
            catch (e) {
                status = false;
                this.helper.log(this.design, "Error", e);
            }
            $("#ajax-loading").hide();
            return status;
        });
    }
    getSplitters(level) {
        let splitters = [];
        for (var i = level; i >= 0; i--) {
            if (this.design.networkSettings[i].destinationNode.entitySettings.entityName == "Splitter") {
                splitters = this.design.networkSettings[i].destinationNode.entitySettings.splitters;
                break;
            }
        }
        return splitters;
    }
    createClusters(geoNodes, splitters, level) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tempGeoNodes;
            this.helper.log(this.design, "Information", "Generating clusters...");
            var resp = yield this.httpClient.post(this.appConfig.urls.Routeware.SortPoints, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();
            if (resp.status.toLowerCase() == "error") {
                this.helper.log(this.design.log, "Error", "Error sorting nodes - " + resp.message);
                throw Error("Error sorting nodes");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    if (this.design.networkSettings[level].destinationNode.entitySettings.dataSource == 'automatic') {
                        tempGeoNodes = this.createAutomaticCluster(resp.data, splitters, level);
                    }
                    else {
                        tempGeoNodes = this.createCluster(resp.data, splitters, level);
                    }
                }
                else {
                    this.helper.log(this.design.log, "Error", "Nodes not available - " + resp.message);
                    throw Error("Nodes not available");
                }
            }
            this.helper.log(this.design, "Information", "Sorting homepasses completed");
            return tempGeoNodes;
        });
    }
    createAutomaticCluster(sortedNodes, splitters, level) {
        var tempClusters = new Array();
        let outputPorts = this.getTotalSplitterPorts(splitters);
        let connections = 0;
        let geoNode = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
        geoNode.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        geoNode.levelName = this.design.networkSettings[level].name;
        geoNode.level = level;
        geoNode.coordinates = null;
        geoNode.connections = 0;
        geoNode.children = new Array();
        sortedNodes.forEach(x => {
            if ((outputPorts - connections) <= 0) {
                geoNode.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].center(geoNode.children);
                geoNode.children.push({
                    id: geoNode.id,
                    connections: 0,
                    children: null,
                    coordinates: geoNode.coordinates,
                    level: geoNode.level,
                    segments: null
                });
                tempClusters.push(geoNode);
                geoNode = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
                connections = 0;
                geoNode.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                geoNode.levelName = this.design.networkSettings[level].name;
                geoNode.level = level;
                geoNode.coordinates = null;
                if (geoNode.children == null)
                    geoNode.children = new Array();
            }
            geoNode.children.push(x);
            connections += x.connections;
            geoNode.connections = connections;
        });
        if (geoNode.children.length > 0) {
            geoNode.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].center(geoNode.children);
            geoNode.children.push({
                id: geoNode.id,
                connections: 0,
                children: null,
                coordinates: geoNode.coordinates,
                level: geoNode.level,
                segments: null
            });
            tempClusters.push(geoNode);
        }
        return tempClusters;
    }
    createCluster(sortedNodes, splitters, level) {
        var tempClusters = new Array();
        return tempClusters;
    }
    getTotalSplitterPorts(splitters) {
        let outputPorts = 0;
        splitters.forEach(x => {
            outputPorts += parseInt(x.splitterRatio.split(":")[1]);
        });
        return outputPorts;
    }
    getPreferedCable(cableSettings, splitterCount) {
        let cable = null;
        if (cableSettings.cables && cableSettings.cables.length > 0) {
            for (var i = 0; i < cableSettings.cables.length; i++) {
                let availableConn = cableSettings.cables[i].corePerTube * cableSettings.cables[i].noOfTubes;
                if (splitterCount < availableConn) {
                    cable = cableSettings.cables[i];
                    break;
                }
            }
        }
        return cable;
    }
    generateSegments(geoNodes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tempNodes = new Array();
            this.helper.log(this.design, "Information", "Generating segment information...");
            var resp = yield this.httpClient.post(this.appConfig.urls.Routeware.GenerateMSTRecursive, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();
            if (resp.status.toLowerCase() == "error") {
                this.helper.log(this.design.log, "Error", "Error generating segments - " + resp.message);
                throw new Error('Error generating segments..');
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    tempNodes = resp.data;
                }
            }
            this.helper.log(this.design, "Information", "Generating segment information completed");
            return tempNodes;
        });
    }
    generateSegmentEntities(preferedCable, segments, level) {
        if (segments && segments.length > 0) {
            segments.forEach(segment => {
                let cableType = this.design.networkSettings[level].cabling.cableSettings.cableType;
                let prefChamber = this.design.networkSettings[level].cabling.cableSettings.chamber;
                let prefPole = this.design.networkSettings[level].cabling.cableSettings.pole;
                let chamberInterval = this.design.networkSettings[level].cabling.cableSettings.chamberInterval;
                let loopLength = this.design.networkSettings[level].cabling.cableSettings.cableLoop;
                let loopEnd = this.design.networkSettings[level].cabling.cableSettings.loopAtClosure;
                segment.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                //1. generate Cables
                segment.cable = this.entitiesHelper.createCable(preferedCable, segment.coordinates);
                //2. Generate Poles/Chambers
                if (cableType.toLowerCase() == "underground") {
                    segment.chambers = this.entitiesHelper.createChambers(prefChamber, chamberInterval, segment, loopLength, loopEnd);
                }
                else {
                    segment.poles = this.entitiesHelper.createPoles(prefPole, chamberInterval, segment, loopLength, loopEnd);
                }
            });
        }
    }
};
BackboneHelper.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"] },
    { type: _homepasses_services_homepass_service__WEBPACK_IMPORTED_MODULE_2__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
BackboneHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BackboneHelper);



/***/ }),

/***/ "./src/app/designs/services/bom.helper.ts":
/*!************************************************!*\
  !*** ./src/app/designs/services/bom.helper.ts ***!
  \************************************************/
/*! exports provided: BomHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomHelper", function() { return BomHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");




let BomHelper = class BomHelper {
    constructor(helper) {
        this.helper = helper;
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_3__["Design"]();
    }
    generateBOQ(design) {
        this.design = design;
        this.design.boq = new Array();
        this.generateBOQRec(design.bluePrint, this.design.boq);
    }
    generateBOQRec(group, boq) {
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
};
BomHelper.ctorParameters = () => [
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"] }
];
BomHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BomHelper);



/***/ }),

/***/ "./src/app/designs/services/design.helper.ts":
/*!***************************************************!*\
  !*** ./src/app/designs/services/design.helper.ts ***!
  \***************************************************/
/*! exports provided: DesignHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignHelper", function() { return DesignHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _bom_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bom.helper */ "./src/app/designs/services/bom.helper.ts");
/* harmony import */ var _fttx_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fttx.helper */ "./src/app/designs/services/fttx.helper.ts");
/* harmony import */ var _backbone_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backbone.helper */ "./src/app/designs/services/backbone.helper.ts");






let DesignHelper = class DesignHelper {
    constructor(bomHelper, fttxHelper, backboneHelper, helper) {
        this.bomHelper = bomHelper;
        this.fttxHelper = fttxHelper;
        this.backboneHelper = backboneHelper;
        this.helper = helper;
    }
    generateDesign(design) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            $("#ajax-loading").show();
            this.design = design;
            this.design.generatedCodes = null;
            this.design.boq = null;
            this.design.bluePrint = null;
            let status = false;
            if (this.design.designType == 'FTTx') {
                status = yield this.fttxHelper.generateFTTxDesign(this.design);
            }
            else
                status = yield this.backboneHelper.generateBackboneDesign(this.design);
            if (status) {
                //Generate BOQ
                this.helper.log(this.design, "Information", "Generating BOQ...");
                this.design.boq = new Array();
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
        });
    }
};
DesignHelper.ctorParameters = () => [
    { type: _bom_helper__WEBPACK_IMPORTED_MODULE_3__["BomHelper"] },
    { type: _fttx_helper__WEBPACK_IMPORTED_MODULE_4__["FTTxHelper"] },
    { type: _backbone_helper__WEBPACK_IMPORTED_MODULE_5__["BackboneHelper"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"] }
];
DesignHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DesignHelper);



/***/ }),

/***/ "./src/app/designs/services/design.service.ts":
/*!****************************************************!*\
  !*** ./src/app/designs/services/design.service.ts ***!
  \****************************************************/
/*! exports provided: DesignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignService", function() { return DesignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");





let DesignService = class DesignService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getDesigns(paginationRequest) {
        if (paginationRequest == null)
            paginationRequest = {
                page: null,
                pageSize: null,
                filter: null,
                order: {
                    orderByProperty: "name",
                    sortOrder: _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].descending
                }
            };
        return this.http.post(this.appConfig.urls.Design.getDesignsApi, paginationRequest);
    }
    getDesign(designId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('designId', designId);
        return this.http.get(this.appConfig.urls.Design.getDesignApi, { params });
    }
    saveDesign(design) {
        var formData = new FormData();
        design.documents.forEach(x => {
            if (x.file)
                formData.append("DocumentFiles", x.file, x.file.name);
        });
        formData.append("SerializedDesign", JSON.stringify(design));
        return this.http.post(this.appConfig.urls.Design.saveDesignApi, formData);
        //return this.http.post<ServiceResponse>(this.appConfig.urls.Design.saveDesignApi, design);
    }
    deleteDesign(designId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('designId', designId);
        return this.http.delete(this.appConfig.urls.Design.deleteDesignApi, { params });
    }
    deleteDocument(designId, documentId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('projectId', designId)
            .set('documentId', documentId);
        return this.http.get(this.appConfig.urls.Design.deleteDocumentApi, { params });
    }
    exportDesign(designId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('designId', designId);
        return this.http.get(this.appConfig.urls.Design.exportDesignApi, { params });
    }
};
DesignService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"] }
];
DesignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DesignService);



/***/ }),

/***/ "./src/app/designs/services/entities.helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/designs/services/entities.helper.ts ***!
  \*****************************************************/
/*! exports provided: EntitiesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesHelper", function() { return EntitiesHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _common_geo_geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/geo/geometry */ "./src/app/common/geo/geometry.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





class EntitiesHelper {
    constructor(bookingIds, generatedCodes) {
        this.bookingIds = bookingIds;
        this.generatedCodes = generatedCodes;
    }
    createCable(prefCable, coordinates) {
        var cable = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](prefCable);
        cable.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        cable.entityType = "Cable";
        cable.code = this.generateEntityCode("Cable");
        cable.name = cable.code;
        cable.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_2__["LineString"](coordinates);
        cable.measuredLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_1__["GeoHelper"].getLength(coordinates) * 1000;
        cable.isUnderground = prefCable.isUnderground;
        cable.noOfTubes = prefCable.noOfTubes;
        cable.corePerTube = prefCable.corePerTube;
        cable.suppliers = prefCable.suppliers;
        cable.customFields = prefCable.customFields;
        cable.aLocation = coordinates[0][0] + "," + coordinates[0][1];
        cable.bLocation = coordinates[coordinates.length - 1][0] + "," + coordinates[coordinates.length - 1][1];
        return cable;
    }
    createChambers(prefChamber, interval, segment, loopLength, loopEnd) {
        let intervalPoints = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_1__["GeoHelper"].getPointsAtDistance(segment.coordinates, (interval / 1000));
        let chambers = new Array();
        for (var i = 0; i < intervalPoints.length; i++) {
            if (i == intervalPoints.length - 1)
                var chamber = this.createChamber(prefChamber, intervalPoints[i], (loopLength + loopEnd));
            else
                var chamber = this.createChamber(prefChamber, intervalPoints[i], loopLength);
            chambers.push(chamber);
        }
        return chambers;
    }
    createChamber(prefChamber, coordinate, loopLength) {
        var chamber = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](prefChamber);
        chamber.entityType = "Chamber";
        chamber.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        chamber.code = this.generateEntityCode("Chamber");
        chamber.name = chamber.code;
        chamber.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](coordinate);
        chamber.loopLength = loopLength;
        return chamber;
    }
    createPoles(prefPole, interval, segment, loopLength, loopEnd) {
        let intervalPoints = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_1__["GeoHelper"].getPointsAtDistance(segment.coordinates, (interval / 1000));
        let poles = new Array();
        for (var i = 0; i < intervalPoints.length; i++) {
            if (i == intervalPoints.length - 1)
                var pole = this.createPole(prefPole, intervalPoints[i], (loopLength + loopEnd));
            else
                var pole = this.createPole(prefPole, intervalPoints[i], loopLength);
            poles.push(pole);
        }
        return poles;
    }
    createPole(prefPole, coordinate, loopLength) {
        var pole = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](prefPole);
        pole.entityType = "Pole";
        pole.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        pole.code = this.generateEntityCode("Pole");
        pole.name = pole.code;
        pole.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](coordinate);
        pole.loopLength = loopLength;
        return pole;
    }
    createSplitter(prefSplitter, coordinates) {
        var splitter = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](prefSplitter);
        splitter.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        splitter.entityType = "Splitter";
        splitter.code = this.generateEntityCode("Splitter");
        splitter.name = splitter.code;
        splitter.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](coordinates);
        return splitter;
    }
    createSpliceClosure(prefSpliceClosure, coordinates) {
        var spliceClosure = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](prefSpliceClosure);
        spliceClosure.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        spliceClosure.entityType = "SpliceClosure";
        spliceClosure.code = this.generateEntityCode("SpliceClosure");
        spliceClosure.name = spliceClosure.code;
        spliceClosure.geometry = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](coordinates);
        return spliceClosure;
    }
    generateEntityCode(entityType) {
        let entityCode = "";
        let maxId = null;
        let bookingId = this.bookingIds.find(x => x.entityType == entityType);
        if (this.generatedCodes == null)
            this.generatedCodes = new Array();
        let codeId = this.generatedCodes.find(x => x.entityType == entityType);
        if (codeId) {
            maxId = codeId.maxId + bookingId.step;
            entityCode = bookingId.format.replace('{code}', maxId.toString());
            codeId.maxId = maxId;
        }
        else {
            maxId = bookingId.sequenceStart;
            entityCode = bookingId.format.replace('{code}', maxId.toString());
            this.generatedCodes.push({ entityType: entityType, maxId: maxId });
        }
        return entityCode;
    }
}


/***/ }),

/***/ "./src/app/designs/services/fttx.helper.ts":
/*!*************************************************!*\
  !*** ./src/app/designs/services/fttx.helper.ts ***!
  \*************************************************/
/*! exports provided: FTTxHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FTTxHelper", function() { return FTTxHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _homepasses_services_homepass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../homepasses/services/homepass.service */ "./src/app/homepasses/services/homepass.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/geo/geoNode */ "./src/app/common/geo/geoNode.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _entities_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities.helper */ "./src/app/designs/services/entities.helper.ts");









let FTTxHelper = class FTTxHelper {
    constructor(httpClient, appConfig, homepassService, helper) {
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.homepassService = homepassService;
        this.helper = helper;
    }
    generateFTTxDesign(design) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.design = design;
            this.design.bluePrint = null;
            this.entitiesHelper = new _entities_helper__WEBPACK_IMPORTED_MODULE_8__["EntitiesHelper"](design.bookingIds, design.generatedCodes);
            let status = false;
            try {
                this.helper.log(this.design, "Information", "Generating FTTX design...");
                let homepasses = yield this.getHomepasses(this.design.clusterId);
                if (homepasses == null || homepasses.length == 0)
                    throw new Error('No homepasses to process...');
                let geoNodes = new Array();
                let homepassNodes = new Array();
                let level = this.design.networkSettings.length + 1;
                this.design.homepasses = homepasses;
                homepasses.forEach(x => {
                    geoNodes.push({ id: x.id, level: level, levelName: "homepasses", coordinates: x.geometry.coordinates, connections: x.connections });
                });
                for (let index = this.design.networkSettings.length - 1; index >= 0; index--) {
                    let splitters = this.getSplitters(index);
                    if (splitters == null || splitters.length == 0) {
                        this.helper.log(this.design, "Error", "Splitters not defined at any of the levels...");
                        throw new Error('No splitters available to process...');
                    }
                    //let outputPorts = this.getTotalSplitterPorts(splitters);
                    //let connections = this.getConnectionsCount(geoNodes);
                    //let splitterCount = Math.ceil((connections / outputPorts) * (cableSettings.connectionPercent) / 100);
                    //geoNodes = GeoHelper.clustersKmeans(geoNodes, splitterCount, this.design.networkSettings[index].name);
                    geoNodes = yield this.createClusters(geoNodes, splitters, index);
                    let cableSettings = this.design.networkSettings[index].cabling.cableSettings;
                    let preferedCable = this.getPreferedCable(cableSettings, geoNodes.length);
                    if (preferedCable == null) {
                        this.helper.log(this.design, "Error", "Insufficient Cable Configuration");
                        throw new Error('Insufficient cable configuration');
                    }
                    geoNodes = yield this.generateSegments(geoNodes);
                    geoNodes.forEach(x => {
                        if (x.segments != null) {
                            this.generateSegmentEntities(preferedCable, x, index);
                            if (this.design.networkSettings[index].destinationNode.entitySettings.dataSource == 'automatic')
                                this.placeSplitter(x.segments, x.coordinates, splitters);
                        }
                    });
                }
                let popCentroid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].center(geoNodes);
                var designTree = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
                designTree.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                //designTree.levelName = "pop";
                designTree.coordinates = popCentroid;
                //designTree.connections = 1;
                designTree.children = geoNodes;
                this.design.bluePrint = designTree;
                status = true;
            }
            catch (e) {
                status = false;
                this.helper.log(this.design, "Error", e);
            }
            $("#ajax-loading").hide();
            return status;
        });
    }
    getHomepasses(clusterId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.helper.log(this.design, "Information", "Getting home passes for cluster - " + clusterId);
            let homepasses = new Array();
            if (this.design.designType == 'FTTx') {
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
                    .set('clusterId', clusterId);
                var resp = yield this.httpClient.get(this.homepassService.getHomepassesInClusterApi, { params }).toPromise();
                if (resp.status.toLowerCase() == "error") {
                    this.helper.log(this.design.log, "Error", "Error fetching home passes - " + resp.message);
                }
                else {
                    if (resp.data != null && resp.data.length > 0) {
                        homepasses = resp.data;
                    }
                    this.helper.log(this.design, "Information", "Getting home passes completed");
                }
            }
            return homepasses;
        });
    }
    getSplitters(level) {
        let splitters = [];
        for (var i = level; i >= 0; i--) {
            if (this.design.networkSettings[i].destinationNode.entitySettings.entityName == "Splitter") {
                let sptrs = this.design.networkSettings[i].destinationNode.entitySettings.splitters;
                if (sptrs[0].splitterRatio) {
                    splitters = sptrs;
                    break;
                }
            }
            if (this.design.networkSettings[i].startNode.entitySettings.entityName == "Splitter") {
                let sptrs = this.design.networkSettings[i].startNode.entitySettings.splitters;
                if (sptrs[0].splitterRatio) {
                    splitters = sptrs;
                    break;
                }
            }
        }
        return splitters;
    }
    createClusters(geoNodes, splitters, level) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tempGeoNodes;
            this.helper.log(this.design, "Information", "Generating clusters...");
            try {
                var resp = yield this.httpClient.post(this.appConfig.urls.Routeware.SortPoints, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();
            }
            catch (e) {
                alert(e);
            }
            if (resp.status.toLowerCase() == "error") {
                this.helper.log(this.design.log, "Error", "Error sorting nodes - " + resp.message);
                throw Error("Error sorting nodes");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    let sortedData = new Array();
                    resp.data.forEach(x => {
                        let i = geoNodes.find(n => x.id == n.id);
                        if (i)
                            sortedData.push(i);
                    });
                    if (this.design.networkSettings[level].destinationNode.entitySettings.dataSource == 'automatic') {
                        //tempGeoNodes = this.createAutomaticCluster(sortedData, splitters, level);
                        tempGeoNodes = this.createAutomaticCluster(geoNodes, splitters, level);
                    }
                    else {
                        //tempGeoNodes = this.createExistingCluster(sortedData, splitters, level);
                        tempGeoNodes = this.createExistingCluster(geoNodes, splitters, level);
                    }
                }
                else {
                    this.helper.log(this.design.log, "Error", "Nodes not available - " + resp.message);
                    throw Error("Nodes not available");
                }
            }
            this.helper.log(this.design, "Information", "Sorting homepasses completed");
            return tempGeoNodes;
        });
    }
    createAutomaticCluster(sortedNodes, splitters, level) {
        var tempClusters = new Array();
        let cableSettings = this.design.networkSettings[level].cabling.cableSettings;
        //let outputPorts = this.getTotalSplitterPorts(splitters);
        let outputPorts = parseInt(splitters[0].splitterRatio.split(":")[1]);
        let outputPortsTemp = ((outputPorts * cableSettings.connectionPercent) / 100).toFixed();
        let connections = 0;
        let geoNode = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
        geoNode.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
        geoNode.levelName = this.design.networkSettings[level].name;
        geoNode.level = level;
        geoNode.coordinates = null;
        geoNode.connections = 1;
        geoNode.children = new Array();
        sortedNodes.forEach(x => {
            if ((parseInt(outputPortsTemp) - connections) <= 0) {
                geoNode.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].center(geoNode.children);
                //geoNode.children.push({
                //   id: geoNode.id,
                //   connections: 0,
                //   children: null,
                //   coordinates: geoNode.coordinates,
                //   level: geoNode.level,
                //   segments: null
                //});
                tempClusters.push(geoNode);
                geoNode = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
                connections = 0;
                geoNode.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                geoNode.levelName = this.design.networkSettings[level].name;
                geoNode.level = level;
                geoNode.coordinates = null;
                geoNode.connections = 1;
                if (geoNode.children == null)
                    geoNode.children = new Array();
            }
            geoNode.children.push(x);
            connections += x.connections;
            //geoNode.connections = connections;
        });
        if (geoNode.children.length > 0) {
            geoNode.coordinates = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].center(geoNode.children);
            //geoNode.children.push({
            //   id: geoNode.id,
            //   connections: 0,
            //   children: null,
            //   coordinates: geoNode.coordinates,
            //   level: geoNode.level,
            //   segments: null
            //});
            tempClusters.push(geoNode);
        }
        return tempClusters;
    }
    createExistingCluster(sortedNodes, splitters, level) {
        var tempClusters = new Array();
        splitters.forEach(x => {
            let geoNode = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["GeoNode"]();
            geoNode.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
            geoNode.levelName = this.design.networkSettings[level].name;
            geoNode.level = level;
            geoNode.coordinates = x.geometry.coordinates;
            geoNode.connections = 1;
            geoNode["availableConnections"] = 8;
            geoNode.children = new Array();
            tempClusters.push(geoNode);
        });
        sortedNodes.forEach(x => {
            let nearestSplitter = this.getNearestSplitter(x.coordinates, tempClusters, x.connections);
            if (nearestSplitter && nearestSplitter["availableConnections"] >= x.connections) {
                if (nearestSplitter.children == null)
                    nearestSplitter.children = new Array();
                nearestSplitter.children.push(x);
                //nearestSplitter.connections += x.connections;
                nearestSplitter["availableConnections"] -= x.connections;
            }
        });
        let validClusters = new Array();
        tempClusters.forEach(x => {
            if (x.children.length > 0)
                validClusters.push(x);
        });
        return validClusters;
    }
    //getTotalSplitterPorts(splitters: Splitter[]): number {
    //    let outputPorts = 0;
    //    splitters.forEach(x => {
    //        outputPorts += parseInt(x.splitterRatio.split(":")[1])
    //    });
    //    return outputPorts;
    //}
    getPreferedCable(cableSettings, splitterCount) {
        let cable = null;
        if (cableSettings.cables && cableSettings.cables.length > 0) {
            for (var i = 0; i < cableSettings.cables.length; i++) {
                let availableConn = cableSettings.cables[i].corePerTube * cableSettings.cables[i].noOfTubes;
                if (splitterCount < availableConn) {
                    cable = cableSettings.cables[i];
                    break;
                }
            }
        }
        return cable;
    }
    generateSegments(geoNodes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tempNodes = new Array();
            this.helper.log(this.design, "Information", "Generating segment information...");
            var resp = yield this.httpClient.post(this.appConfig.urls.Routeware.GenerateMSTRecursive, { Region: this.appConfig.settings.Region, Nodes: geoNodes }).toPromise();
            if (resp.status.toLowerCase() == "error") {
                this.helper.log(this.design.log, "Error", "Error generating segments - " + resp.message);
                throw new Error('Error generating segments..');
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    tempNodes = resp.data;
                }
            }
            this.helper.log(this.design, "Information", "Generating segment information completed");
            return tempNodes;
        });
    }
    generateSegmentEntities(preferedCable, geoNode, level) {
        let sourceEntity = this.design.networkSettings[level].startNode.entitySettings.entityName;
        let cableType = this.design.networkSettings[level].cabling.cableSettings.cableType;
        let prefChamber = this.design.networkSettings[level].cabling.cableSettings.chamber;
        let prefPole = this.design.networkSettings[level].cabling.cableSettings.pole;
        let prefSpliceClosure = this.design.networkSettings[level].cabling.spliceClosureSettings.spliceClosures[0];
        let chamberInterval = this.design.networkSettings[level].cabling.cableSettings.chamberInterval;
        let loopLength = this.design.networkSettings[level].cabling.cableSettings.cableLoop;
        let loopDistance = this.design.networkSettings[level].cabling.cableSettings.loopInterval;
        let loopEnd = this.design.networkSettings[level].cabling.cableSettings.loopAtClosure;
        let drumLength = this.design.networkSettings[level].cabling.spliceClosureSettings.drumLength;
        geoNode.segments = this.splitSegments(geoNode.segments, drumLength, loopDistance, loopLength, loopEnd);
        let segments = geoNode.segments;
        if (segments && segments.length > 0) {
            segments.forEach(segment => {
                segment.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                //1. generate Cables
                segment.cable = this.entitiesHelper.createCable(preferedCable, segment.coordinates);
                segment.cable.calculatedLength = (((segment.cable.measuredLength / loopDistance)) * loopLength) + segment.cable.measuredLength + loopEnd;
                //2. Generate Poles/Chambers
                if (cableType.toLowerCase() == "underground") {
                    segment.chambers = this.entitiesHelper.createChambers(prefChamber, chamberInterval, segment, loopLength, loopEnd);
                }
                else {
                    segment.poles = this.entitiesHelper.createPoles(prefPole, chamberInterval, segment, loopLength, loopEnd);
                }
                //3. Place SpliceClosure at end of each segment
                let cableEndPoint = segment.coordinates[segment.coordinates.length - 1];
                let spliceClosure = this.entitiesHelper.createSpliceClosure(prefSpliceClosure, cableEndPoint);
                if (segment.spliceClosures == null)
                    segment.spliceClosures = new Array();
                segment.spliceClosures.push(spliceClosure);
            });
            //If not splitter, place entities near Homepasses
            if (sourceEntity != "Splitter") {
                geoNode.children.forEach(item => {
                    let nearestSegment = this.getNearestSegment(segments, item.coordinates);
                    let nearestPoint = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].nearestPointOnLine(item.coordinates, nearestSegment.coordinates);
                    switch (sourceEntity) {
                        case "Chamber":
                            if (nearestSegment.chambers == null)
                                nearestSegment.chambers = new Array();
                            let chamber = this.entitiesHelper.createChamber(prefChamber, nearestPoint, loopLength);
                            nearestSegment.chambers.push(chamber);
                            break;
                        case "Pole":
                            if (nearestSegment.poles == null)
                                nearestSegment.poles = new Array();
                            let pole = this.entitiesHelper.createPole(prefPole, nearestPoint, loopLength);
                            nearestSegment.poles.push(pole);
                            break;
                        case "SpliceClosure":
                            if (nearestSegment.spliceClosures == null)
                                nearestSegment.spliceClosures = new Array();
                            let spliceClosure = this.entitiesHelper.createSpliceClosure(prefSpliceClosure, nearestPoint);
                            nearestSegment.spliceClosures.push(spliceClosure);
                            break;
                        default:
                    }
                });
            }
        }
    }
    splitSegments(segments, drumLength, loopDistance, loopLength, loopEnd) {
        let tempSegments = new Array();
        let eSegmentLength = ((loopDistance * (drumLength + loopLength - loopEnd)) / (loopLength + loopDistance)) / 1000;
        segments.forEach(segment => {
            //let intervalPoints = GeoHelper.getPointsAtDistance(segment.coordinates, (chamberInterval / 1000));
            let segmentLength = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].getLength(segment.coordinates);
            if (segmentLength <= eSegmentLength)
                tempSegments.push(segment);
            else {
                let points = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].lineChunk(segment.coordinates, eSegmentLength);
                points.forEach(x => {
                    let newSegment = new _common_geo_geoNode__WEBPACK_IMPORTED_MODULE_4__["Segment"]();
                    newSegment.id = _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].generateObjectId();
                    newSegment.coordinates = x;
                    tempSegments.push(newSegment);
                });
            }
        });
        return tempSegments;
    }
    placeSplitter(segments, point, splitters) {
        if (segments && segments.length > 0) {
            let nearestSegment = this.getNearestSegment(segments, point);
            //let nearestPoint = GeoHelper.nearestPointOnLine(point, nearestSegment.coordinates);
            let nearestPoint = null;
            if (nearestSegment.chambers && nearestSegment.chambers.length > 0) {
                nearestPoint = this.getNearestPoleOrChamberLocation(nearestSegment.chambers, point);
            }
            else {
                nearestPoint = this.getNearestPoleOrChamberLocation(nearestSegment.poles, point);
            }
            if (nearestSegment.splitters == null)
                nearestSegment.splitters = new Array();
            let splitter = this.entitiesHelper.createSplitter(splitters[0], nearestPoint);
            nearestSegment.splitters.push(splitter);
        }
    }
    getNearestSegment(segments, point) {
        let distance;
        let nearestSegment;
        segments.forEach(x => {
            let d = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].pointToLineDistance(point, x.coordinates);
            if (distance == null) {
                distance = d;
                nearestSegment = x;
            }
            else {
                if (d < distance) {
                    distance = d;
                    nearestSegment = x;
                }
            }
        });
        return nearestSegment;
    }
    getNearestSplitter(point, splitters, connections) {
        let filteredSplitters = new Array();
        splitters.forEach(x => {
            if (x["availableConnections"] >= connections)
                filteredSplitters.push(x);
        });
        //let filteredSplitters = splitters.filter(x => {
        //    x["availableConnections"] >= connections;
        //});
        let nearestSplitter = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].nearestPoint(point, filteredSplitters);
        return nearestSplitter;
    }
    getNearestPoleOrChamberLocation(entity, point) {
        let coords = [];
        entity.forEach(x => {
            coords.push(x.geometry.coordinates);
        });
        let nearestPoint = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].nearestPoint2(point, coords);
        return nearestPoint;
    }
};
FTTxHelper.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"] },
    { type: _homepasses_services_homepass_service__WEBPACK_IMPORTED_MODULE_2__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"] }
];
FTTxHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FTTxHelper);



/***/ }),

/***/ "./src/app/designs/services/geoNode.helper.ts":
/*!****************************************************!*\
  !*** ./src/app/designs/services/geoNode.helper.ts ***!
  \****************************************************/
/*! exports provided: GeoNodeHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoNodeHelper", function() { return GeoNodeHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GeoNodeHelper {
    constructor() { }
    getSegmentById() {
    }
    static deleteSegmentEntity(geoNode, entityId, entityType) {
        var i = 0;
        if (geoNode) {
            //if (group.children)
            //    group.children.forEach(x => {
            //        this.removeMapObject(x);
            //    });
            if (geoNode.segments) {
                geoNode.segments.forEach(x => {
                    i = i + 1;
                    if ((entityType == "Cable" || x.cable.entityType == "Cable") && (x.cable.id == entityId)) {
                        //x.cable = null;
                        //geoNode.segments.slice[i - 1];
                        var index = geoNode.segments.map(x => { return x.cable.id; }).indexOf(entityId);
                        geoNode.segments.splice(index, 1);
                    }
                    if (entityType == "Chamber" && x.chambers) {
                        let index = x.chambers.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.chambers.splice(index, 1);
                    }
                    //if (entityType == "Duct") {
                    //    x.ducts.forEach(duct => {
                    //        if (duct.id == entityId)
                    //            duct = null;
                    //    })
                    //}
                    if (entityType == "ODF" && x.odfs) {
                        let index = x.odfs.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.odfs.splice(index, 1);
                    }
                    if (entityType == "Pole" && x.poles) {
                        let index = x.poles.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.poles.splice(index, 1);
                    }
                    if (entityType == "Splitter" && x.splitters) {
                        let index = x.splitters.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.splitters.splice(index, 1);
                    }
                    if (entityType == "SpliceClosure" && x.spliceClosures) {
                        let index = x.spliceClosures.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.spliceClosures.splice(index, 1);
                    }
                    if (entityType == "FAT" && x.fats) {
                        let index = x.fats.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.fats.splice(index, 1);
                    }
                    if (entityType == "FDT" && x.fdts) {
                        let index = x.fdts.findIndex(i => i.id == entityId);
                        if (index >= 0)
                            x.fdts.splice(index, 1);
                    }
                    if ((entityType == "MicroDuct" || x.microduct.entityType == "MicroDuct") && x.microduct.id == entityId) {
                        var index = geoNode.segments.map(x => { return x.microduct.id; }).indexOf(entityId);
                        geoNode.segments.splice(index, 1);
                    }
                });
            }
            if (geoNode.children && geoNode.children.length > 0)
                geoNode.children.forEach(g => {
                    this.deleteSegmentEntity(g, entityId, entityType);
                });
        }
    }
    static deleteLineSegmentEntity(geoNode, entityId, entityType) {
        //console.log(geoNode);
        //console.log(entityId);
        //console.log(entityType);
        if (entityType == "Duct") {
            for (var i = 0; i <= geoNode.children.length - 1; i++) {
                for (var j = 0; j <= geoNode.children[i].segments.length - 1; j++) {
                    if (geoNode.children[i].segments[j].ducts != undefined) {
                        if (geoNode.children[i].segments[j].ducts.id == entityId) {
                            geoNode.children[i].segments.splice(j, 1);
                            return false;
                        }
                    }
                }
            }
        }
        if (entityType == "MicroDuct") {
            for (var i = 0; i <= geoNode.children.length - 1; i++) {
                for (var j = 0; j <= geoNode.children[i].segments.length - 1; j++) {
                    if (geoNode.children[i].segments[j].microduct != undefined) {
                        if (geoNode.children[i].segments[j].microduct.id == entityId) {
                            geoNode.children[i].segments.splice(j, 1);
                            return false;
                        }
                    }
                }
            }
        }
    }
    static getLastSegment(geoNode) {
        let segment = null;
        if (geoNode) {
            if (geoNode.segments) {
                geoNode.segments.forEach(x => {
                    segment = x;
                });
            }
            if (geoNode.children && geoNode.children.length > 0)
                geoNode.children.forEach(g => {
                    this.getLastSegment(g);
                });
        }
        return segment;
    }
}


/***/ }),

/***/ "./src/app/designs/services/map-entities.helper.ts":
/*!*********************************************************!*\
  !*** ./src/app/designs/services/map-entities.helper.ts ***!
  \*********************************************************/
/*! exports provided: MapEntitiesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEntitiesHelper", function() { return MapEntitiesHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/geo/googleMapsHelper */ "./src/app/common/geo/googleMapsHelper.ts");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");



class MapEntitiesHelper {
    constructor(map) {
        this.map = map;
    }
    drawPoint(entity, icon, isEditable, attachMapObject) {
        var coordinates = [];
        if (entity.geometry)
            coordinates = entity.geometry.coordinates;
        else if (entity.coordinates)
            coordinates = entity.coordinates;
        let location = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_2__["GeoHelper"].convertToPosition(coordinates);
        let marker = new google.maps.Marker({
            position: location,
            draggable: isEditable,
            cursor: 'pointer',
            id: entity.id,
            data: entity,
            //icon: {
            //    url: icon,
            //    ////origin: new google.maps.Point(96, 0),
            //    ////size: new google.maps.Size(96, 96),
            //    ////scaledSize: new google.maps.Size(192, 96),
            //    //anchor: new google.maps.Point(10, 10)
            //},
            icon: icon,
            map: this.map
        });
        //https://pepsized.com/customize-your-google-map-markers/
        marker.setTitle(entity.layerName);
        if (attachMapObject)
            entity['mapObject'] = marker;
        return marker;
    }
    drawLine(entity, lineColor, strokeWeight, isEditable, attachMapObject) {
        let colour = "#000000";
        let lineWeight = 3;
        if (lineColor)
            colour = lineColor;
        if (strokeWeight)
            lineWeight = strokeWeight;
        let polyline = new google.maps.Polyline({
            strokeColor: colour,
            strokeOpacity: 1.0,
            strokeWeight: lineWeight,
            editable: isEditable,
            data: entity,
            id: entity.id,
            map: this.map
        });
        let path = polyline.getPath();
        polyline.setMap(this.map);
        if (attachMapObject)
            entity['mapObject'] = polyline;
        if (entity.geometry != undefined) {
            if (entity.geometry.coordinates.length > 1) {
                for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                    path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
                }
                polyline.setEditable(false);
            }
        }
        else {
            GMHelper.clearClickListener(this.map, "click");
            GMHelper.addListener(this.map, "click", function (event) {
                polyline.setEditable(true);
                path = polyline.getPath();
                path.push(event.latLng);
            });
            this.map.setOptions({ draggableCursor: 'crosshair' });
            GMHelper.addListener(polyline, "rightclick", function (event) {
                GMHelper.clearClickListener(polyline, "rightclick");
                GMHelper.clearClickListener(polyline.map, "click");
                polyline.map.setOptions({ draggableCursor: '' });
                polyline.setEditable(false);
                entity['mapObject'] = polyline;
                return polyline;
            });
        }
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__["GMapsHelper"].addListener(polyline, 'mouseover', function (latlng) {
            polyline.setOptions({ strokeColor: '#FF0000', strokeWeight: lineWeight + 2 });
        });
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__["GMapsHelper"].addListener(polyline, 'mouseout', function (latlng) {
            polyline.setOptions({ strokeColor: lineColor, strokeWeight: lineWeight });
        });
        return polyline;
    }
    drawPolygon(entity, lineColor, strokeWeight, isEditable, attachMapObject) {
        let colour = "#000000";
        let lineWeight = 3;
        if (lineColor)
            colour = lineColor;
        if (strokeWeight)
            lineWeight = strokeWeight;
        let polygon = new google.maps.Polygon({
            strokeColor: colour,
            strokeOpacity: 1.0,
            strokeWeight: lineWeight,
            editable: isEditable,
            data: entity,
            id: entity.id
        });
        let path = polygon.getPath();
        polygon.setMap(this.map);
        if (attachMapObject)
            entity['mapObject'] = polygon;
        if (entity.geometry.coordinates.length > 1) {
            for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
            }
            polygon.setEditable(false);
        }
        return polygon;
    }
    removeMapObjects(entities) {
        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    if (x['mapObject']) {
                        x['mapObject'].setMap(null);
                    }
                });
            }
            else {
                if (entities['mapObject']) {
                    entities['mapObject'].setMap(null);
                }
            }
        }
    }
    //removeLines(entities: any) {
    //    if (entities) {
    //        if (entities.length > 0) {
    //            entities.forEach(x => {
    //                if (x['mapObject']) {
    //                    x['mapObject'].setMap(null);
    //                }
    //            });
    //        }
    //        else {
    //            if (entities['mapObject']) {
    //                entities['mapObject'].setMap(null);
    //            }
    //        }
    //    }
    //}
    drawDuctLine(entity, lineColor, strokeWeight, isEditable, attachMapObject) {
        let polyline;
        let lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };
        polyline = new google.maps.Polyline({
            strokeColor: '#FFA500',
            strokeOpacity: 0,
            editable: isEditable,
            data: entity,
            id: entity.id,
            map: this.map,
            icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '20px'
                }],
        });
        let path = polyline.getPath();
        polyline.setMap(this.map);
        if (attachMapObject)
            entity['mapObject'] = polyline;
        if (entity.geometry != undefined) {
            if (entity.geometry.coordinates.length > 1) {
                for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                    path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
                }
                polyline.setEditable(false);
            }
        }
        else {
            GMHelper.clearClickListener(this.map, "click");
            GMHelper.addListener(this.map, "click", function (event) {
                polyline.setEditable(true);
                path = polyline.getPath();
                path.push(event.latLng);
            });
            this.map.setOptions({ draggableCursor: 'crosshair' });
            GMHelper.addListener(polyline, "rightclick", function (event) {
                GMHelper.clearClickListener(polyline, "rightclick");
                GMHelper.clearClickListener(polyline.map, "click");
                polyline.map.setOptions({ draggableCursor: '' });
                polyline.setEditable(false);
                entity['mapObject'] = polyline;
                return polyline;
            });
        }
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__["GMapsHelper"].addListener(polyline, 'mouseover', function (latlng) {
            polyline.setOptions({ strokeColor: '#FFA500' });
        });
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__["GMapsHelper"].addListener(polyline, 'mouseout', function (latlng) {
            polyline.setOptions({ strokeColor: 'FFA500' });
        });
        return polyline;
    }
    drawMicroDuctLine(entity, lineColor, strokeWeight, isEditable, attachMapObject) {
        let polyline;
        let lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };
        polyline = new google.maps.Polyline({
            strokeColor: '#000000',
            strokeOpacity: 0,
            editable: isEditable,
            data: entity,
            id: entity.id,
            map: this.map,
            icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '20px'
                }],
        });
        let path = polyline.getPath();
        polyline.setMap(this.map);
        if (attachMapObject)
            entity['mapObject'] = polyline;
        if (entity.geometry != undefined) {
            if (entity.geometry.coordinates.length > 1) {
                for (var i = 0; i < entity.geometry.coordinates.length; i++) {
                    path.push(new google.maps.LatLng(entity.geometry.coordinates[i][1], entity.geometry.coordinates[i][0]));
                }
                polyline.setEditable(false);
            }
        }
        else {
            GMHelper.clearClickListener(this.map, "click");
            GMHelper.addListener(this.map, "click", function (event) {
                polyline.setEditable(true);
                path = polyline.getPath();
                path.push(event.latLng);
            });
            this.map.setOptions({ draggableCursor: 'crosshair' });
            GMHelper.addListener(polyline, "rightclick", function (event) {
                GMHelper.clearClickListener(polyline, "rightclick");
                GMHelper.clearClickListener(polyline.map, "click");
                polyline.map.setOptions({ draggableCursor: '' });
                polyline.setEditable(false);
                entity['mapObject'] = polyline;
                return polyline;
            });
        }
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__["GMapsHelper"].addListener(polyline, 'mouseover', function (latlng) {
            polyline.setOptions({ strokeColor: '#000000' });
        });
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_1__["GMapsHelper"].addListener(polyline, 'mouseout', function (latlng) {
            polyline.setOptions({ strokeColor: '000000' });
        });
        return polyline;
    }
}


/***/ }),

/***/ "./src/app/designs/views/design-details.ts":
/*!*************************************************!*\
  !*** ./src/app/designs/views/design-details.ts ***!
  \*************************************************/
/*! exports provided: DesignDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignDetails", function() { return DesignDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/design.service */ "./src/app/designs/services/design.service.ts");
/* harmony import */ var _models_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/design */ "./src/app/designs/models/design.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _services_design_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/design.helper */ "./src/app/designs/services/design.helper.ts");
/* harmony import */ var _services_bom_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/bom.helper */ "./src/app/designs/services/bom.helper.ts");









let DesignDetails = class DesignDetails {
    constructor(location, route, designService, designHelper, helper, bomHelper) {
        this.location = location;
        this.route = route;
        this.designService = designService;
        this.designHelper = designHelper;
        this.helper = helper;
        this.bomHelper = bomHelper;
        this.referenceId = "";
        this.design = new _models_design__WEBPACK_IMPORTED_MODULE_5__["Design"]();
        this.designs = new Array();
        this.allDesigns = new Array();
        this.title = "New Design";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.referenceId = params['id'];
            if (this.referenceId == null)
                this.title = "New Design";
            else
                this.title = "Edit Design";
            this.getFormData(this.referenceId);
        });
    }
    getFormData(referenceId) {
        $("#ajax-loading").show();
        this.designService.getDesigns().subscribe(resp => {
            if (resp.status.toLowerCase() == "error") {
                this.helper.showAlertMessage(resp.message, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.allDesigns = resp.data;
                    if (this.allDesigns && this.allDesigns.length > 0)
                        this.designs = this.allDesigns.filter(x => x.referenceId == referenceId);
                    if (this.designs && this.designs.length > 0) {
                        let latestVersion = Math.max.apply(Math, this.designs.map(function (o) { return o.version; }));
                        this.design = this.designs.find(x => x.version == latestVersion);
                    }
                    this.allDesigns = this.allDesigns.filter(x => x.id != this.design.id);
                    if (this.design.bluePrint) {
                        this.bomHelper.generateBOQ(this.design);
                    }
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            let msg = `Unable to fetch design : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
        });
    }
    onVersionChange(event) {
        this.design = this.designs.find(x => x.version == event);
    }
    generateDesign() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.designHelper.generateDesign(this.design);
        });
    }
    save() {
        var errorMessages = this.validateDesign(this.design);
        if (errorMessages.length == 0) {
            this.clearMapObjects(this.design.bluePrint);
            this.designService.saveDesign(this.design).subscribe(resp => {
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    if (resp.data != null) {
                        this.helper.showAlertMessage("Design information saved", "success");
                        this.goBack();
                    }
                    else
                        this.helper.showAlertMessage("Unable to save design information.", "error");
                }
            }, (err) => {
                this.helper.showAlertMessage("Unable to save design information.", "error");
            });
        }
        else {
            var errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }
    clearMapObjects(group) {
        if (group) {
            if (group.children)
                group.children.forEach(x => {
                    this.removeMapObject(x);
                });
            if (group.segments) {
                group.segments.forEach(x => {
                    this.removeMapObject(x.cable);
                    this.removeMapObject(x.chambers);
                    this.removeMapObject(x.ducts);
                    this.removeMapObject(x.odfs);
                    this.removeMapObject(x.poles);
                    this.removeMapObject(x.splitters);
                    this.removeMapObject(x.spliceClosures);
                    this.removeMapObject(x.fdts);
                    this.removeMapObject(x.fats);
                    this.removeMapObject(x.microduct);
                });
            }
            if (group.children && group.children.length > 0)
                group.children.forEach(g => {
                    this.clearMapObjects(g);
                });
        }
    }
    removeMapObject(entities) {
        if (entities) {
            if (entities.length > 0) {
                entities.forEach(x => {
                    if (x['mapObject']) {
                        x['mapObject'] = null;
                    }
                });
            }
            else {
                if (entities['mapObject']) {
                    entities['mapObject'] = null;
                }
            }
        }
    }
    saveNewVersion() {
        let latestVersion = Math.max.apply(Math, this.designs.map(function (o) { return o.version; }));
        this.design.id = null;
        this.design.version = latestVersion + 1;
        this.save();
    }
    validateDesign(design) {
        var errorMessages = [];
        if (design.name == null || design.name.trim() == '')
            errorMessages.push("Design name cannot be empty");
        if (design.code == null || design.code.trim() == '')
            errorMessages.push("Design code cannot be empty");
        return errorMessages;
    }
    goBack() {
        this.location.back();
    }
};
DesignDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"] },
    { type: _services_design_helper__WEBPACK_IMPORTED_MODULE_7__["DesignHelper"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"] },
    { type: _services_bom_helper__WEBPACK_IMPORTED_MODULE_8__["BomHelper"] }
];
DesignDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./design-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/views/design-details.html")).default,
        providers: [_services_design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"]],
    })
], DesignDetails);



/***/ }),

/***/ "./src/app/designs/views/design-list.ts":
/*!**********************************************!*\
  !*** ./src/app/designs/views/design-list.ts ***!
  \**********************************************/
/*! exports provided: DesignList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignList", function() { return DesignList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/design.service */ "./src/app/designs/services/design.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");





let DesignList = class DesignList {
    constructor(designService, helper) {
        this.designService = designService;
        this.helper = helper;
        this.designs = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SortOrder"].descending;
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'DesignType', label: 'Design Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Version', label: 'Version', dataType: "number", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Designs...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SortOrder"].noSort;
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
        this.designService.getDesigns(paginationRequest).subscribe(resp => {
            this.designs = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.designs = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered designs.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.designs = null;
            let msg = `Unable to fetch designs : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching designs.";
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
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SortOrder"].descending;
        }
        else if (e.classList.contains("table-sorter-desc")) {
            e.classList.remove('table-sorter-desc');
            this.sortColumn = null;
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SortOrder"].noSort;
        }
        else {
            e.classList.add('table-sorter-asc');
            this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_2__["SortOrder"].ascending;
        }
        this.getFormData();
    }
    delete(design) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Design</b>",
            overlay: false,
            content: "Do you want to delete design - " + design.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.designService.deleteDesign(design.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Design deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting design", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting design", "error");
                });
            }
        }).open();
    }
    exportKML(design) {
        this.designService.exportDesign(design.id).subscribe(resp => {
            this.designs = null;
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
                this.getFormData();
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.designs = null;
            let msg = `Unable to export designs : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error export designs.";
        });
    }
};
DesignList.ctorParameters = () => [
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] }
];
DesignList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./design-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/designs/views/design-list.html")).default
    })
], DesignList);



/***/ }),

/***/ "./src/app/entities/models/MicroDuct.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/models/MicroDuct.ts ***!
  \**********************************************/
/*! exports provided: MicroDuct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroDuct", function() { return MicroDuct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");




class MicroDuct extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_3__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "Duct";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_1__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/Solution2.zip.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/models/Solution2.zip.ts ***!
  \**************************************************/
/*! exports provided: FDT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FDT", function() { return FDT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optics */ "./src/app/entities/models/optics.ts");





class FDT extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "FDT";
        this.optics = new _optics__WEBPACK_IMPORTED_MODULE_4__["Optics"]();
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
    }
}


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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optics */ "./src/app/entities/models/optics.ts");





class Cable extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor(id, code, isUnderground, noOfTubes, corePerTube, optics) {
        super(id, code);
        this.entityType = "Cable";
        this.optics = new _optics__WEBPACK_IMPORTED_MODULE_4__["Optics"]();
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
        this.isUnderground = isUnderground;
        this.noOfTubes = noOfTubes;
        this.corePerTube = corePerTube;
        this.optics = optics;
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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");




class Chamber extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "Chamber";
        this.loopLength = "";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");




class Duct extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_3__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "Duct";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_2__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_1__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/fat.ts":
/*!****************************************!*\
  !*** ./src/app/entities/models/fat.ts ***!
  \****************************************/
/*! exports provided: FAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAT", function() { return FAT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optics */ "./src/app/entities/models/optics.ts");





class FAT extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "FAT";
        this.optics = new _optics__WEBPACK_IMPORTED_MODULE_4__["Optics"]();
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");




class ODF extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "ODF";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");




class Pole extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "Pole";
        this.loopLength = "";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
    }
}


/***/ }),

/***/ "./src/app/entities/models/pop.ts":
/*!****************************************!*\
  !*** ./src/app/entities/models/pop.ts ***!
  \****************************************/
/*! exports provided: PoP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoP", function() { return PoP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseNetworkEntity */ "./src/app/entities/models/baseNetworkEntity.ts");
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");




class PoP extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "PoP";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");




class SpliceClosure extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "SpliceClosure";
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
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
/* harmony import */ var _owner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner */ "./src/app/entities/models/owner.ts");
/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./installation */ "./src/app/entities/models/installation.ts");
/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optics */ "./src/app/entities/models/optics.ts");





class Splitter extends _baseNetworkEntity__WEBPACK_IMPORTED_MODULE_1__["BaseNetworkEntity"] {
    constructor() {
        super(...arguments);
        this.entityType = "Splitter";
        this.optics = new _optics__WEBPACK_IMPORTED_MODULE_4__["Optics"]();
        this.installation = new _installation__WEBPACK_IMPORTED_MODULE_3__["Installation"]();
        this.owner = new _owner__WEBPACK_IMPORTED_MODULE_2__["Owner"]();
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let CableService = class CableService {
    constructor(http) {
        this.http = http;
        this.getCablesApi = 'Cables/GetCables/';
        this.getCableApi = 'Cables/GetCable/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('cableId', cableId);
        return this.http.get(this.getCableApi, { params });
    }
    saveCable(cable) {
        return this.http.post(this.saveCableApi, cable);
    }
    deleteCable(cableId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('cableId', cableId);
        return this.http.delete(this.deleteCableApi, { params });
    }
};
CableService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ChamberService = class ChamberService {
    constructor(http) {
        this.http = http;
        this.getChambersApi = 'Chambers/GetChambers/';
        this.getChamberApi = 'Chambers/GetChamber/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('chamberId', chamberId);
        return this.http.get(this.getChamberApi, { params });
    }
    saveChamber(chamber) {
        return this.http.post(this.saveChamberApi, chamber);
    }
    deleteChamber(chamberId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('chamberId', chamberId);
        return this.http.delete(this.deleteChamberApi, { params });
    }
};
ChamberService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChamberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let DuctService = class DuctService {
    constructor(http) {
        this.http = http;
        this.getDuctsApi = 'Ducts/GetDucts/';
        this.getDuctApi = 'Ducts/GetDuct/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('ductId', ductId);
        return this.http.get(this.getDuctApi, { params });
    }
    saveDuct(duct) {
        return this.http.post(this.saveDuctApi, duct);
    }
    deleteDuct(ductId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('ductId', ductId);
        return this.http.delete(this.deleteDuctApi, { params });
    }
};
DuctService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DuctService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DuctService);



/***/ }),

/***/ "./src/app/entities/services/fat.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/services/fat.service.ts ***!
  \**************************************************/
/*! exports provided: fatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fatService", function() { return fatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let fatService = class fatService {
    constructor(http) {
        this.http = http;
        this.getfatsApi = 'fat/Getfats/';
        this.getfatApi = 'fat/Getfat/';
        this.savefatApi = 'fat/Savefat/';
        this.deletefatApi = 'fat/Deletefat/';
    }
    getfats(paginationRequest) {
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
        return this.http.post(this.getfatsApi, paginationRequest);
    }
    getfat(fatId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('fatId', fatId);
        return this.http.get(this.getfatApi, { params });
    }
    savefat(fat) {
        return this.http.post(this.savefatApi, fat);
    }
    deletefat(fatId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('fatId', fatId);
        return this.http.delete(this.deletefatApi, { params });
    }
};
fatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
fatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], fatService);



/***/ }),

/***/ "./src/app/entities/services/fdt.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/services/fdt.service.ts ***!
  \**************************************************/
/*! exports provided: fdtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fdtService", function() { return fdtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let fdtService = class fdtService {
    constructor(http) {
        this.http = http;
        this.getfdtsApi = 'Fdt/GetFdts/';
        this.getfdtApi = 'Fdt/Getfdt/';
        this.savefdtApi = 'fdt/Savefdt/';
        this.deletefdtApi = 'fdt/Deletefdt/';
    }
    getfdts(paginationRequest) {
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
        return this.http.post(this.getfdtsApi, paginationRequest);
    }
    getfdt(fdtId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('fdtId', fdtId);
        return this.http.get(this.getfdtApi, { params });
    }
    savefdt(fdt) {
        return this.http.post(this.savefdtApi, fdt);
    }
    deletefdt(fdtId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('fdtId', fdtId);
        return this.http.delete(this.deletefdtApi, { params });
    }
};
fdtService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
fdtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], fdtService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let ODFService = class ODFService {
    constructor(http) {
        this.http = http;
        this.getODFsApi = 'ODFs/GetODFs/';
        this.getODFApi = 'ODFs/GetODF/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('odfId', odfId);
        return this.http.get(this.getODFApi, { params });
    }
    saveODF(odf) {
        return this.http.post(this.saveODFApi, odf);
    }
    deleteODF(odfId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('odfId', odfId);
        return this.http.delete(this.deleteODFApi, { params });
    }
};
ODFService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ODFService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let PoleService = class PoleService {
    constructor(http) {
        this.http = http;
        this.getPolesApi = 'Poles/GetPoles/';
        this.getPoleApi = 'Poles/GetPole/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('poleId', poleId);
        return this.http.get(this.getPoleApi, { params });
    }
    savePole(pole) {
        return this.http.post(this.savePoleApi, pole);
    }
    deletePole(poleId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('poleId', poleId);
        return this.http.delete(this.deletePoleApi, { params });
    }
};
PoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PoleService);



/***/ }),

/***/ "./src/app/entities/services/pop.service.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/services/pop.service.ts ***!
  \**************************************************/
/*! exports provided: PopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopService", function() { return PopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let PopService = class PopService {
    constructor(http) {
        this.http = http;
        this.getPopsApi = 'Pop/GetPops/';
        this.getPopApi = 'Pop/GetPop/';
        this.savePopApi = 'Pop/SavePop/';
        this.deletePopApi = 'Pop/DeletePop/';
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
        return this.http.post(this.getPopsApi, paginationRequest);
    }
    getChamber(popId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('popId', popId);
        return this.http.get(this.getPopApi, { params });
    }
    saveChamber(pop) {
        return this.http.post(this.savePopApi, pop);
    }
    deleteChamber(popId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('popId', popId);
        return this.http.delete(this.deletePopApi, { params });
    }
};
PopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PopService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let SpliceClosureService = class SpliceClosureService {
    constructor(http) {
        this.http = http;
        this.getSpliceClosuresApi = 'SpliceClosures/GetSpliceClosures/';
        this.getSpliceClosureApi = 'SpliceClosures/GetSpliceClosure/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('spliceClosureId', spliceClosureId);
        return this.http.get(this.getSpliceClosureApi, { params });
    }
    saveSpliceClosure(spliceClosure) {
        return this.http.post(this.saveSpliceClosureApi, spliceClosure);
    }
    deleteSpliceClosure(spliceClosureId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('spliceClosureId', spliceClosureId);
        return this.http.delete(this.deleteSpliceClosureApi, { params });
    }
};
SpliceClosureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SpliceClosureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let SplitterService = class SplitterService {
    constructor(http) {
        this.http = http;
        this.getSplittersApi = 'Splitters/GetSplitters/';
        this.getSplitterApi = 'Splitters/GetSplitter/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('splitterId', splitterId);
        return this.http.get(this.getSplitterApi, { params });
    }
    saveSplitter(splitter) {
        return this.http.post(this.saveSplitterApi, splitter);
    }
    deleteSplitter(splitterId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('splitterId', splitterId);
        return this.http.delete(this.deleteSplitterApi, { params });
    }
};
SplitterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SplitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SplitterService);



/***/ }),

/***/ "./src/app/homepasses/homepass.module.ts":
/*!***********************************************!*\
  !*** ./src/app/homepasses/homepass.module.ts ***!
  \***********************************************/
/*! exports provided: HomepassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassModule", function() { return HomepassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_homepass_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/homepass-list */ "./src/app/homepasses/views/homepass-list.ts");
/* harmony import */ var _views_homepass_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/homepass-details */ "./src/app/homepasses/views/homepass-details.ts");
/* harmony import */ var _services_homepass_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/homepass.service */ "./src/app/homepasses/services/homepass.service.ts");
/* harmony import */ var _homepass_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepass.routes */ "./src/app/homepasses/homepass.routes.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");





//import { TreeModule } from 'primeng/tree';






let HomepassModule = class HomepassModule {
};
HomepassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_5__["TreeTableModule"],
            _homepass_routes__WEBPACK_IMPORTED_MODULE_9__["HomepassRouting"],
            _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        declarations: [
            _views_homepass_list__WEBPACK_IMPORTED_MODULE_6__["HomepassList"],
            _views_homepass_details__WEBPACK_IMPORTED_MODULE_7__["HomepassDetails"]
        ],
        providers: [
            _services_homepass_service__WEBPACK_IMPORTED_MODULE_8__["HomepassService"]
        ]
    })
], HomepassModule);



/***/ }),

/***/ "./src/app/homepasses/homepass.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/homepasses/homepass.routes.ts ***!
  \***********************************************/
/*! exports provided: homepassRoutes, HomepassRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepassRoutes", function() { return homepassRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassRouting", function() { return HomepassRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_homepass_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/homepass-list */ "./src/app/homepasses/views/homepass-list.ts");
/* harmony import */ var _views_homepass_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/homepass-details */ "./src/app/homepasses/views/homepass-details.ts");




const homepassRoutes = [
    {
        path: 'homepasses',
        children: [
            { path: '', component: _views_homepass_list__WEBPACK_IMPORTED_MODULE_2__["HomepassList"] },
            { path: 'details', component: _views_homepass_details__WEBPACK_IMPORTED_MODULE_3__["HomepassDetails"] },
            { path: 'details/:id', component: _views_homepass_details__WEBPACK_IMPORTED_MODULE_3__["HomepassDetails"] },
        ]
    },
];
const HomepassRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(homepassRoutes);


/***/ }),

/***/ "./src/app/homepasses/services/homepass.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/homepasses/services/homepass.service.ts ***!
  \*********************************************************/
/*! exports provided: HomepassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassService", function() { return HomepassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");




let HomepassService = class HomepassService {
    constructor(http) {
        this.http = http;
        this.getHomepassesApi = 'Homepasses/GetHomepasses/';
        this.getHomepassApi = 'Homepasses/GetHomepass/';
        this.getHomepassesInClusterApi = 'Homepasses/GetHomepassesInCluster/';
        this.getHomepassesInPolygonApi = 'Homepasses/GetHomepassesInPolygon/';
        this.getHomepassesWithinRadiusApi = 'Homepasses/GetHomepassesWithinRadius/';
        this.saveHomepassApi = 'Homepasses/SaveHomepass/';
        this.saveHomepassesApi = 'Homepasses/SaveHomepasses/';
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
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('homepassId', homepassId);
        return this.http.get(this.getHomepassApi, { params });
    }
    //getHomepassesInCluster(clusterId): Observable<ServiceResponse> {
    //    const params = new HttpParams()
    //        .set('clusterId', clusterId);
    //    return this.http.get<ServiceResponse>(this.getHomepassesInClusterApi, { params });
    //}
    //async getHomepassesInCluster(clusterId) {
    //    const params = new HttpParams()
    //        .set('clusterId', clusterId);
    //    return await this.http.get<ServiceResponse>(this.getHomepassesInClusterApi, { params }).toPromise();
    //}
    saveHomepass(homepass) {
        return this.http.post(this.saveHomepassApi, homepass);
    }
    saveHomepasses(homepasses) {
        return this.http.post(this.saveHomepassesApi, homepasses);
    }
    deleteHomepass(homepassId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('homepassId', homepassId);
        return this.http.delete(this.deleteHomepassApi, { params });
    }
};
HomepassService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomepassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HomepassService);



/***/ }),

/***/ "./src/app/homepasses/views/homepass-details.ts":
/*!******************************************************!*\
  !*** ./src/app/homepasses/views/homepass-details.ts ***!
  \******************************************************/
/*! exports provided: HomepassDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassDetails", function() { return HomepassDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_homepass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/homepass.service */ "./src/app/homepasses/services/homepass.service.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/geo/geoHelper */ "./src/app/common/geo/geoHelper.ts");
/* harmony import */ var _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/geo/googleMapsHelper */ "./src/app/common/geo/googleMapsHelper.ts");
/* harmony import */ var _common_geo_geometry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/geo/geometry */ "./src/app/common/geo/geometry.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");










let HomepassDetails = class HomepassDetails {
    constructor(location, route, appConfig, homepassService, helper) {
        this.location = location;
        this.route = route;
        this.appConfig = appConfig;
        this.homepassService = homepassService;
        this.helper = helper;
        this.homepasses = new Array();
        this.tabTitle = "Add New";
        this.title = "New Homepass";
        this.isNew = true;
        this.polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: false,
            draggable: false
        };
    }
    ngOnInit() {
        let location = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].getLatLng(this.appConfig.settings.MapCenter);
        this.map = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].initializeMap('homepassMap', location, 18, 21);
        this.route.params.subscribe(params => {
            this.homepassId = params['id'];
            if (this.homepassId == null) {
                this.title = "New Homepass";
                this.isNew = true;
            }
            else {
                this.title = "Edit Homepass";
                this.tabTitle = "Edit Homepass";
                this.isNew = false;
            }
            this.getFormData(this.homepassId);
        });
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].addListener(this.map, 'dblclick', (event) => {
            this.homepass = {
                name: "",
                code: "",
                description: "",
                type: "",
                geometry: new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_8__["Point"]([event.latLng.lng(), event.latLng.lat()]),
                area: null,
                connections: 1,
            };
            this.homepasses.push(this.homepass);
            this.addHomepassMarker(this.homepass);
        });
    }
    getFormData(homepassId) {
        this.homepassService.getHomepass(homepassId).subscribe(resp => {
            this.homepass = null;
            if (resp.status.toLowerCase() == "error") {
                this.helper.showAlertMessage(resp.message, "error");
            }
            else {
                if (resp.data != null) {
                    this.homepass = resp.data;
                    this.homepasses.push(this.homepass);
                    this.map.setCenter({ lat: this.homepass.geometry.coordinates[1], lng: this.homepass.geometry.coordinates[0] });
                    if (this.homepass.area)
                        this.addHomepassPolygon(this.homepass);
                    else
                        this.addHomepassMarker(this.homepass);
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.homepass = null;
            let msg = `Unable to fetch homepass : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
        });
    }
    addHomepassMarker(homepass) {
        var location = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].convertToPosition(homepass.geometry.coordinates);
        var icon = {
            url: "images/map-entities/homepass.png",
        };
        var marker = new google.maps.Marker({
            position: location,
            icon: icon,
            draggable: false,
            cursor: 'pointer',
            id: homepass.id,
            code: homepass.code,
            data: homepass,
            map: this.map
        });
        marker.setTitle(homepass.name);
        homepass.marker = marker;
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].addListener(marker, "rightclick", (event) => {
            if (marker.draggable == true) {
                marker.setOptions({ draggable: false });
                marker.data.geometry.coordinates[0] = event.latLng.lng();
                marker.data.geometry.coordinates[1] = event.latLng.lat();
                this.homepass = marker.data;
            }
            else
                marker.setOptions({ draggable: true });
        });
        //GMapsHelper.addListener(marker, 'dragend', (event) => {
        //});
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].addListener(marker, 'click', (event) => {
            this.homepass = marker.data;
        });
    }
    addHomepassPolygon(homepass) {
        var polygon = _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].createPolygon(homepass.area.coordinates, this.polyOptions);
        polygon.setMap(this.map);
        polygon.data = homepass;
        //polygon.setTitle(homepass.name);
        homepass.marker = polygon;
        this.addCentroidMarker(polygon.data);
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].addListener(polygon, "rightclick", (event) => {
            if (polygon.draggable == true) {
                polygon.setOptions({ draggable: false, editable: false });
                if (homepass["centroidMarker"])
                    homepass["centroidMarker"].setMap(null);
                var coords = polygon.getPath().getArray();
                let newCoords = new Array();
                coords.forEach(x => {
                    newCoords.push([x.lng(), x.lat()]);
                });
                newCoords.push(newCoords[0]);
                let centroid = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_8__["Point"](_common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].polygonCenter(new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_8__["Polygon"]([newCoords])));
                polygon.data.area.coordinates = [newCoords];
                polygon.data.geometry = centroid;
                this.addCentroidMarker(polygon.data);
                this.homepass = polygon.data;
            }
            else
                polygon.setOptions({ draggable: true, editable: true });
        });
        _common_geo_googleMapsHelper__WEBPACK_IMPORTED_MODULE_7__["GMapsHelper"].addListener(polygon, 'click', (event) => {
            this.homepass = polygon.data;
        });
    }
    addCentroidMarker(homepass) {
        var location = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].convertToPosition(homepass.geometry.coordinates);
        var icon = {
            url: "images/map-entities/homepass.png",
        };
        var marker = new google.maps.Marker({
            position: location,
            icon: icon,
            draggable: false,
            cursor: 'pointer',
            map: this.map
        });
        marker.setTitle(homepass.name);
        homepass["centroidMarker"] = marker;
    }
    fileChangeEvent(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        var fileExt = file.name.split('.').pop().toLowerCase();
        reader.onload = (e) => {
            try {
                if (fileExt == "kml") {
                    let kml = reader.result;
                    let geojson = toGeoJSON.kml((new DOMParser()).parseFromString(kml, 'text/xml'));
                    this.populateHomepasses(geojson.features);
                }
                else if (fileExt == "zip") {
                    shp(reader.result).then((geojson) => {
                        this.populateHomepasses(geojson.features);
                    });
                }
                else if (fileExt == "csv") {
                    let csv = reader.result;
                    this.populateHomepassesCsv(csv);
                }
            }
            catch (e) {
                this.helper.showAlertMessage("Could not parse the file.", "error");
            }
        };
        if (fileExt == "csv" || fileExt == "kml")
            reader.readAsText(file);
        else if (fileExt == "zip")
            reader.readAsArrayBuffer(file);
        else
            this.helper.showAlertMessage("Invalid file format", "error");
    }
    populateHomepasses(features) {
        this.homepasses.length = 0;
        let homepasses = new Array();
        for (var i = 0; i < features.length; i++) {
            let properties = features[i].properties;
            //let latLng = GeoHelper.convertToPosition([properties.Longitude, properties.Latitude]);
            //const isValid: Error = GeoHelper.validateCoordinates(latLng);
            //if ((isValid instanceof Error) == false) {
            let centroid = null;
            let polygon = null;
            if (features[i].geometry.type.toLowerCase() == 'polygon') {
                polygon = features[i].geometry;
                centroid = new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_8__["Point"](_common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].polygonCenter(features[i].geometry));
            }
            else {
                centroid = features[i].geometry;
            }
            let homepass = {
                name: properties.Building_T,
                code: properties.Id ? properties.Id : properties.Building_T,
                description: "",
                type: "",
                geometry: centroid,
                area: polygon,
                connections: 1,
            };
            homepasses.push(homepass);
            if (homepass.area)
                this.addHomepassPolygon(homepass);
            else
                this.addHomepassMarker(homepass);
            //}
        }
        this.homepasses = homepasses;
    }
    populateHomepassesCsv(csvData) {
        this.homepasses.length = 0;
        let homepasses = new Array();
        var allRows = csvData.split(/\r?\n|\r/);
        for (var i = 1; i < allRows.length; i++) {
            if (allRows[i].trim() == "")
                continue;
            let properties = allRows[i].split(',');
            let lat = parseFloat(properties[3]);
            let lng = parseFloat(properties[4]);
            let latLng = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].convertToPosition([lng, lat]);
            const isValid = _common_geo_geoHelper__WEBPACK_IMPORTED_MODULE_6__["GeoHelper"].validateCoordinates(latLng);
            if ((isValid instanceof Error) == false) {
                let homepass = {
                    name: properties[1],
                    code: properties[0],
                    description: "",
                    type: "",
                    geometry: new _common_geo_geometry__WEBPACK_IMPORTED_MODULE_8__["Point"]([lng, lat]),
                    area: null,
                    connections: properties[5],
                };
                homepasses.push(homepass);
                this.addHomepassMarker(homepass);
            }
        }
        this.homepasses = homepasses;
    }
    removeUploadedHomepass(index) {
        var homepass = this.homepasses[index];
        if (homepass.marker)
            homepass.marker.setMap(null);
        if (this.homepasses[index]["centroidMarker"])
            this.homepasses[index]["centroidMarker"].setMap(null);
        this.homepasses.splice(index, 1);
    }
    save() {
        var errorMessages = this.validateHomepass(this.homepasses);
        if (errorMessages.length == 0) {
            this.homepasses.forEach(x => x.marker = null);
            this.homepasses.forEach(x => {
                if (x["centroidMarker"])
                    x["centroidMarker"] = null;
            });
            this.homepassService.saveHomepasses(this.homepasses).subscribe(resp => {
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    this.helper.showAlertMessage("Homepass information saved", "success");
                    this.goBack();
                }
            }, (err) => {
                this.helper.showAlertMessage("Unable to save homepass information.", "error");
            });
        }
        else {
            var errorMessage = this.helper.getErrorMessagesText(errorMessages);
            this.helper.showAlertMessage(errorMessage, "error");
        }
    }
    validateHomepass(homepasses) {
        var errorMessages = [];
        this.homepasses.forEach(homepass => {
            if (homepass.name == null || homepass.name.trim() == '')
                errorMessages.push("Homepass Name cannot be empty");
            if (homepass.code == null || homepass.code.trim() == '')
                errorMessages.push("Homepass Code cannot be empty");
        });
        return errorMessages;
    }
    deleteHomepass() {
        var index = this.homepasses.findIndex(x => x.geometry.coordinates[0] == this.homepass.geometry.coordinates[0] && x.geometry.coordinates[1] == this.homepass.geometry.coordinates[1]);
        if (this.homepasses[index].marker)
            this.homepasses[index].marker.setMap(null);
        if (this.homepasses[index]["centroidMarker"])
            this.homepasses[index]["centroidMarker"].setMap(null);
        this.homepasses.splice(index, 1);
        if (this.isNew == false) {
            this.homepassService.deleteHomepass(this.homepass.id).subscribe(resp => {
                if (resp.status.toLowerCase() == "error") {
                    this.helper.showAlertMessage(resp.message, "error");
                }
                else {
                    this.helper.showAlertMessage("Homepass successfully deleted", "success");
                    this.goBack();
                }
            }, (err) => {
                this.helper.showAlertMessage("Unable to delete homepass information.", "error");
            });
        }
        else {
            this.homepass = null;
        }
    }
    stringify(obj) {
        return JSON.stringify(obj);
    }
    goBack() {
        this.location.back();
    }
};
HomepassDetails.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_config__WEBPACK_IMPORTED_MODULE_9__["AppConfig"] },
    { type: _services_homepass_service__WEBPACK_IMPORTED_MODULE_4__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"] }
];
HomepassDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepass-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepasses/views/homepass-details.html")).default,
        providers: [_services_homepass_service__WEBPACK_IMPORTED_MODULE_4__["HomepassService"]],
    })
], HomepassDetails);



/***/ }),

/***/ "./src/app/homepasses/views/homepass-list.ts":
/*!***************************************************!*\
  !*** ./src/app/homepasses/views/homepass-list.ts ***!
  \***************************************************/
/*! exports provided: HomepassList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepassList", function() { return HomepassList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_homepass_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/homepass.service */ "./src/app/homepasses/services/homepass.service.ts");
/* harmony import */ var _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/paginationRequest */ "./src/app/common/models/paginationRequest.ts");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helper */ "./src/app/common/helper.ts");
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");






let HomepassList = class HomepassList {
    constructor(homepassService, helper, authService) {
        this.homepassService = homepassService;
        this.helper = helper;
        this.authService = authService;
        this.homepasses = new Array();
        this.statusMessage = "";
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].descending;
        this.permissions = { edit: false, delete: false, add: false };
        this.searchFields = new Array();
        this.searchFields.push({ field: 'Name', label: 'Name', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Description', label: 'Description', dataType: "text", value: "" });
        this.searchFields.push({ field: 'Type', label: 'Type', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedBy', label: 'Updated By', dataType: "text", value: "" });
        this.searchFields.push({ field: 'UpdatedDate', label: 'Updated On', dataType: "date", value: "" });
    }
    ngOnInit() {
        this.statusMessage = "Loading Homepasses...";
        this.pageSize = 10;
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortOrder = _common_models_paginationRequest__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].noSort;
        this.permissions.add = this.authService.getFunctionalityAccess("RND_ADD_HOMEPASS");
        this.permissions.edit = this.authService.getFunctionalityAccess("RND_EDIT_HOMEPASS");
        this.permissions.delete = this.authService.getFunctionalityAccess("RND_DELETE_HOMEPASS");
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
        this.homepassService.getHomepasses(paginationRequest).subscribe(resp => {
            this.homepasses = null;
            if (resp.status.toLowerCase() == "error") {
                this.statusMessage = resp.message;
                this.helper.showAlertMessage(this.statusMessage, "error");
            }
            else {
                if (resp.data != null && resp.data.length > 0) {
                    this.homepasses = resp.data;
                    this.totalPages = Math.ceil(resp.recordCount / this.pageSize);
                }
                else {
                    this.statusMessage = "There are no registered homepasses.";
                }
            }
            $("#ajax-loading").hide();
        }, (err) => {
            $("#ajax-loading").hide();
            this.homepasses = null;
            let msg = `Unable to fetch homepasses : ${err.message}`;
            this.helper.showAlertMessage(msg, "error");
            this.statusMessage = "Error fetching homepasses.";
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
    delete(homepass) {
        new jBox("Confirm", {
            minWidth: 500,
            minHeight: 70,
            title: "<b>Delete Homepass</b>",
            overlay: false,
            content: "Do you want to delete homepass - " + homepass.name,
            draggable: "title",
            confirmButton: "Yes",
            cancelButton: "No",
            confirm: () => {
                this.homepassService.deleteHomepass(homepass.id).subscribe(resp => {
                    if (resp.status.toLowerCase() == "error") {
                        this.helper.showAlertMessage(resp.message, "error");
                    }
                    else {
                        if (resp.data != null) {
                            this.helper.showAlertMessage("Homepass deleted.", "success");
                            this.getFormData();
                        }
                        else {
                            this.helper.showAlertMessage("Error deleting homepass", "error");
                        }
                    }
                }, (err) => {
                    this.helper.showAlertMessage("Error deleting homepass", "error");
                });
            }
        }).open();
    }
};
HomepassList.ctorParameters = () => [
    { type: _services_homepass_service__WEBPACK_IMPORTED_MODULE_2__["HomepassService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"] },
    { type: _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
HomepassList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepass-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepasses/views/homepass-list.html")).default,
        providers: [_services_homepass_service__WEBPACK_IMPORTED_MODULE_2__["HomepassService"]]
    })
], HomepassList);



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
/* harmony import */ var _components_cf_group_cf_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cf-group/cf-group */ "./src/app/components/cf-group/cf-group.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        declarations: [
            _components_data_table_dt_search__WEBPACK_IMPORTED_MODULE_6__["DTSearch"],
            _components_data_table_dt_pagination__WEBPACK_IMPORTED_MODULE_5__["DTPagination"],
            _components_cf_group_cf_group__WEBPACK_IMPORTED_MODULE_7__["CustomFieldsGroup"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _components_data_table_dt_search__WEBPACK_IMPORTED_MODULE_6__["DTSearch"],
            _components_data_table_dt_pagination__WEBPACK_IMPORTED_MODULE_5__["DTPagination"],
            _components_cf_group_cf_group__WEBPACK_IMPORTED_MODULE_7__["CustomFieldsGroup"]
        ]
    })
], SharedModule);



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

module.exports = __webpack_require__(/*! F:\RND\RNDApp\Solution2\NERP.RND.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map