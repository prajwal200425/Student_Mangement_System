import mongoose from "mongoose"


const DBConnection = async () =>{

    try {

        await mongoose.connect(process.env.MongoUrl);
        console.log("Connected to MongoDB Atlas.")
        
    } catch (error) {
        console.log("DB Connection Error: " , error)
    }
}

export default DBConnection