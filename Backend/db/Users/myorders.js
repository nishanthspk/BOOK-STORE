const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
    flatno:String,
    pincode:String,
    city:String,
    state:String,
    totalamount:String,
    seller:String,
    sellerId:String,
    booktitle:String,
    bookauthor:String,
    bookgenre:String,
    itemImage:String,
    description:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
    BookingDate: {
        type: String, // Store dates as strings
        default: () => new Date().toLocaleDateString('hi-IN') // Set the default value to the current date in "MM/DD/YYYY" format
    },
    Delivery: {
      type: String, // Store dates as strings
      default: () => {
        // Set the default value to the current date + 7 days in "MM/DD/YYYY" format
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 7); // Add 7 days
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
        const year = currentDate.getFullYear();
        // Format the date in "MM/DD/YYYY" format
        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
      }
    }
    
    
    
})

module.exports =mongoose.model('myorders',bookschema)

