const mongoose = require('mongoose');

const restSchema = mongoose.Schema({
    name: {
        type: String,
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    info: {
        type: String
    }
}, { versionKey: false });

const Rest = mongoose.model('rests', restSchema);

module.exports = { Rest }
