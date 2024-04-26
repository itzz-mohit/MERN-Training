const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

mongoose.connect("mongodb://localhost:27017/lmstesting");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const data = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const auth = mongoose.model("auths", data);

app.post("/api/register", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  auth.findOne({ email: email }).then((data) => {
    if (data != null) {
      console.log("User already register");
    } else {
      bcrypt.hash(password, 10, function (err, hash) {
        const sendingName = new auth({
          username: username,
          email: email,
          password: hash,
        });
        sendingName.save().then((data) => {
          console.log("Data inserted Successfully");
          res.json(data);
        });
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  auth.findOne({ email: email }).then((data) => {
    if (data != null) {
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        console.log(result);
        res.json(result);
      });
    } else {
      console.log("User not found");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
