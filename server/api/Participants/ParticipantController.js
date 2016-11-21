"use strict";
var ParticipantDao_1 = require('./ParticipantDao');
var ParticipantController = (function () {
    function ParticipantController() {
    }
    ParticipantController.getAll = function (req, res) {
        ParticipantDao_1.default['getAll']()
            .then(function (participants) { return res.status(200).json(participants); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ParticipantController.createGame = function (req, res) {
        var _participant = req.body;
        ParticipantDao_1.default['createGame'](_participant)
            .then(function (participant) { return res.status(201).json(participant); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ParticipantController.deleteGame = function (req, res) {
        var _id = req.params.id;
        ParticipantDao_1.default['deleteGame'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return ParticipantController;
}());
exports.ParticipantController = ParticipantController;
