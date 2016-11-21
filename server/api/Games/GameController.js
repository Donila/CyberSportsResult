"use strict";
var GameDao_1 = require('./GameDao');
var GameController = (function () {
    function GameController() {
    }
    GameController.getAll = function (req, res) {
        GameDao_1.default['getAll']()
            .then(function (games) { return res.status(200).json(games); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    GameController.createGame = function (req, res) {
        var _game = req.body;
        GameDao_1.default['createGame'](_game)
            .then(function (game) { return res.status(201).json(game); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    GameController.deleteGame = function (req, res) {
        var _id = req.params.id;
        GameDao_1.default['deleteGame'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return GameController;
}());
exports.GameController = GameController;
