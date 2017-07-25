"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.photoAlbum = [
            { imageUrl: 'https://i.blogs.es/d6087e/650_1000_code/450_1000.jpg', description: 'Ironhack Madrid' },
            { imageUrl: 'https://www.ironhack.com/assets/images/courses/front-end-course-3.jpg', description: 'Ironhack Barcelona' },
            { imageUrl: 'http://blog.ironhack.com/wp-content/uploads/2016/06/building2.jpg', description: 'Ironhack Miami' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
