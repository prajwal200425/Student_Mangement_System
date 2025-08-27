import express from "express"
import DBConnection from "./DBConnection/Connection.js";
import Student from "./Models/Student.js"
const app = express();

import cors from "cors"
import dotenv from "dotenv"
import router from "./Routes/StudeRoutes.js";
import User from "./Models/User.js";
import UserRouter from "./Routes/User.js";
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;


app.listen(port , () =>{
    console.log(`server listening on port : ${port}`);
})

// DB Connection
DBConnection();

// model
Student();
User();

// Route
app.use("/student",router)
app.use("/user", UserRouter)