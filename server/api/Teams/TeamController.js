"use strict";
var TeamDao_1 = require('./TeamDao');
var TeamController = (function () {
    function TeamController() {
    }
    TeamController.getAll = function (req, res) {
        TeamDao_1.default['getAll']()
            .then(function (teams) { return res.status(200).json(teams); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    TeamController.createTeam = function (req, res) {
        var _team = req.body;
        TeamDao_1.default['createTeam'](_team)
            .then(function (team) { return res.status(201).json(team); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    TeamController.deleteTeam = function (req, res) {
        var _id = req.params.id;
        TeamDao_1.default['deleteTeam'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return TeamController;
}());
exports.TeamController = TeamController;
