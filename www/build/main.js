webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_index__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_login__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__index_index__["a" /* IndexPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_login__["a" /* HomePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\mywork\ionic\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0">\n\n  <ion-tab [root]="tab1Root" tabTitle="Information" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Contacts" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Home" tabIcon="person" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\mywork\ionic\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexPage = (function () {
    function IndexPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IndexPage.prototype.ionViewCanEnter = function () {
        console.log("ionViewCanEnter");
    };
    IndexPage.prototype.ionViewDidLoad = function () {
        console.log("home: loaded");
    };
    IndexPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
    };
    IndexPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
    };
    IndexPage.prototype.ionViewWillLeave = function () {
        console.log("ionViewWillLeave");
    };
    IndexPage.prototype.ionViewDidLeave = function () {
        console.log("ionViewDidLeave");
    };
    IndexPage.prototype.ionViewWillUnload = function () {
        console.log("ionViewWillUnload");
    };
    IndexPage.prototype.ionViewCanLeave = function () {
        console.log("ionViewCanLeave");
    };
    return IndexPage;
}());
IndexPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-index',template:/*ion-inline-start:"C:\mywork\ionic\src\pages\index\index.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>动态</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-avatar item-left>\n\n        <img src="/images/avatar.jpg">\n\n      </ion-avatar>\n\n      <h2>Elon Musk</h2>\n\n      <p>来自 iPhone 6s</p>\n\n      <ion-note item-right>1小时前</ion-note>\n\n    </ion-item>\n\n    <img src="/images/avatar.jpg">\n\n    <ion-card-content>\n\n      <ion-card-title>Nine Inch Nails Live</ion-card-title>\n\n      <p>\n\n        The most popular industrial group ever, and largely\n\n      responsible for bringing the music to a mass audience.\n\n      </p>\n\n    </ion-card-content>\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <span>12345</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name="share-alt"></ion-icon>\n\n          <span>share</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-avatar item-left>\n\n        <img src="/images/avatar.jpg">\n\n      </ion-avatar>\n\n      <h2>Elon Musk</h2>\n\n      <p>来自 iPhone 6s</p>\n\n      <ion-note item-right>1小时前</ion-note>\n\n    </ion-item>\n\n    <img src="/images/avatar.jpg">\n\n    <ion-card-content>\n\n      <ion-card-title>Nine Inch Nails Live</ion-card-title>\n\n      <p>\n\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n      </p>\n\n    </ion-card-content>\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <span>12345</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name="share-alt"></ion-icon>\n\n          <span>share</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\mywork\ionic\src\pages\index\index.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], IndexPage);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subPages_detail__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.contacts = [
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" },
            { name: "ergou", sign: "ergou go go go" }
        ];
    }
    ContactPage.prototype.itemShow = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subPages_detail__["a" /* DetailPage */], { name: contact.name, sign: contact.sign });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\mywork\ionic\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">A</ion-item-divider>\n\n\n\n      <ion-item *ngFor="let contact of contacts" (click)="itemShow(contact)">\n\n        <ion-avatar item-start>\n\n          <img src="/images/avatar.jpg">\n\n        </ion-avatar>\n\n        <h2>{{contact.name}}</h2>\n\n        <p>{{contact.sign}}</p>\n\n      </ion-item>\n\n     \n\n    </ion-item-group>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">B</ion-item-divider>\n\n      \n\n      <ion-item *ngFor="let contact of contacts" (click)="itemShow(event, contact)">\n\n        <ion-avatar item-start>\n\n          <img src="/images/avatar.jpg">\n\n        </ion-avatar>\n\n        <h2>{{contact.name}}</h2>\n\n        <p>{{contact.sign}}</p>\n\n      </ion-item>\n\n      \n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\mywork\ionic\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailPage = (function () {
    function DetailPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.name = navParams.get('name');
    }
    DetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\mywork\ionic\src\pages\contact\subPages\detail.html"*/'<ion-toolbar>\n\n	<ion-buttons start>\n\n		<button ion-button ico-only (click)="dismiss()">\n\n			<ion-icon name="arrow-back"></ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n	<ion-title> {{name}} </ion-title>\n\n</ion-toolbar>\n\n'/*ion-inline-end:"C:\mywork\ionic\src\pages\contact\subPages\detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subPages_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, LoadingCtrl, ToastCtrl, modalCtrl, nativeStorage) {
        this.navCtrl = navCtrl;
        this.LoadingCtrl = LoadingCtrl;
        this.ToastCtrl = ToastCtrl;
        this.modalCtrl = modalCtrl;
        this.nativeStorage = nativeStorage;
        this.username = '';
        this.password = '';
    }
    HomePage.prototype.showFill = function () {
        if (this.username == '' || this.password == '') {
            var ToastUserName = this.ToastCtrl.create({
                duration: 3000,
                message: 'username and password should not be null',
                position: 'top'
            });
            ToastUserName.present();
        }
        else {
            var loading = this.LoadingCtrl.create({
                content: "please wait...",
                spinner: 'dots',
                duration: 5000
            });
            loading.present();
        }
    };
    HomePage.prototype.openRegisterForm = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__subPages_register__["a" /* Register */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\mywork\ionic\src\pages\home\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>用户名</ion-label>\n\n			<ion-input type="text" [(ngModel)]="username"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>密码</ion-label>\n\n			<ion-input type="password" [(ngModel)]="password"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n	<button ion-button block (click)="showFill()">登录</button>\n\n	<ion-row>\n\n		<ion-col id="colRight">\n\n		<div class="AlignRight">\n\n			<button ion-button outline small (click)="openRegisterForm()">还没有账号？注册</button>\n\n		</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\mywork\ionic\src\pages\home\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], HomePage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Register = (function () {
    function Register(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.avatar = '/images/avatar.jpg';
    }
    Register.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Register.prototype.uploadAvatar = function () {
    };
    return Register;
}());
Register = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\mywork\ionic\src\pages\home\subPages\register.html"*/'<ion-toolbar>\n\n	<ion-buttons start>\n\n		<button ion-button ico-only (click)="dismiss()">\n\n			<ion-icon name="arrow-back"></ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n	<ion-title> Register </ion-title>\n\n</ion-toolbar>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>用户名</ion-label>\n\n			<ion-input type="text" [(ngModel)]="username"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>密码</ion-label>\n\n			<ion-input type="password" [(ngModel)]="password"></ion-input>\n\n		</ion-item>\n\n	</ion-list>\n\n\n\n	<ion-row>\n\n			<ion-avatar>\n\n				<img src="{{avatar}}" (click)="uploadAvatar()">\n\n			</ion-avatar>\n\n	</ion-row>\n\n\n\n	<button ion-button block (click)="showFill()">注册</button>\n\n	<ion-row>\n\n		<ion-col id="colRight">\n\n		<div class="AlignRight">\n\n			<button ion-button outline small (click)="dismiss()">已有账号，登录</button>\n\n		</div>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\mywork\ionic\src\pages\home\subPages\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], Register);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_index__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_subPages_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_subPages_detail__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_index_index__["a" /* IndexPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_login__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_subPages_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_9__pages_contact_subPages_detail__["a" /* DetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_index_index__["a" /* IndexPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_login__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_subPages_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_9__pages_contact_subPages_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_storage__["a" /* NativeStorage */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\mywork\ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\mywork\ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map