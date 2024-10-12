const router=require('express').Router();
const User=require("../models/user");
const bcrypt=require('bcryptjs');

router.post("/register",async(req,res)=>{
  try 
  {
      const{email,username,password}=req.body;
      const hashpassword=bcrypt.hashSync(password);
      const user=new User({email,username,password: hashpassword});
      await user.save().then(()=>res.status(200).json({user:user}) );
  } 
  catch(error)
  {
    res.status(400).json({message:"User already Exists!"});
  }
})

router.post("/login",async(req,res)=>{
    try
    {
        const user=await User.findOne({email:req.body.email});
        if(!User){
            res.status(400).json({message:"Please signin Up first"});
        }
        const isPasswordCorrect=bcrypt.compareSync(req.body.password,user.password);
        if(!isPasswordCorrect)
        {
            res.status(400).json({message:"Password is Not correct"});
        }
        const {password,...others}=user._doc;  
        res.status(200).json({others});
    } 
    catch(error)
    {
        res.status(400).json({message:"User Already Exists"})
    }
})



module.exports=router;