import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    personalDetails:{
        name:String,
        email:String,
        phone:String,
        address:String,
        github:String,
        linkedin:String,
        summary:String,
    },
    skills:[
        String
    ],
    education:[
        {
            institution:String,
            degree:String,
            fieldofStudy:String,
            graduateDate:Date,
        }
    ],
    workExperinence:[
        {
            jobTitle:String,
            company:String,
            location:String,
            startDate:Date,
            endDate:Date,
            description:String,
        }
    ],
    certifications:[
        String
    ],

},{timestamps: true})

export const ResumeDetails = mongoose.model('ResumeDetails', resumeSchema)