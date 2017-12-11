const Blog = require('../models/blogModel');

module.exports = {
    index: async (req, res) => {
        try{
            const allPost = await Blog.find({}).limit(4).sort();

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
    postWithPages: async (req, res) => {
        try{
            let pages = parseInt(req.body.pages);
            let offset;
            if(pages > 0){
                offset = config
            }
        }catch (err){
            res.json({err: err.message})
        }
    }
}