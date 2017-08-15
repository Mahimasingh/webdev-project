(function () {

    angular
        .module("estiloApp")
        .controller("adminProductViewController", adminProductViewController);

    function adminProductViewController($routeParams,productService,$location) {

        var model = this;
        var user = $routeParams["userId"];
        model.userId = user;
        model.deleteProduct = deleteProduct;


        function init() {
            productService.getAllProducts()
                .then(function (response) {
                    model.products = response.data;

                });
        }
        init();

        function deleteProduct(product) {
            return productService
                .deleteProduct(product)
                .then(function (response) {
                    $location.url("#!/profile/admin/" + model.userId + "/products");

                })

        }
    }
    }
)();