import * as express from 'express';
import MatchDao from './MatchDao';

export class MatchController {
  static getAll(req: express.Request, res: express.Response):void {
      MatchDao
        ['getAll']()
        .then(Match => res.status(200).json(Match))
        .catch(error => res.status(400).json(error));
  }

  static createMatch(req: express.Request, res: express.Response):void {
      let _match = req.body;

      MatchDao
        ['createMatch'](_match)
        .then(match => res.status(201).json(match))
        .catch(error => res.status(400).json(error));
  }

  static deleteMatch(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    MatchDao
      ['deleteMatch'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
