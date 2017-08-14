(function () {

    angular
        .module("estiloApp")
        .controller("adminProductNewController", adminProductNewController);

    function adminProductNewController($routeParams, productService,$location) {
        var model = this;
        model.userId = $routeParams["userId"];
        model.addProduct = addProduct;

        function addProduct(product) {
            productService
                .addProductToCatalog(product)
                .then(function(response){
                    $location.url("/profile/admin/" +model.userId + "/products");
                })

        }

    }
})();