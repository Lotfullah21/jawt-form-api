require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const mainRoute = require("./routes/main");
// middle ware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRoute);

// errors
app.use(notFound);
app.use(errorHandler);

// port
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening to port ${port} .....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
