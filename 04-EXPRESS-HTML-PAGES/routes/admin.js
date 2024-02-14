const path = require('path'); // core module

const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In Add Product');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //create path valid for different OSs
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log('In Product');
    console.log(req.body);
    res.redirect('/');
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;