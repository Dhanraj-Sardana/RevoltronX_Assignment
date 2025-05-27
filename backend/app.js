const express = require('express');
const Router=require('./routes/blogRoute');
const connectDb=require('./config/Mongodb');

//coonecting databse
connectDb();

const app = express();

app.use('/api',Router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in connecting to ${PORT} : ${err.message}`);
        return;
    }
    console.log(`Server connected at PORT : ${PORT}`);
})