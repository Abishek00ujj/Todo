const express=require('express')
const app=express();
require("./connection/conn");
const auth=require("./routes/auth");

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(express.json());

app.use("/api/v1",auth);


app.listen(1999,()=>{
    console.log('Server is running1');
})