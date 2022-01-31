const mongoose=require('mongoose')
const dbconnect=()=>{
    mongoose.connect("mongodb+srv://sethu:sethudb@mydb.mjdaz.mongodb.net/Eshopydb?retryWrites=true&w=majority",()=>{
        console.log("db connected...")
    })
}
module.exports=dbconnect