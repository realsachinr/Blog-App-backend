const Comment = require("../model/commentModel");
const Post = require("../model/postModel");

// Buisness Logic
exports.createComment = async (req, res) => {
    try{
        // FEtch data from REq body 
        const {post, user, body} = req.body;

        //create a comment object
        const comment = new Comment({
            post,
            user,
            body
        });

        //save comment
        const savedComment = await comment.save();

        //find the post by ID, add the new cooment their array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments : savedComment._id}}, {new:true})
                .populate("comments")
                .exec(); 
        
            
        res.json({
            success: true,
            data: updatedPost
        })

    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message, 
            message : "Server Error"
        })
    }
}