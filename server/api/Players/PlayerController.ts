import * as express from 'express';
import PlayerDao from './PlayerDao';

export class PlayerController {
  static getAll(req: express.Request, res: express.Response):void {
      PlayerDao
        ['getAll']()
        .then(players => res.status(200).json(players))
        .catch(error => res.status(400).json(error));
  }

  static createPlayer(req: express.Request, res: express.Response):void {
      let _player = req.body;

      PlayerDao
        ['createPlayer'](_player)
        .then(player => res.status(201).json(player))
        .catch(error => res.status(400).json(error));
  }

  static deletePlayer(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    PlayerDao
      ['deletePlayer'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
