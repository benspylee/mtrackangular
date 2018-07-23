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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2);\r\ntransition: 0.3s;\r\nwidth: 500px;\r\nheight: 320px;\r\nmargin: auto;   \r\n\r\n}\r\n\r\n.container {\r\n    padding: 40px 70px;   \r\n}\r\n\r\nbody {background-color: coral;}\r\n\r\n#over img {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tdisplay: block;\r\n}\r\n\r\n.panel-table .panel-body{\r\n\tpadding:0;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered{\r\n\tborder-style: none;\r\n\tmargin:0;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {\r\n\t  text-align:center;\r\n\t  width: 100px;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,\r\n  .panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {\r\n\tborder-right: 0px;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,\r\n  .panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {\r\n\tborder-left: 0px;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{\r\n\tborder-bottom: 0px;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{\r\n\tborder-top: 0px;\r\n  }\r\n\r\n.panel-table .panel-footer .pagination{\r\n\tmargin:0; \r\n  }\r\n\r\n/*\r\n  used to vertically center elements, may need modification if you're not using default sizes.\r\n  */\r\n\r\n.panel-table .panel-footer .col{\r\n   line-height: 34px;\r\n   height: 34px;\r\n  }\r\n\r\n.panel-table .panel-heading .col h3{\r\n   line-height: 30px;\r\n   height: 30px;\r\n  }\r\n\r\n.panel-table .panel-body .table-bordered > tbody > tr > td{\r\n\tline-height: 34px;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-xl bg-light navbar-light  ml-auto\" *ngIf=\"isLoggedIn$ | async\" >\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li class=\"nav-item\" routerlinkactive=\"active current\">\r\n                <a [routerLink]=\"['/post']\"  class=\"nav-link\"><b>Post</b></a>\r\n            </li>\r\n            <li class=\"nav-item\" routerlinkactive=\"active current\">\r\n                <a [routerLink]=\"['/quote']\" class=\"nav-link\"><b>Quotes</b></a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav ml-auto\">\r\n                <li class=\"nav-item\" routerlinkactive=\"active current\">\r\n                        <a (click)=\"logout()\" [routerLink]=\"['/login']\" class=\"nav-link\"><b>logout</b></a>\r\n                    </li>\r\n            </ul>\r\n    </div>\r\n</nav>\r\n\r\n<!-- <mat-toolbar color=\"primary\">\r\n    <span>\r\n      Angular NavBar + Login Example #01\r\n    </span>\r\n    <span class=\"fill-remaining-space\"></span>\r\n    <button mat-button>Menu Option 01</button>\r\n    <button mat-button>Menu Option 02</button>\r\n    <button mat-button routerLink=\"login\">Login</button>\r\n    <button mat-button (click)=\"onLogout()\">Logout</button>\r\n  </mat-toolbar> -->\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(authenticateservice) {
        this.authenticateservice = authenticateservice;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authenticateservice.isLoggedIn;
    };
    AppComponent.prototype.logout = function () {
        // localStorage.removeItem("loggeduser")
        //  this.isLoggedIn$=false;
        this.authenticateservice.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());

var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"] },
    { path: 'quote', component: _quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"] },
    { path: '#', redirectTo: '' }
];


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _service_postinfo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/postinfo.service */ "./src/app/service/postinfo.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _service_quoteinfo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/quoteinfo.service */ "./src/app/service/quoteinfo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_12__["QuoteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_component__WEBPACK_IMPORTED_MODULE_3__["routes"]), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]
            ],
            providers: [_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _service_postinfo_service__WEBPACK_IMPORTED_MODULE_10__["PostinfoService"], _service_quoteinfo_service__WEBPACK_IMPORTED_MODULE_13__["QuoteinfoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-screen {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n    font-size: 120px;\r\n    font: bold;\r\n  }\r\n\r\n\r\n  body {\r\n    background-image: url(\"/angulardemo-1.0/assets/BWbg.jpg\");\r\n    background-color: #cccccc;\r\n }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div id=\"over\" class=\"center-screen\">\n        <label>Welcome..!</label>\n      </div>\n</body>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticateservice, router) {
        this.authenticateservice = authenticateservice;
        this.router = router;
        if (localStorage.getItem("loggeduser") != null)
            this.authenticateservice.getloggedIn().next(true);
        else
            this.router.navigateByUrl('/login');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterContentChecked = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0,0.2);\r\n    transition: 0.3s;\r\n    width: 500px;\r\n    height: 320px;\r\n    margin: auto;   \r\n    \r\n    }\r\n    \r\n    .container {\r\n        padding: 40px 70px;   \r\n    }\r\n    \r\n    body {background-color: coral;}\r\n    \r\n    #over img {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: block;\r\n    }\r\n    \r\n    .help-block{\r\n        color: red;\r\n    }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div style=\"text-align: center\">\n  <h1>Welcome</h1>\n</div>\n-->\n\n<div style=\"padding-top: 110px\">\n\n</div>\n\n<div id=\"over\">\n  <img src=\"../assets/logo.jpg\" width=\"100px\" />\n</div>\n\n<div class=\"card\">\n \n    <div class=\"container\">\n        <form #f=\"ngForm\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !username.valid}\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required\n        />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !password.valid}\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n          required/>\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password required</div>\n      </div>\n      <div class=\"form-group\" style=\" margin: 0 auto;text-align:center;\">\n        <!-- <input type=\"button\" class=\"btn btn-primary\" value=\"login\" /> -->\n        <button class=\"btn btn-primary\">login</button>\n      </div>\n      <div *ngIf=\"loginerror\" class=\"help-block\">{{loginerrormsg}}</div>\n    </form>\n    \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticateservice, router) {
        this.authenticateservice = authenticateservice;
        this.router = router;
        this.model = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.loginerrormsg = '';
        this.loginerror = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("user info:" + JSON.stringify(this.model));
        this.authenticateservice.login(this.model).subscribe(function (data) {
            console.log(data);
            if (data != null && data['msg'] == 'success') {
                _this.authenticateservice.getloggedIn().next(true);
                _this.loginerror = false;
                _this.loginerrormsg = '';
                _this.router.navigateByUrl("/home");
                localStorage.setItem("loggeduser", JSON.stringify(data['response']));
            }
            else {
                _this.authenticateservice.getloggedIn().next(false);
                _this.loginerror = true;
                _this.loginerrormsg = data['response'];
                console.log("login failed");
            }
            return data;
        }, function (error) {
            _this.authenticateservice.getloggedIn().next(false);
            console.log(error);
            _this.loginerror = true;
            _this.loginerrormsg = (error['msg'] == undefined ? error['statusText'] == undefined ? 'UnKown error Occured' : error['statusText'] : 'UnKown error Occured');
            return error;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/commonUtils.ts":
/*!**************************************!*\
  !*** ./src/app/model/commonUtils.ts ***!
  \**************************************/
/*! exports provided: CommonUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtils", function() { return CommonUtils; });
var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    CommonUtils.appContextpath = "/angulardemo-1.0/";
    CommonUtils.appUserKey = "mark:m@dm@xFury";
    return CommonUtils;
}());



/***/ }),

/***/ "./src/app/model/posts.ts":
/*!********************************!*\
  !*** ./src/app/model/posts.ts ***!
  \********************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
var Posts = /** @class */ (function () {
    function Posts() {
        this.postid = 0;
        this.cuser = 0;
        this.status = 1;
        this.muser = 0;
        this.fileupload1 = '';
        this.fileupload2 = '';
        this.postinfo = {};
    }
    return Posts;
}());



/***/ }),

/***/ "./src/app/model/quotes.ts":
/*!*********************************!*\
  !*** ./src/app/model/quotes.ts ***!
  \*********************************/
/*! exports provided: Quotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotes", function() { return Quotes; });
var Quotes = /** @class */ (function () {
    function Quotes() {
        this.quoteno = 0;
        this.cuser = 0;
        this.status = 1;
        this.muser = 0;
        this.fileupload1 = '';
    }
    return Quotes;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-table .panel-body{\r\n    padding:0;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered{\r\n    border-style: none;\r\n    margin:0;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {\r\n      text-align:center;\r\n      width: 100px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,\r\n  .panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {\r\n    border-right: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,\r\n  .panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {\r\n    border-left: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{\r\n    border-bottom: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{\r\n    border-top: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-footer .pagination{\r\n    margin:0; \r\n  }\r\n  \r\n  /*\r\n  used to vertically center elements, may need modification if you're not using default sizes.\r\n  */\r\n  \r\n  .panel-table .panel-footer .col{\r\n   line-height: 34px;\r\n   height: 34px;\r\n  }\r\n  \r\n  .panel-table .panel-heading .col h3{\r\n   line-height: 30px;\r\n   height: 30px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > tbody > tr > td{\r\n    line-height: 34px;\r\n  }\r\n  \r\n  /* The Modal (background) */\r\n  \r\n  .modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n  \r\n  /* The Modal (background) */\r\n  \r\n  .modalalert {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content */\r\n  \r\n  .modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n  \r\n  .modal-alertcontent {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 50%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n  \r\n  /* Add Animation */\r\n  \r\n  @-webkit-keyframes animatetop {\r\n  from {top:-300px; opacity:0} \r\n  to {top:0; opacity:1}\r\n}\r\n  \r\n  @keyframes animatetop {\r\n  from {top:-300px; opacity:0}\r\n  to {top:0; opacity:1}\r\n}\r\n  \r\n  /* The Close Button */\r\n  \r\n  .close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n  \r\n  .close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n  \r\n  .modal-header {\r\n  padding: 2px 16px;\r\n  background-color:#ca8e0bb9;\r\n  color: white;\r\n}\r\n  \r\n  .modal-body {padding: 2px 16px;}\r\n  \r\n  .modal-footer {\r\n  padding: 2px 16px;\r\n  background-color: #ca8e0bb9;\r\n  color: rgb(255, 255, 255);\r\n}\r\n  \r\n  .ellipsis {\r\n    max-width: 500px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n  \r\n  .table tr.active td {\r\n  background-color:#123456 !important;\r\n  color: white;\r\n}\r\n  \r\n  .centered_buttons {\r\n   display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n  .div-button\r\n{\r\n    margin-left: 10px;\r\n}\r\n  \r\n  .help-block{\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"panel panel-default panel-table\">\n          <div class=\"panel-heading\">\n            <div class=\"row\">\n              <div class=\"col col-xs-6\">\n                <h3 class=\"panel-title\">PostManager</h3>\n              </div>\n              <div class=\"col col-xs-6 text-right\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"reset()\">Reset</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"searchpop()\">Search</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"add()\">Add</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"edit()\">Edit</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-delete\" (click)=\"deletePost()\">Delete</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n              <div>\n                  <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event;selectedRow=-1;\"></pagination-controls>\n              </div>\n\n            <table class=\"table table-striped table-bordered table-list\">\n              <thead>\n                <tr>\n                  <th>PostTitle</th>\n                  <th>PostDesc</th>\n                  <th>PostInfo</th>\n                </tr>\n              </thead>\n              <tr *ngFor=\"let post of posts | paginate: { id: 'listing_pagination',\n              itemsPerPage: itemsPerPage,\n              currentPage: page,\n              totalItems: totalRec }; let i = index;\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n                <td>{{post.posttitle}}</td>\n                <td>{{post.postdesc}}</td>\n                <td class=\"ellipsis\">{{post.postinfo.postviewdesc}}</td>\n              </tr>\n            </table>\n           \n          </div>\n          <!--           <div class=\"panel-footer\">\n              <div class=\"row\">\n                <div class=\"col col-xs-4\">Page 1 of 5\n                </div>\n                <div class=\"col col-xs-8\">\n                  <ul class=\"pagination hidden-xs pull-right\">\n                    <li><a href=\"#\">1</a></li>\n                    <li><a href=\"#\">2</a></li>\n                    <li><a href=\"#\">3</a></li>\n                    <li><a href=\"#\">4</a></li>\n                    <li><a href=\"#\">5</a></li>\n                  </ul>\n                  <ul class=\"pagination visible-xs pull-right\">\n                      <li><a href=\"#\">«</a></li>\n                      <li><a href=\"#\">»</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div> -->\n        </div>\n      </div>\n    </div>\n\n    <div id=\"myModal\" class=\"modal\" [style.display]=\"popstyle\">\n\n      <!-- Modal content -->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <div (click)=\"toggle()\">\n            <span class=\"close\">&times;</span>\n          </div>\n          <div>\n              <Label>Manage Post</Label> \n          </div>         \n        </div>\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <form #f=\"ngForm\" name=\"form\" (ngSubmit)=\"f.form.valid && submitPostinfo()\" novalidate>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !fposttitle.valid}\">\n                <label for=\"fposttitle\">PostTitle</label>\n                <input type=\"text\" id=\"fposttitle\" name=\"fposttitle\" class=\"form-control\" [(ngModel)]=\"model.posttitle\" #fposttitle=\"ngModel\"\n                  required />\n                <div *ngIf=\"f.submitted && !fposttitle.valid\" class=\"help-block\">PostTitle required</div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !fpostdesc.valid}\">\n                <label for=\"fpostdesc\">PostDesc</label>\n                <input type=\"text\" id=\"fpostdesc\" name=\"fpostdesc\" class=\"form-control\" [(ngModel)]=\"model.postdesc\" #fpostdesc=\"ngModel\"\n                  required />\n                <div *ngIf=\"f.submitted && !fpostdesc.valid\" class=\"help-block\">PostDesc required</div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !fncategorycode.valid}\">\n                <label for=\"fncategorycode\">PostCategory</label>\n                <select [compareWith]=\"byId\" id=\"fncategorycode\" name=\"fncategorycode\" class=\"form-control\" ngControl=\"fncategoryControl\"\n                [(ngModel)]=\"model.newscategorycode\" #fncategorycode=\"ngModel\" required>\n                  <option *ngFor=\"let cat of cats\" [ngValue]=\"cat.newscategorycode\">{{cat.newscategoryname1}}/{{cat.newscategoryname2}}</option>\n                </select>\n                <div *ngIf=\"f.submitted && !fncategorycode.valid\" class=\"help-block\">Post Category required</div>\n              </div>\n\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !postvwdesc.valid}\">\n                <label for=\"postvwdesc\">PostInfo</label>\n                <textarea rows=\"10\" id=\"postvwdesc\" name=\"postvwdesc\" class=\"form-control\" [(ngModel)]=\"model.postinfo.postviewdesc\" #postvwdesc=\"ngModel\"\n                  required></textarea>\n                <div *ngIf=\"f.submitted && !postvwdesc.valid\" class=\"help-block\">PostInfo required</div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !postimgurl.valid}\">\n                <label for=\"postimgurl\">PostImage</label>\n                <input type=\"text\" readonly id=\"postimgurl\" name=\"postimgurl\" class=\"form-control\" [(ngModel)]=\"model.postimgurl\"\n                  #postimgurl=\"ngModel\" required />\n                <input type=\"file\" #fileupload1 name=\"uploadfile1\" [(ngModel)]=\"model.fileupload1\" #fileupload1=\"ngModel\" (change)=\"postimgfileChange($event)\" class=\"form-control\"  />\n                <!--     <button class=\"btn btn-success\" [disabled]=\"uploadfile1 == undefined\"\n\t                  (click)=\"uploadfilepostimg()\">Upload</button>\n           -->\n                <div *ngIf=\"f.submitted && !postimgurl.valid\" class=\"help-block\">PostImage required</div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !postimgurls.valid}\">\n                  <label for=\"postimgurls\">PostViewImage</label>\n                  <input type=\"text\" readonly id=\"postimgurls\" name=\"postimgurls\" class=\"form-control\" [(ngModel)]=\"model.postinfo.postimgurls\"\n                    #postimgurls=\"ngModel\" required />\n                  <input type=\"file\" #fileupload2 name=\"uploadfile2\" [(ngModel)]=\"model.fileupload2\" #fileupload2=\"ngModel\" (change)=\"postimgfileChange($event)\" class=\"form-control\"  />\n                  <!--     <button class=\"btn btn-success\" [disabled]=\"uploadfile1 == undefined\"\n                      (click)=\"uploadfilepostimg()\">Upload</button>\n             -->\n                  <div *ngIf=\"f.submitted && !postimgurl.valid\" class=\"help-block\">PostViewImage required</div>\n                </div>\n\n              <div class=\"form-group\" style=\" margin: 0 auto;text-align:center;\">\n                <button class=\"btn btn-primary\">Submit</button>\n              </div>\n              <div *ngIf=\"submiterror\" class=\"help-block\"> </div>\n\n            </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <!--   <h3> </h3> -->\n        </div>\n      </div>\n\n    </div>\n\n    <div id=\"searchmodal\" class=\"modal\" [style.display]=\"searchstyle\">\n\n        <!-- Modal content -->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <div (click)=\"togglesearch()\">\n              <span class=\"close\">&times;</span>\n            </div>\n              <Label>Search Post</Label> \n          </div>\n          <div class=\"modal-body\">\n            <div class=\"container\">\n              <form #searchform=\"ngForm\" name=\"form\" (ngSubmit)=\"searchform.form.valid \" novalidate>\n  \n                <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !posttitle.valid}\">\n                  <label for=\"posttitle\">PostTitle</label>\n                  <input type=\"text\" id=\"posttitle\" name=\"posttitle\" class=\"form-control\" [(ngModel)]=\"searchmodel.posttitle\" #posttitle=\"ngModel\"\n                     />\n                  <div *ngIf=\"f.submitted && !posttitle.valid\" class=\"help-block\">PostTitle required</div>\n                </div>\n  \n                <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !postdesc.valid}\">\n                  <label for=\"postdesc\">PostDesc</label>\n                  <input type=\"text\" id=\"posttitle2\" name=\"postdesc\" class=\"form-control\" [(ngModel)]=\"searchmodel.postdesc\" #postdesc=\"ngModel\"\n                     />\n                  <div *ngIf=\"f.submitted && !postdesc.valid\" class=\"help-block\">PostDesc required</div>\n                </div>\n  \n  \n                <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !postdesc.valid}\">\n                  <label for=\"postdesc\">PostInfo</label>\n                  <input type=\"text\" id=\"postdesc\" name=\"postdesc\" class=\"form-control\" [(ngModel)]=\"searchmodel.postinfo.postviewdesc\" #postdesc=\"ngModel\"/>\n                  <div *ngIf=\"f.submitted && !postdesc.valid\" class=\"help-block\">PostDesc required</div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !createddate.valid}\">\n                    <label for=\"createddate\">Post FromDate</label>\n                    <input type=\"text\" class=\"form-control\" id=\"createddate\" name=\"createddate\" (change)=\"datehandle($event)\" [(ngModel)]=\"searchmodel.createddate\" #createddate=\"ngModel\"/>\n                    <div *ngIf=\"f.submitted && !createddate.valid\" class=\"help-block\">Post Date required</div>\n                  </div>\n\n                  <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !modifieddate.valid}\">\n                    <label for=\"modifieddate\">Post ToDate</label>\n                    <input type=\"text\" class=\"form-control\" id=\"modifieddate\" name=\"modifieddate\" (change)=\"datehandle($event)\" [(ngModel)]=\"searchmodel.modifieddate\" #modifieddate=\"ngModel\"/>\n                    <div *ngIf=\"f.submitted && !modifieddate.valid\" class=\"help-block\">Post ToDate required</div>\n                  </div>\n          \n                <div class=\"form-group\" style=\" margin: 0 auto;text-align:center;\">\n                  <button class=\"btn btn-primary\" (click)=\"search()\">Search</button>\n                  <button class=\"btn  btn-primary\" (click)=\"searchform.form.reset()\">Reset</button>\n                </div>\n              \n                <div *ngIf=\"submiterror\" class=\"help-block\"> </div>\n  \n              </form>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <!--   <h3> </h3> -->\n          </div>\n        </div>\n  \n      </div>\n\n    <div id=\"alertModal\" class=\"modalalert\" [style.display]=\"popalertstyle\">\n      <div class=\"modal-alertcontent\">\n        <div class=\"modal-header\">\n          <div (click)=\"togglealert()\">\n            <span class=\"close\">&times;</span>           \n          </div>\n          <Label>Decision</Label> \n        </div>\n\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <div style=\"text-align : center;\">\n              <label>Are you sure you want to delete the item..?</label>\n            </div>\n            <div class=\"centered_buttons\">\n              <button class=\"btn btn-primary div-button\" (click)=\"deletePostdecision()\">Ok</button>\n              <span width=\"10%\"> </span>\n              <button class=\"btn btn-primary div-button\" (click)=\"togglealert()\">Cancel</button>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _service_postinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/postinfo.service */ "./src/app/service/postinfo.service.ts");
/* harmony import */ var _model_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/posts */ "./src/app/model/posts.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = /** @class */ (function () {
    function PostComponent(authenticateservice, postservice, router) {
        var _this = this;
        this.authenticateservice = authenticateservice;
        this.postservice = postservice;
        this.router = router;
        this.posts = null;
        this.popstyle = 'none';
        this.model = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
        this.cats = JSON.parse("[{\"newscategorycode\":\"1\",\"newscategoryname\":\"History\"},{\"newscategorycode\":\"2\",\"newscategoryname\":\"Cenima\"}]");
        this.selectedRow = -1;
        this.popalertstyle = 'none';
        this.totalRec = 0;
        this.searchstyle = 'none';
        this.searchmodel = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
        this.page = 1;
        this.itemsPerPage = 5;
        if (localStorage.getItem("loggeduser") != null)
            this.authenticateservice.getloggedIn().next(true);
        else
            this.router.navigateByUrl('/login');
        this.setClickedRow = function (index) {
            this.selectedRow = index;
            var i = (this.selectedRow + this.itemsPerPage * (this.page - 1));
            this.model = this.posts[i];
        };
        this.postservice.getPostCat().subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success') {
                    _this.cats = data['response'];
                }
            }
        });
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getpostinfo();
        var self = this;
        $(document).ready(function () {
            $("#createddate").datepicker({
                dateFormat: 'yy-mm-dd',
                onSelect: function (date) {
                    self.searchmodel.createddate = date;
                }
            });
            $("#modifieddate").datepicker({
                dateFormat: 'yy-mm-dd',
                onSelect: function (date) {
                    self.searchmodel.modifieddate = date;
                }
            });
        });
    };
    PostComponent.prototype.datehandle = function (event) {
        console.log("Date changed: ");
    };
    PostComponent.prototype.reset = function () {
        this.page = 1;
        this.getpostinfo();
    };
    PostComponent.prototype.byId = function (item1, item2) {
        return Number(item1) === item2;
    };
    PostComponent.prototype.searchpop = function () {
        this.searchmodel = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
        this.togglesearch();
    };
    PostComponent.prototype.search = function () {
        var _this = this;
        this.postservice.searchPost(this.searchmodel).subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success') {
                    _this.posts = data['response'];
                    _this.totalRec = _this.posts.length;
                    _this.togglesearch();
                    _this.searchmodel = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
                }
                else {
                    alert(data['response']);
                }
            }
        });
    };
    /*  onSelect(catcode:Number)
     {
     for(let i=0;i<this.cats.length-1;i++)
     {
     if(catcode == this.cats[i].newscategorycode )
     {
       this.selectedcat=this.cats[i];
     }
     }
     }
    */
    PostComponent.prototype.getpostinfo = function () {
        var _this = this;
        this.postservice.getPost().subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success') {
                    _this.posts = data['response'];
                    _this.totalRec = _this.posts.length;
                }
            }
        });
    };
    PostComponent.prototype.add = function () {
        this.selectedRow = -1;
        //this.mytemplateForm.resetForm();
        this.model = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
        this.toggle();
    };
    PostComponent.prototype.edit = function () {
        if (this.selectedRow != -1) {
            //  let i:any=this.selectedRow;
            //  this.model=this.posts[i]
            this.toggle();
        }
    };
    PostComponent.prototype.toggle = function () {
        if (this.popstyle == 'none') {
            this.popstyle = 'block';
        }
        else if (this.popstyle == 'block') {
            this.popstyle = 'none';
        }
    };
    PostComponent.prototype.togglesearch = function () {
        if (this.searchstyle == 'none') {
            this.searchstyle = 'block';
        }
        else if (this.searchstyle == 'block') {
            this.searchstyle = 'none';
        }
    };
    PostComponent.prototype.togglealert = function () {
        if (this.popalertstyle == 'none') {
            this.popalertstyle = 'block';
        }
        else if (this.popalertstyle == 'block') {
            this.popalertstyle = 'none';
        }
    };
    PostComponent.prototype.postimgfileChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
            if (target.name == 'uploadfile1')
                this.model.postimgurl = files[i].name;
            else if (target.name == 'uploadfile2')
                this.model.postinfo.postimgurls = files[i].name;
        }
        if (files.length > 0) {
            this.uploadF1(formData);
        }
        else {
            if (target.name == 'uploadfile1')
                this.model.postimgurl = null;
            else if (target.name == 'uploadfile2')
                this.model.postinfo.postimgurls = null;
        }
    };
    PostComponent.prototype.uploadF1 = function (formData) {
        this.postservice.uploadF1(formData).subscribe(function (data) {
            if (data['response'] != null) {
                if (data['response'] == 'success')
                    alert('file upload success');
                else
                    alert('error has occurred..!');
            }
        });
    };
    PostComponent.prototype.uploadfilepostimg = function () {
        this.postservice.uploadFile(this.uploadfile1).subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success')
                    alert('file upload success');
                else
                    alert('error has occurred..!');
            }
        });
    };
    PostComponent.prototype.submitPostinfo = function () {
        var _this = this;
        if (this.model.postid == 0) {
            this.postservice.addPost(this.model).subscribe(function (data) {
                if (data['response'] != null) {
                    if (data['msg'] == 'success') {
                        _this.toggle();
                        _this.mytemplateForm.resetForm();
                        _this.getpostinfo();
                        _this.selectedRow = -1;
                        _this.model = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
                    }
                    else
                        alert('error has occurred..!');
                }
            });
        }
        else if (this.model.postid != 0) {
            this.postservice.updatePost(this.model).subscribe(function (data) {
                if (data['response'] != null) {
                    if (data['msg'] == 'success') {
                        _this.toggle();
                        _this.mytemplateForm.resetForm();
                        _this.getpostinfo();
                        _this.selectedRow = -1;
                        _this.model = new _model_posts__WEBPACK_IMPORTED_MODULE_4__["Posts"]();
                    }
                    else
                        alert('error has occurred..!');
                }
            });
        }
    };
    PostComponent.prototype.deletePost = function () {
        if (this.selectedRow != -1) {
            this.togglealert();
        }
    };
    PostComponent.prototype.deletePostdecision = function () {
        var _this = this;
        if (this.model.postid != 0) {
            this.postservice.deletePost(this.model).subscribe(function (data) {
                if (data['response'] != null) {
                    if (data['msg'] == 'success') {
                        _this.getpostinfo();
                        _this.togglealert();
                        alert('post deleted successfully..!');
                    }
                    else
                        alert('error has occurred..!');
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PostComponent.prototype, "mytemplateForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchform'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PostComponent.prototype, "searchform", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _service_postinfo_service__WEBPACK_IMPORTED_MODULE_3__["PostinfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-table .panel-body{\r\n    padding:0;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered{\r\n    border-style: none;\r\n    margin:0;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {\r\n      text-align:center;\r\n      width: 100px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,\r\n  .panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {\r\n    border-right: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,\r\n  .panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {\r\n    border-left: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{\r\n    border-bottom: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{\r\n    border-top: 0px;\r\n  }\r\n  \r\n  .panel-table .panel-footer .pagination{\r\n    margin:0; \r\n  }\r\n  \r\n  /*\r\n  used to vertically center elements, may need modification if you're not using default sizes.\r\n  */\r\n  \r\n  .panel-table .panel-footer .col{\r\n   line-height: 34px;\r\n   height: 34px;\r\n  }\r\n  \r\n  .panel-table .panel-heading .col h3{\r\n   line-height: 30px;\r\n   height: 30px;\r\n  }\r\n  \r\n  .panel-table .panel-body .table-bordered > tbody > tr > td{\r\n    line-height: 34px;\r\n  }\r\n  \r\n  /* The Modal (background) */\r\n  \r\n  .modalq {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n  \r\n  /* The Modal (background) */\r\n  \r\n  .modalalertq {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n  /* Modal Content */\r\n  \r\n  .modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n  \r\n  .modal-alertcontent {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 50%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n  \r\n  /* Add Animation */\r\n  \r\n  @-webkit-keyframes animatetop {\r\n  from {top:-300px; opacity:0} \r\n  to {top:0; opacity:1}\r\n}\r\n  \r\n  @keyframes animatetop {\r\n  from {top:-300px; opacity:0}\r\n  to {top:0; opacity:1}\r\n}\r\n  \r\n  /* The Close Button */\r\n  \r\n  .close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n  \r\n  .close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n  \r\n  .modal-header {\r\n  padding: 2px 16px;\r\n  background-color:#ca8e0bb9;\r\n  color: white;\r\n}\r\n  \r\n  .modal-body {padding: 2px 16px;}\r\n  \r\n  .modal-footer {\r\n  padding: 2px 16px;\r\n  background-color: #ca8e0bb9;\r\n  color: rgb(255, 255, 255);\r\n}\r\n  \r\n  .ellipsis {\r\n    max-width: 500px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n  \r\n  .table tr.active td {\r\n  background-color:#123456 !important;\r\n  color: white;\r\n}\r\n  \r\n  .centered_buttons {\r\n   display: flex;\r\n    justify-content: center;\r\n}\r\n  \r\n  .div-button\r\n{\r\n    margin-left: 10px;\r\n}\r\n  \r\n  .help-block{\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"panel panel-default panel-table\">\n          <div class=\"panel-heading\">\n            <div class=\"row\">\n              <div class=\"col col-xs-6\">\n                <h3 class=\"panel-title\">QuoteManager</h3>\n              </div>\n              <div class=\"col col-xs-6 text-right\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"reset()\">Reset</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"searchpop()\">Search</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"add()\">Add</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"edit()\">Edit</button>\n                <button type=\"button\" class=\"btn btn-sm btn-primary btn-delete\" (click)=\"deleteQuote()\">Delete</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n              <div>\n                  <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event;selectedRow=-1;\"></pagination-controls>\n              </div>\n\n            <table class=\"table table-striped table-bordered table-list\">\n              <thead>\n                <tr>\n                  <th>QuoteColor</th>\n                  <th>QuoteImg</th>\n                  <th>QuoteDesc</th>\n                </tr>\n              </thead>\n              <tr *ngFor=\"let quote of quotes | paginate: { id: 'listing_pagination',\n              itemsPerPage: itemsPerPage,\n              currentPage: page,\n              totalItems: totalRec }; let i = index;\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n                <td>{{getcolorname(quote.quotecolor)}}</td>\n                <td>{{quote.quoteimg}}</td>\n                <td class=\"ellipsis\">{{quote.quotedesc}}</td>\n              </tr>\n            </table>          \n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div id=\"myModal\" class=\"modalq\" [style.display]=\"popstyle\">\n\n      <!-- Modal content -->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <div (click)=\"toggle()\">\n            <span class=\"close\">&times;</span>\n          </div>\n          <div>\n              <Label>Manage Quote</Label> \n          </div>         \n        </div>\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <form #f=\"ngForm\" name=\"form\" (ngSubmit)=\"f.form.valid && submitQuoteinfo()\" novalidate>\n\n            \n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !quotecolor.valid}\">\n                <label for=\"quotecolor\">QuoteColor</label>\n                <select [compareWith]=\"byId\" id=\"quotecolor\" name=\"quotecolor\" class=\"form-control\" [(ngModel)]=\"model.quotecolor\"\n                  #quotecolor=\"ngModel\" required>\n                  <option *ngFor=\"let cat of cats\" [ngValue]=\"cat.quotecolorcd\">{{cat.quotecolor}}</option>\n                </select>\n                <div *ngIf=\"f.submitted && !quotecolor.valid\" class=\"help-block\">QuoteColor required</div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !quotevdesc.valid}\">\n                <label for=\"quotevdesc\">QuoteDesc</label>\n                  <textarea rows=\"10\" id=\"quotevdesc\" name=\"quotevdesc\" class=\"form-control\" [(ngModel)]=\"model.quotedesc\" \n                  #quotevdesc=\"ngModel\" required>\n                </textarea>\n                <div *ngIf=\"f.submitted && !quotevdesc.valid\" class=\"help-block\">QuoteDesc required</div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !quoteimg.valid}\">\n                <label for=\"quoteimg\">QuoteImage</label>\n                <input type=\"text\" readonly id=\"quoteimg\" name=\"quoteimg\" class=\"form-control\" [(ngModel)]=\"model.quoteimg\"\n                  #quoteimg=\"ngModel\" required />\n                <input type=\"file\" #fileupload1 name=\"uploadfile1\"  (change)=\"quoteimgfileChange($event)\" class=\"form-control\"  [(ngModel)]=\"model.fileupload1\" #fileupload1=\"ngModel\" />\n                     <div *ngIf=\"f.submitted && !quoteimg.valid\" class=\"help-block\">QuoteImage required</div>\n              </div>\n\n\n              <div class=\"form-group\" style=\" margin: 0 auto;text-align:center;\">\n                <button class=\"btn btn-primary\">Submit</button>\n              </div>\n              <div *ngIf=\"submiterror\" class=\"help-block\"> </div>\n\n            </form>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <!--   <h3> </h3> -->\n        </div>\n      </div>\n\n    </div>\n\n    <div id=\"searchmodal\" class=\"modalq\" [style.display]=\"searchstyle\">\n\n        <!-- Modal content -->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <div (click)=\"togglesearch()\">\n              <span class=\"close\">&times;</span>\n            </div>\n              <Label>Search Quote</Label> \n          </div>\n          <div class=\"modal-body\">\n            <div class=\"container\">\n              <form #searchform=\"ngForm\" name=\"form\" (ngSubmit)=\"searchform.form.valid\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !quotedesc.valid}\">\n                  <label for=\"quotedesc\">QuoteDesc</label>\n                  <input type=\"text\"   id=\"quotedesc\" name=\"quotedesc\" class=\"form-control\" [(ngModel)]=\"searchmodel.quotedesc\" #quotedesc=\"ngModel\" />\n                  <div *ngIf=\"f.submitted && !quotedesc.valid\" class=\"help-block\">QuoteDesc required</div>\n                </div>\n  \n     <!--            <div class=\"form-group\" [ngClass]=\"{'has-error':f.submitted && !quotecolor.valid}\">\n                  <label for=\"quotecolor\">QuoteColor</label>\n                  <select [compareWith]=\"byId\" id=\"quotecolor\" name=\"quotecolor\" class=\"form-control\" [(ngModel)]=\"model.quotecolor\"\n                    #quotecolor=\"ngModel\" >\n                    <option *ngFor=\"let cat of cats\" [ngValue]=\"cat.quotecolor\">{{cat.quotecolor}}</option>\n                  </select>\n                  <div *ngIf=\"f.submitted && !quotecolor.valid\" class=\"help-block\">QuoteColor required</div>\n                </div> -->\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !createddate.valid}\">\n                  <label for=\"createddate\">Quote FromDate</label>\n                  <input type=\"text\" class=\"form-control\" id=\"createddate\" name=\"createddate\" (change)=\"datehandle($event)\" [(ngModel)]=\"searchmodel.createddate\" #createddate=\"ngModel\"/>\n                  <div *ngIf=\"f.submitted && !createddate.valid\" class=\"help-block\">Quote FromDate required</div>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error':searchform.submitted && !modifieddate.valid}\">\n                  <label for=\"modifieddate\">Quote ToDate</label>\n                  <input type=\"text\" class=\"form-control\" id=\"modifieddate\" name=\"modifieddate\" (change)=\"datehandle($event)\" [(ngModel)]=\"searchmodel.modifieddate\" #modifieddate=\"ngModel\"/>\n                  <div *ngIf=\"f.submitted && !modifieddate.valid\" class=\"help-block\">Quote ToDate required</div>\n                </div>\n  \n          \n                <div class=\"form-group\" style=\" margin: 0 auto;text-align:center;\">\n                  <button class=\"btn btn-primary\"  (click)=\"search()\">Search</button>\n                  <button class=\"btn btn-primary\" (click)=\"searchform.form.reset()\">Reset</button>\n                </div>\n\n                <div *ngIf=\"submiterror\" class=\"help-block\"> </div>\n  \n              </form>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <!--   <h3> </h3> -->\n          </div>\n        </div>\n  \n      </div>\n\n\n    <div id=\"alertModal\" class=\"modalalertq\" [style.display]=\"popalertstyle\">\n      <div class=\"modal-alertcontent\">\n        <div class=\"modal-header\">\n          <div (click)=\"togglealert()\">\n            <span class=\"close\">&times;</span>           \n          </div>\n          <Label>Decision</Label> \n        </div>\n\n        <div class=\"modal-body\">\n          <div class=\"container\">\n            <div style=\"text-align : center;\">\n              <label>Are you sure you want to delete the item..?</label>\n            </div>\n            <div class=\"centered_buttons\">\n              <button class=\"btn btn-primary div-button\" (click)=\"deleteQuotedecision()\">Ok</button>\n              <span width=\"10%\"> </span>\n              <button class=\"btn btn-primary div-button\" (click)=\"togglealert()\">Cancel</button>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _model_quotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/quotes */ "./src/app/model/quotes.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _service_quoteinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/quoteinfo.service */ "./src/app/service/quoteinfo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(authenticateservice, quoteService, router) {
        var _this = this;
        this.authenticateservice = authenticateservice;
        this.quoteService = quoteService;
        this.router = router;
        this.quotes = null;
        this.popstyle = 'none';
        this.model = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
        this.cats = JSON.parse("[{\"quotecolorcd\":\"255_0_0\",\"quotecolor\":\"RED\"},{\"quotecolorcd\":\"0_128_0\",\"quotecolor\":\"GREEN\"},{\"quotecolorcd\":\"0_0_0\",\"quotecolor\":\"BLACK\"},{\"quotecolorcd\":\"255_255_255\",\"quotecolor\":\"WHITE\"}]");
        this.selectedRow = -1;
        this.popalertstyle = 'none';
        this.totalRec = 0;
        this.searchstyle = 'none';
        this.searchmodel = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
        this.page = 1;
        this.itemsPerPage = 5;
        if (localStorage.getItem("loggeduser") != null)
            this.authenticateservice.getloggedIn().next(true);
        else
            this.router.navigateByUrl('/login');
        this.setClickedRow = function (index) {
            this.selectedRow = index;
            var i = (this.selectedRow + this.itemsPerPage * (this.page - 1));
            this.model = this.quotes[i];
        };
        this.quoteService.getQuoteCat().subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success') {
                    _this.cats = data['response'];
                }
            }
        });
    }
    QuoteComponent.prototype.getcolorname = function (code) {
        var color = '';
        this.cats.forEach(function (element) {
            if (element.quotecolorcd == code) {
                color = element.quotecolor;
            }
        });
        return (color == '' ? 'BLACK' : color);
    };
    QuoteComponent.prototype.ngOnInit = function () {
        this.getQuoteinfo();
        var self = this;
        $(document).ready(function () {
            $("#createddate").datepicker({
                dateFormat: 'yy-mm-dd',
                onSelect: function (date) {
                    self.searchmodel.createddate = date;
                }
            });
            $("#modifieddate").datepicker({
                dateFormat: 'yy-mm-dd',
                onSelect: function (date) {
                    self.searchmodel.modifieddate = date;
                }
            });
        });
    };
    QuoteComponent.prototype.datehandle = function (event) {
        console.log("Date changed: ");
    };
    QuoteComponent.prototype.reset = function () {
        this.page = 1;
        this.getQuoteinfo();
    };
    QuoteComponent.prototype.byId = function (item1, item2) {
        return item1 === item2;
    };
    QuoteComponent.prototype.searchpop = function () {
        this.searchmodel = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
        this.togglesearch();
    };
    QuoteComponent.prototype.search = function () {
        var _this = this;
        this.quoteService.searchQuote(this.searchmodel).subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success') {
                    _this.quotes = data['response'];
                    _this.totalRec = _this.quotes.length;
                    _this.togglesearch();
                    _this.searchmodel = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
                }
                else {
                    alert(data['response']);
                }
            }
        });
    };
    /*  onSelect(catcode:Number)
     {
     for(let i=0;i<this.cats.length-1;i++)
     {
     if(catcode == this.cats[i].quotecolorcd )
     {
       this.selectedcat=this.cats[i];
     }
     }
     }
    */
    QuoteComponent.prototype.getQuoteinfo = function () {
        var _this = this;
        this.quoteService.getQuote().subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success') {
                    _this.quotes = data['response'];
                    _this.totalRec = _this.quotes.length;
                }
            }
        });
    };
    QuoteComponent.prototype.add = function () {
        this.selectedRow = -1;
        //this.mytemplateForm.resetForm();
        this.model = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
        this.mytemplateForm.resetForm();
        this.toggle();
    };
    QuoteComponent.prototype.edit = function () {
        if (this.selectedRow != -1) {
            //  let i:any=this.selectedRow;
            //  this.model=this.Quotes[i]
            this.toggle();
        }
    };
    QuoteComponent.prototype.toggle = function () {
        if (this.popstyle == 'none') {
            this.popstyle = 'block';
        }
        else if (this.popstyle == 'block') {
            this.popstyle = 'none';
        }
    };
    QuoteComponent.prototype.togglesearch = function () {
        if (this.searchstyle == 'none') {
            this.searchstyle = 'block';
        }
        else if (this.searchstyle == 'block') {
            this.searchstyle = 'none';
        }
    };
    QuoteComponent.prototype.togglealert = function () {
        if (this.popalertstyle == 'none') {
            this.popalertstyle = 'block';
        }
        else if (this.popalertstyle == 'block') {
            this.popalertstyle = 'none';
        }
    };
    QuoteComponent.prototype.quoteimgfileChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
            if (target.name == 'uploadfile1')
                this.model.quoteimg = files[i].name;
        }
        if (files.length > 0) {
            this.uploadF1(formData);
        }
        else {
            if (target.name == 'uploadfile1')
                this.model.quoteimg = null;
        }
    };
    QuoteComponent.prototype.uploadF1 = function (formData) {
        this.quoteService.uploadF1(formData).subscribe(function (data) {
            if (data['response'] != null) {
                if (data['response'] == 'success')
                    alert('file upload success');
                else
                    alert('error has occurred..!');
            }
        });
    };
    QuoteComponent.prototype.uploadfilepostimg = function () {
        this.quoteService.uploadFile(this.uploadfile1).subscribe(function (data) {
            if (data['response'] != null) {
                if (data['msg'] == 'success')
                    alert('file upload success');
                else
                    alert('error has occurred..!');
            }
        });
    };
    QuoteComponent.prototype.submitQuoteinfo = function () {
        var _this = this;
        if (this.model.quoteno == 0) {
            this.quoteService.addQuote(this.model).subscribe(function (data) {
                if (data['response'] != null) {
                    if (data['msg'] == 'success') {
                        _this.toggle();
                        _this.mytemplateForm.resetForm();
                        _this.getQuoteinfo();
                        _this.selectedRow = -1;
                        _this.model = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
                    }
                    else
                        alert('error has occurred..!');
                }
            });
        }
        else if (this.model.quoteno != 0) {
            this.quoteService.updateQuote(this.model).subscribe(function (data) {
                if (data['response'] != null) {
                    if (data['msg'] == 'success') {
                        _this.toggle();
                        _this.mytemplateForm.resetForm();
                        _this.getQuoteinfo();
                        _this.selectedRow = -1;
                        _this.model = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
                    }
                    else
                        alert('error has occurred..!');
                }
            });
        }
    };
    QuoteComponent.prototype.deleteQuote = function () {
        if (this.selectedRow != -1) {
            this.togglealert();
        }
    };
    QuoteComponent.prototype.deleteQuotedecision = function () {
        var _this = this;
        if (this.model.quoteno != 0) {
            this.quoteService.deleteQuote(this.model).subscribe(function (data) {
                if (data['response'] != null) {
                    if (data['msg'] == 'success') {
                        _this.getQuoteinfo();
                        _this.togglealert();
                        _this.selectedRow = -1;
                        _this.model = new _model_quotes__WEBPACK_IMPORTED_MODULE_0__["Quotes"]();
                        alert('post deleted successfully..!');
                    }
                    else
                        alert('error has occurred..!');
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], QuoteComponent.prototype, "mytemplateForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchform'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], QuoteComponent.prototype, "searchform", void 0);
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _service_quoteinfo_service__WEBPACK_IMPORTED_MODULE_3__["QuoteinfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_commonUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/commonUtils */ "./src/app/model/commonUtils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    AuthenticationService.prototype.getloggedIn = function () {
        return this.loggedIn;
    };
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (user) {
        var userxst = btoa(_model_commonUtils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].appUserKey);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + userxst
            })
        };
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].appContextpath + "api/users/authenticate", user, httpOptions)
            .map(function (response) { return response; });
        /* .map(
           actuser => {
             if (actuser != null) {
               localStorage.setItem("loggeduser", JSON.stringify(actuser))
             }
             return actuser;
           }
     
         );*/
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("loggeduser");
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/postinfo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/postinfo.service.ts ***!
  \*********************************************/
/*! exports provided: PostinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostinfoService", function() { return PostinfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _model_commonUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/commonUtils */ "./src/app/model/commonUtils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostinfoService = /** @class */ (function () {
    //   'Content-Type':  'application/json', content-type=multipart/*
    function PostinfoService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
        this.userxst = btoa(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appUserKey);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + this.userxst
            })
        };
        this.httpUploadOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': "Basic " + this.userxst
            })
        };
    }
    PostinfoService.prototype.uploadF1 = function (formData) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/fileupload", formData, this.httpUploadOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.uploadFile = function (file) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/fileupload", file, this.httpUploadOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.getPost = function () {
        return this.httpclient.get(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/posts", this.httpOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.addPost = function (post) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/posts", JSON.stringify(post), this.httpOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.updatePost = function (post) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/posts/" + post.postid, JSON.stringify(post), this.httpOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.deletePost = function (post) {
        return this.httpclient.delete(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/posts/" + post.postid, this.httpOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.searchPost = function (post) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/posts/search", JSON.stringify(post), this.httpOptions)
            .map(function (response) { return response; });
    };
    PostinfoService.prototype.getPostCat = function () {
        return this.httpclient.get(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/postcategory", this.httpOptions)
            .map(function (response) { return response; });
    };
    PostinfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostinfoService);
    return PostinfoService;
}());



/***/ }),

/***/ "./src/app/service/quoteinfo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/quoteinfo.service.ts ***!
  \**********************************************/
/*! exports provided: QuoteinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteinfoService", function() { return QuoteinfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _model_commonUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/commonUtils */ "./src/app/model/commonUtils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuoteinfoService = /** @class */ (function () {
    function QuoteinfoService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
        this.userxst = btoa(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appUserKey);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + this.userxst
            })
        };
        this.httpUploadOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': "Basic " + this.userxst
            })
        };
    }
    QuoteinfoService.prototype.uploadF1 = function (formData) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/fileupload", formData, this.httpUploadOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.uploadFile = function (file) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/fileupload", file, this.httpUploadOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.getQuote = function () {
        return this.httpclient.get(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/quotes", this.httpOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.addQuote = function (quote) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/quotes", JSON.stringify(quote), this.httpOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.updateQuote = function (quote) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/quotes/" + quote.quoteno, JSON.stringify(quote), this.httpOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.deleteQuote = function (quote) {
        return this.httpclient.delete(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/quotes/" + quote.quoteno, this.httpOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.searchQuote = function (quote) {
        return this.httpclient.post(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/quotes/search", JSON.stringify(quote), this.httpOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService.prototype.getQuoteCat = function () {
        return this.httpclient.get(_model_commonUtils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].appContextpath + "api/quotecategory", this.httpOptions)
            .map(function (response) { return response; });
    };
    QuoteinfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuoteinfoService);
    return QuoteinfoService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Barath-PC\ChargeZone\Mtrack\mtrackangular\mtangular\angular-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map