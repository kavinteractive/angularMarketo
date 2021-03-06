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
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.name = 'Angular';
        this.router.events.subscribe(function (nEvent) {
            if (nEvent instanceof router_1.NavigationStart) {
                Munchkin.munchkinFunction('clickLink', { href: nEvent.url });
                console.log('Called munchkin from ', nEvent.url);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div style=\"padding: 5px\">\n      <ul>\n        <li><a routerLink=\"home\">Home</a></li>\n        <li><a routerLink=\"test\">User</a></li>\n        <router-outlet></router-outlet>\n      </ul>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map