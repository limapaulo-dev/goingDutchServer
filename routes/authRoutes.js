const passport = require('passport');

//express app route handlers
module.exports = (app) => {
  //route handler google auth
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  //route handler google auth callback - passport validades the information returned by google
  app.get(
    '/auth/google/callback', 
    passport.authenticate('google'), 
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  //logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

    // inspect requests
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
