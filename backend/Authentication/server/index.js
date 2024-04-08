const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = 3000;

const data = {
  name: "Mohit",
};

app.get("/", (req, res) => {
  res.send("Namaste Ji");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
