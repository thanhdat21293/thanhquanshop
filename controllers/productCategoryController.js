const Category = require('../models/productCategoryModel')

module.exports = {
    listCatAndChildCat: async(req, res, category_id) => {
        try {
            let allCatId = await Category.find({parent: category_id}).select('_id');
            allCatId.push({_id: category_id})
            return allCatId
        }
        catch (err) {
            return [{_id: category_id}]
        }
    },
    addCategories: async (req, res) => {
        try {
            // //Thêm category cha: 'Điện thoại' và 'Phụ kiện'
            // let data = require('../data/category.json')
            //
            // //Thêm category cha xong thì vào category con để sửa parent = id cha
            let data = require('../data/categoryChild.json')
            for(let i in data) {
                let item = data[i];
                let addNewProduct = new Category(
                    {
                        user_id: '5a2a15a19661d90d1e94d530',
                        name: item.name,
                        alias: item.alias,
                        parent: item.parent
                    }
                )
                console.log(addNewProduct)
                await addNewProduct.save();
            }
            res.status(200).json({a:1})
        }
        catch (err) {
            res.json({errMsg:err.message})
        }
    }
}
