import cluster from 'node:cluster'
import express from "express";

const app = express();

if(cluster.isPrimary){
    console.log(`This is a Master Process with Process ID ${process.pid}`);
    cluster.fork() //This will create a worker
    cluster.fork() //This will create another worker
    //We have created 2 worker for illustration purpose
}else{
    console.log(`Worker Process ${process.pid} Started`)
    app.get('/',(req,res)=>{
        res.send("Home Page")
    })
    app.get('/slow-page',(req,res)=>{
        for (let index = 0; index < 6000000000; index++) {}
        res.send("Slow Page")
    })
    app.listen(3000,()=>{
        console.log("Express Server Started")
    })
}