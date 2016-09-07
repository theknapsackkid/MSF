var express = require("express");
var mongoose = require("mongoose");
var League = require("../models/league.model");
var utils = require("../utils");

//api routes
var router = express.Router();
router.route("/")
	.post(function(req,res) {
		var league = new League();
		league.name = req.body.name;
		league.numberOfTeams = req.body.numberOfTeams;
		league.playerUniverse = [req.body.nfl, req.body.mlb, req.body.nba];
		league.ownerId = req.body.ownerId;
		
		league.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: "Created new league" });
		});
	})
	.get(function(req,res) {
		League.find(function(err, leagues){
			if(err)
				res.send(err);
			res.json(leagues);
		});
	});
router.route("/:league_id")
	.get(function(req,res){
		console.log(req.params.league_id);
		League.findById(req.params.league_id, function(err, league){
			if (err)
				res.send(err);
			res.json(league);
		});
	})

module.exports.routes = router;