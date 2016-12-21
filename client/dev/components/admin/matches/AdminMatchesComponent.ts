import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import { MatchService } from '../../../services/MatchService';
import { PlayerService } from '../../../services/PlayerService';
import { TeamService } from '../../../services/TeamService';
import { Match } from '../../../models/Match';
import { TeamScore } from '../../../models/Match';
import { PlayerScore } from '../../../models/Match';
import { Player } from '../../../models/Player';
import { Team } from '../../../models/Team';

@Component({
    selector: 'admin-matches',
    templateUrl: 'components/admin/matches/matches.html',
    styleUrls: ['components/admin/matches/matches.css']
})
export class AdminMatchesComponent implements OnInit {

    matchForm: Match;
    matches: Match[] = [];
    players: Player[] = [];
    teams: Team[] = [];
    type: string = 'teams';

    ngOnInit() {
        this._getAll();
        this._getPlayers();
        this._getTeams();
        this.matchForm = {
            createdAt: new Date(),
            finished: new Date(),
            teams: [{ score: 0, team: ''}, { score: 0, team: ''}],
            players: [{ score: 0, player: ''}, { score: 0, player: ''}]
        };
    }

    constructor(private _MatchService: MatchService, private _PlayerService: PlayerService, private _TeamService: TeamService) {}

    private _getAll(): void {
        this._MatchService
            .getAll()
            .subscribe((Matchs) => {

                this.matches = Matchs;
                this.matches.forEach((match) => {
                    if (match.players.length == 0) {
                        delete match.players;
                    }
                    if (match.teams.length == 0) {
                        delete match.teams;
                    }
                })
            });
    }

    private _getPlayers(): void {
        this._PlayerService
            .getAll()
            .subscribe((players) => {
                this.players = players;
            });
    }

    private _getTeams(): void {
        this._TeamService
            .getAll()
            .subscribe((teams) => {
                this.teams = teams;
            });
    }

    add(Match: Match): void {
        if (this.type == 'teams') {
            delete Match.players;
        }
        if (this.type == 'players') {
            delete Match.teams;
        }
        this._MatchService
            .add(Match)
            .subscribe((m) => {
                this.matches.push(m);
            });
    }

    remove(id: string): void {
        this._MatchService
            .remove(id)
            .subscribe(() => {
                this.matches.forEach((t, i) => {
                    if (t._id === id)
                        return this.matches.splice(i, 1);
                });
            })
    }

    team(match, index) {
        let team = match.teams[index];
        if (team) {
            return team;
        } else {
            return { team: '', score: 0 };
        }
    }

    player(match, index) {
        let player = match.players[index];
        if (player) {
            return player;
        } else {
            return { player: '', score: 0 };
        }
    }

    typeChanged() {
        this.matchForm = {
            createdAt: new Date(),
            finished: new Date(),
            teams: [{ score: 0, team: ''}, { score: 0, team: ''}],
            players: [{ score: 0, player: ''}, { score: 0, player: ''}]
        };
    }
}
