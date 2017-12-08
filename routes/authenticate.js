const authenticateController = require('../controllers/authenticateController')

module.exports = (appConfig, express, passport) => {

    const jwtAuthenticate = () => passport.authenticate('jwt', {session: false});

    const router = express.Router();

    router.route('/register')
        .post(authenticateController.register)

    router.route('/login')
        .get(authenticateController.login)
        .post(passport.authenticate('local', {
                                            successRedirect: '/api/login',
                                            failureRedirect: '/api/login',
                                            failureFlash: true
                                        }))

    router.route('/auth/facebook/callback')
        .get(passport.authenticate('facebook', {
                                            failureRedirect: '/login',
                                            failureFlash: true
                                        }), function(req, res) {
                                            res.redirect('/private');
                                        })

    router.route('/login/facebook')
        .get(passport.authenticate('facebook'))

    router.route('/login/google')
        .get(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }))

    router.route('/auth/google/callback')
        .get(passport.authenticate('google', {
                                            successRedirect: '/',
                                            failureRedirect: '/login'
                                        }))

    return router
};