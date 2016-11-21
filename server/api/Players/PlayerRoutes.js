"use strict";
var PlayerController_1 = require('./PlayerController');
var PlayerRoutes = (function () {
    function PlayerRoutes() {
    }
    PlayerRoutes.init = function (router) {
        router
            .route('/api/players')
            .get(PlayerController_1.PlayerController.getAll)
            .post(PlayerController_1.PlayerController.createPlayer);
        router
            .route('/api/players/:id')
            .delete(PlayerController_1.PlayerController.deletePlayer);
    };
    return PlayerRoutes;
}());
exports.PlayerRoutes = PlayerRoutes;
