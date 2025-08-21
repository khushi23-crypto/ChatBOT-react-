import React from 'react'
import './ChatBox.css'
import { BsSendFill } from "react-icons/bs";
import { dataContext } from '../../context/UserContext';
import { FaUserAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { Button } from 'react-bootstrap';

function ChatBox({ darkMode }) {
  let {sent,input,setInput,messages} = React.useContext(dataContext);
  return (
    <div className={`chatbox ${darkMode ? 'chatbox-dark' : 'chatbox-light'}`}>
      <div className="topsection">
        <div className="headings">
          <span>Hello ,</span>
          <span>I'm Your Own Assistant </span>
          <span>What can I help you?</span>
        </div>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <strong>{msg.role === 'user' ? <FaUserAlt /> : <FaRobot />}</strong>:&nbsp;
            {msg.text}
          </div>
        ))}
      </div>
      <div className="bottomsection">
        <input onChange={(e)=>{
setInput(e.target.value)
        }} type="text" placeholder='Ask anything...' value={input} />
        <Button id='sendbtn' onClick={()=>{if (input.trim() !== "") {
sent(input);
setInput("");
}
        }}
        >
          <BsSendFill /></Button>
      </div>
    </div>
  )
}

export default ChatBox