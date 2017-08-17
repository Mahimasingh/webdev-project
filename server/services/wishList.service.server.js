var app = require('../../express');
var wishListModel = require("../models/wishList/wishList.model.server");



app.get("/api/user/:userId/wishList",getUserWishList);
app.get("/api/wishLists",getAllWishLists);
app.put("/api/user/:userId/wishList",addProductToWishList);
app.put("/api/user/:userId/wishList/delete",deleteProductFromWishList);

function deleteProductFromWishList (req,res) {
    var userId = req.params.userId;
    var product = req.body;
    wishListModel
        .deleteProductForUser(userId,product._id)
        .then(function (response) {
            res.json(response);

        })

}

function addProductToWishList(req,res) {
    var userId = req.params.userId;
    var product = req.body;
    wishListModel
        .addProductToListForUser(userId,product._id)
        .then(function (response) {
            res.json(response);

        })

}
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


