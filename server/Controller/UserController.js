import User from "../Models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const Register = async (req ,res) =>{
    try {

        const {username , email ,password} = req.body;

        if(!username){
            return res.status(400).json({message:"Username Required."})
        }

        if(!email){
            return res.status(400).json({message:"Email Required."})
        }

         if(!password ){
            return res.status(400).json({message:"Email Required ."})
        }

         if(password.length < 8){
             return res.status(400).json({message:"password contain atleast more than 8 character or numbers"})
        }

        const userExist = await User.findOne({email});

        if(userExist){
             return res.status(400).json({message:"email already registerd"})
        }

        const hashPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password:hashPass
        });

        const userSaved = await newUser.save();

        const token =  jwt.sign({email, id:User._id , }, process.env.JWTSECRET);

        res.status(200).json({
            message:"Account created Successfully",
            token,
            user:{
                username: userSaved.username,
                email:userSaved.email
            }
        })


        
    } catch (error) {
        return res.status(500).json({message:error});
    }
}


export const Login = async (req , res) =>{
    try {
        
        const {email, password} = req.body;

         if(!email){
            return res.status(400).json({message:"email Required."})
        }

           if(!password){
            return res.status(400).json({message:"Email Required , and contain atleast more than 8 character or numbers"})
        }

        if(password.length < 8){
             return res.status(400).json({message:"password contain atleast more than 8 character or numbers"})
        }
         const userExist = await User.findOne({email});

        if(!userExist){
             return res.status(400).json({message:"email not registerd"})
        }

        const passMatch = await bcrypt.compare(password , userExist.password)

        if(!passMatch){
            return res.status(404).json({message:"Incorrect Password"})
        }

        const token =  jwt.sign({email , id:userExist._id} , process.env.JWTSECRET);

         res.status(200).json({
            message:"Login Successfully",
            token,
            user:{
                username: userExist.username,
                email:userExist.email
            }
        })


      
    } catch (error) {
         return res.status(500).json({message:error});
    }
}