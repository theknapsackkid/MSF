var mongoose = require("mongoose");
var Team = require("./team.model");

var LeagueSchema = new mongoose.Schema({
	leagueName: String,
	numberOfTeams: Number,
	playerUniverse: [ Number ],
	ownerId: String,
    teams: [ Team ],
    passwordToJoin: String
});

module.exports = mongoose.model("League", LeagueSchema);