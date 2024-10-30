import React from 'react'
import { ResumeProvider } from '../../hooks/ResumeContext'
import Form from '../Form'

const Cover = () => {
  return (
    <div>
        <ResumeProvider>
            <Form />
        </ResumeProvider>
    </div>
  )
}

export default Cover