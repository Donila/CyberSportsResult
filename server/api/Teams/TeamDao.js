"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var TeamModel_1 = require('./TeamModel');
TeamModel_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Team
            .find(_query)
            .populate('game')
            .exec(function (err, teams) {
            err ? reject(err)
                : resolve(teams);
        });
    });
});
TeamModel_1.default.static('createTeam', function (team) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(team)) {
            return reject(new TypeError('team is not a valid object.'));
        }
        var _team = new Team(team);
        _team.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
TeamModel_1.default.static('deleteTeam', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Team
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Team = mongoose.model('Team', TeamModel_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Team;
