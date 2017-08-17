var app = require('../../express');
var userModel = require("../models/user/user.model.server");
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);


app.get("/api/users",getAllUsers);
app.get("/api/user/:userId",getUserById);
app.get("/api/user",findUser);
app.post("/api/login",passport.authenticate('local'),login);
app.post("/api/register",registerUser);
app.put("/api/user/:userId",updateUser);
app.delete("/api/user/:userId",deleteUser);
app.put("/api/user/:userId/wishList/:wishListId", addToWishList);
app.delete("/api/user/:userId/wishList/:wishList",deleteFromWishList);
app.get("/api/checkLogin",checkLogin)

function checkLogin(req,res) {
    res.send(req.isAuthenticated() ? req.user : '0');

}
function login(req,res)  {
    var user = req.user;
    res.json(user);
}

function localStrategy(username, password, done) {
    userModel
        .findUserByCredentials(username,password)
        .then(
            function(user) {
                if (!user) { return done(null, false); }
                return done(null, user);
            },
            function(err) {
                if (err) { return done(err); }
            }
        );
}

function deleteFromWishList(req,res) {
    var userId = req.params.userId;
    var wishListId = req.params.wishListId;
    userModel
        .deleteWishListFromFollowingArray(userId,wishListId)
        .then(function (response) {
            res.json(response);

        })
}

function addToWishList(req,res) {

    var userId = req.params.userId;
    var wishListId = req.params.wishListId;
    userModel
        .addToWishListArray(userId,wishListId)
        .then(function (response) {
            res.json(response);

        })


}



function deleteUser(req,res) {

    userId = req.params.userId;

    userModel
        .deleteUserById(userId)

        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}



function getAllUsers(req,response) {
    userModel
        .getAllUsers()
        .then(function(res){
            response.json(res);
        })
}

function getUserById(req,response) {

    userModel
        .findUserById(req.params.userId)
        .then(function (user) {
            response.json(user);
        });
    //
    // for(var u in users){
    //     if(users[u]._id === req.params.userId){
    //         response.send(users[u]);
    //     }
    // }

}

function findUser(req, res) {



    var username = req.query.username;



        userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    res.json(user);

                },
                function (err) {
                    res.status(404).json({message: err.message });
                });

}

function registerUser(req,response) {

    var user = req.body;

    userModel
        .createUser(user)
        .then(function (user) {
            req
                .login(user, function (status) {
                    res.send(status);
                })
        });


}

function updateUser(req,res) {
    var userId = req.params.userId;
    var user = req.body;

    userModel
        .updateUser(userId, user)
        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.sendStatus(404).send(err);
        });

}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
}

