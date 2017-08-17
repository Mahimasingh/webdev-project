var mongoose = require("mongoose");
var wishListSchema = require("./wishList.schema.server");

var wishListModel = mongoose.model("wishListModel", wishListSchema);

wishListModel.getWishListByUserId = getWishListByUserId;
wishListModel.createWishList = createWishList;
wishListModel.getWishLists = getWishLists;
wishListModel.addProductToListForUser = addProductToListForUser;
wishListModel.deleteProductForUser = deleteProductForUser;
module.exports = wishListModel;

function addProductToListForUser(userId,productId) {

    return wishListModel.update( {_user: userId}, {$push: {_products: productId}}, {new: true});

}

function deleteProductForUser(userId,productId) {

    return wishListModel.update( {_user: userId}, { $pullAll: {_products: [productId] } } )

}

function getWishListByUserId(userId) {

    return wishListModel
        .findOne({_user : userId})
        .populate('_products')
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