const mongoose = require('mongoose');

const Clients = mongoose.model(
    "Clients",
    new mongoose.Schema({
        firstname: String,
        lastname: String,
        email: String,
        interest: [
            {
                type: String, 
            }
        ],
        age: Number,
        phoneNumber: String,
        localisation: [
            {   
                address: String,
                postalCode: String,
                city: String,
                country: String,
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
        fidelityPoint: Number,
        clientId: Number,
    })
)

module.exports = Clients;