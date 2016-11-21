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
var PlayerService_1 = require('../../../services/PlayerService');
var TeamService_1 = require('../../../services/TeamService');
var AdminPlayersComponent = (function () {
    function AdminPlayersComponent(_playerService, _teamService) {
        this._playerService = _playerService;
        this._teamService = _teamService;
        this.players = [];
        this.teams = [];
        this.selectedTeam = { name: '' };
    }
    AdminPlayersComponent.prototype.ngOnInit = function () {
        this._getAll();
        this.playerForm = {
            _id: '',
            name: ''
        };
    };
    AdminPlayersComponent.prototype._getAll = function () {
        var _this = this;
        this._playerService
            .getAll()
            .subscribe(function (players) {
            _this.players = players;
        });
        this._teamService
            .getAll()
            .subscribe(function (teams) {
            _this.teams = teams;
        });
    };
    AdminPlayersComponent.prototype.add = function (player) {
        var _this = this;
        this._playerService
            .add(player)
            .subscribe(function (m) {
            _this.players.push(m);
            _this.playerForm.name = '';
        });
    };
    AdminPlayersComponent.prototype.remove = function (id) {
        var _this = this;
        this._playerService
            .remove(id)
            .subscribe(function () {
            _this.players.forEach(function (t, i) {
                if (t._id === id)
                    return _this.players.splice(i, 1);
            });
        });
    };
    AdminPlayersComponent.prototype.teamSelected = function ($event) {
        this.playerForm.teams = [{ team: $event.target.value, past: false }];
    };
    AdminPlayersComponent = __decorate([
        core_1.Component({
            selector: 'admin-players',
            templateUrl: 'components/admin/players/players.html',
            styleUrls: ['components/admin/players/players.css']
        }), 
        __metadata('design:paramtypes', [PlayerService_1.PlayerService, TeamService_1.TeamService])
    ], AdminPlayersComponent);
    return AdminPlayersComponent;
}());
exports.AdminPlayersComponent = AdminPlayersComponent;
