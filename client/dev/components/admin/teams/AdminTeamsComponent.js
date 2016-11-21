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
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var TeamService_1 = require('../../../services/TeamService');
var GameService_1 = require('../../../services/GameService');
var Game_1 = require('../../../models/Game');
var AdminTeamsComponent = (function () {
    function AdminTeamsComponent(_teamService, _gameService) {
        this._teamService = _teamService;
        this._gameService = _gameService;
        this.teams = [];
        this.games = [];
    }
    AdminTeamsComponent.prototype.ngOnInit = function () {
        this._getAll();
        this.teamForm = {
            _id: '',
            name: '',
            picture: '',
            game: new Game_1.Game()
        };
    };
    AdminTeamsComponent.prototype._getAll = function () {
        var _this = this;
        this._teamService
            .getAll()
            .subscribe(function (teams) {
            _this.teams = teams;
        });
        this._gameService
            .getAll()
            .subscribe(function (games) {
            _this.games = games;
        });
    };
    AdminTeamsComponent.prototype.add = function (team) {
        var _this = this;
        this._teamService
            .add(team)
            .subscribe(function (m) {
            _this.teams.push(m);
            _this.teamForm.name = '';
        });
    };
    AdminTeamsComponent.prototype.remove = function (id) {
        var _this = this;
        this._teamService
            .remove(id)
            .subscribe(function () {
            _this.teams.forEach(function (t, i) {
                if (t._id === id)
                    return _this.teams.splice(i, 1);
            });
        });
    };
    AdminTeamsComponent = __decorate([
        core_1.Component({
            selector: 'admin-teams',
            templateUrl: 'components/admin/teams/teams.html',
            styleUrls: ['components/admin/teams/teams.css']
        }), 
        __metadata('design:paramtypes', [TeamService_1.TeamService, GameService_1.GameService])
    ], AdminTeamsComponent);
    return AdminTeamsComponent;
}());
exports.AdminTeamsComponent = AdminTeamsComponent;
