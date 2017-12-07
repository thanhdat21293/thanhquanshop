const User = require('../../models/userModel')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';


module.exports = function(passport){
    passport.use(new LocalStrategy(
        async function (username, password, done) {

            let usernameRegex = /^[a-zA-Z0-9@._-]+$/;
            let passwordRegex = /^[a-zA-Z0-9~!@#$%^&*().,?=-]+$/;
            if (!username || !password) {
                return done(null, false, {message: 'Không được để trống.'});
            } else if (!usernameRegex.test(username)) {
                return done(null, false, {message: 'Tên đăng nhập không hợp lệ.'});
            } else if (!passwordRegex.test(password)) {
                return done(null, false, {message: 'Mật khẩu không hợp lệ.'});
            } else {
                let checkUser = await User.find({ username });
                if (checkUser.length > 0) {

                    if (bcrypt.compareSync(password, checkUser[0].password)){
                        return done(null, checkUser[0]);
                    }else {
                        return done(null, false, {message: 'Mật khẩu không đúng.'});
                    }

                }
                return done(null, false, {message: 'Tên đăng nhập hoặc Email không đúng.'});
            }

        }
    ));
}