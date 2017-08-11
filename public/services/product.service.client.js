(function () {
    angular
        .module("estiloApp")
        .factory("productService", productService);

    function productService($http) {



        var api = {
            "getProductByType": getProductByType
        };
        return api;

        function getProductByType(type) {
            var url = "/api/product/" + type;
            return $http.get(url);

        }


    }
})();