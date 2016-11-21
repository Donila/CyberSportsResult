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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var TodoComponent_1 = require('./components/todo/TodoComponent');
var TodoService_1 = require('./services/TodoService');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var AppComponent_1 = require('./components/app/AppComponent');
var app_routes_1 = require('./app.routes');
var MainComponent_1 = require('./components/main/MainComponent');
var AdminComponent_1 = require('./components/admin/AdminComponent');
var AdminGamesComponent_1 = require('./components/admin/games/AdminGamesComponent');
var AdminTeamsComponent_1 = require('./components/admin/teams/AdminTeamsComponent');
var AdminPlayersComponent_1 = require('./components/admin/players/AdminPlayersComponent');
var AdminMatchesComponent_1 = require('./components/admin/matches/AdminMatchesComponent');
var GameService_1 = require('./services/GameService');
var TeamService_1 = require('./services/TeamService');
var PlayerService_1 = require('./services/PlayerService');
var MatchService_1 = require('./services/MatchService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.AppRoutingModule
            ],
            declarations: [
                AppComponent_1.AppComponent,
                MainComponent_1.MainComponent,
                AdminComponent_1.AdminComponent,
                AdminGamesComponent_1.AdminGamesComponent,
                AdminTeamsComponent_1.AdminTeamsComponent,
                AdminPlayersComponent_1.AdminPlayersComponent,
                AdminMatchesComponent_1.AdminMatchesComponent,
                TodoComponent_1.TodoComponent
            ],
            providers: [
                TodoService_1.TodoService,
                GameService_1.GameService,
                TeamService_1.TeamService,
                PlayerService_1.PlayerService,
                MatchService_1.MatchService
            ],
            bootstrap: [
                AppComponent_1.AppComponent,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
