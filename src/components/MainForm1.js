import React, { useState } from 'react';

const Mainform1 = () => {
  const [selectedInput, setSelectedInput] = useState(null);

  const handleInputChange = (event) => {
    setSelectedInput(event.target.value);
  };

  return (
    <div>
      <h2>Main Form</h2>
      <label htmlFor="inputType">Select input type:</label>
      <select id="inputType" onChange={handleInputChange}>
        <option value="">Select input</option>
        <option value="file">File input</option>
        <option value="dropdown">Dropdown input</option>
        <option value="text">Text input</option>
      </select>

      {selectedInput === 'text' && <Normal />}
      {selectedInput === 'file' && <File />}
      {selectedInput === 'dropdown' && <DynamicDropdown />}
    </div>
  );
};

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
    console.log(tableData);
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
          type="number"
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
      {/* console.log(); */}
    </div>
  );
};
function File() {
  const [files, setFiles] = useState([]);
  const onFileChange = (e) => setFiles(e.target.files);
  const onFileSubmit = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`file`, files);
    }
    console.log(files);
  };
  return (
    <div>
      <input type="file" onChange={onFileChange} multiple />
      <button onClick={onFileSubmit}>Submit</button>
    </div>
  );
}



function DynamicDropdown() {
  const [options, setOptions] = useState([{ value: '' }]);
  const [label, setLabel] = useState([{ label: '' }]);
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setLabel((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleAddOption = () => {
    setOptions([...options, { value: '' }]);
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index].value = event.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    console.log(label);
    console.log(options);
  }

  return (
    <div>
      <label htmlFor="dropdown">Dropdown Label:</label>
      <input
        type="text"
        name="name"
        onChange={handleFormChange}
        value={label.name}
      />
      <select id="dropdown">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option.value}
            onChange={(event) => handleOptionChange(index, event)}
          />
          <button onClick={() => handleDeleteOption(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddOption}>Add Option</button>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default Mainform1;