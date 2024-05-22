import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';


export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies?.token ||
     req.header("authorization")?.replace("Bearer ", "")
    try {
        if (!token) {
            return res.status(401).json({
                success: false,
                message:  "Unauthorized request"
            })
        }

        const decodedToken = jwt.verify(token, process.env.JWT_KEY)
        if (!decodedToken) {
            return res.status(401).json({
                success: false,
                message:  "Invalid Token"
            })
        }
        const user = await User.findById(decodedToken._id).select("-password")
    
        if (!user) {
            return res.status(401).json({
                success: false,
                message:  "Invalid token"
            })
        }
       
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
    
}