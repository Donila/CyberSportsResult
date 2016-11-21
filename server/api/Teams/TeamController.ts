import * as express from 'express';
import TeamDao from './TeamDao';

export class TeamController {
    static getAll(req: express.Request, res: express.Response): void {
        TeamDao
        ['getAll']()
            .then(teams => res.status(200).json(teams))
            .catch(error => res.status(400).json(error));
    }

    static createTeam(req: express.Request, res: express.Response): void {
        let _team = req.body;

        TeamDao
        ['createTeam'](_team)
            .then(team => res.status(201).json(team))
            .catch(error => res.status(400).json(error));
    }

    static deleteTeam(req: express.Request, res: express.Response): void {
        let _id = req.params.id;

        TeamDao
        ['deleteTeam'](_id)
            .then(() => res.status(200).end())
            .catch(error => res.status(400).json(error));
    }
}
