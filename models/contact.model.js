const mongoose = require('mongoose');

// Database ka naya blueprint
const contactSchema = new mongoose.Schema(
    {
        // "School Name" ke liye
        schoolName: {
            type: String,
            required: true,
            trim: true
        },
        // "Your Name" ke liye
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        // "Phone" ke liye
        phone: {
            type: String, // String rakhenge kyunki isme '+91' jaisa text ho sakta hai
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;