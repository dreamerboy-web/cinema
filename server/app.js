const express = require('express'), exhbs = require('express-handlebars'), path = require('path');
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/cinema";

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'static')));




const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('hello')
})


app.use('/api/users', require('./routes/user'));
app.use('/api', require('./routes/rest'));
app.use('/api/films', require('./routes/SoonFilms'));
app.use('/api', require('./routes/films'));
app.use('/api', require('./routes/cinemaHalls'));
app.use('/api', require('./routes/session'));
app.use('/api/Ticket', require('./routes/soldTicket'));

app.listen(3000, () => {
    console.log(3000);
});
