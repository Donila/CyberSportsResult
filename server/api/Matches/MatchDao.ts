import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import MatchSchema from './MatchModel';

MatchSchema.static('getAll', ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Match
            .find(_query)
            .populate({
                path: 'teams.team',
                model: 'Team'
            })
            .populate({
                path: 'players.player',
                model: 'Player'
            })
            .exec((err, Matches) => {
                err ? reject(err)
                    : resolve(Matches);
            });
    });
});

MatchSchema.static('createMatch', (match:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(Match)) {
        return reject(new TypeError('Match is not a valid object.'));
      }

      var _match = new Match(match);

      _match.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

MatchSchema.static('deleteMatch', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Match
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
});

let Match = mongoose.model('Match', MatchSchema);

export default Match;
