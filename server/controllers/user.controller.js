var express = require("express");
var mongoose = require("mongoose");
var User = require("../models/user.model");
var utils = require("../utils")

var router = express.Router();
router.route("/")
    .post(function(req,res){
        User.find({ userName: req.body.userName}, function(err, users) {
            if(users.length > 0) {
                res.send({error: "There is already a user with this username"});
                return;
            }
            var user = new User();
            user.userName = req.body.userName;
            user.password = req.body.password;
            if (req.body.nickName)
                user.nickName = req.body.nickName
            
            user.save(function(err){
                if(err)
                    res.send(err);
                res.json(user);
            });
        });
    })
    .get(function(req,res){
        User.find({}, { _id:0, userName: 1, nickName: 1 }, function(err, users){
			if(err)
				res.send(err);
			res.json(users);
		});
    });
router.route("/login")
    .post(function(req,res){
        User.find( { userName: req.body.userName, password: req.body.password }, function(err, user){
            if(err)
                res.send(err);
            if(user.length === 0)
                res.send({ message: "Invalid credentials" });
            if(user.length === 1)
                res.json({ userId: user[0]._id });
            else
                res.send({ message: "Unexpected results" });
        })
    });



module.exports.routes = router;