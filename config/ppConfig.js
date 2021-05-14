const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const db = require('../models'); //database

const STRATEGY = new LocalStrategy({
    usernameField: 'email',         // looks for an email field as the username
    passwordField: 'password'       // looks for an password field as the password
    }, async (email, password, cb) => {
        try {
            const user = await db.user.findOne({
                where: { email }
            });
            if (!user || !user.validPassword(password)) { 
                cb(null, false); // if no user or invalid password, return false
            } else {
                cb(null, user);
            }
        } catch (err) {
            console.log('--- Error ---');
            console.log(err);
        }
});

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
    try {
        const user = await db.user.findByPk(id);

        if (user) {
            cb(null, user);
        }

    } catch (error) {
        console.log('--- Yo, there is an error below ---');
        console.log(error);
    }
});

passport.use(STRATEGY);

module.exports = passport;