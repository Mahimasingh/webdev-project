(function () {
    angular
        .module("estiloApp")
        .factory("wishListService", wishListService);

    function wishListService($http) {



        var api = {
            "getWishByUserId": getWishByUserId,
            "getAllWishLists" : getAllWishLists,
            "addProductToWishList" : addProductToWishList,
            "removeProduct" : removeProduct

        };
        return api;

        function removeProduct(userId,product) {
            console.log("I came here!!")
            var url = "/api/user/" + userId + "/wishList/delete";
            return $http.put(url,product);

        }

        function getWishByUserId(userId) {
            var url = "/api/user/" + userId + "/wishList";
            return $http.get(url);

        }

        function getAllWishLists() {
            var url = "/api/wishLists";
            return $http.get(url);

        }

        function addProductToWishList(userId,product) {

            var url = "/api/user/" + userId + "/wishList";
            return $http.put(url,product);

        }




    }
})();