const express = require('express');
require('dotenv').config();
const assesmentRoutes = require('./routes/assesment.routes');
require('./adapters/connectionDb');


let app=express();

//! It is used to accept json data from body
app.use(express.json())

app.use("/api/assesment",assesmentRoutes)


//^^^ Page Not Found Middleware
app.use("*",(req,res,next)=>{
    res.status(404).json({message:"Page Not Found"})
})

//!  Error Handling Middleware
app.use((err,req,res,next)=>{
    res.status(400).json({error:true,message:err.message,data:"OK"})
})


app.listen(process.env.PORT, (err)=>
{
    if(err) throw err
    console.log(`Server is Running on PORT ${process.env.PORT}`)
})