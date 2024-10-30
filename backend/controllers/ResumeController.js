import { ResumeDetails } from "../models/Resume.js";

//  Create The Resume
export const createResume = async (req, res) => {
    try{
        const newUserResume = new ResumeDetails(req.body)
        const savedResume = await newUserResume.save()
        return res.status(201).json(savedResume)
    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}

export const getResume = async (req, res) => {
    try{
        const resumeData = await ResumeDetails.findOne({ user: req.user_id }).sort({ createdAt: -1})
        if (!resumeData) {
            return res.status(404).json({
                message:'Resume Data not found'
            })
        }
        return res.status(200).json(resumeData)
    } catch(error) {
        return res.status(400).json({message:error.message})
    }
}