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
            const addNewUser = new User(
                {
                      fullname: req.body.fullname,
                      username: req.body.username,
                      password: req.body.password,
                      email: req.body.email,
                      birthday: req.body.birthday,
                      phone: req.body.phone,
                      address: req.body.address,
                      role: ['admin', 'member']
                }
            )
            const newUser =  await addNewUser.save();
            res.status(200).json(newUser)
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    }
}