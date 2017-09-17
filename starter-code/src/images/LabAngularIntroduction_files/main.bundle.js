webpackJsonp([1,4],{

/***/ 322:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 322;


/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(433);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/main.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to Mario World!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(517),
            styles: [__webpack_require__(507)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_album_photo_album_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comment_item_comment_item_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__counter_counter_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quote_list_quote_list_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quote_item_quote_item_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__photo_item_photo_item_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comment_box_comment_box_component__ = __webpack_require__(434);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__photo_album_photo_album_component__["a" /* PhotoAlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__comment_item_comment_item_component__["a" /* CommentItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__quote_list_quote_list_component__["a" /* QuoteListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__quote_item_quote_item_component__["a" /* QuoteItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__photo_item_photo_item_component__["a" /* PhotoItemComponent */],
                __WEBPACK_IMPORTED_MODULE_13__comment_box_comment_box_component__["a" /* CommentBoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentBoxComponent = (function () {
    function CommentBoxComponent() {
        this.newComment = {};
    }
    CommentBoxComponent.prototype.ngOnInit = function () {
        this.comments = [{
                id: 1,
                authorName: 'Pepito 1',
                authorComment: 'Comentario 2'
            },
            {
                id: 2,
                authorName: 'Loco 2',
                authorComment: 'Comentario 3'
            }
        ];
    };
    CommentBoxComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy: comment-box component');
    };
    CommentBoxComponent.prototype.addComment = function (newName, newComment) {
        this.comments.unshift(this.newComment);
        this.newComment = {};
        return false;
    };
    CommentBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'comment-box',
            template: __webpack_require__(518),
            styles: [__webpack_require__(508)]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/comment-box.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = (function () {
    function CounterComponent() {
        this.counter = 0;
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.increment = function () {
        this.counter++;
    };
    CounterComponent.prototype.decrement = function () {
        this.counter--;
    };
    CounterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'counter',
            template: __webpack_require__(520),
            styles: [__webpack_require__(510)]
        }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/counter.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
        this.title = "We are coding in Ironhack";
        this.url = "../images/MarioMainImage.png";
        this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices lorem vitae maximus eleifend. Mauris facilisis lacus ut rutrum dictum. Sed pulvinar urna ut interdum scelerisque. Aenean vel congue metus. Mauris et lectus sed enim congue semper. Sed laoreet sapien quis arcu iaculis tincidunt. Fusce sed eleifend nisi, et vehicula velit. Vestibulum ipsum velit, rhoncus cursus tortor eget, varius lobortis erat. Donec finibus, dolor sed faucibus placerat, dolor nulla dapibus dolor, at fringilla sem nunc sed sem. Quisque iaculis dignissim est at scelerisque. Etiam vel bibendum sapien. Quisque dapibus, urna eget faucibus sagittis, massa metus vehicula tellus, in ultrices eros leo pellentesque ipsum.";
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'main',
            template: __webpack_require__(521),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/main.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
        this.title = 'Welcome to Mario World!';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__(522),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/nav-bar.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoAlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoAlbumComponent = (function () {
    function PhotoAlbumComponent() {
        this.photos = [{
                id: 1,
                title: 'Luigi',
                text: 'Walk as if you are kissing the Earth with your feet.',
                image: '../images/Luigi-PNG-Photos.png'
            }, {
                id: 2,
                title: 'Mario',
                text: 'Life is a journey. Time is a river. The door is ajar.',
                image: '../images/maxresdefault.png'
            }, {
                id: 3,
                title: 'Wario',
                text: 'Simplicity is the ultimate sophistication.',
                image: '../images/WARIUSA.png'
            }];
    }
    PhotoAlbumComponent.prototype.ngOnInit = function () {
    };
    PhotoAlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'photo-album',
            template: __webpack_require__(523),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoAlbumComponent);
    return PhotoAlbumComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/photo-album.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteItemComponent = (function () {
    function QuoteItemComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    QuoteItemComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit: quote-item component');
    };
    QuoteItemComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy: quote-item component');
    };
    QuoteItemComponent.prototype.ngOnChanges = function (change) {
        console.log('ngOnChanges: quote-item component', change);
    };
    QuoteItemComponent.prototype.onQuoteDelete = function () {
        this.onDelete.emit(this.quote.id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], QuoteItemComponent.prototype, "quote", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], QuoteItemComponent.prototype, "onDelete", void 0);
    QuoteItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'quote-item',
            template: __webpack_require__(525),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteItemComponent);
    return QuoteItemComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/quote-item.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteListComponent = (function () {
    function QuoteListComponent() {
        this.quotes = [{
                id: 1,
                text: 'Walk as if you are kissing the Earth with your feet.',
                author: 'Thich Nhat Hanh'
            }, {
                id: 2,
                text: 'Life is a journey. Time is a river. The door is ajar.',
                author: 'Jim Butcher'
            }, {
                id: 3,
                text: 'Simplicity is the ultimate sophistication.',
                author: 'Leonardo da Vinci'
            }];
    }
    QuoteListComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit: quote-list component');
    };
    QuoteListComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy: quote-list component');
    };
    QuoteListComponent.prototype.removeQuote = function (id) {
        this.quotes = this.quotes.filter(function (quote) { return quote.id !== id; });
    };
    QuoteListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'quote-list',
            template: __webpack_require__(526),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteListComponent);
    return QuoteListComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/quote-list.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/environment.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n}\n\n.commentBox {\n  background-color: #C5C2C2;\n  text-align: center;\n}\n\n.commentMainBox {\n  text-align: center;\n}"

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

module.exports = ".mainImage {\n  width: 500px;\n  display: block; \n  margin-left: auto;\n  margin-right: auto; \n}"

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #D3F0FD\n}"

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "img {\n  margin: 0 auto;\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; /* equal height of the children */\n}\n\n.col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; /* additionally, equal width */\n  \n}\n\nul {\n  list-style-type: none;\n}"

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav-bar></nav-bar>\n  <quote-list></quote-list>\n  <counter></counter>\n  <br>\n  <photo-album style=\"text-align: center\"></photo-album>\n  <br><br>\n\n  <main></main>\n  <comment-box></comment-box>\n\n</div>\n\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <ul>\n      <li *ngFor=\"let comment of comments\">\n        <comment-item [comment]=\"comment\"></comment-item>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"row commentMainBox\">\n  <div class=\"col-sm-4 commentBox\">\n    <h4>Add your comment</h4>\n    <div class=\"form-group\">\n      <label for=\"authorName\"> Your name</label>\n      <input type=\"text\" [(ngModel)]=\"newComment.authorName\">\n\n      <div class=\"form-group\">\n\n        <label for=\"authorComment\"> Add your Comment</label>\n        <input type=\"text\" [(ngModel)]=\"newComment.authorComment\">\n      </div>\n      <button class=\"btn btn-primary\" (click)=\"addComment(newComment.authorName, newComment.authorComment)\"> Submit comment </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"increment()\"> + </button>\n<button class=\"btn btn-primary\" (click)=\"decrement()\"> - </button>\n\n<span><h1>{{counter}}</h1></span>"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "\n\n  <h2 class=\"text-center\">\n    {{title}}\n  </h2>\n\n  <br>\n  \n  <img class=\"mainImage\" src=\"{{url}}\" alt=\"\">\n\n  <br><br>\n\n  <p>{{description}}</p>\n\n\n\n\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"> <h2> {{title}} </h2> </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown link\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div  class=\"col\" *ngFor=\"let photo of photos\">\n      <photo-item [photo]=\"photo\"></photo-item>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "\n<span> {{ quote.text }} </span>\n<small> {{ quote.author }} </small>\n<button (click)=\"onQuoteDelete()\"> Delete </button>"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<h3> An awesome quote list! </h3>\n<ul>\n  <li *ngFor=\"let quote of quotes\">\n    <quote-item [quote]=\"quote\" (onDelete)=\"removeQuote($event)\"></quote-item>\n  </li>\n</ul>\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(326);
module.exports = __webpack_require__(323);


/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentItemComponent = (function () {
    function CommentItemComponent() {
    }
    CommentItemComponent.prototype.ngOnInit = function () {
    };
    CommentItemComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy: comment-item component');
    };
    CommentItemComponent.prototype.ngOnChanges = function (change) {
        console.log('ngOnChanges: comment-item component', change);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CommentItemComponent.prototype, "comment", void 0);
    CommentItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'comment-item',
            template: __webpack_require__(579),
            styles: [__webpack_require__(577)]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentItemComponent);
    return CommentItemComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/comment-item.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoItemComponent = (function () {
    function PhotoItemComponent() {
    }
    PhotoItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], PhotoItemComponent.prototype, "photo", void 0);
    PhotoItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'photo-item',
            template: __webpack_require__(580),
            styles: [__webpack_require__(578)]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoItemComponent);
    return PhotoItemComponent;
}());
//# sourceMappingURL=/Users/polgasull/Ironhack/M3/lab-angular-introduction/starter-code/src/photo-item.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%;\n}\n\n.card-img {\n  height: 10%;\n}"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<span> {{ comment.authorName }} </span>\n<span> {{ comment.authorComment }} </span>\n\n\n"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <div class=\"row\">\n    <img class=\"card-img-top card-img\" src=\"{{photo.image}}\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{ photo.title }}</h4>\n      <p class=\"card-text\">{{ photo.text }}</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n</div>"

/***/ })

},[574]);
//# sourceMappingURL=main.bundle.map