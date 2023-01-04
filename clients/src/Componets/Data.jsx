import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Display from './Display';

const DataJS = () => {
const [data,setdata] = useState([]);

const getRequest = async()=>{
try {
  //proxy ::"http:localhost:5000"
  const Data = await fetch("/", {
 
    method:"GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "cache-control": "no-cache",
    },
  });

  const res = await Data.json();
console.log(res)
  setdata(...data,res)

} catch (error) {
  console.log(error)
}
}

useEffect(()=>{
  getRequest()
},[])


console.log(data)
  return (
    <div>
    {
      data.map(elem=> <Display key = {elem.id}  image = {elem.image} title = {elem.title} price = {elem.price} /> )
      
    }
    </div>
  )
}

export default DataJS
