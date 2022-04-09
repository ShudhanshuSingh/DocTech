const mongoose = require('mongoose');

const DoctorOnboard = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('DoctorCredentials',DoctorOnboard);