"use strict";
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    _id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    picture: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
