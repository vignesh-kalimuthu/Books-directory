const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err, "MongoDB connection error"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
