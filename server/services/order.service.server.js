var app = require('../../express');
var orderModel = require("../models/order/order.model.server");

app.get("/api/orders/:userId",getAllOrders);


function getAllOrders(req,res) {
    var userId = req.params.userId;
    orderModel
        .getOrdersByDeliveryId(userId)
        .then(function (response) {
            res.json(response);

        })

}


