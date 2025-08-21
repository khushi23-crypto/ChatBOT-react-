import Navigationbar from './components/Navigationbar';
import Background from './components/Background';
import Sidebar from './components/Sidebar/Sidebar'
import Seperation from './components/Seperation/Seperation';
import ChatBox from './components/Chatbox/ChatBox';
import './App.css'
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Navigationbar darkMode={darkMode}
        setDarkMode={setDarkMode} />
      <Background />
      <div className='main-content'>
        <Sidebar darkMode={darkMode} />
        <Seperation />
        <ChatBox darkMode={darkMode} />
      </div>
    </div>
  );
}
export default App;
