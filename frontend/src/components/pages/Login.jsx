import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiMail,CiUnlock } from "react-icons/ci";
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate('')

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:1000/api/route/login', loginData)
            localStorage.setItem('token', res.data.token)
            alert('login Successful')
            navigate('/')
        } catch (error) {
            alert('login Failed')
            console.log(error)
        }
    }

  return (
    <div>
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-3 md:px-6 lg:px-8'>
            <div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your Account</h2>
                <p className='mt-2 text-center text-sm text-gray-600'>Or
                    <Link to='/register' className='font-medium text-blue-600 hover:text-blue-500 pl-2'>Create a new account</Link>
                </p>
            </div>

            {/* Form Section */}

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6'onSubmit={handleSubmit}>
                        <div className='space-y-2'>
                            <label htmlFor="email">Email Address</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiMail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="email" name="email" type="email" value={loginData.email} autoComplete="email" onChange={handleChange} className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="you@example.com" />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email">Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiUnlock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="password" name="password" type="password" value={loginData.password} onChange={handleChange} className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="••••••••" />
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <button className='w-full border-2 border-black bg-black text-white px-10 py-3 text-base font-bold rounded-lg hover:bg-white hover:text-black duration-200' type='submit'>Login In</button>
                            <button className='border-2 border-black bg-white text-black px-10 py-3 text-base font-bold rounded-lg hover:bg-black hover:text-white duration-200 w-full'><Link to='/'>Go Back</Link></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login