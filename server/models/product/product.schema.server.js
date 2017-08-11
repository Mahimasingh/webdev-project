var mongoose = require("mongoose");

var productTypes = ['CLOTHING', 'SHOES', 'BAGS', 'WATCHES', 'ACCESSORIES', 'JEWELLERY','SUNGLASSES'];

var productSchema = mongoose.Schema({
    name: String,
    type: { type: String, enum: productTypes, required: true },
    quantity:{type: Number},
    url: String,
    company: String,
    reviews : {type: Number}
}, {collection: "product"});
module.exports = productSchema;