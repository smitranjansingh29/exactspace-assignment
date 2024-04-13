import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
