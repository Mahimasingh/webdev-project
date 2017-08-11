(function () {

    angular
        .module("estiloApp")
        .config(configuration);
    function configuration($routeProvider,$httpProvider) {

        $routeProvider
            .when("/", {
            templateUrl: "public/views/templates/home/home.view.client.html",
            controller : "homeController",
            controllerAs : "model"

            })


            .when("/register", {
                templateUrl: "public/views/templates/users/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/profile/:userId", {
                templateUrl: "public/views/templates/users/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/user/:userId/shoppingCart",{
                templateUrl : "public/views/templates/users/shoping-cart.view.client.html",
                controller : "shoppingCartViewController",
                controllerAs: "model"

            })
            .when("/user/:userId/wishList",{
                templateUrl : "public/views/templates/users/wishList-list.view.client.html",
                controller : "wishlistViewController",
                controllerAs: "model"

            })
            .when("/user/:userId/shoppingCart/:shoppingCart",{
                templateUrl: "public/views/templates/users/shoping-cart-edit.view.client.html",
                controller : "shoppingCartEditController",
                controllerAs: "model"


            })
            .when("/user/:userId/wishlist/:wishlist",{
                templateUrl: "public/views/templates/users/wishList-edit.view.client.html",
                controller : "wishlistEditController",
                controllerAs: "model"


            })
            .when("/user/:userId/likes",{
                templateUrl: "public/views/templates/users/likes.view.client.html",
                controller: "likesController",
                controllerAs: "model"
            })

            .when("/product/:productType",{
                templateUrl : "public/views/templates/products/product-list-customer.view.client.html",
                controller: "productListController",
                controllerAs: "model"
        })
    }
})();
