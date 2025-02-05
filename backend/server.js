//  Express is a web framework for Node.js that makes it easy to create APIs and web applications.
import express from "express";
// Enables Cross-Origin Resource Sharing (CORS), allowing your API to be accessed from different domains.
import cors from "cors";
//  Allows you to store environment variables in a .env file, keeping sensitive data like API keys secure.
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// add config
const app = express();
const PORT = process.env.PORTAL || 2020;
connectDB();
connectCloudinary();

// middelware
//whith the help of middeleware we can access the request and respons and moify as well
app.use(express.json());
app.use(cors());
//api endpoint
// An API endpoint is a specific URL where an API receives requests and sends responses.
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("This Is Sparta and The Server is Working");
});

//call the server
app.listen(PORT, () => {
  console.log("The Server is Working Sucessfully", `http://localhost:${PORT}`);
});
