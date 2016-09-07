var express = require("express");
var mongoose = require("mongoose");
var User = require("../models/user.model");
var utils = require("../utils")

var router = express.Router();
router.route("/")
    .post(function(req,res){
        User.find({ userName: req.body.userName}, function(err, users) {
            if(users.length > 0) {
                res.send({error: "No"});
                return;
            }
            var user = new User();
            user.userName = req.body.userName;
            user.password = req.body.password;
            if(req.body.nickName)
                user.nickName = req.body.nickname
            
            user.save(function(err){
                if(err)
                    res.send(err);
                res.json(user);
            });
        });
    })
    .get(function(req,res){
        User.find(function(err, users){
			if(err)
				res.send(err);
			res.json(users);
		});
    });



module.exports.routes = router;