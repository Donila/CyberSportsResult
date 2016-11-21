"use strict";
var TeamController_1 = require('./TeamController');
var TeamRoutes = (function () {
    function TeamRoutes() {
    }
    TeamRoutes.init = function (router) {
        router
            .route('/api/teams')
            .get(TeamController_1.TeamController.getAll)
            .post(TeamController_1.TeamController.createTeam);
        router
            .route('/api/teams/:id')
            .delete(TeamController_1.TeamController.deleteTeam);
    };
    return TeamRoutes;
}());
exports.TeamRoutes = TeamRoutes;
