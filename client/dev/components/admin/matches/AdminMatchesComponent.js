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
var MatchService_1 = require('../../../services/MatchService');
var AdminMatchesComponent = (function () {
    function AdminMatchesComponent(_MatchService) {
        this._MatchService = _MatchService;
        this.matches = [];
    }
    AdminMatchesComponent.prototype.ngOnInit = function () {
        this._getAll();
        this.matchForm = {
            _id: '',
            name: ''
        };
    };
    AdminMatchesComponent.prototype._getAll = function () {
        var _this = this;
        this._MatchService
            .getAll()
            .subscribe(function (Matchs) {
            _this.matches = Matchs;
        });
    };
    AdminMatchesComponent.prototype.add = function (Match) {
        var _this = this;
        this._MatchService
            .add(Match)
            .subscribe(function (m) {
            _this.matches.push(m);
            _this.matchForm.name = '';
        });
    };
    AdminMatchesComponent.prototype.remove = function (id) {
        var _this = this;
        this._MatchService
            .remove(id)
            .subscribe(function () {
            _this.matches.forEach(function (t, i) {
                if (t._id === id)
                    return _this.matches.splice(i, 1);
            });
        });
    };
    AdminMatchesComponent = __decorate([
        core_1.Component({
            selector: 'admin-matches',
            templateUrl: 'components/admin/matches/matches.html',
            styleUrls: ['components/admin/matches/matches.css']
        }), 
        __metadata('design:paramtypes', [MatchService_1.MatchService])
    ], AdminMatchesComponent);
    return AdminMatchesComponent;
}());
exports.AdminMatchesComponent = AdminMatchesComponent;
