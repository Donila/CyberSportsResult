"use strict";
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var schema = new mongoose.Schema({
    _id: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: String,
    description: String,
    picture: String,
    game: { type: String, ref: 'Game' }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
