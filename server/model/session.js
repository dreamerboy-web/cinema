const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { CinemaHalls } = require('./cinemaHalls');
const { SoldTickets } = require('./soldTicket');


const sessionSchema = mongoose.Schema({
    id: {type: Number},
    data: {type: Date},
    hall: {
        id: { type: Number},
        typeWatch: {type: String},
        availableSits: {type: Number}
    },
    soldTickets: [{
        type: Schema.Types.ObjectId , ref: 'soldTickets'
    }],

}, { versionKey: false });

const Session = mongoose.model('sessions', sessionSchema);

module.exports = { Session }
