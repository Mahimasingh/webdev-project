var app = require('../../express');
var orderModel = require("../models/order/order.model.server");

app.get("/api/orders/:userId",getAllOrdersForUser);
app.post("/api/order/product/:productId/user/:userId",createOrder);
app.get("/api/orders",getAllOrders);

function getAllOrders(req,res) {
    orderModel
        .getAllOrders()
        .then(function (response) {
            res.json(response);

        })

}

function getAllOrdersForUser(req,res) {
    var userId = req.params.userId;
    orderModel
        .getOrdersByDeliveryId(userId)
        .then(function (response) {
            res.json(response);

        })

}

function createOrder(req,res) {
    var userId = req.params.userId;
    var productId = req.params.productId;
    var order = req.body;

    orderModel
        .createOrder(userId,productId,order)
        .then(function(response){
            res.json(response)
        })
    
}


