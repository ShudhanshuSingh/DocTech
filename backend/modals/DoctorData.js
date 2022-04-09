const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    specializedIn:{
        type:String,
        required:true
    },
    yearOfExperience:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hospitalAssociatedWith:{
        type:String,
        default:"None"
    }

})

module.exports = mongoose.model('DoctorsData',DoctorSchema);