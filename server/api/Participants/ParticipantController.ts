import * as express from 'express';
import ParticipantDao from './ParticipantDao';

export class ParticipantController {
  static getAll(req: express.Request, res: express.Response):void {
      ParticipantDao
        ['getAll']()
        .then(participants => res.status(200).json(participants))
        .catch(error => res.status(400).json(error));
  }

  static createGame(req: express.Request, res: express.Response):void {
      let _participant = req.body;

      ParticipantDao
        ['createGame'](_participant)
        .then(participant => res.status(201).json(participant))
        .catch(error => res.status(400).json(error));
  }

  static deleteGame(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    ParticipantDao
      ['deleteGame'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
