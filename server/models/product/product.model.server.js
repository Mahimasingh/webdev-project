var mongoose = require("mongoose");
var productSchema = require("./product.schema.server");

var productModel = mongoose.model("productModel", productSchema);
var orderModel = require("../order/order.model.server");
var wishListModel = require("../wishList/wishList.model.server");

productModel.getProductsByType = getProductsByType;
productModel.getAllProducts = getAllProducts;
productModel.createProduct = createProduct;
productModel.updateQuantity = updateQuantity;
productModel.getProductById = getProductById;
productModel.updateProduct = updateProduct;
productModel.deleteProduct = deleteProduct;
module.exports = productModel;

function deleteProduct(productId,product) {
    return productModel
        .remove({_id : productId})
        .then(function (response) {
            return orderModel
                .removeOrderForProduct(productId)


        })

}
function updateProduct(productId,product) {
    return productModel.update({_id: productId},
        {$set: product});


}

function getProductById(productId) {
    return productModel
        .findById(productId);

}

function updateQuantity(productId,quantity) {
    console.log("entered here!");
     return productModel
         .getProductById(productId)
         .then(function(product){
             product.quantity = product.quantity - quantity;
             return product.quantity.save()
         })

}
function getProductsByType(pType) {

    return productModel.find({type : pType});

}
function getAllProducts() {
    return productModel.find({});

}

function createProduct(product) {
    return productModel.create(product);

}