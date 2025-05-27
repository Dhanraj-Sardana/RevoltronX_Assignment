const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in connecting to ${PORT} : ${err.message}`);
        return;
    }
    console.log(`Server connected at PORT : ${PORT}`);
})