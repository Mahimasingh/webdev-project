(function () {
    angular
        .module("estiloApp")
        .controller("registerController", registerController);

    function registerController($routeParams,userService, $location) {
        var model = this;

        model.register = register;

        function init() {

        }
        init();

        function register(user,checkPassword) {

            if(user.username === null || user.username === '' || typeof user.username === 'undefined') {
                model.error = 'username is required';
                return;
            }

            if(user.password !== checkPassword || user.password === null || typeof user.password === 'undefined') {
                model.error = "passwords must match";
                return;
            }

            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if(_user === null) {
                        return userService.registerUser(user)
                    } else {
                        model.error = "User already exists";
                    }
                })
                .then(function (response) {
                    var varUser = response.data; //here you are getting back shoppingCart
                    $location.url("/profile");
                });
        }
    }
})();