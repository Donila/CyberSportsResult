import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import { PlayerService } from '../../../services/PlayerService';
import { TeamService } from '../../../services/TeamService';
import { Player } from '../../../models/Player';
import { Team } from '../../../models/Team';

@Component({
    selector: 'admin-players',
    templateUrl: 'components/admin/players/players.html',
    styleUrls: ['components/admin/players/players.css']
})
export class AdminPlayersComponent implements OnInit {

    playerForm: Player;
    players: Player[] = [];
    teams: Team[] = [];
    selectedTeam: Team = {name: ''};

    ngOnInit() {
        this._getAll();
        this.playerForm = {
            _id: '',
            name: ''
        };
    }

    constructor(private _playerService: PlayerService, private _teamService: TeamService) {}

    private _getAll(): void {
        this._playerService
            .getAll()
            .subscribe((players) => {
                this.players = players;
            });
        this._teamService
            .getAll()
            .subscribe((teams) => {
                this.teams = teams;
            });
    }

    add(player: Player): void {
        this._playerService
            .add(player)
            .subscribe((m) => {
                this.players.push(m);
                this.playerForm.name = '';
            });
    }

    remove(id: string): void {
        this._playerService
            .remove(id)
            .subscribe(() => {
                this.players.forEach((t, i) => {
                    if (t._id === id)
                        return this.players.splice(i, 1);
                });
            })
    }

    teamSelected($event): void {
        this.playerForm.teams = [{ team: $event.target.value, past: false }];
    }
}
