"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var PlayerModel_1 = require('./PlayerModel');
PlayerModel_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Player
            .find(_query)
            .populate('teams.team')
            .exec(function (err, players) {
            err ? reject(err)
                : resolve(players);
        });
    });
});
PlayerModel_1.default.static('createPlayer', function (player) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(player)) {
            return reject(new TypeError('player is not a valid object.'));
        }
        var _player = new Player(player);
        _player.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
PlayerModel_1.default.static('deletePlayer', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Player
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Player = mongoose.model('Player', PlayerModel_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Player;
