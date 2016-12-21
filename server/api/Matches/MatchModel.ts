import * as mongoose from 'mongoose';

var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    started: Date,
    finished: Date,
    players: [{ player: String, score: Number }],
    teams: [{ team: String, score: Number }],
    detailedScore: [{team: String, player: String, gameNumber: Number, score: Number}],
    game: ObjectId,
    description: String,
    winner: String
});

export default schema;
