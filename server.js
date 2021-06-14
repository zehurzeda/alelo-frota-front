//Install express server
const express = require("express");
const path = require("path");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

// Serve only the static files form the dist directory
app.use(express.static("./dist/alelo-frota-test"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/alelo-frota-test/" })
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
