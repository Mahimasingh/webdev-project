(function () {

    angular
        .module("estiloApp")
        .controller("showUsersController", showUsersController);

    function showUsersController($routeParams,userService,wishListService) {
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

        function addWishListToUserFollowers(userToFollowId) {
            wishListService.getWishByUserId(userToFollowId)
                .then(function (wishList) {
                    return userService.
                    addWishListToFollowingList(model.userId,wishList.data._id,wishList);


                        })
                .then(function (response) {

                    model.message = "Added to your WishList";
                })

        }

    }





})();