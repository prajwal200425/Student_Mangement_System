import jwt from "jsonwebtoken";

const userAuth = async (req ,  res , next) =>{
    try {
        const token  = req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"Token Not Found"})
        }

        const decoded = jwt.verify(token , process.env.JWTSECRET);

        req.user = decoded
        next();
    } catch (error) {
        return res.status(401).json({message :"Incorrect Token"});
    }
}

export default userAuth;