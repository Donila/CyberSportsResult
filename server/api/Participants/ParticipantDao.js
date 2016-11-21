"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var ParticipantModel_1 = require('./ParticipantModel');
ParticipantModel_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Participant
            .find(_query)
            .exec(function (err, participants) {
            err ? reject(err)
                : resolve(participants);
        });
    });
});
ParticipantModel_1.default.static('createParticipant', function (participant) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(participant)) {
            return reject(new TypeError('participant is not a valid object.'));
        }
        var _participant = new Participant(participant);
        _participant.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
ParticipantModel_1.default.static('deleteParticipant', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Participant
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Participant = mongoose.model('Participant', ParticipantModel_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Participant;
