import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import teamSchema from './TeamModel';

teamSchema.static('getAll', ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Team
            .find(_query)
          .populate('game')
          .exec((err, teams) => {
              err ? reject(err)
                  : resolve(teams);
          });
    });
});

teamSchema.static('createTeam', (team:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(team)) {
        return reject(new TypeError('team is not a valid object.'));
      }

      var _team = new Team(team);

      _team.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

teamSchema.static('deleteTeam', (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Team
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
});

let Team = mongoose.model('Team', teamSchema);

export default Team;
