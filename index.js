var express = require("express");
var path = require("path");
let bodyParser = require('body-parser')
var cookieParser = require("cookie-parser");
const routes = require("./routes/route");
const userRoute = require("./routes/user");
const IP = require("./model/IPAddress");
require("dotenv").config();
var cors = require("cors");
const port = process.env.PORT || 3000;
// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //don't show the log when it is test
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected to %s", MONGODB_URL);
      console.log("App is running ... \n");
      console.log("Press CTRL + C to stop the process." + port);
    }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var app = express();
//import routes

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1", routes);
app.use("/api/user", userRoute);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//To allow cross-origin requests
app.use(cors());

const myLogger = function (req, res, next) {
  const trackIp = new IP({
    ipInfo: req.ip,
  });
  trackIp.save();
  next()
}

app.use(myLogger);

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:2000', 'https://classes-c4sw.vercel.app/', 'https://prvtutors.com/'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);


  return next();
});

// module.exports = app;
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
