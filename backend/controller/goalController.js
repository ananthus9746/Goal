const getGoals=(req,res)=>{
        res.status(200).json({message:"getted goal"})
    
}

const postGoals=(req,res)=>{
    res.status(200).json({message:"posted goal"})
}

const deleteGoals=(req,res)=>{
    res.status(200).json({message:`deleted goal ${req.params.id}`})
}

const putGoals=(req,res)=>{
    res.status(200).json({message:`updated goal ${req.params.id}`})
}


module.exports={getGoals,postGoals,deleteGoals,putGoals}