const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productCategorySchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tm_users',
        required: true
    },
    name: String,
    alias: String,
    parent: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('tm_product_categories', productCategorySchema)