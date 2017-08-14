var mongoose = require("mongoose");
var shoppingCartSchema = mongoose.Schema({
_user: {type:mongoose.Schema.Types.ObjectId,ref:"userModel"},
dateCreated: {type: Date, default: Date.now()},
_orders: [{type:mongoose.Schema.Types.ObjectId,ref: "orderModel"}]
}, {collection: "shoppingCart"});
module.exports = shoppingCartSchema;