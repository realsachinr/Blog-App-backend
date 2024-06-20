const Post = require("../model/postModel");

exports.createPost = async (req,res) => {
    try{
            const {title, body} = req.body;
            const post = new Post({
                title,body,
            });
            const savedPost = await post.save();

            res.json({
                post:savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};

exports.getAllPost = async (req, res) => {
    try{
        const post = await Post.find().populate("comments").populate("likes")
        .exec(); 
        
        res.status(200)
        res.json({
            status: "success",
            data: post
        })
    }
    catch (error) {
        res.status(400)
        res.json({
            status: "Error while fetching post",
            message: error.message
        })
    }
}