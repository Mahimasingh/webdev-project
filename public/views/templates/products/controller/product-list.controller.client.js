(function () {

    angular
        .module("estiloApp")
        .controller("productListController", productListController);

    function productListController($routeParams,productService) {
        var model = this;
        model.productType = $routeParams['productType'];



        function init() {


                productService.getProductByType(model.productType)
                    .then(function (response) {

                        model.products = response.data;

                    })





        }
        init();




    }
})();