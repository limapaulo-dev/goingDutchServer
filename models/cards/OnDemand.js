const mongoose = require('mongoose');
const { Schema } = mongoose;

const onDemandExpense = new Schema(
  {
    expenseName: { type: String, default: '' },
    expenseCost: { type: Number, default: 0 },
    copyNextMonth: { type: Boolean, default: false },
  }
);

const onDemandCard = new Schema({
  cardName: { type: String, default: 'on demand' },
  expenses: { type: [onDemandExpense], default: [{}] },
});

// mongoose.model('onDemandCard', onDemandCard);
module.exports = onDemandCard;
