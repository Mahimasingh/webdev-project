(function () {

    angular
        .module("estiloApp")
        .controller("adminProfileController",adminProfileController);

    function adminProfileController($location, userService,$routeParams,shoppingCartService,wishListService,productService) {

        var model = this;
        var userId = $routeParams["userId"];
        model.userId = userId;
        model.fetchAllBuyers = fetchAllBuyers;
        model.fetchAllWishLists = fetchAllWishLists;
        model.fetchDeliveryStaff = fetchDeliveryStaff;
        model.fetchAllShoppingCarts = fetchAllShoppingCarts;


        function init() {
            userService.findUserById(userId)
                .then(function (response) {
                    model.user= response.data;

                });
        }
        init();

        function fetchAllBuyers() {
            userService.getAllUsers()
                .then(function (response) {

                    var _users = response.data;
                    var _buyers = [];

                    for(u in _users){
                        if(_users[u].type == 'BUYER'){
                            _buyers.push(_users[u]);
                        }
                    }

                    model.buyers = _buyers;

                })

        }

        function fetchAllShoppingCarts() {
            shoppingCartService.getAllCarts()
                .then(function (response) {
                    model.shoppingCarts = response.data;

                })


        }
        function fetchAllWishLists() {
            wishListService.getAllWishLists()
                .then(function (response) {
                    model.wishLists = response.data;

                })

        }

        function fetchDeliveryStaff() {
            userService.getAllUsers()
                .then(function (response) {

                    var _users = response.data;
                    var _delivery = [];

                    for(u in _users){
                        if(_users[u].type == 'DELIVERY_STAFF'){
                            _delivery.push(_users[u]);
                        }
                    }

                    model.delivery = _delivery;

                })

        }







    }})();