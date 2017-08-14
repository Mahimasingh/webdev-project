(function () {
    angular
        .module("estiloApp")
        .factory("wishListService", wishListService);

    function wishListService($http) {



        var api = {
            "getWishByUserId": getWishByUserId,
            "getAllWishLists" : getAllWishLists

        };
        return api;

        function getWishByUserId(userId) {
            var url = "/api/user/" + userId + "/wishList";
            return $http.get(url);

        }

        function getAllWishLists() {
            var url = "/api/wishLists";
            return $http.get(url);

        }




    }
})();