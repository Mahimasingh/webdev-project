(function () {

    angular
        .module("estiloApp")
        .controller("shoppingCartViewController", shoppingCartViewController);

    function shoppingCartViewController($routeParams,$location,shoppingCartService) {
        var model = this;
        var userId = $routeParams["userId"];
        model.deleteOrderFromCart = deleteOrderFromCart;

        function init() {


            shoppingCartService.getCartByUserId(userId)
                .then(function (response) {

                    model.shoppingCart = response.data;

                })
        }
        init();

        function deleteOrderFromCart(cartId,order) {

            shoppingCartService
                .deleteOrder(cartId,order)
                .then(function (response) {

                    $location.url("/profile/" + userId);

            })

        }




    }
})();