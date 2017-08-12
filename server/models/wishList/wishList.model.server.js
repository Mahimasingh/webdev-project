var mongoose = require("mongoose");
var wishListSchema = require("./wishList.schema.server");

var wishListModel = mongoose.model("wishListModel", wishListSchema);

wishListModel.getWishListByUserId = getWishListByUserId;
wishListModel.createWishList = createWishList;
module.exports = wishListModel;

function getWishListByUserId(userId) {

    return wishListModel.find({_user : userId});

}

function createWishList(userId) {
    return wishListModel.create({_user : userId});

}