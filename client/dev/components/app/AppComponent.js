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
var core_1 = require('@angular/core');
var GameService_1 = require('../../services/GameService');
var AppComponent = (function () {
    function AppComponent(_gameService) {
        this._gameService = _gameService;
        this.games = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    AppComponent.prototype._getAll = function () {
        var _this = this;
        this._gameService
            .getAll()
            .subscribe(function (games) {
            _this.games = games;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'components/app/app.html',
            styleUrls: ['components/app/app.css']
        }), 
        __metadata('design:paramtypes', [GameService_1.GameService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
