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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\" [ngClass]=\"(extract==true)?'activate':'board'\">\n  <!--<button class=\"plus\" *ngIf=\"state\" >M</button>-->\n  <!--<i class=\"fas fa-plus-circle\"></i>-->\n  <div class=\"desk\">\n    <router-outlet></router-outlet>\n\n    <app-locality *ngIf=\"app=='locality'\"></app-locality>\n    <app-lander *ngIf=\"app=='lander'\"></app-lander>\n    <app-shift *ngIf=\"app=='shift'\"></app-shift>\n    <app-unshift *ngIf=\"app=='unshift'\"></app-unshift>\n    <app-rental *ngIf=\"app=='rental'\"></app-rental>\n    <app-profile *ngIf=\"app=='profile'\"></app-profile>\n    <app-property *ngIf=\"app=='property'\"></app-property>\n    <app-profile-info *ngIf=\"app=='profile-info'\"></app-profile-info>\n    <app-property-info *ngIf=\"app=='property-info'\"></app-property-info>\n  </div>\n</div>\n<div class=\"online as-mob\">\n  <div class=\"sidebar\" [ngClass]=\"(extract==true)?'activatesidebar':'sidebar'\">\n    <br>\n    <!--{{extract}}-->\n    <i class='fas fa-expand extract' *ngIf=\"extract\" (click)=\"extract = false\"></i>\n    <i class='fas fa-expand-arrows-alt extract' *ngIf=\"!extract\" (click)=\"extract = true\"></i> <br>\n    <a uk-tooltip=\"title:Dashboard;pos:right;\" (click)=\"app='lander'\"><i class='fas fa-braille'></i><span>\n        Dashboard</span></a>\n    <a uk-tooltip=\"title:Locality;pos:right;\" (click)=\"app='locality'\"><i class='fas fa-bullseye'></i><span>\n        Locality</span></a>\n    <a uk-tooltip=\"title:Profile;pos:right;\" (click)=\"app='profile'\"><i class='fas fa-clipboard'></i><span>\n        Profile</span></a>\n    <a uk-tooltip=\"title:Property;pos:right;\" (click)=\"app='property'\"><i class='fas fa-cogs'></i><span>\n        Property</span></a>\n    <a uk-tooltip=\"title:Property board;pos:right;\" (click)=\"app='property-info'\"><i class='fas fa-home'></i><span>\n        Property Board</span></a>\n    <!-- <a uk-tooltip=\"title:Profile;pos:right;\"  (click)=\"app='profile'\"  ><i class='fas fa-clipboard'></i><span> Profile</span></a> -->\n    <a uk-tooltip=\"title:Login / Register;pos:right;\" (click)=\"app='shift'\"><i class='fas fa-users'></i><span> Login /\n        Register</span></a>\n    <a uk-tooltip=\"title: Change password;pos:right;\" (click)=\"app='unshift'\"><i class='fas fa-chart-line'></i><span>\n        Change password</span></a>\n    <a uk-tooltip=\"title:Logout;pos:right;\" (click)=\"logout()\"><i class='fas fa-user'></i><span> Logout</span></a>\n  </div>\n</div>\n<!--[routerLink]=\"['/lander']\"-->\n\n<!--7=77777777777777777777777777777777777777777777-->\n<div id=\"mySidebar\" class=\"sidebars\" style=\"font-size: 16px;\">\n  <a href=\"javascript:void(0)\" *ngIf=\"open\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <br>\n  <!--{{extract}}-->\n  <a uk-tooltip=\"title:Dashboard;pos:right;\" (click)=\"closeNav()\" (click)=\"app='lander'\"><i class='fas fa-braille'></i><span>\n      Dashboard</span></a>\n  <a uk-tooltip=\"title:Locality;pos:right;\" (click)=\"closeNav()\" (click)=\"app='locality'\"><i class='fas fa-bullseye'></i><span>\n      Locality</span></a>\n  <a uk-tooltip=\"title:Profile;pos:right;\" (click)=\"closeNav()\" (click)=\"app='profile'\"><i class='fas fa-clipboard'></i><span>\n      Profile</span></a>\n  <a uk-tooltip=\"title:Property;pos:right;\" (click)=\"closeNav()\" (click)=\"app='property'\"><i class='fas fa-cogs'></i><span>\n      Property</span></a>\n  <a uk-tooltip=\"title:Property board;pos:right;\" (click)=\"closeNav()\" (click)=\"app='property-info'\"><i class='fas fa-home'></i><span>\n      Property Board</span></a>\n  <!-- <a uk-tooltip=\"title:Profile;pos:right;\"  (click)=\"app='profile'\"  ><i class='fas fa-clipboard'></i><span> Profile</span></a> -->\n  <a uk-tooltip=\"title:Login / Register;pos:right;\" (click)=\"closeNav()\" (click)=\"app='shift'\"><i class='fas fa-users'></i><span> Login /\n      Register</span></a>\n  <a uk-tooltip=\"title: Change password;pos:right;\" (click)=\"closeNav()\" (click)=\"app='unshift'\"><i class='fas fa-chart-line'></i><span>\n      Change password</span></a>\n  <a uk-tooltip=\"title:Logout;pos:right;\" (click)=\"logout()\"><i class='fas fa-user'></i><span> Logout</span></a>\n\n<button class=\"btnclose as-non-mob\" *ngIf=\"!open\" (click)=\"open = true\" (click)=\"openNav()\">&#9776;</button>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/locality/locality.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/locality/locality.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div *ngIf=\"!loader\">\n  {{location|json}}\n</div>-->\n<div class=\"\" *ngIf=\"!set\">\n  <br> <br>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-8\">\n      <button class=\"uk-button   uk-button-primary btn-block\" (click)=\"getGeo()\" href=\"#modal-map\" uk-toggle>Get Location&nbsp;&nbsp;<i class=\"fas fa-location-arrow\"></i> </button>\n      <hr>\n      <legend class=\"uk-legend\">Location &nbsp;<i href=\"#modal-edit\" uk-toggle class=\"fas edit fa-edit\"></i> <br> <small>If you dont want to give access for location please enter / choose manually.</small>\n      </legend>\n      <form>\n        <fieldset class=\"uk-fieldset\">\n          <div class=\"uk-margin\">\n            <label for=\"\">State <i class=\"fas fa-map-marker\"></i></label>\n            <select uk-tooltip=\"title:Select state you belongs to;pos:bottom\" class=\"uk-select\" [(ngModel)]=\"loc.state\" (click)=\"stateset(loc.state)\"\n              name=\"asdsdc\">\n                <option *ngFor=\"let item of location_keys; let i=index\"   >{{item}}</option>\n            </select>\n          </div>\n          <div class=\"uk-margin\" *ngIf=\"loc?.state?.length>0\">\n            <label for=\"\">City <i class=\"fas fa-compass\"></i></label>\n            <select uk-tooltip=\"title:Select city you belongs to;pos:bottom\" class=\"uk-select\" [(ngModel)]=\"loc.city\" (click)=\"cityset(loc.city)\"\n              name=\"sdcscf\">\n            <option *ngFor=\"let item of cities; let i=index\" >{{item}} </option>\n          </select>\n          </div>\n          <div class=\"uk-margin\" *ngIf=\"loc?.city?.length>0\">\n            <label for=\"\">locality <i class=\"fas fa-map\"></i></label>\n            <select uk-tooltip=\"title:Select locality area you belongs to;pos:bottom\" class=\"uk-select\" [(ngModel)]=\"loc.area\" name=\"a sascas f\">\n          <option *ngFor=\"let item of areas; let i=index\" >{{item}} </option>\n         </select>\n          </div>\n        </fieldset>\n      </form>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <div class=\"uk-margin\" *ngIf=\"loc?.area?.length>0\">\n        <label for=\"\">Pincode <i class=\"fas fa-map-pin\"></i></label>\n        <input type=\"number\" placeholder=\"Enter your pincode\" uk-tooltip=\"title:Type pincode you belongs to;pos:bottom\" class=\"uk-input\"\n          [(ngModel)]=\"loc.pin\" name=\"a sascas f\">\n      </div>\n      <div class=\"uk-margin\" *ngIf=\"loc?.area?.length>0\">\n        <button uk-tooltip=\"title:All set to go....!;pos:bottom\" (click)=\"setLoc()\" class=\"btn-block uk-button uk-button-primary\">Set location </button>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <i *ngIf=\"loader\" class='fab loader fa-digital-ocean'></i>\n  <img src=\"./assets/Windmill_moving_fast.gif\" class=\"mill as-mob\" alt=\"\">\n  <img src=\"http://www.powerelectricsolution.com/wp-content/uploads/2017/08/wind.gif\" class=\"mill2 as-mob\" alt=\"\">\n  <!--<img src=\"./assets/Windmill_moving_fast.gif\" class=\"as-non-mob mill3\" alt=\"\">-->\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<img src=\"./assets/2a6b651433f3c6ece42ba25439f76c0d.gif\" class=\"aset\" *ngIf=\"set\" alt=\"\">\n\n<div id=\"modal-edit\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <form>\n      <fieldset class=\"uk-fieldset\">\n        <small>Enter manually</small>\n        <div class=\"uk-margin\">\n          <label for=\"\">State <i class=\"fas fa-map-marker\"></i></label>\n          <input type=\"text\" uk-tooltip=\"title:Type state you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.state\" name=\"asdsdc\"\n          />\n        </div>\n        <div class=\"uk-margin\" *ngIf=\"loc?.state?.length>0\">\n          <label for=\"\">City <i class=\"fas fa-compass\"></i></label>\n          <input type=\"text\" uk-tooltip=\"title:Type city you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.city\" name=\"sdcscf\">\n        </div>\n        <div class=\"uk-margin\" *ngIf=\"loc?.city?.length>0\">\n          <label for=\"\">locality <i class=\"fas fa-map\"></i></label>\n          <input type=\"text\" uk-tooltip=\"title:Type locality area you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.area\"\n            name=\"a sascas f\">\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n<div id=\"modal-map\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <img src=\"./assets/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif\" alt=\"\" *ngIf=\"map\">\n    <div class=\"\" *ngIf=\"!map\">\n      <legend>Location data</legend>\n      <table>\n        <tbody>\n          <tr>\n            <td>\n              Longitude\n            </td>\n            <td>\n              {{positions?.lng}}\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Latitude\n            </td>\n            <td>\n              {{positions?.lat}}\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Timestamp\n            </td>\n            <td>\n              {{positions?.timestamp|date:'full'}}\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Accuracy\n            </td>\n            <td>\n              {{positions?.accuracy}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <br>\n      <button class=\"uk-button  uk-button-primary btn-block uk-modal-close\" (click)=\"setGeo()\">Set Geo Location&nbsp;&nbsp;<i class=\"fas fa-location-arrow\"></i> </button>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile-info/profile-info.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile-info/profile-info.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile-info works!</p>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/profile.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-12 card-left\">\n        <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n            <div class=\"card-body\">\n                <h4>Your information</h4>\n                <i class=\"fas fa-chevron-down expand\" (mouseover)=\"sidemenu = !sidemenu\"\n                    (click)=\"sidemenu = !sidemenu\"></i>\n                <form class=\"uk-grid-small\" uk-grid>\n                    <div class=\"uk-width-1-2@s\">\n                        <label for=\"\">Profile firstname</label>&nbsp;<i class=\"fas fa-signature\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.fname\" name=\"fname\" type=\"text\"\n                            uk-tooltip=\"title:First name;pos:top;\" placeholder=\"First name\">\n                    </div>\n                    <div class=\"uk-width-1-2@s\">\n                        <label for=\"\">Profile lastname</label>&nbsp;<i class=\"fas fa-signature\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.lname\" name=\"lname\" type=\"text\"\n                            uk-tooltip=\"title:Last name;pos:top;\" placeholder=\"Last name\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Permenant location Landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.landmark\" name=\"land\" type=\"text\"\n                            uk-tooltip=\"title:Permenant location Landmark;pos:top;\" placeholder=\"Landmark\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.door\" name=\"door\" type=\"text\"\n                            uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.loc\" name=\"loc\" type=\"text\"\n                            uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\n                            placeholder=\"Locality / Apartment / Soceity\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.state\" name=\"state\" type=\"text\"\n                            uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.cty\" name=\"cty\" type=\"text\"\n                            uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prof.pin\" name=\"pin\" type=\"number\"\n                            uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\n                    </div>\n                    <button (click)=\"profile()\" class=\"uk-button uk-button-primary btn-block\">Set profile</button>\n                    <!-- {{prof|json}} -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/property-info/property-info.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/property-info/property-info.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<h5>Property dashboard <i class=\"fas fa-home\"></i> </h5>\n\n<!-- {{props|json}} - -->\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let item of props; let i=index\">\n        <div class=\"card\" style=\"margin: 10px 0px;\">\n            <div class=\"cardbody\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" *ngIf=\"item?.htype=='House'\" alt=\"\" class=\"home\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" *ngIf=\"item?.htype=='Apartment'\"  class=\"home\" alt=\"\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" *ngIf=\"item?.htype=='PG-Paying Guest'\"  class=\"home\" alt=\"\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" *ngIf=\"item?.htype=='Hostel'\"  class=\"home\" alt=\"\">\n\n                <table class=\"uk-table\">\n                    <tr>\n                        <td>\n                            Accomadation\n                        </td>\n                        <td>\n                            <b>{{item?.mates}}  </b> out of     <b>\n                                {{item?.acc}} </b> managed by  <b>\n                                     {{item?.type}} </b> owner.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Landmark\n                        </td>\n                        <td>\n                            <b>{{item?.landmark}} </b>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Rent\n                        </td>\n                        <td>\n                            <b>\n                                <i class=\"fas fa-rupee-sign\"></i>&nbsp;{{item?.starts}} - <i\n                                    class=\"fas fa-rupee-sign\"></i>&nbsp;{{item?.ends}} </b>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Address\n                        </td>\n                        <td>\n                            <i class=\"fas fa-map-signs\"></i>&nbsp;&nbsp;{{item?.add}} <br>\n                            <i class=\"fas fa-map-pin\"></i>&nbsp;&nbsp;&nbsp;{{item?.state}} <br>\n                            <i class=\"fas fa-map-marked-alt\"></i>&nbsp;&nbsp;{{item?.country}} <br>\n                            <b> <i class=\"fas fa-location-arrow\"></i>&nbsp;&nbsp;{{item?.pin}} <br>\n                            </b>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/property/property.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/property/property.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-12 card-left\">\n        <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n            <div class=\"card-body\">\n                <legend>Property information</legend>\n                <form class=\"uk-grid-small\" uk-grid>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Number of house mates</label>&nbsp;\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.mates\" name=\"mates\" type=\"number\"\n                            uk-tooltip=\"title:Number of house mates;pos:top;\" placeholder=\"Number of house mates\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Accomadation available</label>&nbsp;\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.acc\" name=\"acc\" type=\"number\"\n                            uk-tooltip=\"title:Accomadation available;pos:top;\" placeholder=\"Accomadation available\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Property landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.landmark\" name=\"landmark\" type=\"text\"\n                            uk-tooltip=\"title:Property landmark;pos:top;\" placeholder=\"Property landmark\">\n                    </div>\n                    <div class=\"uk-width-1-1@s\">\n                        <label for=\"\">Property type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                        <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.htype\" name=\"type\" id=\"\"\n                            uk-tooltip=\"title:Property type;pos:top;\" placeholder=\"Property type\">\n                            <option>\n                                <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" alt=\"\" class=\"home\">\n                                House\n                            </option>\n                            <option>\n                                <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" class=\"home\"\n                                    alt=\"\">Apartment\n                            </option>\n                            <option>\n                                <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" class=\"home\"\n                                    alt=\"\">PG-Paying Guest\n                            </option>\n                            <option>\n                                <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" class=\"home\"\n                                    alt=\"\">Hostel\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"uk-width-1-2@s\">\n                        <!-- <label for=\"\">Rent starts from</label>&nbsp;<i -->\n                        <!-- class=\"fas fa-step-backward\"></i>&nbsp;{{prop.starts}} -->\n                        <i class=\"fas rup fa-rupee-sign\"></i>\n                        <input type=\"text\" class=\"uk-input\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                            uk-tooltip=\"title:Rent starts from;pos:top;\">\n                    </div>\n                    <div class=\"uk-width-1-2@s\">\n                        <i class=\"fas rup fa-rupee-sign\"></i>\n                        <!-- <span class=\"\">{{prop.starts - props.ends}}</span> -->\n                        <!-- <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;{{prop.ends}} -->\n                        <input type=\"text\" class=\"uk-input\" id=\"ssd\" [(ngModel)]=\"prop.ends\" name=\"ends\"\n                            uk-tooltip=\"title:Rent ends with;pos:top;\">\n                    </div>\n                    <div class=\"uk-width-1-2@s\">\n                        <label for=\"\">Rent starts from</label>&nbsp;<i class=\"fas fa-step-backward\"></i>&nbsp;\n                        <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                            step=\"1000\" min=\"0\" max=\"10000\">\n                    </div>\n                    <div class=\"uk-width-1-2@s\">\n                        <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;\n                        <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"ssd\" [(ngModel)]=\"prop.ends\" step=\"1000\"\n                            min=\"0\" max=\"10000\" name=\"ends\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.add\" name=\"add\" type=\"text\"\n                            uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.loc\" name=\"loc\" type=\"text\"\n                            uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\n                            placeholder=\"Locality / Apartment / Soceity\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.state\" name=\"state\" type=\"text\"\n                            uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\n                        <input class=\"uk-input\" [(ngModel)]=\"prop.country\" name=\"country\" type=\"text\"\n                            uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\n                        <input class=\"uk-input\" type=\"number\" [(ngModel)]=\"prop.pin\" name=\"pin\"\n                            uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Owner type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                        <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.type\" name=\"type\" id=\"\"\n                            uk-tooltip=\"title:Owner type;pos:top;\" placeholder=\"Owner type\">\n                            <option>First</option>\n                            <option>Second</option>\n                            <option>Broker</option>\n                            <option>NRI</option>\n                        </select>\n                    </div>\n                    <button (click)=\"props()\" class=\"uk-button uk-button-primary btn-block\">Set Property</button>\n                    <!-- {{prop|json}} -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  error works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lander/lander.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lander/lander.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"desk\">\n  <!-- <br> <br> -->\n  <!--<h2>Upcoming Trips</h2>-->\n  <!--<hr class=\"title\">-->\n  <!--<div class=\"navrow\">\n    <span class=\"navitem\">Two wheeler</span>&nbsp;/&nbsp;\n    <span class=\"navitem\">Four wheeler</span>&nbsp;/&nbsp;\n    <span class=\"navitem\">By cycle</span>\n  </div>-->\n  <!---------------->\n<br>\n  <div class=\"alert alert-primary text-cener\" *ngIf=\"!state\">\n    Please login to view / set location information\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 card-left\" *ngIf=\"state\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"usericon\">\n                <img class=\"uk-preserve-width uk-border-circle\"\n                  src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"70\" alt=\"\" />\n                <br>\n                <div class=\"col-md-12\" style=\"text-align: center\">\n                  <b uk-tooltip=\"Username\"> {{username|uppercase}} </b>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\" *ngIf=\"state\">\n      <div class=\"card card-right \">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <legend>Location</legend>\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      Area\n                    </td>\n                    <td>\n                      {{location?.area}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      City\n                    </td>\n                    <td>\n                      {{location?.city}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      State\n                    </td>\n                    <td>\n                      {{location?.state}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Pincode\n                    </td>\n                    <td>\n                      {{location?.pin}}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-6\">\n              <legend>GeoLocation</legend>\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      Longitude\n                    </td>\n                    <td>\n                      {{geolocation?.lng}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Latitude\n                    </td>\n                    <td>\n                      {{geolocation?.lat}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Timestamp\n                    </td>\n                    <td>\n                      {{geolocation?.timestamp|date:'medium'}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Accuracy\n                    </td>\n                    <td>\n                      {{geolocation?.accuracy}}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!--<button class=\"posbtn\">Add&nbsp;<i class=\"far fa-grin-stars\"></i></button> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<!-------------------------------->\n\n<button class=\"plus\" *ngIf=\"state\"><b>{{username|uppercase|slice:0:1}}</b></button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rental/rental.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rental/rental.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  rental works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shift/shift.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shift/shift.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n  <div class=\"road\">\n    <div class=\"viewboard as-mob\">\n      <h1>Login/Register&nbsp;<i class=\"fas fa-users\"></i> </h1>\n      <small class=\"small\">Please login with your crediantials</small>\n      <br class=\"as-mob\"> <br class=\"as-mob\">\n      <!--<small class=\"subsmall\">For new user please register here</small>-->\n      <img src=\"./assets/50ee4ac981890b346eac69c0cf6f45ef.gif\" *ngIf=\"enter\" class=\"imgc\" alt=\"\">\n      <img src=\"./assets/revizo-5.gif\" *ngIf=\"logdata\" alt=\"\" class=\"imgc\">\n      <img src=\"https://gatesbbq.com/wp-content/uploads/2017/04/checkmarksuccess.gif\" *ngIf=\"!logdata && !enter\" class=\"imgc\" alt=\"\">\n      <i href=\"#modal-center\" uk-toggle class=\"fas query fa-question-circle\"></i>\n    </div>\n    <div class=\"formboard\">\n      <br class=\"as-mob\">\n      <form>\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">User Board&nbsp;<i class=\"far fa-user\"></i></legend>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-user\"></i> Username</label> <i uk-tooltip=\"title:Username;pos:left\" class=\"fas bgg fa-user\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"login.username\" name=\"username\" type=\"text\" placeholder=\"Username\">\n            <small class=\"look\" style=\"float:right\">*Required for Login/Register</small>\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas  fa-key\"></i> Password</label> <i uk-tooltip=\"title:Password;pos:left\" class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" placeholder=\"Password\">\n            <small class=\"look\" style=\"float:right\">*Required for Login/Register</small>\n          </div>\n          <!-- <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-font\"></i> Phrase</label> <i uk-tooltip=\"title:Custom phrase;pos:left\" class=\"fas bgg fa-font\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"login.phrase\" name=\"phrase\" type=\"text\" placeholder=\"Custom Phrase\">\n            <small class=\"look\" style=\"float:right\">Optional for login</small>\n          </div> -->\n          <!-- <div class=\"uk-margin\">\n            <label for=\"\"><i class=\"fas fa-sort-numeric-down\"></i> Lucky number&nbsp; {{login?.lucky}} </label>\n            <input class=\"uk-range\" [title]=\"login.lucky\" [(ngModel)]=\"login.lucky\" min=\"0\" max=\"100\" step=\"1\" name=\"lucky\" type=\"range\">\n            <small class=\"look\" style=\"float:right\">Optional for login</small>\n          </div> -->\n          <button (click)=\"logins()\"  class=\"btn-block uk-button uk-button-primary\">Login</button>\n          <br>\n          <button href=\"#modal-reg\" uk-toggle class=\"btn-block uk-button uk-button-primary\">Register</button>\n          <br>\n          <!-- <div class=\"alert alert-warning\" *ngIf=\"reg\">\n            {{regData|slice:0:9}} <i ngxClipboard [cbContent]=\"regData\" class=\"far fa-copy\" (click)=\"eat('Copied',2)\" style=\"float: right\"></i>\n          </div> -->\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n    <button style=\"background-color: white\" class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <img src=\"https://miro.medium.com/max/1400/1*Xs2WKJ2jHKHhJEL29c4AyQ.gif\" style=\"width: 100%;\" alt=\"\">\n  </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<div class=\"loader\">\n  <i class=\"fas fa-spinner as-non-mob\" *ngIf=\"logdata\"></i>\n</div>\n\n\n\n<div id=\"modal-reg\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <form action=\"\">\n      <div class=\"uk-margin\">\n        <label for=\"\"> <i class=\"fas  fa-key\"></i>&nbsp;Confirm Password</label> <i uk-tooltip=\"title:ConfirmPassword;pos:left\"\n          class=\"fas bgg fa-key\"></i>\n        <input class=\"uk-input\" [(ngModel)]=\"login.cpassword\" name=\"login.cpassword\" type=\"password\" placeholder=\"Confirm Password\">\n        <small class=\"look\" style=\"float:right\">Please Confirm Your Password</small>\n      </div>\n      <button class=\"uk-button uk-button-primary uk-modal-close btn-block\" (click)=\"register()\">Register</button></form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unshift/unshift.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unshift/unshift.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n  <div class=\"road\">\n    <div class=\"viewboard as-mob\">\n      <h1>Change password&nbsp;<i class=\"fas fa-key\"></i> </h1>\n      <small class=\"small\">Please reset with your old crediantials</small>\n      <br> <br>\n      <!--<small class=\"subsmall\">For new user please register here</small>-->\n      <!--<img src=\"./assets/forget.gif\" class=\"imgc\" alt=\"\" width=\"20%;\" *ngIf=\"load\">-->\n      <img src=\"./assets/developer-dribbble.gif\" alt=\"\" class=\"imgc\">\n      <i href=\"#modal-center\" uk-toggle class=\"fas query fa-question-circle\"></i>\n    </div>\n    <div class=\"formboard\">\n      <br> \n      <form>\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">Change Password&nbsp;<i class=\"fas fa-key\"></i></legend>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-user\"></i> Username</label> <i uk-tooltip=\"title:Username;pos:left\" class=\"fas bgg fa-user\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.username\" name=\"username\" type=\"text\" placeholder=\"Username\">\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas  fa-key\"></i> Current Password</label> <i uk-tooltip=\"title:Current Password;pos:left\" class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.old\" name=\"password\" type=\"password\" placeholder=\"Current Password\">\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-key\"></i> New password</label> <i uk-tooltip=\"title:New password;pos:left\" class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.new\" name=\"new\" type=\"password\" placeholder=\"New password\">\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-key\"></i> Repeat password</label> <i uk-tooltip=\"title:Repeat password;pos:left\"\n              class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.re\" name=\"re\" type=\"password\" placeholder=\"Repeat password\">\n          </div>\n          <button class=\"btn-block uk-button uk-button-primary\" uk-tooltip=\"title:Change passwor;pos:bottom\">Change password</button>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n    <button style=\"background-color: white\" class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <legend>Change password</legend>\n    <small class=\"small\">Use atleast one Uppercase letter-   <b class=\"right\">  A-Z </b></small>\n    <br>\n    <small class=\"small\">Use atleast one Lowercase letter-    <b class=\"right\"> a-z</b> </small>\n    <br>\n    <small class=\"small\">Use atleast one number/digit character-  <b class=\"right\">  0-9</b> </small>\n    <br>\n    <small class=\"small\">Keep minimum of 8 charater combination length <b class=\"right\"> 8</b> </small>\n    <br>\n    <small class=\"small\">Use atleast one special character-  <b class=\"right\">  */&amp;-+=</b> </small> <br>\n    <img src=\"./assets/forget.gif\" style=\"width: 75%;margin: auto;display: block\" alt=\"\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/water/water.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/water/water.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  water works!\n</p>\n");

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
// {
//   path: "lander",
//   component: LanderComponent
// },
// {
//   path: "",
//   redirectTo: "/lander",
//   pathMatch: "full"
// },
// {
//   path: "water",
//   component: WaterComponent
// },
// {
//   path: "locality",
//   component: LocalityComponent
// },
// {
//   path: "shift",
//   component: ShiftComponent
// },
// {
//   path: "unshift",
//   component: UnshiftComponent
// },
// {
//   path: "rental",
//   component: RentalComponent
// },
// {
//   path: "**",
//   component: ErrorComponent
// }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto;\n}\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1;\n}\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px;\n}\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.desk {\n  padding: 20px 5px;\n}\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite;\n}\n\n.navrow span {\n  color: #0d47a1;\n  transition: font-weight 1s ease-in-out;\n}\n\n.navrow span:hover {\n  font-weight: bold;\n  cursor: pointer;\n  transition: font-weight 1s ease-in;\n}\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite;\n}\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd;\n}\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1;\n}\n\n.title {\n  background-color: #0d47a1;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px;\n}\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in;\n}\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px;\n  }\n  to {\n    width: 225px;\n  }\n}\n\n@keyframes widthextract {\n  from {\n    width: 0px;\n  }\n  to {\n    width: 225px;\n  }\n}\n\n.usericon {\n  text-align: center;\n  font-size: 40px;\n}\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none;\n}\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer;\n}\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  transition: display 1s ease-in;\n}\n\n.inactive_screen {\n  transition: height 1s ease-in;\n}\n\n.inactive_screen .cardboard {\n  display: none;\n  transition: display 1s ease-in;\n}\n\nth {\n  color: #0d47a1;\n  font-weight: bold;\n}\n\ntr:hover {\n  background-color: #e3f2fd;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px;\n  }\n}\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%;\n}\n\n.sidebar a {\n  padding: 10px;\n  width: 95%;\n  display: block;\n  margin: 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #e3f2fd;\n  border: 1px solid #0d47a1;\n  transition: box-shadow 1s ease-in-out;\n}\n\n.sidebar a i {\n  margin: 5px;\n  float: right;\n}\n\n.sidebar a:hover {\n  font-weight: bold;\n}\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n}\n\ni {\n  cursor: pointer;\n}\n\n.activatesidebar {\n  width: 5%;\n}\n\n.activatesidebar a {\n  padding: 30px;\n  float: inherit;\n}\n\n.activatesidebar a span {\n  display: none;\n}\n\n.activatesidebar a i {\n  text-align: center;\n}\n\n.activatesidebar a:hover {\n  box-shadow: none;\n  border: 0px;\n}\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%;\n}\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n/* The sidebar menu */\n\n.sidebars {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: #0d47a1;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  transition: 0.5s;\n  /* 0.5 second transition effect to slide in the sidebar */\n}\n\n/* The sidebar links */\n\n.sidebars a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #e3f2fd;\n  display: block;\n  transition: 0.3s;\n}\n\n/* When you mouse over the navigation links, change their color */\n\n.sidebars a:hover {\n  color: #f1f1f1;\n}\n\n/* Position and style the close button (top right corner) */\n\n.sidebars .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n/* The button used to open the sidebar */\n\n.openbtn {\n  font-size: 20px;\n  cursor: pointer;\n  background-color: #111;\n  color: white;\n  padding: 10px 15px;\n  border: none;\n}\n\n.openbtn:hover {\n  background-color: #444;\n}\n\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n\n#main {\n  transition: margin-left 0.5s;\n  /* If you want a transition effect */\n  padding: 20px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n  .sidebars {\n    padding-top: 15px;\n  }\n\n  .sidebars a {\n    font-size: 18px;\n  }\n}\n\n.btnclose {\n  position: fixed;\n  top: 0;\n  margin: 5px;\n  z-index: 1002;\n  background-color: #e3f2fd;\n  border-radius: 5px;\n  box-shadow: none;\n  border: 0;\n  color: #0d47a1;\n  left: 4px;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFUSztFQVVMLGdDQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFqQks7QUNnQlA7O0FER0E7RUFDRSx5QkFwQks7RUFxQkwsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQXpCSztFQTBCTCxZQUFBO0FDQUY7O0FERUE7RUFDRSx5QkE3Qks7RUE4QkwsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFHQSxjQXBDSztFQXFDTCxZQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLHVCQUFBO0VDREY7RURHQTtJQUNFLHlCQUFBO0VDREY7QUFDRjs7QURMQTtFQUNFO0lBQ0UsdUJBQUE7RUNERjtFREdBO0lBQ0UseUJBQUE7RUNERjtBQUNGOztBREdBO0VBQ0UsaUJBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0FGOztBRENFO0VBQ0UsY0ExREc7RUEyREgsc0NBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUNDRjs7QURDQTtFQUNFLHlCQTVFSztFQTZFTCxjQTVFSztBQzhFUDs7QURBQTtFQUNFLHlCQS9FSztFQWdGTCxjQWpGSztBQ29GUDs7QUREQTtFQUNFLHlCQXBGSztFQXFGTCw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREU7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLDhEQUFBO0FDSUo7O0FEREE7RUFDRTtJQUNFLFVBQUE7RUNJRjtFREZBO0lBQ0UsWUFBQTtFQ0lGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLFVBQUE7RUNJRjtFREZBO0lBQ0UsWUFBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01GOztBREhBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ09KOztBREpBO0VBQ0UsNkJBQUE7QUNPRjs7QURORTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1FKOztBRExBO0VBQ0UsY0EvSUs7RUFnSkwsaUJBQUE7QUNRRjs7QUROQTtFQUNFLHlCQWxKSztBQzJKUDs7QUROQTtFQUNFO0lBQ0UsYUFBQTtFQ1NGOztFRFBBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUNVRjtBQUNGOztBRFBBO0VBQ0UsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDU0Y7O0FEUkU7RUFDRSxhQUFBO0VBRUEsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBL0tHO0VBZ0xILHlCQUFBO0VBRUEscUNBQUE7QUNRSjs7QURQSTtFQUVFLFdBQUE7RUFDQSxZQUFBO0FDUU47O0FETEU7RUFFRSxpQkFBQTtBQ01KOztBREFBO0VBR0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0F0TUs7RUF1TUwscUJBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0VBRUEsY0FBQTtBQ0FKOztBRENJO0VBQ0UsYUFBQTtBQ0NOOztBRENJO0VBQ0Usa0JBQUE7QUNDTjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0FGOztBREdFO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0FKOztBREdBLHFCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUFjLHFCQUFBO0VBQ2QsUUFBQTtFQUFVLDBDQUFBO0VBQ1YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZ0JBQUE7RUFDWixNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQXJQSztFQXFQb0IsU0FBQTtFQUN6QixrQkFBQTtFQUFvQiw4QkFBQTtFQUNwQixpQkFBQTtFQUFtQixvQ0FBQTtFQUNuQixnQkFBQTtFQUFrQix5REFBQTtBQ1FwQjs7QURMQSxzQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0EvUEs7RUFnUUwsY0FBQTtFQUNBLGdCQUFBO0FDUUY7O0FETEEsaUVBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDUUY7O0FETEEsMkRBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUUY7O0FETEEsd0NBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1FGOztBRExBO0VBQ0Usc0JBQUE7QUNRRjs7QURMQSxzSEFBQTs7QUFDQTtFQUNFLDRCQUFBO0VBQThCLG9DQUFBO0VBQzlCLGFBQUE7QUNTRjs7QUROQSxnSUFBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUNTRjs7RURQQTtJQUNFLGVBQUE7RUNVRjtBQUNGOztBRFJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrOiAjMGQ0N2ExO1xyXG4kbGl0ZTogI2UzZjJmZDtcclxuXHJcbi5ib2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAwcHggMHB4IDI1cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm9ubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxufVxyXG4ucGx1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxuICBtYXJnaW46IDI1cHg7XHJcbn1cclxuLnBvc2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4uZGVzayB7XHJcbiAgcGFkZGluZzogMjBweCA1cHg7XHJcbn1cclxuLm5hdnJvdyB7XHJcbiAgbWFyZ2luOiAyNXB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgc3Bhbjpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XHJcbn1cclxuLmNhcmQtcmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG4uY2FyZC1sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDIyNXB4O1xyXG59XHJcbi5kZXNrOmhvdmVyIHtcclxuICAudGl0bGUge1xyXG4gICAgYW5pbWF0aW9uOiB3aWR0aGV4dHJhY3QgNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbmltYXRpb24gNXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB3aWR0aGV4dHJhY3Qge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gIH1cclxufVxyXG4udXNlcmljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5leHBhbmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBhbmltYXRpb246IHJvdGF0ZSAycztcclxufVxyXG4uZXhwYW5kOmhvdmVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxufVxyXG4uY2FyZGJvYXJkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5hY3RpdmVfc2NyZWVuIHtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5pbmFjdGl2ZV9zY3JlZW4ge1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xyXG4gIC5jYXJkYm9hcmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxudGgge1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG50cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmJvYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICRsaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlLWluLW91dDtcclxuICAgIGkge1xyXG4gICAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJGxpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggJGxpdGU7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5leHRyYWN0IHtcclxuICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGFuaW1hdGlvbjogcm90YXRlIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxufVxyXG4uYWN0aXZhdGVzaWRlYmFyIHtcclxuICB3aWR0aDogNSU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogaW5oZXJpdDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5hY3RpdmF0ZSB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuLnBsdXM6aG92ZXIge1xyXG4gIGkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XHJcbiAgfVxyXG59XHJcbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cclxuLnNpZGViYXJzIHtcclxuICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cclxuICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7IC8qIEJsYWNrKi9cclxuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGViYXIgKi9cclxufVxyXG5cclxuLyogVGhlIHNpZGViYXIgbGlua3MgKi9cclxuLnNpZGViYXJzIGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXHJcbi5zaWRlYmFycyBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXHJcbi5zaWRlYmFycyAuY2xvc2VidG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4vKiBUaGUgYnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgc2lkZWJhciAqL1xyXG4ub3BlbmJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ub3BlbmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLyogU3R5bGUgcGFnZSBjb250ZW50IC0gdXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gcHVzaCB0aGUgcGFnZSBjb250ZW50IHRvIHRoZSByaWdodCB3aGVuIHlvdSBvcGVuIHRoZSBzaWRlIG5hdmlnYXRpb24gKi9cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7IC8qIElmIHlvdSB3YW50IGEgdHJhbnNpdGlvbiBlZmZlY3QgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGViYXJzIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuc2lkZWJhcnMgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbi5idG5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW46IDVweDtcclxuICB6LWluZGV4OiAxMDAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG4gIGxlZnQ6IDRweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuIiwiLmJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMjAlO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAwcHggMHB4IDI1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ub25saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG59XG5cbi5wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNlM2YyZmQ7XG4gIG1hcmdpbjogMjVweDtcbn1cblxuLnBvc2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGNvbG9yOiAjMGQ0N2ExO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5kZXNrIHtcbiAgcGFkZGluZzogMjBweCA1cHg7XG59XG5cbi5uYXZyb3cge1xuICBtYXJnaW46IDI1cHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XG59XG4ubmF2cm93IHNwYW4ge1xuICBjb2xvcjogIzBkNDdhMTtcbiAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2cm93IHNwYW46aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xufVxuXG4uY2FyZC1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gIGNvbG9yOiAjZTNmMmZkO1xufVxuXG4uY2FyZC1sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi50aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiAycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDIyNXB4O1xufVxuXG4uZGVzazpob3ZlciAudGl0bGUge1xuICBhbmltYXRpb246IHdpZHRoZXh0cmFjdCA1cztcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDVzIGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgd2lkdGhleHRyYWN0IHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDBweDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICB9XG59XG4udXNlcmljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhwYW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4cGFuZDpob3ZlciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDFzO1xufVxuXG4uY2FyZGJvYXJkIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYWN0aXZlX3NjcmVlbiAuY2FyZGJvYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcbn1cblxuLmluYWN0aXZlX3NjcmVlbiB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xufVxuLmluYWN0aXZlX3NjcmVlbiAuY2FyZGJvYXJkIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xufVxuXG50aCB7XG4gIGNvbG9yOiAjMGQ0N2ExO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmFzLW1vYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ib2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn1cbi5zaWRlYmFyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAyMCU7XG59XG4uc2lkZWJhciBhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDdhMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIGEgaSB7XG4gIG1hcmdpbjogNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2lkZWJhciBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5leHRyYWN0IHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNlM2YyZmQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZhdGVzaWRlYmFyIHtcbiAgd2lkdGg6IDUlO1xufVxuLmFjdGl2YXRlc2lkZWJhciBhIHtcbiAgcGFkZGluZzogMzBweDtcbiAgZmxvYXQ6IGluaGVyaXQ7XG59XG4uYWN0aXZhdGVzaWRlYmFyIGEgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWN0aXZhdGVzaWRlYmFyIGEgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY3RpdmF0ZXNpZGViYXIgYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYWN0aXZhdGUge1xuICB3aWR0aDogOTUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xufVxuXG4ucGx1czpob3ZlciBpIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XG59XG5cbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cbi5zaWRlYmFycyB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICB3aWR0aDogMDtcbiAgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU3RheSBvbiB0b3AgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICAvKiBCbGFjayovXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlYmFyICovXG59XG5cbi8qIFRoZSBzaWRlYmFyIGxpbmtzICovXG4uc2lkZWJhcnMgYSB7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2UzZjJmZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xuLnNpZGViYXJzIGE6aG92ZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXG4uc2lkZWJhcnMgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4vKiBUaGUgYnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgc2lkZWJhciAqL1xuLm9wZW5idG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm9wZW5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xufVxuXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xuI21haW4ge1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzO1xuICAvKiBJZiB5b3Ugd2FudCBhIHRyYW5zaXRpb24gZWZmZWN0ICovXG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlYmFycyB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cblxuICAuc2lkZWJhcnMgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4uYnRuY2xvc2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiA1cHg7XG4gIHotaW5kZXg6IDEwMDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogIzBkNDdhMTtcbiAgbGVmdDogNHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59Il19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.app = "shift";
    }
    ngOnInit() { }
    logout() {
        this.eat("Logged out", 1);
        setTimeout(() => {
            window.localStorage.removeItem("logged");
            window.localStorage.removeItem("state");
            this.router.navigate(["/shift"]);
        }, 3000);
    }
    eat(msg, color) {
        const x = document.getElementById("snackbar");
        this.msg = msg;
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
    openNav() {
        document.getElementById("mySidebar").style.width = "235px";
        // document.getElementById("main").style.marginLeft = "88px";
    }
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
        this.open = false;
        document.getElementById("mySidebar").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lander_lander_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lander/lander.component */ "./src/app/lander/lander.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _water_water_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./water/water.component */ "./src/app/water/water.component.ts");
/* harmony import */ var _application_locality_locality_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application/locality/locality.component */ "./src/app/application/locality/locality.component.ts");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");
/* harmony import */ var _shift_shift_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shift/shift.component */ "./src/app/shift/shift.component.ts");
/* harmony import */ var _unshift_unshift_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unshift/unshift.component */ "./src/app/unshift/unshift.component.ts");
/* harmony import */ var _rental_rental_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rental/rental.component */ "./src/app/rental/rental.component.ts");
/* harmony import */ var _application_property_property_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application/property/property.component */ "./src/app/application/property/property.component.ts");
/* harmony import */ var _application_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application/profile/profile.component */ "./src/app/application/profile/profile.component.ts");
/* harmony import */ var _application_property_info_property_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./application/property-info/property-info.component */ "./src/app/application/property-info/property-info.component.ts");
/* harmony import */ var _application_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./application/profile-info/profile-info.component */ "./src/app/application/profile-info/profile-info.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _lander_lander_component__WEBPACK_IMPORTED_MODULE_8__["LanderComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
            _water_water_component__WEBPACK_IMPORTED_MODULE_10__["WaterComponent"],
            _application_locality_locality_component__WEBPACK_IMPORTED_MODULE_11__["LocalityComponent"],
            _shift_shift_component__WEBPACK_IMPORTED_MODULE_13__["ShiftComponent"],
            _unshift_unshift_component__WEBPACK_IMPORTED_MODULE_14__["UnshiftComponent"],
            _rental_rental_component__WEBPACK_IMPORTED_MODULE_15__["RentalComponent"],
            _application_property_property_component__WEBPACK_IMPORTED_MODULE_16__["PropertyComponent"],
            _application_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
            _application_property_info_property_info_component__WEBPACK_IMPORTED_MODULE_18__["PropertyInfoComponent"],
            _application_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_19__["ProfileInfoComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]],
        providers: [src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_12__["LocalityService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/application/locality/locality.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/application/locality/locality.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desk {\n  padding: 20px;\n}\n\n.loader {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 30px;\n  margin: 20px;\n  color: #0d47a1;\n  animation: rotate 3s infinite alternate-reverse;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.mill {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  margin: auto;\n  width: 30%;\n  opacity: 0.3;\n}\n\n.mill2 {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: block;\n  margin: auto;\n  width: 40%;\n  opacity: 0.3;\n  margin-bottom: -100px;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .as-non-mob {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    width: 80%;\n    opacity: 0.1;\n  }\n}\n\n@media (min-width: 1200px) {\n  .as-non-mob {\n    display: none;\n  }\n}\n\n.aset {\n  margin: auto;\n  display: block;\n  cursor: pointer;\n  width: 50%;\n  margin-top: 150px;\n  border: 2px solid #0d47a1;\n  border-radius: 10px;\n}\n\n.edit {\n  float: right;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.edit:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n.geo {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n  margin: 75px 0px;\n}\n\ntable {\n  width: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vbG9jYWxpdHkvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFxsb2NhbGl0eVxcbG9jYWxpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0FDREY7O0FER0E7RUFDRTtJQUNFLHVCQUFBO0VDQUY7RURFQTtJQUNFLHlCQUFBO0VDQUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsdUJBQUE7RUNBRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtBQUNGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7O0VERUE7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0U7SUFDRSxhQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9sb2NhbGl0eS9sb2NhbGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrOiAjMGQ0N2ExO1xyXG4kbGl0ZTogI2UzZjJmZDtcclxuXHJcbi5kZXNrIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogIzBkNDdhMTtcclxuICBhbmltYXRpb246IHJvdGF0ZSAzcyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLm1pbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ubWlsbDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFzLW1vYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYXMtbm9uLW1vYiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuYXMtbm9uLW1vYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uYXNldCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gbWFyZ2luOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmVkaXQ6aG92ZXIge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDFzO1xyXG59XHJcbi5nZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiA3NXB4IDBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIiwiLmRlc2sge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICMwZDQ3YTE7XG4gIGFuaW1hdGlvbjogcm90YXRlIDNzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ubWlsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzAlO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5taWxsMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwJTtcbiAgb3BhY2l0eTogMC4zO1xuICBtYXJnaW4tYm90dG9tOiAtMTAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYXMtbW9iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFzLW5vbi1tb2Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFzLW5vbi1tb2Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hc2V0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzBkNDdhMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmVkaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWRpdDpob3ZlciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDFzO1xufVxuXG4uZ2VvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNzVweCAwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/application/locality/locality.component.ts":
/*!************************************************************!*\
  !*** ./src/app/application/locality/locality.component.ts ***!
  \************************************************************/
/*! exports provided: LocalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalityComponent", function() { return LocalityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let LocalityComponent = class LocalityComponent {
    constructor(locs) {
        this.locs = locs;
        this.areas = [];
        this.cities = [];
        this.location_keys = [];
        this.loc = {
            state: "",
            city: "",
            area: "",
            pin: ""
        };
        this.loader = false;
    }
    ngOnInit() {
        this.loader = true;
        this.locServ();
    }
    getGeo() {
        this.map = true;
        setTimeout(() => {
            this.map = false;
            this.locs.getPosition().then(data => {
                console.log(data);
                this.positions = data;
                this.locs.goord(this.positions['lat'], this.positions['lng']).subscribe(datas => {
                    console.log(datas);
                });
            });
        }, 4000);
    }
    locServ() {
        this.locs.getlocality().subscribe(data => {
            this.loader = false;
            this.location = data;
            // tslint:disable-next-line:forin
            for (const key in this.location) {
                this.location_keys.push(key);
            }
        }, err => { });
    }
    stateset(state) {
        this.cities = [];
        this.loc.city = "";
        this.loc.area = "";
        this.loc.pin = "";
        this.city_list = this.location[state];
        // tslint:disable-next-line:forin
        for (const key in this.city_list) {
            this.cities.push(key);
        }
    }
    cityset(statecity) {
        this.loc.area = "";
        this.loc.pin = "";
        this.areas = [];
        this.areas = this.city_list[statecity];
        // tslint:disable-next-line:forin
    }
    setLoc() {
        this.set = true;
        window.localStorage.setItem("location", JSON.stringify(this.loc));
        setTimeout(() => {
            this.set = false;
            this.eat("Location setted", 1);
        }, 5000);
    }
    setGeo() {
        this.set = true;
        window.localStorage.setItem("geolocation", JSON.stringify(this.positions));
        setTimeout(() => {
            this.set = false;
            this.eat("Geo Location setted", 1);
        }, 5000);
    }
    eat(msg, color) {
        this.msg = msg;
        const x = document.getElementById("snackbar");
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
};
LocalityComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
LocalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-locality",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/locality/locality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locality.component.scss */ "./src/app/application/locality/locality.component.scss")).default]
    })
], LocalityComponent);



/***/ }),

/***/ "./src/app/application/profile-info/profile-info.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/application/profile-info/profile-info.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUtaW5mby9wcm9maWxlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/application/profile-info/profile-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/application/profile-info/profile-info.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let ProfileInfoComponent = class ProfileInfoComponent {
    constructor(loc) {
        this.loc = loc;
    }
    ngOnInit() {
    }
    eat(msg, color) {
        this.msg = msg;
        const x = document.getElementById("snackbar");
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
};
ProfileInfoComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
ProfileInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile-info/profile-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-info.component.scss */ "./src/app/application/profile-info/profile-info.component.scss")).default]
    })
], ProfileInfoComponent);



/***/ }),

/***/ "./src/app/application/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/application/profile/profile.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/application/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/application/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(loc) {
        this.loc = loc;
        this.prof = {
            fname: '',
            lname: '',
            land: 0,
            door: 0,
            loc: '',
            state: '',
            country: '',
            pin: ''
        };
    }
    ngOnInit() {
    }
    profile() {
        this.loc.profile(this.prof).subscribe(data => {
            if (data['status'] === true) {
                this.eat(data['msg'], 1);
            }
            else {
                this.eat(data['msg'], 2);
            }
        });
    }
    eat(msg, color) {
        this.msg = msg;
        const x = document.getElementById("snackbar");
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/application/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/application/property-info/property-info.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/application/property-info/property-info.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  width: 50px;\n  position: absolute;\n  right: 0;\n  margin: 20px;\n}\n\n.cardbody {\n  padding: 10px;\n}\n\ntr {\n  padding: 5px;\n}\n\n.uk-table td {\n  padding: 7px 10px;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydHktaW5mby9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xccmFjZS9zcmNcXGFwcFxcYXBwbGljYXRpb25cXHByb3BlcnR5LWluZm9cXHByb3BlcnR5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnR5LWluZm8vcHJvcGVydHktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9wcm9wZXJ0eS1pbmZvL3Byb3BlcnR5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5jYXJkYm9keXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxudHJ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnVrLXRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufSIsIi5ob21lIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNhcmRib2R5IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxudHIge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi51ay10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/application/property-info/property-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/application/property-info/property-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: PropertyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyInfoComponent", function() { return PropertyInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PropertyInfoComponent = class PropertyInfoComponent {
    constructor(loc, router) {
        this.loc = loc;
        this.router = router;
    }
    ngOnInit() {
        this.loc.getgit('tyre', 'props').subscribe(data => {
            this.props = data;
        });
    }
    eat(msg, color) {
        this.msg = msg;
        const x = document.getElementById("snackbar");
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
};
PropertyInfoComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PropertyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/property-info/property-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-info.component.scss */ "./src/app/application/property-info/property-info.component.scss")).default]
    })
], PropertyInfoComponent);



/***/ }),

/***/ "./src/app/application/property/property.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/application/property/property.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rup {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px;\n}\n\n.home {\n  width: 30px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydHkvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFxwcm9wZXJ0eVxccHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnR5L3Byb3BlcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9wcm9wZXJ0eS9wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ydXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uaG9tZXtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iLCIucnVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ob21lIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/application/property/property.component.ts":
/*!************************************************************!*\
  !*** ./src/app/application/property/property.component.ts ***!
  \************************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let PropertyComponent = class PropertyComponent {
    constructor(loc) {
        this.loc = loc;
        this.prop = {
            mates: '',
            landmark: '',
            starts: 0,
            acc: '',
            ends: 0,
            add: '',
            htype: '',
            state: '',
            country: '',
            pin: ''
        };
    }
    ngOnInit() {
    }
    props() {
        this.loc.property(this.prop).subscribe(data => {
            if (data['status'] === true) {
                this.eat(data['msg'], 1);
            }
            else {
                this.eat(data['msg'], 2);
            }
        });
    }
    eat(msg, color) {
        this.msg = msg;
        const x = document.getElementById("snackbar");
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
};
PropertyComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/property/property.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property.component.scss */ "./src/app/application/property/property.component.scss")).default]
    })
], PropertyComponent);



/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/lander/lander.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lander/lander.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto;\n}\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1;\n}\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px;\n}\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite;\n}\n\n.navrow span {\n  color: #0d47a1;\n  transition: font-weight 1s ease-in-out;\n}\n\n.navrow span:hover {\n  font-weight: bold;\n  cursor: pointer;\n  transition: font-weight 1s ease-in;\n}\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite;\n}\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd;\n}\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1;\n}\n\n.title {\n  background-color: #0d47a1;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px;\n}\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in;\n}\n\n.legend {\n  text-align: center;\n}\n\ntable {\n  width: 100%;\n  overflow: auto;\n}\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px;\n  }\n  to {\n    width: 225px;\n  }\n}\n\n@keyframes widthextract {\n  from {\n    width: 0px;\n  }\n  to {\n    width: 225px;\n  }\n}\n\n.usericon {\n  text-align: center;\n  font-size: 80px;\n}\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none;\n}\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer;\n}\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  transition: display 1s ease-in;\n}\n\n.inactive_screen {\n  transition: height 1s ease-in;\n}\n\n.inactive_screen .cardboard {\n  display: none;\n  transition: display 1s ease-in;\n}\n\nth {\n  color: #0d47a1;\n  font-weight: bold;\n}\n\ntr {\n  border: 1px solid #0d47a1;\n  padding: 3px;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px;\n  }\n}\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%;\n}\n\n.sidebar a {\n  padding: 10px;\n  width: 95%;\n  display: block;\n  margin: 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #e3f2fd;\n  border: 1px solid #0d47a1;\n  transition: box-shadow 1s ease-in-out;\n}\n\n.sidebar a i {\n  margin: 5px;\n  float: right;\n}\n\n.sidebar a:hover {\n  border: 1px solid #e3f2fd;\n  box-shadow: 0px 0px 1px 1px #e3f2fd;\n  transition: box-shadow 1s ease-in;\n}\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n}\n\ni {\n  cursor: pointer;\n}\n\n.activatesidebar {\n  width: 5%;\n}\n\n.activatesidebar a {\n  padding: 30px;\n  float: inherit;\n}\n\n.activatesidebar a span {\n  display: none;\n}\n\n.activatesidebar a i {\n  text-align: center;\n}\n\n.activatesidebar a:hover {\n  box-shadow: none;\n  border: 0px;\n}\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%;\n}\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  color: #e3f2fd;\n  margin: 25px;\n}\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGVyL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxyYWNlL3NyY1xcYXBwXFxsYW5kZXJcXGxhbmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGVyL2xhbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBVEs7RUFVTCxnQ0FBQTtFQUNBLGNBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBakJLO0FDZ0JQOztBREdBO0VBQ0UseUJBcEJLO0VBcUJMLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0F6Qks7RUEwQkwsWUFBQTtBQ0FGOztBREVBO0VBQ0UseUJBN0JLO0VBOEJMLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBR0EsY0FwQ0s7RUFxQ0wsWUFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSx1QkFBQTtFQ0RGO0VER0E7SUFDRSx5QkFBQTtFQ0RGO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLHVCQUFBO0VDREY7RURHQTtJQUNFLHlCQUFBO0VDREY7QUFDRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0pGOztBREtFO0VBQ0UsY0ExREc7RUEyREgsc0NBQUE7QUNISjs7QURLRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDSEo7O0FETUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUNIRjs7QURLQTtFQUNFLHlCQTVFSztFQTZFTCxjQTVFSztBQzBFUDs7QURJQTtFQUNFLHlCQS9FSztFQWdGTCxjQWpGSztBQ2dGUDs7QURHQTtFQUNFLHlCQXBGSztFQXFGTCw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0U7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLDhEQUFBO0FDQUo7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxZQUFBO0VDRUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0VEQUE7SUFDRSxZQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSUY7O0FEREE7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDS0o7O0FERkE7RUFDRSw2QkFBQTtBQ0tGOztBREpFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDTUo7O0FESEE7RUFDRSxjQXRKSztFQXVKTCxpQkFBQTtBQ01GOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREZFO0VBQ0UsYUFBQTtFQUVBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQTNMRztFQTRMSCx5QkFBQTtFQUVBLHFDQUFBO0FDRUo7O0FEREk7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0VOOztBRENFO0VBQ0UseUJBQUE7RUFFQSxtQ0FBQTtFQUNBLGlDQUFBO0FDQUo7O0FER0E7RUFHRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWpOSztFQWtOTCxxQkFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLFNBQUE7QUNGRjs7QURJRTtFQUNFLGFBQUE7RUFFQSxjQUFBO0FDSEo7O0FESUk7RUFDRSxhQUFBO0FDRk47O0FESUk7RUFDRSxrQkFBQTtBQ0ZOOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSEY7O0FETUU7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDSEo7O0FET0E7RUFDRSx5QkExUEs7RUEyUEwsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxjQWhRSztFQWlRTCxZQUFBO0FDSkY7O0FET0U7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDSko7O0FEUUE7RUFDRTtJQUNFLHVCQUFBO0VDTEY7RURPQTtJQUNFLHlCQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRlci9sYW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyazogIzBkNDdhMTtcclxuJGxpdGU6ICNlM2YyZmQ7XHJcblxyXG4uYm9hcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDIwJTtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMHB4IDBweCAyNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5vbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnBsdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbi5wb3NidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyByaWdodDogMDtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLmRlc2sge1xyXG4gIC8vIHBhZGRpbmc6IC0xMHB4O1xyXG59XHJcbi5uYXZyb3cge1xyXG4gIG1hcmdpbjogMjVweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIHNwYW46aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG59XHJcbi5jYXJkLXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBjb2xvcjogJGxpdGU7XHJcbn1cclxuLmNhcmQtbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAyMjVweDtcclxufVxyXG4uZGVzazpob3ZlciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGFuaW1hdGlvbjogd2lkdGhleHRyYWN0IDVzO1xyXG4gICAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDVzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5sZWdlbmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuQGtleWZyYW1lcyB3aWR0aGV4dHJhY3Qge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gIH1cclxufVxyXG4udXNlcmljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5leHBhbmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBhbmltYXRpb246IHJvdGF0ZSAycztcclxufVxyXG4uZXhwYW5kOmhvdmVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxufVxyXG4uY2FyZGJvYXJkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5hY3RpdmVfc2NyZWVuIHtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5pbmFjdGl2ZV9zY3JlZW4ge1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xyXG4gIC5jYXJkYm9hcmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxudGgge1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG50cjpob3ZlciB7XHJcbiAgLy8gYm9yZGVyOiAxcHggZG90dGVkICRsaXRlO1xyXG4gIC8vIHRyYW5zaXRpb246IGJvcmRlciAxcyBlYXNlLWluO1xyXG59XHJcblxyXG50cntcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFzLW1vYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYm9hcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJGxpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgaSB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGl0ZTtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggJGxpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5leHRyYWN0IHtcclxuICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGFuaW1hdGlvbjogcm90YXRlIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxufVxyXG4uYWN0aXZhdGVzaWRlYmFyIHtcclxuICB3aWR0aDogNSU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogaW5oZXJpdDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5hY3RpdmF0ZSB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuLnBsdXM6aG92ZXIge1xyXG4gIGkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XHJcbiAgfVxyXG59XHJcblxyXG4ucGx1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbi5wbHVzOmhvdmVyIHtcclxuICBpIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi5ib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDIwJTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMHB4IDBweCAyNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm9ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xufVxuXG4ucGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjZTNmMmZkO1xuICBtYXJnaW46IDI1cHg7XG59XG5cbi5wb3NidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBjb2xvcjogIzBkNDdhMTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ubmF2cm93IHtcbiAgbWFyZ2luOiAyNXB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xufVxuLm5hdnJvdyBzcGFuIHtcbiAgY29sb3I6ICMwZDQ3YTE7XG4gIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuLm5hdnJvdyBzcGFuOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbjtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggZ2hvc3R3aGl0ZTtcbn1cblxuLmNhcmQtcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICBjb2xvcjogI2UzZjJmZDtcbn1cblxuLmNhcmQtbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG4udGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAyMjVweDtcbn1cblxuLmRlc2s6aG92ZXIgLnRpdGxlIHtcbiAgYW5pbWF0aW9uOiB3aWR0aGV4dHJhY3QgNXM7XG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiA1cyBlYXNlLWluO1xufVxuXG4ubGVnZW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuQGtleWZyYW1lcyB3aWR0aGV4dHJhY3Qge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMHB4O1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMjI1cHg7XG4gIH1cbn1cbi51c2VyaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4MHB4O1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5kOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XG59XG5cbi5jYXJkYm9hcmQge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hY3RpdmVfc2NyZWVuIC5jYXJkYm9hcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xufVxuXG4uaW5hY3RpdmVfc2NyZWVuIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2UtaW47XG59XG4uaW5hY3RpdmVfc2NyZWVuIC5jYXJkYm9hcmQge1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XG59XG5cbnRoIHtcbiAgY29sb3I6ICMwZDQ3YTE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hcy1tb2Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYm9hcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG4uc2lkZWJhciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMjAlO1xufVxuLnNpZGViYXIgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciBhIGkge1xuICBtYXJnaW46IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNpZGViYXIgYTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2YyZmQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAjZTNmMmZkO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW47XG59XG5cbi5leHRyYWN0IHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNlM2YyZmQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZhdGVzaWRlYmFyIHtcbiAgd2lkdGg6IDUlO1xufVxuLmFjdGl2YXRlc2lkZWJhciBhIHtcbiAgcGFkZGluZzogMzBweDtcbiAgZmxvYXQ6IGluaGVyaXQ7XG59XG4uYWN0aXZhdGVzaWRlYmFyIGEgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWN0aXZhdGVzaWRlYmFyIGEgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY3RpdmF0ZXNpZGViYXIgYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYWN0aXZhdGUge1xuICB3aWR0aDogOTUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xufVxuXG4ucGx1czpob3ZlciBpIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XG59XG5cbi5wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogI2UzZjJmZDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4ucGx1czpob3ZlciBpIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/lander/lander.component.ts":
/*!********************************************!*\
  !*** ./src/app/lander/lander.component.ts ***!
  \********************************************/
/*! exports provided: LanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanderComponent", function() { return LanderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LanderComponent = class LanderComponent {
    constructor() {
        this.sidemenu = false;
        this.extract = false;
    }
    ngOnInit() {
        const key = window.localStorage.getItem("logged");
        const state = window.localStorage.getItem("state");
        const location = window.localStorage.getItem("location");
        const geolocation = window.localStorage.getItem("geolocation");
        this.username = state === "true" ? JSON.parse(atob(key))["username"] : "";
        this.location = state === "true" ? JSON.parse(location) : undefined;
        this.geolocation = state === "true" ? JSON.parse(geolocation) : undefined;
        if (state === "true") {
            this.state = true;
        }
        else {
            this.state = false;
        }
    }
};
LanderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-lander",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lander.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lander/lander.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lander.component.scss */ "./src/app/lander/lander.component.scss")).default]
    })
], LanderComponent);



/***/ }),

/***/ "./src/app/rental/rental.component.scss":
/*!**********************************************!*\
  !*** ./src/app/rental/rental.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbnRhbC9yZW50YWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/rental/rental.component.ts":
/*!********************************************!*\
  !*** ./src/app/rental/rental.component.ts ***!
  \********************************************/
/*! exports provided: RentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalComponent", function() { return RentalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RentalComponent = class RentalComponent {
    constructor() { }
    ngOnInit() {
    }
};
RentalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rental',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rental/rental.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental.component.scss */ "./src/app/rental/rental.component.scss")).default]
    })
], RentalComponent);



/***/ }),

/***/ "./src/app/shared/locality.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/locality.service.ts ***!
  \********************************************/
/*! exports provided: LocalityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalityService", function() { return LocalityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LocalityService = class LocalityService {
    constructor(http) {
        this.http = http;
    }
    usercheck(data) {
        return this.http.post('https://backendpro.herokuapp.com/usercheck', data);
    }
    register(data) {
        return this.http.post('https://backendpro.herokuapp.com/register', data);
    }
    property(data) {
        return this.http.post('https://backendpro.herokuapp.com/property', data);
    }
    profile(data) {
        return this.http.post('https://backendpro.herokuapp.com/profile', data);
    }
    login(data) {
        return this.http.post('https://backendpro.herokuapp.com/login', data);
    }
    getTest() {
        return this.http.get('https://backendpro.herokuapp.com/apps');
    }
    getlocality() {
        return this.http.get("https://raw.githubusercontent.com/nijeeshjoshy/All-Indian-Cities-JSON/master/allCities.json");
    }
    getYellow() {
        return this.http.get("https://raw.githubusercontent.com/creativecoderone/tyre/master/yellow.json");
    }
    getgit(bucket, prop) {
        return this.http.get("https://raw.githubusercontent.com/creativecoderone/tyre/master/" + prop + ".json");
    }
    goord(lat, lang) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lang + '&sensor=true/false&key=AIzaSyBXGQCSWlf-MCDozmr74-AQoRvSCGzkZ0M');
    }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({
                    lng: resp.coords.longitude,
                    lat: resp.coords.latitude,
                    timestamp: resp.timestamp,
                    accuracy: resp.coords.accuracy,
                    altitude: resp.coords.altitude
                });
            }, err => {
                reject(err);
            });
        });
    }
};
LocalityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LocalityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LocalityService);



/***/ }),

/***/ "./src/app/shift/shift.component.scss":
/*!********************************************!*\
  !*** ./src/app/shift/shift.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".road {\n  margin: -20px;\n  width: 100%;\n  margin-left: -40px;\n  margin-right: -40px;\n}\n\n.viewboard {\n  background-color: white;\n  padding: 40px;\n  border-radius: 0px 30px 30px 0px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 65%;\n}\n\n.formboard {\n  padding: 40px;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 65%;\n}\n\n.imgc {\n  display: block;\n  margin: auto;\n  width: 95%;\n  -webkit-animation: scaleup 3s;\n          animation: scaleup 3s;\n  cursor: zoom-in;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n}\n\n@-webkit-keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n.small {\n  color: darkgray;\n}\n\n::-webkit-input-placeholder {\n  color: #0d47a1;\n}\n\nlegend {\n  color: #0d47a1;\n}\n\n.bgg {\n  position: absolute;\n  right: 0;\n  margin: 40px;\n  font-size: 24px;\n  margin-right: 50px;\n  color: #e3f2fd;\n}\n\ninput[type=text] {\n  border: 1px dotted #0d47a1;\n}\n\ninput[type=password] {\n  border: 1px dotted #0d47a1;\n}\n\ninput[type=text]:focus {\n  border: 1px solid #0d47a1;\n  transition: border 2s ease-in-out;\n}\n\ninput[type=password]:focus {\n  border: 1px solid #0d47a1;\n  transition: border 2s ease-in-out;\n}\n\nbutton {\n  background-color: #0d47a1;\n}\n\n.query {\n  position: absolute;\n  bottom: 0;\n  font-size: 30px;\n  cursor: pointer;\n  right: 0;\n  margin: 30px;\n  color: #0d47a1;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .loader {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    margin: 25px;\n    font-size: 20px;\n    color: #0d47a1;\n  }\n  .loader i {\n    -webkit-animation: rotate infinite;\n            animation: rotate infinite;\n  }\n\n  .formboard {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px;\n  }\n}\n\n.look {\n  color: darkgray;\n  font-size: 12px;\n  padding: 5px 5px 10px 0px;\n}\n\ni {\n  cursor: pointer;\n}\n\n.loader {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 25px;\n  font-size: 30px;\n  color: #0d47a1;\n  transition: -webkit-animation ease-in-out;\n  transition: animation ease-in-out;\n  transition: animation ease-in-out, -webkit-animation ease-in-out;\n}\n\n.loader i {\n  animation: rotate 2s infinite alternate-reverse;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpZnQvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXHNoaWZ0XFxzaGlmdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hpZnQvc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDREY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7RUFBQSxzRUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxxQkFBQTtFQ0VGO0VEQUE7SUFDRSxtQkFBQTtFQ0VGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLHFCQUFBO0VDRUY7RURBQTtJQUNFLG1CQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLGNBL0NLO0FDa0RQOztBRERBO0VBQ0UsY0FsREs7QUNzRFA7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F6REs7QUM4RFA7O0FERkE7RUFDRSwwQkFBQTtBQ0tGOztBREhBO0VBQ0UsMEJBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUNPRjs7QURMQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUNRRjs7QUROQTtFQUNFLHlCQTVFSztBQ3FGUDs7QURQQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQXJGSztBQytGUDs7QURSQTtFQUNFO0lBQ0UsYUFBQTtFQ1dGOztFRFRBO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxjQWpHRztFQzZHTDtFRFhFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ2FKOztFRFZBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUNhRjtBQUNGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtBQ2NGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQTlISztFQStITCx5Q0FBQTtFQUFBLGlDQUFBO0VBQUEsZ0VBQUE7QUNjRjs7QURiRTtFQUNFLCtDQUFBO0FDZUo7O0FEWkE7RUFDRTtJQUNFLHVCQUFBO0VDZUY7RURiQTtJQUNFLHlCQUFBO0VDZUY7QUFDRjs7QURyQkE7RUFDRTtJQUNFLHVCQUFBO0VDZUY7RURiQTtJQUNFLHlCQUFBO0VDZUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoaWZ0L3NoaWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLnJvYWQge1xyXG4gIG1hcmdpbjogLTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTQwcHg7XHJcbn1cclxuLnZpZXdib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuLmZvcm1ib2FyZCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogMzUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDY1JTtcclxufVxyXG4uaW1nYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZXVwIDNzO1xyXG4gIGN1cnNvcjogem9vbS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLnNtYWxsIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxubGVnZW5kIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLmJnZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnF1ZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICBpIHtcclxuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtYm9hcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG4ubG9vayB7XHJcbiAgY29sb3I6IGRhcmtncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHggNXB4IDEwcHggMHB4O1xyXG59XHJcbmkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gZWFzZS1pbi1vdXQ7XHJcbiAgaSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi5yb2FkIHtcbiAgbWFyZ2luOiAtMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbn1cblxuLnZpZXdib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmZvcm1ib2FyZCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDY1JTtcbn1cblxuLmltZ2Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTUlO1xuICBhbmltYXRpb246IHNjYWxldXAgM3M7XG4gIGN1cnNvcjogem9vbS1pbjtcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxldXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5zbWFsbCB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbmxlZ2VuZCB7XG4gIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG4uYmdnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgY29sb3I6ICNlM2YyZmQ7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzBkNDdhMTtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzBkNDdhMTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XG4gIHRyYW5zaXRpb246IGJvcmRlciAycyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG59XG5cbi5xdWVyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMzBweDtcbiAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYXMtbW9iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDI1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMGQ0N2ExO1xuICB9XG4gIC5sb2FkZXIgaSB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgaW5maW5pdGU7XG4gIH1cblxuICAuZm9ybWJvYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufVxuLmxvb2sge1xuICBjb2xvcjogZGFya2dyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDVweCAxMHB4IDBweDtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAyNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMGQ0N2ExO1xuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gZWFzZS1pbi1vdXQ7XG59XG4ubG9hZGVyIGkge1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shift/shift.component.ts":
/*!******************************************!*\
  !*** ./src/app/shift/shift.component.ts ***!
  \******************************************/
/*! exports provided: ShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftComponent", function() { return ShiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShiftComponent = class ShiftComponent {
    constructor(loc, router) {
        this.loc = loc;
        this.router = router;
        this.msg = "";
        this.enter = true;
        this.login = {
            username: "",
            password: "",
            cpassword: '',
            phrase: "",
            lucky: 0
        };
        this.cpassword = "";
    }
    ngOnInit() {
        this.loc.getYellow().subscribe(data => {
            this.info = data;
            // console.log(this.info.length);
        });
    }
    logins() {
        this.enter = false;
        this.logdata = true;
        this.loc.usercheck(this.login).subscribe(ccc => {
            if (ccc['status'] === false) {
                this.loc.login(this.login).subscribe(data => {
                    this.logdata = false;
                    if (data['status'] === true) {
                        this.eat(data['msg'], 1);
                        this.logdata = false;
                        window.localStorage.setItem("logged", this.login.username);
                        window.localStorage.setItem("state", "true");
                    }
                    else {
                        this.eat(data['msg'], 2);
                        this.logdata = false;
                    }
                });
            }
            else {
                this.logdata = false;
                this.eat('Username not exists', 2);
            }
        });
    }
    register() {
        this.enter = false;
        // delete this.login.lucky;
        // delete this.login.phrase;
        this.logdata = true;
        this.loc.usercheck(this.login).subscribe(ccc => {
            if (ccc['status'] === true) {
                if (this.login.password === this.login.cpassword) {
                    this.loc.register(this.login).subscribe(data => {
                        this.logdata = undefined;
                        this.enter = true;
                        this.reg = true;
                        this.regData = data['msg'];
                        if (data['status'] === true) {
                            this.eat(data['msg'], 1);
                        }
                        else {
                            this.eat(data['msg'], 2);
                        }
                    });
                }
                else {
                    this.logdata = undefined;
                    this.enter = true;
                    this.reg = true;
                    this.eat('Password not matched', 2);
                }
            }
            else {
                this.logdata = undefined;
                this.enter = true;
                this.reg = true;
                this.eat(ccc['msg'], 2);
            }
        });
    }
    eat(msg, color) {
        this.msg = msg;
        const x = document.getElementById("snackbar");
        if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
        }
        else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
        }
        else {
            x.style.backgroundColor = "#ef5350";
        }
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    }
};
ShiftComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shift",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shift.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shift/shift.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shift.component.scss */ "./src/app/shift/shift.component.scss")).default]
    })
], ShiftComponent);



/***/ }),

/***/ "./src/app/unshift/unshift.component.scss":
/*!************************************************!*\
  !*** ./src/app/unshift/unshift.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".road {\n  margin: -20px;\n  width: 100%;\n  margin-left: -40px;\n  margin-right: -40px;\n}\n\n.viewboard {\n  background-color: white;\n  padding: 40px;\n  border-radius: 0px 30px 30px 0px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 65%;\n}\n\n.formboard {\n  padding: 40px;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 65%;\n}\n\n.imgc {\n  display: block;\n  margin: auto;\n  width: 95%;\n  -webkit-animation: scaleup 3s;\n          animation: scaleup 3s;\n  cursor: zoom-in;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n}\n\n@-webkit-keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n.small {\n  color: darkgray;\n}\n\n::-webkit-input-placeholder {\n  color: #0d47a1;\n}\n\nlegend {\n  color: #0d47a1;\n}\n\n.bgg {\n  position: absolute;\n  right: 0;\n  margin: 40px;\n  font-size: 24px;\n  margin-right: 50px;\n  color: #e3f2fd;\n}\n\ninput[type=text] {\n  border: 1px dotted #0d47a1;\n}\n\ninput[type=password] {\n  border: 1px dotted #0d47a1;\n}\n\ninput[type=text]:focus {\n  border: 1px solid #0d47a1;\n  transition: border 2s ease-in-out;\n}\n\ninput[type=password]:focus {\n  border: 1px solid #0d47a1;\n  transition: border 2s ease-in-out;\n}\n\nbutton {\n  background-color: #0d47a1;\n}\n\n.query {\n  position: absolute;\n  bottom: 0;\n  font-size: 30px;\n  cursor: pointer;\n  right: 0;\n  margin: 30px;\n  color: #0d47a1;\n}\n\n.right {\n  float: right;\n  text-align: right;\n}\n\ni {\n  cursor: pointer;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .formboard {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5zaGlmdC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xccmFjZS9zcmNcXGFwcFxcdW5zaGlmdFxcdW5zaGlmdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdW5zaGlmdC91bnNoaWZ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UscUJBQUE7RUNFRjtFREFBO0lBQ0UsbUJBQUE7RUNFRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxxQkFBQTtFQ0VGO0VEQUE7SUFDRSxtQkFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxjQS9DSztBQ2tEUDs7QUREQTtFQUNFLGNBbERLO0FDc0RQOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBekRLO0FDOERQOztBREZBO0VBQ0UsMEJBQUE7QUNLRjs7QURIQTtFQUNFLDBCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FDT0Y7O0FETEE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FDUUY7O0FETkE7RUFDRSx5QkE1RUs7QUNxRlA7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FyRks7QUMrRlA7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURSQTtFQUNFLGVBQUE7QUNXRjs7QURUQTtFQUNFO0lBQ0UsYUFBQTtFQ1lGOztFRFZBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUNhRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdW5zaGlmdC91bnNoaWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLnJvYWQge1xyXG4gIG1hcmdpbjogLTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTQwcHg7XHJcbn1cclxuLnZpZXdib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuLmZvcm1ib2FyZCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogMzUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDY1JTtcclxufVxyXG4uaW1nYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZXVwIDNzO1xyXG4gIGN1cnNvcjogem9vbS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLnNtYWxsIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxubGVnZW5kIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLmJnZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnF1ZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm1ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5yb2FkIHtcbiAgbWFyZ2luOiAtMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbn1cblxuLnZpZXdib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmZvcm1ib2FyZCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDY1JTtcbn1cblxuLmltZ2Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTUlO1xuICBhbmltYXRpb246IHNjYWxldXAgM3M7XG4gIGN1cnNvcjogem9vbS1pbjtcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxldXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5zbWFsbCB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbmxlZ2VuZCB7XG4gIGNvbG9yOiAjMGQ0N2ExO1xufVxuXG4uYmdnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgY29sb3I6ICNlM2YyZmQ7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzBkNDdhMTtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzBkNDdhMTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XG4gIHRyYW5zaXRpb246IGJvcmRlciAycyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XG59XG5cbi5xdWVyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMzBweDtcbiAgY29sb3I6ICMwZDQ3YTE7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYXMtbW9iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm1ib2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/unshift/unshift.component.ts":
/*!**********************************************!*\
  !*** ./src/app/unshift/unshift.component.ts ***!
  \**********************************************/
/*! exports provided: UnshiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnshiftComponent", function() { return UnshiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnshiftComponent = class UnshiftComponent {
    constructor() {
        this.reset = {
            username: "",
            old: "",
            new: "",
            re: ""
        };
        this.load = true;
    }
    ngOnInit() {
        this.load = true;
        setTimeout(() => {
            this.load = false;
        }, 3000);
    }
};
UnshiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-unshift",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unshift.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unshift/unshift.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unshift.component.scss */ "./src/app/unshift/unshift.component.scss")).default]
    })
], UnshiftComponent);



/***/ }),

/***/ "./src/app/water/water.component.scss":
/*!********************************************!*\
  !*** ./src/app/water/water.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhdGVyL3dhdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/water/water.component.ts":
/*!******************************************!*\
  !*** ./src/app/water/water.component.ts ***!
  \******************************************/
/*! exports provided: WaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterComponent", function() { return WaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WaterComponent = class WaterComponent {
    constructor() { }
    ngOnInit() {
    }
};
WaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-water',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./water.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/water/water.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./water.component.scss */ "./src/app/water/water.component.scss")).default]
    })
], WaterComponent);



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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Administrator\Documents\race\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);