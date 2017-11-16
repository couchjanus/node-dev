const mongoose = require('mongoose');
const config = require('../config');

// using promises
mongoose.Promise = global.Promise;

var uri = 'mongodb://user:pass@host:port/db';
mongodb.MongoClient.connect(uri, { server: { auto_reconnect: true } }, function (err, db) {
    /* adventure! */
});

mongoose.connect(process.env.MONGOLAB_URI, config.db.options)
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
