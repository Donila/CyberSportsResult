"use strict";
var MatchDao_1 = require('./MatchDao');
var MatchController = (function () {
    function MatchController() {
    }
    MatchController.getAll = function (req, res) {
        MatchDao_1.default['getAll']()
            .then(function (Match) { return res.status(200).json(Match); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    MatchController.createMatch = function (req, res) {
        var _match = req.body;
        MatchDao_1.default['createMatch'](_match)
            .then(function (match) { return res.status(201).json(match); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    MatchController.deleteMatch = function (req, res) {
        var _id = req.params.id;
        MatchDao_1.default['deleteMatch'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return MatchController;
}());
exports.MatchController = MatchController;
