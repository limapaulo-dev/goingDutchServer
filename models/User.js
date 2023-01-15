const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {type: String, default: ""},
  userEmail: {type: String, default: ""},
  userPatron: {type: Boolean, default: false}
});

mongoose.model('user', userSchema);
