import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#043a66  ';
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils - DarkMode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUtils - LightMode";

    }
  }
  return (
    <>
      
      
      <div>
      
        <BrowserRouter>
        <Navbar title="Kiran Kumar Reddy" mode={mode} changeMode={changeMode}></Navbar>
        <Alert alert={alert} />
          <Routes>
            <Route index element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>

  );
}

export default App;
