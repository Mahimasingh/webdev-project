var mongoose = require("mongoose");
var orderSchema = require("./order.schema.server");
var shoppingCartModel = require("../shoppingCart/shoppingCart.model.server");

var orderModel = mongoose.model("orderModel", orderSchema);
orderModel.getOrdersByDeliveryId = getOrdersByDeliveryId;
orderModel.createOrder = createOrder;
orderModel.removeOrderForProduct = removeOrderForProduct;

module.exports = orderModel;

function removeOrderForProduct(productId) {
    return orderModel.remove({_product : productId});

}

function getOrdersByDeliveryId(userId) {
    return orderModel.find({deliveryStaffId : userId});

}

function createOrder(userId,productId,order) {
    order._user = userId;
    order._product = productId;
    order.deliveryStaffId = mongoose.Types.ObjectId("5990c846b87aa40dcf7879fb");
    return orderModel
        .create(order)
        .then(function (createdOrder) {
            return shoppingCartModel
                .addOrdertoCart(userId,createdOrder._id);
            
        })

}