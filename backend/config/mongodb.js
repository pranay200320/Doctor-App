// A library for connecting and interacting with MongoDB databases.
import mongoose from "mongoose";

// IN this js file we can set-up database connection
const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database Is Connected")
  );
  mongoose.connection.on("disconnected", () =>
    console.log("Database Is DisConnected")
  );
  // tiwaripranay290
  // XupcnAnXFnAkrIxa
  await mongoose.connect(`${process.env.MONGO_DB_DATA}/prescripto`);
};
export default connectDB;
