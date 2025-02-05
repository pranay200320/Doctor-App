// A middleware for handling file uploads in Node.js.
// Supports image, video, and other file uploads.

import multer from "multer";

// This configures how files are stored using multer.diskStorage().
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
