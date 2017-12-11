const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tm_users',
        required: true
    },
    title:  String,
    content: String,
    images: {
        type: String,
        default: ''
    },
    created_at: {
        type:Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('tm_blog',blogSchema);