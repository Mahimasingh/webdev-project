(function () {

    angular
        .module("estiloApp")
        .controller("wishlistViewController", wishlistViewController);

    function wishlistViewController($routeParams,wishListService,$location) {
        var model = this;
        var userId = $routeParams["userId"];
        model.removeProductFromList = removeProductFromList;

        function init() {


            wishListService.getWishByUserId(userId)
                .then(function (response) {

                    model.wishList = response.data;

                })
        }
        init();

        function  removeProductFromList(product) {
            wishListService
                .removeProduct(userId,product)
                .then(function (response) {

                    $location.url("/profile");

                })

        }




    }
})();