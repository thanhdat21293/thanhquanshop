const userController = require('../controllers/userController')

module.exports = (express) => {

    const router = express.Router()

    router.route('/')
        .get(userController.index)

    router.route('/adduser')
        .get(userController.addUser)

    router.route('/login')
        .post(userController.login)

    router.route('/register')
        .post(userController.register)

    return router;
};