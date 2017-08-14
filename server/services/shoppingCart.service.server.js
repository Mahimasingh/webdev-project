
var app = require('../../express');
var shoppingCartModel = require("../models/shoppingCart/shoppingCart.model.server");



app.get("/api/user/:userId/cart",getUserCart);
app.get("/api/shoppingCarts",getAllShoppingCarts);

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


