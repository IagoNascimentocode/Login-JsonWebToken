require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./router/userRouter')
const adminRouter = require('./router/adminRouter')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONECTION_URL,
    { useNewUrlParser:true,
    useUnifiedTopology: true },
    error =>{
        if(error){
            console.log(error)
        }else{
            console.log("Mongo db connected")
        }
    });


app.use('*', (req,res,next)=>{
    if(req.headers['x-forwarded-proto'] == "https"){
        next();
        
    }else{
        res.redirect("https://" + req.headers.host + req.originalUrl)
    }
})

app.get('/teste', (req,res)=>{
    res.send("teste https")
})

app.use('/user', express.json() , userRouter)

app.use('/admin', express.json() , adminRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server Run")
})