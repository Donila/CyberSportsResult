"use strict";
var GameController_1 = require('./GameController');
var GameRoutes = (function () {
    function GameRoutes() {
    }
    GameRoutes.init = function (router) {
        router
            .route('/api/games')
            .get(GameController_1.GameController.getAll)
            .post(GameController_1.GameController.createGame);
        router
            .route('/api/games/:id')
            .delete(GameController_1.GameController.deleteGame);
    };
    return GameRoutes;
}());
exports.GameRoutes = GameRoutes;
