const express=require('express');
const {home}=require('../controlls/Blog_Editor_Page');
const Router=express.Router();

Router.get('/',home);     

module.exports=Router;