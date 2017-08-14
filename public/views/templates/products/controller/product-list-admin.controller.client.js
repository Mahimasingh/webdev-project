(function () {

    angular
        .module("estiloApp")
        .controller("adminProductViewController", adminProductViewController);

    function adminProductViewController($routeParams,productService) {

        var model = this;
        model.showAllProducts = showAllProducts;

        function showAllProducts() {
            productService.getAllProducts()
                .then(function (response) {
                    model.products = response.data;

                })

        }
    }
    }
)();