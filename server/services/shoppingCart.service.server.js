
var app = require('../../express');
var shoppingCartModel = require("../models/shoppingCart/shoppingCart.model.server");



app.get("/api/user/:userId/cart",getUserCart);

function getUserCart(req,res) {

    var userId = req.params.userId;
    shoppingCartModel
        .getCartByUserId(userId)
        .then(function (response) {

            res.json(response);
        })


}


