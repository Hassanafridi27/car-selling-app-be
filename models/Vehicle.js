const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  model: { type: String, required: true, minlength: 3 },
  price: { type: Number, required: true },
  phone: { type: String, required: true, minlength: 11, maxlength: 11 },
  city: { type: String, required: true },
  pictures: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
