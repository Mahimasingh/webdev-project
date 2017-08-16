var mongoose = require("mongoose");
var wishListSchema = require("./wishList.schema.server");

var wishListModel = mongoose.model("wishListModel", wishListSchema);

wishListModel.getWishListByUserId = getWishListByUserId;
wishListModel.createWishList = createWishList;
wishListModel.getWishLists = getWishLists;
wishListModel.addProductToListForUser = addProductToListForUser;
module.exports = wishListModel;

function addProductToListForUser(userId,productId) {

    return wishListModel.update( {_user: userId}, {$push: {_products: productId}}, {new: true});

}

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