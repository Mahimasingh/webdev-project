(function () {
    angular
        .module("estiloApp")
        .service("userService", userService);

    function userService($http) {



        var api = {
            "findUserByUsername": findUserByUsername,
            "findUserByUsernameAndPassword": findUserByUsernameAndPassword,
            "findUserById": findUserById,
            "registerUser": registerUser,
            "updateUser": updateUser,
            "deleteUser" : deleteUser,
            "getAllUsers" : getAllUsers,
            "addWishListToFollowingList" : addWishListToFollowingList,
            "removeWishListFromArray" : removeWishListFromArray

        };
        return api;

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

        function findUserByUsernameAndPassword(username, password) {

            var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url);

        }

        // deleteUser(userId) - removes the user whose _id matches the userId parameter

        function deleteUser(userId){

            var url = "/api/user/" + userId;
            return $http.delete(url);

        }



    }
})();