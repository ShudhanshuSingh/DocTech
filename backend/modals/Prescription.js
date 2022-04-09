const mongoose = require('mongoose');

const PrescriptionSchema = mongoose.Schema({
    clinicName:{
        type:String,
        required: true
    },
    doctorName:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    patiendId:{
        type:String,
        required:true
    },
    issueDiagnosed:{
        type:String,
        required:true
    },
    medicines:{
        type: Array,
        required:true
    },
    quantity:{
        type:Array,
        required:true
    },
    frequency:{
        type:Array,
        required:true
    },
    nextVisitingDate:{
        type:Date,
    },
    additionalNotes:{
        type:String
    }
})

module.exports = mongoose.model('Prescriptions',PrescriptionSchema);