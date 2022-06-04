const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((e) => {
    console.log(e);
    console.log("Connection Faield");
  });
