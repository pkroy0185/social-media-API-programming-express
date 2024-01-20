import multer from 'multer';
// Write your code here

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Upload destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // File naming convention
  },
});

export const imageUpload = multer({
    storage: storage,
});
