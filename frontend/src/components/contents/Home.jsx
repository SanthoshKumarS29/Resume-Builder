import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [isPopupOpen, SetIsPopupOpen] = useState(false)

    const handleGetStarted = () => {
        SetIsPopupOpen(true)
    }
  return (
    <div>
        <div className="h-screen flex justify-center items-center py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Create Your Perfect Resume</h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Build professional resumes in minutes with our easy-to-use builder. Stand out from the crowd and land your dream job.</p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="">
                        <button onClick={handleGetStarted} className='border-2 border-black bg-black text-white px-10 py-3 text-base font-bold rounded-lg hover:bg-white hover:text-black duration-200'>Get Started</button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        {/* <button className='border-2 border-black bg-white text-black px-6 py-3 text-base font-bold rounded-lg hover:bg-black hover:text-white duration-200'>
                            <Link to='/viewtemplates'>View Templates</Link>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
        {/* Pop-up Section */}
        {isPopupOpen && (
            <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
                <div className='relative top-20 mx-auto p-6 border w-96 shadow-lg rounded-md bg-white'>
                    <div className='mt-3 text-center'>
                        <h3 className='text-lg leading-6 font-medium text=gray-900'>Contiue with SIgn Up?</h3>
                        <div className='mt-2 px-7 py-3'>
                            <p className='text-sm text-gray-500'>Would you like to create an account to get started with Resume Builder?</p>
                        </div>
                        <div className='flex items-center px-4 py-3 gap-2'>
                            <button className='border-2 border-black bg-black text-white px-5 py-2 text-base font-bold rounded-lg hover:bg-white hover:text-black duration-200'>
                                <Link to='/register'>Yes, sign me up</Link>
                            </button>
                            <button className='border-2 border-black bg-white text-black px-5 py-2 text-base font-bold rounded-lg hover:bg-black hover:text-white duration-200'>
                                <Link to='/resumebuilder'>No, Thanks</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Home