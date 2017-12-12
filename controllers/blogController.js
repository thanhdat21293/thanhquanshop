const Blog = require('../models/blogModel');
const appConfig = require('../config/config')

module.exports = {
    index: async (req, res) => {
        try{
            const allPost = await Blog.find({}).limit(4).sort({created_at: 'desc'});

            console.log(allPost);
            res.status(200).json(allPost);
        }catch (err){
            res.json({err : err.message})
        }
    },
    addPost: async (req, res) => {
        try {
            const addPost = new Blog({
                user_id: req.body.user_id,
                title: req.body.title,
                content: req.body.content,
                images: req.body.images,
                description: req.body.description,
                created_at: Date.now(),
                updated_at: Date.now()
            });
            const newPost =  await addPost.save();
            res.status(200).json(newPost);
        }
        catch (err){
            res.json({err: err.message});
        }
    },
    deletePost: async (req, res) => {
        try {
            const delPost = await Blog.findByIdAndRemove(req.params.postId);
            res.status(200).json({
                msg: 'ok',
                delPost
            });
        }catch (err){
            res.json({err: err.message})
        }
    },
    updatedPost: async (req, res) => {
        try {
            const post = await Blog.find({'_id':req.params.postId});
            const updatePost = await Blog.findByIdAndUpdate(
                req.params.postId,
                {
                    title: req.body.title || post[0].title,
                    content: req.body.content || post[0].content,
                    description: req.body.description || post[0].description,
                    images:req.body.images || post[0].images,
                    updated_at: Date.now()
                },
                {new:true}
            );
            res.status(200).json({
                msg:'ok',
                updatePost
            });
        }catch (err){
            res.json({err: err.message})
        }
    },
    postWithPages: async (req, res) => {
        try{
            let page = parseInt(req.params.page);
            console.log(page)
            let offset = 0;
            if(page > 0){
                offset = appConfig.numberOfPage.frontend * (page - 1);
            }
            const allPosts = await  Blog.find({}).sort({
                created_at: 'desc'
            });
            const total = allPosts.length;
            const postInPages = allPosts.splice(offset,appConfig.numberOfPage.frontend);

            res.status(200).json({
                postInPages,
                total,
                page
            })
        }catch (err){
            res.json({err: err.message})
        }
    }
}