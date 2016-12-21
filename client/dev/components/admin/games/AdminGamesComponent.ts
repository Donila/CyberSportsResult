import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import { GameService } from '../../../services/GameService';
import { Game } from '../../../models/Game';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-games',
    templateUrl: 'components/admin/games/games.html',
    styleUrls: ['components/admin/games/games.css']
})
export class AdminGamesComponent implements OnInit {

    gameForm: Game = {
        _id: '',
        name: ''
    };
    games: Game[] = [];

    ngOnInit() {
        this._getAll();
    }

    constructor(private _gameService: GameService, private _router: Router) {}

    private _getAll(): void {
        this._gameService
            .getAll()
            .subscribe((games) => {
                this.games = games;
            });
    }

    add(game: Game): void {
        this._gameService
            .add(game)
            .subscribe((m) => {
                this.games.push(m);
                this.gameForm.name = '';
            });
    }

    remove(id: string): void {
        this._gameService
            .remove(id)
            .subscribe(() => {
                this.games.forEach((t, i) => {
                    if (t._id === id)
                        return this.games.splice(i, 1);
                });
            })
    }

    onSelect(game: Game) {
        this._router.navigate(['admin', 'games', game._id]);
    }

    gameAdded(game: Game) {
        this.games.push(game);
    }
}
