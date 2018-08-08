"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var iteration2Component = /** @class */ (function () {
    function iteration2Component() {
        this.article = {
            title: "Kpop life",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytLFR2d9TInHsjHYec7JcARzA7g4rAFZI8GQKXDZVo2XyfdlPAg",
            description: "Really fun stuff"
        };
    }
    iteration2Component.prototype.ngOnInit = function () {
    };
    iteration2Component = __decorate([
        core_1.Component({
            selector: 'app-iteration2',
            templateUrl: './iteration2.component.html',
            styleUrls: ['./iteration2.component.css']
        })
    ], iteration2Component);
    return iteration2Component;
}());
exports.iteration2Component = iteration2Component;
