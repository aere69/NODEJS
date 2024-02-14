const path = require('path');
const rootDir = require('../helpers/rootPath');
const express = require('express');
const router = express.Router();

//Get uses exact match for the path
router.get('/', (req, res, next) => {
    console.log('Serve Shop Main Page');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;