var mongoose = require("mongoose");
var shoppingCartSchema = require("./shoppingCart.schema.server");

var shoppingCartModel = mongoose.model("shoppingCartModel",  shoppingCartSchema);
shoppingCartModel.getCartByUserId = getCartByUserId;
module.exports = shoppingCartModel;

function getCartByUserId(userId) {

    return shoppingCartModel.find({_user : userId});

}