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

module.exports = "<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lander_lander_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lander/lander.component */ "./src/app/lander/lander.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _water_water_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./water/water.component */ "./src/app/water/water.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _lander_lander_component__WEBPACK_IMPORTED_MODULE_5__["LanderComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
                _water_water_component__WEBPACK_IMPORTED_MODULE_7__["WaterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div class=\"board\">\n  <button class=\"plus\"><i class=\"fas fa-plus-circle\"></i></button>\n  <div class=\"desk\">\n    <h2>Upcoming Trips</h2>\n    <!--<hr class=\"title\">-->\n    <div class=\"navrow\">\n      <span class=\"navitem\">Two wheeler</span>&nbsp;/&nbsp;\n      <span class=\"navitem\">Four wheeler</span>&nbsp;/&nbsp;\n      <span class=\"navitem\">By cycle</span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 card-left \">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"usericon\">\n                  <img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\" width=\"70\"\n                    alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-md-7\"> <br> Jone Doe <br> 10-10-1996 <br> Male <br> Indian\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card card-right \">\n          <div class=\"card-body\">\n            <button class=\"posbtn\">Add&nbsp;<i class=\"far fa-grin-stars\"></i></button>\n            <button class=\"posbtn\">Address&nbsp;<i class=\"far fa-address-book\"></i></button>\n            <button class=\"posbtn\">FAQ&nbsp;<i class=\"far fa-question-circle\"></i></button>\n            <button class=\"posbtn\">Surprise&nbsp;<i class=\"far fa-surprise\"></i></button>\n            <button class=\"posbtn\">Grin-squint&nbsp;<i class=\"far fa-grin-squint\"></i></button>\n            <button class=\"posbtn\">Grin&nbsp;<i class=\"far fa-grin\"></i></button>\n            <button class=\"posbtn\">Grin-beam-sweat&nbsp;<i class=\"far fa-grin-beam-sweat\"></i></button>\n            <button class=\"posbtn\">Laugh-wink&nbsp;<i class=\"far fa-laugh-wink\"></i></button>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <!---------------->\n    <div class=\"row\">\n      <div class=\"col-md-12 card-left\">\n        <div class=\"card\" [ngClass]=\"(sidemenu==true)?'active_screen':'inactive_screen'\">\n          <div class=\"card-body\">\n            <h4>Your information</h4>\n            <i class=\"fas fa-chevron-down expand\" (mouseover)=\"sidemenu = !sidemenu\" (click)=\"sidemenu = !sidemenu\"></i>\n            <div class=\"cardboard\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-surprise\"></i> Surprise\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-meh-rolling-eyes\"></i> Rolling-eyes\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-grin-squint\"></i> Squint\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-grin\"></i> Grin\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-grin-beam-sweat\"></i> Grin-beam-sweat\n                </div>\n                <div class=\"col-md-2\">\n                  <i style=\"text-align: left\" class=\"far fa-laugh-wink\"></i> Laugh-wink\n                </div>\n              </div>\n            </div>\n            <br>\n            <form class=\"uk-grid-small\" uk-grid>\n              <div class=\"uk-width-1-1\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"First name\">\n              </div>\n              <div class=\"uk-width-1-2@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Last name\">\n              </div>\n              <div class=\"uk-width-1-4@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Address line 1\">\n              </div>\n              <div class=\"uk-width-1-4@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Address line 2\">\n              </div>\n              <div class=\"uk-width-1-2@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"State\">\n              </div>\n              <div class=\"uk-width-1-2@s\">\n                <input class=\"uk-input\" type=\"text\" placeholder=\"Country\">\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <!-------------------------------->\n    <div class=\"uk-overflow-auto\">\n      <table class=\"uk-table uk-table-middle uk-table-divider\">\n        <thead>\n          <tr>\n            <th class=\"uk-table-shrink\"></th>\n            <th class=\"uk-table-shrink\">Preserve</th>\n            <th class=\"uk-table-expand\">Expand + Link</th>\n            <th class=\"uk-width-small\">Truncate</th>\n            <th class=\"uk-table-shrink uk-text-nowrap\">Shrink + Nowrap</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n          <tr>\n            <td><input class=\"uk-checkbox\" type=\"checkbox\"></td>\n            <td><img class=\"uk-preserve-width uk-border-circle\" src=\"https://image.flaticon.com/icons/png/512/145/145867.png\"\n                width=\"40\" alt=\"\"></td>\n            <td class=\"uk-table-link\">\n              <a class=\"uk-link-reset\" href=\"\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>\n            </td>\n            <td class=\"uk-text-truncate\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>\n            <td class=\"uk-text-nowrap\">Lorem ipsum dolor</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"online\"></div>\n"

/***/ }),

/***/ "./src/app/lander/lander.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lander/lander.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 20%;\n  padding: 0px 20px;\n  width: 65%;\n  background-color: #e3f2fd;\n  border-radius: 25px 0px 0px 25px;\n  overflow: auto; }\n\n.online {\n  width: 100%;\n  height: 100vh;\n  background-color: #0d47a1; }\n\n.plus {\n  background-color: #0d47a1;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  position: absolute;\n  right: 0;\n  color: #e3f2fd;\n  margin: 25px; }\n\n.posbtn {\n  background-color: #e3f2fd;\n  border: 0;\n  border-radius: 20px;\n  padding: 5px 10px 5px 10px;\n  color: #0d47a1;\n  margin: 10px; }\n\n.plus:hover i {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.desk {\n  padding: 20px; }\n\n.navrow {\n  margin: 25px 0px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.navrow span {\n    color: #0d47a1;\n    -webkit-transition: font-weight 1s ease-in-out;\n    transition: font-weight 1s ease-in-out; }\n\n.navrow span:hover {\n    font-weight: bold;\n    cursor: pointer;\n    -webkit-transition: font-weight 1s ease-in;\n    transition: font-weight 1s ease-in; }\n\n.card {\n  background-color: white;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  box-shadow: 0px 0px 1px 1px ghostwhite; }\n\n.card-right {\n  background-color: #0d47a1;\n  color: #e3f2fd; }\n\n.card-left {\n  background-color: #e3f2fd;\n  color: #0d47a1; }\n\n.title {\n  background-color: #0d47a1;\n  -webkit-transition: -webkit-animation 2s ease-in-out;\n  transition: -webkit-animation 2s ease-in-out;\n  transition: animation 2s ease-in-out;\n  transition: animation 2s ease-in-out, -webkit-animation 2s ease-in-out;\n  width: 225px; }\n\n.desk:hover .title {\n  -webkit-animation: widthextract 5s;\n          animation: widthextract 5s;\n  -webkit-transition: -webkit-animation 5s ease-in;\n  transition: -webkit-animation 5s ease-in;\n  transition: animation 5s ease-in;\n  transition: animation 5s ease-in, -webkit-animation 5s ease-in; }\n\n@-webkit-keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n@keyframes widthextract {\n  from {\n    width: 0px; }\n  to {\n    width: 225px; } }\n\n.usericon {\n  text-align: center;\n  font-size: 40px; }\n\nbutton:focus {\n  outline: none;\n  box-shadow: none;\n  border: none; }\n\n.expand {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 25px;\n  cursor: pointer; }\n\n.expand:hover {\n  -webkit-animation: rotate 1s;\n          animation: rotate 1s; }\n\n.cardboard {\n  display: none;\n  text-align: center;\n  margin-top: 20px; }\n\n.active_screen .cardboard {\n  text-align: center;\n  width: 100%;\n  display: block;\n  -webkit-transition: display 1s ease-in;\n  transition: display 1s ease-in; }\n\n.inactive_screen {\n  -webkit-transition: height 1s ease-in;\n  transition: height 1s ease-in; }\n\n.inactive_screen .cardboard {\n    display: none;\n    -webkit-transition: display 1s ease-in;\n    transition: display 1s ease-in; }\n\nth {\n  color: #0d47a1;\n  font-weight: bold; }\n\ntr:hover {\n  background-color: #e3f2fd; }\n\n@media (max-width: 576px) {\n  .as-mob {\n    display: none; }\n  .board {\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGVyL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcdHlyZS9zcmNcXGFwcFxcbGFuZGVyXFxsYW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDViwwQkFUWTtFQVVaLGlDQUFnQztFQUNoQyxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLDBCQWpCWSxFQWtCYjs7QUFDRDtFQUNFLDBCQXBCWTtFQXFCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGVBekJZO0VBMEJaLGFBQVksRUFDYjs7QUFDRDtFQUNFLDBCQTdCWTtFQThCWixVQUFTO0VBQ1Qsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUcxQixlQXBDWTtFQXFDWixhQUFZLEVBQ2I7O0FBQ0Q7RUFFSSw2QkFBb0I7VUFBcEIscUJBQW9CLEVBQ3JCOztBQUVIO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGtDQUF5QjtZQUF6QiwwQkFBeUIsRUFBQSxFQUFBOztBQUc3QjtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQix3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix1Q0FBc0MsRUFVdkM7O0FBZkQ7SUFPSSxlQTlEVTtJQStEViwrQ0FBc0M7SUFBdEMsdUNBQXNDLEVBQ3ZDOztBQVRIO0lBV0ksa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YsMkNBQWtDO0lBQWxDLG1DQUFrQyxFQUNuQzs7QUFFSDtFQUNFLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsdUNBQXNDLEVBQ3ZDOztBQUNEO0VBQ0UsMEJBaEZZO0VBaUZaLGVBaEZZLEVBaUZiOztBQUNEO0VBQ0UsMEJBbkZZO0VBb0ZaLGVBckZZLEVBc0ZiOztBQUNEO0VBQ0UsMEJBeEZZO0VBeUZaLHFEQUFvQztFQUFwQyw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQXBDLHVFQUFvQztFQUNwQyxhQUFZLEVBQ2I7O0FBQ0Q7RUFFSSxtQ0FBMEI7VUFBMUIsMkJBQTBCO0VBQzFCLGlEQUFnQztFQUFoQyx5Q0FBZ0M7RUFBaEMsaUNBQWdDO0VBQWhDLCtEQUFnQyxFQUNqQzs7QUFFSDtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxhQUFZLEVBQUEsRUFBQTs7QUFMaEI7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsYUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLE9BQU07RUFDTixhQUFZO0VBQ1osZ0JBQWUsRUFFaEI7O0FBQ0Q7RUFDRSw2QkFBb0I7VUFBcEIscUJBQW9CLEVBQ3JCOztBQUNEO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFFSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGVBQWM7RUFDZCx1Q0FBOEI7RUFBOUIsK0JBQThCLEVBQy9COztBQUVIO0VBQ0Usc0NBQTZCO0VBQTdCLDhCQUE2QixFQUs5Qjs7QUFORDtJQUdJLGNBQWE7SUFDYix1Q0FBOEI7SUFBOUIsK0JBQThCLEVBQy9COztBQUVIO0VBQ0UsZUFuSlk7RUFvSlosa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsMEJBdEpZLEVBdUpiOztBQUVEO0VBQ0U7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsUUFBTztJQUNQLE9BQU07SUFDTixVQUFTO0lBQ1QsbUJBQWtCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kZXIvbGFuZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcms6ICMwZDQ3YTE7XHJcbiRsaXRlOiAjZTNmMmZkO1xyXG5cclxuLmJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAyMCU7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDBweCAwcHggMjVweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ub25saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG59XHJcbi5wbHVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICRsaXRlO1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG4ucG9zYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4ucGx1czpob3ZlciB7XHJcbiAgaSB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxcztcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbi5kZXNrIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5uYXZyb3cge1xyXG4gIG1hcmdpbjogMjVweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIHNwYW46aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXdlaWdodCAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBnaG9zdHdoaXRlO1xyXG59XHJcbi5jYXJkLXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICBjb2xvcjogJGxpdGU7XHJcbn1cclxuLmNhcmQtbGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpdGU7XHJcbiAgY29sb3I6ICRkYXJrO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XHJcbiAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAyMjVweDtcclxufVxyXG4uZGVzazpob3ZlciB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGFuaW1hdGlvbjogd2lkdGhleHRyYWN0IDVzO1xyXG4gICAgdHJhbnNpdGlvbjogYW5pbWF0aW9uIDVzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgd2lkdGhleHRyYWN0IHtcclxuICBmcm9tIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICB9XHJcbn1cclxuLnVzZXJpY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZXhwYW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYW5pbWF0aW9uOiByb3RhdGUgMnM7XHJcbn1cclxuLmV4cGFuZDpob3ZlciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XHJcbn1cclxuLmNhcmRib2FyZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYWN0aXZlX3NjcmVlbiB7XHJcbiAgLmNhcmRib2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4uaW5hY3RpdmVfc2NyZWVuIHtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbjtcclxuICAuY2FyZGJvYXJkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcbnRoIHtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxudHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5ib2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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