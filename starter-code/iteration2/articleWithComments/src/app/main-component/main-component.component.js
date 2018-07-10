"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MainComponentComponent = /** @class */ (function () {
    function MainComponentComponent() {
        this.article = [
            {
                title: "Sorry to tired for creativity",
                imageUrl: "https://cdn.welcometothejungle.co/uploads/organization/logo/ironhack-france.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus ut massa varius aliquam. Nulla non sapien justo. Etiam sed nulla posuere dui elementum viverra. Cras aliquam ut ipsum at imperdiet. Phasellus quis lectus ac lorem viverra ultricies a eget nisl. Curabitur sollicitudin arcu eget velit venenatis, sit amet hendrerit risus sodales. Etiam ullamcorper suscipit metus, malesuada ornare magna finibus eget. Ut sed lacinia ligula, eget imperdiet nunc."
            }
        ];
    }
    MainComponentComponent.prototype.ngOnInit = function () { };
    MainComponentComponent = __decorate([
        core_1.Component({
            selector: "app-main-component",
            templateUrl: "./main-component.component.html",
            styleUrls: ["./main-component.component.css"]
        })
    ], MainComponentComponent);
    return MainComponentComponent;
}());
exports.MainComponentComponent = MainComponentComponent;
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
