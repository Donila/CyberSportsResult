"use strict";
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var schema = new mongoose.Schema({
    _id: { type: ObjectId, required: true, trim: true },
    played: { type: String, ref: 'Player' },
    team: { type: String, ref: 'Team' },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
