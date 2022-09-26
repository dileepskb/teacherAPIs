var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const routes = require("./routes/route");
require("dotenv").config();
var cors = require("cors");
const port = process.env.PORT || 3000;
// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process."+port);
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});
var app = express();
//import routes

//console.log(teacherRoutes);
//route middleware
 app.use("/api/v1", routes);
//don't show the log when it is test
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//To allow cross-origin requests
app.use(cors());
// module.exports = app;
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});