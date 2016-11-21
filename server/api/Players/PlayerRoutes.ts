"use strict";

import * as express from 'express';
import {PlayerController} from './PlayerController';

export class PlayerRoutes {
    static init(router: express.Router) {
      router
        .route('/api/players')
        .get(PlayerController.getAll)
        .post(PlayerController.createPlayer);

      router
        .route('/api/players/:id')
        .delete(PlayerController.deletePlayer);
    }
}
