var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: "userModel"},
    _product:{type: mongoose.Schema.Types.ObjectId, ref: "productModel"},

    quantity: Number,
    deliveryStaffId: {type: mongoose.Schema.Types.ObjectId, ref: "userModel"},


    amount:Number,
    dateCreated: {type: Date, default: Date.now}
}, {collection: 'order'});

module.exports = orderSchema;