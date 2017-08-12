(function () {

    angular
        .module("estiloApp")
        .controller("showUsersController", showUsersController);

    function showUsersController($routeParams,userService) {
        var model = this;
        var userId = $routeParams["userId"];
        model.userId = userId;
        model.addWishListToUserFollowers = addWishListToUserFollowers;



        function init() {


            userService.getAllUsers()
                .then(function (response) {

                    var _users = response.data;

                    for(var u in _users){

                        if(_users[u]._id == userId)
                        var index = u;
                    }

                    _users.splice(index,1);
                    model.users = _users;

                })
        }
        init();

        function addWishListToUserFollowers(wishListId) {
            userService.addtoFollowers(wishListId)
                .then(function (response) {
                    model.message = "Successfully Added!"

                })

        }




    }
})();