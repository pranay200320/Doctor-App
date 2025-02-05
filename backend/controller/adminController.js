//API for adding Doctor
// Validation ensures that the input meets a certain format or follows certain rules
import validator from "validator";

// Used for password hashing and securing user passwords.
// Helps store encrypted passwords instead of plain text.
import bcrypt from "bcrypt";

// A cloud-based service for storing and managing images/videos.
// Helps upload, transform, and optimize media files.
import { v2 as cloudinary } from "cloudinary";

import jwt from "jsonwebtoken";

import doctorModel from "../models/doctorModel.js";

// req and res is our parameter
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // cheaking for  all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Mising Details" });
    }

    // validation email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please Enter Valid Email" });
    }

    // validating strong email password
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[\W_]/.test(password)
    ) {
      return res.json({
        success: false,
        message:
          "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.",
      });
    }

    //hashing doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // uplod image cloudnary
    const imageUplod = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUplod.secure_url;
    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      // it will store the as object in the database
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log(error);
  }

  //API For admin Login
};
export { addDoctor };
