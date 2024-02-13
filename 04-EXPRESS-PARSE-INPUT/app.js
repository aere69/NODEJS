const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

// Request does not try to parse the incoming request
// We need to reqister a parser
// Third party required : npm install --save body-parser
// Parsing of the body should be done no matter where the request ends up.
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Catch all - Error Page
app.use((req, res, next) => {
    console.log('In Root');
    res.status(404).send('<h1>Page Not found</h1>');
});

app.listen(3000);