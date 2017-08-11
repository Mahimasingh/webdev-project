var mongoose = require("mongoose");
var wishListSchema = require("./wishList.schema.server");

var wishListModel = mongoose.model("wishListModel", wishListSchema);

wishListModel.getWishListByUserId = getWishListByUserId;
module.exports = wishListModel;

function getWishListByUserId(userId) {

    return wishListModel.find({_user : userId});

}