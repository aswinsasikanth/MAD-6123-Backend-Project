//Schema for Database
const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Student', studentSchema)