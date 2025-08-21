import Background from './components/Background';
import Navigationbar from './components/Navigationbar';
import './App.css'
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Navigationbar darkMode={darkMode}
      setDarkMode={setDarkMode}/>
      <Background />
    </div>
  );
}

export default App;
