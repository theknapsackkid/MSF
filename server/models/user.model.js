var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    nickName: { type: String, required: false },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model("User", UserSchema);