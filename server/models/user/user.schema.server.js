var mongoose = require("mongoose");
const arrayUniquePlugin = require('mongoose-unique-array');

var userType = ['BUYER','DELIVERY_STAFF','ADMIN'];

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    sex: String,
    google: {
        id:  String,
        token: String
    },
    address: String,
    dateCreated: {type: Date, default: Date.now()},
    follow_wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: "wishListModel",unique: true}],
    type : { type: String, enum: userType, required: true }
}, {collection: "user"});
schema.plugin(arrayUniquePlugin);
module.exports = userSchema;