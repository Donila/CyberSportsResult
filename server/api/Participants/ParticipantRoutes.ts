"use strict";

import * as express from 'express';
import {ParticipantController} from './ParticipantController';

export class ParticipantRoutes {
    static init(router: express.Router) {
      router
        .route('/api/participants')
        .get(ParticipantController.getAll)
        .post(ParticipantController.createGame);

      router
        .route('/api/participants/:id')
        .delete(ParticipantController.deleteGame);
    }
}
