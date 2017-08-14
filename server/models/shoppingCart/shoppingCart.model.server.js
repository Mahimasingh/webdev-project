var mongoose = require("mongoose");
var shoppingCartSchema = require("./shoppingCart.schema.server");

var shoppingCartModel = mongoose.model("shoppingCartModel",  shoppingCartSchema);
shoppingCartModel.getCartByUserId = getCartByUserId;
shoppingCartModel.createShoppingCart = createShoppingCart;
shoppingCartModel.getCarts = getCarts;
module.exports = shoppingCartModel;

function createShoppingCart(userId) {
    return shoppingCartModel.create({_user : userId});

}

function getCartByUserId(userId) {

    return shoppingCartModel.find({_user : userId});

}

function getCarts() {
    return shoppingCartModel.find({});

}