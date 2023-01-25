const express =require('express')
const router =express.Router()
const{getGoals,postGoals,putGoals,deleteGoals} =require('../controller/goalController')

//
router.get('/',getGoals)

router.post('/',postGoals)

router.delete('/:id',putGoals)

router.put('/:id',deleteGoals)





module.exports=router 