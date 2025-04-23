const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import connectDB from './utils/db.js';


require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();


// Set up the server
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes


// run the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
