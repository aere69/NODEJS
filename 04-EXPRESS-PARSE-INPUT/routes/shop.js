const express = require('express');
const router = express.Router();

//Get uses exact match for the path
router.get('/', (req, res, next) => {
    console.log('In Shop Root');
    res.send('<h1>Hello from Shop Root</h1>');
});

module.exports = router;

