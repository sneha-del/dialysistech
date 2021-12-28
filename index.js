const express = require("express");
const dotenv = require("dotenv");
// const connectDB = require("./config/db.js");
const favicon = require("serve-favicon");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


require("dotenv").config();

const app = express();

// connectDB();
const uri = process.env.MONGO_URL;
const port = process.env.PORT || 5000;

// const PORT = process.env.PORT || 5000;

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", require("./routes/auth"));

// Serve static assets in production
// if (process.env.NODE_ENV === "production") {
// 	// Set Static Folder
// 	app.use(express.static("mern-auth/build"));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "mern-auth", "build", "index.html"));
// 	});
// }


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend", "build", "index.html"));
});
}


// mongoose
//   .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
//   )
//   .catch((error) => console.log(`${error} did not connect`));

app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
  });
  
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
     // useCreateIndex: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) => console.error("MongoDB connection failed:", error.message));
  

// app.listen(
// 	PORT,
// 	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );