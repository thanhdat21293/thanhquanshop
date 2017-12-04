const User = require('../models/userModel')

module.exports = {
  index:  (req,res)=> {
    try {
      const allUser = User.find({})
      res.status(200).json(allUser)
    }
    catch (err) {
      console.log('ERROR', err)
    }
  }
}