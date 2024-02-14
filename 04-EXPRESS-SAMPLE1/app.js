const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const rootDir = require('./helpers/rootPath');

//Define Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Use Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Default error
app.use((req, res, next)=>{
    console.log("Serving Error Page");
    res.statusCode(404).sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);
