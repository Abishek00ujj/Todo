const mongoose=require('mongoose');

const conn=async()=>{
    try{
        const C=await mongoose.connect(import.meta.env.VITE_MONGO_API);
        console.log("Connected succesfully");
    }
    catch(e)
    {
        console.log(e);
    }
};
conn();