const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)

//stripe routes
module.exports = (app) => {
  //stripe api
  app.post('/api/stripe', (req, res) => {
    stripe.charges.create({
      amount: 100,
      currency: 'usd',
      description: "$1.00 to buy a jr dev a much needed cup of coffee",
      source: req.body.id
    })
  });
};

