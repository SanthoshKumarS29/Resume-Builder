import './App.css'

import { Routes,Route } from "react-router-dom"
import Navbar from "./components/constant-files/Navbar"
import Home from "./components/contents/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import OtpVerify from "./components/pages/OtpVerify"
import Cover from './components/Resume/wrapper/Cover'
import ResumeOne from './components/Resume/designs/ResumeOne'
import DisplayResume from './components/groupResume/DisplayResume'
import Footer from './components/constant-files/Footer'
import ResumeTwo from './components/Resume/designs/ResumeTwo'

function App() {


  return (
    <>
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/otp-verify' element={<OtpVerify />} />
          <Route path='/resumebuilder' element={<Cover />} />
          <Route path='/resumetemplate/one' element={<ResumeOne />} />
          <Route path='/resumetemplate/two' element={<ResumeTwo />} />
          <Route path='/viewtemplates' element={<DisplayResume />} />       
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
