var mongoose = require("mongoose");
var shoppingCartSchema = require("./shoppingCart.schema.server");

var shoppingCartModel = mongoose.model("shoppingCartModel",  shoppingCartSchema);
shoppingCartModel.getCartByUserId = getCartByUserId;
shoppingCartModel.createShoppingCart = createShoppingCart;
module.exports = shoppingCartModel;

function createShoppingCart(userId) {
    shoppingCartModel.insert({_user : userId});

}

function getCartByUserId(userId) {

    return shoppingCartModel.find({_user : userId});

}