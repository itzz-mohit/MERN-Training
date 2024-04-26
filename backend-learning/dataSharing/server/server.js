const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const list = [
  {
    title: "Mohit",
    subtitle: "I am boy",
  },
  {
    title: "Lisa",
    subtitle: "I am girl",
  },
];

app.get("/", (req, res) => {
  console.log("Button clicked");
});

app.get("/card", (req, res) => {
  res.json(list);
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
