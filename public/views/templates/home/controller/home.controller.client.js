(function () {

    angular
        .module("estiloApp")
        .controller("homeController", homeController);

    function homeController($location, userService,$rootScope) {
        var model = this;

        model.login = login;

        function init() {

        }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            var promise = userService.findUserByUsernameAndPassword(user.username, user.password);
            promise
                .then(function (response){

                        user = response.data;
                        if(user === null) {
                            model.errorMessage = "User not found";
                        } else {
                            $rootScope.currenUser = user;
                            $location.url("/profile/"+user._id);
                        }

                    }

                )

        }


    }
})();