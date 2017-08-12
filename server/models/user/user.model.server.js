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

module.exports = userModel;


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
    return userModel
        .create(user)
        .then(function (user) {
            return wishListModel
                   .createWishList(user._id);
        })
        .then(function (createdWishlist) {
            return shoppingCartModel
                .createShoppingCart(createdWishlist._user);;
        });
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});

}