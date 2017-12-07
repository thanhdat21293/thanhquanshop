const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tm_users',
        required: true
    },
    title: String,
    description: String,
    detail_property: Object,
    main_property: Object,
    price: {type: Number, min: 0},
    categories: Array,
    qty: {type: Number, min: 0},
    sold: {type: Number, min: 0},
    product_template_id: String,
    status: String,
    popular: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('tm_product_categories', userSchema)