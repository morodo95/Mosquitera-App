webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Auth - Service, sirve para la identificación y traer datos de la api externa.


*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        this.apiUrl = "http://lamosquitera.org/wp-json/wp/v2/posts";
        this.apiImg = "http://apimosquitera.lavena.com.ar/";
        console.log('Hello QuotesProvider Provider');
    }
    AuthServiceProvider.prototype.getQuotes = function () {
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.getProgramacion = function () {
        return this.http.get(this.apiImg + 'getimages.php').map(function (res) { return res.json(); });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=authservice.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //La unica funcion que cumple esta parte, es ir a la pagina de welcome
    HomePage.prototype.welcome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\home\home.html"*/'\n\n\n\n<ion-content >\n\n  <div class="nav-bar">\n\n      <div class="menu">\n\n          \n\n      </div>\n\n      \n\n  </div>\n\n  <div class="logo">\n\n    <img src="../../assets/imgs/logo.png" alt="">\n\n    <img src="../../assets/imgs/revisiontecnica.png" alt="">\n\n  </div>\n\n\n\n  <div class="boton">\n\n    <ion-buttons>\n\n      <button ion-button (click)="welcome()">Empezar!</button>\n\n    </ion-buttons>\n\n   \n\n  </div>\n\n\n\n  <div class="texto">\n\n    <h5>Asociación Comunicacional y Cultural La Mosquitera</h5>\n\n     </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticias_noticias__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sociales_sociales__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facebook_facebook__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instagram_instagram__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_web__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__noticias_noticias__["a" /* NoticiasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__sociales_sociales__["a" /* SocialesPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__facebook_facebook__["a" /* FacebookPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__instagram_instagram__["a" /* InstagramPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_7__web_web__["a" /* WebPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\tabs\tabs.html"*/'<ion-tabs color="danger">\n  <ion-tab [root]="tab1Root"  tabIcon="radio"></ion-tab>\n  <ion-tab [root]="tab2Root"  tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabIcon="clock"></ion-tab>\n  <ion-tab [root]="tab4Root"  tabIcon="logo-twitter"></ion-tab>\n  <ion-tab [root]="tab5Root"  tabIcon="logo-facebook"></ion-tab>\n  <ion-tab [root]="tab6Root"  tabIcon="logo-instagram"></ion-tab>\n  <ion-tab [root]="tab7Root"  tabIcon="globe"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.todo = {
            title: "",
            description: ""
        };
    }
    // Este metodo funciona para desloguearse de la cuenta ingresada
    // Donde borramos la cuenta que esta en el localstorages
    ContactPage.prototype.logout = function () {
        var _this = this;
        //Api Token Logout
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    // Este metodo volveremos a la pagina anterior
    ContactPage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    // Este metodo llamara al auth, para hacer el envio del mensaje hacia el correo de revite
    ContactPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\contact\contact.html"*/'<!--\n  Generated template for the NoticiasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <div style="background-color:white;">\n      <a href="www.lamosquitera.org"><img src="../../assets/imgs/logotipo.png"  style="padding: 10px;" ></a>\n    </div>\n  <ion-navbar color="primary">\n    <ion-title>Programación!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="body" >\n    <ion-grid>\n        <ion-row style="color:rgb(255, 248, 248); font-style: bold;">\n          <ion-col >Hora</ion-col>\n          <ion-col > Programa</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col style="background-color: #d13034; text-align: left"  >7:00</ion-col>\n          <ion-col style="background-color: #d13034"  >EL ARRANQUE</ion-col>\n        </ion-row>\n        <ion-row >\n            <ion-col style="background-color: #d13034 text-align: left"  >9:00</ion-col>\n            <ion-col style="background-color: #d13034" >LA DIARIA</ion-col>\n          </ion-row>\n          <ion-row >\n              <ion-col style="background-color: #d13034 text-align: left"   >12:00</ion-col>\n              <ion-col style="background-color: #d13034" >INFORMATIVO NODAL y FARCO</ion-col>\n              \n            </ion-row>\n            <ion-row >\n                <ion-col style="background-color: #d13034 text-align: left" >13:00 - Lunes</ion-col>\n                <ion-col style="background-color:  #d13034"  >M-M, AL DORSO</ion-col>\n              </ion-row>\n              <ion-row >\n                  <ion-col style="background-color: #d13034 text-align: left "  >13:00 - Martes</ion-col>\n                  <ion-col style="background-color: #d13034"  >DECI MU</ion-col>\n                </ion-row>\n                <ion-row >\n                    <ion-col style="background-color: #d13034"  >14:00 - Miercoles</ion-col>\n                    <ion-col style="background-color: #d13034" >AL SUR DEL RIO BRAVO</ion-col>\n                  </ion-row>\n                  \n                    <ion-row >\n                        <ion-col  style="background-color: #d13034" >12:00 - Viernes</ion-col>\n                        <ion-col style="background-color: #d13034" >LA CHANGA</ion-col>\n                      </ion-row>\n                      <ion-row >\n                          <ion-col  style="background-color: #d13034" >15:00</ion-col>\n                          <ion-col style="background-color: #d13034" >FEROZ AMÉRICA</ion-col>\n                        </ion-row>\n                        <ion-row >\n                          <ion-col  style="background-color: #d13034" >15:00 - Viernes</ion-col>\n                          <ion-col style="background-color: #d13034" >TEMPRANO PARA IMPOSIBLES</ion-col>\n                        </ion-row>\n                        <ion-row >\n                            <ion-col style="background-color: #d13034"  >17:00</ion-col>\n                            <ion-col style="background-color: #d13034" >CINCO PAL PESO</ion-col>\n                          </ion-row>\n                          <ion-row >\n                              <ion-col style="background-color: #d13034"  >19:00</ion-col>\n                              <ion-col style="background-color: #d13034" >DESDE EL CAFE</ion-col>\n                            </ion-row>\n                            <ion-row >\n                                <ion-col style="background-color: #d13034"  >19:00 - Martes</ion-col>\n                                <ion-col style="background-color: #d13034" >EL CANDIL</ion-col>\n                              </ion-row>\n                              <ion-row >\n                                  <ion-col style="background-color: #d13034"  >19:00 - Miercoles</ion-col>\n                                  <ion-col style="background-color: #d13034" >NO TAN SERIO</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col style="background-color: #d13034"  >19:00 - Jueves</ion-col>\n                                  <ion-col style="background-color: #d13034" >EL OTRO SOY YO</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >19:00 - Viernes</ion-col>\n                                  <ion-col style="background-color: #d13034" >POR COLECTORAS</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col style="background-color: #d13034"  >21:00 - Lunes</ion-col>\n                                  <ion-col style="background-color: #d13034"  >MÚSICA MOSQUITERA</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col style="background-color: #d13034"   >21:00 - Jueves</ion-col>\n                                  <ion-col style="background-color: #d13034" >ENSAYOS COMUNES</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >21:00 - Viernes</ion-col>\n                                  <ion-col style="background-color: #d13034" >LA PREVIA CUYANA</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >07:00 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >MÚSICA MOSQUITERA</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >10:00 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >SALA DE MAESTROS</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >12:00 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >CASTILLOS EN EL AIRE</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >14:50 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >FARCO</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >17:00 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >EL OJO DEL CICLOPE</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >19:00 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >FUTBOL DE AFA EN VIVO - RELATORES</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >23:00 - Sabado</ion-col>\n                                  <ion-col style="background-color: #d13034" >RADIOGRAMA</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >07:00 - Domingo</ion-col>\n                                  <ion-col style="background-color: #d13034" >MÚSICA MOSQUITERA</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >11:00 - Domingo</ion-col>\n                                  <ion-col style="background-color: #d13034" >ABRAZANDO LA TRADICIÓN</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >17:00 - Domingo</ion-col>\n                                  <ion-col style="background-color: #d13034" >TOCO Y ME VOY</ion-col>\n                                </ion-row>\n                                <ion-row >\n                                  <ion-col  style="background-color: #d13034" >23:00 - Domingo</ion-col>\n                                  <ion-col style="background-color: #d13034" >MÚSICA MOSQUITERA</ion-col>\n                                </ion-row>\n\n      </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = /** @class */ (function () {
    function WelcomePage(auth) {
        this.auth = auth;
        this.audio = new Audio('http://stream.codigosur.org:8000/mosquitera.mp3');
        this.getProgramas();
    }
    WelcomePage.prototype.getProgramas = function () {
        var _this = this;
        this.auth.getProgramacion().subscribe(function (data) { return _this.programas = data; }, function (err) { return console.log(err); });
    };
    WelcomePage.prototype.play = function () {
        this.audio.play();
        this.bandera = true;
    };
    WelcomePage.prototype.stop = function () {
        this.audio.pause();
        this.bandera = false;
    };
    WelcomePage.prototype.whatsapp = function () {
        window.open("https://api.whatsapp.com/send?phone=5492613068060", "_system");
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\welcome\welcome.html"*/'\n\n<ion-header>\n\n    <div style="background-color:white;">\n\n      <a href="www.lamosquitera.org"><img src="../../assets/imgs/logotipo.png"  style="padding: 10px;" ></a>\n\n    </div>\n\n  </ion-header>\n\n<ion-content class="body">\n\n  <br><br>\n\n <br><br>\n\n  <div class="boton">\n\n    <button [disabled]="bandera"  (click)="play()" ><img src="../../assets/imgs/arrowButtonplay.png"></button>\n\n    <button [disabled]="!bandera" id="pause" (click)="stop()" ><img src="../../assets/imgs/arrowButtonpause.png"></button>\n\n  </div>\n\n  <br>\n\n  <br>\n\n  <ion-card  *ngFor="let programa of programas" >\n\n      <img src="{{programa.imagen}}" alt="">\n\n  </ion-card>\n\n  <div class="mensaje">\n\n    <a (click)="whatsapp()">Participa por Whatsapp <ion-icon name="logo-whatsapp"></ion-icon></a>\n\n  </div>\n\n  <br><br>\n\n    <ion-slides autoplay="12000" loop="true" speed="500" >\n\n      <ion-slide>\n\n        <img src="http://lamosquitera.org/wp-content/uploads/2019/02/03-LA-MOSQUITERA-354X119-1-1.gif" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="http://lamosquitera.org/wp-content/uploads/2018/12/MOSQUITERA_354x119px_6bim.gif" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="http://lamosquitera.org/wp-content/uploads/2018/11/sute-m%C3%A1s-para-educaci%C3%B3n-2.jpg" alt="">\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__["a" /* AuthServiceProvider */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticia_noticia__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(navCtrl, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.auth.getQuotes().subscribe(function (data) {
            console.log(data);
            _this.quotes = data;
        });
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
    };
    NoticiasPage.prototype.onShowQuoteDetail = function (quote) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__noticia_noticia__["a" /* NoticiaPage */], { quote: quote });
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\noticias\noticias.html"*/'\n<ion-header>\n  <div style="background-color:white;">\n      <a href="www.lamosquitera.org"><img src="../../assets/imgs/logotipo.png"  style="padding: 10px;" ></a>\n  </div>\n  <ion-navbar color="primary">\n    <ion-title>Noticias</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="body">\n  <ion-card class="card" *ngFor="let quote of quotes" >\n    <ion-card-content>\n      <img src="{{quote.featured_image_urls.medium}}" alt="">\n      <div class="categoria" (click)="onShowQuoteDetail(quote)">\n        <h5>Publicada el: {{ quote.date | date: \'dd/MM/yyyy H:mm\'}}</h5>\n      </div>\n      <ion-card-title (click)="onShowQuoteDetail(quote)">\n          {{ quote.title.rendered }}\n        </ion-card-title>\n      \n        <p [innerHTML]="quote.excerpt.rendered"></p>\n      \n      <div class="sociales">\n          <a href="https://www.facebook.com/sharer/sharer.php?u={{quote.link}}" target="_blank"> <ion-icon name="logo-facebook" id="facebook"></ion-icon></a> \n          <a href="http://www.twitter.com/home?status={{quote.link}}" target="_blank"><ion-icon name="logo-twitter" id="twitter"></ion-icon></a> \n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthServiceProvider */]) === "function" && _c || Object])
    ], NoticiasPage);
    return NoticiasPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiaPage = /** @class */ (function () {
    function NoticiaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quote = this.navParams.get('quote');
        console.log(this.quote);
    }
    NoticiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiaPage');
    };
    NoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticia',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\noticia\noticia.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{quote.title.rendered}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-card>\n    <h2 style="text-align: center;" padding>\n      {{quote.title.rendered}}\n    </h2>\n    \n    \n      <p [innerHTML]="quote.content.rendered"></p>\n     \n    \n    <div class="sociales">\n        <a href="https://www.facebook.com/sharer/sharer.php?u={{quote.link}}" target="_blank"> <ion-icon name="logo-facebook" id="facebook"></ion-icon></a> \n        <a href="http://www.twitter.com/home?status={{quote.link}}" target="_blank"><ion-icon name="logo-twitter" id="twitter"></ion-icon></a> \n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\noticia\noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NoticiaPage);
    return NoticiaPage;
}());

//# sourceMappingURL=noticia.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialesPage = /** @class */ (function () {
    function SocialesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.open("https://twitter.com/lamosquitera", "_system");
    }
    SocialesPage.prototype.ionViewDidLoad = function () {
    };
    SocialesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sociales',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\sociales\sociales.html"*/'\n\n<ion-content class="social">\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\sociales\sociales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SocialesPage);
    return SocialesPage;
}());

//# sourceMappingURL=sociales.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacebookPage = /** @class */ (function () {
    function FacebookPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.open("https://www.facebook.com/LaMosquiteraRadioComunitaria881/", "_system");
    }
    FacebookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacebookPage');
    };
    FacebookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-facebook',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\facebook\facebook.html"*/'\n<ion-content class="social">\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\facebook\facebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FacebookPage);
    return FacebookPage;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstagramPage = /** @class */ (function () {
    function InstagramPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.open("https://www.instagram.com/lamosquitera/", "_system");
    }
    InstagramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstagramPage');
    };
    InstagramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-instagram',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\instagram\instagram.html"*/'\n\n<ion-content class="social">\n\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\instagram\instagram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InstagramPage);
    return InstagramPage;
}());

//# sourceMappingURL=instagram.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebPage = /** @class */ (function () {
    function WebPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.open("http://lamosquitera.org/", "_system");
    }
    WebPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WebPage');
    };
    WebPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-web',template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\pages\web\web.html"*/'\n\n<ion-content class="social">\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\pages\web\web.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WebPage);
    return WebPage;
}());

//# sourceMappingURL=web.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_authservice_authservice__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_noticias_noticias__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_noticia_noticia__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sociales_sociales__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_facebook_facebook__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_instagram_instagram__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_web_web__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_noticia_noticia__["a" /* NoticiaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sociales_sociales__["a" /* SocialesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_facebook_facebook__["a" /* FacebookPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_instagram_instagram__["a" /* InstagramPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_web_web__["a" /* WebPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_noticia_noticia__["a" /* NoticiaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sociales_sociales__["a" /* SocialesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_facebook_facebook__["a" /* FacebookPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_instagram_instagram__["a" /* InstagramPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_web_web__["a" /* WebPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_authservice_authservice__["a" /* AuthServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, alertCtrl) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.handlerNotifications();
        });
    }
    MyApp.prototype.handlerNotifications = function () {
        var _this = this;
        this.oneSignal.startInit('13e5463c-28da-4d7c-bbc1-efe65c087f91', '810329328216');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened()
            .subscribe(function (jsonData) {
            var alert = _this.alertCtrl.create({
                title: jsonData.notification.payload.title,
                subTitle: jsonData.notification.payload.body,
                buttons: ['OK']
            });
            alert.present();
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        }, function (err) { return console.log("NO_CORDOVA"); });
        this.oneSignal.endInit();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\lamosquitera\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\lamosquitera\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map