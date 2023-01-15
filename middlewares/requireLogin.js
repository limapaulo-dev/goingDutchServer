module.exports = (req, res, next) => {
  //check if user is logged in
  if (!req.user) {
    return res.status(401).send({ error: 'This action requires the user to be logged in!' });
  }

  next();
};
