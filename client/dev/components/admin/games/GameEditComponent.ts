import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameService } from '../../../services/GameService';
import { Game } from '../../../models/Game';

@Component({
    moduleId: module.id,
    selector: 'game-edit',
    templateUrl: 'game-edit.html'
})
export class GameEditComponent implements OnInit {
    @Input() game: Game;
    @Input() isNew: boolean;
    @Output() gameAdded = new EventEmitter();
    @Output() gameUpdated = new EventEmitter();

    constructor(private _gameService: GameService) {}

    ngOnInit() {
        if (!this.isNew) {
            this.isNew = true;
        }
        console.log('Edit Game Component');
    }

    submit(game: Game) {
        if (this.isNew) {
            this._gameService
            .add(game)
            .subscribe((m) => {
                this.gameAdded.emit(m);
            });
        } else {
            this.gameUpdated.emit('Game Updated');
        }
    }
}
