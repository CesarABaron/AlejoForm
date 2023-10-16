require("dotenv").config();
const router = require("./src/Routes/index");

const express = require("express");

const app = express();
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
