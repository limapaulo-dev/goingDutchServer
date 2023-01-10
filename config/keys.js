//keys handler
if (process.env.NODE_ENV === 'production'){
  //returns prod keys
  module.exports = require('/prod');
} else {
  //returns dev keys
  module.exports = require('/dev');
}

