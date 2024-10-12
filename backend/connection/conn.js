const mongoose=require('mongoose');

const conn=async()=>{
    try{
        const C=await mongoose.connect("mongodb+srv://abi:1234@cluster0.urze4.mongodb.net/")
        console.log("Connected succesfully");
    }
    catch(e)
    {
        console.log(e);
    }
};
conn();