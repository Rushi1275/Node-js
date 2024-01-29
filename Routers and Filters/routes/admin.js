const express =require ('express');

const router = express.Router()

router.get('/add-product', (req, res, next) => {
    res.send('<body><form action="/admin/add-product" method="POST">' +
        '<input type="text" name="productName" placeholder="Product Name">' +
        '<button type="submit">Add Product</button></form></body>');
});

router.post('/add-product', (req, res, next) => {
    console.log('Product Name:', req.body.productName);
    res.redirect('/');
  
});

module.exports=router