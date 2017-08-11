var mongoose = require("mongoose");
var productSchema = require("./product.schema.server");

var productModel = mongoose.model("productModel", productSchema);

productModel.getProductsByType = getProductsByType;
module.exports = productModel;

function getProductsByType(pType) {

    return productModel.find({type : pType});

}