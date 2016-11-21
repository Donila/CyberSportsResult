"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var GameModel_1 = require('./GameModel');
GameModel_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Game
            .find(_query)
            .exec(function (err, games) {
            err ? reject(err)
                : resolve(games);
        });
    });
});
GameModel_1.default.static('createGame', function (game) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(game)) {
            return reject(new TypeError('game is not a valid object.'));
        }
        var _game = new Game(game);
        _game.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
GameModel_1.default.static('deleteGame', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Game
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Game = mongoose.model('Game', GameModel_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Game;
