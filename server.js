const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");
const path = require("path");

// Importing User Mo
const User = require("./models/user");
// Importing Authentication Routes
const authRoutes = require("./routes/auth_routes");
// const userRoutes = require("./routes/user_routes");

const MONGODB_URI = `mongodb+srv://ayush:HE5DTxkD29rshQGj@nodelearning-lcptb.mongodb.net/test?retryWrites=true&w=majority`;

app.use(express.static(path.join(__dirname, "dist")));

//BODYPARSER MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/routes/auth", authRoutes);
// app.use("/routes/user", userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true  })
  .then(db => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(err => {
    console.log(err);
  });
