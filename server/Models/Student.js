import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    department:{
        type:String,
        required:true
    },
    userId:{
        type :mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;