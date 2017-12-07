const User = require('../models/userModel')
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

module.exports = {
    register: async(req, res) => {
        try {

            let username = req.body.username;
            let email = req.body.email;
            let password = req.body.password;
            let password_confirm = req.body.password_confirm;

            let usernameRegex = /^[a-zA-Z0-9]+$/;
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let passwordRegex = /^[a-zA-Z0-9~!@#$%^&*().,?=-]+$/;

            if (!username || !password || !password_confirm || !email) {
                res.json({errMsg: 'Không được để trống.'})
            } else if (!usernameRegex.test(username)) {
                res.json({errMsg: 'Tên đăng nhập không hợp lệ.'})
            } else if (!emailRegex.test(email)) {
                res.json({errMsg: 'Email không hợp lệ.'})
            } else if (!passwordRegex.test(password)) {
                res.json({errMsg: 'Mật khẩu không hợp lệ.'})
            } else if (password !== password_confirm) {
                res.json({errMsg: 'Mật khẩu không trùng.'})
            } else {
                let checkUser = await User.find({ username, email});
                if (checkUser.length > 0) {
                    res.json({errMsg: 'Tên đăng nhập hoặc Email đã tồn tại.'})
                } else {
                    let salt = bcrypt.genSaltSync(saltRounds);
                    let hash = bcrypt.hashSync(myPlaintextPassword, salt);
                    let register = new User({
                        username: username,
                        password: hash,
                        email: email,
                        role: ['member']
                    })
                    register.save();
                    res.status(200).json({msg: 'Đăng ký thành công.'})
                }
            }
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
    login: async(req, res) => {
        try {
            let username = req.body.username;
            let password = req.body.password;

            let usernameRegex = /^[a-zA-Z0-9@._-]+$/;
            let passwordRegex = /^[a-zA-Z0-9~!@#$%^&*().,?=-]+$/;

            if (!username || !password) {
                res.json({errMsg: 'Không được để trống.'})
            } else if (!usernameRegex.test(username)) {
                res.json({errMsg: 'Tên đăng nhập không hợp lệ.'})
            } else if (!passwordRegex.test(password)) {
                res.json({errMsg: 'Mật khẩu không hợp lệ.'})
            } else {
                let checkUser = await User.find({ username, email});
                if (checkUser.length > 0) {
                    res.json({errMsg: 'Tên đăng nhập hoặc Email đã tồn tại.'})
                }

                res.json({errMsg: 'Tên đăng nhập hoặc Email không đúng.'})
            }
            res.status(200).json({a: 11})
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    }
}