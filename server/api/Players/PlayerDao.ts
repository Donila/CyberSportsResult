import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import playerSchema from './PlayerModel';

playerSchema.static('getAll', (): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
        let _query = {};

        Player
            .find(_query)
            .populate('teams.team')
            .exec((err, players) => {
                err ? reject(err)
                    : resolve(players);
            });
    });
});

playerSchema.static('createPlayer', (player: Object): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
        if (!_.isObject(player)) {
            return reject(new TypeError('player is not a valid object.'));
        }

        var _player = new Player(player);

        _player.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
});

playerSchema.static('deletePlayer', (id: string): Promise<any> => {
    return new Promise((resolve: Function, reject: Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Player
            .findByIdAndRemove(id)
            .exec((err, deleted) => {
                err ? reject(err)
                    : resolve();
            });
    });
});

let Player = mongoose.model('Player', playerSchema);

export default Player;
