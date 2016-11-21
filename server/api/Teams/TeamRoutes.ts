"use strict";

import * as express from 'express';
import {TeamController} from './TeamController';

export class TeamRoutes {
    static init(router: express.Router) {
      router
        .route('/api/teams')
        .get(TeamController.getAll)
        .post(TeamController.createTeam);

      router
        .route('/api/teams/:id')
        .delete(TeamController.deleteTeam);
    }
}
