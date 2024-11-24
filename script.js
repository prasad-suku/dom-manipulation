const { error } = require("console");
const express = require("express");
const app = express();
const path = require("path");

// middleware function to handleerror

const handleError = (message, status = 500) => {
  const error = new Error(message);
  // console.log(message);

  error.status = status;
  return error;
};

// sample json data to server

const users = [
  { id: 1, name: "arun", place: "erode" },
  { id: 2, name: "somu", place: "trichy" },
  { id: 3, name: "kamesh", place: "chennai" },
  { id: 4, name: "rajesh", place: "karur" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res, next) => {
  const userid = parseInt(req.params.id);
  console.log(userid);

  if (isNaN(userid)) {
    return next(handleError("invalid user id please check", 5000));
  }

  // find user based no id
  const username = users.find((u) => u.id === userid);

  if (!username) {
    return next("User not found", 404);
  }

  res.json(username);
  // res.send("data");
});

//middleware to handleerror

app.use((err, req, res, next) => {
  console.error(err.message); // Log the error stack for debugging
  const errorResponse = {
    message: err.Error, // Use err.message
    statuscode: err.status, // Use err.status or default to 500
  };
  res.status(errorResponse.statuscode).json(errorResponse); // Set the status code for the response
});

app.listen(3000, () => console.log("running on 3000 port"));
// // middlewares

// app.use(express.static(path.join(__dirname, "public")));
// // call the middleware

// app.get("^/$|/index(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// //  text page
// app.get("/text(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "text.html"));
// });
// app.get("/*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "404.html"));
// });

// app.listen(3000, () => console.log("server running on 3000 port"));
