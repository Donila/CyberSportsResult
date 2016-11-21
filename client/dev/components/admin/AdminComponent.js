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
var AdminComponent = (function () {
    function AdminComponent(_gameService) {
        this._gameService = _gameService;
        this.games = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this._getAll();
        this.gameForm = {
            _id: '',
            name: ''
        };
    };
    AdminComponent.prototype._getAll = function () {
        var _this = this;
        this._gameService
            .getAll()
            .subscribe(function (games) {
            _this.games = games;
        });
    };
    AdminComponent.prototype.add = function (game) {
        var _this = this;
        this._gameService
            .add(game)
            .subscribe(function (m) {
            _this.games.push(m);
            _this.gameForm.name = '';
        });
    };
    AdminComponent.prototype.remove = function (id) {
        var _this = this;
        this._gameService
            .remove(id)
            .subscribe(function () {
            _this.games.forEach(function (t, i) {
                if (t._id === id)
                    return _this.games.splice(i, 1);
            });
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-cmp',
            templateUrl: 'components/admin/admin.html',
            styleUrls: ['components/admin/admin.css']
        }), 
        __metadata('design:paramtypes', [GameService_1.GameService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
