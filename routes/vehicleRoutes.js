const express = require('express');
const multer = require('multer');
const { createVehicle } = require('../controllers/vehicleController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/vehicles', authMiddleware, upload.array('pictures', 10), createVehicle);

module.exports = router;
