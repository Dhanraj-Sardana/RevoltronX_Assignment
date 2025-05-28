require('dotenv').config();
const express = require('express');
const connectDb=require('./config/Mongodb');
const cookieParser=require('cookie-parser');
const cors=require('cors');

const Router=require('./routes/blogRoute');
const Auth_Router=require('./routes/Auth_Route');

//coonecting databse
connectDb();

const app = express();

app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/api',Router);
app.use('/auth',Auth_Router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in connecting to ${PORT} : ${err.message}`);
        return;
    }
    console.log(`Server connected at PORT : ${PORT}`);
})