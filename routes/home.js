module.exports = (appConfig, express) => {

  const router = express.Router();

  router.get('/', function(req, res) {
    res.json({a: 111})
  });

  return router;

};
