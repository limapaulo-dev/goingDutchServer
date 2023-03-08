module.exports = (req, res, next) => {
  //check if user is logged in
  if (!req.user.userPatron) {
    return res.status(403).send({ error: 'You are not a Patron' });
  }

  next();
};
