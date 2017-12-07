module.exports = (express, passport) => {

    const router = express.Router();

    const home = require('./home')(express)
    router.use('/', home)

    const authenticate = require('./authenticate')(express, passport)
    router.use('/', authenticate)

    const user = require('./user')(express)
    router.use('/user', user)

    const product = require('./product')(express)
    router.use('/product', product)

    return router
};