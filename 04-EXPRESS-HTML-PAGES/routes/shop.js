const path = require('path'); // core module

const express = require('express');
const router = express.Router();

//Get uses exact match for the path
router.get('/', (req, res, next) => {
    console.log('In Shop Root');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //create path valid for different OSs
});

module.exports = router;

