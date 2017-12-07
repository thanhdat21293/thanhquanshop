const authenticateController = require('../controllers/authenticateController')

module.exports = (express) => {

    const router = express.Router();

    const home = require('./home')(express)
    router.use('/', home)

    const user = require('./user')(express)
    router.use('/user', user)

    const product = require('./product')(express)
    router.use('/product', product)

    router.route('/login')
        .post(authenticateController.login)

    router.route('/register')
        .post(authenticateController.register)

    return router
};