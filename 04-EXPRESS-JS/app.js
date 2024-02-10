const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware');
    next(); //Allows the request to continue to the next middleware in line.
});

app.use((req, res, next)=>{
    console.log('In another middleware');

    //Sends status code 200 with the response
    res.send('<h1>Hello form Express Middleware!</h1>');

    //Send a status code with the response
    //res.status(302).send('<h1>Response with 302 Status</h1>')
});

app.listen(3000);
