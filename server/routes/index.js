"use strict";
var todo_routes_1 = require('../api/todo/routes/todo-routes');
var GameRoutes_1 = require('../api/Games/GameRoutes');
var MatchRoutes_1 = require('../api/Matches/MatchRoutes');
var PlayerRoutes_1 = require('../api/Players/PlayerRoutes');
var TeamRoutes_1 = require('../api/Teams/TeamRoutes');
var index_1 = require('../commons/static/index');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_routes_1.TodoRoutes.init(router);
        GameRoutes_1.GameRoutes.init(router);
        TeamRoutes_1.TeamRoutes.init(router);
        PlayerRoutes_1.PlayerRoutes.init(router);
        MatchRoutes_1.MatchRoutes.init(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
