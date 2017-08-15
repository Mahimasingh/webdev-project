(function () {

    angular
        .module("estiloApp")
        .controller("adminProductEditController", adminProductEditController);

    function adminProductEditController($routeParams, productService,$location) {
        var model = this;
        model.userId = $routeParams["userId"];
        model.productId = $routeParams["productId"];
        model.update = update;

        function init() {
            productService
                .getProductById(model.productId)
                .then(function (response) {
                    model.product = response.data;

                })

        } init();

        function update(product) {
            productService
                .updateProduct(product)
                .then(function (response) {
                    $location.url("/profile/admin/" + model.userId + "/products")

                })

        }

    }
})();