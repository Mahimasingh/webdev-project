(function () {
    angular
        .module("estiloApp")
        .factory("shoppingCartService", shoppingCartService);

    function shoppingCartService($http) {



        var api = {
            "getCartByUserId": getCartByUserId,
            "getAllCarts" : getAllCarts,
            "deleteOrder" : deleteOrder
        };
        return api;

        function deleteOrder(cartId,order) {

            var url = "/api/shoppingCart/" + cartId;
            return $http.put(url,order);

        }

        function getCartByUserId(userId) {
            var url = "/api/user/" + userId + "/cart";
            return $http.get(url);

        }

        function getAllCarts() {
            var url = "/api/shoppingCarts";
            return $http.get(url);

        }


    }
})();