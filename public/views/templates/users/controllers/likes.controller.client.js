(function () {

    angular
        .module("estiloApp")
        .controller("likesController", likesController);

    function likesController($routeParams,userService) {
        var model = this;
        var userId = $routeParams["userId"];




        function init() {


            userService.findUserById(userId)
                .then(function (response) {

                    model.following = response.data.follow_wishlist;

                })





        }
        init();




    }
})();