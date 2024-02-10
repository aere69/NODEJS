const express = require('express');

const app = express();

app.use('/', (req, res, next)=>{
    console.log('Applies to all');
    next();
});

app.use('/add-product', (req, res, next)=>{
    console.log('In Add-Product');

    //Sends status code 200 with the response
    res.send('<h1>Hello form Add-Product!</h1>');
});

app.use('/', (req, res, next)=>{
    console.log('In root');

    //Sends status code 200 with the response
    res.send('<h1>Hello form Root!</h1>');

    //Send a status code with the response
    //res.status(302).send('<h1>Response with 302 Status</h1>')
});

app.listen(3000);
