const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('../routes/auth'); // IMPORT THE ROUTES
require('dotenv').config();

// Middleware
// Allow any origin to connect (simplest fix for local development)
app.use(cors());
app.use(express.json());

// DB Connection (Keep your existing logic here if you changed it, but ensure this connects)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB Error:", err));

// USE THE AUTH ROUTES
app.use('/api/auth', authRoute); 

app.get("/", (req, res) => {
    res.json("CampusRide Backend is Live!");
});

module.exports = app;