const mongoose = require('mongoose');
const { Schema } = mongoose;

const timedExpense = new Schema({
  expenseName: { type: String, default: '' },
  expenseCost: { type: Number, default: 0 },
  remaining: { type: Number, default: 0 },
});

const timedCard = new Schema({
  cardName: { type: String, default: 'timed' },
  expenses: { type: [timedExpense], default: [{}] },
});

// mongoose.model('timedCard', timedCard);
module.exports = timedCard;
