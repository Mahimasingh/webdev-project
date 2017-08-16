var app = require('../../express');
var productModel = require("../models/product/product.model.server");



app.get("/api/product/type/:pType",getAllProductsByType);
app.get("/api/products",getProducts);
app.get("/api/product/:productId",getProductById);
app.post("/api/product",addProduct);
app.put("/api/product/:productId",updateProduct);

app.delete("/api/product/:productId",deleteProduct);

function deleteProduct(req,res) {
    var productId = req.params.productId;
    var product = req.body;
    productModel
        .deleteProduct(productId,product)
        .then(function (response) {
            res.send(response);

        })

}

function updateProduct(req,res) {
    var productId = req.params.productId;
    var product = req.body;
    productModel
        .updateProduct(productId,product)
        .then(function (response) {
            res.send(response)

        })

}

function getProductById(req,res) {
    var productId = req.params.productId;
    productModel
        .getProductById(productId)
        .then(function (response) {
            res.json(response);

        })

}




function addProduct(req,res) {
    var product = req.body;
    productModel
        .createProduct(product)
        .then(function (response) {
            res.json(response);

        })

}
function getAllProductsByType(req,res) {

    var prodType = req.params.pType;
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


