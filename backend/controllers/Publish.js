const blogs=require('../models/Blog');
exports.publish= async (req,res)=>{
try {
    const publishData=req.body;
       const blog = new blogs(publishData);
       await blog.save();
       return res.status(200).json({ message: "Published"});
} catch (error) {
    console.error(`error in publishing ${error.message}`);
    return res.status(500).json({ message: "Failed to save draft", error: err });
}
}