const User = require('../../models/userModel')
const FacebookStrategy = require('passport-facebook').Strategy;

// https://developers.facebook.com/apps/724038607649657/dashboard/

module.exports = function(passport) {
    passport.use('facebook', new FacebookStrategy({
            clientID: '724038607649657',
            clientSecret: 'ee909a7ea7210e8c3fa3aeb3716366e5',
            callbackURL: "http://localhost:3000/api/auth/facebook/callback",
            profileFields: ['id', 'emails', 'name']
        },
        async (accessToken, refreshToken, profile, done) => {
                let user = profile._json;

                let checkUser = await User.find({
                    $or: [
                        {
                            username: user.email
                        },
                        {
                            email: user.email
                        }
                    ]
                });
                if(checkUser.length > 0){
                    return done(null, checkUser[0]);
                }else {
                    let register = new User({
                                username: '',
                                password: '',
                                email: user.email,
                                role: ['member']
                            })
                    let userRegister = await register.save();
                    return done(null, userRegister);
                }
        }
    ));
}