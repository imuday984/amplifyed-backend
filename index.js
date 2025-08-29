const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const contactRoutes = require('./routes/contact.route');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: 'https://amplifyed-co.vercel.app', // Sirf is URL se request aane de
    optionsSuccessStatus: 200 
};
app.use(cors(corsOptions)); // Naya config daala
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database se connection jud gaya mama!");
    } catch (error) {
        console.log("Database connection me raada ho gaya:", error.message);
        process.exit(1);
    }
};

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World! Server is running.');
});

app.use('/api/contact', contactRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server chalu ho gaya hai port ${PORT} pe, public! Ab bouncer ki bhi sunega.`);
});