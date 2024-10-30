import React from 'react'
import ResumeOne from '../Resume/designs/ResumeOne'
import ResumeTwo from '../Resume/designs/ResumeTwo'

const DisplayResume = () => {
  return (
    <div>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Resume Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">Resume Design 1</h2>
          </div>
          <div className="p-4">
            <div className="aspect-auto overflow-hidden bg-white border border-gray-200">
              <ResumeOne />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">Resume Design 2</h2>
          </div>
          <div className="p-4">
            <div className="aspect-auto overflow-hidden bg-white border border-gray-200">
              <ResumeTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DisplayResume