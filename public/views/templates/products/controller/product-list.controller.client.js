(function () {

    angular
        .module("estiloApp")
        .controller("productListController", productListController);

    function productListController($routeParams,userService,productService,orderService,$location) {
        var model = this;
        model.productType = $routeParams['productType'];
        model.loginAndCreateOrder = loginAndCreateOrder;

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
                .then(function(user){
                    if(product.quantity >= order.quantity){
                        orderService
                            .createOrder(product._id,user.data._id,order)
                            .then(function(res){
                                $location.url("#!/user/"+ user._id +"/shoppingCart")
                                    })

                    }

                    else
                    {
                        model.message = "Sorry! We are currently out of Stock for this product."
                    }
                })
            
        }




    }
})();