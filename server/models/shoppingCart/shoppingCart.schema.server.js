var mongoose = require("mongoose");
var shoppingCartSchema = mongoose.Schema({
_user: {type:mongoose.Schema.Types.ObjectId,ref:"userModel"},
dateCreated: {type: Date, default: Date.now()},
products: [{type:mongoose.Schema.Types.ObjectId,ref: "productModel"}]
}, {collection: "userProject"});
module.exports = shoppingCartSchema;