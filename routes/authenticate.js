const authenticateController = require('../controllers/authenticateController')

module.exports = (appConfig, express, passport) => {

    const jwtAuthenticate = () => passport.authenticate('jwt', {session: false});

    const router = express.Router();

    router.route('/register')
        .post(authenticateController.register)

    router.route('/login')
        .post(authenticateController.login)

    router.route('/login/facebook')
        .post(authenticateController.facebook)

    router.route('/login/google')
        .get(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }))

    router.route('/auth/google/callback')
        .get(passport.authenticate('google', {
                                            successRedirect: '/',
                                            failureRedirect: '/login'
                                        }))

    return router
};