module.exports = {

    // db: {
    //     uri: process.env.DB_CONNECTION + '/' +  process.env.DB_NAME,
    //     options:{
    //              useMongoClient: true,
    //              autoIndex: false, // Don't build indexes
    //              reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    //              reconnectInterval: 500, // Reconnect every 500ms
    //              poolSize: 10, // Maintain up to 10 socket connections
    //              // If not connected, return errors immediately rather than waiting for reconnect
    //              bufferMaxEntries: 0,
    //              promiseLibrary: global.Promise,
    //              autoReconnect: true,
    //           },
    //     aclCollectionPrefix: process.env.ACL_COLLECTION_PREFIX
    // },

    db: {
        uri: "mongodb://couchjanus:Bdfyghbdtn1@ds111066.mlab.com:11066",
        options:{
                 useMongoClient: true,
                 autoIndex: false, // Don't build indexes
                 reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
                 reconnectInterval: 500, // Reconnect every 500ms
                 poolSize: 10, // Maintain up to 10 socket connections
                 // If not connected, return errors immediately rather than waiting for reconnect
                 bufferMaxEntries: 0,
                 promiseLibrary: global.Promise,
                 autoReconnect: true,
              },
        aclCollectionPrefix:"acl_"
         // process.env.ACL_COLLECTION_PREFIX
    },
    email: {
        apiKey: "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",//process.env.SENDGRID_API_KEY,
        sendFrom: "couchjanus@gmail.com", //process.env.SEND_EMAILS_FROM
    },
    login: {
        maxAttempts: 3,// process.env.MAX_LOGIN_ATTEMPTS,
        lockoutHours: 60 * 60 * 1000, //process.env.LOGIN_ATTEMPTS_LOCKOUT_HOURS * 60 * 60 * 1000,
        minimumPasswordLength: 6, //process.env.MINIMUM_PASSWORD_LENGTH,
        passwordResetTimeLimitInHours:1, //process.env.PASSWORD_RESET_TIME_LIMIT_IN_HOURS,
        passwordHashRounds:1, //parseInt(process.env.PASSWORD_HASH_ROUNDS, 10)
    },
    server: {
        timezone: "Europe/Kiev" //process.env.TZ
    },
    session: {
        name: "collsite", //process.env.SESSION_NAME,
        secret: "supersecret"//process.env.SESSION_SECRET
    },

    // github: {
    //     clientID: process.env.GITHUB_CLIENT_ID,
    //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
    //     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    //   },
    //
    // linkedin: {
    //     clientID: process.env.LINKEDIN_CLIENT_ID,
    //     clientSecret: process.env.LINKEDIN_CLIENT_ID,
    //     callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    //   },
    //
    // twitter: {
    //   consumerKey: process.env.TWITTER_CONSUMER_KEY,
    //   consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    //   callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    //   },
    //
    // facebook: {
    //   clientID: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_ID,
    //   callbackURL: "http://localhost:3000/auth/facebook/callback"
    //   },
    // google: {
    //   clientID: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_ID,
    //   callbackURL: "http://localhost:3000/auth/facebook/callback"
    //   },
    transport: {
      smtpHost: "smtp.gmail.com", //process.env.SMTP_HOST,
      smtpPort: 465, //process.env.SMTP_PORT,
      smtpSecure: true,
      smtpUser: "janusnic@gmail.com", //process.env.SMTP_USER,
      smtpPass: "egpifjiaqkndnisq", //process.env.SMTP_PASSWORD
    },

    // SMTP_HOST = smtp.gmail.com
    // SMTP_PORT = 465
    // SMTP_USER = janusnic@gmail.com
    // SMTP_PASSWORD = egpifjiaqkndnisq


    pusher: {
      appId: "430057",//process.env.PUSHER_ID,
      key: "1aae17139b6f62752b02",//process.env.PUSHER_KEY,
      secret: "e5b2eb185327789a9405"//process.env.PUSHER_SECRET,
    },
};
