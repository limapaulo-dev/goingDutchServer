const mongoose = require('mongoose');
const { Schema } = mongoose;
const BudgetPageSchema = require('./BudgetPage');

const budgetSchema = new Schema(
  {
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, default: 'blank budget template' },
    participantsTitle: { type: String, default: 'participants' },
    participantsNumber: { type: Number, default: 2 },
    participantsNames: { type: [String], default: ['participant 1', 'participant 2'] },
    // status: [String], //show saving status/offline/not logged
    budgetPages: { type: [BudgetPageSchema], default: [{}] },
  },
  { timestamps: true }
);

mongoose.model('budget', budgetSchema);
