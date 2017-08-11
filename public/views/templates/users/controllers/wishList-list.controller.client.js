(function () {

    angular
        .module("estiloApp")
        .controller("wishlistViewController", wishlistViewController);

    function wishlistViewController($routeParams,wishListService) {
        var model = this;
        var userId = $routeParams["userId"];




        function init() {


            wishListService.getWishByUserId(userId)
                .then(function (response) {

                    model.wishList = response.data;

                })





        }
        init();




    }
})();