const db = require('../models');
const Restaurants = db.restaurants;

exports.getRestaurantById =  async function getRestaurant(req, res, next) {
  let restaurant;
  try {
    restaurant = await Restaurants.findById(req.params.id);
    if (restaurant == null) {
      return res.status(404).json({ message: "Cannot find restaurant" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.restaurant = restaurant;
  next();
};