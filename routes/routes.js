module.exports = (express) => {

    const router = express.Router();

    const home = require('./home')(express)
    router.use('/', home)

    const user = require('./user')(express)
    router.use('/user', user)

    return router
};