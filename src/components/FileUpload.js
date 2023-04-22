import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const handleFile = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSave = () => {
        document.getElementById('demo').innerHTML = file.name + " saved successfully!";
    }
    return (
        <>
            <input type='file' onChange={handleFile} />
            <button onClick={handleSave}>Save</button>
            <p id="demo"></p>
        </>
    )
}

export default FileUpload
