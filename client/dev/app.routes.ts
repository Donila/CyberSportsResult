import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/AppComponent';
import { MainComponent } from './components/main/MainComponent';
import { AdminComponent } from './components/admin/AdminComponent';
import { TodoComponent } from './components/todo/TodoComponent';
import { AdminGamesComponent } from './components/admin/games/AdminGamesComponent';
import { AdminMatchesComponent } from './components/admin/matches/AdminMatchesComponent';
import { AdminPlayersComponent } from './components/admin/players/AdminPlayersComponent';
import { AdminTeamsComponent } from './components/admin/teams/AdminTeamsComponent';
import { AdminGameEditComponent } from './components/admin/games/AdminGameEditComponent';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: MainComponent },
            { path: 'todo', component: TodoComponent },
            {
                path: 'admin', component: AdminComponent, children: [
                    { path: '', redirectTo: 'games', pathMatch: 'full' },
                    { path: 'games', component: AdminGamesComponent },
                    { path: 'games/:id', component: AdminGameEditComponent },
                    { path: 'matches', component: AdminMatchesComponent },
                    { path: 'players', component: AdminPlayersComponent },
                    { path: 'teams', component: AdminTeamsComponent },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
