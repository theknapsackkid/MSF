var express = require("express");
var bodyParser = require("body-parser");
var leagueController = require("./controllers/league.controller")
var userController = require("./controllers/user.controller")
var teamController = require("./controllers/team.controller")
var utils = require("./utils");
var mongoose = require("mongoose");

mongoose.connect(utils.connectionString);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/leagues", leagueController.routes);
app.use("/api/teams", teamController.routes);
app.use("/api/users", userController.routes);
app.listen(3030);