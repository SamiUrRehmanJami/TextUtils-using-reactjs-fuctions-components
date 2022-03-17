import './App.css';

import About from './components/About';

import Navbar from './components/Navbar';

import TextFoam from './components/TextFoam';

import React, { useState} from 'react';

import Alert from './components/Alert';

 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type)=>{

    setAlert({
      msg: message,
      type: type
  
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success");
      document.title= 'TextUtils  -  DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title= 'TextUtils  -  LightMode'
    }
  }
  const greenMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode has been enabled", "Success");
      document.title= 'TextUtils  -  GreenMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title= 'TextUtils  -  LightMode'
    }
  }

  const blueMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'blue';
      showAlert("Dark mode has been enabled", "Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }

  return (
    <>
    <Router>
       <Navbar title="TextUtils" aboutText="About" mode={mode} blueMode={blueMode} greenMode={greenMode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
       <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <TextFoam showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>   
          </Route>
        </Switch>
       </div>
       </Router>

    </>
    
  );
}

export default App;
