const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false 
    },
    ingredients:{
        type: [String],
        default: []
    },
    address:{
        type: String,
    },
    num_sales:{
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema)
module.exports = MenuItem;

/*
{
    "name": "Spicy Chicken Wings",
    "price": 9.99,
    "taste": "spicy",
    "is_drink": false,
    "ingredients": "rice",
    "num_sales": 62
}
*/