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
                model.errorMessage = "Username and passwords are mandatory";
                return;
            }
            if(user.username === null || user.username === '' || typeof user.username === 'undefined') {
                model.errorMessage = 'username is required';
                return;
            }

            if(user.password === null || typeof user.password === 'undefined') {
                model.errorMessage = "passwords is required";
                return;
            }


            userService
                .login(user.username, user.password)
                .then(function (response){

                        user = response.data;
                        if(user === null) {
                            model.errorMessage = "User not found";
                        } else {
                            $rootScope.currenUser = user;
                            if(user.type == 'BUYER') {
                                $location.url("/profile");
                            }
                            else if(user.type == 'ADMIN'){
                                $location.url("/profile/admin");
                            }

                            else if(user.type == 'DELIVERY_STAFF'){
                                $location.url("/profile/deliveryStaff/");
                            }
                        }

                    }

                )

        }


    }
})();