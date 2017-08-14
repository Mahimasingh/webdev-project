var mongoose = require("mongoose");
var orderSchema = require("./order.schema.server");

var orderModel = mongoose.model("orderModel", orderSchema);
orderModel.getOrdersByDeliveryId = getOrdersByDeliveryId;

module.exports = orderModel;



function getOrdersByDeliveryId(userId) {
    return orderModel.find({deliveryStaffId : userId});

}