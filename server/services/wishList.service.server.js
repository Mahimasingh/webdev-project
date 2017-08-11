var app = require('../../express');
var wishListModel = require("../models/wishList/wishList.model.server");



app.get("/api/user/:userId/wishList",getUserWishList);

function getUserWishList(req,res) {

    var userId = req.params.userId;
    wishListModel
        .getWishListByUserId(userId)
        .then(function (response) {

            res.json(response);
        })


}


