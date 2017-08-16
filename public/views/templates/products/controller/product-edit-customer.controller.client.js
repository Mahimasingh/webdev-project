(function () {

    angular
        .module("estiloApp")
        .controller("productEditController", productEditController);

    function productEditController($routeParams, productService,$location) {
        var model = this;

        model.productId = $routeParams["productId"];


        function init() {
            productService
                .getProductById(model.productId)
                .then(function (response) {
                    model.product = response.data;

                })

        } init();



    }
})();