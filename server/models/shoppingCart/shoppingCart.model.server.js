var mongoose = require("mongoose");
var shoppingCartSchema = require("./shoppingCart.schema.server");

var shoppingCartModel = mongoose.model("shoppingCartModel",  shoppingCartSchema);
shoppingCartModel.getCartByUserId = getCartByUserId;
shoppingCartModel.createShoppingCart = createShoppingCart;
shoppingCartModel.getCarts = getCarts;
shoppingCartModel.addOrdertoCart = addOrdertoCart;

module.exports = shoppingCartModel;


function addOrdertoCart(userId,orderId) {
    return shoppingCartModel
        .getCartByUserId(userId)
        .then(function (cart) {
            cart._orders.push(orderId);
            return cart.save();

        });

}
function createShoppingCart(userId) {
    return shoppingCartModel.create({_user : userId});

}

function getCartByUserId(userId) {

    return shoppingCartModel.find({_user : userId});

}

function getCarts() {
    return shoppingCartModel.find({});

}