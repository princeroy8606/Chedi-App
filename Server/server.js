const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter = require("./routes/authRoutes");
const plantRouter = require("./routes/plantRoutes");
const communityRouter = require("./routes/communityRoutes");

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(
  Cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("server connected");
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(8000, () => {
      console.log("conection established successfuly 🥳");
    });
  })
  .catch((err) => {
    console.log("DB-connection error:", err);
  });

app.use(express.json());

app.use("/auth", authRouter);
app.use("/plant", plantRouter);
app.use("/community", communityRouter);
