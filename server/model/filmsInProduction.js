const mongoose = require('mongoose');

const Genre = mongoose.Schema({ nameOfGenre: {type: String} });

const filmsInProduction = mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    genre: [Genre],
    poster: {type: String},
}, { versionKey: false });

const Film = mongoose.model('filmsOnScreens', filmsInProduction);

module.exports = { Film }
