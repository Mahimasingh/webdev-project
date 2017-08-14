var app = require('../../express');
var wishListModel = require("../models/wishList/wishList.model.server");



app.get("/api/user/:userId/wishList",getUserWishList);
app.get("/api/wishLists",getAllWishLists);

function getUserWishList(req,res) {

    var userId = req.params.userId;
    wishListModel
        .getWishListByUserId(userId)
        .then(function (response) {

            res.json(response);
        })


}

function getAllWishLists(req,res) {
    wishListModel
        .getWishLists()
        .then(function (response) {
            res.json(response);

        })

}


