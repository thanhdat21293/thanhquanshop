const Product = require('../models/productModel')
const Category = require('../models/productCategoryModel')
const categoryController = require('../controllers/productCategoryController')
const appConfig = require('../config/config')

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
            res.status(200).json({products: latestProduct})
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
            res.status(200).json({products: hotProduct})
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
   
    //------chi tiet san pham
    detail: async (req,res ) =>{
        try{
            let _id = req.params.id
            let detail = await Product.findOne(
                {
                    status:1,
                    _id: _id
                },
                {
                    
                })
                res.status(200).json({
                    detail
                })
        }
        catch (err) {
            res.json({
                errMsg: err.message
            })
        }
    },
    // ----------------check to cart----------------------
    checktoCart: async (req,res) =>{
        try{
            let arrId=[];
            for(let item in req.body){
                arrId.push(item)
            }
            let getProduct = await Product.find(
                {
                    status: 1,
                    _id: {$in: arrId}
                },
                {
                    title:1,
                    main_property:1,
                    price:1,
                    qty: 1
                })
            let saveArr =[]
            for(let i in getProduct){
                if(req.body[getProduct[i]._id] > getProduct[i].qty){
                    saveArr.push({
                        title: getProduct[i].title,
                        qty: getProduct[i].qty
                    })
                }
            }
            if(saveArr.length){
                res.status(200).json({
                    message: 'no',
                    results: saveArr
                })
            } else {
                res.status(200).json({
                    message:'ok'
                })
            }
        }
        catch (err) {
            res.json({
                errMsg: err.message
            })
        }
    },
    //-----------list cart-----------------
    cart: async (req,res) =>{
        try{
            let arrId=[];
            for(let item in req.body){
                arrId.push(item)
            }
            let getProduct = await Product.find(
            {
                status:1,
                _id: {$in: arrId}
            },
            {
                title: 1,
                price: 1
            }
        )
            res.status(200).json({
                getProduct
            })
        }
        catch (err) {
            res.json({
                errMsg: err.message
            })
        }
    },
    productByCatNoChild : async(req, res) => {
        try {
            let category_id = req.params.category_id
            let page = parseInt(req.params.page)
            let offset = 0;
            if(page > 0) {
                offset = appConfig.numberOfPage.frontend * (page - 1)
            }
            let product = await Product.find(
                {
                    status: 1,
                    categories: category_id
                },
                {
                    title: 1,
                    main_property: 1,
                    price: 1
                })
                .sort({
                    sold: 'desc'
                })
            let total = product.length
            let products = product.splice(offset, appConfig.numberOfPage.frontend)
            res.status(200).json({
                products,
                total
            })
        }
        catch (err) {
            res.json({ errMsg: err.message })
        }
    },
    
   
    productByCatAndChild: async(req, res) => {
        try {
            let category_id = req.params.category_id
            let page = parseInt(req.params.page)
            let offset = 0;
            if(page > 0) {
                offset = appConfig.numberOfPage.frontend * (page - 1)
            }
            let listCat = await categoryController.listCatAndChildCat(req, res, category_id)
            let product = await Product.find(
                {
                    status: 1,
                    categories: {$in: listCat}
                },
                {
                    title: 1,
                    main_property: 1,
                    price: 1
                })
                .sort({
                    created_at: 'desc'
                })
            let total = product.length
            let products = product.splice(offset, appConfig.numberOfPage.frontend)
            res.status(200).json({
                products,
                total,
                page
            })
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
            //     let category_id = ''
            //     if (item.category_id == 'apple'){
            //         category_id = "5a2a1b6bef082b0f1343d242";
            //     } else if (item.category_id == 'samsung'){
            //         category_id = "5a2a1b6bef082b0f1343d243";
            //     } else if (item.category_id == 'sony'){
            //         category_id = "5a2a1b6bef082b0f1343d244";
            //     } else if (item.category_id == 'philip'){
            //         category_id = "5a2a1b6bef082b0f1343d249";
            //     } else if (item.category_id == 'xiaomi'){
            //         category_id = "5a2a1b6bef082b0f1343d24a";
            //     } else if (item.category_id == 'oppo'){
            //         category_id = "5a2a1b6bef082b0f1343d245";
            //     } else if (item.category_id == 'asus'){
            //         category_id = "5a2a1b6bef082b0f1343d246";
            //     } else if (item.category_id == 'huawei'){
            //         category_id = "5a2a1b6bef082b0f1343d24b";
            //     } else if (item.category_id == 'motorola'){
            //         category_id = "5a2a1b6bef082b0f1343d24c";
            //     } else if (item.category_id == 'lenovo'){
            //         category_id = "5a2a1b6bef082b0f1343d247";
            //     } else if (item.category_id == 'htc'){
            //         category_id = "5a2a1b6bef082b0f1343d24d";
            //     }else {
            //         category_id = '5a2a1b6bef082b0f1343d256';
            //     }
            //     let addNewProduct = new Product(
            //         {
            //             user_id: '5a2a15a19661d90d1e94d530',
            //             title: item.product_name,
            //             description: '',
            //             detail_property: item.detail_property,
            //             main_property: item.main_property,
            //             price: item.price,
            //             categories: category_id,
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
    }
}
