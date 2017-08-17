(function () {

    angular
        .module("estiloApp")
        .controller("deliveryProfileController",deliveryProfileController);

    function deliveryProfileController($location, orderService,$routeParams,userService,user) {

        var model = this;
        var userId = user._id;
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