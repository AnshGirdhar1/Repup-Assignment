const mongoose = require("mongoose");
const connection = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connection;
