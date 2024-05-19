import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  };

  return (
 <>
      
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
          <Alert alert={alert}></Alert>
             <div className="container my-3">
                <Routes>
                   <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/"
                     element={<TextForm  heading="Enter your text" mode={mode} showAlert={showAlert} />}></Route>
                </Routes>
            </div>
      </BrowserRouter>
   </>
  );
}

export default App;
