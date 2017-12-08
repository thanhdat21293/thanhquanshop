module.exports = (appConfig, express, passport) => {

    const router = express.Router();

    const home = require('./home')(appConfig, express)
    router.use('/', home)

    const authenticate = require('./authenticate')(appConfig, express, passport)
    router.use('/', authenticate)

    const user = require('./user')(appConfig, express)
    router.use('/user', user)

    const product = require('./product')(appConfig, express)
    router.use('/product', product)

    return router
};