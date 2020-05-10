const express = require('express');
const app = express();
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:4200"
};

const bodyParser = require('body-parser');
const mongoose = require("mongoose");

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const {db} = require('./models/index')

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// const db = mongo.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}, (err, response) => {
//   if (err) console.log(err);
//   else console.log(`Connect ${db}`)
//   console.log(response);
// })
//
//
// app.use(bodyParser);
// app.use(bodyParser.json({}));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
//
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE');
//   res.setHeader("Access-Control-Allow-Headers", " X-Requested-With, Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });
//
// const Schema = mongo.Schema;
//
// const TestSchema = new Schema({
//     name: { type: String},
//     age: {  type: String},
//   }, {versionKey: false});
//
// const model = mongo.model('users', TestSchema, 'users');
//
// app.get('/api/getUsers', (req, res) => {
//   model.find({}, (err, data) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send(data);
//     }
//   })
// });

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/test";
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, client){
//   const db = client.db("test");
//   const collection = db.collection("employees");
//   let employee = {name: "Олексій Прокопенко", phone_numer: "+380668888888"};
//   collection.insertOne(employee, function(err, exodus){
//     if(err){
//       return console.log(err);
//     }
//     console.log(exodus);
//
//   });
// });

app.get('/', (req, res) => {
  res.end('Hello');
});

// const mongo = require('mongoose');
//
// const Schema = mongo.Schema;
//
// const TestSchema = new Schema(
//   {
//     name: { type: String},
//     age: {  type: String}
//   }, {versiOnKey: false}
// );
//
// let model = mongo.model('users', TestSchema, 'users');


app.get('/getUsers', (req, res) => {
  model.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data);
    }
  })
});

require("./router/router")(app);

app.listen(3000, () => {
  console.log(3000)
});
