import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { CiMail,CiUnlock } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate()

  const [formData, SetFormData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [loading, setLoading] = useState(false)

  const handleChange =(e) => {
    SetFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const {username, email, password, confirmPassword} = formData

    if(password !== confirmPassword) {
      alert('Password DO not match')
      return;
    }
    try {
      const res = await axios.post('http://localhost:1000/api/route/register', {username,email,password})
      localStorage.setItem('activationToken', res.data.activationToken)
      alert(res.data.message)
      navigate('/otp-verify')
    } catch (error) {
      alert('Registration Failed')
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  return (
    <div>
      <div>
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-3 md:px-6 lg:px-8'>
          <div className='mt-6 text-center'>
            <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900'>Create Your Account</h2>
            <p className='mt-2 text-center text-sm text-gray-600'>Or
              <Link to='/login' className='font-medium text-blue-600 hover:text-blue-500 pl-2'>Sign In to your existing account</Link>
            </p>
          </div>

          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='space-y-2'>
                            <label htmlFor="Name">Full Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IoPersonOutline className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="name" name="username" type="text" value={formData.username} onChange={handleChange} autoComplete="name" className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="Enter your full name" />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email">Email Address</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiMail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="email" name="email" type="email" value={formData.email} autoComplete="email" onChange={handleChange} className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="Example@.com" />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email">Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiUnlock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="password" name="password" type="password" value={formData.password} autoComplete="new-password" onChange={handleChange} className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="Example@.com" />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email">Confirm Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiUnlock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password" className="px-10 py-2 border w-full rounded-lg focus:outline-none focus:ring focus:ring-gray-300 " placeholder="Example@.com" />
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <button type='submit' className='w-full border-2 border-black bg-black text-white px-10 py-3 text-base font-bold rounded-lg hover:bg-white hover:text-black duration-200'>{loading ? 'Registering...':'Create Account'}</button>
                            <button className='border-2 border-black bg-white text-black px-10 py-3 text-base font-bold rounded-lg hover:bg-black hover:text-white duration-200 w-full'><Link to='/'>Go Back</Link></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Register