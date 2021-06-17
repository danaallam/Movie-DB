const mongoose = require("mongoose");

const url =
  "mongodb+srv://dbUser:dbUser@cluster0.rewtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = async () => {
  await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
  console.log("Successfully connected");
};

module.exports = connection;
