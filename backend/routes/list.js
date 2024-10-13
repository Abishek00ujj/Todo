const router=require('express').Router();
const User=require('../models/user');
const List=require('../models/list');



router.post("/addtask",async(req,res)=>{
    try 
    {
    const{title,body,email}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser)
    {
        const list=new List({title,body,user:existingUser});
        await list.save().then(()=>res.status(200).json({list}));
        existingUser.list.push(list);
        existingUser.save();
    } 
    }
    catch (error) {
        console.log(error);
    }
})

router.put("/updatetask/:id",async(req,res)=>{
    try
    {
        const{title,body,email}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            const list=await List.findByIdAndUpdate(req.params.id,{title,body})
            list.save().then(()=>res.status(200).json({message:"Task updated"}));
        }
    }
    catch(err)
    {
        console.log(err);
    }
});



router.delete("/deletetask/:id",async(req,res)=>{
    try
    {
        const {email}=req.body;
        const existingUser= await User.findOne({email});
        if(existingUser)
        {
            await List.findByIdAndDelete(req.params.id).then(()=>
            res.status(200).json({message:"Task deleted"}));
        } 
    }
    catch(err)
    {
        console.log("error");
    }
})


module.exports=router;