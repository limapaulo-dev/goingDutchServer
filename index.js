const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const passport = require('passport');
require('./models/User');
require('./services/passport');

//connect MongoDB
mongoose.connect(keys.mongoURI);

// express app
const app = express();

//cookie session library
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//authRoutes
authRoutes(app);

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
