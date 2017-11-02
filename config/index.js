module.exports = {
    db: {
        uri: process.env.DB_CONNECTION + '/' +  process.env.DB_NAME,
        options:{
                  "useMongoClient": true,
                  "keepAlive": 300000,
                  "connectTimeoutMS": 30000
              }
    },
    email: {
        apiKey: process.env.SENDGRID_API_KEY,
        sendFrom: process.env.SEND_EMAILS_FROM
    },
    login: {
        maxAttempts: process.env.MAX_LOGIN_ATTEMPTS,
        lockoutHours: process.env.LOGIN_ATTEMPTS_LOCKOUT_HOURS * 60 * 60 * 1000,
        minimumPasswordLength: process.env.MINIMUM_PASSWORD_LENGTH,
        passwordResetTimeLimitInHours: process.env.PASSWORD_RESET_TIME_LIMIT_IN_HOURS,
        passwordHashRounds: parseInt(process.env.PASSWORD_HASH_ROUNDS, 10)
    },
    server: {
        timezone: process.env.TZ
    },
    session: {
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET
    }
};
