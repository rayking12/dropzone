import React, { useState, useEffect } from 'react';

import './Dropzone.css';

const Dropzone = () => {
    const [selectedFiles, setSelectedFiles]= useState([]);
        const [errorMessage, setErrorMessage] = useState('');
        const [validFiles, setValidFiles] = useState([]);

        useEffect(() => {
            let filteredArray = selectedFiles.reduce((file, current) => {
                const x = file.find(item => item.name === current.name);
                if (!x) {
                    return file.concat([current]);
                } else {
                    return file;
                }
            }, []);
            setValidFiles([...filteredArray]);
        
        }, [selectedFiles]);

const dragOver = (e) => {
    e.preventDefault();
}
const dragEnter = (e) => {
    e.preventDefault();
}
const dragLeave = (e) => {
    e.preventDefault();
}
const fileDrop = (e) => {
    e.preventDefault();


const files = e.dataTransfer.files;
if (files.length) {
    handleFiles(files)
}
}

const handleFiles = (files) => {
    
 for (let i = 0; i < files.length; i++ ) {
     if (validateFile(files[i])) {
        setSelectedFiles(prevArray => [...prevArray, files[i]]);
     } else {
        files[i]['invalid'] = true;
        setSelectedFiles(prevArray => [...prevArray, files[i]]);
        setErrorMessage('File type not permitted');
     }
 }
}
const validateFile = (file) => {
    const validType = [ ' image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/x-icon']
    if ( validType.indexOf(file.type) === -1) {
        return false;
    }
    return true;
}
const fileSize = (size) => {
    if( size === 0) return '0 bytes'
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
const fileType = (fileName) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
}




    return (
        <>
        <div className="container">
            <div className="drop-container"   
            onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop} >
             <div className="file-display-container">
             
        
    { validFiles.map((data, i) => 
            <div className="file-status-bar" key={i}>
                <div>
                    <div className="file-type-logo"></div>
                    <div className="file-type">{fileType(data.name)}</div>
                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                    <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                </div>
                <div className="file-remove">X</div>
            </div>
       )   
    }
</div>
            
            
              
            <div className="drop-message">
    <div className="upload-icon"></div>
    Drag & Drop files here or click to upload
</div>


            </div>
        </div>
        </>
    )
}


export default Dropzone
