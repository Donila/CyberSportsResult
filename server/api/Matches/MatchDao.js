"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var MatchModel_1 = require('./MatchModel');
MatchModel_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Match
            .find(_query)
            .exec(function (err, Matches) {
            err ? reject(err)
                : resolve(Matches);
        });
    });
});
MatchModel_1.default.static('createMatch', function (match) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(Match)) {
            return reject(new TypeError('Match is not a valid object.'));
        }
        var _match = new Match(match);
        _match.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
MatchModel_1.default.static('deleteMatch', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Match
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Match = mongoose.model('Match', MatchModel_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Match;
