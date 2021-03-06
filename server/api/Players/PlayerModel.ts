import * as mongoose from 'mongoose';

var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
    _id: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: String,
    nicknames: [String],
    description: String,
    picture: String,
    games: [{ type: ObjectId, ref: 'Game' }],
    teams: [{ team: { type: String, ref: 'Team' }, past: Boolean }]
});

export default schema;
