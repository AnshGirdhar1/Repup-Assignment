const express = require("express");
const connection = require("./config/db");
const contactRouter = require("./routes/contacts.route");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

app.use("/contacts", contactRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection();
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
});
