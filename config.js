(function () {

    angular
        .module("estiloApp")
        .config(configuration);
    function configuration($routeProvider,$httpProvider) {

        $routeProvider
            .when("/", {
            templateUrl: "public/views/templates/home/homeViews/home.view.client.html",
            controller : "homeController",
            controllerAs : "model"

            })
            .when("/contact", {
                templateUrl: "public/views/templates/home/homeViews/contact.html"


            })


            .when("/register", {
                templateUrl: "public/views/templates/users/userViews/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "public/views/templates/users/userViews/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/profile/admin",{
                templateUrl :"public/views/templates/users/AdminView/admin.profile.view.html",
                controller : "adminProfileController",
                controllerAs : "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/profile/admin/:userId/products",{
                templateUrl : "public/views/templates/products/productViews/product-list-admin.view.client.html",
                controller : "adminProductViewController",
                controllerAs : "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/profile/admin/:userId/product/new",{
                templateUrl : "public/views/templates/products/productViews/product-new.view.client.html",
                controller : "adminProductNewController",
                controllerAs : "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/profile/admin/:userId/product/:productId",{
                templateUrl : "public/views/templates/products/productViews/product-edit-admin.client.html",
                controller : "adminProductEditController",
                controllerAs : "model",
                resolve: {
                    user: checkLogin
                }
            })

            .when("/profile/deliveryStaff",{
                templateUrl : "public/views/templates/users/DeliveryStaffView/deliveryStaff.profile.view.html",
                controller : "deliveryProfileController",
                controllerAs : "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/user/:userId/showUsers",{
                templateUrl : "public/views/templates/users/userViews/showUsers.view.client.html",
                controller: "showUsersController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/user/:userId/shoppingCart",{
                templateUrl : "public/views/templates/users/shoppingCartViews/shopping-cart.view.client.html",
                controller : "shoppingCartViewController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }

            })
            .when("/user/:userId/wishList",{
                templateUrl : "public/views/templates/users/wishListViews/wishList-list.view.client.html",
                controller : "wishlistViewController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }

            })


            .when("/user/:userId/likes",{
                templateUrl: "public/views/templates/users/userViews/likes.view.client.html",
                controller: "likesController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }
            })

            .when("/product/:productType",{
                templateUrl : "public/views/templates/products/productViews/product-list-customer.view.client.html",
                controller: "productListController",
                controllerAs: "model"
        })

            .when("/product/info/:productId",{
            templateUrl : "public/views/templates/products/productViews/product-edit.view.client.html",
            controller: "productEditController",
            controllerAs: "model"
        })
    }

    function checkLogin(userService, $q, $location) {
        var deferred = $q.defer();
        userService
            .checkLogin()
            .then(function (user) {
                if(user === '0') {
                    deferred.reject();
                    $location.url("/");
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }
})();
