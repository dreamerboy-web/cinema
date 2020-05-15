const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: String,

    }
}, { versionKey: false });

const User = mongoose.model('users', userSchema);

module.exports = { User }
