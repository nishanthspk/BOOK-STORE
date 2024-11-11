// const mongoose = require("mongoose");
// // Middleware
// const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
// // Connect to MongoDB using the connection string
// mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => {
//   console.log(`Connection successful`);
// }).catch((e) => {
//   console.log(`No connection: ${e}`);
// });

// // mongodb://localhost:27017 

//mongodb://127.0.0.1:27017/BookStore

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://spknishanth2004:BBy9XjzfaKWrilyV@book-store.kxig7.mongodb.net/?retryWrites=true&w=majority&appName=book-store', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});
