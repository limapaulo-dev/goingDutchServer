const passport = require('passport');

//express app route handlers
module.exports = (app) => {
  //route handler google auth
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  //route handler google auth callback - passport validades the information returned by google
  app.get('/auth/google/callback', passport.authenticate('google'));

  //route handler simple test
  app.get('/test', (req, res) => {
    res.send({ stuff: 'yeah this is a lot of stuff' });
  });
};

