const userController = require('../controllers/userController')

module.exports = (appConfig, express) => {

    const router = express.Router()

    router.route('/')
        .get(userController.index)

    router.route('/adduser')
        .post(userController.addUser)



    return router;

};