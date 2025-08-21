import Navigationbar from './components/Navigationbar';
import Background from './components/Background';
import Sidebar from './components/Sidebar/Sidebar'

import './App.css'
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Navigationbar darkMode={darkMode}
      setDarkMode={setDarkMode}/>
      <Background />
      <Sidebar darkMode={darkMode}/>
    </div>
  );
}

export default App;
