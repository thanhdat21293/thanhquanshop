const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tm_products',
        required: true
    },
    featured: Boolean,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('tm_products', userSchema)