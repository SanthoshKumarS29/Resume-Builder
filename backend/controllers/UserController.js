import { Users } from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendMail from "../middleware/Mail.js";

// New user Registration
export const register = async (req,res) => {
    try {
        const {username, email, password} = req.body;
        let user = await Users.findOne({ email })
        // Code to check email add already exits
        if (user){
            res.status(400).json({
                message: "User Email already exists"
            })
        }
        // Code to Convert Raw Pass to Hased pass
        const hashedPassword = await bcrypt.hash(password,5)

        // Generate OTP
        const otp = Math.floor(Math.random() * 1000000)

        // create new user Data
        user = {username, email, hashedPassword}

        // create signed activation Token
        const activationToken = jwt.sign({user, otp},process.env.ACTIVATE_KEY,{
            expiresIn:'5m'
        })

        // send email to user
        const message = `Please verify your account using OTP is ${otp}`
        await sendMail(email, "Otp Verification from Resume Builder", message)
        return res.status(200).json({
            message:"OTP Sent Your Mail",
            activationToken,
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

// Otp Verification
export const verifyOtp = async (req,res) => {
    try{
        const {otp, activationToken} = req.body
        const verify = jwt.verify(activationToken,process.env.ACTIVATE_KEY)
        if(!verify){
            return res.json({message:"Otp Expired"})
        }

        if(Number(verify.otp) !== Number(otp)){
            return res.json({message:"Wrong Otp"})
        }

        await Users.create({
            username:verify.user.username,
            email:verify.user.email,
            password:verify.user.hashedPassword,
        })
        res.status(200).json({
            message:'user Registration Sccess'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

// Login User
export const login = async (req,res) => {
    try {
        const {email, password} = req.body
        // Chek exists useremail 
        const user = await Users.findOne({email})
        if(!user) {
            return res.status(400).json({
                message:'Your already have account'
            })
        }
        // Check Password
        const matchPassword = await bcrypt.compare(password, user.password)
        if(!matchPassword){
            return res.status(400).json({
                message:"Your password is wrong"
            })
        }
        // Generate Signed Token
        const token = jwt.sign({_id:user._id},process.env.JWT_KEY,{expiresIn:'1d'})
        
        const {password: userPassword, ...userDetails} = user.toObject()

        return res.status(200).json({
            message:'You Logined' + user.username,
            token,
            userDetails,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}