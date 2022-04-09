const mongoose = require('mongoose')

const AadharCardUserSchema = mongoose.Schema({
        name:{
            type:String,
            required : true,
        },
        emailId:{
            type:String,
            required:true
        },
        uid:{
            type:Number,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        userCreated : {
            type:Date,
            default: Date.now
        },
});

module.exports = mongoose.model('AadharCardUser', AadharCardUserSchema);