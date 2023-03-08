const mongoose = require('mongoose');
const Budget = mongoose.model('budget');
// const BudgetPage = mongoose.model('budgetPage');

const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/budget', requireLogin, async (req, res) => {
    const budget = new Budget({
      _user: req.user.id,
      //   status: ['Last saved at: ' + new Date().toLocaleString()],
    });

    try {
      await budget.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/budgetSignificantOne', requireLogin, async (req, res) => {
    const budget = new Budget({
      _user: req.user.id,
      //pass in template values
      //   status: ['Last saved at: ' + new Date().toLocaleString()],
    });

    try {
        await budget.save();
      } catch (err) {
        res.status(422).send(err);
      }
    });
};
