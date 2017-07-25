"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.article = {
            title: 'Learn how to code with Ironhack',
            image: 'https://learntocodewith.me/wp-content/themes/remixx/images/logo.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim tempus est vitae bibendum. Proin maximus, enim et facilisis ullamcorper, sapien nisi maximus arcu, vitae imperdiet nibh lectus eget nisi. Curabitur tristique laoreet euismod. Integer mattis in urna eu sollicitudin. Nunc ut quam ante. Curabitur tempus velit non viverra efficitur. Curabitur vel tincidunt mauris, ut rhoncus ante.'
        };
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
