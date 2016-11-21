import { Component } from '@angular/core';

import {
    GameService
} from '../../services/GameService';

import { Game } from '../../models/Game';

@Component({
    selector: 'main-app',
    templateUrl: 'components/app/app.html',
    styleUrls: ['components/app/app.css']
})
export class AppComponent {

    games: Game[] = [];

    constructor(private _gameService: GameService) {
    }

    ngOnInit() {
        this._getAll();
    }

    private _getAll(): void {
        this._gameService
            .getAll()
            .subscribe((games) => {
                this.games = games;
            });
    }
}
