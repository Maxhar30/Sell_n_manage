const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    pname: {
        type: String,
        required: true
    },
    pcode: {
        type: String,
        required: true
    },
    pcompany: {
        type: String,
        required: true
    },
    pquantity: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    pprice:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = {Product: mongoose.model('product', productSchema)};