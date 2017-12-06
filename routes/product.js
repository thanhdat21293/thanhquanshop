const productController = require('../controllers/productController')

module.exports = (express) => {

    const router = express.Router()

    router.route('/')
        .get(productController.index)

    router.route('/latestproduct')
        .get(productController.latestProduct)

    router.route('/addproduct')
        .get(productController.addProduct)

    return router;
};