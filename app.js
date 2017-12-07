const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${ config.mongoConfig.host }:${ config.mongoConfig.port }/${ config.mongoConfig.data }`, {useMongoClient: true})

const passport = require('passport');
const flash = require("connect-flash");
const session = require('express-session');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy,
    ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'secret',
    issuer: 'localhost'
}

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    console.log('payload received111', jwt_payload);
    if (jwt_payload) {
        next(null, jwt_payload);
    } else {
        next(null, false);
    }
});

app.use(session({
    cookie: {maxAge: (3600 * 1000)},
    unser: 'destroy',
    secret: 'JackCodeHammer',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))
passport.use(strategy);
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./passport/passport')(passport)
require('./passport/facebook/facebook')(passport)
require('./passport/google/google')(passport)
require('./passport/local/local')(passport)


app.use('/api/', require('./routes/routes')(express, passport));


const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});