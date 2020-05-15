const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Film} = require('./filmsInProduction');
const {CinemaHalls} = require('./cinemaHalls');

const soldTicketsSchema = mongoose.Schema({
    sessionId: {type: Object},
    id: {
        type: Number,
    },
    watcherName: {type: String},
    watcherEmail: {type: String},
    typeTicket: {
        type: String
    },
    filmType: {type: String},
    dateSession: {type: String},
    dateTimeBy: {
        type: Date
    },
    film: {type: String},
    hall: {type: Number},
    prise: {type: Number}
}, { versionKey: false });

const SoldTickets = mongoose.model('soldTickets', soldTicketsSchema);

module.exports = { SoldTickets }
