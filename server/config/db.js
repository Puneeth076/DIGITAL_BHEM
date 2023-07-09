const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        
        await mongoose.connect(process.env.MONGODB_URL,{})
        console.log('mongodb connected')

    } catch (error) {
        console.log(`mongodb error ${error}`)
    }
}

module.exports = connectDB;