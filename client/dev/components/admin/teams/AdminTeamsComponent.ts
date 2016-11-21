import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TeamService } from '../../../services/TeamService';
import { GameService } from '../../../services/GameService';
import { Team } from '../../../models/Team';
import { Game } from '../../../models/Game';


@Component({
    selector: 'admin-teams',
    templateUrl: 'components/admin/teams/teams.html',
    styleUrls: ['components/admin/teams/teams.css']
})
export class AdminTeamsComponent implements OnInit {

    teamForm: Team;
    teams: Team[] = [];
    games: Game[] = [];

    ngOnInit() {
        this._getAll();
        this.teamForm = {
            _id: '',
            name: '',
            picture: '',
            game: new Game()
        };
    }

    constructor(private _teamService: TeamService, private _gameService: GameService) {}

    private _getAll(): void {
        this._teamService
            .getAll()
            .subscribe((teams) => {
                this.teams = teams;
            });
        this._gameService
            .getAll()
            .subscribe((games) => {
                this.games = games;
            });
    }

    add(team: Team): void {
        this._teamService
            .add(team)
            .subscribe((m) => {
                this.teams.push(m);
                this.teamForm.name = '';
            });
    }

    remove(id: string): void {
        this._teamService
            .remove(id)
            .subscribe(() => {
                this.teams.forEach((t, i) => {
                    if (t._id === id)
                        return this.teams.splice(i, 1);
                });
            })
    }
}
