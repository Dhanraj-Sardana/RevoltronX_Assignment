const blogs = require('../models/Blog');

exports.save_draft = async (req, res) => {
  try {
    const draftData = req.body;
    console.log(draftData);

    const draftBlog = new blogs(draftData);
    await draftBlog.save();

    return res.status(200).json({ message: "Draft saved"});
  } catch (err) {
    console.error('Error saving draft:', err);
    return res.status(500).json({ message: "Failed to save draft", error: err });
  }
};