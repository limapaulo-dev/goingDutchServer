const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');

//connect MongoDB
mongoose.connect(keys.mongoURI);

// express app
const app = express();

//authRoutes
authRoutes(app);

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
