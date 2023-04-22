import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

const New = () => {
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    }, [selectedValue]);

    function handleSelectChange(event) {
        setSelectedValue(event.target.value);
    }
    return (
        <div className='dropdown'>
            <label for="fname">Select Page of your choice</label><br/><br/>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">-- Select a page --</option>
                <option value="/file">Upload a File</option>
                <option value="/try">Select from Dropdown</option>
                <option value="/normal">Regular</option>
            </select>
        </div>
    )
}

export default New