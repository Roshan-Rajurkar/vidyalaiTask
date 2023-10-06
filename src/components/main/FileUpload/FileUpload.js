import React, { useState } from 'react';
import './FileUpload.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { PDFDocument } from 'pdf-lib';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setSelectedFile(e.target.result);
            }
        } else {
            alert('Please select only PDF files');
            e.target.value = null;
        }
    };

    const newPlugin = defaultLayoutPlugin();

    return (
        <div className="file-upload-container">
            <label htmlFor="pdfFile" className="custom-file-upload">
                Select PDF File
            </label>
            <input
                type="file"
                name="pdfFile"
                id="pdfFile"
                onChange={handleChange}
                accept="application/pdf"
                disabled={!!selectedFile}
            />
            <br />


            <div className="pdf-container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    {selectedFile && (
                        <Viewer fileUrl={selectedFile} plugins={[newPlugin]} />
                    )}
                </Worker>
            </div>
        </div>
    );
};

export default FileUpload;
