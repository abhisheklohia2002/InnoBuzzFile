const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({

id:{
    type:Number,
    required:true,


},



title: {
    type:String,
    required:true,
    trim:true,
 

},
price:{
    type:Number,
    required:true,
   
},
image:{
    type:String,
    required:true,


}



})

const model = mongoose.model("task",taskschema);

module.exports = model;
