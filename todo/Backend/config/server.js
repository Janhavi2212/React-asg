const mongoose = require("mongoose")
const dotenv = require ("dotenv")

dotenv.config()

let db = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("DB Connnected Successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = db