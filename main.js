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

module.exports = "<div class=\"board\" [ngClass]=\"(extract==true)?'activate':'board'\">\n  <button class=\"plus\"><i class=\"fas fa-plus-circle\"></i></button>\n   <div class=\"desk\">\n     <router-outlet></router-outlet>\n   </div>\n</div>\n<div class=\"online\">\n  <div class=\"sidebar\" [ngClass]=\"(extract==true)?'activatesidebar':'sidebar'\">\n    <br>\n    <!--{{extract}}-->\n    <i class='fas fa-expand extract' *ngIf=\"extract\" (click)=\"extract = false\"></i>\n    <i class='fas fa-expand-arrows-alt extract' *ngIf=\"!extract\" (click)=\"extract = true\"></i> <br> <br>\n    <a uk-tooltip=\"title:Dashboard;pos:right;\"[routerLink]=\"['/lander']\"><i class='fas fa-braille'></i><span> Dashboard</span></a>\n    <a uk-tooltip=\"title:Actions;pos:right;\" [routerLink]=\"['/locality']\"><i class='fas fa-bullseye'></i><span> Locality</span></a>\n    <a uk-tooltip=\"title:Cluster;pos:right;\" href=\"#\"><i class='fas fa-chart-pie'></i><span> Cluster</span></a>\n    <a uk-tooltip=\"title:Remote;pos:right;\" href=\"#\"><i class='fas fa-chart-line'></i><span> Remote</span></a>\n    <a uk-tooltip=\"title:About;pos:right;\" href=\"#\"><i class='fas fa-clipboard'></i><span> About</span></a>\n    <a uk-tooltip=\"title:Contact;pos:right;\" href=\"#\"><i class='fas fa-cogs'></i><span> Contact</span></a>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto; }\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1; }\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px; }\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.desk {\n  padding: 20px; }\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.navrow span {\n    color: #0d47a1;\n    -webkit-transition: font-weight 1s ease-in-out;\n    transition: font-weight 1s ease-in-out; }\n\n.navrow span:hover {\n    font-weight: bold;\n    cursor: pointer;\n    -webkit-transition: font-weight 1s ease-in;\n    transition: font-weight 1s ease-in; }\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd; }\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1; }\n\n.title {\n  background-color: #0d47a1;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px; }\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  -webkit-transition: -webkit-animation 5s ease-in;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in; }\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n@keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n.usericon {\n  text-align: center;\n  font-size: 40px; }\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none; }\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer; }\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px; }\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  -webkit-transition: display 1s ease-in;\n  transition: display 1s ease-in; }\n\n.inactive_screen {\n  -webkit-transition: height 1s ease-in;\n  transition: height 1s ease-in; }\n\n.inactive_screen .cardboard {\n    display: none;\n    -webkit-transition: display 1s ease-in;\n    transition: display 1s ease-in; }\n\nth {\n  color: #0d47a1;\n  font-weight: bold; }\n\ntr:hover {\n  background-color: #e3f2fd; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%; }\n\n.sidebar a {\n    padding: 10px;\n    width: 95%;\n    display: block;\n    margin: 10px;\n    border-radius: 10px;\n    text-decoration: none;\n    color: #e3f2fd;\n    border: 1px solid #0d47a1;\n    -webkit-transition: box-shadow 1s ease-in-out;\n    transition: box-shadow 1s ease-in-out; }\n\n.sidebar a i {\n      margin: 5px;\n      float: right; }\n\n.sidebar a:hover {\n    border: 1px solid #e3f2fd;\n    box-shadow: 0px 0px 1px 1px #e3f2fd;\n    -webkit-transition: box-shadow 1s ease-in;\n    transition: box-shadow 1s ease-in; }\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1); }\n\ni {\n  cursor: pointer; }\n\n.activatesidebar {\n  width: 5%; }\n\n.activatesidebar a {\n    padding: 30px;\n    float: inherit; }\n\n.activatesidebar a span {\n      display: none; }\n\n.activatesidebar a i {\n      text-align: center; }\n\n.activatesidebar a:hover {\n    box-shadow: none;\n    border: 0px; }\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%; }\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFx0eXJlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDViwwQkFUWTtFQVVaLGlDQUFnQztFQUNoQyxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQWpCWSxFQWtCYjs7QUFDRDtFQUNFLDBCQXBCWTtFQXFCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGVBekJZO0VBMEJaLGFBQVksRUFDYjs7QUFDRDtFQUNFLDBCQTdCWTtFQThCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUcxQixlQXBDWTtFQXFDWixhQUFZLEVBQ2I7O0FBRUQ7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGtDQUF5QjtZQUF6QiwwQkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHVDQUFzQyxFQVV2Qzs7QUFmRDtJQU9JLGVBMURVO0lBMkRWLCtDQUFzQztJQUF0Qyx1Q0FBc0MsRUFDdkM7O0FBVEg7SUFXSSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZiwyQ0FBa0M7SUFBbEMsbUNBQWtDLEVBQ25DOztBQUVIO0VBQ0Usd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCx1Q0FBc0MsRUFDdkM7O0FBQ0Q7RUFDRSwwQkE1RVk7RUE2RVosZUE1RVksRUE2RWI7O0FBQ0Q7RUFDRSwwQkEvRVk7RUFnRlosZUFqRlksRUFrRmI7O0FBQ0Q7RUFDRSwwQkFwRlk7RUFxRloscURBQW9DO0VBQXBDLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFBcEMsdUVBQW9DO0VBQ3BDLGFBQVksRUFDYjs7QUFDRDtFQUVJLG1DQUEwQjtVQUExQiwyQkFBMEI7RUFDMUIsaURBQWdDO0VBQWhDLHlDQUFnQztFQUFoQyxpQ0FBZ0M7RUFBaEMsK0RBQWdDLEVBQ2pDOztBQUVIO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLGFBQVksRUFBQSxFQUFBOztBQUxoQjtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGFBQVksRUFDYjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLGFBQVk7RUFDWixnQkFBZSxFQUVoQjs7QUFDRDtFQUNFLDZCQUFvQjtVQUFwQixxQkFBb0IsRUFDckI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUVJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBYztFQUNkLHVDQUE4QjtFQUE5QiwrQkFBOEIsRUFDL0I7O0FBRUg7RUFDRSxzQ0FBNkI7RUFBN0IsOEJBQTZCLEVBSzlCOztBQU5EO0lBR0ksY0FBYTtJQUNiLHVDQUE4QjtJQUE5QiwrQkFBOEIsRUFDL0I7O0FBRUg7RUFDRSxlQS9JWTtFQWdKWixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSwwQkFsSlksRUFtSmI7O0FBRUQ7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0UsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixRQUFPO0lBQ1AsT0FBTTtJQUNOLFVBQVM7SUFDVCxtQkFBa0IsRUFDbkIsRUFBQTs7QUFHSDtFQUNFLE9BQU07RUFDTixVQUFTO0VBQ1QsV0FBVSxFQXlCWDs7QUE1QkQ7SUFLSSxjQUFhO0lBRWIsV0FBVTtJQUNWLGVBQWM7SUFDZCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLHNCQUFxQjtJQUNyQixlQS9LVTtJQWdMViwwQkFqTFU7SUFtTFYsOENBQXFDO0lBQXJDLHNDQUFxQyxFQU10Qzs7QUFyQkg7TUFrQk0sWUFBVztNQUNYLGFBQVksRUFDYjs7QUFwQkw7SUF1QkksMEJBMUxVO0lBNExWLG9DQTVMVTtJQTZMViwwQ0FBaUM7SUFBakMsa0NBQWlDLEVBQ2xDOztBQUVIO0VBR0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsZUFyTVk7RUFzTVosc0JBQXFCO0VBQ3JCLHNEQUE2QztVQUE3Qyw4Q0FBNkMsRUFDOUM7O0FBRUQ7RUFDRSxnQkFBZSxFQUVoQjs7QUFDRDtFQUNFLFVBQVMsRUFpQlY7O0FBbEJEO0lBSUksY0FBYTtJQUViLGVBQWMsRUFPZjs7QUFiSDtNQVFNLGNBQWEsRUFDZDs7QUFUTDtNQVdNLG1CQUFrQixFQUNuQjs7QUFaTDtJQWVJLGlCQUFnQjtJQUNoQixZQUFXLEVBQ1o7O0FBRUg7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFNBQVEsRUFDVDs7QUFDRDtFQUVJLDZCQUFvQjtVQUFwQixxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyazogIzBkNDdhMTtcclxuJGxpdGU6ICNlM2YyZmQ7XHJcblxyXG4uYm9hcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDIwJTtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMHB4IDBweCAyNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5vbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbn1cclxuLnBsdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogJGxpdGU7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG59XHJcbi5wb3NidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyByaWdodDogMDtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLmRlc2sge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLm5hdnJvdyB7XHJcbiAgbWFyZ2luOiAyNXB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgc3Bhbjpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGZvbnQtd2VpZ2h0IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGdob3N0d2hpdGU7XHJcbn1cclxuLmNhcmQtcmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxufVxyXG4uY2FyZC1sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBjb2xvcjogJGRhcms7XHJcbn1cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICB0cmFuc2l0aW9uOiBhbmltYXRpb24gMnMgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDIyNXB4O1xyXG59XHJcbi5kZXNrOmhvdmVyIHtcclxuICAudGl0bGUge1xyXG4gICAgYW5pbWF0aW9uOiB3aWR0aGV4dHJhY3QgNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbmltYXRpb24gNXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB3aWR0aGV4dHJhY3Qge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gIH1cclxufVxyXG4udXNlcmljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5leHBhbmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBhbmltYXRpb246IHJvdGF0ZSAycztcclxufVxyXG4uZXhwYW5kOmhvdmVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxufVxyXG4uY2FyZGJvYXJkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5hY3RpdmVfc2NyZWVuIHtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbi5pbmFjdGl2ZV9zY3JlZW4ge1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluO1xyXG4gIC5jYXJkYm9hcmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxudGgge1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG50cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmJvYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICRsaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGRhcms7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlLWluLW91dDtcclxuICAgIGkge1xyXG4gICAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpdGU7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICRsaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uZXh0cmFjdCB7XHJcbiAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBhbmltYXRpb246IHJvdGF0ZSAxcyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSk7XHJcbn1cclxuXHJcbmkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyBhbmltYXRpb246IHJvdGF0ZSAxcyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSk7XHJcbn1cclxuLmFjdGl2YXRlc2lkZWJhciB7XHJcbiAgd2lkdGg6IDUlO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGluaGVyaXQ7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gIH1cclxufVxyXG4uYWN0aXZhdGUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG59XHJcbi5wbHVzOmhvdmVyIHtcclxuICBpIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tyre';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lander_lander_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lander/lander.component */ "./src/app/lander/lander.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _water_water_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./water/water.component */ "./src/app/water/water.component.ts");
/* harmony import */ var _application_locality_locality_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application/locality/locality.component */ "./src/app/application/locality/locality.component.ts");
/* harmony import */ var src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/locality.service */ "./src/app/shared/locality.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _lander_lander_component__WEBPACK_IMPORTED_MODULE_7__["LanderComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
                _water_water_component__WEBPACK_IMPORTED_MODULE_9__["WaterComponent"],
                _application_locality_locality_component__WEBPACK_IMPORTED_MODULE_10__["LocalityComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            providers: [src_app_shared_locality_service__WEBPACK_IMPORTED_MODULE_11__["LocalityService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

module.exports = "<!--<div *ngIf=\"!loader\">\n  {{location|json}}\n</div>-->\n<form>\n  <fieldset class=\"uk-fieldset\">\n    <legend class=\"uk-legend\">Location</legend>\n    <div class=\"uk-margin\">\n      <label for=\"\">State</label>\n      <select class=\"uk-select\" [(ngModel)]=\"state\" (click)=\"stateset(state)\" name=\"asdsdc\">\n          <option *ngFor=\"let item of location_keys; let i=index\"   >{{item}}</option>\n      </select>\n    </div>\n    <div class=\"uk-margin\">\n      <label for=\"\">City</label>\n      <select class=\"uk-select\" [(ngModel)]=\"city\" (click)=\"cityset(city)\" name=\"sdcscf\">\n          <option *ngFor=\"let item of cities; let i=index\" >{{item}} </option>\n      </select>\n    </div>\n    <div class=\"uk-margin\">\n      <label for=\"\">locality</label>\n      <select class=\"uk-select\" [(ngModel)]=\"area\" name=\"a sascas f\">\n          <option *ngFor=\"let item of areas; let i=index\" >{{item}} </option>\n      </select>\n    </div>\n  </fieldset>\n</form>\n<i *ngIf=\"loader\" class='fab loader fa-digital-ocean'></i>\n<!--<div class=\"uk-child-width-1-3@m uk-grid-small uk-grid-match\" uk-grid>\n  <div *ngFor=\"let item of location; let i=index\">\n    <div class=\"uk-card uk-card-default uk-card-body\">\n      <h3 class=\"uk-card-title\">{{item?.City}}</h3>\n      <h6>{{item?.District}}</h6>\n      <h6>{{item?.PostOfficeName}}</h6>\n      <h6>{{item?.Pincode}}</h6>\n    </div>\n  </div>\n</div>-->\n"

/***/ }),

/***/ "./src/app/application/locality/locality.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/application/locality/locality.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desk {\n  padding: 20px; }\n\n.loader {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 30px;\n  margin: 20px;\n  color: #0d47a1;\n  animation: rotate 3s infinite alternate-reverse; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vbG9jYWxpdHkvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFx0eXJlL3NyY1xcYXBwXFxhcHBsaWNhdGlvblxcbG9jYWxpdHlcXGxvY2FsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsZ0JBQWU7RUFDZixhQUFZO0VBQ1osZUFBYztFQUNkLGdEQUErQyxFQUNoRDs7QUFDRDtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBTDdCO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2xvY2FsaXR5L2xvY2FsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLmRlc2sge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiAjMGQ0N2ExO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDNzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
    function LocalityComponent(loc) {
        this.loc = loc;
        this.areas = [];
        this.cities = [];
        this.location_keys = [];
        this.loader = false;
    }
    LocalityComponent.prototype.ngOnInit = function () {
        this.loader = true;
        this.locServ();
    };
    LocalityComponent.prototype.locServ = function () {
        var _this = this;
        this.loc.getlocality().subscribe(function (data) {
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
        this.city_list = this.location[state];
        // tslint:disable-next-line:forin
        for (var key in this.city_list) {
            this.cities.push(key);
        }
    };
    LocalityComponent.prototype.cityset = function (statecity) {
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

module.exports = "\n\n<div class=\"desk\">\n    <h2>Upcoming Trips</h2>\n    <!--<hr class=\"title\">-->\n    <div class=\"navrow\">\n      <span class=\"navitem\">Two wheeler</span>&nbsp;/&nbsp;\n      <span class=\"navitem\">Four wheeler</span>&nbsp;/&nbsp;\n      <span class=\"navitem\">By cycle</span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 card-left \">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"usericon\">\n                  <img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"70\"\n                    alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-md-7\">\n                Jone Doe <br> 10-10-1996 <br> Male <br> Indian\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card card-right \">\n          <div class=\"card-body\">\n            <button class=\"posbtn\">Add&nbsp;<i class=\"far fa-grin-stars\"></i></button>\n            <button class=\"posbtn\">Address&nbsp;<i class=\"far fa-address-book\"></i></button>\n            <button class=\"posbtn\">FAQ&nbsp;<i class=\"far fa-question-circle\"></i></button>\n            <button class=\"posbtn\">Surprise&nbsp;<i class=\"far fa-surprise\"></i></button>\n            <button class=\"posbtn\">Grin-squint&nbsp;<i class=\"far fa-grin-squint\"></i></button>\n            <button class=\"posbtn\">Grin&nbsp;<i class=\"far fa-grin\"></i></button>\n            <button class=\"posbtn\">Grin-beam-sweat&nbsp;<i class=\"far fa-grin-beam-sweat\"></i></button>\n            <button class=\"posbtn\">Laugh-wink&nbsp;<i class=\"far fa-laugh-wink\"></i></button>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <!---------------->\n    <div class=\"row\">\n      <div class=\"col-md-12 card-left\">\n        <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n          <div class=\"card-body\">\n            <h4>Your information</h4>\n            <i class=\"fas fa-chevron-down expand\" (mouseover)=\"sidemenu = !sidemenu\" (click)=\"sidemenu = !sidemenu\"></i>\n            <div class=\"cardboard\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-surprise\"></i> Surprise\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-meh-rolling-eyes\"></i> Rolling-eyes\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-grin-squint\"></i> Squint\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-grin\"></i> Grin\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-grin-beam-sweat\"></i> Grin-beam-sweat\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-laugh-wink\"></i> Laugh-wink\n                </div>\n              </div>\n            </div>\n            <br>\n            <form class=\"uk-grid-small\" uk-grid>\n              <div class=\"uk-width-1-1\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"First name\">\n              </div>\n              <div class=\"uk-width-1-2@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Last name\">\n              </div>\n              <div class=\"uk-width-1-4@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Address line 1\">\n              </div>\n              <div class=\"uk-width-1-4@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Address line 2\">\n              </div>\n              <div class=\"uk-width-1-2@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"State\">\n              </div>\n              <div class=\"uk-width-1-2@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Country\">\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <!-------------------------------->\n    <div class=\"uk-overflow-auto\">\n      <table class=\"uk-table uk-table-middle uk-table-divider\">\n        <thead>\n          <tr>\n            <th class=\"uk-table-shrink\"></th>\n            <th class=\"uk-table-shrink\">Preserve</th>\n            <th class=\"uk-table-expand\">Expand + Link</th>\n            <th class=\"uk-width-small\">Truncate</th>\n            <th class=\"uk-table-shrink uk-text-nowrap\">Shrink + Nowrap</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/lander/lander.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lander/lander.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 80%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto; }\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1; }\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px; }\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.desk {\n  padding: 20px; }\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.navrow span {\n    color: #0d47a1;\n    -webkit-transition: font-weight 1s ease-in-out;\n    transition: font-weight 1s ease-in-out; }\n\n.navrow span:hover {\n    font-weight: bold;\n    cursor: pointer;\n    -webkit-transition: font-weight 1s ease-in;\n    transition: font-weight 1s ease-in; }\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd; }\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1; }\n\n.title {\n  background-color: #0d47a1;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px; }\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  -webkit-transition: -webkit-animation 5s ease-in;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in; }\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n@keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n.usericon {\n  text-align: center;\n  font-size: 40px; }\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none; }\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer; }\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px; }\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  -webkit-transition: display 1s ease-in;\n  transition: display 1s ease-in; }\n\n.inactive_screen {\n  -webkit-transition: height 1s ease-in;\n  transition: height 1s ease-in; }\n\n.inactive_screen .cardboard {\n    display: none;\n    -webkit-transition: display 1s ease-in;\n    transition: display 1s ease-in; }\n\nth {\n  color: #0d47a1;\n  font-weight: bold; }\n\ntr:hover {\n  background-color: #e3f2fd; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n.sidebar {\n  top: 0;\n  bottom: 0;\n  width: 20%; }\n\n.sidebar a {\n    padding: 10px;\n    width: 95%;\n    display: block;\n    margin: 10px;\n    border-radius: 10px;\n    text-decoration: none;\n    color: #e3f2fd;\n    border: 1px solid #0d47a1;\n    -webkit-transition: box-shadow 1s ease-in-out;\n    transition: box-shadow 1s ease-in-out; }\n\n.sidebar a i {\n      margin: 5px;\n      float: right; }\n\n.sidebar a:hover {\n    border: 1px solid #e3f2fd;\n    box-shadow: 0px 0px 1px 1px #e3f2fd;\n    -webkit-transition: box-shadow 1s ease-in;\n    transition: box-shadow 1s ease-in; }\n\n.extract {\n  padding: 0px 25px;\n  font-size: 20px;\n  color: #e3f2fd;\n  display: inline-block;\n  -webkit-animation: rotate 1s cubic-bezier(1, 0, 0, 1);\n          animation: rotate 1s cubic-bezier(1, 0, 0, 1); }\n\ni {\n  cursor: pointer; }\n\n.activatesidebar {\n  width: 5%; }\n\n.activatesidebar a {\n    padding: 30px;\n    float: inherit; }\n\n.activatesidebar a span {\n      display: none; }\n\n.activatesidebar a i {\n      text-align: center; }\n\n.activatesidebar a:hover {\n    box-shadow: none;\n    border: 0px; }\n\n.activate {\n  width: 95%;\n  position: absolute;\n  left: 5%; }\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGVyL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcdHlyZS9zcmNcXGFwcFxcbGFuZGVyXFxsYW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDViwwQkFUWTtFQVVaLGlDQUFnQztFQUNoQyxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQWpCWSxFQWtCYjs7QUFDRDtFQUNFLDBCQXBCWTtFQXFCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGVBekJZO0VBMEJaLGFBQVksRUFDYjs7QUFDRDtFQUNFLDBCQTdCWTtFQThCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUcxQixlQXBDWTtFQXFDWixhQUFZLEVBQ2I7O0FBRUQ7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGtDQUF5QjtZQUF6QiwwQkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsZ0NBQXVCO1lBQXZCLHdCQUF1QixFQUFBO0VBRXpCO0lBQ0Usa0NBQXlCO1lBQXpCLDBCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHVDQUFzQyxFQVV2Qzs7QUFmRDtJQU9JLGVBMURVO0lBMkRWLCtDQUFzQztJQUF0Qyx1Q0FBc0MsRUFDdkM7O0FBVEg7SUFXSSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZiwyQ0FBa0M7SUFBbEMsbUNBQWtDLEVBQ25DOztBQUVIO0VBQ0Usd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCx1Q0FBc0MsRUFDdkM7O0FBQ0Q7RUFDRSwwQkE1RVk7RUE2RVosZUE1RVksRUE2RWI7O0FBQ0Q7RUFDRSwwQkEvRVk7RUFnRlosZUFqRlksRUFrRmI7O0FBQ0Q7RUFDRSwwQkFwRlk7RUFxRloscURBQW9DO0VBQXBDLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFBcEMsdUVBQW9DO0VBQ3BDLGFBQVksRUFDYjs7QUFDRDtFQUVJLG1DQUEwQjtVQUExQiwyQkFBMEI7RUFDMUIsaURBQWdDO0VBQWhDLHlDQUFnQztFQUFoQyxpQ0FBZ0M7RUFBaEMsK0RBQWdDLEVBQ2pDOztBQUVIO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLGFBQVksRUFBQSxFQUFBOztBQUxoQjtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGFBQVksRUFDYjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLGFBQVk7RUFDWixnQkFBZSxFQUVoQjs7QUFDRDtFQUNFLDZCQUFvQjtVQUFwQixxQkFBb0IsRUFDckI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUVJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZUFBYztFQUNkLHVDQUE4QjtFQUE5QiwrQkFBOEIsRUFDL0I7O0FBRUg7RUFDRSxzQ0FBNkI7RUFBN0IsOEJBQTZCLEVBSzlCOztBQU5EO0lBR0ksY0FBYTtJQUNiLHVDQUE4QjtJQUE5QiwrQkFBOEIsRUFDL0I7O0FBRUg7RUFDRSxlQS9JWTtFQWdKWixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSwwQkFsSlksRUFtSmI7O0FBRUQ7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0UsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixRQUFPO0lBQ1AsT0FBTTtJQUNOLFVBQVM7SUFDVCxtQkFBa0IsRUFDbkIsRUFBQTs7QUFHSDtFQUNFLE9BQU07RUFDTixVQUFTO0VBQ1QsV0FBVSxFQXlCWDs7QUE1QkQ7SUFLSSxjQUFhO0lBRWIsV0FBVTtJQUNWLGVBQWM7SUFDZCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLHNCQUFxQjtJQUNyQixlQS9LVTtJQWdMViwwQkFqTFU7SUFtTFYsOENBQXFDO0lBQXJDLHNDQUFxQyxFQU10Qzs7QUFyQkg7TUFrQk0sWUFBVztNQUNYLGFBQVksRUFDYjs7QUFwQkw7SUF1QkksMEJBMUxVO0lBNExWLG9DQTVMVTtJQTZMViwwQ0FBaUM7SUFBakMsa0NBQWlDLEVBQ2xDOztBQUVIO0VBR0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsZUFyTVk7RUFzTVosc0JBQXFCO0VBQ3JCLHNEQUE2QztVQUE3Qyw4Q0FBNkMsRUFDOUM7O0FBRUQ7RUFDRSxnQkFBZSxFQUVoQjs7QUFDRDtFQUNFLFVBQVMsRUFpQlY7O0FBbEJEO0lBSUksY0FBYTtJQUViLGVBQWMsRUFPZjs7QUFiSDtNQVFNLGNBQWEsRUFDZDs7QUFUTDtNQVdNLG1CQUFrQixFQUNuQjs7QUFaTDtJQWVJLGlCQUFnQjtJQUNoQixZQUFXLEVBQ1o7O0FBRUg7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFNBQVEsRUFDVDs7QUFDRDtFQUVJLDZCQUFvQjtVQUFwQixxQkFBb0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9sYW5kZXIvbGFuZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLmJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAyMCU7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDBweCAwcHggMjVweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ub25saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG59XHJcbi5wbHVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG4ucG9zYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbi5kZXNrIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5uYXZyb3cge1xyXG4gIG1hcmdpbjogMjVweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIHNwYW46aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG59XHJcbi5jYXJkLXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBjb2xvcjogJGxpdGU7XHJcbn1cclxuLmNhcmQtbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAyMjVweDtcclxufVxyXG4uZGVzazpob3ZlciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGFuaW1hdGlvbjogd2lkdGhleHRyYWN0IDVzO1xyXG4gICAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDVzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgd2lkdGhleHRyYWN0IHtcclxuICBmcm9tIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICB9XHJcbn1cclxuLnVzZXJpY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZXhwYW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgMnM7XHJcbn1cclxuLmV4cGFuZDpob3ZlciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XHJcbn1cclxuLmNhcmRib2FyZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYWN0aXZlX3NjcmVlbiB7XHJcbiAgLmNhcmRib2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uaW5hY3RpdmVfc2NyZWVuIHtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbjtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbnRoIHtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxudHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkbGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBpIHtcclxuICAgICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaXRlO1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAkbGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbjtcclxuICB9XHJcbn1cclxuLmV4dHJhY3Qge1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxuICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAkbGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG59XHJcbi5hY3RpdmF0ZXNpZGViYXIge1xyXG4gIHdpZHRoOiA1JTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG4gIGEge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OiBpbmhlcml0O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICB9XHJcbn1cclxuLmFjdGl2YXRlIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxufVxyXG4ucGx1czpob3ZlciB7XHJcbiAgaSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxuICB9XHJcbn1cclxuIl19 */"

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
    LanderComponent.prototype.ngOnInit = function () { };
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
    LocalityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocalityService);
    return LocalityService;
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