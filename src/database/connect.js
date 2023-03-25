const mongoose = require("mongoose");
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs.nc7gwlk.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Connection failure: ", error);
  }
};

module.exports = connectToDatabase;
