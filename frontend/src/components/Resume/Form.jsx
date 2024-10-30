import React, { useContext, useState } from 'react'
import ResumeContext from '../hooks/ResumeContext'
import axios from 'axios'
import { FiMinusCircle,FiPlusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const {state, dispatch} = useContext(ResumeContext)
    const navigate = useNavigate()

    // Handle personal details change
    const handleChange = (e) => {
        console.log('Field Change:', e.target.name, e.target.value);
        dispatch({ type: 'PERSONAL_DETAILS', payload: { name: e.target.name, value: e.target.value } });
    };

    

    // handlesubmit Form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:1000/api/route/resume/reg', state)
            alert('Resume Submitted Successfully');
            navigate('/resumetemplate/one')
            dispatch({ type: 'RESET_FORM' });
        } catch (error) {
            alert('Error Submitting Resume')
            console.log(error)
        }
    }
  return (
    <div>
        <div className='m-h-screen py-12 px-6 md:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden'>
                <div className='md:px-4 md:py-5 p-6'>
                <h2 className='text-2xl font-bold textgray-900 text-center mb-8'>Build Your Resume</h2>
                <form className='space-y-8' onSubmit={handleSubmit}>
                    {/* Personal Info */}
                    <div>
                        <h3 className='text-lg font-medium text-gray-900 mb-4'>Personal Information</h3>
                        <div className='grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-2'>
                            <div>
                                <label htmlFor="Name" className='block text-sm font-medium text-gray-700'>Full Name</label>
                                <input type="text" name='name' value={state.personalDetails.name} placeholder='Alex Jaohson' onChange={handleChange} required className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                                <input type="email" name='email' value={state.personalDetails.email} placeholder='alexjohnson@gmail.com' onChange={handleChange} required className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor="PhNumber" className='block text-sm font-medium text-gray-700'>Contact No</label>
                                <input type="tel" name='phone' value={state.personalDetails.phone} placeholder='9878123409' onChange={handleChange} required className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor="location" className='block text-sm font-medium text-gray-700'>Location</label>
                                <input type="text" name='address' value={state.personalDetails.address} placeholder='Maduari, TamilNadu' onChange={handleChange} required className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor="github" className='block text-sm font-medium text-gray-700'>Github Profile</label>
                                <input type="url" name='github' value={state.personalDetails.github} placeholder='url' onChange={handleChange} required className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                            </div>
                            <div>
                                <label htmlFor="linkedin" className='block text-sm font-medium text-gray-700'>Linkedin Profile</label>
                                <input type="url" name='linkedin' value={state.personalDetails.linkedin} placeholder='url' onChange={handleChange} required className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                            </div>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div>
                        <label htmlFor="summary" className='block text-sm font-medium text-gray-700'>Professional Summary</label>
                        <textarea name='summary' rows={4} value={state.personalDetails.summary} required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2 focus:outline-none focus:border-indigo-500 sm:text-sm' placeholder='Brief overview of your professional background and career objectives' onChange={handleChange}/>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className='text-lg font-medium text-gray-900 mb-4'>Skills</h3>
                        {state.skills.map((skill, index) => (
                        <div key={index} className='flex items-center mb-2'>
                            <input type="text" value={skill} onChange={(e) => dispatch({type:'UPDATE_SKILL', payload: { index, value: e.target.value}})} className='flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='Add your skills in separate boxes' />
                            <button className='ml-2 text-red-600 hover:text-red-800' type='button' onClick={()=> dispatch({ type:'REMOVE_SKILL', payload: index})}>
                                <FiMinusCircle className='h-5 w-5'/>
                            </button>
                        </div>
                        ))}
                        <button type='button' className='mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 ' onClick={() => dispatch({ type: 'ADD_SKILL'})}>
                            <p><FiPlusCircle className='h-5 w-5 mr-2'/></p>
                            <h1>Add Skill</h1>
                        </button>
                    </div>
                    
                    {/* Work Experience */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Work Experience</h3>
                        {state.workExperinence.map((exp, index) => (
                            <div key={index} className='mb-4 p-4 border border-gray-200 rounded-md'>
                                <div className='grid grid-cols-1 gay-y-6 gap-x-4 md:grid-cols-2'>
                                    <div className='mt-4'>
                                        <label htmlFor={`jobTitle-${index}`} className='block text-sm font-medium text-gray-700'>Job Title</label>
                                        <input type="text" value={exp.jobTitle} onChange={(e) => dispatch({ type:'UPDATE_WORK_EXPERIENCE', payload: {index, field: 'jobTitle', value: e.target.value}})} placeholder='TechInnovate Solution' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`company-${index}`} className='block text-sm font-medium text-gray-700'>Company Name</label>
                                        <input type="text" value={exp.company} onChange={(e) => dispatch({ type:'UPDATE_WORK_EXPERIENCE', payload: {index, field: 'company', value: e.target.value}})} placeholder='senior software engineer' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4 '>
                                        <label htmlFor={`location-${index}`} className='block text-sm font-medium text-gray-700'>Location</label>
                                        <input type="text" value={exp.location} onChange={(e) => dispatch({ type:'UPDATE_WORK_EXPERIENCE', payload: {index, field: 'location', value: e.target.value}})} placeholder='Maduari, TamilNadu'  required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`startDate-${index}`} className='block text-sm font-medium text-gray-700'>StartDate</label>
                                        <input type="date" value={exp.startDate} onChange={(e) => dispatch({ type:'UPDATE_WORK_EXPERIENCE', payload: {index, field: 'startDate', value: e.target.value}})} required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`endDate-${index}`} className='block text-sm font-medium text-gray-700'>EndDate</label>
                                        <input type="date" value={exp.endDate} onChange={(e) => dispatch({ type:'UPDATE_WORK_EXPERIENCE', payload: {index, field: 'endDate', value: e.target.value}})} required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`description-${index}`} className='block text-sm font-medium text-gray-700'>Description</label>
                                        <textarea rows={3} value={exp.description} onChange={(e) => dispatch({ type:'UPDATE_WORK_EXPERIENCE', payload: {index, field: 'description', value: e.target.value}})} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Describe your responsibilities and achievements"></textarea>
                                    </div>
                                    <div className='mt-4'>
                                        <button type='button' className='mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 ' onClick={() => dispatch({ type: 'REMOVE_WORK_EXPERIENCE',payload: index})}>
                                            <p><FiMinusCircle className='h-5 w-5 mr-2'/></p>
                                            <h1>Remove Work Experience</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <button type='button' className='mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 ' onClick={() => dispatch({ type: 'ADD_WORK_EXPERIENCE'})}>
                                <p><FiPlusCircle className='h-5 w-5 mr-2'/></p>
                                <h1>Add Work Experience</h1>
                            </button>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Education Details</h3>
                        {state.education.map((edu, index) => (
                            <div key={index} className='mb-4 p-4 border border-gray-200 rounded-md'>
                                <div className='grid grid-cols-1 gay-y-6 gap-x-4 md:grid-cols-2'>
                                    <div className='mt-4'>
                                        <label htmlFor={`institution-${index}`} className='block text-sm font-medium text-gray-700'>College Name</label>
                                        <input type="text" value={edu.institution} onChange={(e) => dispatch({ type:'UPDATE_EDUCATIONS', payload: {index, field: 'institution', value: e.target.value}})} placeholder='University or college Name' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`degree-${index}`} className='block text-sm font-medium text-gray-700'>Degree</label>
                                        <input type="text" value={edu.degree} onChange={(e) => dispatch({ type:'UPDATE_EDUCATIONS', payload: {index, field: 'degree', value: e.target.value}})} required placeholder='bachelor of name' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`fieldofStudy-${index}`} className='block text-sm font-medium text-gray-700'>Field of Study</label>
                                        <input type="text" value={edu.fieldofStudy} onChange={(e) => dispatch({ type:'UPDATE_EDUCATIONS', payload: {index, field: 'fieldofStudy', value: e.target.value}})} placeholder='course or Group' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor={`graduateDate-${index}`} className='block text-sm font-medium text-gray-700'>Graduation Date</label>
                                        <input type="date" value={edu.graduateDate} onChange={(e) => dispatch({ type:'UPDATE_EDUCATIONS', payload: {index, field: 'graduateDate', value: e.target.value}})} required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
                                    </div>
                                    <div className='mt-4'>
                                        <button type='button' className='mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 ' onClick={() => dispatch({ type: 'REMOVE_EDUCATIONS',payload: index})}>
                                            <p><FiMinusCircle className='h-5 w-5 mr-2'/></p>
                                            <h1>Remove Education</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <button type='button' className='mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 ' onClick={() => dispatch({ type: 'ADD_EDUCATIONS'})}>
                                <p><FiPlusCircle className='h-5 w-5 mr-2'/></p>
                                <h1>Add Education</h1>
                            </button>
                        </div>
                    </div>

                    {/* Certificates */}
                    <div>
                        <h3 className='text-lg font-medium text-gray-900 mb-4'>Certificate</h3>
                        {state.certifications.map((cert, index) => (
                        <div key={index} className='flex items-center mb-2'>
                            <input type="text" value={cert} onChange={(e) => dispatch({type:'UPDATE_CERTIFICATE', payload: { index, value: e.target.value}})} required className='flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' placeholder='e.g. AWS Certified Solutions Architect'/>
                            <button className='ml-2 text-red-600 hover:text-red-800' type='button' onClick={()=> dispatch({ type:'REMOVE_CERTIFICATE', payload: index})}>
                                <FiMinusCircle className='h-5 w-5'/>
                            </button>
                        </div>
                        ))}
                        <button type='button' className='mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 ' onClick={() => dispatch({ type: 'ADD_CERTIFICATE'})}>
                            <p><FiPlusCircle className='h-5 w-5 mr-2'/></p>
                            <h1>Add Certificate</h1>
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type='submit' className='w-full inline-flex justify-center py-3 px-4 border border-black shadow-sm text-sm font-medium text-white bg-black hover:bg-white hover:text-black rounded-md duration-200'>
                            Generate Resume
                        </button>
                    </div>

                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form