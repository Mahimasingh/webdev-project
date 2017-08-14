var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: "userModel"},
    _product:{type: mongoose.Schema.Types.ObjectId, ref: "productModel"},
    type: String,
    quantity: Number,
    deliveryStaffName: String,
    url: String,
    price: Number,
    amount:Number,
    dateCreated: {type: Date, default: Date.now}
}, {collection: 'order'});

module.exports = orderSchema;