const mongoose = require("mongoose")
async function connect(){
    try{
        await mongoose.connect("mongodb+srv://phamhac:phamhac123@cluster0.6oaxkjx.mongodb.net/")
    } catch(error) {
        console.log(error)
    }
}
module.exports  = {connect}