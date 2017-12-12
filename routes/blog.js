const blogController = require('../controllers/blogController')

module.exports = (appConfig, express) => {
    const router = express.Router();

    router.route('/post')
        .get(blogController.index);

    router.route('/post/addpost')
        .post(blogController.addPost);

    router.route('/post/page/:page')
        .get(blogController.postWithPages);

    router.route('/post/:postId')
        .delete(blogController.deletePost)
        .put(blogController.updatedPost);

    return router
}