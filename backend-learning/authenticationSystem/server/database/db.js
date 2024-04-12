const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/authentication")
    .then(() => console.log("Database Connected!"))
    .catch((error) => {
      console.log("Issue in DB Connection");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
