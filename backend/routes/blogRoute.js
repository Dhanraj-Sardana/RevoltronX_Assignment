const express=require('express');
const {home}=require('../controllers/Blog_Editor_Page');
const Router=express.Router();

Router.get('/',home);     

module.exports=Router;