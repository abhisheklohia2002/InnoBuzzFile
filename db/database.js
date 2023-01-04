const mongoose = require("mongoose");


const connectted = (url)=> {
    //it help to solve the deprecation warning
    return  mongoose.connect(url,{
        // useCreateIndex: true,
        // useFindAndModify: false,
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
}
mongoose.set('strictQuery', false);

module.exports = connectted;



