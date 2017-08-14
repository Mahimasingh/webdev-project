(function () {
    angular
        .module("estiloApp")
        .factory("orderService", orderService);

    function orderService($http) {



        var api = {

            "getAllOrdersByDeliveryId" : getAllOrdersByDeliveryId

        };
        return api;


        function getAllOrdersByDeliveryId(userId) {
            var url = "/api/orders/" + userId;
            return $http.get(url);

        }




    }
})();