(function () {

    angular
        .module("estiloApp")
        .controller("productListController", productListController);

    function productListController($routeParams,userService,productService,orderService,$location) {
        var model = this;
        model.productType = $routeParams['productType'];
        model.loginAndCreateOrder = loginAndCreateOrder;
        model.loginAndAddToWishList = loginAndAddToWishList;

        function init() {


                productService.getProductByType(model.productType)
                    .then(function (response) {

                        model.products = response.data;

                    })
        }
        init();

        function loginAndCreateOrder(user,product,order) {

            if(!user) {
                model.errorMessage = "User not found";
                return;
            }

            userService.findUserByUsernameAndPassword(user.username, user.password)
                .then(function(foundUser){
                    if(product.quantity >= order.quantity){
                        order.amount = product.price * order.quantity;
                        orderService
                            .createOrder(product._id,foundUser.data._id,order)
                            .then(function(res){
                                $location.url("/user/"+ foundUser.data._id +"/shoppingCart")
                                    })

                    }

                    else
                    {
                        model.message = "Sorry! We are currently out of Stock for this product."
                    }
                })
            
        }

        function loginAndAddToWishList(user,product) {

            if(!user) {
                model.errorMessage = "User not found";
                return;
            }

            userService
                .findUserByUsernameAndPassword(user.username, user.password)
                .then(function(foundUser){
                    wishListService
                        .addProductToWishList(foundUser._id,product)
                        .then(function (response) {
                            $location.url("/user" + foundUser._id + "/wishList")

                        })
                })

        }




    }
})();