const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    }

},{timestamps:true}
)
module.exports=mongoose.model('blogs',blogSchema);