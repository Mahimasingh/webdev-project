var mongoose = require("mongoose");
var productSchema = require("./product.schema.server");

var productModel = mongoose.model("productModel", productSchema);

productModel.getProductsByType = getProductsByType;
productModel.getAllProducts = getAllProducts;
module.exports = productModel;

function getProductsByType(pType) {

    return productModel.find({type : pType});

}
function getAllProducts() {
    return productModel.find({});

}