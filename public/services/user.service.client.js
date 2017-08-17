(function () {
    angular
        .module("estiloApp")
        .service("userService", userService);

    function userService($http) {



        var api = {
            "findUserByUsername": findUserByUsername,
            "login": login,
            "findUserById": findUserById,
            "registerUser": registerUser,
            "updateUser": updateUser,
            "deleteUser" : deleteUser,
            "getAllUsers" : getAllUsers,
            "addWishListToFollowingList" : addWishListToFollowingList,
            "removeWishListFromArray" : removeWishListFromArray,
            "checkLogin" : checkLogin

        };
        return api;

        function checkLogin(){
            return $http
                .get("/api/checkLogin")
                .then(function (response) {
                    return response.data;
                    
                })
                    
        }
        function removeWishListFromArray(userId,wishListId){
            var url = "/api/user/" + userId + "/wishList/" + wishListId;
            return $http.delete(url);
        }
        function addWishListToFollowingList(userId,wishListId,wishList) {
            console.log("Entered the User Service");
            var url = "/api/user/"+ userId +"/wishList/" + wishListId;
            return $http.put(url,wishList);

            
        }
        function getAllUsers() {
            var url = "/api/users";
            return $http.get(url);

        }
        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url,user);

        }

        function registerUser(user) {

            var url = "/api/user";
            return $http.post(url,user);

        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;
            return $http.get(url);

        }
        function findUserById(userId) {
            return $http.get("/api/user/" + userId)
        }

        function login(username, password) {

            var url = "/api/login";
            return $http.post(url,{username : username, password : password});

        }

        // deleteUser(userId) - removes the user whose _id matches the userId parameter

        function deleteUser(userId){

            var url = "/api/user/" + userId;
            return $http.delete(url);

        }



    }
})();