var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var wishListModel = require("../wishList/wishList.model.server");
var shoppingCartModel = require("../shoppingCart/shoppingCart.model.server");
var db = require("../../database");
var userModel = mongoose.model("userModel", userSchema);
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.deleteUserById = deleteUserById;
userModel.getAllUsers = getAllUsers;
userModel.addToWishListArray = addToWishListArray;
userModel.deleteWishListFromFollowingArray = deleteWishListFromFollowingArray;

module.exports = userModel;

function deleteWishListFromFollowingArray(userId,wishListId) {
    return userModel.findUserById(userId)
        .then(function (user) {
            var index = user.follow_wishlist.indexOf(wishListId);
            user.follow_wishlist.splice(index,1);
            return user.save();

        })

}

function addToWishListArray(userId,wishListId) {
    return userModel.findUserById(userId)
        .then(function (user) {
            user.follow_wishlist.push(wishListId);
            return user.save();

        })

}
function getAllUsers() {

    return userModel.find({});

}
function deleteUserById(userId) {
    return userModel.remove({_id:userId});

}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
    return userModel.update({_id: userId},
        {$set: user});
}

function createUser(user) {
    user.type = 'BUYER';
    var _user = null;
    return userModel
        .create(user)
        .then(function (user) {
            _user = user;
            return wishListModel
                   .createWishList(user._id);
        })
        .then(function (createdWishList) {
            return shoppingCartModel
                .createShoppingCart(createdWishList._user);
        })
        .then(function () {
            return _user;
        });
}

function findUserById(userId) {
    return userModel
        .findById(userId)
        .populate({path : 'follow_wishlist',
                    populate: {path : '_products'}
                    })
        .populate({path : 'follow_wishlist',
                    populate: {path : '_user'}})
        .exec();



}

function findUserByUsername(username) {
    return userModel.findOne({username: username});

}