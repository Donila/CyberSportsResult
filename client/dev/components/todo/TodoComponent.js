"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TodoService_1 = require('../../services/TodoService');
var TodoComponent = (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.title = "ng2do";
        this.todos = [];
        this.todoForm = {
            "todoMessage": ""
        };
    }
    TodoComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    TodoComponent.prototype._getAll = function () {
        var _this = this;
        this._todoService
            .getAll()
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoComponent.prototype.add = function (message) {
        var _this = this;
        this._todoService
            .add(message)
            .subscribe(function (m) {
            _this.todos.push(m);
            _this.todoForm.todoMessage = "";
        });
    };
    TodoComponent.prototype.remove = function (id) {
        var _this = this;
        this._todoService
            .remove(id)
            .subscribe(function () {
            _this.todos.forEach(function (t, i) {
                if (t._id === id)
                    return _this.todos.splice(i, 1);
            });
        });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo-cmp',
            templateUrl: 'components/todo/todo.html',
            styleUrls: ['components/todo/todo.css']
        }), 
        __metadata('design:paramtypes', [TodoService_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;