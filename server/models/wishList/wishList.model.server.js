var mongoose = require("mongoose");
var wishListSchema = require("./wishList.schema.server");

var wishListModel = mongoose.model("wishListModel", wishListSchema);

wishListModel.getWishListByUserId = getWishListByUserId;
wishListModel.createWishList = createWishList;
wishListModel.getWishLists = getWishLists;
module.exports = wishListModel;

function getWishListByUserId(userId) {

    return wishListModel
        .findOne({_user : userId})
        .populate('_product')
        .exec();

}

function createWishList(userId) {
    return wishListModel.create({_user : userId});

}

function getWishLists() {
    return wishListModel
        .find({})
        .populate('_product')
        .exec();


}