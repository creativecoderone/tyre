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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\" [ngClass]=\"(extract==true)?'activate':'board'\">\n        <!--<button class=\"plus\" *ngIf=\"state\" >M</button>-->\n        <!--<i class=\"fas fa-plus-circle\"></i>-->\n        <br>\n        <br class=\"as-non-mob\">\n        <br class=\"as-non-mob\">\n        <div class=\"container\">\n                <router-outlet></router-outlet>\n        </div>\n</div>\n<nav class=\"navbar  as-non-mob fixed-top navbar-light bg-light\">\n        <a class=\"navbar-brand\">\n                <span>\n                        <span *ngIf=\"!open\" (click)=\"open = true\" (click)=\"openNav()\"> &#9776; &nbsp;</span></span>\n                Rental PRO</a>\n</nav>\n\n\n<div class=\"online as-mob\">\n        <div class=\"sidebar\" [ngClass]=\"(extract==true)?'activatesidebar':'sidebar'\">\n                <br>\n\n                <!--{{extract}}-->\n                <i class='fas fa-expand extract' *ngIf=\"extract\" (click)=\"extract = false\"></i>\n                <i class='fas fa-expand-arrows-alt extract' *ngIf=\"!extract\" (click)=\"extract = true\"></i> <br>\n                <a uk-tooltip=\"title:Dashboard;pos:right;\" [routerLink]=\"['/lander']\" *ngIf=\"state==true\"><i\n                                class='fas fa-braille'></i><span>\n                                Dashboard</span></a>\n                <!-- <a uk-tooltip=\"title:Locality;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/locality']\"><i\n                                class='fas fa-bullseye'></i><span>\n                                Locality</span></a> -->\n                <a uk-tooltip=\"title:Locality;pos:right;\"  *ngIf=\"state==true\"\n                        [routerLink]=\"['/wantroom']\"><i class='fas fa-bullseye'></i><span>\n                                Find rooms</span></a>\n                <a uk-tooltip=\"title:Personal details;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/userdata']\"><i\n                                class='far fa-smile'></i><span>\n                                Profile</span></a>\n                <!-- <a uk-tooltip=\"title:Profile;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/profile']\"><i\n                                class='fas fa-clipboard'></i><span>\n                                Profile</span></a> -->\n                <a uk-tooltip=\"title:Property;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/property']\"><i\n                                class='fas fa-cogs'></i><span>\n                                Property </span></a>\n                <a uk-tooltip=\"title:Property board;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/property-info']\"><i\n                                class='fas fa-home'></i><span>\n                                Property Board</span></a>\n                <a uk-tooltip=\"title:Profile board;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/profile-info']\"><i\n                                class='fas fa-bell'></i><span>\n                                Request Board</span></a>\n                <a uk-tooltip=\"title:Disclaimer;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                        [routerLink]=\"['/disclaimer']\"><i class='fas fa-info-circle'></i><span>\n                                &nbsp;Disclaimer</span></a>\n                <!-- <a uk-tooltip=\"title:Login / Register;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/shift']\"><i\n                                class='fas fa-users'></i><span> Login\n                                /\n                                Register</span></a>\n                <a uk-tooltip=\"title: Change password;pos:right;\" *ngIf=\"state==true\" [routerLink]=\"['/unshift']\"><i\n                                class='fas fa-chart-line'></i><span>\n                                Change password</span></a> -->\n                <a uk-tooltip=\"title:Logout;pos:right;\" *ngIf=\"state==true\" (click)=\"logout()\"><i\n                                class='fas fa-user'></i><span>\n                                Logout</span></a>\n        </div>\n</div>\n<!--[routerLink]=\"['/lander']\"-->\n\n<!--7=77777777777777777777777777777777777777777777-->\n<div id=\"mySidebar\" class=\"sidebars\" style=\"font-size: 16px;\">\n        <a href=\"javascript:void(0)\" *ngIf=\"open\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n        <br>\n        <!--{{extract}}-->\n        <a uk-tooltip=\"title:Dashboard;pos:right;\" [routerLink]=\"['/lander']\" (click)=\"closeNav()\"\n                *ngIf=\"state==true\"><i class='fas fa-braille'></i><span>\n                        Dashboard</span></a>\n        <!-- <a uk-tooltip=\"title:Locality;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/locality']\"><i class='fas fa-bullseye'></i><span>\n                        Locality</span></a> -->\n        <a uk-tooltip=\"title:Locality;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/wantroom']\"><i class='fas fa-bullseye'></i><span>\n                        Find rooms</span></a>\n        <a uk-tooltip=\"title:Personal details;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/userdata']\"><i class='far fa-smile'></i><span>\n                        Profile</span></a>\n        <!-- <a uk-tooltip=\"title:Profile;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\" [routerLink]=\"['/profile']\"><i\n                        class='fas fa-clipboard'></i><span>\n                        Profile</span></a> -->\n        <a uk-tooltip=\"title:Property;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/property']\"><i class='fas fa-cogs'></i><span>\n                        Property </span></a>\n        <a uk-tooltip=\"title:Property board;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/property-info']\"><i class='fas fa-home'></i><span>\n                        Property Board</span></a>\n        <a uk-tooltip=\"title:Profile board;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/profile-info']\"><i class='fas fa-bell'></i><span>\n                        Request Board</span></a>\n        <a uk-tooltip=\"title:Disclaimer;pos:right;\" (click)=\"closeNav()\" *ngIf=\"state==true\"\n                [routerLink]=\"['/disclaimer']\"><i class='fas fa-info-circle'></i><span>\n                        Disclaimer</span></a>\n        <!-- <a uk-tooltip=\"title:Login / Register;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/shift']\"\n                *ngIf=\"state==true\"><i class='fas fa-users'></i><span> Login\n                        /\n                        Register</span></a>\n        <a uk-tooltip=\"title: Change password;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/unshift']\"\n                *ngIf=\"state==true\"><i class='fas fa-chart-line'></i><span>\n                        Change password</span></a> -->\n        <a uk-tooltip=\"title:Logout;pos:right;\" *ngIf=\"state==true\" (click)=\"closeNav()\" (click)=\"logout()\"><i\n                        class='fas fa-user'></i><span>\n                        Logout</span></a>\n\n</div>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/disclaimer/disclaimer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/disclaimer/disclaimer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Disclaimer <i class=\"fas fa-info\"></i> </h5>\n<hr>\n<small>By Rental Pro</small>\n<div  id='container'>\n    <img src=\"https://open.edx.org/wp-content/uploads/2019/03/data-science-dojo-open-edx-blog-1.png\" class=\"cdf\" alt=\"\">\n    <br>\n    A disclaimer is generally any statement intended to specify or delimit the scope of\n    rights and obligations that may be exercised and enforced by parties in a legally recognized relationship. In\n    contrast to other terms for legally operative language, the term disclaimer usually implies situations that involve\n    some level of uncertainty, waiver, or risk.</div> <hr>\n<div  id='container'>A disclaimer may specify mutually agreed and privately arranged terms and conditions\n    as part of a contract; or may specify warnings or expectations to the general public (or some other class of\n    persons) in order to fulfill a duty of care owed to prevent unreasonable risk of harm or injury. Some disclaimers\n    are intended to limit exposure to damages after a harm or injury has already been suffered. Additionally, some kinds\n    of disclaimers may represent a voluntary waiver of a right or obligation that may be owed to the disclaimant.</div> <hr>\n<div  id='container'>The presence of a disclaimer in a legally binding agreement does not necessarily\n    guarantee that the terms of the disclaimer will be recognized and enforced in a legal dispute. There may be other\n    legal considerations that render a disclaimer void either in whole or part.</div>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Request board <i class=\"fas fa-bell\"></i> </h5>\n\n<!-- {{props|json}} - -->\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let item of profs; let i=index\">\n        <div class=\"card\" style=\"margin: 10px 0px;\">\n            <div class=\"cardbody\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" *ngIf=\"item?.htype=='House'\" alt=\"\" class=\"home\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" *ngIf=\"item?.htype=='Apartment'\"  class=\"home\" alt=\"\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" *ngIf=\"item?.htype=='PG-Paying Guest'\"  class=\"home\" alt=\"\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" *ngIf=\"item?.htype=='Hostel'\"  class=\"home\" alt=\"\">\n\n                <table class=\"uk-table\">\n                    <tr>\n                        <td>\n                            Name\n                        </td>\n                        <td>\n                            <b>{{item?.fname}}&nbsp;{{item?.lname}} </b>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Landmark\n                        </td>\n                        <td>\n                            <b>{{item?.land}} </b>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Address\n                        </td>\n                        <td>\n                            <i class=\"fas fa-map-signs\"></i>&nbsp;&nbsp;{{item?.loc}} <br>\n                            <i class=\"fas fa-map-pin\"></i>&nbsp;&nbsp;&nbsp;{{item?.state}} <br>\n                            <!-- <i class=\"fas fa-map-marked-alt\"></i>&nbsp;&nbsp;{{item?.country}} <br> -->\n                            <b> <i class=\"fas fa-location-arrow\"></i>&nbsp;&nbsp;{{item?.pin}} <br>\n                            </b>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/profile/profile.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-12 card-left\">\n        <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n            <div class=\"card-body\">\n                <h4>Your information</h4>\n                <!-- <i class=\"fas fa-chevron-down expand\" (mouseover)=\"sidemenu = !sidemenu\"\n                    (click)=\"sidemenu = !sidemenu\"></i> -->\n                <form class=\"uk-grid-small\" uk-grid>\n                    <div class=\"uk-width-1-2@s\">\n                        <label for=\"\">Profile firstname</label>&nbsp;<i class=\"fas fa-signature\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.fname\" name=\"fname\" type=\"text\"\n                            uk-tooltip=\"title:First name;pos:top;\" placeholder=\"First name\">\n                    </div>\n                    <div class=\"uk-width-1-2@s\">\n                        <label for=\"\">Profile lastname</label>&nbsp;<i class=\"fas fa-signature\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.lname\" name=\"lname\" type=\"text\"\n                            uk-tooltip=\"title:Last name;pos:top;\" placeholder=\"Last name\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Permenant location Landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.landmark\" name=\"land\" type=\"text\"\n                            uk-tooltip=\"title:Permenant location Landmark;pos:top;\" placeholder=\"Landmark\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.door\" name=\"door\" type=\"text\"\n                            uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.loc\" name=\"loc\" type=\"text\"\n                            uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\n                            placeholder=\"Locality / Apartment / Soceity\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.state\" name=\"state\" type=\"text\"\n                            uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.cty\" name=\"cty\" type=\"text\"\n                            uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\n                    </div>\n                    <div class=\"uk-width-1-3@s\">\n                        <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.pin\" name=\"pin\" type=\"number\"\n                            uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\n                    </div>\n                    <button (click)=\"profile()\" class=\"uk-button uk-button-primary btn-block\">Set profile</button>\n                    <!-- {{prof|json}} -->\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/property-info/property-info.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/property-info/property-info.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Property dashboard <i class=\"fas fa-home\"></i> </h5>\n\n<!-- {{props|json}} - -->\n<hr>\n<div class=\"form-group\">\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"search\" name=\"search\" placeholder=\"Search Property\" id=\"\">\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let item of props|filter:search; let i=index\">\n        <div class=\"card\" style=\"margin: 5px 0px;\">\n            <div class=\"cardbody\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" *ngIf=\"item?.htype=='House'\" alt=\"\"\n                    class=\"home\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" *ngIf=\"item?.htype=='Apartment'\"\n                    class=\"home\" alt=\"\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" *ngIf=\"item?.htype=='PG-Paying Guest'\"\n                    class=\"home\" alt=\"\">\n                <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" *ngIf=\"item?.htype=='Hostel'\"\n                    class=\"home\" alt=\"\">\n                <div class=\"adds\">\n                    <i uk-toggle=\"target:#userinfo\" (click)=\"users= item\" uk-tooltip=\"title:Propertier;pos:right\"\n                        class=\"fas fa-user-circle\"></i>\n                    <i (click)=\"eat('Request sent',1)\" uk-tooltip=\"title:Request;pos:right\"\n                        class=\"fas fa-plus-circle\"></i>\n                    <i (click)=\"eat('Will update soon',2)\" uk-tooltip=\"title:More info;pos:right\"\n                        class=\"fas fa-info-circle\"></i>\n                </div>\n                <table class=\"uk-table\">\n                    <div class=\"owner\">\n                        <span class=\"badge  badge-primary\">{{item?.loc}}</span>\n                        <span class=\"badge  badge-primary\">{{item?.type}}</span>\n                        <span class=\"badge badge-primary\">{{item?.pin}}</span>\n                    </div>\n                    <tr>\n                        <td colspan=\"2\">\n                            Accomodation for<b> {{item?.mates}} </b> out of <b>\n                                {{item?.acc}} </b> managed by <b>\n                            </b> owner.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"2\">\n                            <i class=\"fas fa-map-signs\"></i>&nbsp;&nbsp;{{item?.add}} <br>\n                            <i class=\"fas fa-map-pin\"></i>&nbsp;&nbsp;&nbsp;{{item?.state}} <br>\n                            <i class=\"fas fa-map-marked-alt\"></i>&nbsp;&nbsp;{{item?.country}} <br>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <b>\n                                <i class=\"fas fa-rupee-sign\"></i>&nbsp;{{item?.starts}} - <i\n                                    class=\"fas fa-rupee-sign\"></i>&nbsp;{{item?.ends}} </b>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n\n\n<!-- This is the modal -->\n\n<div id=\"userinfo\" class=\"uk-flex-top\" uk-modal>\n    <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n        <p class=\"uk-modal-title\">Propertier</p>\n        <hr>\n        <h3> {{users?.profile?.fullname}}\n        </h3>\n        <h6><a [href]=\"user?.profile?.email\"><i class=\"far fa-envelope\"></i></a> {{users?.profile?.email}}</h6>\n        <h6><i class=\"fas fa-phone\"></i> {{users?.profile?.mobile}}</h6>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/property/property.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/property/property.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Property  <i class=\"fas fa-home\"></i> </h5>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-12\" *ngIf=\"app == ''\">\n        <div class=\"row\">\n            <div class=\"col-md-4\"\n            uk-tooltip=\"title:A bachelor is an unmarried man who lives outside of their parents home;pos:bottom\"\n            >\n                <div class=\"card vf card-body\" (click)=\"app = 'one'\">\n                    <img src=\"https://image.flaticon.com/icons/svg/2439/2439671.svg\" alt=\"\" class=\"seti\">\n                    <br>\n                    Bachelor / Student / Freelancer\n                </div>\n            </div>\n            <div class=\"col-md-4\"\n            uk-tooltip=\"title:For family unmarried woman who lives outside of their parents home;pos:bottom\"\n            >\n                <div class=\"card vf card-body\" (click)=\"app = 'two'\">\n                    <img src=\"https://image.flaticon.com/icons/svg/2439/2439652.svg\" alt=\"\" class=\"seti\">\n                    <br>\n                    Family/ Womens\n                </div>\n            </div>\n            <div class=\"col-md-4\"\n            uk-tooltip=\"title:Workers who lives outside of their own home from other city / state / country;pos:bottom\">\n                <div class=\"card vf card-body\" (click)=\"app = 'three'\">\n                    <img src=\"https://image.flaticon.com/icons/svg/2439/2439618.svg\" alt=\"\" class=\"seti\">\n                    <br>\n                    Others\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-one *ngIf=\"app == 'one'\"></app-one>\n    <app-two *ngIf=\"app == 'two'\"></app-two>\n    <app-three *ngIf=\"app == 'three'\"></app-three>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<img *ngIf=\"app == 'one'\" (click)=\"app=''\" src=\"https://image.flaticon.com/icons/svg/2439/2439671.svg\" alt=\"\"\n    class=\"seti2\">\n<img *ngIf=\"app == 'two'\" (click)=\"app=''\" src=\"https://image.flaticon.com/icons/svg/2439/2439652.svg\" alt=\"\"\n    class=\"seti2\">\n<img *ngIf=\"app ==  'three'\" (click)=\"app=''\" src=\"https://image.flaticon.com/icons/svg/2439/2439618.svg\" alt=\"\"\n    class=\"seti2\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/userdata/userdata.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/application/userdata/userdata.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"snackbar\">{{msg}}</div>\r\n\r\n<!-- <h5>User profile</h5> -->\r\n<!-- <hr> -->\r\n<!-- {{profile|json}} -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5>\r\n                    <i class=\"far fa-smile\"></i>&nbsp;{{profile?.username|uppercase}}\r\n                    <!-- <a > <i class=\"fas edit fa-edit\"></i></a> -->\r\n                </h5>\r\n                <img [src]=\"profile.img\" alt=\"\" class=\"userimg\">\r\n                <br>\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"far fa-address-book\"></i> <b> Full name</b></label> <br>\r\n                    <input type=\"text\" [(ngModel)]=\"profile.fullname\" class=\"form-control form-control-sm\" readonly\r\n                        placeholder=\"fullname\" name=\"ins\" id=\"\">\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"fas fa-envelope-square\"></i> <b> Email</b> </label>\r\n                    <input type=\"text\" [(ngModel)]=\"profile.email\" name=\"email\" class=\"form-control form-control-sm\"\r\n                        readonly placeholder=\"Email\" name=\"ins\" id=\"\">\r\n                </div>\r\n                <!-- <h5 class=\"card-title\">\r\n                    <a [href]=\"'mailto:'+profile?.email\"><i class=\"fas fa-envelope-square\"></i> {{profile?.email}}</a>\r\n                </h5> -->\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"fas fa-calendar-week\"></i> <b> Profile created on</b></label> <br>\r\n                    <input type=\"text\" [(ngModel)]=\"profile.date\" class=\"form-control form-control-sm\" readonly\r\n                        placeholder=\"Email\" name=\"ins\" id=\"\">\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"fas fa-mobile\"></i> <b> Mobile</b></label> <br>\r\n                    <input type=\"text\" [(ngModel)]=\"profile.mobile\" class=\"form-control form-control-sm\" readonly\r\n                        placeholder=\"mobile\" name=\"ins\" id=\"\">\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"fas fa-baby-carriage\"></i> <b> Property rented</b> </label>\r\n                    <input type=\"text\" [(ngModel)]=\"profile.properties\" name=\"email\"\r\n                        class=\"form-control form-control-sm\" readonly placeholder=\"Property rented\" name=\"ins\" id=\"\">\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"fas fa-border-none\"></i> <b> Property owned</b> </label>\r\n                    <input type=\"text\" [(ngModel)]=\"profile.owned\" name=\"email\" class=\"form-control form-control-sm\"\r\n                        readonly placeholder=\"Property owned\" name=\"ins\" id=\"\">\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"card-footer text-muted\">\r\n                #{{profile?._id}}\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h5 id=\"edit\" class=\"card-title\"> <a name=\"edit\"> Update user profile</a></h5>\r\n                <hr>\r\n                <div class=\"uk-margin\">\r\n                    <label><i class=\"fab fa-instagram\"></i> <b> Update with instagram </b> </label>\r\n                    <input type=\"text\" [(ngModel)]=\"instaname\" class=\"form-control form-control-sm\"\r\n                        placeholder=\"username\" name=\"ins\" id=\"\">\r\n                    <br>\r\n                    <button (click)=\"profilo()\" class=\"btn btn-sm rr btn-outline-dark\">\r\n                        <i class=\"fab fa-instagram\"></i> Get insta profile</button>\r\n\r\n\r\n                    <!-- {{instapay|json}} -->\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <div class=\"uk-form-label\">Gender</div>\r\n                    <div class=\"uk-form-controls\">\r\n                        <label><input [checked]=\"profile.gender == 'male'\" (click)=\"profile.gender = 'male'\"\r\n                                class=\"uk-radio\" type=\"radio\" name=\"radio1\">\r\n                            Male </label> &nbsp;&nbsp;\r\n                        <label><input [checked]=\"profile.gender == 'female'\" (click)=\"profile.gender = 'female'\"\r\n                                name=\"email\" class=\"uk-radio\" type=\"radio\" name=\"radio1\"> Female</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <div class=\"uk-form-label\">Date of birth</div>\r\n                    <input type=\"date\" [(ngModel)]=\"profile.dob\" name=\"email\" class=\"form-control form-control-sm\"\r\n                        placeholder=\"Date of birth\" name=\"dob\" id=\"\">\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <div class=\"uk-form-label\">Bio</div>\r\n                    <textarea name=\"\" [(ngModel)]=\"profile.bio\" name=\"bio\" id=\"\" rows=\"4\" placeholder=\"Bio\"\r\n                        class=\"form-control form-control-sm\"></textarea>\r\n                </div>\r\n                <div class=\"uk-margin\">\r\n                    <div class=\"uk-form-label\">Feedback</div>\r\n                    <textarea name=\"\" [(ngModel)]=\"profile.feed\" name=\"feed\" id=\"\" rows=\"2\" placeholder=\"Feedback\"\r\n                        class=\"form-control form-control-sm\"></textarea>\r\n                </div>\r\n                <button (click)=\"doloadprofile()\" *ngIf=\"profile?.update =='1'\"\r\n                    class=\"btn rr btn-outline-primary\">Update\r\n                    again</button>\r\n                <button (click)=\"loadprofile()\" *ngIf=\"profile?.update =='0'\"\r\n                    class=\"btn rr btn-outline-primary\">Update</button>\r\n            </div>\r\n            <!-- <div class=\"card-footer text-muted\">\r\n                #{{profile?._id}}\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 card-left\">\r\n        <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\r\n            <div class=\"card-body\">\r\n                <h4>Communication address.</h4>\r\n                <!-- <i class=\"fas fa-chevron-down expand\" (mouseover)=\"sidemenu = !sidemenu\"\r\n                    (click)=\"sidemenu = !sidemenu\"></i> -->\r\n                <form class=\"uk-grid-small\" uk-grid>\r\n                    <div class=\"uk-width-1-3@s\">\r\n                        <label for=\"\">Permenant location Landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\r\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.landmark\" name=\"land\" type=\"text\"\r\n                            uk-tooltip=\"title:Permenant location Landmark;pos:top;\" placeholder=\"Landmark\">\r\n                    </div>\r\n                    <div class=\"uk-width-1-3@s\">\r\n                        <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\r\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.door\" name=\"door\" type=\"text\"\r\n                            uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\r\n                    </div>\r\n                    <div class=\"uk-width-1-3@s\">\r\n                        <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\r\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.loc\" name=\"loc\" type=\"text\"\r\n                            uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\r\n                            placeholder=\"Locality / Apartment / Soceity\">\r\n                    </div>\r\n                    <div class=\"uk-width-1-3@s\">\r\n                        <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\r\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.state\" name=\"state\" type=\"text\"\r\n                            uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\r\n                    </div>\r\n                    <div class=\"uk-width-1-3@s\">\r\n                        <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\r\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.cty\" name=\"cty\" type=\"text\"\r\n                            uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\r\n                    </div>\r\n                    <div class=\"uk-width-1-3@s\">\r\n                        <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\r\n                        <input class=\"form-control form-control-sm\" [(ngModel)]=\"prof.pin\" name=\"pin\" type=\"number\"\r\n                            uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\r\n                    </div>\r\n                    <div class=\"\">\r\n                        <button (click)=\"profiles()\" style=\"float: right;\" class=\"btn rr btn-outline-primary\">Set\r\n                            profile</button>\r\n                    </div>\r\n                    <!-- {{prof|json}} -->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/one/one.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room/one/one.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 card-left\">\n    <div class=\" \" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n        <div class=\" \">\n            <legend>Bachelor / students <small>Individual</small></legend>\n            <form class=\"uk-grid-small\" uk-grid>\n                <div class=\"uk-width-1-1@s\">\n                    <div class=\"js-upload uk-placeholder uk-text-center\">\n                        <span uk-icon=\"icon: cloud-upload\"></span>\n                        <span class=\"uk-text-middle\">&nbsp;&nbsp;Attach image by dropping them here or</span>\n                        <div uk-form-custom>\n                            <input (change)=\"files($event)\" type=\"file\" multiple>\n                            <span class=\"uk-link\">&nbsp;selecting one</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Number of house mates</label>&nbsp;\n                    <input class=\"form-control\" [(ngModel)]=\"prop.mates\" name=\"mates\" type=\"number\"\n                        uk-tooltip=\"title:Number of house mates;pos:top;\" placeholder=\"Number of house mates\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Accomadation available</label>&nbsp;\n                    <input class=\"form-control\" [(ngModel)]=\"prop.acc\" name=\"acc\" type=\"number\"\n                        uk-tooltip=\"title:Accomadation available;pos:top;\" placeholder=\"Accomadation available\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Property landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.landmark\" name=\"landmark\" type=\"text\"\n                        uk-tooltip=\"title:Property landmark;pos:top;\" placeholder=\"Property landmark\">\n                </div>\n                <div class=\"uk-width-1-1@s\">\n                    <label for=\"\">Property type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                    <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.htype\" name=\"type\" id=\"\"\n                        uk-tooltip=\"title:Property type;pos:top;\" placeholder=\"Property type\">\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" alt=\"\" class=\"home\">\n                            House\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" class=\"home\" alt=\"\">Apartment\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" class=\"home\" alt=\"\">PG-Paying\n                            Guest\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" class=\"home\" alt=\"\">Hostel\n                        </option>\n                    </select>\n                </div>\n\n                <!-- <div class=\"uk-width-1-2@s\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Additional lookups</label>\n                        <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n                            <option>Individual house</option>\n                            <option>Apartment</option>\n                            <option>Flat</option>\n                            <option>Villa</option>\n                            <option>PG</option>\n                        </select>\n                    </div>\n                </div> -->\n                <div class=\"uk-width-1-1@s\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Additional information</label>\n                        <textarea class=\"form-control\" [(ngModel)]=\"prop.feed\" name=\"feed\"\n                            placeholder=\"Additional information\" id=\"exampleFormControlTextarea1\" rows=\"4\"></textarea>\n                    </div>\n                </div>\n                <br>\n                <div class=\"uk-width-1-2@s\">\n                    <!-- <label for=\"\">Rent starts from</label>&nbsp;<i -->\n                    <!-- class=\"fas fa-step-backward\"></i>&nbsp;{{prop.starts}} -->\n                    <i class=\"fas rup fa-rupee-sign\"></i>\n                    <input type=\"text\" class=\"form-control\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        uk-tooltip=\"title:Rent starts from;pos:top;\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <i class=\"fas rup fa-rupee-sign\"></i>\n                    <!-- <span class=\"\">{{prop.starts - props.ends}}</span> -->\n                    <!-- <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;{{prop.ends}} -->\n                    <input type=\"text\" class=\"form-control\" id=\"ssd\" [(ngModel)]=\"prop.ends\" name=\"ends\"\n                        uk-tooltip=\"title:Rent ends with;pos:top;\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent starts from</label>&nbsp;<i class=\"fas fa-step-backward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        step=\"1000\" min=\"0\" max=\"10000\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"ssd\" [(ngModel)]=\"prop.ends\" step=\"1000\" min=\"0\"\n                        max=\"10000\" name=\"ends\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.add\" name=\"add\" type=\"text\"\n                        uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.loc\" name=\"loc\" type=\"text\"\n                        uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\n                        placeholder=\"Locality / Apartment / Soceity\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.state\" name=\"state\" type=\"text\"\n                        uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.country\" name=\"country\" type=\"text\"\n                        uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"prop.pin\" name=\"pin\"\n                        uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Owner type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                    <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.type\" name=\"type\" id=\"\"\n                        uk-tooltip=\"title:Owner type;pos:top;\" placeholder=\"Owner type\">\n                        <option>First</option>\n                        <option>Second</option>\n                        <option>Broker</option>\n                        <option>NRI</option>\n                    </select>\n                </div>\n                <!-- {{prop|json}} -->\n            </form>\n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Email address</label>\n                        <input type=\"email\" name=\"ddki\" [(ngModel)]=\"profile.email\" readonly class=\"form-control\"\n                            id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Mobile number</label>\n                        <input type=\"number\" name=\"ddksi\" [(ngModel)]=\"profile.mobile\" readonly class=\"form-control\"\n                            id=\"exampleFormContf rolInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Gender</label>\n                        <input type=\"text\" name=\"ddrwksi\" [(ngModel)]=\"profile.gender\" readonly class=\"form-control\"\n                            id=\"exampleFormdfControlInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Full name</label>\n                        <input type=\"text\" name=\"ddkersi\" [(ngModel)]=\"profile.fullname\" readonly class=\"form-control\"\n                            id=\"exampleFormContrsfolInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n            </div>\n            <button (click)=\"props()\" class=\"btn btn-primary btn-block\">Post Property</button>\n\n        </div>\n    </div>\n    <br> <br>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<!-- This is a button toggling the modal -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/three/three.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room/three/three.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-md-12 card-left\">\n    <div class=\" \" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n        <div class=\" \">\n            <legend>Workers <small>Short term</small></legend>\n            <form class=\"uk-grid-small\" uk-grid>\n                <div class=\"uk-width-1-1@s\">\n                    <div class=\"js-upload uk-placeholder uk-text-center\">\n                        <span uk-icon=\"icon: cloud-upload\"></span>\n                        <span class=\"uk-text-middle\">&nbsp;&nbsp;Attach image by dropping them here or</span>\n                        <div uk-form-custom>\n                            <input (change)=\"files($event)\" type=\"file\" multiple>\n                            <span class=\"uk-link\">&nbsp;selecting one</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Number of house mates</label>&nbsp;\n                    <input class=\"form-control\" [(ngModel)]=\"prop.mates\" name=\"mates\" type=\"number\"\n                        uk-tooltip=\"title:Number of house mates;pos:top;\" placeholder=\"Number of house mates\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Accomadation available</label>&nbsp;\n                    <input class=\"form-control\" [(ngModel)]=\"prop.acc\" name=\"acc\" type=\"number\"\n                        uk-tooltip=\"title:Accomadation available;pos:top;\" placeholder=\"Accomadation available\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Property landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.landmark\" name=\"landmark\" type=\"text\"\n                        uk-tooltip=\"title:Property landmark;pos:top;\" placeholder=\"Property landmark\">\n                </div>\n                <div class=\"uk-width-1-1@s\">\n                    <label for=\"\">Property type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                    <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.htype\" name=\"type\" id=\"\"\n                        uk-tooltip=\"title:Property type;pos:top;\" placeholder=\"Property type\">\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" alt=\"\" class=\"home\">\n                            House\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" class=\"home\"\n                                alt=\"\">Apartment\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" class=\"home\"\n                                alt=\"\">PG-Paying Guest\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" class=\"home\"\n                                alt=\"\">Hostel\n                        </option>\n                    </select>\n                </div>\n\n                <!-- <div class=\"uk-width-1-2@s\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Additional lookups</label>\n                        <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n                            <option>Individual house</option>\n                            <option>Apartment</option>\n                            <option>Flat</option>\n                            <option>Villa</option>\n                            <option>PG</option>\n                        </select>\n                    </div>\n                </div> -->\n                <div class=\"uk-width-1-1@s\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Additional information</label>\n                        <textarea class=\"form-control\" [(ngModel)]=\"prop.feed\" name=\"feed\"\n                            placeholder=\"Additional information\" id=\"exampleFormControlTextarea1\"\n                            rows=\"4\"></textarea>\n                    </div>\n                </div>\n                <br>\n                <div class=\"uk-width-1-2@s\">\n                    <!-- <label for=\"\">Rent starts from</label>&nbsp;<i -->\n                    <!-- class=\"fas fa-step-backward\"></i>&nbsp;{{prop.starts}} -->\n                    <i class=\"fas rup fa-rupee-sign\"></i>\n                    <input type=\"text\" class=\"form-control\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        uk-tooltip=\"title:Rent starts from;pos:top;\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <i class=\"fas rup fa-rupee-sign\"></i>\n                    <!-- <span class=\"\">{{prop.starts - props.ends}}</span> -->\n                    <!-- <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;{{prop.ends}} -->\n                    <input type=\"text\" class=\"form-control\" id=\"ssd\" [(ngModel)]=\"prop.ends\" name=\"ends\"\n                        uk-tooltip=\"title:Rent ends with;pos:top;\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent starts from</label>&nbsp;<i class=\"fas fa-step-backward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        step=\"1000\" min=\"0\" max=\"10000\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"ssd\" [(ngModel)]=\"prop.ends\" step=\"1000\"\n                        min=\"0\" max=\"10000\" name=\"ends\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.add\" name=\"add\" type=\"text\"\n                        uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.loc\" name=\"loc\" type=\"text\"\n                        uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\n                        placeholder=\"Locality / Apartment / Soceity\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.state\" name=\"state\" type=\"text\"\n                        uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.country\" name=\"country\" type=\"text\"\n                        uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"prop.pin\" name=\"pin\"\n                        uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Owner type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                    <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.type\" name=\"type\" id=\"\"\n                        uk-tooltip=\"title:Owner type;pos:top;\" placeholder=\"Owner type\">\n                        <option>First</option>\n                        <option>Second</option>\n                        <option>Broker</option>\n                        <option>NRI</option>\n                    </select>\n                </div>\n                <!-- {{prop|json}} -->\n            </form>\n            <br>\n            <button (click)=\"props()\" class=\"btn btn-primary btn-block\">Set Property</button>\n\n        </div>\n    </div>\n    <br> <br>\n</div><div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/two/two.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room/two/two.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 card-left\">\n    <div class=\" \" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n        <div class=\" \">\n            <legend>Family / womens <small>Individual</small></legend>\n            <form class=\"uk-grid-small\" uk-grid>\n                <div class=\"uk-width-1-1@s\">\n                    <div class=\"js-upload uk-placeholder uk-text-center\">\n                        <span uk-icon=\"icon: cloud-upload\"></span>\n                        <span class=\"uk-text-middle\">&nbsp;&nbsp;Attach image by dropping them here or</span>\n                        <div uk-form-custom>\n                            <input (change)=\"files($event)\" type=\"file\" multiple>\n                            <span class=\"uk-link\">&nbsp;selecting one</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Number of house mates</label>&nbsp;\n                    <input class=\"form-control\" [(ngModel)]=\"prop.mates\" name=\"mates\" type=\"number\"\n                        uk-tooltip=\"title:Number of house mates;pos:top;\" placeholder=\"Number of house mates\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Accomadation available</label>&nbsp;\n                    <input class=\"form-control\" [(ngModel)]=\"prop.acc\" name=\"acc\" type=\"number\"\n                        uk-tooltip=\"title:Accomadation available;pos:top;\" placeholder=\"Accomadation available\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Property landmark</label>&nbsp;<i class=\"fas fa-map-marker\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.landmark\" name=\"landmark\" type=\"text\"\n                        uk-tooltip=\"title:Property landmark;pos:top;\" placeholder=\"Property landmark\">\n                </div>\n                <div class=\"uk-width-1-1@s\">\n                    <label for=\"\">Property type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                    <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.htype\" name=\"type\" id=\"\"\n                        uk-tooltip=\"title:Property type;pos:top;\" placeholder=\"Property type\">\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953503.svg\" alt=\"\" class=\"home\">\n                            House\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953541.svg\" class=\"home\"\n                                alt=\"\">Apartment\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953546.svg\" class=\"home\"\n                                alt=\"\">PG-Paying Guest\n                        </option>\n                        <option>\n                            <img src=\"https://image.flaticon.com/icons/svg/953/953482.svg\" class=\"home\"\n                                alt=\"\">Hostel\n                        </option>\n                    </select>\n                </div>\n\n                <!-- <div class=\"uk-width-1-2@s\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Additional lookups</label>\n                        <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n                            <option>Individual house</option>\n                            <option>Apartment</option>\n                            <option>Flat</option>\n                            <option>Villa</option>\n                            <option>PG</option>\n                        </select>\n                    </div>\n                </div> -->\n                <div class=\"uk-width-1-1@s\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Additional information</label>\n                        <textarea class=\"form-control\" [(ngModel)]=\"prop.feed\" name=\"feed\"\n                            placeholder=\"Additional information\" id=\"exampleFormControlTextarea1\"\n                            rows=\"4\"></textarea>\n                    </div>\n                </div>\n                <br>\n                <div class=\"uk-width-1-2@s\">\n                    <!-- <label for=\"\">Rent starts from</label>&nbsp;<i -->\n                    <!-- class=\"fas fa-step-backward\"></i>&nbsp;{{prop.starts}} -->\n                    <i class=\"fas rup fa-rupee-sign\"></i>\n                    <input type=\"text\" class=\"form-control\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        uk-tooltip=\"title:Rent starts from;pos:top;\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <i class=\"fas rup fa-rupee-sign\"></i>\n                    <!-- <span class=\"\">{{prop.starts - props.ends}}</span> -->\n                    <!-- <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;{{prop.ends}} -->\n                    <input type=\"text\" class=\"form-control\" id=\"ssd\" [(ngModel)]=\"prop.ends\" name=\"ends\"\n                        uk-tooltip=\"title:Rent ends with;pos:top;\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent starts from</label>&nbsp;<i class=\"fas fa-step-backward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        step=\"1000\" min=\"0\" max=\"10000\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"ssd\" [(ngModel)]=\"prop.ends\" step=\"1000\"\n                        min=\"0\" max=\"10000\" name=\"ends\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Door# / Street name</label>&nbsp;<i class=\"fas fa-thumbtack\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.add\" name=\"add\" type=\"text\"\n                        uk-tooltip=\"title:Door# / Street name;pos:top;\" placeholder=\"Door# / Street name\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Locality / Apartment / Soceity</label>&nbsp;<i class=\"fas fa-search-location\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.loc\" name=\"loc\" type=\"text\"\n                        uk-tooltip=\"title:Locality / Apartment / Soceity;pos:top;\"\n                        placeholder=\"Locality / Apartment / Soceity\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">State</label>&nbsp;<i class=\"fas fa-map-marked-alt\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.state\" name=\"state\" type=\"text\"\n                        uk-tooltip=\"title:State;pos:top;\" placeholder=\"State\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Country</label>&nbsp;<i class=\"fas fa-bookmark\"></i>\n                    <input class=\"form-control\" [(ngModel)]=\"prop.country\" name=\"country\" type=\"text\"\n                        uk-tooltip=\"title:Country;pos:top;\" placeholder=\"Country\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Pincode</label>&nbsp;<i class=\"fas fa-list-ol\"></i>\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"prop.pin\" name=\"pin\"\n                        uk-tooltip=\"title:Pincode;pos:top;\" placeholder=\"Pincode\">\n                </div>\n                <div class=\"uk-width-1-3@s\">\n                    <label for=\"\">Owner type</label>&nbsp;<i class=\"fas fa-compress\"></i>\n                    <select class=\"uk-select\" name=\"\" [(ngModel)]=\"prop.type\" name=\"type\" id=\"\"\n                        uk-tooltip=\"title:Owner type;pos:top;\" placeholder=\"Owner type\">\n                        <option>First</option>\n                        <option>Second</option>\n                        <option>Broker</option>\n                        <option>NRI</option>\n                    </select>\n                </div>\n                <!-- {{prop|json}} -->\n            </form>\n            <br>\n            <button (click)=\"props()\" class=\"btn btn-primary btn-block\">Set Property</button>\n\n        </div>\n    </div>\n    <br> <br>\n</div><div id=\"snackbar\">{{msg}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shift/shift.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shift/shift.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n  <div class=\"road\">\n    <div class=\"viewboard as-mob\">\n      <h1>Login/Register&nbsp;<i class=\"fas fa-users\"></i> </h1>\n      <small class=\"small\">Please login with your crediantials</small>\n      <!-- <br class=\"as-mob\"> <br class=\"as-mob\"> -->\n      <!--<small class=\"subsmall\">For new user please register here</small>-->\n      <img src=\"./assets/50ee4ac981890b346eac69c0cf6f45ef.gif\" *ngIf=\"enter\" class=\"imgc\" alt=\"\">\n      <img src=\"./assets/revizo-5.gif\" *ngIf=\"logdata\" alt=\"\" class=\"imgc\">\n      <img src=\"https://gatesbbq.com/wp-content/uploads/2017/04/checkmarksuccess.gif\" *ngIf=\"!logdata && !enter\"\n        class=\"imgc\" alt=\"\">\n      <i href=\"#modal-center\" uk-toggle class=\"fas query fa-question-circle\"></i>\n    </div>\n    <div class=\"formboard\">\n      <form> <br class=\"as-non-mob\">\n        <!-- <br class=\"as-non-mob\"> -->\n        <fieldset class=\"uk-fieldset\">\n\n          <legend class=\"uk-\">User Board&nbsp;<i class=\"far fa-user\"></i></legend>\n\n          <img src=\"./assets/Cover_UIUX_4.gif\" width=\"75%\" class=\"covera\" alt=\"\">\n          <div class=\"uk-margin\" uk-tooltip=\"title:Username;pos:top\">\n            <!-- <label for=\"\"> <i class=\"fas fa-user\"></i> Username</label> <i uk-tooltip=\"title:Username;pos:left\" class=\"fas bgg fa-user\"></i> -->\n            <input class=\"form-control form-control-sm\" [(ngModel)]=\"login.username\" name=\"username\" type=\"text\"\n              placeholder=\"Username\">\n            <small class=\"look\" style=\"float:right\">*Username for Login/Register</small>\n          </div>\n          <div class=\"uk-margin\" uk-tooltip=\"title:Password;pos:top\">\n            <!-- <label for=\"\"> <i class=\"fas  fa-key\"></i> Password</label> <i uk-tooltip=\"title:Password;pos:left\" class=\"fas bgg fa-key\"></i> -->\n            <input class=\"form-control form-control-sm\" [(ngModel)]=\"login.password\" name=\"password\" type=\"password\"\n              placeholder=\"Password\">\n            <small class=\"look\" style=\"float:right\">*Password for Login/Register</small>\n          </div>\n          <div class=\"uk-margin\">\n            <label><input class=\"uk-checkbox\" [(ngModel)]=\"goo\" name=\"f\" type=\"checkbox\"> Agree the terms &\n              conditions.</label>\n          </div>\n          <!-- <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-font\"></i> Phrase</label> <i uk-tooltip=\"title:Custom phrase;pos:left\" class=\"fas bgg fa-font\"></i>\n            <input class=\"form-control form-control-sm\" [(ngModel)]=\"login.phrase\" name=\"phrase\" type=\"text\" placeholder=\"Custom Phrase\">\n            <small class=\"look\" style=\"float:right\">Optional for login</small>\n          </div> -->\n          <!-- <div class=\"uk-margin\">\n            <label for=\"\"><i class=\"fas fa-sort-numeric-down\"></i> Lucky number&nbsp; {{login?.lucky}} </label>\n            <input class=\"uk-range\" [title]=\"login.lucky\" [(ngModel)]=\"login.lucky\" min=\"0\" max=\"100\" step=\"1\" name=\"lucky\" type=\"range\">\n            <small class=\"look\" style=\"float:right\">Optional for login</small>\n          </div> -->\n          <button (click)=\"logins()\" [disabled]=\"!goo\" class=\"btn-block btn btn-primary\">Login</button>\n\n          <button href=\"#modal-reg\" [disabled]=\"!goo\" uk-toggle\n            class=\"btn-block btn btn-primary\">Register</button>\n          <br>\n          <!-- <div class=\"alert alert-warning\" *ngIf=\"reg\">\n            {{regData|slice:0:9}} <i ngxClipboard [cbContent]=\"regData\" class=\"far fa-copy\" (click)=\"eat('Copied',2)\" style=\"float: right\"></i>\n          </div> -->\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n    <button style=\"background-color: white\" class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <img src=\"https://miro.medium.com/max/1400/1*Xs2WKJ2jHKHhJEL29c4AyQ.gif\" style=\"width: 100%;\" alt=\"\">\n  </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<div class=\"loader\">\n  <i class=\"fas fa-spinner as-non-mob\" *ngIf=\"logdata\"></i>\n</div>\n\n\n\n<div id=\"modal-reg\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <form action=\"\">\n      <div class=\"uk-margin\" uk-tooltip=\"title:ConfirmPassword;pos:top\">\n        <label for=\"\"> <i class=\"fas  fa-key\"></i>&nbsp;Confirm Password</label>\n        <!-- <i uk-tooltip=\"title:ConfirmPassword;pos:left\"\n          class=\"fas bgg fa-key\"></i> -->\n        <input class=\"form-control form-control-sm\" [(ngModel)]=\"login.cpassword\" name=\"login.cpassword\" type=\"password\"\n          placeholder=\"Confirm Password\">\n        <small class=\"look\" style=\"float:right\">Please Confirm Your Password</small>\n      </div>\n      <div class=\"uk-margin\">\n        <label for=\"\"> <i class=\"fas fa-mobile\"></i> Mobile</label> \n        <input class=\"form-control form-control-sm\" [(ngModel)]=\"login.mobile\" name=\"Mobile\" type=\"text\"\n          placeholder=\"Mobile\">\n       </div>\n      <div class=\"uk-margin\">\n        <label for=\"\"><i class=\"fas fa-envelope-square\"></i> Email </label>\n        <input class=\"form-control form-control-sm\"  [(ngModel)]=\"login.email\"name=\"lucky\"\n          type=\"email\">\n       </div>\n      <button class=\"uk-button uk-button-primary uk-modal-close btn-block\" (click)=\"register()\">Register</button>\n    </form>\n  </div>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wantroom/wantroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wantroom/wantroom.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- {{profile|json}} -->\n<div class=\"container\">\n    <div class=\"car\">\n        <h5>Room looking for&nbsp;<i class=\"fas fa-home\"></i> </h5>\n        <hr>\n        <div class=\"card-\">\n            <div class=\"\" style=\"text-align: right;\">\n                <i class=\"fas fa-user\"></i>&nbsp;{{profile?.username}}\n            </div>\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect1\">Room looking <span\n                            class=\"badge badge-warning\">Person</span></label>\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <!-- <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent starts from</label>&nbsp;<i class=\"fas fa-step-backward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"asaf\" [(ngModel)]=\"prop.starts\" name=\"starts\"\n                        step=\"1000\" min=\"0\" max=\"10000\">\n                </div>\n                <div class=\"uk-width-1-2@s\">\n                    <label for=\"\">Rent ends with</label>&nbsp;<i class=\"fas fa-step-forward\"></i>&nbsp;\n                    <input type=\"range\" class=\"uk-range\" value=\"0\" id=\"ssd\" [(ngModel)]=\"prop.ends\" step=\"1000\" min=\"0\"\n                        max=\"10000\" name=\"ends\">\n                </div> -->\n\n                <!-- {{positions|json}} -->\n                <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"search\" name=\"search\"\n                        placeholder=\"Search for major cities\" id=\"\">\n                    <div class=\" cardss\" *ngIf=\"search.length > 1\">\n                        <span (click)=\"setLoc(citys)\" class=\"badge badge-primary\"\n                            *ngFor=\"let citys of city|filter:search; let i=index\">\n                            {{citys?.city}}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"alert alert-info\" *ngIf=\"pop\">\n                    As per the Indian Goverment records\n                    {{positions?.city}} has <b>\n                        {{positions?.population}}</b> Populations.\n                </div>\n                <div class=\"text-center\">\n                    <b>Search by city name and set</b>\n                    <br> -OR- <br>\n                    <h5>Geo <span (click)=\"getloc()\" class=\"badge badge-warning\">Get current location</span>\n                    </h5>\n                </div>\n\n                <div class=\"row\">\n                    <br>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Latitude</label>\n                            <input type=\"number\" name=\"dwefdksi\" [(ngModel)]=\"positions.lat\" readonly\n                                class=\"form-control\" id=\"exampleFormConolInput1\" placeholder=\"name@example.com\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Latitude</label>\n                            <input type=\"number\" name=\"ddksssefsi\" [(ngModel)]=\"positions.lng\" readonly\n                                class=\"form-control\" id=\"exampleFormContf rolput1\" placeholder=\"name@example.com\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">With in <small>KM's</small> </label>\n                            <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                <option>5</option>\n                                <option>10</option>\n                                <option>15</option>\n                                <option>20</option>\n                                <option>Any</option>\n                            </select>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Set the location</label>\n                            <button class=\"btn- btn btn-block btn-primary\">Set</button>\n                        </div>\n                    </div> -->\n                </div>\n\n                <div class=\"\">\n                    <button class=\"btn-md btn fds btn-outline-primary\">Find my room</button>\n                </div>\n            </form>\n            <br>\n            <hr class=\"uk-divider-icon\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Email address</label>\n                        <input type=\"email\" name=\"ddki\" [(ngModel)]=\"profile.email\" readonly class=\"form-control\"\n                            id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Mobile number</label>\n                        <input type=\"number\" name=\"ddksi\" [(ngModel)]=\"profile.mobile\" readonly class=\"form-control\"\n                            id=\"exampleFormContf rolInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Gender</label>\n                        <input type=\"text\" name=\"ddrwksi\" [(ngModel)]=\"profile.gender\" readonly class=\"form-control\"\n                            id=\"exampleFormdfControlInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlInput1\">Fullname</label>\n                        <input type=\"text\" name=\"ddkersi\" [(ngModel)]=\"profile.fullname\" readonly class=\"form-control\"\n                            id=\"exampleFormContrsfolInput1\" placeholder=\"name@example.com\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

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
/* harmony import */ var src_app_lander_lander_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lander/lander.component */ "./src/app/lander/lander.component.ts");
/* harmony import */ var src_app_water_water_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/water/water.component */ "./src/app/water/water.component.ts");
/* harmony import */ var src_app_application_locality_locality_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/application/locality/locality.component */ "./src/app/application/locality/locality.component.ts");
/* harmony import */ var src_app_shift_shift_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shift/shift.component */ "./src/app/shift/shift.component.ts");
/* harmony import */ var src_app_unshift_unshift_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/unshift/unshift.component */ "./src/app/unshift/unshift.component.ts");
/* harmony import */ var src_app_rental_rental_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/rental/rental.component */ "./src/app/rental/rental.component.ts");
/* harmony import */ var _application_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application/profile/profile.component */ "./src/app/application/profile/profile.component.ts");
/* harmony import */ var _application_property_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application/property/property.component */ "./src/app/application/property/property.component.ts");
/* harmony import */ var _application_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application/profile-info/profile-info.component */ "./src/app/application/profile-info/profile-info.component.ts");
/* harmony import */ var _application_property_info_property_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./application/property-info/property-info.component */ "./src/app/application/property-info/property-info.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _application_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application/disclaimer/disclaimer.component */ "./src/app/application/disclaimer/disclaimer.component.ts");
/* harmony import */ var _application_userdata_userdata_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/userdata/userdata.component */ "./src/app/application/userdata/userdata.component.ts");
/* harmony import */ var _wantroom_wantroom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wantroom/wantroom.component */ "./src/app/wantroom/wantroom.component.ts");

















const routes = [
    {
        path: "lander",
        component: src_app_lander_lander_component__WEBPACK_IMPORTED_MODULE_3__["LanderComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    },
    {
        path: "",
        redirectTo: "/shift",
        pathMatch: "full"
    },
    {
        path: "water",
        component: src_app_water_water_component__WEBPACK_IMPORTED_MODULE_4__["WaterComponent"]
    }, {
        path: "wantroom",
        component: _wantroom_wantroom_component__WEBPACK_IMPORTED_MODULE_16__["WantroomComponent"]
    },
    {
        path: "locality",
        component: src_app_application_locality_locality_component__WEBPACK_IMPORTED_MODULE_5__["LocalityComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    }, {
        path: "userdata",
        component: _application_userdata_userdata_component__WEBPACK_IMPORTED_MODULE_15__["UserdataComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    }, {
        path: "disclaimer",
        component: _application_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_14__["DisclaimerComponent"],
    },
    {
        path: "shift",
        component: src_app_shift_shift_component__WEBPACK_IMPORTED_MODULE_6__["ShiftComponent"]
    },
    {
        path: "unshift",
        component: src_app_unshift_unshift_component__WEBPACK_IMPORTED_MODULE_7__["UnshiftComponent"]
    },
    {
        path: "rental",
        component: src_app_rental_rental_component__WEBPACK_IMPORTED_MODULE_8__["RentalComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    },
    {
        path: "profile",
        component: _application_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    },
    {
        path: "property",
        component: _application_property_property_component__WEBPACK_IMPORTED_MODULE_10__["PropertyComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    },
    {
        path: "profile-info",
        component: _application_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInfoComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    },
    {
        path: "property-info",
        component: _application_property_info_property_info_component__WEBPACK_IMPORTED_MODULE_12__["PropertyInfoComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]]
    }
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
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto;\n}\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #03a9f4;\n}\n\n.plus {\n  background-color: #03a9f4;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px;\n}\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #03a9f4;\n  margin: 10px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.desk {\n  padding: 5px 5px;\n}\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite;\n}\n\n.navrow span {\n  color: #03a9f4;\n  transition: font-weight 1s ease-in-out;\n}\n\n.navrow span:hover {\n  font-weight: bold;\n  cursor: pointer;\n  transition: font-weight 1s ease-in;\n}\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite;\n}\n\n.card-right {\n  background-color: #03a9f4;\n  color: #e3f2fd;\n}\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #03a9f4;\n}\n\n.title {\n  background-color: #03a9f4;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px;\n}\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in;\n}\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px;\n  }\n  to {\n    width: 225px;\n  }\n}\n\n@keyframes widthextract {\n  from {\n    width: 0px;\n  }\n  to {\n    width: 225px;\n  }\n}\n\n.usericon {\n  text-align: center;\n  font-size: 40px;\n}\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none;\n}\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer;\n}\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  border-radius: 0px;\n  transition: display 1s ease-in;\n}\n\n.inactive_screen {\n  transition: height 1s ease-in;\n}\n\n.inactive_screen .cardboard {\n  display: none;\n  transition: display 1s ease-in;\n}\n\nth {\n  color: #03a9f4;\n  font-weight: bold;\n}\n\ntr:hover {\n  background-color: #e3f2fd;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px;\n  }\n}\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%;\n}\n\n.sidebar a {\n  padding: 10px;\n  width: 95%;\n  display: flex;\n  margin: 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: #e3f2fd;\n  border: 1px solid #03a9f4;\n  transition: box-shadow 1s ease-in-out;\n}\n\n.sidebar a i {\n  margin: 5px;\n  float: right;\n}\n\n.sidebar a:hover {\n  font-weight: bold;\n}\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n}\n\ni {\n  cursor: pointer;\n}\n\n.activatesidebar {\n  width: 5%;\n}\n\n.activatesidebar a {\n  padding: 10px;\n  float: inherit;\n}\n\n.activatesidebar a span {\n  display: none;\n}\n\n.activatesidebar a i {\n  text-align: center;\n}\n\n.activatesidebar a:hover {\n  box-shadow: none;\n  border: 0px;\n}\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%;\n  border-radius: 0px;\n}\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s;\n}\n\n/* The sidebar menu */\n\n.sidebars {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: #03a9f4;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  transition: 0.5s;\n  /* 0.5 second transition effect to slide in the sidebar */\n}\n\n/* The sidebar links */\n\n.sidebars a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #e3f2fd;\n  display: block;\n  transition: 0.3s;\n}\n\n/* When you mouse over the navigation links, change their color */\n\n.sidebars a:hover {\n  color: #f1f1f1;\n}\n\n/* Position and style the close button (top right corner) */\n\n.sidebars .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n/* The button used to open the sidebar */\n\n.openbtn {\n  font-size: 20px;\n  cursor: pointer;\n  background-color: #111;\n  color: white;\n  padding: 10px 15px;\n  border: none;\n}\n\n.openbtn:hover {\n  background-color: #444;\n}\n\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n\n#main {\n  transition: margin-left 0.5s;\n  /* If you want a transition effect */\n  padding: 20px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n  .sidebars {\n    padding-top: 15px;\n  }\n\n  .sidebars a {\n    font-size: 18px;\n  }\n}\n\n.btnclose {\n  margin: 5px;\n  z-index: 1002;\n  box-shadow: none;\n  border: 0;\n  color: #0d47a1;\n  left: 4px;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSxVQUFBO0VBQ0EseUJBVEs7RUFVTCxnQ0FBQTtFQUNBLGNBQUE7QUNIRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBakJLO0FDZVA7O0FESUE7RUFDRSx5QkFwQks7RUFxQkwsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQXpCSztFQTBCTCxZQUFBO0FDREY7O0FER0E7RUFDRSx5QkE3Qks7RUE4QkwsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFHQSxjQXBDSztFQXFDTCxZQUFBO0FDRkY7O0FES0E7RUFDRTtJQUNFLHVCQUFBO0VDRkY7RURJQTtJQUNFLHlCQUFBO0VDRkY7QUFDRjs7QURKQTtFQUNFO0lBQ0UsdUJBQUE7RUNGRjtFRElBO0lBQ0UseUJBQUE7RUNGRjtBQUNGOztBRElBO0VBQ0UsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0RGOztBREVFO0VBQ0UsY0ExREc7RUEyREgsc0NBQUE7QUNBSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQUo7O0FER0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUNBRjs7QURFQTtFQUNFLHlCQTVFSztFQTZFTCxjQTVFSztBQzZFUDs7QURDQTtFQUNFLHlCQS9FSztFQWdGTCxjQWpGSztBQ21GUDs7QURBQTtFQUNFLHlCQXBGSztFQXFGTCw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUU7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLDhEQUFBO0FDR0o7O0FEQUE7RUFDRTtJQUNFLFVBQUE7RUNHRjtFRERBO0lBQ0UsWUFBQTtFQ0dGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLFVBQUE7RUNHRjtFRERBO0lBQ0UsWUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREZBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDTUo7O0FESEE7RUFDRSw2QkFBQTtBQ01GOztBRExFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDT0o7O0FESkE7RUFDRSxjQWhKSztFQWlKTCxpQkFBQTtBQ09GOztBRExBO0VBQ0UseUJBbkpLO0FDMkpQOztBRExBO0VBQ0U7SUFDRSxhQUFBO0VDUUY7O0VETkE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQ1NGO0FBQ0Y7O0FETkE7RUFDRSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNRRjs7QURQRTtFQUNFLGFBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FoTEc7RUFpTEgseUJBQUE7RUFFQSxxQ0FBQTtBQ09KOztBRE5JO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUNPTjs7QURKRTtFQUVFLGlCQUFBO0FDS0o7O0FEQ0E7RUFHRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQXZNSztFQXdNTCxxQkFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURFRTtFQUNFLGFBQUE7RUFFQSxjQUFBO0FDREo7O0FERUk7RUFDRSxhQUFBO0FDQU47O0FERUk7RUFDRSxrQkFBQTtBQ0FOOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLRTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7QUNGSjs7QURLQSxxQkFBQTs7QUFDQTtFQUNFLFlBQUE7RUFBYyxxQkFBQTtFQUNkLFFBQUE7RUFBVSwwQ0FBQTtFQUNWLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsVUFBQTtFQUFZLGdCQUFBO0VBQ1osTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkF4UEs7RUF3UG9CLFNBQUE7RUFDekIsa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIsaUJBQUE7RUFBbUIsb0NBQUE7RUFDbkIsZ0JBQUE7RUFBa0IseURBQUE7QUNNcEI7O0FESEEsc0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBbFFLO0VBbVFMLGNBQUE7RUFDQSxnQkFBQTtBQ01GOztBREhBLGlFQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ01GOztBREhBLDJEQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01GOztBREhBLHdDQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURIQTtFQUNFLHNCQUFBO0FDTUY7O0FESEEsc0hBQUE7O0FBQ0E7RUFDRSw0QkFBQTtFQUE4QixvQ0FBQTtFQUM5QixhQUFBO0FDT0Y7O0FESkEsZ0lBQUE7O0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VDT0Y7O0VETEE7SUFDRSxlQUFBO0VDUUY7QUFDRjs7QUROQTtFQUdFLFdBQUE7RUFDQSxhQUFBO0VBR0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyazogIzAzYTlmNDtcclxuJGxpdGU6ICNlM2YyZmQ7XHJcblxyXG4uYm9hcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDIwJTtcclxuICAvLyBwYWRkaW5nOiAwcHggMjBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMHB4IDBweCAyNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5vbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnBsdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbi5wb3NidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyByaWdodDogMDtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLmRlc2sge1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbn1cclxuLm5hdnJvdyB7XHJcbiAgbWFyZ2luOiAyNXB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgc3Bhbjpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XHJcbn1cclxuLmNhcmQtcmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG4uY2FyZC1sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDIyNXB4O1xyXG59XHJcbi5kZXNrOmhvdmVyIHtcclxuICAudGl0bGUge1xyXG4gICAgYW5pbWF0aW9uOiB3aWR0aGV4dHJhY3QgNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbmltYXRpb24gNXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB3aWR0aGV4dHJhY3Qge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gIH1cclxufVxyXG4udXNlcmljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5leHBhbmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBhbmltYXRpb246IHJvdGF0ZSAycztcclxufVxyXG4uZXhwYW5kOmhvdmVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxufVxyXG4uY2FyZGJvYXJkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5hY3RpdmVfc2NyZWVuIHtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5pbmFjdGl2ZV9zY3JlZW4ge1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xyXG4gIC5jYXJkYm9hcmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxudGgge1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG50cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmJvYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJGxpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgaSB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkbGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAkbGl0ZTtcclxuICAgIC8vIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuLmV4dHJhY3Qge1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxuICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG59XHJcbi5hY3RpdmF0ZXNpZGViYXIge1xyXG4gIHdpZHRoOiA1JTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG4gIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OiBpbmhlcml0O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICB9XHJcbn1cclxuLmFjdGl2YXRlIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG59XHJcbi5wbHVzOmhvdmVyIHtcclxuICBpIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzO1xyXG4gIH1cclxufVxyXG4vKiBUaGUgc2lkZWJhciBtZW51ICovXHJcbi5zaWRlYmFycyB7XHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXHJcbiAgd2lkdGg6IDA7IC8qIDAgd2lkdGggLSBjaGFuZ2UgdGhpcyB3aXRoIEphdmFTY3JpcHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrOyAvKiBCbGFjayovXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlYmFyICovXHJcbn1cclxuXHJcbi8qIFRoZSBzaWRlYmFyIGxpbmtzICovXHJcbi5zaWRlYmFycyBhIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xyXG4uc2lkZWJhcnMgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIGFuZCBzdHlsZSB0aGUgY2xvc2UgYnV0dG9uICh0b3AgcmlnaHQgY29ybmVyKSAqL1xyXG4uc2lkZWJhcnMgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLyogVGhlIGJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIHNpZGViYXIgKi9cclxuLm9wZW5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm9wZW5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHBhZ2UgY29udGVudCAtIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRvIHB1c2ggdGhlIHBhZ2UgY29udGVudCB0byB0aGUgcmlnaHQgd2hlbiB5b3Ugb3BlbiB0aGUgc2lkZSBuYXZpZ2F0aW9uICovXHJcbiNtYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzOyAvKiBJZiB5b3Ugd2FudCBhIHRyYW5zaXRpb24gZWZmZWN0ICovXHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gIC5zaWRlYmFycyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNpZGViYXJzIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4uYnRuY2xvc2Uge1xyXG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvLyB0b3A6IDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogIzBkNDdhMTtcclxuICBsZWZ0OiA0cHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbiIsIi5ib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDIwJTtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAwcHggMHB4IDI1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ub25saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XG59XG5cbi5wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNlM2YyZmQ7XG4gIG1hcmdpbjogMjVweDtcbn1cblxuLnBvc2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGNvbG9yOiAjMDNhOWY0O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5kZXNrIHtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLm5hdnJvdyB7XG4gIG1hcmdpbjogMjVweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggZ2hvc3R3aGl0ZTtcbn1cbi5uYXZyb3cgc3BhbiB7XG4gIGNvbG9yOiAjMDNhOWY0O1xuICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluLW91dDtcbn1cbi5uYXZyb3cgc3Bhbjpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDFzIGVhc2UtaW47XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XG59XG5cbi5jYXJkLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbiAgY29sb3I6ICNlM2YyZmQ7XG59XG5cbi5jYXJkLWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBjb2xvcjogIzAzYTlmNDtcbn1cblxuLnRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMjI1cHg7XG59XG5cbi5kZXNrOmhvdmVyIC50aXRsZSB7XG4gIGFuaW1hdGlvbjogd2lkdGhleHRyYWN0IDVzO1xuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gNXMgZWFzZS1pbjtcbn1cblxuQGtleWZyYW1lcyB3aWR0aGV4dHJhY3Qge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMHB4O1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMjI1cHg7XG4gIH1cbn1cbi51c2VyaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5kOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XG59XG5cbi5jYXJkYm9hcmQge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hY3RpdmVfc2NyZWVuIC5jYXJkYm9hcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XG59XG5cbi5pbmFjdGl2ZV9zY3JlZW4ge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbjtcbn1cbi5pbmFjdGl2ZV9zY3JlZW4gLmNhcmRib2FyZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcbn1cblxudGgge1xuICBjb2xvcjogIzAzYTlmNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hcy1tb2Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYm9hcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG4uc2lkZWJhciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMjAlO1xufVxuLnNpZGViYXIgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIGEgaSB7XG4gIG1hcmdpbjogNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2lkZWJhciBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5leHRyYWN0IHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNlM2YyZmQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZhdGVzaWRlYmFyIHtcbiAgd2lkdGg6IDUlO1xufVxuLmFjdGl2YXRlc2lkZWJhciBhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGluaGVyaXQ7XG59XG4uYWN0aXZhdGVzaWRlYmFyIGEgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWN0aXZhdGVzaWRlYmFyIGEgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hY3RpdmF0ZXNpZGViYXIgYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uYWN0aXZhdGUge1xuICB3aWR0aDogOTUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5wbHVzOmhvdmVyIGkge1xuICBhbmltYXRpb246IHJvdGF0ZSAxcztcbn1cblxuLyogVGhlIHNpZGViYXIgbWVudSAqL1xuLnNpZGViYXJzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXG4gIHdpZHRoOiAwO1xuICAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxO1xuICAvKiBTdGF5IG9uIHRvcCAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XG4gIC8qIEJsYWNrKi9cbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGViYXIgKi9cbn1cblxuLyogVGhlIHNpZGViYXIgbGlua3MgKi9cbi5zaWRlYmFycyBhIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZTNmMmZkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXG4uc2lkZWJhcnMgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4vKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAodG9wIHJpZ2h0IGNvcm5lcikgKi9cbi5zaWRlYmFycyAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi8qIFRoZSBidXR0b24gdXNlZCB0byBvcGVuIHRoZSBzaWRlYmFyICovXG4ub3BlbmJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ub3BlbmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG59XG5cbi8qIFN0eWxlIHBhZ2UgY29udGVudCAtIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRvIHB1c2ggdGhlIHBhZ2UgY29udGVudCB0byB0aGUgcmlnaHQgd2hlbiB5b3Ugb3BlbiB0aGUgc2lkZSBuYXZpZ2F0aW9uICovXG4jbWFpbiB7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XG4gIC8qIElmIHlvdSB3YW50IGEgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGViYXJzIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuXG4gIC5zaWRlYmFycyBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5idG5jbG9zZSB7XG4gIG1hcmdpbjogNXB4O1xuICB6LWluZGV4OiAxMDAyO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjMGQ0N2ExO1xuICBsZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AppComponent = class AppComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.app = "shift";
        this.state = true;
        this.states = false;
        this.scl = false;
    }
    ngOnInit() {
        if (window.location.pathname === '/shift') {
            this.scl = false;
        }
        else {
            this.scl = true;
        }
        if (window.localStorage.getItem('state') === null) {
            this.states = false;
            this.router.navigate(['/shift']);
            // this.router.navigateByUrl('/shift', { skipLocationChange: true }).then(() => {
            //   this.router.navigate([decodeURI(this.location.path())]);
            // });
        }
        else if (window.localStorage.getItem('state') === undefined) {
            this.states = false;
            this.router.navigate(['/shift']);
            // this.router.navigateByUrl('/shift', { skipLocationChange: true }).then(() => {
            //   this.router.navigate([decodeURI(this.location.path())]);
            // });
        }
        else if (window.localStorage.getItem('state') === 'true') {
            this.states = true;
            console.log(window.localStorage.getItem('state'));
            // this.router.navigate(['/property-info']);
            // this.router.navigateByUrl('/property-info', { skipLocationChange: true }).then(() => {
            //   this.router.navigate([decodeURI(this.location.path())]);
            // });
        }
    }
    logout() {
        // this.eat("Logged out", 1);
        window.localStorage.removeItem("logged");
        window.localStorage.removeItem("state");
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("update");
        this.router.navigate(["/shift"]);
        this.states = false;
        this.scl = false;
        setTimeout(() => {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
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
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _rental_rental_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rental/rental.component */ "./src/app/rental/rental.component.ts");
/* harmony import */ var _application_property_property_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application/property/property.component */ "./src/app/application/property/property.component.ts");
/* harmony import */ var _application_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./application/profile/profile.component */ "./src/app/application/profile/profile.component.ts");
/* harmony import */ var _application_property_info_property_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./application/property-info/property-info.component */ "./src/app/application/property-info/property-info.component.ts");
/* harmony import */ var _application_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./application/profile-info/profile-info.component */ "./src/app/application/profile-info/profile-info.component.ts");
/* harmony import */ var _application_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./application/disclaimer/disclaimer.component */ "./src/app/application/disclaimer/disclaimer.component.ts");
/* harmony import */ var _application_userdata_userdata_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./application/userdata/userdata.component */ "./src/app/application/userdata/userdata.component.ts");
/* harmony import */ var _wantroom_wantroom_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./wantroom/wantroom.component */ "./src/app/wantroom/wantroom.component.ts");
/* harmony import */ var _room_one_one_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./room/one/one.component */ "./src/app/room/one/one.component.ts");
/* harmony import */ var _room_two_two_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./room/two/two.component */ "./src/app/room/two/two.component.ts");
/* harmony import */ var _room_three_three_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./room/three/three.component */ "./src/app/room/three/three.component.ts");



























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
            _rental_rental_component__WEBPACK_IMPORTED_MODULE_16__["RentalComponent"],
            _application_property_property_component__WEBPACK_IMPORTED_MODULE_17__["PropertyComponent"],
            _application_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
            _application_property_info_property_info_component__WEBPACK_IMPORTED_MODULE_19__["PropertyInfoComponent"],
            _application_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_20__["ProfileInfoComponent"],
            _application_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_21__["DisclaimerComponent"],
            _application_userdata_userdata_component__WEBPACK_IMPORTED_MODULE_22__["UserdataComponent"],
            _wantroom_wantroom_component__WEBPACK_IMPORTED_MODULE_23__["WantroomComponent"],
            _room_one_one_component__WEBPACK_IMPORTED_MODULE_24__["OneComponent"],
            _room_two_two_component__WEBPACK_IMPORTED_MODULE_25__["TwoComponent"],
            _room_three_three_component__WEBPACK_IMPORTED_MODULE_26__["ThreeComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]],
        providers: [src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_12__["LocalityService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/application/disclaimer/disclaimer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/application/disclaimer/disclaimer.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cdf {\n  margin: auto;\n  display: block;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZGlzY2xhaW1lci9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xccmFjZS9zcmNcXGFwcFxcYXBwbGljYXRpb25cXGRpc2NsYWltZXJcXGRpc2NsYWltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL2Rpc2NsYWltZXIvZGlzY2xhaW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNkZntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSIsIi5jZGYge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/application/disclaimer/disclaimer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/application/disclaimer/disclaimer.component.ts ***!
  \****************************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisclaimerComponent = class DisclaimerComponent {
    constructor() { }
    ngOnInit() {
    }
};
DisclaimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disclaimer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./disclaimer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/disclaimer/disclaimer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./disclaimer.component.scss */ "./src/app/application/disclaimer/disclaimer.component.scss")).default]
    })
], DisclaimerComponent);



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
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  width: 50px;\n  position: absolute;\n  right: 0;\n  margin: 20px;\n}\n\n.cardbody {\n  padding: 10px;\n}\n\ntr {\n  padding: 5px;\n}\n\n.uk-table td {\n  padding: 7px 10px;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS1pbmZvL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxyYWNlL3NyY1xcYXBwXFxhcHBsaWNhdGlvblxccHJvZmlsZS1pbmZvXFxwcm9maWxlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb2ZpbGUtaW5mby9wcm9maWxlLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcHJvZmlsZS1pbmZvL3Byb2ZpbGUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNhcmRib2R5e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG50cntcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4udWstdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59IiwiLmhvbWUge1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY2FyZGJvZHkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG50ciB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnVrLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59Il19 */");

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
        this.loc.profileinfo().subscribe(data => {
            this.profs = data;
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
    files(event) {
        console.log(event);
        this.eve = event;
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
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  width: 50px;\n  position: absolute;\n  right: 0;\n  margin: 20px;\n}\n\n.cardbody {\n  padding: 10px;\n}\n\n.card {\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px 4px whitesmoke;\n}\n\ntr {\n  padding: 5px;\n}\n\n.uk-table td {\n  padding: 7px 10px;\n  vertical-align: top;\n}\n\n.owner {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 5px;\n}\n\n.badge {\n  margin: 5px;\n}\n\n.adds {\n  text-align: left;\n  margin: 5px;\n}\n\n.adds i {\n  font-size: 22px;\n  color: cornflowerblue;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydHktaW5mby9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xccmFjZS9zcmNcXGFwcFxcYXBwbGljYXRpb25cXHByb3BlcnR5LWluZm9cXHByb3BlcnR5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnR5LWluZm8vcHJvcGVydHktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRFBFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydHktaW5mby9wcm9wZXJ0eS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmNhcmRib2R5IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCA0cHggd2hpdGVzbW9rZTtcclxufVxyXG50ciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi51ay10YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4ub3duZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmJhZGdlIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uYWRkcyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDVweDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH1cclxufVxyXG4iLCIuaG9tZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jYXJkYm9keSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCA0cHggd2hpdGVzbW9rZTtcbn1cblxudHIge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi51ay10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ub3duZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmFkZ2Uge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmFkZHMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDVweDtcbn1cbi5hZGRzIGkge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgbWFyZ2luOiAzcHg7XG59Il19 */");

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
        this.search = '';
    }
    ngOnInit() {
        this.loc.propertyinfo().subscribe(data => {
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
/* harmony default export */ __webpack_exports__["default"] = (".rup {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px;\n}\n\n.home {\n  width: 30px;\n  margin: 5px;\n}\n\n.seti {\n  width: 35%;\n  margin: auto;\n  display: block;\n}\n\n.vf {\n  margin: 10px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.seti2 {\n  position: absolute;\n  width: 35px;\n  border-radius: 100%;\n  border: 0.5px solid black;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 15px;\n  background-color: white;\n  z-index: 1032;\n  cursor: pointer;\n  -webkit-animation: summa 1s ease-in-out;\n          animation: summa 1s ease-in-out;\n}\n\n@-webkit-keyframes summa {\n  from {\n    width: 50px;\n  }\n  to {\n    width: 35px;\n  }\n}\n\n@keyframes summa {\n  from {\n    width: 50px;\n  }\n  to {\n    width: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vcHJvcGVydHkvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFxwcm9wZXJ0eVxccHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3Byb3BlcnR5L3Byb3BlcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FDR0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9wcm9wZXJ0eS9wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ydXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5ob21lIHtcclxuICB3aWR0aDogMzBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uc2V0aSB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52ZiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNldGkyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMzI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFuaW1hdGlvbjogc3VtbWEgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3VtbWEge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gIH1cclxufVxyXG4iLCIucnVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ob21lIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc2V0aSB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52ZiB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNldGkyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDMyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFuaW1hdGlvbjogc3VtbWEgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc3VtbWEge1xuICBmcm9tIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cbn0iXX0= */");

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
        this.app = '';
        this.prop = {
            mates: '',
            landmark: '',
            starts: 0,
            acc: '',
            ends: 0,
            add: '',
            htype: '',
            state: '',
            feed: '',
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

/***/ "./src/app/application/userdata/userdata.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/application/userdata/userdata.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  margin: 5px 0px;\n}\n\n.rr {\n  float: right;\n}\n\n.userimg {\n  margin: auto;\n  display: block;\n  width: 100px;\n  border-radius: 100%;\n  border: 1px solid cornflowerblue;\n}\n\n.edit {\n  float: right;\n  margin: 5px;\n  color: cornflowerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vdXNlcmRhdGEvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFx1c2VyZGF0YVxcdXNlcmRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcGxpY2F0aW9uL3VzZXJkYXRhL3VzZXJkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFRixnQ0FBQTtBQ0VBOztBRENBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vdXNlcmRhdGEvdXNlcmRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5yciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi51c2VyaW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbi8vICAgbWFyZ2luOiAxMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxufVxyXG5cclxuLmVkaXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxufSIsIi5jYXJkIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4ucnIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi51c2VyaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcbn1cblxuLmVkaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/application/userdata/userdata.component.ts":
/*!************************************************************!*\
  !*** ./src/app/application/userdata/userdata.component.ts ***!
  \************************************************************/
/*! exports provided: UserdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataComponent", function() { return UserdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserdataComponent = class UserdataComponent {
    constructor(loc, router) {
        this.loc = loc;
        this.router = router;
        this.prof = {
            p_id: '',
            username: '',
            fname: '',
            lname: '',
            land: 0,
            door: 0,
            loc: '',
            state: '',
            country: '',
            pin: ''
        };
        this.profile = {
            img: '',
            email: '',
            date: '',
            fullname: '',
            username: '',
            properties: '',
            owned: '',
            mobile: '',
            gender: 'male',
            bio: '',
            update: '',
            dob: '',
            insta: '',
            feed: '',
            _id: ''
        };
    }
    ngOnInit() {
        const prof = {
            username: window.localStorage.getItem('username')
        };
        this.prof.username = window.localStorage.getItem('username');
        this.profile.update = window.localStorage.getItem('update');
        if (window.localStorage.getItem('update') === '0') {
            this.loc.userprofile(prof).subscribe(data => {
                // this.profile = data[0];
                this.profile.img = 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png';
                this.profile.username = data[0]['username'];
                this.profile.email = data[0]['email'];
                this.profile.mobile = data[0]['mobile'];
                this.profile.update = window.localStorage.getItem('update');
                this.prof.fname = data[0]['fullname'];
                this.profile._id = data[0]['_id'];
                this.profile.date = data[0]['date'];
                // this.eat('Sucess', 1);
            });
        }
        else {
            this.loc.getupdateuser(prof).subscribe(data => {
                this.profile = data[0];
                this.profile.update = window.localStorage.getItem('update');
                this.instaname = data[0]['insta'];
                this.prof.fname = this.profile.fullname;
            });
        }
    }
    loadprofile() {
        const prof = {
            username: window.localStorage.getItem('username')
        };
        console.log(this.profile);
        this.loc.updateuser(this.profile).subscribe(data => {
            this.loc.updataapps(prof).subscribe(d => {
                this.eat(data['msg'], 1);
                window.localStorage.setItem('update', '1');
            });
        });
    }
    doloadprofile() {
        const prof = {
            username: window.localStorage.getItem('username')
        };
        console.log(this.profile);
        this.loc.doupdateuserdata(this.profile).subscribe(data => {
            this.loc.updataapps(prof).subscribe(d => {
                this.eat('Updated', 1);
                window.localStorage.setItem('update', '1');
            });
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
    profilo(name) {
        this.loc.insta(this.instaname).subscribe(data => {
            this.profile.insta = this.instaname;
            this.instapay = data;
            this.profile.img = this.instapay['graphql']['user']['profile_pic_url_hd'];
            this.profile.fullname = this.instapay['graphql']['user']['full_name'];
            this.prof.fname = this.instapay['graphql']['user']['full_name'];
            this.profile.bio = this.instapay['graphql']['user']['biography'];
        });
    }
    profiles() {
        this.prof.fname = this.profile.fullname;
        this.prof.username = this.profile.username;
        this.prof.p_id = window.localStorage.getItem('_id');
        this.loc.profile(this.prof).subscribe(data => {
            if (data['status'] === true) {
                this.eat(data['msg'], 1);
            }
            else {
                this.eat(data['msg'], 2);
            }
        });
    }
};
UserdataComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdata',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userdata.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/application/userdata/userdata.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userdata.component.scss */ "./src/app/application/userdata/userdata.component.scss")).default]
    })
], UserdataComponent);



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

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_auths_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auths.service */ "./src/app/shared/auths.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        // navigate to login page
        this.router.navigate(['/shift']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_auths_service__WEBPACK_IMPORTED_MODULE_3__["AuthsService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



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

/***/ "./src/app/room/one/one.component.scss":
/*!*********************************************!*\
  !*** ./src/app/room/one/one.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vb25lL29uZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/room/one/one.component.ts":
/*!*******************************************!*\
  !*** ./src/app/room/one/one.component.ts ***!
  \*******************************************/
/*! exports provided: OneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneComponent", function() { return OneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let OneComponent = class OneComponent {
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
            feed: '',
            country: '',
            pin: ''
        };
    }
    ngOnInit() {
        const prof = {
            username: window.localStorage.getItem('username')
        };
        this.username = window.localStorage.getItem('username');
        this.loc.userprofile(prof).subscribe(data => {
            this.profile = data[0];
        });
    }
    props() {
        this.prop['profile'] = this.profile;
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
OneComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
OneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/one/one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one.component.scss */ "./src/app/room/one/one.component.scss")).default]
    })
], OneComponent);



/***/ }),

/***/ "./src/app/room/three/three.component.scss":
/*!*************************************************!*\
  !*** ./src/app/room/three/three.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vdGhyZWUvdGhyZWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/room/three/three.component.ts":
/*!***********************************************!*\
  !*** ./src/app/room/three/three.component.ts ***!
  \***********************************************/
/*! exports provided: ThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeComponent", function() { return ThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let ThreeComponent = class ThreeComponent {
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
            feed: '',
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
ThreeComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
ThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./three.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/three/three.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./three.component.scss */ "./src/app/room/three/three.component.scss")).default]
    })
], ThreeComponent);



/***/ }),

/***/ "./src/app/room/two/two.component.scss":
/*!*********************************************!*\
  !*** ./src/app/room/two/two.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vdHdvL3R3by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/room/two/two.component.ts":
/*!*******************************************!*\
  !*** ./src/app/room/two/two.component.ts ***!
  \*******************************************/
/*! exports provided: TwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoComponent", function() { return TwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



let TwoComponent = class TwoComponent {
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
            feed: '',
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
TwoComponent.ctorParameters = () => [
    { type: src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] }
];
TwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/room/two/two.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./two.component.scss */ "./src/app/room/two/two.component.scss")).default]
    })
], TwoComponent);



/***/ }),

/***/ "./src/app/shared/CITY.ts":
/*!********************************!*\
  !*** ./src/app/shared/CITY.ts ***!
  \********************************/
/*! exports provided: CITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY", function() { return CITY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const CITY = [
    {
        "city": "Mumbai",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "12691836",
        "iso2": "IN",
        "capital": "admin",
        "lat": "18.987807",
        "lng": "72.836447",
        "population": "18978000"
    },
    {
        "city": "Delhi",
        "admin": "Delhi",
        "country": "India",
        "population_proper": "7633213",
        "iso2": "IN",
        "capital": "admin",
        "lat": "28.651952",
        "lng": "77.231495",
        "population": "15926000"
    },
    {
        "city": "Kolkata",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "4631392",
        "iso2": "IN",
        "capital": "admin",
        "lat": "22.562627",
        "lng": "88.363044",
        "population": "14787000"
    },
    {
        "city": "Chennai",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "4328063",
        "iso2": "IN",
        "capital": "admin",
        "lat": "13.084622",
        "lng": "80.248357",
        "population": "7163000"
    },
    {
        "city": "Bengal\u016bru",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "5104047",
        "iso2": "IN",
        "capital": "admin",
        "lat": "12.977063",
        "lng": "77.587106",
        "population": "6787000"
    },
    {
        "city": "Hyderabad",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "3597816",
        "iso2": "IN",
        "capital": "admin",
        "lat": "17.384052",
        "lng": "78.456355",
        "population": "6376000"
    },
    {
        "city": "Ahmad\u0101b\u0101d",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "3719710",
        "iso2": "IN",
        "capital": "minor",
        "lat": "23.025793",
        "lng": "72.587265",
        "population": "5375000"
    },
    {
        "city": "H\u0101ora",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "1027672",
        "iso2": "IN",
        "capital": "",
        "lat": "22.576882",
        "lng": "88.318566",
        "population": "4841638"
    },
    {
        "city": "Pune",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "2935744",
        "iso2": "IN",
        "capital": "",
        "lat": "18.513271",
        "lng": "73.849852",
        "population": "4672000"
    },
    {
        "city": "S\u016brat",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "2894504",
        "iso2": "IN",
        "capital": "",
        "lat": "21.195944",
        "lng": "72.830232",
        "population": "3842000"
    },
    {
        "city": "Mard\u0101npur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "2823249",
        "iso2": "IN",
        "capital": "",
        "lat": "26.430066",
        "lng": "80.267176",
        "population": "3162000"
    },
    {
        "city": "R\u0101mpura",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "2711758",
        "iso2": "IN",
        "capital": "",
        "lat": "26.884682",
        "lng": "75.789336",
        "population": "2917000"
    },
    {
        "city": "Lucknow",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "2472011",
        "iso2": "IN",
        "capital": "admin",
        "lat": "26.839281",
        "lng": "80.923133",
        "population": "2695000"
    },
    {
        "city": "N\u0101ra",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "2228018",
        "iso2": "IN",
        "capital": "",
        "lat": "21.203096",
        "lng": "79.089284",
        "population": "2454000"
    },
    {
        "city": "Patna",
        "admin": "Bih\u0101r",
        "country": "India",
        "population_proper": "1599920",
        "iso2": "IN",
        "capital": "admin",
        "lat": "25.615379",
        "lng": "85.101027",
        "population": "2158000"
    },
    {
        "city": "Indore",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "1837041",
        "iso2": "IN",
        "capital": "",
        "lat": "22.717736",
        "lng": "75.85859",
        "population": "2026000"
    },
    {
        "city": "Vadodara",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "1409476",
        "iso2": "IN",
        "capital": "",
        "lat": "22.299405",
        "lng": "73.208119",
        "population": "1756000"
    },
    {
        "city": "Bhopal",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "1599914",
        "iso2": "IN",
        "capital": "admin",
        "lat": "23.254688",
        "lng": "77.402892",
        "population": "1727000"
    },
    {
        "city": "Coimbatore",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "959823",
        "iso2": "IN",
        "capital": "",
        "lat": "11.005547",
        "lng": "76.966122",
        "population": "1696000"
    },
    {
        "city": "Ludhi\u0101na",
        "admin": "Punjab",
        "country": "India",
        "population_proper": "1545368",
        "iso2": "IN",
        "capital": "",
        "lat": "30.912042",
        "lng": "75.853789",
        "population": "1649000"
    },
    {
        "city": "\u0100gra",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "1430055",
        "iso2": "IN",
        "capital": "",
        "lat": "27.187935",
        "lng": "78.003944",
        "population": "1592000"
    },
    {
        "city": "Kaly\u0101n",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "1576614",
        "iso2": "IN",
        "capital": "",
        "lat": "19.243703",
        "lng": "73.135537",
        "population": "1576614"
    },
    {
        "city": "Vish\u0101khapatnam",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "1063178",
        "iso2": "IN",
        "capital": "",
        "lat": "17.704052",
        "lng": "83.297663",
        "population": "1529000"
    },
    {
        "city": "Kochi",
        "admin": "Kerala",
        "country": "India",
        "population_proper": "604696",
        "iso2": "IN",
        "capital": "",
        "lat": "9.947743",
        "lng": "76.253802",
        "population": "1519000"
    },
    {
        "city": "N\u0101sik",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "1289497",
        "iso2": "IN",
        "capital": "",
        "lat": "19.999963",
        "lng": "73.776887",
        "population": "1473000"
    },
    {
        "city": "Meerut",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "1223184",
        "iso2": "IN",
        "capital": "",
        "lat": "28.980018",
        "lng": "77.706356",
        "population": "1398000"
    },
    {
        "city": "Far\u012bd\u0101b\u0101d",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "1394000",
        "iso2": "IN",
        "capital": "",
        "lat": "28.411236",
        "lng": "77.313162",
        "population": "1394000"
    },
    {
        "city": "V\u0101r\u0101nasi",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "1164404",
        "iso2": "IN",
        "capital": "",
        "lat": "25.31774",
        "lng": "83.005811",
        "population": "1352000"
    },
    {
        "city": "Gh\u0101zi\u0101b\u0101d",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "1199191",
        "iso2": "IN",
        "capital": "",
        "lat": "28.665353",
        "lng": "77.439148",
        "population": "1341000"
    },
    {
        "city": "\u0100sansol",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "1328000",
        "iso2": "IN",
        "capital": "",
        "lat": "23.683333",
        "lng": "86.983333",
        "population": "1328000"
    },
    {
        "city": "Jamshedpur",
        "admin": "Jharkhand",
        "country": "India",
        "population_proper": "616338",
        "iso2": "IN",
        "capital": "",
        "lat": "22.802776",
        "lng": "86.185448",
        "population": "1300000"
    },
    {
        "city": "Madurai",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "909908",
        "iso2": "IN",
        "capital": "",
        "lat": "9.917347",
        "lng": "78.119622",
        "population": "1294000"
    },
    {
        "city": "Jabalpur",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "1030168",
        "iso2": "IN",
        "capital": "",
        "lat": "23.174495",
        "lng": "79.935903",
        "population": "1285000"
    },
    {
        "city": "R\u0101jkot",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "1099882",
        "iso2": "IN",
        "capital": "",
        "lat": "22.291606",
        "lng": "70.793217",
        "population": "1260000"
    },
    {
        "city": "Dhanb\u0101d",
        "admin": "Jharkhand",
        "country": "India",
        "population_proper": "219636",
        "iso2": "IN",
        "capital": "",
        "lat": "23.801988",
        "lng": "86.443244",
        "population": "1246000"
    },
    {
        "city": "Amritsar",
        "admin": "Punjab",
        "country": "India",
        "population_proper": "1092450",
        "iso2": "IN",
        "capital": "",
        "lat": "31.622337",
        "lng": "74.875335",
        "population": "1212000"
    },
    {
        "city": "Warangal",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "865527",
        "iso2": "IN",
        "capital": "",
        "lat": "17.978423",
        "lng": "79.600209",
        "population": "1203853"
    },
    {
        "city": "Allah\u0101b\u0101d",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "1073438",
        "iso2": "IN",
        "capital": "",
        "lat": "25.44478",
        "lng": "81.843217",
        "population": "1201000"
    },
    {
        "city": "Sr\u012bnagar",
        "admin": "Jammu and Kashm\u012br",
        "country": "India",
        "population_proper": "975857",
        "iso2": "IN",
        "capital": "admin",
        "lat": "34.085652",
        "lng": "74.805553",
        "population": "1140000"
    },
    {
        "city": "Aurang\u0101b\u0101d",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "1016441",
        "iso2": "IN",
        "capital": "",
        "lat": "19.880943",
        "lng": "75.346739",
        "population": "1113000"
    },
    {
        "city": "Bhilai",
        "admin": "Chhatt\u012bsgarh",
        "country": "India",
        "population_proper": "1097000",
        "iso2": "IN",
        "capital": "",
        "lat": "21.209188",
        "lng": "81.428497",
        "population": "1097000"
    },
    {
        "city": "Sol\u0101pur",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "961112",
        "iso2": "IN",
        "capital": "",
        "lat": "17.671523",
        "lng": "75.910437",
        "population": "1057000"
    },
    {
        "city": "Ranchi",
        "admin": "Jharkhand",
        "country": "India",
        "population_proper": "846454",
        "iso2": "IN",
        "capital": "admin",
        "lat": "23.347768",
        "lng": "85.338564",
        "population": "1044000"
    },
    {
        "city": "Jodhpur",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "921476",
        "iso2": "IN",
        "capital": "",
        "lat": "26.26841",
        "lng": "73.005943",
        "population": "995000"
    },
    {
        "city": "Guw\u0101h\u0101ti",
        "admin": "Assam",
        "country": "India",
        "population_proper": "17516",
        "iso2": "IN",
        "capital": "",
        "lat": "26.176076",
        "lng": "91.762932",
        "population": "983000"
    },
    {
        "city": "Chandigarh",
        "admin": "Chand\u012bgarh",
        "country": "India",
        "population_proper": "914371",
        "iso2": "IN",
        "capital": "admin",
        "lat": "30.736292",
        "lng": "76.788398",
        "population": "979000"
    },
    {
        "city": "Gwalior",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "882458",
        "iso2": "IN",
        "capital": "",
        "lat": "26.229825",
        "lng": "78.173369",
        "population": "978000"
    },
    {
        "city": "Thiruvananthapuram",
        "admin": "Kerala",
        "country": "India",
        "population_proper": "784153",
        "iso2": "IN",
        "capital": "admin",
        "lat": "8.485498",
        "lng": "76.949238",
        "population": "954000"
    },
    {
        "city": "Tiruchchir\u0101ppalli",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "775484",
        "iso2": "IN",
        "capital": "",
        "lat": "10.815499",
        "lng": "78.696513",
        "population": "951000"
    },
    {
        "city": "Hubli",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "792804",
        "iso2": "IN",
        "capital": "",
        "lat": "15.349955",
        "lng": "75.138619",
        "population": "890000"
    },
    {
        "city": "Mysore",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "868313",
        "iso2": "IN",
        "capital": "",
        "lat": "12.292664",
        "lng": "76.638543",
        "population": "887000"
    },
    {
        "city": "Raipur",
        "admin": "Chhatt\u012bsgarh",
        "country": "India",
        "population_proper": "679995",
        "iso2": "IN",
        "capital": "admin",
        "lat": "21.233333",
        "lng": "81.633333",
        "population": "875000"
    },
    {
        "city": "Salem",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "778396",
        "iso2": "IN",
        "capital": "",
        "lat": "11.651165",
        "lng": "78.158672",
        "population": "873000"
    },
    {
        "city": "Bhubaneshwar",
        "admin": "Odisha",
        "country": "India",
        "population_proper": "762243",
        "iso2": "IN",
        "capital": "admin",
        "lat": "20.272411",
        "lng": "85.833853",
        "population": "844000"
    },
    {
        "city": "Kota",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "763088",
        "iso2": "IN",
        "capital": "",
        "lat": "25.182544",
        "lng": "75.839065",
        "population": "827000"
    },
    {
        "city": "Jh\u0101nsi",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "412927",
        "iso2": "IN",
        "capital": "",
        "lat": "25.458872",
        "lng": "78.579943",
        "population": "826494"
    },
    {
        "city": "Bareilly",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "745435",
        "iso2": "IN",
        "capital": "",
        "lat": "28.347023",
        "lng": "79.421934",
        "population": "817000"
    },
    {
        "city": "Al\u012bgarh",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "753207",
        "iso2": "IN",
        "capital": "",
        "lat": "27.881453",
        "lng": "78.07464",
        "population": "805000"
    },
    {
        "city": "Bhiwandi",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "707035",
        "iso2": "IN",
        "capital": "",
        "lat": "19.300229",
        "lng": "73.058813",
        "population": "795000"
    },
    {
        "city": "Jammu",
        "admin": "Jammu and Kashm\u012br",
        "country": "India",
        "population_proper": "465567",
        "iso2": "IN",
        "capital": "",
        "lat": "32.735686",
        "lng": "74.869112",
        "population": "791000"
    },
    {
        "city": "Mor\u0101d\u0101b\u0101d",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "721139",
        "iso2": "IN",
        "capital": "",
        "lat": "28.838931",
        "lng": "78.776838",
        "population": "787000"
    },
    {
        "city": "Mangalore",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "417387",
        "iso2": "IN",
        "capital": "",
        "lat": "12.865371",
        "lng": "74.842432",
        "population": "776632"
    },
    {
        "city": "Kolh\u0101pur",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "561841",
        "iso2": "IN",
        "capital": "",
        "lat": "16.695633",
        "lng": "74.231669",
        "population": "750000"
    },
    {
        "city": "Amr\u0101vati",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "603837",
        "iso2": "IN",
        "capital": "",
        "lat": "20.933272",
        "lng": "77.75152",
        "population": "734451"
    },
    {
        "city": "Dehra D\u016bn",
        "admin": "Uttarakhand",
        "country": "India",
        "population_proper": "578420",
        "iso2": "IN",
        "capital": "admin",
        "lat": "30.324427",
        "lng": "78.033922",
        "population": "714223"
    },
    {
        "city": "M\u0101legaon Camp",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "435362",
        "iso2": "IN",
        "capital": "",
        "lat": "20.569974",
        "lng": "74.515415",
        "population": "690844"
    },
    {
        "city": "Nellore",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "404158",
        "iso2": "IN",
        "capital": "",
        "lat": "14.449918",
        "lng": "79.986967",
        "population": "678004"
    },
    {
        "city": "Gop\u0101lpur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "674246",
        "iso2": "IN",
        "capital": "",
        "lat": "26.735389",
        "lng": "83.38064",
        "population": "674246"
    },
    {
        "city": "Shimoga",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "319550",
        "iso2": "IN",
        "capital": "",
        "lat": "13.932424",
        "lng": "75.572555",
        "population": "654055"
    },
    {
        "city": "Tirupp\u016br",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "444543",
        "iso2": "IN",
        "capital": "",
        "lat": "11.104096",
        "lng": "77.346402",
        "population": "650000"
    },
    {
        "city": "Raurkela",
        "admin": "Odisha",
        "country": "India",
        "population_proper": "483629",
        "iso2": "IN",
        "capital": "",
        "lat": "22.224964",
        "lng": "84.864143",
        "population": "625831"
    },
    {
        "city": "N\u0101nded",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "550564",
        "iso2": "IN",
        "capital": "",
        "lat": "19.160227",
        "lng": "77.314971",
        "population": "623708"
    },
    {
        "city": "Belgaum",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "610189",
        "iso2": "IN",
        "capital": "",
        "lat": "15.862643",
        "lng": "74.508534",
        "population": "608756"
    },
    {
        "city": "S\u0101ngli",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "601214",
        "iso2": "IN",
        "capital": "",
        "lat": "16.856777",
        "lng": "74.569196",
        "population": "601214"
    },
    {
        "city": "Ch\u0101nda",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "328351",
        "iso2": "IN",
        "capital": "",
        "lat": "19.950758",
        "lng": "79.295229",
        "population": "595118"
    },
    {
        "city": "Ajmer",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "517911",
        "iso2": "IN",
        "capital": "",
        "lat": "26.452103",
        "lng": "74.638667",
        "population": "589985"
    },
    {
        "city": "Cuttack",
        "admin": "Odisha",
        "country": "India",
        "population_proper": "580000",
        "iso2": "IN",
        "capital": "",
        "lat": "20.522922",
        "lng": "85.78813",
        "population": "580000"
    },
    {
        "city": "B\u012bkaner",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "395908",
        "iso2": "IN",
        "capital": "",
        "lat": "28.017623",
        "lng": "73.314955",
        "population": "576015"
    },
    {
        "city": "Bh\u0101vnagar",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "464602",
        "iso2": "IN",
        "capital": "",
        "lat": "21.774455",
        "lng": "72.152496",
        "population": "554978"
    },
    {
        "city": "Hisar",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "301249",
        "iso2": "IN",
        "capital": "",
        "lat": "29.153938",
        "lng": "75.722944",
        "population": "544829"
    },
    {
        "city": "Bil\u0101spur",
        "admin": "Chhatt\u012bsgarh",
        "country": "India",
        "population_proper": "330106",
        "iso2": "IN",
        "capital": "",
        "lat": "22.080046",
        "lng": "82.155431",
        "population": "543454"
    },
    {
        "city": "Tirunelveli",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "435844",
        "iso2": "IN",
        "capital": "",
        "lat": "8.725181",
        "lng": "77.684519",
        "population": "542200"
    },
    {
        "city": "Gunt\u016br",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "530577",
        "iso2": "IN",
        "capital": "",
        "lat": "16.299737",
        "lng": "80.457293",
        "population": "530577"
    },
    {
        "city": "Shiliguri",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "515574",
        "iso2": "IN",
        "capital": "",
        "lat": "26.710035",
        "lng": "88.428512",
        "population": "515574"
    },
    {
        "city": "Ujjain",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "457346",
        "iso2": "IN",
        "capital": "",
        "lat": "23.182387",
        "lng": "75.776433",
        "population": "513350"
    },
    {
        "city": "Davangere",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "435125",
        "iso2": "IN",
        "capital": "",
        "lat": "14.469237",
        "lng": "75.92375",
        "population": "503564"
    },
    {
        "city": "Akola",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "428857",
        "iso2": "IN",
        "capital": "",
        "lat": "20.709569",
        "lng": "76.998103",
        "population": "503502"
    },
    {
        "city": "Sah\u0101ranpur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "484873",
        "iso2": "IN",
        "capital": "",
        "lat": "29.967896",
        "lng": "77.545221",
        "population": "484873"
    },
    {
        "city": "Gulbarga",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "481478",
        "iso2": "IN",
        "capital": "",
        "lat": "17.335827",
        "lng": "76.83757",
        "population": "483615"
    },
    {
        "city": "Bh\u0101tp\u0101ra",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "483129",
        "iso2": "IN",
        "capital": "",
        "lat": "22.866431",
        "lng": "88.401129",
        "population": "483129"
    },
    {
        "city": "Dh\u016blia",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "366980",
        "iso2": "IN",
        "capital": "",
        "lat": "20.901299",
        "lng": "74.777373",
        "population": "479073"
    },
    {
        "city": "Udaipur",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "422784",
        "iso2": "IN",
        "capital": "",
        "lat": "24.57951",
        "lng": "73.690508",
        "population": "469737"
    },
    {
        "city": "Bellary",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "336681",
        "iso2": "IN",
        "capital": "",
        "lat": "15.142049",
        "lng": "76.92398",
        "population": "445388"
    },
    {
        "city": "Tuticorin",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "436094",
        "iso2": "IN",
        "capital": "",
        "lat": "8.805038",
        "lng": "78.151884",
        "population": "436094"
    },
    {
        "city": "Kurnool",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "278124",
        "iso2": "IN",
        "capital": "",
        "lat": "15.828865",
        "lng": "78.036021",
        "population": "424920"
    },
    {
        "city": "Gaya",
        "admin": "Bih\u0101r",
        "country": "India",
        "population_proper": "423692",
        "iso2": "IN",
        "capital": "",
        "lat": "24.796858",
        "lng": "85.003852",
        "population": "423692"
    },
    {
        "city": "S\u012bkar",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "237579",
        "iso2": "IN",
        "capital": "",
        "lat": "27.614778",
        "lng": "75.138671",
        "population": "400000"
    },
    {
        "city": "Tumk\u016br",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "307359",
        "iso2": "IN",
        "capital": "",
        "lat": "13.341358",
        "lng": "77.102203",
        "population": "399606"
    },
    {
        "city": "Kollam",
        "admin": "Kerala",
        "country": "India",
        "population_proper": "394163",
        "iso2": "IN",
        "capital": "",
        "lat": "8.881131",
        "lng": "76.584694",
        "population": "394163"
    },
    {
        "city": "Ahmadnagar",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "367140",
        "iso2": "IN",
        "capital": "",
        "lat": "19.094571",
        "lng": "74.738432",
        "population": "391760"
    },
    {
        "city": "Bh\u012blw\u0101ra",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "326431",
        "iso2": "IN",
        "capital": "",
        "lat": "25.347071",
        "lng": "74.640812",
        "population": "389911"
    },
    {
        "city": "Niz\u0101m\u0101b\u0101d",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "305438",
        "iso2": "IN",
        "capital": "",
        "lat": "18.673151",
        "lng": "78.10008",
        "population": "388505"
    },
    {
        "city": "Parbhani",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "289629",
        "iso2": "IN",
        "capital": "",
        "lat": "19.268553",
        "lng": "76.770807",
        "population": "378326"
    },
    {
        "city": "Shillong",
        "admin": "Megh\u0101laya",
        "country": "India",
        "population_proper": "354325",
        "iso2": "IN",
        "capital": "admin",
        "lat": "25.573987",
        "lng": "91.896807",
        "population": "375527"
    },
    {
        "city": "L\u0101t\u016br",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "348967",
        "iso2": "IN",
        "capital": "",
        "lat": "18.399487",
        "lng": "76.584252",
        "population": "374394"
    },
    {
        "city": "R\u0101jap\u0101laiyam",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "307959",
        "iso2": "IN",
        "capital": "",
        "lat": "9.451111",
        "lng": "77.556121",
        "population": "369991"
    },
    {
        "city": "Bh\u0101galpur",
        "admin": "Bih\u0101r",
        "country": "India",
        "population_proper": "361548",
        "iso2": "IN",
        "capital": "",
        "lat": "25.244462",
        "lng": "86.971832",
        "population": "361548"
    },
    {
        "city": "Muzaffarnagar",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "349706",
        "iso2": "IN",
        "capital": "",
        "lat": "29.470914",
        "lng": "77.703324",
        "population": "349706"
    },
    {
        "city": "Muzaffarpur",
        "admin": "Bih\u0101r",
        "country": "India",
        "population_proper": "333200",
        "iso2": "IN",
        "capital": "",
        "lat": "26.122593",
        "lng": "85.390553",
        "population": "333200"
    },
    {
        "city": "Mathura",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "330511",
        "iso2": "IN",
        "capital": "",
        "lat": "27.503501",
        "lng": "77.672145",
        "population": "330511"
    },
    {
        "city": "Pati\u0101la",
        "admin": "Punjab",
        "country": "India",
        "population_proper": "329224",
        "iso2": "IN",
        "capital": "",
        "lat": "30.336245",
        "lng": "76.392199",
        "population": "329224"
    },
    {
        "city": "Saugor",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "247333",
        "iso2": "IN",
        "capital": "",
        "lat": "23.838766",
        "lng": "78.738738",
        "population": "328240"
    },
    {
        "city": "Brahmapur",
        "admin": "Odisha",
        "country": "India",
        "population_proper": "324726",
        "iso2": "IN",
        "capital": "",
        "lat": "19.311514",
        "lng": "84.792903",
        "population": "324726"
    },
    {
        "city": "Sh\u0101hb\u0101zpur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "320434",
        "iso2": "IN",
        "capital": "",
        "lat": "27.874116",
        "lng": "79.879327",
        "population": "320434"
    },
    {
        "city": "New Delhi",
        "admin": "Delhi",
        "country": "India",
        "population_proper": "317797",
        "iso2": "IN",
        "capital": "primary",
        "lat": "28.6",
        "lng": "77.2",
        "population": "317797"
    },
    {
        "city": "Rohtak",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "317245",
        "iso2": "IN",
        "capital": "",
        "lat": "28.894473",
        "lng": "76.589166",
        "population": "317245"
    },
    {
        "city": "Samlaip\u0101dar",
        "admin": "Odisha",
        "country": "India",
        "population_proper": "162887",
        "iso2": "IN",
        "capital": "",
        "lat": "21.478072",
        "lng": "83.990505",
        "population": "310852"
    },
    {
        "city": "Ratl\u0101m",
        "admin": "Madhya Pradesh",
        "country": "India",
        "population_proper": "236843",
        "iso2": "IN",
        "capital": "",
        "lat": "23.330331",
        "lng": "75.040315",
        "population": "307229"
    },
    {
        "city": "F\u012broz\u0101b\u0101d",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "306409",
        "iso2": "IN",
        "capital": "",
        "lat": "27.150917",
        "lng": "78.397808",
        "population": "306409"
    },
    {
        "city": "R\u0101jahmundry",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "304804",
        "iso2": "IN",
        "capital": "",
        "lat": "17.005171",
        "lng": "81.777839",
        "population": "304804"
    },
    {
        "city": "Barddham\u0101n",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "301725",
        "iso2": "IN",
        "capital": "",
        "lat": "23.255716",
        "lng": "87.856906",
        "population": "301725"
    },
    {
        "city": "B\u012bdar",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "204071",
        "iso2": "IN",
        "capital": "",
        "lat": "17.913309",
        "lng": "77.530105",
        "population": "300136"
    },
    {
        "city": "Bamanpur\u012b",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "296418",
        "iso2": "IN",
        "capital": "",
        "lat": "28.804495",
        "lng": "79.040305",
        "population": "296418"
    },
    {
        "city": "K\u0101kin\u0101da",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "292923",
        "iso2": "IN",
        "capital": "",
        "lat": "16.960361",
        "lng": "82.238086",
        "population": "292923"
    },
    {
        "city": "P\u0101n\u012bpat",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "292808",
        "iso2": "IN",
        "capital": "",
        "lat": "29.387471",
        "lng": "76.968246",
        "population": "292808"
    },
    {
        "city": "Khammam",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "170503",
        "iso2": "IN",
        "capital": "",
        "lat": "17.247672",
        "lng": "80.143682",
        "population": "290839"
    },
    {
        "city": "Bhuj",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "289429",
        "iso2": "IN",
        "capital": "",
        "lat": "23.253972",
        "lng": "69.669281",
        "population": "289429"
    },
    {
        "city": "Kar\u012bmnagar",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "228745",
        "iso2": "IN",
        "capital": "",
        "lat": "18.436738",
        "lng": "79.13222",
        "population": "288251"
    },
    {
        "city": "Tirupati",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "250821",
        "iso2": "IN",
        "capital": "",
        "lat": "13.635505",
        "lng": "79.419888",
        "population": "287035"
    },
    {
        "city": "Hospet",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "197846",
        "iso2": "IN",
        "capital": "",
        "lat": "15.269537",
        "lng": "76.387103",
        "population": "286007"
    },
    {
        "city": "Chikka Mandya",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "134845",
        "iso2": "IN",
        "capital": "",
        "lat": "12.545602",
        "lng": "76.895078",
        "population": "285034"
    },
    {
        "city": "Alwar",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "283228",
        "iso2": "IN",
        "capital": "",
        "lat": "27.566291",
        "lng": "76.610202",
        "population": "283228"
    },
    {
        "city": "Aizawl",
        "admin": "Mizoram",
        "country": "India",
        "population_proper": "265331",
        "iso2": "IN",
        "capital": "admin",
        "lat": "23.736701",
        "lng": "92.714596",
        "population": "283021"
    },
    {
        "city": "Bij\u0101pur",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "270870",
        "iso2": "IN",
        "capital": "",
        "lat": "16.827715",
        "lng": "75.718988",
        "population": "271064"
    },
    {
        "city": "Imphal",
        "admin": "Manipur",
        "country": "India",
        "population_proper": "223523",
        "iso2": "IN",
        "capital": "admin",
        "lat": "24.808053",
        "lng": "93.944203",
        "population": "264986"
    },
    {
        "city": "Tharati Etawah",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "257448",
        "iso2": "IN",
        "capital": "",
        "lat": "26.758236",
        "lng": "79.014875",
        "population": "257448"
    },
    {
        "city": "R\u0101ich\u016br",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "225962",
        "iso2": "IN",
        "capital": "",
        "lat": "16.205459",
        "lng": "77.35567",
        "population": "255240"
    },
    {
        "city": "Path\u0101nkot",
        "admin": "Punjab",
        "country": "India",
        "population_proper": "174306",
        "iso2": "IN",
        "capital": "",
        "lat": "32.274842",
        "lng": "75.652865",
        "population": "253987"
    },
    {
        "city": "Ch\u012br\u0101la",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "87001",
        "iso2": "IN",
        "capital": "",
        "lat": "15.823849",
        "lng": "80.352187",
        "population": "253000"
    },
    {
        "city": "Son\u012bpat",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "250521",
        "iso2": "IN",
        "capital": "",
        "lat": "28.994778",
        "lng": "77.019375",
        "population": "250521"
    },
    {
        "city": "Mirz\u0101pur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "233691",
        "iso2": "IN",
        "capital": "",
        "lat": "25.144902",
        "lng": "82.565335",
        "population": "245817"
    },
    {
        "city": "H\u0101pur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "242920",
        "iso2": "IN",
        "capital": "",
        "lat": "28.729845",
        "lng": "77.780681",
        "population": "242920"
    },
    {
        "city": "Porbandar",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "138872",
        "iso2": "IN",
        "capital": "",
        "lat": "21.641346",
        "lng": "69.600868",
        "population": "234684"
    },
    {
        "city": "Bharatpur",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "229384",
        "iso2": "IN",
        "capital": "",
        "lat": "27.215251",
        "lng": "77.492786",
        "population": "229384"
    },
    {
        "city": "Puducherry",
        "admin": "Puducherry",
        "country": "India",
        "population_proper": "227411",
        "iso2": "IN",
        "capital": "admin",
        "lat": "11.933812",
        "lng": "79.829792",
        "population": "227411"
    },
    {
        "city": "Karn\u0101l",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "225049",
        "iso2": "IN",
        "capital": "",
        "lat": "29.691971",
        "lng": "76.984483",
        "population": "225049"
    },
    {
        "city": "N\u0101gercoil",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "213858",
        "iso2": "IN",
        "capital": "",
        "lat": "8.177313",
        "lng": "77.43437",
        "population": "224329"
    },
    {
        "city": "Thanj\u0101v\u016br",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "219571",
        "iso2": "IN",
        "capital": "",
        "lat": "10.785233",
        "lng": "79.139093",
        "population": "219571"
    },
    {
        "city": "P\u0101li",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "207394",
        "iso2": "IN",
        "capital": "",
        "lat": "25.775125",
        "lng": "73.320611",
        "population": "210103"
    },
    {
        "city": "Agartala",
        "admin": "Tripura",
        "country": "India",
        "population_proper": "203264",
        "iso2": "IN",
        "capital": "admin",
        "lat": "23.836049",
        "lng": "91.279386",
        "population": "203264"
    },
    {
        "city": "Ongole",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "172872",
        "iso2": "IN",
        "capital": "",
        "lat": "15.503565",
        "lng": "80.044541",
        "population": "202860"
    },
    {
        "city": "Puri",
        "admin": "Odisha",
        "country": "India",
        "population_proper": "201026",
        "iso2": "IN",
        "capital": "",
        "lat": "19.798254",
        "lng": "85.824938",
        "population": "201026"
    },
    {
        "city": "Dindigul",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "200797",
        "iso2": "IN",
        "capital": "",
        "lat": "10.362853",
        "lng": "77.975827",
        "population": "200797"
    },
    {
        "city": "Haldia",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "200762",
        "iso2": "IN",
        "capital": "",
        "lat": "22.025278",
        "lng": "88.058333",
        "population": "200762"
    },
    {
        "city": "Bulandshahr",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "198612",
        "iso2": "IN",
        "capital": "",
        "lat": "28.403922",
        "lng": "77.857731",
        "population": "198612"
    },
    {
        "city": "Purnea",
        "admin": "Bih\u0101r",
        "country": "India",
        "population_proper": "198453",
        "iso2": "IN",
        "capital": "",
        "lat": "25.776703",
        "lng": "87.473655",
        "population": "198453"
    },
    {
        "city": "Proddat\u016br",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "177797",
        "iso2": "IN",
        "capital": "",
        "lat": "14.7502",
        "lng": "78.548129",
        "population": "197451"
    },
    {
        "city": "Gurgaon",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "197340",
        "iso2": "IN",
        "capital": "",
        "lat": "28.460105",
        "lng": "77.026352",
        "population": "197340"
    },
    {
        "city": "Kh\u0101n\u0101pur",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "197233",
        "iso2": "IN",
        "capital": "",
        "lat": "21.273716",
        "lng": "76.117376",
        "population": "197233"
    },
    {
        "city": "Machil\u012bpatnam",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "192827",
        "iso2": "IN",
        "capital": "",
        "lat": "16.187466",
        "lng": "81.13888",
        "population": "192827"
    },
    {
        "city": "Bhiw\u0101ni",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "190855",
        "iso2": "IN",
        "capital": "",
        "lat": "28.793044",
        "lng": "76.13968",
        "population": "190855"
    },
    {
        "city": "Nandy\u0101l",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "165337",
        "iso2": "IN",
        "capital": "",
        "lat": "15.477994",
        "lng": "78.483605",
        "population": "188654"
    },
    {
        "city": "Bhus\u0101val",
        "admin": "Mah\u0101r\u0101shtra",
        "country": "India",
        "population_proper": "172366",
        "iso2": "IN",
        "capital": "",
        "lat": "21.043649",
        "lng": "75.785058",
        "population": "183001"
    },
    {
        "city": "Bharauri",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "182218",
        "iso2": "IN",
        "capital": "",
        "lat": "27.598203",
        "lng": "81.694709",
        "population": "182218"
    },
    {
        "city": "Tonk",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "151331",
        "iso2": "IN",
        "capital": "",
        "lat": "26.168672",
        "lng": "75.786111",
        "population": "181734"
    },
    {
        "city": "Sirsa",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "160129",
        "iso2": "IN",
        "capital": "",
        "lat": "29.534893",
        "lng": "75.028981",
        "population": "181639"
    },
    {
        "city": "Vizianagaram",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "1194",
        "iso2": "IN",
        "capital": "",
        "lat": "18.11329",
        "lng": "83.397743",
        "population": "179358"
    },
    {
        "city": "Vellore",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "177081",
        "iso2": "IN",
        "capital": "",
        "lat": "12.905769",
        "lng": "79.137104",
        "population": "177081"
    },
    {
        "city": "Alappuzha",
        "admin": "Kerala",
        "country": "India",
        "population_proper": "176783",
        "iso2": "IN",
        "capital": "",
        "lat": "9.494647",
        "lng": "76.331108",
        "population": "176783"
    },
    {
        "city": "Shimla",
        "admin": "Him\u0101chal Pradesh",
        "country": "India",
        "population_proper": "173503",
        "iso2": "IN",
        "capital": "admin",
        "lat": "31.104423",
        "lng": "77.166623",
        "population": "173503"
    },
    {
        "city": "Hindupur",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "133298",
        "iso2": "IN",
        "capital": "",
        "lat": "13.828065",
        "lng": "77.491425",
        "population": "168312"
    },
    {
        "city": "B\u0101ram\u016bla",
        "admin": "Jammu and Kashm\u012br",
        "country": "India",
        "population_proper": "77276",
        "iso2": "IN",
        "capital": "",
        "lat": "34.209004",
        "lng": "74.342853",
        "population": "167986"
    },
    {
        "city": "Bakshpur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "166480",
        "iso2": "IN",
        "capital": "",
        "lat": "25.894283",
        "lng": "80.792104",
        "population": "166480"
    },
    {
        "city": "Dibrugarh",
        "admin": "Assam",
        "country": "India",
        "population_proper": "122155",
        "iso2": "IN",
        "capital": "",
        "lat": "27.479888",
        "lng": "94.90837",
        "population": "166366"
    },
    {
        "city": "Said\u0101pur",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "164435",
        "iso2": "IN",
        "capital": "",
        "lat": "27.598784",
        "lng": "80.75089",
        "population": "164435"
    },
    {
        "city": "Navs\u0101ri",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "163000",
        "iso2": "IN",
        "capital": "",
        "lat": "20.85",
        "lng": "72.916667",
        "population": "163000"
    },
    {
        "city": "Budaun",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "161555",
        "iso2": "IN",
        "capital": "",
        "lat": "28.038114",
        "lng": "79.126677",
        "population": "161555"
    },
    {
        "city": "Cuddalore",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "158569",
        "iso2": "IN",
        "capital": "",
        "lat": "11.746289",
        "lng": "79.764362",
        "population": "158569"
    },
    {
        "city": "Har\u012bpur",
        "admin": "Punjab",
        "country": "India",
        "population_proper": "158142",
        "iso2": "IN",
        "capital": "",
        "lat": "31.463218",
        "lng": "75.986418",
        "population": "158142"
    },
    {
        "city": "Krishn\u0101puram",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "155029",
        "iso2": "IN",
        "capital": "",
        "lat": "12.869617",
        "lng": "79.719469",
        "population": "155029"
    },
    {
        "city": "Fyz\u0101b\u0101d",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "153047",
        "iso2": "IN",
        "capital": "",
        "lat": "26.775486",
        "lng": "82.150182",
        "population": "153047"
    },
    {
        "city": "Silchar",
        "admin": "Assam",
        "country": "India",
        "population_proper": "152393",
        "iso2": "IN",
        "capital": "",
        "lat": "24.827327",
        "lng": "92.797868",
        "population": "152393"
    },
    {
        "city": "Amb\u0101la",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "146787",
        "iso2": "IN",
        "capital": "",
        "lat": "30.360993",
        "lng": "76.797819",
        "population": "146787"
    },
    {
        "city": "Krishnanagar",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "145926",
        "iso2": "IN",
        "capital": "",
        "lat": "23.405761",
        "lng": "88.490733",
        "population": "145926"
    },
    {
        "city": "Kol\u0101r",
        "admin": "Karn\u0101taka",
        "country": "India",
        "population_proper": "126441",
        "iso2": "IN",
        "capital": "",
        "lat": "13.137679",
        "lng": "78.129989",
        "population": "144625"
    },
    {
        "city": "Kumbakonam",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "139264",
        "iso2": "IN",
        "capital": "",
        "lat": "10.959789",
        "lng": "79.377472",
        "population": "139264"
    },
    {
        "city": "Tiruvann\u0101malai",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "138243",
        "iso2": "IN",
        "capital": "",
        "lat": "12.230204",
        "lng": "79.072954",
        "population": "138243"
    },
    {
        "city": "P\u012blibh\u012bt",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "131008",
        "iso2": "IN",
        "capital": "",
        "lat": "28.631245",
        "lng": "79.804362",
        "population": "131008"
    },
    {
        "city": "Abohar",
        "admin": "Punjab",
        "country": "India",
        "population_proper": "130603",
        "iso2": "IN",
        "capital": "",
        "lat": "30.144533",
        "lng": "74.19552",
        "population": "130603"
    },
    {
        "city": "Port Blair",
        "admin": "Andaman and Nicobar Islands",
        "country": "India",
        "population_proper": "112050",
        "iso2": "IN",
        "capital": "admin",
        "lat": "11.666667",
        "lng": "92.75",
        "population": "127562"
    },
    {
        "city": "Al\u012bpur Du\u0101r",
        "admin": "West Bengal",
        "country": "India",
        "population_proper": "127342",
        "iso2": "IN",
        "capital": "",
        "lat": "26.4835",
        "lng": "89.522855",
        "population": "127342"
    },
    {
        "city": "Hat\u012bsa",
        "admin": "Uttar Pradesh",
        "country": "India",
        "population_proper": "126882",
        "iso2": "IN",
        "capital": "",
        "lat": "27.592698",
        "lng": "78.013843",
        "population": "126882"
    },
    {
        "city": "V\u0101lp\u0101rai",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "90353",
        "iso2": "IN",
        "capital": "",
        "lat": "10.325163",
        "lng": "76.955299",
        "population": "114308"
    },
    {
        "city": "Aurang\u0101b\u0101d",
        "admin": "Bih\u0101r",
        "country": "India",
        "population_proper": "95929",
        "iso2": "IN",
        "capital": "",
        "lat": "24.752037",
        "lng": "84.374202",
        "population": "95929"
    },
    {
        "city": "Kohima",
        "admin": "N\u0101g\u0101land",
        "country": "India",
        "population_proper": "92113",
        "iso2": "IN",
        "capital": "admin",
        "lat": "25.674673",
        "lng": "94.110988",
        "population": "92113"
    },
    {
        "city": "Gangtok",
        "admin": "Sikkim",
        "country": "India",
        "population_proper": "30700",
        "iso2": "IN",
        "capital": "admin",
        "lat": "27.325739",
        "lng": "88.612155",
        "population": "77900"
    },
    {
        "city": "Kar\u016br",
        "admin": "Tamil N\u0101du ",
        "country": "India",
        "population_proper": "76915",
        "iso2": "IN",
        "capital": "",
        "lat": "10.960277",
        "lng": "78.076753",
        "population": "76915"
    },
    {
        "city": "Jorh\u0101t",
        "admin": "Assam",
        "country": "India",
        "population_proper": "69033",
        "iso2": "IN",
        "capital": "",
        "lat": "26.757509",
        "lng": "94.203055",
        "population": "69033"
    },
    {
        "city": "Panaji",
        "admin": "Goa",
        "country": "India",
        "population_proper": "65586",
        "iso2": "IN",
        "capital": "admin",
        "lat": "15.498289",
        "lng": "73.824541",
        "population": "65586"
    },
    {
        "city": "Saidpur",
        "admin": "Jammu and Kashm\u012br",
        "country": "India",
        "population_proper": "58416",
        "iso2": "IN",
        "capital": "",
        "lat": "34.318174",
        "lng": "74.457093",
        "population": "63035"
    },
    {
        "city": "Tezpur",
        "admin": "Assam",
        "country": "India",
        "population_proper": "58851",
        "iso2": "IN",
        "capital": "",
        "lat": "26.633333",
        "lng": "92.8",
        "population": "58851"
    },
    {
        "city": "Itanagar",
        "admin": "Arun\u0101chal Pradesh",
        "country": "India",
        "population_proper": "44971",
        "iso2": "IN",
        "capital": "admin",
        "lat": "27.102349",
        "lng": "93.692047",
        "population": "44971"
    },
    {
        "city": "Daman",
        "admin": "Dam\u0101n and Diu",
        "country": "India",
        "population_proper": "39737",
        "iso2": "IN",
        "capital": "admin",
        "lat": "20.414315",
        "lng": "72.83236",
        "population": "39737"
    },
    {
        "city": "Silvassa",
        "admin": "D\u0101dra and Nagar Haveli",
        "country": "India",
        "population_proper": "27359",
        "iso2": "IN",
        "capital": "admin",
        "lat": "20.273855",
        "lng": "72.996728",
        "population": "27359"
    },
    {
        "city": "Diu",
        "admin": "Dam\u0101n and Diu",
        "country": "India",
        "population_proper": "23779",
        "iso2": "IN",
        "capital": "",
        "lat": "20.715115",
        "lng": "70.987952",
        "population": "23779"
    },
    {
        "city": "Dispur",
        "admin": "Assam",
        "country": "India",
        "population_proper": "16140",
        "iso2": "IN",
        "capital": "admin",
        "lat": "26.135638",
        "lng": "91.800688",
        "population": "16140"
    },
    {
        "city": "Kavaratti",
        "admin": "Lakshadweep",
        "country": "India",
        "population_proper": "10688",
        "iso2": "IN",
        "capital": "admin",
        "lat": "10.566667",
        "lng": "72.616667",
        "population": "10688"
    },
    {
        "city": "Calicut",
        "admin": "Kerala",
        "country": "India",
        "population_proper": "",
        "iso2": "IN",
        "capital": "minor",
        "lat": "11.248016",
        "lng": "75.780402",
        "population": ""
    },
    {
        "city": "Kagazn\u0101g\u0101r",
        "admin": "Andhra Pradesh",
        "country": "India",
        "population_proper": "",
        "iso2": "IN",
        "capital": "minor",
        "lat": "19.331589",
        "lng": "79.466051",
        "population": ""
    },
    {
        "city": "Jaipur",
        "admin": "R\u0101jasth\u0101n",
        "country": "India",
        "population_proper": "",
        "iso2": "IN",
        "capital": "admin",
        "lat": "26.913312",
        "lng": "75.787872",
        "population": ""
    },
    {
        "city": "Ghandinagar",
        "admin": "Gujar\u0101t",
        "country": "India",
        "population_proper": "",
        "iso2": "IN",
        "capital": "admin",
        "lat": "23.216667",
        "lng": "72.683333",
        "population": ""
    },
    {
        "city": "Panchkula",
        "admin": "Hary\u0101na",
        "country": "India",
        "population_proper": "",
        "iso2": "IN",
        "capital": "minor",
        "lat": "30.691512",
        "lng": "76.853736",
        "population": ""
    }
];


/***/ }),

/***/ "./src/app/shared/auths.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/auths.service.ts ***!
  \*****************************************/
/*! exports provided: AuthsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthsService", function() { return AuthsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthsService = class AuthsService {
    constructor() { }
    isAuthenticated() {
        if (window.localStorage.getItem('state') === 'true') {
            return true;
        }
        return false;
    }
};
AuthsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthsService);



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
    insta(name) {
        return this.http.get('https://www.instagram.com/' + name + '/?__a=1');
    }
    doupdateuserdata(data) {
        return this.http.post('https://backendpro.herokuapp.com/doupdateuserdata', data);
    }
    updateuser(data) {
        return this.http.post('https://backendpro.herokuapp.com/updateuser', data);
    }
    usercheck(data) {
        return this.http.post('https://backendpro.herokuapp.com/usercheck', data);
    }
    updataapps(data) {
        return this.http.post('https://backendpro.herokuapp.com/updataapps', data);
    }
    getupdateuser(data) {
        return this.http.post('https://backendpro.herokuapp.com/getupdateuser', data);
    }
    userprofile(data) {
        return this.http.post('https://backendpro.herokuapp.com/userprofile', data);
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
    propertyinfo() {
        return this.http.get('https://backendpro.herokuapp.com/propertyinfo');
    }
    profileinfo() {
        return this.http.get('https://backendpro.herokuapp.com/profileinfo');
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
/* harmony default export */ __webpack_exports__["default"] = (".road {\n  margin: -20px;\n  width: 100%;\n  margin-left: -40px;\n  margin-right: -40px;\n}\n\n.viewboard {\n  background-color: white;\n  padding: 40px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 65%;\n}\n\n.covera {\n  display: block;\n  margin: auto;\n}\n\n.formboard {\n  padding: 40px;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 65%;\n  background-color: white;\n}\n\n.imgc {\n  display: block;\n  margin: auto;\n  width: 95%;\n  -webkit-animation: scaleup 3s;\n          animation: scaleup 3s;\n  cursor: zoom-in;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n}\n\n@-webkit-keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n.small {\n  color: darkgray;\n}\n\n::-webkit-input-placeholder {\n  color: #03a9f4;\n}\n\nlegend {\n  color: #03a9f4;\n}\n\n.bgg {\n  position: absolute;\n  right: 0;\n  margin: 40px;\n  font-size: 24px;\n  margin-right: 50px;\n  background-color: white;\n}\n\ninput[type=text] {\n  border: 1px solid #03a9f4;\n}\n\ninput[type=password] {\n  border: 1px solid #03a9f4;\n}\n\ninput[type=text]:focus {\n  border: 1px solid #03a9f4;\n  transition: border 2s ease-in-out;\n}\n\ninput[type=password]:focus {\n  border: 1px solid #03a9f4;\n  transition: border 2s ease-in-out;\n}\n\nbutton {\n  background-color: #03a9f4;\n}\n\n.query {\n  position: absolute;\n  bottom: 0;\n  font-size: 30px;\n  cursor: pointer;\n  right: 0;\n  margin: 30px;\n  color: #03a9f4;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .loader {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    margin: 25px;\n    font-size: 20px;\n    color: #03a9f4;\n  }\n  .loader i {\n    -webkit-animation: rotate infinite;\n            animation: rotate infinite;\n  }\n\n  .formboard {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    background-color: white;\n    border-radius: 0px;\n  }\n}\n\n.look {\n  color: darkgray;\n  font-size: 12px;\n  padding: 5px 5px 10px 0px;\n}\n\ni {\n  cursor: pointer;\n}\n\n.loader {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 25px;\n  font-size: 30px;\n  color: #03a9f4;\n  transition: -webkit-animation ease-in-out;\n  transition: animation ease-in-out;\n  transition: animation ease-in-out, -webkit-animation ease-in-out;\n}\n\n.loader i {\n  animation: rotate 2s infinite alternate-reverse;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpZnQvQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXHNoaWZ0XFxzaGlmdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hpZnQvc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNERjs7QURHQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7QUNBRjs7QURFQTtFQUNFO0lBQ0UscUJBQUE7RUNDRjtFRENBO0lBQ0UsbUJBQUE7RUNDRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxxQkFBQTtFQ0NGO0VEQ0E7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQXJESztBQ3VEUDs7QURBQTtFQUNFLGNBeERLO0FDMkRQOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSUY7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7QUNPRjs7QURMQTtFQUNFLHlCQWxGSztBQzBGUDs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQTNGSztBQ29HUDs7QURQQTtFQUNFO0lBQ0UsYUFBQTtFQ1VGOztFRFJBO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxjQXZHRztFQ2tITDtFRFZFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1lKOztFRFRBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQVksdUJBQUE7SUFFWixrQkFBQTtFQ1lGO0FBQ0Y7O0FEVkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0FDYUY7O0FEVkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBcklLO0VBc0lMLHlDQUFBO0VBQUEsaUNBQUE7RUFBQSxnRUFBQTtBQ2FGOztBRFpFO0VBQ0UsK0NBQUE7QUNjSjs7QURYQTtFQUNFO0lBQ0UsdUJBQUE7RUNjRjtFRFpBO0lBQ0UseUJBQUE7RUNjRjtBQUNGOztBRHBCQTtFQUNFO0lBQ0UsdUJBQUE7RUNjRjtFRFpBO0lBQ0UseUJBQUE7RUNjRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hpZnQvc2hpZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyazogIzAzYTlmNDtcclxuJGxpdGU6ICNlM2YyZmQ7XHJcblxyXG4ucm9hZCB7XHJcbiAgbWFyZ2luOiAtMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcclxufVxyXG4udmlld2JvYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDY1JTtcclxufVxyXG4uY292ZXJhe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybWJvYXJkIHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogNjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uaW1nYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZXVwIDNzO1xyXG4gIGN1cnNvcjogem9vbS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLnNtYWxsIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxubGVnZW5kIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLmJnZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbn1cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnF1ZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICBpIHtcclxuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtYm9hcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwOyAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG4ubG9vayB7XHJcbiAgY29sb3I6IGRhcmtncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHggNXB4IDEwcHggMHB4O1xyXG59XHJcbmkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gZWFzZS1pbi1vdXQ7XHJcbiAgaSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi5yb2FkIHtcbiAgbWFyZ2luOiAtMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbn1cblxuLnZpZXdib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0MHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNjUlO1xufVxuXG4uY292ZXJhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm1ib2FyZCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDY1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbWdjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDk1JTtcbiAgYW5pbWF0aW9uOiBzY2FsZXVwIDNzO1xuICBjdXJzb3I6IHpvb20taW47XG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiAycyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBzY2FsZXVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uc21hbGwge1xuICBjb2xvcjogZGFya2dyYXk7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDNhOWY0O1xufVxuXG5sZWdlbmQge1xuICBjb2xvcjogIzAzYTlmNDtcbn1cblxuLmJnZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogNDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzYTlmNDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAycyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbn1cblxuLnF1ZXJ5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAzMHB4O1xuICBjb2xvcjogIzAzYTlmNDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hcy1tb2Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMwM2E5ZjQ7XG4gIH1cbiAgLmxvYWRlciBpIHtcbiAgICBhbmltYXRpb246IHJvdGF0ZSBpbmZpbml0ZTtcbiAgfVxuXG4gIC5mb3JtYm9hcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG4ubG9vayB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDEwcHggMHB4O1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDI1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiBlYXNlLWluLW91dDtcbn1cbi5sb2FkZXIgaSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ShiftComponent = class ShiftComponent {
    constructor(loc, router, location) {
        this.loc = loc;
        this.router = router;
        this.location = location;
        this.goo = false;
        this.msg = "";
        this.enter = true;
        this.login = {
            username: "",
            password: "",
            cpassword: '',
            mobile: "",
            email: "",
            date: new Date(),
            update: 0
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
                        console.log(data, data['msg']);
                        this.eat(data['msg'], 1);
                        this.logdata = false;
                        window.localStorage.setItem("username", data['username']);
                        window.localStorage.setItem("logged", data['username']);
                        window.localStorage.setItem("update", data['update']);
                        window.localStorage.setItem("_id", data['_id']);
                        this.router.navigate(['/userdata']);
                        window.localStorage.setItem("state", "true");
                    }
                    else {
                        this.eat(data['msg'], 2);
                        this.logdata = false;
                        this.enter = true;
                        window.localStorage.setItem("state", "false");
                    }
                });
            }
            else {
                this.logdata = false;
                this.enter = true;
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".road {\n  margin: -20px;\n  width: 100%;\n  margin-left: -40px;\n  margin-right: -40px;\n}\n\n.viewboard {\n  background-color: white;\n  padding: 40px;\n  border-radius: 0px 30px 30px 0px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 65%;\n}\n\n.formboard {\n  padding: 40px;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 65%;\n}\n\n.imgc {\n  display: block;\n  margin: auto;\n  width: 95%;\n  -webkit-animation: scaleup 3s;\n          animation: scaleup 3s;\n  cursor: zoom-in;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n}\n\n@-webkit-keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes scaleup {\n  from {\n    transform: scale(0.9);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n.small {\n  color: darkgray;\n}\n\n::-webkit-input-placeholder {\n  color: #03a9f4;\n}\n\nlegend {\n  color: #03a9f4;\n}\n\n.bgg {\n  position: absolute;\n  right: 0;\n  margin: 40px;\n  font-size: 24px;\n  margin-right: 50px;\n  color: #e3f2fd;\n}\n\ninput[type=text] {\n  border: 1px dotted #03a9f4;\n}\n\ninput[type=password] {\n  border: 1px dotted #03a9f4;\n}\n\ninput[type=text]:focus {\n  border: 1px solid #03a9f4;\n  transition: border 2s ease-in-out;\n}\n\ninput[type=password]:focus {\n  border: 1px solid #03a9f4;\n  transition: border 2s ease-in-out;\n}\n\nbutton {\n  background-color: #03a9f4;\n}\n\n.query {\n  position: absolute;\n  bottom: 0;\n  font-size: 30px;\n  cursor: pointer;\n  right: 0;\n  margin: 30px;\n  color: #03a9f4;\n}\n\n.right {\n  float: right;\n  text-align: right;\n}\n\ni {\n  cursor: pointer;\n}\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none;\n  }\n\n  .formboard {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5zaGlmdC9DOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERvY3VtZW50c1xccmFjZS9zcmNcXGFwcFxcdW5zaGlmdFxcdW5zaGlmdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdW5zaGlmdC91bnNoaWZ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UscUJBQUE7RUNFRjtFREFBO0lBQ0UsbUJBQUE7RUNFRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxxQkFBQTtFQ0VGO0VEQUE7SUFDRSxtQkFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxjQS9DSztBQ2tEUDs7QUREQTtFQUNFLGNBbERLO0FDc0RQOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBekRLO0FDOERQOztBREZBO0VBQ0UsMEJBQUE7QUNLRjs7QURIQTtFQUNFLDBCQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FDT0Y7O0FETEE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FDUUY7O0FETkE7RUFDRSx5QkE1RUs7QUNxRlA7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FyRks7QUMrRlA7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURSQTtFQUNFLGVBQUE7QUNXRjs7QURUQTtFQUNFO0lBQ0UsYUFBQTtFQ1lGOztFRFZBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUNhRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdW5zaGlmdC91bnNoaWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwM2E5ZjQ7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLnJvYWQge1xyXG4gIG1hcmdpbjogLTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTQwcHg7XHJcbn1cclxuLnZpZXdib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuLmZvcm1ib2FyZCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogMzUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDY1JTtcclxufVxyXG4uaW1nYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZXVwIDNzO1xyXG4gIGN1cnNvcjogem9vbS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLnNtYWxsIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxubGVnZW5kIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLmJnZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnF1ZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm1ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5yb2FkIHtcbiAgbWFyZ2luOiAtMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbn1cblxuLnZpZXdib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmZvcm1ib2FyZCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDY1JTtcbn1cblxuLmltZ2Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTUlO1xuICBhbmltYXRpb246IHNjYWxldXAgM3M7XG4gIGN1cnNvcjogem9vbS1pbjtcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxldXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5zbWFsbCB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwM2E5ZjQ7XG59XG5cbmxlZ2VuZCB7XG4gIGNvbG9yOiAjMDNhOWY0O1xufVxuXG4uYmdnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgY29sb3I6ICNlM2YyZmQ7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzAzYTlmNDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgIzAzYTlmNDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2E5ZjQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAycyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDNhOWY0O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XG59XG5cbi5xdWVyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMzBweDtcbiAgY29sb3I6ICMwM2E5ZjQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYXMtbW9iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm1ib2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn0iXX0= */");

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

/***/ "./src/app/wantroom/wantroom.component.scss":
/*!**************************************************!*\
  !*** ./src/app/wantroom/wantroom.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fds {\n  float: right;\n}\n\n.badge {\n  cursor: pointer;\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FudHJvb20vQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEb2N1bWVudHNcXHJhY2Uvc3JjXFxhcHBcXHdhbnRyb29tXFx3YW50cm9vbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2FudHJvb20vd2FudHJvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvd2FudHJvb20vd2FudHJvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmRzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJhZGdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5jYXJkc3Mge1xyXG4vLyAgIGhlaWdodDogMTUwcHg7XHJcbi8vICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIiwiLmZkcyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/wantroom/wantroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/wantroom/wantroom.component.ts ***!
  \************************************************/
/*! exports provided: WantroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WantroomComponent", function() { return WantroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/locality.service */ "./src/app/shared/locality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_CITY__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/CITY */ "./src/app/shared/CITY.ts");





let WantroomComponent = class WantroomComponent {
    constructor(loc, router) {
        this.loc = loc;
        this.router = router;
        this.prop = {
            starts: 0,
            ends: 0
        };
        this.profile = {
            img: '',
            email: '',
            date: '',
            fullname: '',
            username: '',
            properties: '',
            owned: '',
            mobile: '',
            gender: 'male',
            bio: '',
            update: '',
            dob: '',
            insta: '',
            feed: '',
            _id: ''
        };
        this.search = '';
        this.city = _shared_CITY__WEBPACK_IMPORTED_MODULE_4__["CITY"];
        this.pop = false;
    }
    ngOnInit() {
        this.getloc();
        const prof = {
            username: window.localStorage.getItem('username')
        };
        this.username = window.localStorage.getItem('username');
        if (window.localStorage.getItem('update') === '0') {
            this.loc.userprofile(prof).subscribe(data => {
                this.profile = data[0];
                // this.eat('Sucess', 1);
            });
        }
        else {
            this.loc.getupdateuser(prof).subscribe(data => {
                this.profile = data[0];
                // this.profile.update = window.localStorage.getItem('update');
                // this.instaname = data[0]['insta'];
                // this.prof.fname = this.profile.fullname;
            });
        }
    }
    getloc() {
        this.loc.getPosition().then(data => {
            console.log(data);
            this.positions = data;
            this.pop = false;
            // this.loc.goord(this.positions['lat'], this.positions['lng']).subscribe(datas => {
            //   console.log(datas);
            // });
        });
    }
    setLoc(pos) {
        this.positions = pos;
        this.pop = true;
    }
};
WantroomComponent.ctorParameters = () => [
    { type: _shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WantroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wantroom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wantroom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wantroom/wantroom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wantroom.component.scss */ "./src/app/wantroom/wantroom.component.scss")).default]
    })
], WantroomComponent);



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