const mongoose = require('mongoose');
const { Schema } = mongoose;
const OnDemandCard = require('./cards/OnDemand');
const RecurringCard = require('./cards/Recurring');
const TimedCard = require('./cards/Timed');

const pageSchema = new Schema(
  {
    OnDemandCard: { type: [OnDemandCard], default: [{}] },
    RecurringCard: { type: [RecurringCard], default: [{}] },
    TimedCard: { type: [TimedCard], default: [{}] },
  },
  { timestamps: true }
);

module.exports = pageSchema;
