const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config')
const mongoose = require('mongoose')

const passport = require('passport');
const flash = require("connect-flash");
const session = require('express-session');
const appConfig = (json) => {
    let jsonArr = json.split('.')
    if(jsonArr.length > 0) {
        let url = config;
        jsonArr.map(item => {
            url = url[item]
        })
        return url
    }else {
        return config[jsonArr[0]]
    }
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose.connect(`mongodb://${ appConfig('mongoConfig.host') }:${ appConfig('mongoConfig.port') }/${ appConfig('mongoConfig.data') }`, {useMongoClient: true})
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy,
    ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: appConfig('jwt.secretOrKey'),
    issuer: appConfig('jwt.issuer')
}

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
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
require('./passport/local/local')(appConfig, passport)


app.use('/api/', require('./routes/routes')(appConfig, express, passport));


const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});