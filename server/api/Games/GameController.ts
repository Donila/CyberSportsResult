import * as express from 'express';
import GameDao from './GameDao';

export class GameController {
    static getAll(req: express.Request, res: express.Response): void {
        GameDao
        ['getAll']()
            .then(games => res.status(200).json(games))
            .catch(error => res.status(400).json(error));
    }

    static createGame(req: express.Request, res: express.Response): void {
        let _game = req.body;

        GameDao
        ['createGame'](_game)
            .then(game => res.status(201).json(game))
            .catch(error => res.status(400).json(error));
    }

    static deleteGame(req: express.Request, res: express.Response): void {
        let _id = req.params.id;

        GameDao
        ['deleteGame'](_id)
            .then(() => res.status(200).end())
            .catch(error => res.status(400).json(error));
    }
}
