(function () {
    angular
        .module("estiloApp")
        .factory("wishListService", wishListService);

    function wishListService($http) {



        var api = {
            "getWishByUserId": getWishByUserId

        };
        return api;

        function getWishByUserId(userId) {
            var url = "/api/user/" + userId + "/wishList";
            return $http.get(url);

        }




    }
})();