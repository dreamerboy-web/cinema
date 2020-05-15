const mongoose = require('mongoose');

const restSchema = mongoose.Schema({
    name: {
        type: String,
    },
    data: {
        type: Date
    },
    end: {
        type: Date
    },
    id: {
        type: Number
    },
    img: {
        type: String
    }
}, { versionKey: false });

const Soon = mongoose.model('soons', restSchema);

module.exports = { Soon }
