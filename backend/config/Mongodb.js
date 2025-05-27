const mongoose=require('mongoose');
const connectDb= async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_assignment');
        console.log('blog db connected');
        
    } catch (error) {
     console.log(`Error in connecting db : ${error.message}`);
        
    }
    
} 

module.exports=connectDb;