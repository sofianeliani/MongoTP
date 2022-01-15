const db = require('../models');
const Clients = db.clients;

exports.getClientById =  async function getClient(req, res, next) {
  let clients;
  try {
    clients = await Clients.findById(req.params.id);
    if (clients == null) {
      return res.status(404).json({ message: "Cannot find client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.clients = clients;
  next();
};