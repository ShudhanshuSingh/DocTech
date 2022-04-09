const express = require('express');
const PrescriptionModal = require('../modals/Prescription')

const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const prescriptions = await PrescriptionModal.find();
        res.send(prescriptions)
    }catch(err){
        res.send({message:err})
    }
})

router.get('/:patientId', async (req,res) => {
    try{
        const data = await PrescriptionModal.find({patiendId: req.params.patientId});
        res.send(data);
    }catch(err){
        res.send({message:err})
    }
})

router.post('/', async(req,res) =>{
    const prescription = new PrescriptionModal({
        clinicName: req.body.clinicName,
        doctorName : req.body.doctorName,
        date: req.body.date,
        patiendId :  req.body.patiendId,
        issueDiagnosed : req.body.issueDiagnosed,
        medicines:req.body.medicines,
        quantity:req.body.quantity,
        frequency:req.body.frequency,
        nextVisitDate: req.body.nextVisitDate
    })

    try{
        const prescribe = await prescription.save();
        res.json(prescription);
    }catch(err){
        res.json({message:err})
    }
})

module.exports = router;