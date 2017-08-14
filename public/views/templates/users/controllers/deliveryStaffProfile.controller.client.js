(function () {

    angular
        .module("estiloApp")
        .controller("deliveryProfileController",deliveryProfileController);

    function deliveryProfileController($location, orderService,$routeParams,userService) {

        var model = this;
        var userId = $routeParams["userId"];
        model.userId = userId;
        model.fetchAllOrders = fetchAllOrders;

        function init() {
            userService.findUserById(userId)
                .then(function (response) {
                    model.user= response.data;

                });
        }
        init();

        function fetchAllOrders(userId) {
            orderService
                .getAllOrdersByDeliveryId(userId)
                .then(function (response) {
                    model.orders = response.data;

                })

        }

    }})();