var express = require("express");
var mongoose = require("mongoose");
var User = require("../models/user.model");
var utils = require("../utils")

var router = express.Router();
router.route("/")
    .post(function(req,res){
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
    })
    .get(function(req,res){
        
    });



module.exports.routes = router;