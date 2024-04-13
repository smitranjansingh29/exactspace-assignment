import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const ChatThread = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, message]);
  };

  const handleLike = () => {
    // Handle like functionality here if needed
  };

  return (
    <div>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} onLike={handleLike} />
      ))}
    </div>
  );
};

export default ChatThread;

