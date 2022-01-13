const mongoose = require('mongoose');

// afin d'utiliser les promesses ES6 Natives
mongoose.Promise = global.Promise;

// Sert d'objet pour communiquer avec la base
const db = {};
db.mongoose = mongoose;
db.restaurants = require("./restaurants.model");

// Export du module db pour pouvoir l'appeler
module.exports = db;