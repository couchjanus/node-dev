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
        uri: process.env.PROD_MONGODB,
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

    // linkedin: {
    //     clientID: process.env.LINKEDIN_CLIENT_ID,
    //     clientSecret: process.env.LINKEDIN_CLIENT_ID,
    //     callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    //   },

    twitter: {
      consumerKey: "KjQTUCheXVlGfD0dNi7CiR11T", //process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: "IwVtKmFLjavv9doWodA3ShwPm2Qe1KnTkM4k7hxAaGM4A34Vxp", //process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
      },

    facebook: {
      clientID: "896605267054808",//process.env.FACEBOOK_CLIENT_ID,
      clientSecret: "28f6a7d2842d5f9ba19e449131694902",//process.env.FACEBOOK_CLIENT_ID,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
    google: {
      clientID: "262575533252-sviar9bm39g5c4dnlb6erkpvjme4hit2.apps.googleusercontent.com",//process.env.GOOGLE_CLIENT_ID,
      clientSecret: "1K1fRgOmy1WJK4_Z8ycGRyuz",//process.env.GOOGLE_CLIENT_ID,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
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
