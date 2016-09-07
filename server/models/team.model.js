var mongoose = require("mongoose");

var TeamSchema = new mongoose.Schema({
    name: String,
    ownerId: String,
    playerGroup: [{ league: String, name : String, id: Number }],
});

module.exports = mongoose.model("Team", TeamSchema);