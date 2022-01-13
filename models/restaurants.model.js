const mongoose = require('mongoose');

const Restaurants = mongoose.model(
    "Restaurants",
    new mongoose.Schema({
        name: String,
        food: [
            {
                type: String, 
            }
        ],
        address: String,
        postalCode: String,
        city: String,
        country: String,
        localisation: [
            {
                coordinates : [
                    {
                        type: [Number],
                        required: true
                    }
                ],
                type: String,
                enum: ['Point'],
                required: true 
            }
        ],
        restaurantId: Number,
    })
)

module.exports = Restaurants;