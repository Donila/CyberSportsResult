import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
    _id: {type: String, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    picture: {type: String, trim: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
