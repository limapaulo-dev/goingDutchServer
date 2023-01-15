const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      //passport google auth properties
      // console.log('access token', accessToken);
      // console.log('refresh token', refreshToken);
      console.log('profile', profile);
      //check if existingUser already have a email on db
      const existingUser = await User.findOne({ userEmail: profile.emails[0].value });

      if (existingUser) {
        //user exist
        console.log('user already exists');
        console.log(existingUser);
        if (existingUser.googleId !== '') {
          console.log('user already have a googleId');
        } else {
          console.log('adding googleId');
          existingUser.googleId = profile.id;
          await existingUser.save();
        }
        done(null, existingUser);
      } else {
        //user do not exist
        console.log('new user created');
        const user = await new User({ googleId: profile.id, userEmail: profile.emails[0].value }).save();
        console.log(user);
        done(null, user);
      }
    }
  )
);
