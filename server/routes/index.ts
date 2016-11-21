import * as express from 'express';
import { TodoRoutes } from '../api/todo/routes/todo-routes';
import { GameRoutes } from '../api/Games/GameRoutes';
import { MatchRoutes } from '../api/Matches/MatchRoutes';
import { ParticipantRoutes } from '../api/Participants/ParticipantRoutes';
import { PlayerRoutes } from '../api/Players/PlayerRoutes';
import { TeamRoutes } from '../api/Teams/TeamRoutes';

import { StaticDispatcher } from '../commons/static/index';


export class Routes {
    static init(app: express.Application, router: express.Router) {
        TodoRoutes.init(router);
        GameRoutes.init(router);
        TeamRoutes.init(router);
        PlayerRoutes.init(router);
        MatchRoutes.init(router);

        router
            .route('*')
            .get(StaticDispatcher.sendIndex);


        app.use('/', router);
    }
}
