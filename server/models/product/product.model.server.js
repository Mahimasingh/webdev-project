var mongoose = require("mongoose");
var userSchema = require("./product.model.server");

var productModel = mongoose.model("productModel", productSchema);

productModel.getProductsByType = getProductsByType;
module.exports = productModel;

function getProductsByType(pType) {

    return productModel.find({type : pType});

}