"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User = (function () {
    function User(router) {
        var _this = this;
        this.router = router;
        this.toggleHobbies = function () {
            _this.showHobbies = !_this.showHobbies;
        };
        console.log('COnstructur running');
        this.name = 'Angular';
        this.years = '22';
        this.email = 'ish.rissam@gmail.com';
        this.hobbies = ['Lapotp', 'lol', 'dancing'];
        this.showHobbies = true;
        this.address = {
            city: "jammu",
            street: 'H.No 101',
            state: 'J&K'
        };
    }
    User.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    User.prototype.deleteHobby = function (index) {
        this.hobbies.splice(index, 1);
    };
    return User;
}());
User = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1>Hello {{name}}, are you {{years}} years old? And is your email {{email}}?</h1>\n    <button (click)=\"toggleHobbies()\">{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}}</button>\n    <div *ngIf=\"showHobbies\">\n        <ul>\n            <li *ngFor=\"let hobby of hobbies; let i = index\">\n                {{hobby}} <button (click)=\"deleteHobby(i)\">x</button>\n            </li>\n        </ul>\n        <button (click)=\"addHobby(hobby.value)\">\n            <label> Add Hobby: </label><br>\n        </button>\n        <input type=\"text\" #hobby />\n        <form>\n        <h2>You live in {{address.city}}</h2>\n            <label>\n                Name:\n            </label>\n            <input name=\"name\" type=\"text\" [(ngModel)]='name' placeholder=\"Please enter name\" />\n            <label>\n                Email:\n            </label>\n            <input name=\"email\" type=\"text\" [(ngModel)]='email' placeholder=\"Please enter name\" />\n            <label>\n                Years:\n            </label>\n            <input name=\"years\" type=\"text\" [(ngModel)]='years' placeholder=\"Please enter name\" />\n            <label>\n                Name:\n            </label>\n            <input name=\"address.city\" type=\"text\" [(ngModel)]='address.city' placeholder=\"Please enter name\" />\n        </form>\n\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], User);
exports.User = User;
//# sourceMappingURL=user.component.js.map