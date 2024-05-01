const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const list = [
  {
    title: "Mohit",
  },
  {
    title: "Lisa",
  },
];

app.get("/", (req, res) => {
  console.log("Button clicked");
});

app.get("/card", (req, res) => {
  res.json(list);
});

app.post("/data", (req, res) => {
  const mdl = req.body.mdl;
  console.log(mdl);
  list.push({
    title: mdl,
  });
  res.json(mdl);
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
