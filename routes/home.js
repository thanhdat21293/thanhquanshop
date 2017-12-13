module.exports = (appConfig, express) => {
  const productController = require('../controllers/productController')

  const router = express.Router();

  router.get('/', function(req, res) {
    res.json({a: 111})
  });
  router.route('/dien-thoai/:id')
    .get(productController.detail)

  return router;

};
