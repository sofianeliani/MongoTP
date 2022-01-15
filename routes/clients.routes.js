const cors = require('cors');
const { getClientById } = require('../controller/clients.controller');
const Clients = require('../models/clients.model');

module.exports = function(app) {

    app.options("*", cors());

    app.get("/api/clients", async (req, res) => {
        const clients = await Clients.find();
        
        res.json(clients);
    });

    app.get("/api/clients/:id", getClientById, async (req, res) => {
        res.json(res.clients);        
    });
    
    
    var aggr = { type : "Point", coordinates : [ 42.944787, 4.904031 ]}

    var pipeline = [
        {
            $geoNear : {
                near: aggr,
                distanceField: "distance.estimation",
                query : { "localisation.city" : "Lyon"},
            }
        },
        {
            $match : {
                "localisation.city" : "Lyon"
            }
        }
    ]

    app.get("/api/clientsvisitlyon", async (req, res) => {
        const clients = await Clients.aggregate(pipeline);

        res.json(clients);
        
    });
}