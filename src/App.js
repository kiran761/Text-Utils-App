import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  HashRouter,
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
      
      
      <div className="container-fluid">
      
        <HashRouter>
        <Navbar title="Kiran Kumar Reddy" mode={mode} changeMode={changeMode}></Navbar>
        <Alert alert={alert} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
          </Routes>
        </HashRouter>
      </div>

    </>

  );
}

export default App;
