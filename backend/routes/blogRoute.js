const express=require('express');
const {save_draft}=require('../controllers/save-draft');
const {publish}=require('../controllers/Publish');
const Router=express.Router();

Router.post('/save-draft',save_draft);     
Router.post('/publish',publish);
module.exports=Router;