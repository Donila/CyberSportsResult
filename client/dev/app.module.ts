import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './components/todo/TodoComponent';
import { TodoService } from './services/TodoService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './components/app/AppComponent';
import { AppRoutingModule } from './app.routes';
import { MainComponent } from './components/main/MainComponent';
import { AdminComponent } from './components/admin/AdminComponent';
import { AdminGamesComponent } from './components/admin/games/AdminGamesComponent';
import { AdminTeamsComponent } from './components/admin/teams/AdminTeamsComponent';
import { AdminPlayersComponent } from './components/admin/players/AdminPlayersComponent';
import { AdminMatchesComponent } from './components/admin/matches/AdminMatchesComponent';
import { GameService } from './services/GameService';
import { TeamService } from './services/TeamService';
import { PlayerService } from './services/PlayerService';
import { MatchService } from './services/MatchService';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        AdminComponent,
        AdminGamesComponent,
        AdminTeamsComponent,
        AdminPlayersComponent,
        AdminMatchesComponent,
        TodoComponent
    ],
    providers: [
        TodoService,
        GameService,
        TeamService,
        PlayerService,
        MatchService
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
