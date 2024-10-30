import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

const Print = () => {
    const resumeRef = useRef();

    const handleDownload = async () => {
        const canvas = await html2canvas(resumeRef.current); 
        const imgData = canvas.toDataURL('image/png'); 
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        const imgProps = pdf.getImageProperties(imgData); 
        const pdfWidth = pdf.internal.pageSize.getWidth(); 
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width; pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); 
        pdf.save('resume.pdf')
    }
  return (
    <div>
      <div ref={resumeRef}>
        <h1>Print The Page</h1>
        <p>This is the content to be printed.</p>
      </div>
      <div>
        <button onClick={handleDownload}>Download Resume </button>
      </div>
    </div>
  );
};

export default Print;
