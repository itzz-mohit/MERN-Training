const express = require("express");

const app = express();
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

app.post("/auth", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  if (email === "abc@gmail.com" && pass === "123") {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
