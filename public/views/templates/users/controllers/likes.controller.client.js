(function () {

    angular
        .module("estiloApp")
        .controller("likesController", likesController);

    function likesController($routeParams,userService,$location) {
        var model = this;
        var userId = $routeParams["userId"];
        model.userId = userId;
        model.removeWishListFromFollowing = removeWishListFromFollowing;
        function init() {


            userService.findUserById(userId)
                .then(function (user) {

                    model.following = user.data.follow_wishlist;

                })
        }
        init();

        function removeWishListFromFollowing(wishListId) {
            userService.removeWishListFromArray(model.userId,wishListId)
                .then(function (response) {

                    $location.url("/profile");
                })

        }





    }
})();