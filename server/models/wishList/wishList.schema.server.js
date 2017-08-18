var mongoose = require("mongoose");

var wishListSchema = mongoose.Schema({
    _user: {type:mongoose.Schema.Types.ObjectId,ref:"userModel"},
    dateCreated: {type: Date, default: Date.now()},
    _products: [{type:mongoose.Schema.Types.ObjectId,default: [],ref: "productModel"}]
}, {collection: "wishList"});
module.exports = wishListSchema;