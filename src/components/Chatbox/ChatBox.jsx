import React from 'react'
import './ChatBox.css'
import { BsSendFill } from "react-icons/bs";

function ChatBox({ darkMode }) {
  return (
    <div className={`chatbox ${darkMode ? 'chatbox-dark' : 'chatbox-light'}`}>
      <div className="topsection">
        <div className="headings">
          <span>Hello ,</span>
          <span>I'm Your Own Assistant </span>
          <span>What can I help you?</span>
        </div>
      </div>
      <div className="bottomsection">
        <input type="text" placeholder='Ask anything...' />
        <button id='sendbtn'><BsSendFill />
        </button>
      </div>
    </div>
  )
}

export default ChatBox