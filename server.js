const express = require('express');
const path  = require('path');
const app = express();

const bodyParser = require('body-parser');
const mongo = require('mongoose');

// const db = mongo.connect('mongodb://localhost:27017/test', (err, response)=>{
//   if(err) console.log(err);
//   else console.log(`Connect ${db}, ${response}`)
// });

app.use(bodyParser);
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', (req, res)=>{
  res.send('Hello');
});

app.listen(3000, () => {
  console.log(3000)
});

