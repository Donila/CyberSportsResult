import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import { GameService } from '../../services/GameService';
import { Game } from '../../models/Game';

@Component({
    selector: 'admin-cmp',
    templateUrl: 'components/admin/admin.html',
    styleUrls: ['components/admin/admin.css']
})
export class AdminComponent implements OnInit {

    gameForm: Game;
    games: Game[] = [];

    ngOnInit() {
        this._getAll();
        this.gameForm = {
            _id: '',
            name: ''
        };
    }

    constructor(private _gameService: GameService) {}

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
}
