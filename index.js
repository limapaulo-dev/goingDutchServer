const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Budget');
require('./services/passport');

//connect MongoDB
mongoose.connect(keys.mongoURI);

// express app
const app = express();

//body-parser - parses post requests into json data
app.use(bodyParser.json());

//cookie session library
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//authRoutes - shorthand
require('./routes/authRoutes')(app);
require('./routes/stripeRoutes')(app);
require('./routes/budgetRoutes')(app);

//check if we are in thr production env
if (process.env.NODE_ENV == 'production') {
  //express will provide production assets
  app.use(express.static('client/build'));
  
  //express will provide the index.html
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
