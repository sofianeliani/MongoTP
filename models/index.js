const mongoose = require('mongoose').set("debug", true);

// afin d'utiliser les promesses ES6 Natives
mongoose.Promise = global.Promise;

// Sert d'objet pour communiquer avec la base
const db = {};
db.mongoose = mongoose;

db.restaurants = require("./restaurants.model");
db.clients = require("./clients.model");

// Export du module db pour pouvoir l'appeler
module.exports = db;