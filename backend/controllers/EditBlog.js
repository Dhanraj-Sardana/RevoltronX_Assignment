const blogs=require('../models/Blog');
exports.editBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content, tags, status } = req.body;
    try {
    const updatedBlog = await blogs.findByIdAndUpdate(
      id,
      { title, content, tags, status },
      { new: true } 
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }


}