const mongoose = require('mongoose');

const hallsSchema = mongoose.Schema({
    id: { type: Number},
    typeWatch: {type: String},
    availableSits: {type: Number}
}, { versionKey: false });

const CinemaHalls = mongoose.model('cinemaHalls', hallsSchema);

module.exports = { CinemaHalls }
