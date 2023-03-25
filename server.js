const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require routes
const UserRoute = require("./routes/userRoute");

// use routes
app.use("/users", UserRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
