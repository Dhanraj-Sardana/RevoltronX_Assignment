const express=require('express');
const {save_draft}=require('../controllers/save-draft');
const {publish}=require('../controllers/Publish');
const {allBlogs}=require('../controllers/AllBlogs');
const {editBlog}=require('../controllers/EditBlog');
const Router=express.Router();

Router.post('/save-draft',save_draft);     
Router.post('/publish',publish);
Router.get('/',allBlogs);
Router.patch('/:id',editBlog);
module.exports=Router;