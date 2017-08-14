(function () {

    angular
        .module("estiloApp")
        .controller("productListController", productListController);

    function productListController($routeParams,productService,orderService) {
        var model = this;
        model.productType = $routeParams['productType'];
        model.createOrder = createOrder;

        function init() {


                productService.getProductByType(model.productType)
                    .then(function (response) {

                        model.products = response.data;

                    })
        }
        init();

        function createOrder(product,order) {
            
        }




    }
})();