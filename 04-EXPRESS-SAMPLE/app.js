const express = require('express');

const app = express();

app.use('/', (req, res, next)=>{
   /* Catch all*/
   console.log('\nCatches all requests and continues') ;
   next();
});
app.use('/user-list', (req, res, next)=>{
    /* Process request on user-list */
    console.log('Responding to user-list request');
    /* Response returns status code 200 unless explicitly changed */
    res.send('<h1>User List</h1>');
});

app.use('/', (req, res, next)=>{
    /* Process request on root */
    console.log('Responding to root request');
    /* Response forcing status code response to 200 explicitly */
    res.status(200).send('<h1>Root</h1>');

});

app.listen(3000);