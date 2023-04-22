import './App.css';
import FileUpload from './components/FileUpload';
import Try from './components/TodoForm';
import New from './components/New';
import Normalmain from './components/Normalmain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './components/TodoApp';

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

        
      </div>
    );
  }

  export default App;
