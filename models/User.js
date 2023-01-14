const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: {type: String, default: ""},
  userEmail: {type: String, default: ""},
  userPatreon: {type: Boolean, default: false}
});

mongoose.model('user', userSchema);
