const express = require('express');
var passwordHash = require('password-hash');

const DoctorCredentials = require('../modals/DoctorOnboard');

const router = express.Router();

// router.get('/',async (req,res) => {
//     try{
//         const data = await DoctorCredentials.find();
//         res.send(data);
//     }catch(err){
//         res.send({message:err})
//     }
// })

router.post('/', async (req,res) =>{
    const creds = new DoctorCredentials({
        email: req.body.email,
        password:passwordHash.generate(req.body.password)
    })
    try{
        const loggedDoctor = await creds.save()
        res.send(loggedDoctor)
    }catch(err){
        res.send({message:err})
    }
})

router.get('/:id/:pass', async (req,res)=>{
    try{
      const user = await DoctorCredentials.findOne({email:req.params.id})
      if(passwordHash.verify(req.params.pass,user.password)){
          res.send("true")
      }else{
          res.send("Password or Email Wrong")
      }
    
    }catch(err){
      res.send({message:err})
    }
  });

module.exports = router;