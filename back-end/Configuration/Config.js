const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery",false)
    await mongoose.connect(
      /*Creating a database called 'test'*/
      "mongodb+srv://mohamedbenaguiltech:rQr71U1LF7jC72wP@cluster0.trgsla3.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Databse is connected");
  } catch (error) {
    console.log("Database is not connected", error);
  }
};
module.exports = connectDatabase
