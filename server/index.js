const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const routes = require("./routes/api");
const HttpError = require("./models/httpError");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

mongoose.set("useFindAndModify", false);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use(multer().any()); // multipart/form-data middleware
app.use(express.json());

app.use("/api", routes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
