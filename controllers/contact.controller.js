const Contact = require('../models/contact.model');

exports.submitContactForm = async (req, res) => {
    try {
        // Step 1: Frontend se naya data lene ka
        const { schoolName, name, email, phone, message } = req.body;

        // Step 2: Naye fields ko check karne ka
        if (!schoolName || !name || !email || !phone || !message) {
            return res.status(400).json({ message: "Mamu, saari fields bharna jaroori hai." });
        }

        // Step 3: Naya contact document banane ka
        const newContact = new Contact({
            schoolName,
            name,
            email,
            phone,
            message
        });

        // Step 4: Database mein save karne ka
        const savedContact = await newContact.save();

        // Step 5: Frontend ko success message bhejne ka
        res.status(201).json({ 
            message: "Mamu, tera message mil gaya. Apun jaldi call karega.",
            data: savedContact 
        });

    } catch (error) {
        // Agar kuch L ho gaya, toh error message bhejne ka
        res.status(500).json({ message: "Server mein kuch raada ho gaya.", error: error.message });
    }
};