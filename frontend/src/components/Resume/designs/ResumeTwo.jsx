import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import ResumeScannerLoading from '../../loadingpage/LoadingDesign';
import { Link } from 'react-router-dom';

const ResumeTwo = () => {
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(true)

    const resumeRef = useRef();
    const handleDownload = async () => { 
        const canvas = await html2canvas(resumeRef.current,{
            scale:2,
            useCORS: true
        }); 
        const imgData = canvas.toDataURL('image/png'); 
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        const imgProps = pdf.getImageProperties(imgData); 
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width; pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); 
        pdf.save('ReumeOne.pdf');
    }

    const loadResume = async () => {
        try {
            const response = await axios.get('http://localhost:1000/api/route/resume/data');
            setResumeData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching resume data:", error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        loadResume();
        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 5000); // 3000ms = 3 seconds

        return () => clearTimeout(loadingTimer);
    }, []);

    if(loading) return <ResumeScannerLoading /> 
    if (!resumeData) return <p>Loading...</p>;

    const { personalDetails, workExperinence, education, skills, certifications } = resumeData;
  return (
    <div>
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg" ref={resumeRef}>
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-2 bg-gray-100 p-6">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">{personalDetails.name}</h1>
                    <p className="text-sm">{personalDetails.email}</p>
                    <p className="text-sm">{personalDetails.phone}</p>
                    <p className="text-sm">{personalDetails.location}</p>
                </header>

                <section className="mb-6">
                    <h2 className="text-lg font-bold mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-sm">{skill}</li>
                    ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-bold mb-2">Certifications</h2>
                    <ul className="list-disc list-inside">
                    {certifications.map((cert, index) => (
                        <li key={index} className="text-sm">{cert}</li>
                    ))}
                    </ul>
                </section>
                </div>

                <div className="col-span-2">
                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
                    <p>{personalDetails.summary}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Work Experience</h2>
                    {workExperinence.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-bold">{exp.position}</h3>
                        <p className="italic">{exp.company}</p>
                        <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">Education</h2>
                    {education.map((edu, index) => (
                    <div key={index} className="mb-2">
                        <h3 className="font-bold">{edu.degree} in {edu.fieldOfStudy}</h3>
                        <p>{edu.institution}</p>
                        <p className="text-sm text-gray-600">Graduated: {edu.graduationDate}</p>
                    </div>
                    ))}
                </section>
                </div>
            </div>
        </div>
        <div className='flex gap-2 justify-end my-8 mr-3'>
            <button onClick={handleDownload} className='border-2 border-black bg-white text-black px-6 py-3 text-base font-bold rounded-lg hover:bg-black hover:text-white duration-200'>Download Resume</button>
            <button className='border-2 border-black bg-white text-black px-6 py-3 text-base font-bold rounded-lg hover:bg-black hover:text-white duration-200'>
                <Link to='/viewtemplates'>View Templates</Link>
            </button>
        </div>
    </div>
  )
}

export default ResumeTwo