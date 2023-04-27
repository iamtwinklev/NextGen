import './App.css';
import FileUpload from './components/FileUpload';
import New from './components/New';
import Normalmain from './components/Normalmain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './components/TodoApp';
// import MainForm from './components/MainForm';
// import Final from './components/Final';
import Mainform1 from './components/MainForm1';
// import DynamicDropdown from './components/DynamicDropdown';

function App() {

  return (
    <div className="App">

      <New />
      <BrowserRouter>
        <Routes>
          <Route path="/file" element={<FileUpload />} />
          <Route path="/try" element={<TodoApp />} />
          <Route path="/normal" element={<Normalmain />} />
        </Routes>
      </BrowserRouter>
      <Mainform1 />
      {/* <Final/> */}
      {/* <DynamicDropdown/> */}

    </div>
  );
}

export default App;
