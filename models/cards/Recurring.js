const mongoose = require('mongoose');
const { Schema } = mongoose;

const detailedItem = new Schema({
  itemName: { type: String, default: '' },
  itemCost: { type: Number, default: 0 },
});

const expense = new Schema({
  expenseName: { type: String, default: '' },
  expenseCost: { type: Number, default: 0 },
  doDetail: { type: Boolean, default: true },
  detailedList: { type: [detailedItem], default: [{}] },
});

const recurringCard = new Schema({
  cardName: { type: String, default: 'recurring' },
  expenses: { type: [expense], default: [{}] },
});

// mongoose.model('recurringCard', recurringCard);
module.exports = recurringCard;
