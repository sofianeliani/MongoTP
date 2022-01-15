const cors = require('cors');
const Clients = require('../models/clients.model');

module.exports = function(app) {

    app.options("*", cors());

    app.get("/api/clients", async (req, res) => {
        const clients = await Clients.find();
        
        res.json(clients);
    });
}