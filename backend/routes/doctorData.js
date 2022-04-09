const express = require('express');
const DoctorData = require('../modals/DoctorData');

const router = express.Router();

router.get('/',async (req,res) => {
    try{
        const data = await DoctorData.find();
        res.send(data);
    }catch(err){
        res.send({message:err})
    }
})

router.post('/', async (req,res) =>{
    const doctor = new DoctorData({
        name:req.body.name,
        education: req.body.education,
        specializedIn: req.body.specializedIn,
        yearOfExperience: req.body.yearOfExperience,
        phoneNumber: req.body.phoneNumber,
        email:req.body.email,
        hospitalAssociatedWith: req.body.hospitalAssociatedWith

    })
    try{
        const savedDoctor = await doctor.save()
        res.send(savedDoctor)
    }catch(err){
        res.send({message:err})
    }
})

module.exports = router;