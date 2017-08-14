(function () {

    angular
        .module("estiloApp")
        .controller("adminProductViewController", adminProductViewController);

    function adminProductViewController($routeParams,productService) {

        var model = this;


        function init() {
            productService.getAllProducts()
                .then(function (response) {
                    model.products = response.data;

                });

        }
        init();
    }
    }
)();