var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    Sex: String,
    address: String,
    dateCreated: {type: Date, default: Date.now()},
    wishlist: {type:mongoose.Schema.Types.ObjectId,ref: "wishListModel"},
    shoppingCart: {type: mongoose.Schema.Types.ObjectId, ref: "shoppingCartModel"},
    follow_wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: "wishListModel"}],
    isAdmin: Boolean
}, {collection: "user"});
module.exports = userSchema;