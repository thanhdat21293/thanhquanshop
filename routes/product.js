

module.exports = (appConfig, express) => {

    const productController = require('../controllers/productController')
    const productCategoryController = require('../controllers/productCategoryController')
    const router = express.Router()

    router.route('/')
        .get(productController.index)

    router.route('/latestproduct')
        .get(productController.latestProduct)

    router.route('/hotproduct')
        .get(productController.hotProduct)

    router.route('/addproduct')
        .get(productController.addProduct)

    router.route('/addcategory')
        .get(productCategoryController.addCategories)

    router.route('/productbycat/nochild/:category_id')
        .get(productController.productByCatNoChild)

    router.route('/productbycat/andchild/:category_id')
        .get(productController.productByCatAndChild)

    router.route('/productbycat/andchild/:category_id/page/:page')
        .get(productController.productByCatAndChild)
    router.route('/checktocart')
        .post(productController.checktoCart)

    return router;
};