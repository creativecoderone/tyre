(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_lander_lander_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lander/lander.component */ "./src/app/lander/lander.component.ts");
/* harmony import */ var src_app_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var src_app_water_water_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/water/water.component */ "./src/app/water/water.component.ts");
/* harmony import */ var src_app_application_locality_locality_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/application/locality/locality.component */ "./src/app/application/locality/locality.component.ts");
/* harmony import */ var src_app_shift_shift_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shift/shift.component */ "./src/app/shift/shift.component.ts");
/* harmony import */ var src_app_unshift_unshift_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/unshift/unshift.component */ "./src/app/unshift/unshift.component.ts");
/* harmony import */ var src_app_rental_rental_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/rental/rental.component */ "./src/app/rental/rental.component.ts");










var routes = [
    {
        path: "lander",
        component: src_app_lander_lander_component__WEBPACK_IMPORTED_MODULE_3__["LanderComponent"]
    },
    {
        path: "",
        redirectTo: "/lander",
        pathMatch: "full"
    },
    {
        path: "water",
        component: src_app_water_water_component__WEBPACK_IMPORTED_MODULE_5__["WaterComponent"]
    },
    {
        path: "locality",
        component: src_app_application_locality_locality_component__WEBPACK_IMPORTED_MODULE_6__["LocalityComponent"]
    },
    {
        path: "shift",
        component: src_app_shift_shift_component__WEBPACK_IMPORTED_MODULE_7__["ShiftComponent"]
    },
    {
        path: "unshift",
        component: src_app_unshift_unshift_component__WEBPACK_IMPORTED_MODULE_8__["UnshiftComponent"]
    },
    {
        path: "rental",
        component: src_app_rental_rental_component__WEBPACK_IMPORTED_MODULE_9__["RentalComponent"]
    },
    {
        path: "**",
        component: src_app_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" [ngClass]=\"(extract==true)?'activate':'board'\">\n  <!--<button class=\"plus\" *ngIf=\"state\" >M</button>-->\n  <!--<i class=\"fas fa-plus-circle\"></i>-->\n  <div class=\"desk\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<div class=\"online as-mob\">\n  <div class=\"sidebar\" [ngClass]=\"(extract==true)?'activatesidebar':'sidebar'\">\n    <br>\n    <!--{{extract}}-->\n    <i class='fas fa-expand extract' *ngIf=\"extract\" (click)=\"extract = false\"></i>\n    <i class='fas fa-expand-arrows-alt extract' *ngIf=\"!extract\" (click)=\"extract = true\"></i> <br> <br>\n    <a uk-tooltip=\"title:Dashboard;pos:right;\" [routerLink]=\"['/lander']\"><i class='fas fa-braille'></i><span> Dashboard</span></a>\n    <a uk-tooltip=\"title:Actions;pos:right;\" [routerLink]=\"['/locality']\"><i class='fas fa-bullseye'></i><span> Locality</span></a>\n    <a uk-tooltip=\"title:About;pos:right;\" [routerLink]=\"['/rental']\"><i class='fas fa-clipboard'></i><span> Rental board</span></a>\n    <a uk-tooltip=\"title:Cluster;pos:right;\" [routerLink]=\"['/shift']\"><i class='fas fa-users'></i><span> Login / Register</span></a>\n    <a uk-tooltip=\"title:Remote;pos:right;\" [routerLink]=\"['/unshift']\"><i class='fas fa-chart-line'></i><span> Change password</span></a>\n    <a uk-tooltip=\"title:Contact;pos:right;\" href=\"#\"><i class='fas fa-cogs'></i><span> Contact</span></a>\n    <a uk-tooltip=\"title:Logout;pos:right;\" (click)=\"logout()\"><i class='fas fa-user'></i><span> Logout</span></a>\n  </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n\n\n<!--7=77777777777777777777777777777777777777777777-->\n<div id=\"mySidebar\" class=\"sidebars\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <br>\n  <!--{{extract}}-->\n  <a uk-tooltip=\"title:Dashboard;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/lander']\"><i class='fas fa-braille'></i><span>  </span></a>\n  <a uk-tooltip=\"title:Actions;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/locality']\"><i class='fas fa-bullseye'></i><span>  </span></a>\n  <a uk-tooltip=\"title:About;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/rental']\"><i class='fas fa-clipboard'></i><span> </span></a>\n  <a uk-tooltip=\"title:Cluster;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/shift']\"><i class='fas fa-users'></i><span>  </span></a>\n  <a uk-tooltip=\"title:Remote;pos:right;\" (click)=\"closeNav()\" [routerLink]=\"['/unshift']\"><i class='fas fa-chart-line'></i><span>  </span></a>\n  <a uk-tooltip=\"title:Contact;pos:right;\" (click)=\"closeNav()\" href=\"#\"><i class='fas fa-cogs'></i><span>  </span></a>\n  <a uk-tooltip=\"title:Logout;pos:right;\" (click)=\"closeNav()\" (click)=\"logout()\"><i class='fas fa-user'></i><span>  </span></a>\n</div>\n\n<button class=\"btnclose as-non-mob\" (click)=\"openNav()\">&#9776;</button>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto; }\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1; }\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px; }\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.desk {\n  padding: 20px; }\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.navrow span {\n    color: #0d47a1;\n    -webkit-transition: font-weight 1s ease-in-out;\n    transition: font-weight 1s ease-in-out; }\n\n.navrow span:hover {\n    font-weight: bold;\n    cursor: pointer;\n    -webkit-transition: font-weight 1s ease-in;\n    transition: font-weight 1s ease-in; }\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd; }\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1; }\n\n.title {\n  background-color: #0d47a1;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px; }\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  -webkit-transition: -webkit-animation 5s ease-in;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in; }\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n@keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n.usericon {\n  text-align: center;\n  font-size: 40px; }\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none; }\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer; }\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px; }\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  -webkit-transition: display 1s ease-in;\n  transition: display 1s ease-in; }\n\n.inactive_screen {\n  -webkit-transition: height 1s ease-in;\n  transition: height 1s ease-in; }\n\n.inactive_screen .cardboard {\n    display: none;\n    -webkit-transition: display 1s ease-in;\n    transition: display 1s ease-in; }\n\nth {\n  color: #0d47a1;\n  font-weight: bold; }\n\ntr:hover {\n  background-color: #e3f2fd; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%; }\n\n.sidebar a {\n    padding: 10px;\n    width: 95%;\n    display: block;\n    margin: 10px;\n    border-radius: 10px;\n    text-decoration: none;\n    color: #e3f2fd;\n    border: 1px solid #0d47a1;\n    -webkit-transition: box-shadow 1s ease-in-out;\n    transition: box-shadow 1s ease-in-out; }\n\n.sidebar a i {\n      margin: 5px;\n      float: right; }\n\n.sidebar a:hover {\n    border: 1px solid #e3f2fd;\n    box-shadow: 0px 0px 1px 1px #e3f2fd;\n    -webkit-transition: box-shadow 1s ease-in;\n    transition: box-shadow 1s ease-in; }\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1); }\n\ni {\n  cursor: pointer; }\n\n.activatesidebar {\n  width: 5%; }\n\n.activatesidebar a {\n    padding: 30px;\n    float: inherit; }\n\n.activatesidebar a span {\n      display: none; }\n\n.activatesidebar a i {\n      text-align: center; }\n\n.activatesidebar a:hover {\n    box-shadow: none;\n    border: 0px; }\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%; }\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n/* The sidebar menu */\n\n.sidebars {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: #0d47a1;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /* 0.5 second transition effect to slide in the sidebar */ }\n\n/* The sidebar links */\n\n.sidebars a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #e3f2fd;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n/* When you mouse over the navigation links, change their color */\n\n.sidebars a:hover {\n  color: #f1f1f1; }\n\n/* Position and style the close button (top right corner) */\n\n.sidebars .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px; }\n\n/* The button used to open the sidebar */\n\n.openbtn {\n  font-size: 20px;\n  cursor: pointer;\n  background-color: #111;\n  color: white;\n  padding: 10px 15px;\n  border: none; }\n\n.openbtn:hover {\n  background-color: #444; }\n\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n\n#main {\n  -webkit-transition: margin-left 0.5s;\n  transition: margin-left 0.5s;\n  /* If you want a transition effect */\n  padding: 20px; }\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n  .sidebars {\n    padding-top: 15px; }\n  .sidebars a {\n    font-size: 18px; } }\n\n.btnclose {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin: 25px;\n  z-index: 1002;\n  background-color: #e3f2fd;\n  border-radius: 5px;\n  color: #0d47a1;\n  border: 1px solid #0d47a1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFx0eXJlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDViwwQkFUWTtFQVVaLGlDQUFnQztFQUNoQyxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQWpCWSxFQWtCYjs7QUFDRDtFQUNFLDBCQXBCWTtFQXFCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGVBekJZO0VBMEJaLGFBQVksRUFDYjs7QUFDRDtFQUNFLDBCQTdCWTtFQThCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUcxQixlQXBDWTtFQXFDWixhQUFZLEVBQ2I7O0FBRUQ7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGtDQUF5QjtZQUF6QiwwQkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHVDQUFzQyxFQVV2Qzs7QUFmRDtJQU9JLGVBMURVO0lBMkRWLCtDQUFzQztJQUF0Qyx1Q0FBc0MsRUFDdkM7O0FBVEg7SUFXSSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZiwyQ0FBa0M7SUFBbEMsbUNBQWtDLEVBQ25DOztBQUVIO0VBQ0Usd0JBQXVCO0VB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QzdFOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSwwQkFBeUI7RUFDekIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUE5UFk7RUErUFosZUFBYztFQUNkLHlCQUFnQjtFQUFoQixpQkFBZ0IsRUFDakI7O0FBRUQsa0VBQWtFOztBQUNsRTtFQUNFLGVBQWMsRUFDZjs7QUFFRCw0REFBNEQ7O0FBQzVEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixrQkFBaUIsRUFDbEI7O0FBRUQseUNBQXlDOztBQUN6QztFQUNFLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQsdUhBQXVIOztBQUN2SDtFQUNFLHFDQUE0QjtFQUE1Qiw2QkFBNEI7RUFBRSxxQ0FBcUM7RUFDbkUsY0FBYSxFQUNkOztBQUVELGlJQUFpSTs7QUFDakk7RUFDRTtJQUNFLGtCQUFpQixFQUNsQjtFQUNEO0lBQ0UsZ0JBQWUsRUFDaEIsRUFBQTs7QUFFSDtFQUNFLGdCQUFlO0VBQ2YsUUFBTztFQUNQLFVBQVM7RUFDVCxhQUFZO0VBQ1osY0FBYTtFQUNiLDBCQXBUWTtFQXFUWixtQkFBa0I7RUFDbEIsZUF2VFk7RUF3VFosMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLmJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAyMCU7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDBweCAwcHggMjVweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ub25saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG59XHJcbi5wbHVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG4ucG9zYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbi5kZXNrIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5uYXZyb3cge1xyXG4gIG1hcmdpbjogMjVweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIHNwYW46aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG59XHJcbi5jYXJkLXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBjb2xvcjogJGxpdGU7XHJcbn1cclxuLmNhcmQtbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAyMjVweDtcclxufVxyXG4uZGVzazpob3ZlciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGFuaW1hdGlvbjogd2lkdGhleHRyYWN0IDVzO1xyXG4gICAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDVzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgd2lkdGhleHRyYWN0IHtcclxuICBmcm9tIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICB9XHJcbn1cclxuLnVzZXJpY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZXhwYW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgMnM7XHJcbn1cclxuLmV4cGFuZDpob3ZlciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XHJcbn1cclxuLmNhcmRib2FyZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYWN0aXZlX3NjcmVlbiB7XHJcbiAgLmNhcmRib2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uaW5hY3RpdmVfc2NyZWVuIHtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbjtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbnRoIHtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxudHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkbGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBpIHtcclxuICAgICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaXRlO1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAkbGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuLmV4dHJhY3Qge1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxuICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG59XHJcbi5hY3RpdmF0ZXNpZGViYXIge1xyXG4gIHdpZHRoOiA1JTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG4gIGEge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OiBpbmhlcml0O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICB9XHJcbn1cclxuLmFjdGl2YXRlIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxufVxyXG4ucGx1czpob3ZlciB7XHJcbiAgaSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxuICB9XHJcbn1cclxuLyogVGhlIHNpZGViYXIgbWVudSAqL1xyXG4uc2lkZWJhcnMge1xyXG4gIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xyXG4gIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyazsgLyogQmxhY2sqL1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXHJcbiAgdHJhbnNpdGlvbjogMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZWJhciAqL1xyXG59XHJcblxyXG4vKiBUaGUgc2lkZWJhciBsaW5rcyAqL1xyXG4uc2lkZWJhcnMgYSB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cclxuLnNpZGViYXJzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAodG9wIHJpZ2h0IGNvcm5lcikgKi9cclxuLnNpZGViYXJzIC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBidXR0b24gdXNlZCB0byBvcGVuIHRoZSBzaWRlYmFyICovXHJcbi5vcGVuYnRuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5vcGVuYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41czsgLyogSWYgeW91IHdhbnQgYSB0cmFuc2l0aW9uIGVmZmVjdCAqL1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZWJhcnMge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFycyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuLmJ0bmNsb3NlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwMDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.eat("Logged out", 2);
        setTimeout(function () {
            window.localStorage.removeItem("logged");
            window.localStorage.removeItem("state");
            _this.router.navigate(["/shift"]);
        }, 3000);
    };
    AppComponent.prototype.eat = function (msg, color) {
        this.msg = msg;
        var x = document.getElementById("snackbar");
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
    };
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidebar").style.width = "85px";
        document.getElementById("main").style.marginLeft = "88px";
    };
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
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
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
                _rental_rental_component__WEBPACK_IMPORTED_MODULE_15__["RentalComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]],
            providers: [src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_12__["LocalityService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/locality/locality.component.html":
/*!**************************************************************!*\
  !*** ./src/app/application/locality/locality.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"!loader\">\n  {{location|json}}\n</div>--><br> <br>\n<legend class=\"uk-legend\">Location <i class=\"fas fa-location-arrow\"></i></legend>\n\n<div class=\"row\">\n  <div class=\"col-md-2\">\n\n  </div>\n  <div class=\"col-md-4\">\n\n    <form>\n      <fieldset class=\"uk-fieldset\">\n        <small>Choose from the list</small>\n        <div class=\"uk-margin\">\n          <label for=\"\">State <i class=\"fas fa-map-marker\"></i></label>\n          <select uk-tooltip=\"title:Select state you belongs to;pos:bottom\" class=\"uk-select\" [(ngModel)]=\"loc.state\" (click)=\"stateset(loc.state)\"\n            name=\"asdsdc\">\n          <option *ngFor=\"let item of location_keys; let i=index\"   >{{item}}</option>\n      </select>\n        </div>\n        <div class=\"uk-margin\" *ngIf=\"loc?.state?.length>0\">\n          <label for=\"\">City <i class=\"fas fa-compass\"></i></label>\n          <select uk-tooltip=\"title:Select city you belongs to;pos:bottom\" class=\"uk-select\" [(ngModel)]=\"loc.city\" (click)=\"cityset(loc.city)\"\n            name=\"sdcscf\">\n            <option *ngFor=\"let item of cities; let i=index\" >{{item}} </option>\n          </select>\n        </div>\n        <div class=\"uk-margin\" *ngIf=\"loc?.city?.length>0\">\n          <label for=\"\">locality <i class=\"fas fa-map\"></i></label>\n          <select uk-tooltip=\"title:Select locality area you belongs to;pos:bottom\" class=\"uk-select\" [(ngModel)]=\"loc.area\" name=\"a sascas f\">\n          <option *ngFor=\"let item of areas; let i=index\" >{{item}} </option>\n         </select>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  <div class=\"col-md-4\">\n    <form>\n      <fieldset class=\"uk-fieldset\">\n        <small>Enter manually</small>\n        <div class=\"uk-margin\">\n          <label for=\"\">State <i class=\"fas fa-map-marker\"></i></label>\n          <input type=\"text\" uk-tooltip=\"title:Type state you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.state\" name=\"asdsdc\"\n          />\n        </div>\n        <div class=\"uk-margin\" *ngIf=\"loc?.state?.length>0\">\n          <label for=\"\">City <i class=\"fas fa-compass\"></i></label>\n          <input type=\"text\" uk-tooltip=\"title:Type city you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.city\" name=\"sdcscf\">\n\n        </div>\n        <div class=\"uk-margin\" *ngIf=\"loc?.city?.length>0\">\n          <label for=\"\">locality <i class=\"fas fa-map\"></i></label>\n          <input type=\"text\" uk-tooltip=\"title:Type locality area you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.area\"\n            name=\"a sascas f\">\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  <div class=\"col-md-2\">\n\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n    <div class=\"uk-margin\" *ngIf=\"loc?.area?.length>0\">\n      <label for=\"\">Pincode <i class=\"fas fa-map-pin\"></i></label>\n      <input type=\"number\" placeholder=\"Enter your pincode\" uk-tooltip=\"title:Type pincode you belongs to;pos:bottom\" class=\"uk-input\" [(ngModel)]=\"loc.pin\" name=\"a sascas f\">\n    </div>\n    <div class=\"uk-margin\" *ngIf=\"loc?.area?.length>0\">\n      <button uk-tooltip=\"title:All set to go....!;pos:bottom\" class=\"btn-block uk-button uk-button-primary\">Set location </button>\n    </div>\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n<i *ngIf=\"loader\" class='fab loader fa-digital-ocean'></i>\n<!--<div class=\"uk-child-width-1-3@m uk-grid-small uk-grid-match\" uk-grid>\n  <div *ngFor=\"let item of location; let i=index\">\n    <div class=\"uk-card uk-card-default uk-card-body\">\n      <h3 class=\"uk-card-title\">{{item?.City}}</h3>\n      <h6>{{item?.District}}</h6>\n      <h6>{{item?.PostOfficeName}}</h6>\n      <h6>{{item?.Pincode}}</h6>\n    </div>\n  </div>\n</div>-->\n<img src=\"./assets/Windmill_moving_fast.gif\" class=\"mill as-mob\" alt=\"\">\n<img src=\"http://www.powerelectricsolution.com/wp-content/uploads/2017/08/wind.gif\" class=\"mill2 as-mob\" alt=\"\">\n<img src=\"./assets/Windmill_moving_fast.gif\" class=\"as-non-mob mill3\" alt=\"\">\n"

/***/ }),

/***/ "./src/app/application/locality/locality.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/application/locality/locality.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desk {\n  padding: 20px; }\n\n.loader {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 30px;\n  margin: 20px;\n  color: #0d47a1;\n  animation: rotate 3s infinite alternate-reverse; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.mill {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  margin: auto;\n  width: 30%;\n  opacity: 0.3; }\n\n.mill2 {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: block;\n  margin: auto;\n  width: 40%;\n  opacity: 0.3;\n  margin-bottom: -100px; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .as-non-mob {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    width: 80%;\n    opacity: 0.1; } }\n\n@media (min-width: 1200px) {\n  .as-non-mob {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vbG9jYWxpdHkvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFx0eXJlL3NyY1xcYXBwXFxhcHBsaWNhdGlvblxcbG9jYWxpdHlcXGxvY2FsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsZ0JBQWU7RUFDZixhQUFZO0VBQ1osZUFBYztFQUNkLGdEQUErQyxFQUNoRDs7QUFDRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGVBQWM7RUFDZCxhQUFZO0VBQ1osV0FBVTtFQUNWLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsU0FBUTtFQUNSLGVBQWM7RUFDZCxhQUFZO0VBQ1osV0FBVTtFQUNWLGFBQVk7RUFDWixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0UsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsV0FBVTtJQUNWLGFBQVksRUFDYixFQUFBOztBQUVIO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLmRlc2sge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDNzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4ubWlsbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDMwJTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5taWxsMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5hcy1ub24tbW9iIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5hcy1ub24tbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");



var LocalityComponent = /** @class */ (function () {
    function LocalityComponent(locs) {
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
    LocalityComponent.prototype.ngOnInit = function () {
        this.loader = true;
        this.locServ();
    };
    LocalityComponent.prototype.locServ = function () {
        var _this = this;
        this.locs.getlocality().subscribe(function (data) {
            _this.loader = false;
            _this.location = data;
            // tslint:disable-next-line:forin
            for (var key in _this.location) {
                _this.location_keys.push(key);
            }
        }, function (err) { });
    };
    LocalityComponent.prototype.stateset = function (state) {
        this.cities = [];
        this.loc.city = "";
        this.loc.area = "";
        this.loc.pin = "";
        this.city_list = this.location[state];
        // tslint:disable-next-line:forin
        for (var key in this.city_list) {
            this.cities.push(key);
        }
    };
    LocalityComponent.prototype.cityset = function (statecity) {
        this.loc.area = "";
        this.loc.pin = "";
        this.areas = [];
        this.areas = this.city_list[statecity];
        // tslint:disable-next-line:forin
    };
    LocalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-locality",
            template: __webpack_require__(/*! ./locality.component.html */ "./src/app/application/locality/locality.component.html"),
            styles: [__webpack_require__(/*! ./locality.component.scss */ "./src/app/application/locality/locality.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"]])
    ], LocalityComponent);
    return LocalityComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/lander/lander.component.html":
/*!**********************************************!*\
  !*** ./src/app/lander/lander.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"desk\">\n  <h2>Upcoming Trips</h2>\n  <!--<hr class=\"title\">-->\n  <div class=\"navrow\">\n    <span class=\"navitem\">Two wheeler</span>&nbsp;/&nbsp;\n    <span class=\"navitem\">Four wheeler</span>&nbsp;/&nbsp;\n    <span class=\"navitem\">By cycle</span>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 card-left \">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"usericon\">\n                <img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"70\"\n                  alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <b uk-tooltip=\"Username\"> {{username|uppercase}} </b>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card card-right \">\n        <div class=\"card-body\">\n          <button class=\"posbtn\">Add&nbsp;<i class=\"far fa-grin-stars\"></i></button>\n          <button class=\"posbtn\">Address&nbsp;<i class=\"far fa-address-book\"></i></button>\n          <button class=\"posbtn\">FAQ&nbsp;<i class=\"far fa-question-circle\"></i></button>\n          <button class=\"posbtn\">Surprise&nbsp;<i class=\"far fa-surprise\"></i></button>\n          <button class=\"posbtn\">Grin-squint&nbsp;<i class=\"far fa-grin-squint\"></i></button>\n          <button class=\"posbtn\">Grin&nbsp;<i class=\"far fa-grin\"></i></button>\n          <button class=\"posbtn\">Grin-beam-sweat&nbsp;<i class=\"far fa-grin-beam-sweat\"></i></button>\n          <button class=\"posbtn\">Laugh-wink&nbsp;<i class=\"far fa-laugh-wink\"></i></button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <!---------------->\n  <div class=\"row\">\n    <div class=\"col-md-12 card-left\">\n      <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n        <div class=\"card-body\">\n          <h4>Your information</h4>\n          <i class=\"fas fa-chevron-down expand\" (mouseover)=\"sidemenu = !sidemenu\" (click)=\"sidemenu = !sidemenu\"></i>\n          <div class=\"cardboard\">\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                <i style=\"text-align: left\" class=\"far fa-surprise\"></i> Surprise\n              </div>\n              <div class=\"col-md-2\">\n                <i style=\"text-align: left\" class=\"far fa-meh-rolling-eyes\"></i> Rolling-eyes\n              </div>\n              <div class=\"col-md-2\">\n                <i style=\"text-align: left\" class=\"far fa-grin-squint\"></i> Squint\n              </div>\n              <div class=\"col-md-2\">\n                <i style=\"text-align: left\" class=\"far fa-grin\"></i> Grin\n              </div>\n              <div class=\"col-md-2\">\n                <i style=\"text-align: left\" class=\"far fa-grin-beam-sweat\"></i> Grin-beam-sweat\n              </div>\n              <div class=\"col-md-2\">\n                <i style=\"text-align: left\" class=\"far fa-laugh-wink\"></i> Laugh-wink\n              </div>\n            </div>\n          </div>\n          <br>\n          <form class=\"uk-grid-small\" uk-grid>\n            <div class=\"uk-width-1-1\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"First name\">\n            </div>\n            <div class=\"uk-width-1-2@s\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Last name\">\n            </div>\n            <div class=\"uk-width-1-4@s\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Address line 1\">\n            </div>\n            <div class=\"uk-width-1-4@s\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Address line 2\">\n            </div>\n            <div class=\"uk-width-1-2@s\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"State\">\n            </div>\n            <div class=\"uk-width-1-2@s\">\n              <input class=\"uk-input\" type=\"text\" placeholder=\"Country\">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <!-------------------------------->\n  <div class=\"uk-overflow-auto\">\n    <table class=\"uk-table uk-table-middle uk-table-divider\">\n      <thead>\n        <tr>\n          <th class=\"uk-table-shrink\"></th>\n          <th class=\"uk-table-shrink\">Preserve</th>\n          <th class=\"uk-table-expand\">Expand + Link</th>\n          <th class=\"uk-width-small\">Truncate</th>\n          <th class=\"uk-table-shrink uk-text-nowrap\">Shrink + Nowrap</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n          <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"40\"\n              alt=\"\"></td>\n          <td class=\"uk-table-link\">\n            <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n          </td>\n          <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n          <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n        </tr>\n        <tr>\n          <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n          <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"40\"\n              alt=\"\"></td>\n          <td class=\"uk-table-link\">\n            <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n          </td>\n          <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n          <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n        </tr>\n        <tr>\n          <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n          <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"40\"\n              alt=\"\"></td>\n          <td class=\"uk-table-link\">\n            <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n          </td>\n          <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n          <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n        </tr>\n        <tr>\n          <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n          <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"40\"\n              alt=\"\"></td>\n          <td class=\"uk-table-link\">\n            <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n          </td>\n          <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n          <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<button class=\"plus\" *ngIf=\"state\"><b>{{username|uppercase|slice:0:1}}</b></button>\n"

/***/ }),

/***/ "./src/app/lander/lander.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lander/lander.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto; }\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1; }\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px; }\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.desk {\n  padding: 20px; }\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.navrow span {\n    color: #0d47a1;\n    -webkit-transition: font-weight 1s ease-in-out;\n    transition: font-weight 1s ease-in-out; }\n\n.navrow span:hover {\n    font-weight: bold;\n    cursor: pointer;\n    -webkit-transition: font-weight 1s ease-in;\n    transition: font-weight 1s ease-in; }\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd; }\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1; }\n\n.title {\n  background-color: #0d47a1;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px; }\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  -webkit-transition: -webkit-animation 5s ease-in;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in; }\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n@keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n.usericon {\n  text-align: center;\n  font-size: 40px; }\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none; }\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer; }\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px; }\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  -webkit-transition: display 1s ease-in;\n  transition: display 1s ease-in; }\n\n.inactive_screen {\n  -webkit-transition: height 1s ease-in;\n  transition: height 1s ease-in; }\n\n.inactive_screen .cardboard {\n    display: none;\n    -webkit-transition: display 1s ease-in;\n    transition: display 1s ease-in; }\n\nth {\n  color: #0d47a1;\n  font-weight: bold; }\n\ntr:hover {\n  background-color: #e3f2fd; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%; }\n\n.sidebar a {\n    padding: 10px;\n    width: 95%;\n    display: block;\n    margin: 10px;\n    border-radius: 10px;\n    text-decoration: none;\n    color: #e3f2fd;\n    border: 1px solid #0d47a1;\n    -webkit-transition: box-shadow 1s ease-in-out;\n    transition: box-shadow 1s ease-in-out; }\n\n.sidebar a i {\n      margin: 5px;\n      float: right; }\n\n.sidebar a:hover {\n    border: 1px solid #e3f2fd;\n    box-shadow: 0px 0px 1px 1px #e3f2fd;\n    -webkit-transition: box-shadow 1s ease-in;\n    transition: box-shadow 1s ease-in; }\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1); }\n\ni {\n  cursor: pointer; }\n\n.activatesidebar {\n  width: 5%; }\n\n.activatesidebar a {\n    padding: 30px;\n    float: inherit; }\n\n.activatesidebar a span {\n      display: none; }\n\n.activatesidebar a i {\n      text-align: center; }\n\n.activatesidebar a:hover {\n    box-shadow: none;\n    border: 0px; }\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%; }\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  color: #e3f2fd;\n  margin: 25px; }\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGVyL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcdHlyZS9zcmNcXGFwcFxcbGFuZGVyXFxsYW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDViwwQkFUWTtFQVVaLGlDQUFnQztFQUNoQyxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQWpCWSxFQWtCYjs7QUFDRDtFQUNFLDBCQXBCWTtFQXFCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGVBekJZO0VBMEJaLGFBQVksRUFDYjs7QUFDRDtFQUNFLDBCQTdCWTtFQThCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUcxQixlQXBDWTtFQXFDWixhQUFZLEVBQ2I7O0FBRUQ7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGtDQUF5QjtZQUF6QiwwQkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHVDQUFzQyxFQVV2Qzs7QUFmRDtJQU9JLGVBMURVO0lBMkRWLCtDQUFzQztJQUF0Qyx1Q0FBc0MsRUFDdkM7O0FBVEg7SUFXSSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZiwyQ0FBa0M7SUFBbEMsbUNBQWtDLEVBQ25DOztB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QUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGVyL2xhbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrOiAjMGQ0N2ExO1xyXG4kbGl0ZTogI2UzZjJmZDtcclxuXHJcbi5ib2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAwcHggMHB4IDI1cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm9ubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxufVxyXG4ucGx1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxuICBtYXJnaW46IDI1cHg7XHJcbn1cclxuLnBvc2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4uZGVzayB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4ubmF2cm93IHtcclxuICBtYXJnaW46IDI1cHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggZ2hvc3R3aGl0ZTtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAkZGFyaztcclxuICAgIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBzcGFuOmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggZ2hvc3R3aGl0ZTtcclxufVxyXG4uY2FyZC1yaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG59XHJcbi5jYXJkLWxlZnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG4udGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiAycyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogMjI1cHg7XHJcbn1cclxuLmRlc2s6aG92ZXIge1xyXG4gIC50aXRsZSB7XHJcbiAgICBhbmltYXRpb246IHdpZHRoZXh0cmFjdCA1cztcclxuICAgIHRyYW5zaXRpb246IGFuaW1hdGlvbiA1cyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHdpZHRoZXh0cmFjdCB7XHJcbiAgZnJvbSB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgfVxyXG59XHJcbi51c2VyaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmV4cGFuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGFuaW1hdGlvbjogcm90YXRlIDJzO1xyXG59XHJcbi5leHBhbmQ6aG92ZXIge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDFzO1xyXG59XHJcbi5jYXJkYm9hcmQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmFjdGl2ZV9zY3JlZW4ge1xyXG4gIC5jYXJkYm9hcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuLmluYWN0aXZlX3NjcmVlbiB7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2UtaW47XHJcbiAgLmNhcmRib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG50aCB7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFzLW1vYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYm9hcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJGxpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgaSB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGl0ZTtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggJGxpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5leHRyYWN0IHtcclxuICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIGFuaW1hdGlvbjogcm90YXRlIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxufVxyXG4uYWN0aXZhdGVzaWRlYmFyIHtcclxuICB3aWR0aDogNSU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogaW5oZXJpdDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgaSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5hY3RpdmF0ZSB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuLnBsdXM6aG92ZXIge1xyXG4gIGkge1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnBsdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG4ucGx1czpob3ZlciB7XHJcbiAgaSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LanderComponent = /** @class */ (function () {
    function LanderComponent() {
        this.sidemenu = false;
        this.extract = false;
    }
    LanderComponent.prototype.ngOnInit = function () {
        var key = window.localStorage.getItem("logged");
        var state = window.localStorage.getItem("state");
        this.username = JSON.parse(atob(key))["username"];
        if (state === "true") {
            this.state = true;
        }
        else {
            this.state = false;
        }
    };
    LanderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lander",
            template: __webpack_require__(/*! ./lander.component.html */ "./src/app/lander/lander.component.html"),
            styles: [__webpack_require__(/*! ./lander.component.scss */ "./src/app/lander/lander.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LanderComponent);
    return LanderComponent;
}());



/***/ }),

/***/ "./src/app/rental/rental.component.html":
/*!**********************************************!*\
  !*** ./src/app/rental/rental.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rental works!\n</p>\n"

/***/ }),

/***/ "./src/app/rental/rental.component.scss":
/*!**********************************************!*\
  !*** ./src/app/rental/rental.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbnRhbC9yZW50YWwuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RentalComponent = /** @class */ (function () {
    function RentalComponent() {
    }
    RentalComponent.prototype.ngOnInit = function () {
    };
    RentalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rental',
            template: __webpack_require__(/*! ./rental.component.html */ "./src/app/rental/rental.component.html"),
            styles: [__webpack_require__(/*! ./rental.component.scss */ "./src/app/rental/rental.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RentalComponent);
    return RentalComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocalityService = /** @class */ (function () {
    function LocalityService(http) {
        this.http = http;
    }
    LocalityService.prototype.getlocality = function () {
        return this.http.get("https://raw.githubusercontent.com/nijeeshjoshy/All-Indian-Cities-JSON/master/allCities.json");
    };
    LocalityService.prototype.getYellow = function () {
        return this.http.get("https://raw.githubusercontent.com/creativecoderone/tyre/master/yellow.json");
    };
    LocalityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocalityService);
    return LocalityService;
}());



/***/ }),

/***/ "./src/app/shift/shift.component.html":
/*!********************************************!*\
  !*** ./src/app/shift/shift.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <div class=\"road\">\n    <div class=\"viewboard as-mob\">\n      <h1>Login/Register&nbsp;<i class=\"fas fa-users\"></i> </h1>\n      <small class=\"small\">Please login with your crediantials</small>\n      <br class=\"as-mob\"> <br class=\"as-mob\">\n      <!--<small class=\"subsmall\">For new user please register here</small>-->\n      <img src=\"./assets/50ee4ac981890b346eac69c0cf6f45ef.gif\" *ngIf=\"enter\" class=\"imgc\" alt=\"\">\n      <img src=\"./assets/revizo-5.gif\" *ngIf=\"logdata\" alt=\"\" class=\"imgc\">\n      <img src=\"https://gatesbbq.com/wp-content/uploads/2017/04/checkmarksuccess.gif\" *ngIf=\"!logdata && !enter\" class=\"imgc\" alt=\"\">\n      <i href=\"#modal-center\" uk-toggle class=\"fas query fa-question-circle\"></i>\n    </div>\n    <div class=\"formboard\">\n      <br class=\"as-mob\">\n      <form>\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">User Board&nbsp;<i class=\"far fa-user\"></i></legend>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-user\"></i> Username</label> <i uk-tooltip=\"title:Username;pos:left\" class=\"fas bgg fa-user\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"login.username\" name=\"username\" type=\"text\" placeholder=\"Username\">\n            <small class=\"look\" style=\"float:right\">*Required for Login/Register</small>\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas  fa-key\"></i> Password</label> <i uk-tooltip=\"title:Password;pos:left\" class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" placeholder=\"Password\">\n            <small class=\"look\" style=\"float:right\">*Required for Login/Register</small>\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-font\"></i> Phrase</label> <i uk-tooltip=\"title:Custom phrase;pos:left\" class=\"fas bgg fa-font\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"login.phrase\" name=\"phrase\" type=\"text\" placeholder=\"Custom Phrase\">\n            <small class=\"look\" style=\"float:right\">Optional for login</small>\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"><i class=\"fas fa-sort-numeric-down\"></i> Lucky number&nbsp; {{login?.lucky}} </label>\n            <input class=\"uk-range\" [title]=\"login.lucky\" [(ngModel)]=\"login.lucky\" min=\"0\" max=\"100\" step=\"1\" name=\"lucky\" type=\"range\">\n            <small class=\"look\" style=\"float:right\">Optional for login</small>\n          </div>\n          <button (click)=\"logins()\" [disabled]=\"login?.username.length < 1 && login?.password.length < 1\" class=\"btn-block uk-button uk-button-primary\">Login</button>\n          <br>\n          <button (click)=\"register()\" [disabled]=\"login?.username.length < 1 && login?.password.length < 1\" class=\"btn-block uk-button uk-button-primary\">Register</button>\n          <br>\n          <div class=\"alert alert-warning\" *ngIf=\"reg\">\n            {{regData|slice:0:9}} <i ngxClipboard [cbContent]=\"regData\" class=\"far fa-copy\" (click)=\"eat('Copied',2)\" style=\"float: right\"></i>\n          </div>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n    <button style=\"background-color: white\" class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <img src=\"https://miro.medium.com/max/1400/1*Xs2WKJ2jHKHhJEL29c4AyQ.gif\" style=\"width: 100%;\" alt=\"\">\n  </div>\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<div class=\"loader\">\n  <i class=\"fas fa-spinner as-non-mob\" *ngIf=\"logdata\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/shift/shift.component.scss":
/*!********************************************!*\
  !*** ./src/app/shift/shift.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".road {\n  margin: -20px;\n  width: 100%;\n  margin-left: -40px;\n  margin-right: -40px; }\n\n.viewboard {\n  background-color: white;\n  padding: 40px;\n  border-radius: 0px 30px 30px 0px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 65%; }\n\n.formboard {\n  padding: 40px;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 65%; }\n\n.imgc {\n  display: block;\n  margin: auto;\n  width: 95%;\n  -webkit-animation: scaleup 3s;\n          animation: scaleup 3s;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out; }\n\n@-webkit-keyframes scaleup {\n  from {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes scaleup {\n  from {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.small {\n  color: darkgray; }\n\n::-webkit-input-placeholder {\n  color: #0d47a1; }\n\nlegend {\n  color: #0d47a1; }\n\n.bgg {\n  position: absolute;\n  right: 0;\n  margin: 40px;\n  font-size: 24px;\n  margin-right: 50px;\n  color: #e3f2fd; }\n\ninput[type=\"text\"] {\n  border: 1px dotted #0d47a1; }\n\ninput[type=\"password\"] {\n  border: 1px dotted #0d47a1; }\n\ninput[type=\"text\"]:focus {\n  border: 1px solid #0d47a1;\n  -webkit-transition: border 2s ease-in-out;\n  transition: border 2s ease-in-out; }\n\ninput[type=\"password\"]:focus {\n  border: 1px solid #0d47a1;\n  -webkit-transition: border 2s ease-in-out;\n  transition: border 2s ease-in-out; }\n\nbutton {\n  background-color: #0d47a1; }\n\n.query {\n  position: absolute;\n  bottom: 0;\n  font-size: 30px;\n  cursor: pointer;\n  right: 0;\n  margin: 30px;\n  color: #0d47a1; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .loader {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    margin: 25px;\n    font-size: 20px;\n    color: #0d47a1; }\n    .loader i {\n      -webkit-animation: rotate infinite;\n              animation: rotate infinite; }\n  .formboard {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n.look {\n  color: darkgray;\n  font-size: 12px;\n  padding: 5px 5px 10px 0px; }\n\ni {\n  cursor: pointer; }\n\n.loader {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 25px;\n  font-size: 30px;\n  color: #0d47a1;\n  -webkit-transition: -webkit-animation ease-in-out;\n  transition: -webkit-animation ease-in-out;\n  transition: animation ease-in-out;\n  transition: animation ease-in-out, -webkit-animation ease-in-out; }\n\n.loader i {\n    animation: rotate 2s infinite alternate-reverse; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpZnQvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFx0eXJlL3NyY1xcYXBwXFxzaGlmdFxcc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFhO0VBQ2IsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLGlDQUFnQztFQUNoQyxPQUFNO0VBQ04sVUFBUztFQUNULG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsV0FBVSxFQUNYOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsYUFBWTtFQUNaLFdBQVU7RUFDViw4QkFBcUI7VUFBckIsc0JBQXFCO0VBQ3JCLHdCQUFlO0VBQWYsZ0JBQWU7RUFDZixxREFBb0M7RUFBcEMsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUFwQyx1RUFBb0MsRUFDckM7O0FBQ0Q7RUFDRTtJQUNFLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQSxFQUFBOztBQUx2QjtFQUNFO0lBQ0UsOEJBQXFCO1lBQXJCLHNCQUFxQixFQUFBO0VBRXZCO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxlQS9DWSxFQWdEYjs7QUFDRDtFQUNFLGVBbERZLEVBbURiOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZUF6RFksRUEwRGI7O0FBRUQ7RUFDRSwyQkE5RFksRUErRGI7O0FBQ0Q7RUFDRSwyQkFqRVksRUFrRWI7O0FBQ0Q7RUFDRSwwQkFwRVk7RUFxRVosMENBQWlDO0VBQWpDLGtDQUFpQyxFQUNsQzs7QUFDRDtFQUNFLDBCQXhFWTtFQXlFWiwwQ0FBaUM7RUFBakMsa0NBQWlDLEVBQ2xDOztBQUNEO0VBQ0UsMEJBNUVZLEVBNkViOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLGFBQVk7RUFDWixlQXJGWSxFQXNGYjs7QUFDRDtFQUNFO0lBQ0UsY0FBYSxFQUNkO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLFVBQVM7SUFDVCxTQUFRO0lBQ1IsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsZUFqR1UsRUFxR1g7SUFWRDtNQVFJLG1DQUEwQjtjQUExQiwyQkFBMEIsRUFDM0I7RUFFSDtJQUNFLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsUUFBTztJQUNQLE9BQU07SUFDTixVQUFTO0lBQ1QsbUJBQWtCLEVBQ25CLEVBQUE7O0FBRUg7RUFDRSxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxTQUFRO0VBQ1IsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZUE5SFk7RUErSFosa0RBQWlDO0VBQWpDLDBDQUFpQztFQUFqQyxrQ0FBaUM7RUFBakMsaUVBQWlDLEVBSWxDOztBQVhEO0lBU0ksZ0RBQStDLEVBQ2hEOztBQUVIO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGtDQUF5QjtZQUF6QiwwQkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hpZnQvc2hpZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyazogIzBkNDdhMTtcclxuJGxpdGU6ICNlM2YyZmQ7XHJcblxyXG4ucm9hZCB7XHJcbiAgbWFyZ2luOiAtMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcclxufVxyXG4udmlld2JvYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDY1JTtcclxufVxyXG4uZm9ybWJvYXJkIHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogNjUlO1xyXG59XHJcbi5pbWdjIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDk1JTtcclxuICBhbmltYXRpb246IHNjYWxldXAgM3M7XHJcbiAgY3Vyc29yOiB6b29tLWluO1xyXG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiAycyBlYXNlLWluLW91dDtcclxufVxyXG5Aa2V5ZnJhbWVzIHNjYWxldXAge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4uc21hbGwge1xyXG4gIGNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG5sZWdlbmQge1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG4uYmdnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYm9yZGVyOiAxcHggZG90dGVkICRkYXJrO1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgYm9yZGVyOiAxcHggZG90dGVkICRkYXJrO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxufVxyXG4ucXVlcnkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAkZGFyaztcclxuICAgIGkge1xyXG4gICAgICBhbmltYXRpb246IHJvdGF0ZSBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm1ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5sb29rIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDVweCA1cHggMTBweCAwcHg7XHJcbn1cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG4gIHRyYW5zaXRpb246IGFuaW1hdGlvbiBlYXNlLWluLW91dDtcclxuICBpIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShiftComponent = /** @class */ (function () {
    function ShiftComponent(loc, router) {
        this.loc = loc;
        this.router = router;
        this.msg = "";
        this.enter = true;
        this.login = {
            username: "",
            password: "",
            phrase: "",
            lucky: 0
        };
    }
    ShiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loc.getYellow().subscribe(function (data) {
            _this.info = data;
            console.log(_this.info.length);
        });
    };
    ShiftComponent.prototype.logins = function () {
        var _this = this;
        delete this.login.lucky;
        delete this.login.phrase;
        this.enter = false;
        this.logdata = true;
        setTimeout(function () {
            for (var index = 0; index < _this.info.length; index++) {
                var element = _this.info[index];
                if (element === btoa(JSON.stringify(_this.login))) {
                    _this.logdata = false;
                    _this.eat("Login Success", 1);
                    window.localStorage.setItem("logged", element);
                    window.localStorage.setItem("state", "true");
                    setTimeout(function () {
                        _this.router.navigate(["/lander"]);
                    }, 3000);
                }
                else {
                    if (index === _this.info.length) {
                        _this.enter = true;
                        _this.logdata = undefined;
                        _this.eat("Login failed", 0);
                    }
                }
            }
        }, 5000);
    };
    ShiftComponent.prototype.register = function () {
        var _this = this;
        this.enter = false;
        delete this.login.lucky;
        delete this.login.phrase;
        this.regData = btoa(JSON.stringify(this.login));
        this.logdata = true;
        setTimeout(function () {
            _this.logdata = undefined;
            _this.enter = true;
            _this.reg = true;
            _this.eat("Registeration successful", 1);
        }, 2000);
    };
    ShiftComponent.prototype.eat = function (msg, color) {
        this.msg = msg;
        var x = document.getElementById("snackbar");
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
    };
    ShiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-shift",
            template: __webpack_require__(/*! ./shift.component.html */ "./src/app/shift/shift.component.html"),
            styles: [__webpack_require__(/*! ./shift.component.scss */ "./src/app/shift/shift.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_2__["LocalityService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShiftComponent);
    return ShiftComponent;
}());



/***/ }),

/***/ "./src/app/unshift/unshift.component.html":
/*!************************************************!*\
  !*** ./src/app/unshift/unshift.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <div class=\"road\">\n    <div class=\"viewboard as-mob\">\n      <h1>Change password&nbsp;<i class=\"fas fa-key\"></i> </h1>\n      <small class=\"small\">Please reset with your old crediantials</small>\n      <br> <br>\n      <!--<small class=\"subsmall\">For new user please register here</small>-->\n      <!--<img src=\"./assets/forget.gif\" class=\"imgc\" alt=\"\" width=\"20%;\" *ngIf=\"load\">-->\n      <img src=\"./assets/developer-dribbble.gif\" alt=\"\" class=\"imgc\">\n      <i href=\"#modal-center\" uk-toggle class=\"fas query fa-question-circle\"></i>\n    </div>\n    <div class=\"formboard\">\n      <br><br> <br>\n      <form>\n        <fieldset class=\"uk-fieldset\">\n          <legend class=\"uk-legend\">Change Password&nbsp;<i class=\"fas fa-key\"></i></legend>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-user\"></i> Username</label> <i uk-tooltip=\"title:Username;pos:left\" class=\"fas bgg fa-user\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.username\" name=\"username\" type=\"text\" placeholder=\"Username\">\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas  fa-key\"></i> Current Password</label> <i uk-tooltip=\"title:Current Password;pos:left\" class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.old\" name=\"password\" type=\"password\" placeholder=\"Current Password\">\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-key\"></i> New password</label> <i uk-tooltip=\"title:New password;pos:left\" class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.new\" name=\"new\" type=\"password\" placeholder=\"New password\">\n          </div>\n          <div class=\"uk-margin\">\n            <label for=\"\"> <i class=\"fas fa-key\"></i> Repeat password</label> <i uk-tooltip=\"title:Repeat password;pos:left\"\n              class=\"fas bgg fa-key\"></i>\n            <input class=\"uk-input\" [(ngModel)]=\"reset.re\" name=\"re\" type=\"password\" placeholder=\"Repeat password\">\n          </div>\n          <button class=\"btn-block uk-button uk-button-primary\" uk-tooltip=\"title:Change passwor;pos:bottom\">Change password</button>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n  <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">\n    <button style=\"background-color: white\" class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <legend>Change password</legend>\n    <small class=\"small\">Use atleast one Uppercase letter-   <b class=\"right\">  A-Z </b></small>\n    <br>\n    <small class=\"small\">Use atleast one Lowercase letter-    <b class=\"right\"> a-z</b> </small>\n    <br>\n    <small class=\"small\">Use atleast one number/digit character-  <b class=\"right\">  0-9</b> </small>\n    <br>\n    <small class=\"small\">Keep minimum of 8 charater combination length <b class=\"right\"> 8</b> </small>\n    <br>\n    <small class=\"small\">Use atleast one special character-  <b class=\"right\">  */&amp;-+=</b> </small> <br>\n    <img src=\"./assets/forget.gif\" style=\"width: 75%;margin: auto;display: block\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/unshift/unshift.component.scss":
/*!************************************************!*\
  !*** ./src/app/unshift/unshift.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".road {\n  margin: -20px;\n  width: 100%;\n  margin-left: -40px;\n  margin-right: -40px; }\n\n.viewboard {\n  background-color: white;\n  padding: 40px;\n  border-radius: 0px 30px 30px 0px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 65%; }\n\n.formboard {\n  padding: 40px;\n  width: 35%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 65%; }\n\n.imgc {\n  display: block;\n  margin: auto;\n  width: 95%;\n  -webkit-animation: scaleup 3s;\n          animation: scaleup 3s;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out; }\n\n@-webkit-keyframes scaleup {\n  from {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes scaleup {\n  from {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.small {\n  color: darkgray; }\n\n::-webkit-input-placeholder {\n  color: #0d47a1; }\n\nlegend {\n  color: #0d47a1; }\n\n.bgg {\n  position: absolute;\n  right: 0;\n  margin: 40px;\n  font-size: 24px;\n  margin-right: 50px;\n  color: #e3f2fd; }\n\ninput[type=\"text\"] {\n  border: 1px dotted #0d47a1; }\n\ninput[type=\"password\"] {\n  border: 1px dotted #0d47a1; }\n\ninput[type=\"text\"]:focus {\n  border: 1px solid #0d47a1;\n  -webkit-transition: border 2s ease-in-out;\n  transition: border 2s ease-in-out; }\n\ninput[type=\"password\"]:focus {\n  border: 1px solid #0d47a1;\n  -webkit-transition: border 2s ease-in-out;\n  transition: border 2s ease-in-out; }\n\nbutton {\n  background-color: #0d47a1; }\n\n.query {\n  position: absolute;\n  bottom: 0;\n  font-size: 30px;\n  cursor: pointer;\n  right: 0;\n  margin: 30px;\n  color: #0d47a1; }\n\n.right {\n  float: right;\n  text-align: right; }\n\ni {\n  cursor: pointer; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .formboard {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5zaGlmdC9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXHR5cmUvc3JjXFxhcHBcXHVuc2hpZnRcXHVuc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFhO0VBQ2IsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLGlDQUFnQztFQUNoQyxPQUFNO0VBQ04sVUFBUztFQUNULG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsV0FBVSxFQUNYOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsYUFBWTtFQUNaLFdBQVU7RUFDViw4QkFBcUI7VUFBckIsc0JBQXFCO0VBQ3JCLHdCQUFlO0VBQWYsZ0JBQWU7RUFDZixxREFBb0M7RUFBcEMsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUFwQyx1RUFBb0MsRUFDckM7O0FBQ0Q7RUFDRTtJQUNFLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQSxFQUFBOztBQUx2QjtFQUNFO0lBQ0UsOEJBQXFCO1lBQXJCLHNCQUFxQixFQUFBO0VBRXZCO0lBQ0UsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxlQS9DWSxFQWdEYjs7QUFDRDtFQUNFLGVBbERZLEVBbURiOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZUF6RFksRUEwRGI7O0FBRUQ7RUFDRSwyQkE5RFksRUErRGI7O0FBQ0Q7RUFDRSwyQkFqRVksRUFrRWI7O0FBQ0Q7RUFDRSwwQkFwRVk7RUFxRVosMENBQWlDO0VBQWpDLGtDQUFpQyxFQUNsQzs7QUFDRDtFQUNFLDBCQXhFWTtFQXlFWiwwQ0FBaUM7RUFBakMsa0NBQWlDLEVBQ2xDOztBQUNEO0VBQ0UsMEJBNUVZLEVBNkViOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLGFBQVk7RUFDWixlQXJGWSxFQXNGYjs7QUFDRDtFQUNFLGFBQVk7RUFDWixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFO0lBQ0UsY0FBYSxFQUNkO0VBQ0Q7SUFDRSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxPQUFNO0lBQ04sVUFBUztJQUNULG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdW5zaGlmdC91bnNoaWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLnJvYWQge1xyXG4gIG1hcmdpbjogLTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTQwcHg7XHJcbn1cclxuLnZpZXdib2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuLmZvcm1ib2FyZCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogMzUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDY1JTtcclxufVxyXG4uaW1nYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZXVwIDNzO1xyXG4gIGN1cnNvcjogem9vbS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLnNtYWxsIHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxubGVnZW5kIHtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLmJnZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCAkZGFyaztcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnF1ZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGNvbG9yOiAkZGFyaztcclxufVxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm1ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnshiftComponent = /** @class */ (function () {
    function UnshiftComponent() {
        this.reset = {
            username: "",
            old: "",
            new: "",
            re: ""
        };
        this.load = true;
    }
    UnshiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load = true;
        setTimeout(function () {
            _this.load = false;
        }, 3000);
    };
    UnshiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-unshift",
            template: __webpack_require__(/*! ./unshift.component.html */ "./src/app/unshift/unshift.component.html"),
            styles: [__webpack_require__(/*! ./unshift.component.scss */ "./src/app/unshift/unshift.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnshiftComponent);
    return UnshiftComponent;
}());



/***/ }),

/***/ "./src/app/water/water.component.html":
/*!********************************************!*\
  !*** ./src/app/water/water.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  water works!\n</p>\n"

/***/ }),

/***/ "./src/app/water/water.component.scss":
/*!********************************************!*\
  !*** ./src/app/water/water.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhdGVyL3dhdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WaterComponent = /** @class */ (function () {
    function WaterComponent() {
    }
    WaterComponent.prototype.ngOnInit = function () {
    };
    WaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-water',
            template: __webpack_require__(/*! ./water.component.html */ "./src/app/water/water.component.html"),
            styles: [__webpack_require__(/*! ./water.component.scss */ "./src/app/water/water.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WaterComponent);
    return WaterComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manomuth\Desktop\WorkFromHere\StartHere\application-workHere\tyre\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map