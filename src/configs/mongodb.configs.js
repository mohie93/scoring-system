require("dotenv").config({});

const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log(`Connected To MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
