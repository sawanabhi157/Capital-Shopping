const express = require("express");
const cors = require("cors");
require("./config/db");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Whatever req come from body it will recognise as json object
app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// You DO NOT NEED express.json() and express urlencoded() for GET Requests or
// DELETE Request . we only need it for post and put request .

// express.json() is a method inbuilt in
// express to recoginize the incoming
// Request Object as a JSON Object . This Method is called as a middleware in
// your application using the code :
// app.use(express.json());
