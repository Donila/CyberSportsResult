import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import gameSchema from './GameModel';

gameSchema.static('getAll', ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Game
          .find(_query)
          .exec((err, games) => {
              err ? reject(err)
                  : resolve(games);
          });
    });
});

gameSchema.static('get', (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = { _id: id };

        Game
          .findOne(_query)
          .exec((err, game) => {
              err ? reject(err)
                  : resolve(game);
          });
    });
});

gameSchema.static('createGame', (game:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(game)) {
        return reject(new TypeError('game is not a valid object.'));
      }

      var _game = new Game(game);

      _game.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

gameSchema.static('deleteGame', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Game
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
});

let Game = mongoose.model('Game', gameSchema);

export default Game;
