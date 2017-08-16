(function () {
    angular
        .module("estiloApp")
        .factory("orderService", orderService);

    function orderService($http) {



        var api = {

            "getAllOrdersByDeliveryId" : getAllOrdersByDeliveryId,
            "createOrder" : createOrder,
            "getAllOrders" : getAllOrders

        };
        return api;


        function getAllOrders() {
            var url = "/api/orders";
            return $http.get(url);

        }

        function getAllOrdersByDeliveryId(userId) {
            var url = "/api/orders/" + userId;
            return $http.get(url);

        }

        function createOrder(productId,userId,order) {
            var url = "/api/order/product/" + productId + "/user/" + userId;
            return $http.post(url,order);

        }




    }
})();