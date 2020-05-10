const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/test";
db.tutorials = require("./testModel")(mongoose);

module.exports = db;
