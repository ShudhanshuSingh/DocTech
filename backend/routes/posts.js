const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Hi from Post!!")
    console.log('Post Route')
})

module.exports = router;