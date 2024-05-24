import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()


export const Registercontroller = async (req, res) => {
    const { fullName, email, password } = req.body
    const isAdmin = false;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        const existedUser = await User.findOne({ email })
        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            isAdmin
        })

        const options = {
            secure: true,
            httpOnly: true
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
        return res.status(200).cookie("token", token, options).json({
            success: true,
            message: "Registered successfully",
            user,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "internal server error please try again later"
        })
    }
}


export const Logincontroller = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: `User does not exists with this ${email}`
            })
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password"
            })
        }

        const options = {
            secure: true,
            httpOnly: true
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
        return res.status(200).cookie("token", token, options).json({
            success: true,
            message: `welcome back ${user.fullName}`,
            user,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "internal server error please try again later"
        })
    }
}


export const GetUserProfileController = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User details fetched successfully",
        user: req.user
    })
}

export const ForgotPasswordController = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All field are required"
            })
        }

        const existedUser = await User.findOne({ email })
        if (!existedUser) {
            return res.status(400).json({
                success: false,
                message: `User does not exists with this ${email}`
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        existedUser.password = hashedPassword
        const updatedUser = await existedUser.save()
        const user = await User.findById(updatedUser._id)
        return res.status(200).json({
            success: true,
            message: "Password Changed Successfully",
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "internal server error please try again later"
        })
    }
}


export const GetUsersController = async (req, res) => {
      try {
        const users = await User.find().select("-password -createdAt -updatedAt -__v")
        if (!users) {
            return res.status(500).json({
                success: false,
                message: "Unable to find users"
            })
        }
      
        return res.status(200).json({
            success: true,
            message: "Users found successfully",
            users
        })

      } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
      }
}