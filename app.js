require("dotenv").config({});

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
const mongoDB = require("./src/configs/mongodb.configs");
const subscribeTopicService = require("./src/services/subscribeTopic.server");

// handle cross origin resource sharing
app.use(cors());

// handle request body parsing
app.use(express.json());

// connect to mongo db
mongoDB.connect();

// subscribe to pub/sub
// (async () => {
//   await subscribeTopicService.call();
// })();

// routes
app.use("/healthcheck", async (req, res) => {
  const version = require("./package.json").version;
  res.status(200).json({ message: "Ok", version });
});

app.use("/api/v1/riders", require("./src/routes/rider.routes"));

app.use("/api/v1/criteria", require("./src/routes/criterion.routes"));

// server listener
app.listen(port, () => console.log(`Server is running on port: ${port}`));
