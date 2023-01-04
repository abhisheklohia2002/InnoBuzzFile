const fetch = require('node-fetch-commonjs');

const express = require("express");
const app = express();

const port = 5000 || process.env.PORT;
const connectted = require("./db/database")
const model = require("../taskData/model/model");
require('dotenv').config();


//middleware 
app.use(express.json())


//get Request ;
app.get("/",  async (req,res)=>{
 try {
    const doc = await model.find({});
    console.log(doc);
    res.status(201).json({doc,amount:doc.length});

 } catch (error) {
    console.log(error)
 }
})



const getData = async()=>{
    const data = await fetch(`https://fakestoreapi.com/products?limit=5`);
  
const res = await data.json();
// console.log(res);


for(let i = 0; i<res.length; i++){
const post =  new model({
        id:res[i]["id"],
        title:res[i]["title"],
        price:res[i]["price"],
        image:res[i]["image"]
    })

    await post.save()   //mongoose save
}}

getData()
const start  = async() =>{
try {
   
    await connectted(process.env.MONGO_URI);
    app.listen(port,()=>{ console.log(`server is running at ${port}`); })
} catch (error) {
    console.log(error)
}
}


start()