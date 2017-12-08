const productController = require('../controllers/productController')

module.exports = (appConfig, express) => {

    const router = express.Router()

    router.route('/')
        .get(productController.index)

    router.route('/latestproduct')
        .get(productController.latestProduct)

    router.route('/hotproduct')
        .get(productController.hotProduct)

    router.route('/addproduct')
        .get(productController.addProduct)

    return router;
};