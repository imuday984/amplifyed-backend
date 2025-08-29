const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Jab koi is route pe POST request maarega, toh submitContactForm function chalega
// Full rasta banega: /api/contact/
router.post('/', contactController.submitContactForm);

module.exports = router;