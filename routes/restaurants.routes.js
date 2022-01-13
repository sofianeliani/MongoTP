const cors = require('cors');
const Restaurants = require('../models/restaurants.model');

module.exports = function(app) {

    app.options("*", cors());

    app.get("/api/restaurants", async (req, res) => {
        const restaurants = await Restaurants.find();
        
        res.json(restaurants);
    });
}