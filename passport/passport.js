
module.exports = function (passport) {
    //Dữ liệu ở serializeUser trả về và lưu vào session.passport
    passport.serializeUser(function (user, done) {
        // console.log('serializeUser', user)
        done(null, user);
    });

    //Dữ liệu ở deserializeUser trả về và lưu vào req.user
    passport.deserializeUser(function (user, done) {
        // console.log('deserializeUser', user)
        done(null, user);
    });
}