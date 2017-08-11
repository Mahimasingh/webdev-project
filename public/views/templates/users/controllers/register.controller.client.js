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

        function register(user) {
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
                    var _user = response.data;
                    $location.url("/profile/" + _user._id);
                });
        }
    }
})();