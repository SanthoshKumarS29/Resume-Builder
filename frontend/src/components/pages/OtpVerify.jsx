import axios from 'axios';
import React, { useState } from 'react'
import { PiNumberCircleSixBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';


const OtpVerify = () => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const activationToken = localStorage.getItem('activationToken')
        try {
            const res = await axios.post('http://localhost:1000/api/route/verify/otp', {otp, activationToken: activationToken})
            alert(res.data.message);
            if(res.status === 200){
                navigate('/resumebuilder')
            }
        } catch (error){
            alert(error.res?.data?.message)
            console.log(error)
        }
    }
  return (
    <div>
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-3 md:px-6 lg:px-8'>
            <div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>OTP Verification</h2>
            </div>

            {/* Form Section */}

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='space-y-2'>
                            <label htmlFor="email">Enter Your Otp</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <PiNumberCircleSixBold className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="otp" name="otp" type="text" inputMode="numeric" className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="••••••••" onChange={((e) => setOtp(e.target.value))} />
                            </div>
                        </div>
                        <div>
                            <button className='w-full border-2 border-black bg-black text-white px-10 py-3 text-base font-bold rounded-lg hover:bg-white hover:text-black duration-200'>Verify</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OtpVerify