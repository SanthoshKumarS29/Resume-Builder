import React, { createContext, useReducer } from "react";
import resumeReducer  from "./ResumeReducer";

const ResumeContext = createContext()

export const ResumeProvider = ({children}) => {
    const initialState = {
        personalDetails:{
            name:'',
            email:'',
            phone:'',
            address:'',
            github:'',
            linkedin:'',
            summary:'',
        },
        skills:[''],
        education:[
            {institution:'', degree:'', fieldofStudy:'', graduateDate:''}
        ],
        workExperinence:[
            {jobTitle:'', company:'', location:'', startDate:'', endDate:'' ,description:''}
        ],
        certifications:['']
    }
    const [state, dispatch] = useReducer(resumeReducer, initialState)

    return(
        <ResumeContext.Provider value={{state, dispatch}}>
            {children}
        </ResumeContext.Provider>
    )
}

export default ResumeContext

