"use strict";
var ParticipantController_1 = require('./ParticipantController');
var ParticipantRoutes = (function () {
    function ParticipantRoutes() {
    }
    ParticipantRoutes.init = function (router) {
        router
            .route('/api/participants')
            .get(ParticipantController_1.ParticipantController.getAll)
            .post(ParticipantController_1.ParticipantController.createGame);
        router
            .route('/api/participants/:id')
            .delete(ParticipantController_1.ParticipantController.deleteGame);
    };
    return ParticipantRoutes;
}());
exports.ParticipantRoutes = ParticipantRoutes;
