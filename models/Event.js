const mongoose = require('mongoose');
const { Schema } = mongoose;
const OnDemandCard = require('./cards/OnDemand');

const eventSchema = new Schema({
  title: { type: String, default: 'pizza night' },
  participantsTitle: { type: String, default: 'participants' },
  participantsNumber: { type: Number, default: 4 },
  OnDemandCard: OnDemandCard,
  status: [String] //show saving status/offline/not logged
});

mongoose.model('eventBudget', eventSchema);