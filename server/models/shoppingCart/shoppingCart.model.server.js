var mongoose = require("mongoose");
var shoppingCartSchema = require("./shoppingCart.schema.server");

var shoppingCartModel = mongoose.model("shoppingCartModel",  shoppingCartSchema);
shoppingCartModel.getCartByUserId = getCartByUserId;
shoppingCartModel.createShoppingCart = createShoppingCart;
shoppingCartModel.getCarts = getCarts;
shoppingCartModel.addOrdertoCart = addOrdertoCart;

module.exports = shoppingCartModel;


function addOrdertoCart(userId,orderId) {

    return shoppingCartModel.findOneAndUpdate({_user: userId}, {$push: {_orders: orderId}}, {new: true});
}
function createShoppingCart(userId) {
    return shoppingCartModel.create({_user : userId});

}

function getCartByUserId(userId) {

    return shoppingCartModel
        .findOne({_user : userId})
        .populate({path : '_orders',
            populate: {path : '_product'}
        })
        .exec();
}

function getCarts() {
    return shoppingCartModel.find({});

}