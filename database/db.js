const mongoose = require('mongoose');
const config = require('../config');

// using promises
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://couchjanus:Bdfyghbdtn1@ds111066.mlab.com:11066/coolsite", config.db.options)
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('connection succesful');
    // require('../middleware/authorization').init();
    })
  .catch((err) => {
    /** handle initial connection error */
    console.error(err);
    process.exit(1);
    });

module.exports = mongoose;
