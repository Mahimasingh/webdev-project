
var app = require('../../express');
var shoppingCartModel = require("../models/shoppingCart/shoppingCart.model.server");



app.get("/api/user/:userId/cart",getUserCart);
app.get("/api/shoppingCarts",getAllShoppingCarts);
app.put("/api/shoppingCart/:cartId",deleteOrderFromShoppingCart);

function deleteOrderFromShoppingCart(req,res) {

    var cartId = req.params.cartId;
    var order = req.body;
    shoppingCartModel
        .deleteOrderFromCart(cartId,order._id)
        .then(function (response) {
            res.json(response);

    })
}

function getUserCart(req,res) {

    var userId = req.params.userId;
    shoppingCartModel
        .getCartByUserId(userId)
        .then(function (response) {

            res.json(response);
        })


}

function getAllShoppingCarts(req,res) {
    shoppingCartModel
        .getCarts()
        .then(function (response) {
            res.json(response);

        })

}


