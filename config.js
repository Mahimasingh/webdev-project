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


            .when("/register", {
                templateUrl: "public/views/templates/users/userViews/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/profile/:userId", {
                templateUrl: "public/views/templates/users/userViews/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/profile/admin/:userId",{
                templateUrl :"public/views/templates/users/AdminView/admin.profile.view.html",
                controller : "adminProfileController",
                controllerAs : "model"
            })
            .when("/profile/admin/:userId/products",{
                templateUrl : "public/views/templates/products/productViews/product-list-admin.view.client.html",
                controller : "adminProductViewController",
                controllerAs : "model"
            })
            .when("/profile/admin/:userId/product/new",{
                templateUrl : "public/views/templates/products/productViews/product-new.view.client.html",
                controller : "adminProductNewController",
                controllerAs : "model"
            })
            .when("/profile/admin/:userId/product/:productId",{
                templateUrl : "public/views/templates/products/productViews/product-edit-admin.client.html",
                controller : "adminProductEditController",
                controllerAs : "model"
            })

            .when("/profile/deliveryStaff/:userId",{
                templateUrl : "public/views/templates/users/DeliveryStaffView/deliveryStaff.profile.view.html",
                controller : "deliveryProfileController",
                controllerAs : "model"
            })
            .when("/user/:userId/showUsers",{
                templateUrl : "public/views/templates/users/userViews/showUsers.view.client.html",
                controller: "showUsersController",
                controllerAs: "model"
            })
            .when("/user/:userId/shoppingCart",{
                templateUrl : "public/views/templates/users/shoppingCartViews/shopping-cart.view.client.html",
                controller : "shoppingCartViewController",
                controllerAs: "model"

            })
            .when("/user/:userId/wishList",{
                templateUrl : "public/views/templates/users/wishListViews/wishList-list.view.client.html",
                controller : "wishlistViewController",
                controllerAs: "model"

            })


            .when("/user/:userId/likes",{
                templateUrl: "public/views/templates/users/userViews/likes.view.client.html",
                controller: "likesController",
                controllerAs: "model"
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
})();
