const path = require('path');
const rootDir = require('../helpers/rootPath');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    console.log('Serving Add Product Page');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next)=>{
    console.log('Redirecting to Home Page');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
