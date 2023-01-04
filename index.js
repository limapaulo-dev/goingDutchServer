const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
        console.log('done', done);
    }
  )
);


//route handler '/' none - test
app.get('/', (req, res) => {
    res.send({hi:'hey you!'})
});

//route handler simple test
app.get('/test', (req, res) => {
  res.send({stuff:'yeah this is a lot of stuff'})
});

//route handler google auth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

//route handler google auth callback - passport validades the information returned by google
app.get('/auth/google/callback', passport.authenticate('google'));

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
