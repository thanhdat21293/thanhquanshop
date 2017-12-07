const User = require('../models/userModel')

module.exports = {
    index: async(req, res) => {
        try {
            let allUser = await User.find({});
            //console.log(allUser)
            res.status(200).json({a: 11})
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
    addUser: async function (req, res) {
        try {
            console.log(req.body)
            // const addNewUser = new User(
            //     {
            //           fullname: 'Nguyễn Thành Đạt',
            //           username: 'thanhdat21293',
            //           password: '111',
            //           email: 'thanhdat21293@gmail.com',
            //           birthday: '02-12-1993',
            //           phone: '0978164307',
            //           address: 'Hà Nội',
            //           role: ['admin', 'member']
            //     }
            // )
            // const newUser =  await addNewUser.save();
            res.status(200).json({a: 1})
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    }
}