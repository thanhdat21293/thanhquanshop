const Product = require('../models/productModel')
const Category = require('../models/productCategoryModel')

module.exports = {
    index: async(req, res) => {
        try {
            let allProduct = await Product.find({}).limit(10).sort();
            res.status(200).json(allProduct)
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
    latestProduct: async(req, res) => {
        try {
            let latestProduct = await Product.find(
                {
                    status: 1
                },
                {
                    title: 1,
                    main_property: 1,
                    price: 1
                })
                .limit(10)
                .sort({
                    created_at: 'desc'
                });
            res.status(200).json(latestProduct)
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
    hotProduct: async(req, res) => {
        try {
            let hotProduct = await Product.find(
                {
                    status: 1
                },
                {
                    title: 1,
                    main_property: 1,
                    price: 1
                })
                .limit(10)
                .sort({
                    sold: 'desc'
                })
            res.status(200).json(hotProduct)
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
    addProduct: async(req, res) => {
        try {
            // let data = require('../data/product.json')
            // for(let i in data) {
            //     let item = data[i];
            //     let addNewProduct = new Product(
            //         {
            //             user_id: '5a276a5d0dc5150b13b33050',
            //             title: item.product_name,
            //             description: '',
            //             detail_property: item.detail_property,
            //             main_property: item.main_property,
            //             price: item.price,
            //             categories: [item.category_id],
            //             qty: item.quantity,
            //             sold: item.sales_volume,
            //             status: '1',
            //             popular: 0,
            //             product_template_id: item.product_template_id
            //         }
            //     )
            //     console.log(addNewProduct)
            //     await addNewProduct.save();
            // }
            res.status(200).json({a:1})
        }
        catch (err) {
            res.json({errMsg:err.message})
        }
    },
    addCategories: async (req, res) => {
        try {
            // Thêm category cha: 'Điện thoại' và 'Phụ kiện'
            // let data = require('../data/category.json')

            // Thêm category cha xong thì vào category con để sửa parent = id cha
            // let data = require('../data/categoryChild.json')
            // for(let i in data) {
            //     let item = data[i];
            //     let addNewProduct = new Category(
            //         {
            //             user_id: '5a28ecfb1372972cba5877b7',
            //             name: item.name,
            //             alias: item.alias,
            //             parent: item.parent
            //         }
            //     )
            //     console.log(addNewProduct)
            //     await addNewProduct.save();
            // }
            res.status(200).json({a:1})
        }
        catch (err) {
            res.json({errMsg:err.message})
        }
    }
}