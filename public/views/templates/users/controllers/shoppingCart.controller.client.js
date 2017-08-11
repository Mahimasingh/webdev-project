(function () {

    angular
        .module("estiloApp")
        .controller("shoppingCartViewController", shoppingCartViewController);

    function shoppingCartViewController($routeParams,shoppingCartService) {
        var model = this;
        var userId = $routeParams["userId"];




        function init() {


            shoppingCartService.getCartByUserId(userId)
                .then(function (response) {

                    model.shoppingCart = response.data;

                })





        }
        init();




    }
})();