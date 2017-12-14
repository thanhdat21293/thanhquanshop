const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config/config')
const appConfig = (json) => {
    let jsonArr = json.split('.')
    if(jsonArr.length > 0) {
        let url = config;
        jsonArr.map(item => {
            url = url[item]
        })
        return url
    }else {
        return config[jsonArr[0]]
    }
}

const saltRounds = appConfig('bcrypt.saltRounds');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: appConfig('jwt.secretOrKey'),
    issuer: appConfig('jwt.issuer')
}
module.exports = {
    register: async(req, res) => {
        try {
            let username = req.body.username;
            let email = req.body.email;
            let password = req.body.password;
            let password_confirm = req.body.password_confirm;
            let agree = req.body.agree;

            let usernameRegex = /^[a-zA-Z0-9]+$/;
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let passwordRegex = /^[a-zA-Z0-9~!@#$%^&*().,?=-]+$/;

            if (!agree) {
                res.json({errMsg: 'Bạn phải đồng ý với các điều khoản của chúng tôi.'})
            } else if (!username || !password || !password_confirm || !email) {
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
                let checkUser = await User.find({
                    $or: [
                        {
                            username: username
                        },
                        {
                            email: email
                        }
                    ],
                });
                if (checkUser.length > 0) {
                    res.json({errMsg: 'Tên đăng nhập hoặc Email đã tồn tại.'})
                } else {
                    bcrypt.genSalt(saltRounds, function(err, salt) {
                        bcrypt.hash(password, salt, function(err, hash) {
                            let register = new User({
                                username: username,
                                password: hash,
                                email: email,
                                role: ['member']
                            })
                            register.save();
                            res.status(200).json({msg: 'Đăng ký thành công.'})
                        })
                    })
                }
            }
        }
        catch (err) {
            res.json({errMsg: err.message})
        }
    },
    login: async(req, res) => {
        try {
            let username = req.body.username
            let password = req.body.password
            let checkUser = await User.find({
                $or: [
                    {
                        username: username
                    },
                    {
                        email: username
                    }
                ],
            });
            if (checkUser.length > 0) {
                if (bcrypt.compareSync(password, checkUser[0].password)){
                    let payload = {
                        username: checkUser[0].username,
                        email: checkUser[0].email,
                        id: checkUser[0]._id
                    };
                    jwt.sign(payload, jwtOptions.secretOrKey, {issuer: jwtOptions.issuer}, function (err, token) {
                        if (err)
                            res.json({errMsg: err.message})

                        res.status(200).json({
                            user: checkUser[0].username || checkUser[0].email,
                            token: token
                        })
                    });
                }else {
                    res.json({errMsg: 'Mật khẩu không đúng.'});
                }
            } else {
                res.json({errMsg: 'Tên đăng nhập hoặc Email không tồn tại.'})
            }
            // let message = '';
            // if (req.session.flash) {
            //     message = req.session.flash.error.length > 0 ? req.session.flash.error[0] : '';
            // }
            // if (message) {
            //     req.session.flash = '';
            //     res.status(200).json({errMsg: message})
            // } else {
            //     let payload = {
            //         username: req.user.username,
            //         email: req.user.email,
            //         id: req.user._id
            //     };
            //     jwt.sign(payload, jwtOptions.secretOrKey, {issuer: jwtOptions.issuer}, function (err, token) {
            //         if (err)
            //             res.json({errMsg: err.message})
            //
            //         res.status(200).json({
            //             user: payload,
            //             token: token
            //         })
            //     });
            // }
        }
        catch (err) {
            res.json({errMsg: err.message})
        }
    },
    facebook: async(req, res) => {
        try {
            let clientId = req.body.clientId;
            res.json({id: clientId})
        }
        catch (err) {
            res.json({errMsg: err.message})
        }
    }

}