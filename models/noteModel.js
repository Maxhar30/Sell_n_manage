const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    ntitle: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    notedate: {
        type: Date,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = {Note: mongoose.model('note', noteSchema)};