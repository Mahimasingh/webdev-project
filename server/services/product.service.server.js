var app = require('../../express');
var productModel = require("../models/product/product.model.server");



app.get("/api/product/:productType",getAllProducts);

function getAllProducrs(req,res) {

    prodType = req.productType;
    productModel
        .getProductsByType(prodType)
        .then(function (response) {

            res.json(response);
        })


}


