"use strict";
var MatchController_1 = require('./MatchController');
var MatchRoutes = (function () {
    function MatchRoutes() {
    }
    MatchRoutes.init = function (router) {
        router
            .route('/api/matches')
            .get(MatchController_1.MatchController.getAll)
            .post(MatchController_1.MatchController.createMatch);
        router
            .route('/api/matches/:id')
            .delete(MatchController_1.MatchController.deleteMatch);
    };
    return MatchRoutes;
}());
exports.MatchRoutes = MatchRoutes;
