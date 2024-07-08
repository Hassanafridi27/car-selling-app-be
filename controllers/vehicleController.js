const Vehicle = require('../models/Vehicle');

const createVehicle = async (req, res) => {
  try {
    const { model, price, phone, city } = req.body;
    const pictures = req.files.map(file => `/uploads/${file.filename}`);
    const vehicle = new Vehicle({ model, price, phone, city, pictures, user: req.userId });

    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: 'Error saving vehicle' });
  }
};

module.exports = { createVehicle };
