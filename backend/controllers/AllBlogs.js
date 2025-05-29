const blogs = require('../models/Blog');
const jwt=require('jsonwebtoken');
exports.allBlogs = async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401)

    const payload = jwt.verify(token, process.env.KEY)
    if(!payload) return res.status(404)
        const userID=payload.userID;

    try {
        const Blogs = await blogs.find({ author: userID }).populate('author', 'name email');
        if (!Blogs) {
                return res.status(404).json({ error: 'doesnot found' });
            }
            res.status(200).json({blogs:Blogs})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}