const express = require("express");
const app = express();
const PORT = 3000;

const cors = require("cors");
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/route");
app.use("/", routes);

app.get("/", (req, res) => {
  res.send(`<h1>Namaste Authentication</h1>`);
});

const dbConnect = require("./database/db");
dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`);
});
