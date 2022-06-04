const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//Here Product is name of collection
const User = mongoose.model("User", userSchema);

module.exports = User;
