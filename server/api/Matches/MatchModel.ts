import * as mongoose from 'mongoose';

var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
    _id: { type: ObjectId, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    started: Date,
    finished: Date,
    opponents: [String],
    game: ObjectId,
    description: String,
    scores: [{ op: String, score: Number }],
    winner: ObjectId
});

export default schema;
