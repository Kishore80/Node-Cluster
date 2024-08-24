import express from "express";

const app = express();

app.get('/',(req,res)=>{
    console.log("This is a Home Page")
    res.send("Home Page")
})

app.get('/slow-page',(req,res)=>{
    for (let index = 0; index < 6000000000; index++) {}
    console.log("This will be rendered at a slower time")
    res.send("Slow Page")
})

app.listen(3000,()=>{
    console.log("Express Server Started")
})