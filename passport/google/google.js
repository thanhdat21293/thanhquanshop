const User = require('../../models/userModel')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//https://console.developers.google.com/projectselector/apis/library

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
            clientID: '64980042356-kn2mqkp84a405aim3ufs8rvd0vragm1q.apps.googleusercontent.com',
            clientSecret: '0GEJOVWD2KGN6ty1yCzVe2fa',
            callbackURL: "http://localhost:3000/api/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            let email = profile.emails[0].value;
            let checkUser = await User.find({email: email});
                if(checkUser.length > 0){
                    return done(null, checkUser[0]);
                }else {
                    let register = new User({
                                username: '',
                                password: '',
                                email: email,
                                role: ['member']
                            })
                    let userRegister = await register.save();
                    return done(null, userRegister);
                }
        }
    ));
}