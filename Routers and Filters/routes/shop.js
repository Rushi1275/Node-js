const express = require ('express');

const router = express.Router();

router.get('/product', (req, res, next) => {
    res.send('<h1>This is Shop Page</h1>');
});



module.exports= router