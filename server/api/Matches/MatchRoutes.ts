"use strict";

import * as express from 'express';
import {MatchController} from './MatchController';

export class MatchRoutes {
    static init(router: express.Router) {
      router
        .route('/api/matches')
        .get(MatchController.getAll)
        .post(MatchController.createMatch);

      router
        .route('/api/matches/:id')
        .delete(MatchController.deleteMatch);
    }
}
