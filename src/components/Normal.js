import React from 'react'
import { useState } from 'react'
import './style.css'

const Normal = () => {

const [formFields, setFormFields] = useState({ name: '', CPI: '' });
  const [tableData, setTableData] = useState([]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData((prevData) => [...prevData, formFields]);
    setFormFields({ name: '', CPI: '' });
  };

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formFields.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="CPI"
          placeholder="Enter CPI"
          value={formFields.CPI}
          onChange={handleFormChange}
        />
        <button type="submit">Submit</button>
      </form>
      <table className='table' border="1px">
        <thead>
          <tr>
            <th>Name</th>
            <th>CPI</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.CPI}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Normal
