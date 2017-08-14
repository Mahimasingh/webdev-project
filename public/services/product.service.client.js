(function () {
    angular
        .module("estiloApp")
        .factory("productService", productService);

    function productService($http) {



        var api = {
            "getProductByType": getProductByType,
            "getAllProducts" : getAllProducts,
            "addProductToCatalog" : addProductToCatalog
        };
        return api;

        function getProductByType(type) {
            var url = "/api/product/" + type;
            return $http.get(url);

        }

        function getAllProducts() {
            var url = "/api/products";
            return $http.get(url);

        }

        function addProductToCatalog(product) {
            var url = "/api/product";
            return $http.post(url,product);

        }


    }
})();