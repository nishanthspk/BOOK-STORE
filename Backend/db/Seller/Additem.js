const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
    // itemtype:String,
    itemImage:String,    
    description:String,
    price:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
})

module.exports =mongoose.model('books',bookSchema)

// const express = require('express')
// const cors = require('cors')
// require('./db/config')
// const items = require('./db/Vendor/Additem')
// const multer = require('multer');

// // Set up Multer for file upload
// const storage = multer.diskStorage({
//   destination: 'uploads',
//   filename: function (req, file, callback) {  
//     callback(null, Date.now() + '-' + file.originalname);
//   },      
// });


// const upload = multer({ storage }); 

// const app = express();
// app.use(express.json())
// app.use(cors(
//   {
//       origin: ["http://localhost:3000"],
//       methods: ["POST", "GET", "DELETE", "PUT"],
//       credentials: true
//   }
// ))
// app.use('/uploads', express.static('uploads'));


// //  ITEMS //

// app.post('/items', upload.single('itemImage'), async (req, res) => {
//     const { description, itmetype,price } = req.body;
//     const itemImage = req.file.path; // The path to the uploaded image
  
//     try {
//       const item = new items({ description, itmetype,price,itemImage  });
//       await item.save();
//       res.status(201).json(item);
//     } catch (err) {
//       res.status(400).json({ error: 'Failed to create item' });
//     }
//   });


// app.listen(8000, () => {
//   console.log("listening at 8000")
// })