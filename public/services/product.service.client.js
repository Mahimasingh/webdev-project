(function () {
    angular
        .module("estiloApp")
        .factory("productService", productService);

    function productService($http) {



        var api = {
            "getProductByType": getProductByType,
            "getAllProducts" : getAllProducts,
            "addProductToCatalog" : addProductToCatalog,
            "updateProductQuantityInCatalog" : updateProductQuantityInCatalog,
            "getProductById" : getProductById,
            "updateProduct" : updateProduct,
            "deleteProduct" : deleteProduct
        };
        return api;

        function deleteProduct(product) {
            var url = "/api/product/" + product._id;
            return $http.delete(url,product);

        }
        function updateProduct(product) {
            var url ="/api/product/" + product._id;
            return $http.put(url,product);

        }

        function getProductById(productId) {
            var url = "/api/product/" + productId;
            return $http.get(url);

        }

        function updateProductQuantityInCatalog(product,quantity) {
            var url = "/api/product/quantity/" + quantity;
            return $http.put(url,product);


        }
        function getProductByType(type) {
            var url = "/api/product/type/" + type;
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