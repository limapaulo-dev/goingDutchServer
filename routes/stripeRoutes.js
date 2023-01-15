const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const mongoose = require('mongoose');

//stripe routes
module.exports = (app) => {
  const User = mongoose.model('user');
  //stripe api
  app.post('/api/stripe', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 100,
      currency: 'usd',
      description: '$1.00 to buy a jr dev a much needed cup of coffee',
      source: req.body.id,
    });

    console.log('this is the body: ', req.body);
    console.log('this is the card details: ', req.body.card);
    console.log('this is the card name: ', req.body.card.name);
    console.log('this is the id: ', req.body.id);

    console.log('is the user logged: ', req.user);

    //check if user is logged in
    if (req.user !== undefined) {
      console.log('user is logged in');
      req.user.userPatron = true;
      const user = await req.user.save();
    } else {
      //check if user already exist
      const existingUser = await User.findOne({ userEmail: req.body.card.name });

      if (existingUser) {
        //user exist
        console.log('user already exists');
        console.log(existingUser);
        console.log('adding patron status');
        existingUser({ userPatron: true }).save();
      } else {
        //user do not exist
        console.log('new user created with patron status');
        const user = await new User({ userEmail: req.body.card.name, userPatron: true }).save();
      }
    }
  });
};
