"use strict";

import * as express from 'express';
import { GameController } from './GameController';

export class GameRoutes {
    static init(router: express.Router) {
        router
            .route('/api/games')
            .get(GameController.getAll)
            .post(GameController.createGame);

        router
            .route('/api/games/:id')
            .get(GameController.get)
            .delete(GameController.deleteGame);
    }
}
