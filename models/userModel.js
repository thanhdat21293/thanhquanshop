const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: String,
    username: String,
    password: String,
    email: String,
    birthday: Date,
    phone: String,
    address: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    role: Array
})

module.exports = mongoose.model('tm_users', userSchema)