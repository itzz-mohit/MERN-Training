const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected!"));

const name = new mongoose.Schema({
  name: String,
});

const credential = new mongoose.Schema({
  email: String,
  pass: String,
});
const sendName = mongoose.model("tables", name);
const sendCredential = mongoose.model("auths", credential);

app.set("view engine", "hbs");

// when we request data from frontend, it is unstructured form which is difficult to read; so we use body parser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("dashboard");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(`Email : ${email}`);
  console.log(`Password : ${password}`);
  // const credentialDetails = sendCredential({ email: email, pass: password });
  // credentialDetails.save().then((data) => res.render("dashboard"));

  bcrypt.hash(password, 10, function (err, hash) {
    // console.log(hash);
    const credentialDetails = sendCredential({ email: email, pass: hash });
    credentialDetails.save().then((data) => res.render("dashboard"));
  });
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);

  const sendingName = new sendName({ name: "lisa" });
  sendingName.save().then(() => console.log("meow"));

  const getData = await sendName.find().then((res) => console.log(res));
});
