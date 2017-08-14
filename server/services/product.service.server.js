var app = require('../../express');
var productModel = require("../models/product/product.model.server");



app.get("/api/product/:pType",getAllProductsByType);
app.get("/api/products",getProducts);

function getAllProductsByType(req,res) {

    prodType = req.params.pType;
    productModel
        .getProductsByType(prodType)
        .then(function (response) {

            res.json(response);
        })


}

function getProducts(req,res) {
    productModel
        .getAllProducts()
        .then(function (response) {
            res.json(response);

        })

}


