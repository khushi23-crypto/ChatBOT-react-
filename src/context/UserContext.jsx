import React, { createContext, useState } from 'react';
import run from '../gemini';

export const dataContext = createContext();

function UserContext({ children }) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]); // to store conversation
    const [loading, setLoading] = useState(false);
    
    async function sent(prompt) {
        if (!prompt.trim()) return;
        // Add user message
        setMessages(prev => [...prev, { role: "user", text: prompt }]);
        setLoading(true);
        const reply = await run(prompt);

        // Add AI reply
        setMessages(prev => [...prev, { role: "ai", text: reply }]);

        setInput(''); // clear input after sending
    }

    const data = {
        input,
        setInput,
        sent,
        loading,
        setLoading,
        messages
    };

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
}

export default UserContext;
