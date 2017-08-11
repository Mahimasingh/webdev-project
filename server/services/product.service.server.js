var app = require('../../express');
var productModel = require("../models/product/product.model.server");



app.get("/api/product/:pType",getAllProducts);

function getAllProducts(req,res) {

    prodType = req.params.pType;
    productModel
        .getProductsByType(prodType)
        .then(function (response) {

            res.json(response);
        })


}


