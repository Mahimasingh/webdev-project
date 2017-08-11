(function () {
    angular
        .module("estiloApp")
        .factory("shoppingCartService", shoppingCartService);

    function shoppingCartService($http) {



        var api = {
            "getCartByUserId": getCartByUserId
        };
        return api;

        function getCartByUserId(userId) {
            var url = "/api/user/" + userId + "/cart";
            return $http.get(url);

        }


    }
})();