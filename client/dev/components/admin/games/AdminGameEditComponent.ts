import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { GameService } from '../../../services/GameService';
import { Game } from '../../../models/Game';

@Component({
    moduleId: module.id,
    selector: 'admin-game-edit',
    templateUrl: 'admin-game-edit.html'
})
export class AdminGameEditComponent implements OnInit {

    game: Game = { name: '' };

    constructor(private _gameService: GameService, private _route: ActivatedRoute, private _router: Router) { }

    ngOnInit() {
        this._route.params
        .switchMap((params: Params) => this._gameService.get(params['id']))
        .subscribe((game: Game) => this.initGame(game));
    }

    private initGame(game: Game) {
        this.game = game;
        console.log('game loaded');
    }
}
