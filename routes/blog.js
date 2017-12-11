const blogController = require('../controllers/blogController')

module.exports = (appConfig, express) => {
    const router = express.Router();

    router.route('/')
        .get(blogController.index);

    router.route('/addpost')
        .post(blogController.addPost);

    return router
}