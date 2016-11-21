"use strict";
var PlayerDao_1 = require('./PlayerDao');
var PlayerController = (function () {
    function PlayerController() {
    }
    PlayerController.getAll = function (req, res) {
        PlayerDao_1.default['getAll']()
            .then(function (players) { return res.status(200).json(players); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    PlayerController.createPlayer = function (req, res) {
        var _player = req.body;
        PlayerDao_1.default['createPlayer'](_player)
            .then(function (player) { return res.status(201).json(player); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    PlayerController.deletePlayer = function (req, res) {
        var _id = req.params.id;
        PlayerDao_1.default['deletePlayer'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return PlayerController;
}());
exports.PlayerController = PlayerController;
