
// models/WishlistItem.js

const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
    itemImage:String,
    title:String,
});

module.exports = mongoose.model('WishlistItem', wishlistItemSchema);


