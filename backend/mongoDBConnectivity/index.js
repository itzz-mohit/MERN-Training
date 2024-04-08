const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected!"));

const name = new mongoose.Schema({
  name: String,
});

const sendName = mongoose.model("tables", name);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
  const sendingName = new sendName({ name: "lisa" });
  sendingName.save().then(() => console.log("meow"));
});

