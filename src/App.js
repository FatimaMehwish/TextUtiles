import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Alert from './components/Alert';
import Homesection from './components/Homesection'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('')

  const showAlert = (message, type) => {
    setAlert({
      Message: message,
      Type: type
    });
    setTimeout(() => {
      setAlert('')
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#455A64'
      document.body.style.color = 'white'
      showAlert(' Dark mode has been enabled ', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('light mode has been enabled', 'success')

    }
  }
  return (
    <>
      <Header mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Homesection showAlert={showAlert} />
    </>
  );
}

export default App;
