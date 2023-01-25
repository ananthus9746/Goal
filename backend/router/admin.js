const express  = require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('geted from admin')
})

router.post('/',(req,res)=>{
    res.send('post from admin')
})

router.delete('/:id',(req,res)=>{
    res.send(`deleted from admin ${req.params.id}`)
})

router.put('/:id',(req,res)=>{
    res.send(`put from admin ${req.params.id}`)
})

module.exports=router