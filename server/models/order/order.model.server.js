var mongoose = require("mongoose");
var orderSchema = require("./order.schema.server");
var shoppingCartModel = require("../shoppingCart/shoppingCart.model.server");
var productModel = require("../product/product.model.server");

var orderModel = mongoose.model("orderModel", orderSchema);
orderModel.getOrdersByDeliveryId = getOrdersByDeliveryId;
orderModel.createOrder = createOrder;
orderModel.removeOrderForProduct = removeOrderForProduct;
orderModel.getAllOrders = getAllOrders;

module.exports = orderModel;

function getAllOrders() {
    return orderModel
        .find({})
        .populate('_product')
        .exec();


}

function removeOrderForProduct(productId) {
    return orderModel.remove({_product : productId});

}

function getOrdersByDeliveryId(userId) {
    return orderModel.find({deliveryStaffId : userId})
        .populate('_product')
        .exec();

}

function createOrder(userId,productId,order) {
    order._user = userId;
    order._product = productId;
    order.deliveryStaffId = mongoose.Types.ObjectId("5990c846b87aa40dcf7879fb");

      return orderModel
         .create(order)
         .then(function (createdOrder) {

              return shoppingCartModel.addOrdertoCart(userId,createdOrder._id);

          })
          .then(function (response) {
              productModel.updateQuantity(productId, order.quantity)
                  .then(function (res) {

                  console.log(res);

              });

          });
 }