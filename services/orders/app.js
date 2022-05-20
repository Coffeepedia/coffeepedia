"use strict";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const routerIndex = require("./routes/index.js");
const port = process.env.PORT || 4002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(routerIndex);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
