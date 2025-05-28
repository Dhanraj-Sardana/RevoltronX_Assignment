const express=require('express');
const {signin}=require('../controllers/Signin'); 
const {login}=require('../controllers/Login');
const {home}=require('../controllers/Home');
const {logout}=require('../controllers/Logout');
const Auth_Router=express.Router();

Auth_Router.post('/signin',signin);
Auth_Router.post('/login',login);
Auth_Router.get('/home',home);
Auth_Router.post('/logout',logout);

module.exports=Auth_Router;