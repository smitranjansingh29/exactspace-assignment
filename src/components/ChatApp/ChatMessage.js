import React, { useState } from 'react';

const ChatMessage = ({ message, onLike }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    onLike();
  };

  return (
    <div>
      <span>{message}</span>
      <button onClick={handleLike}>Like</button>
      <span>{likes}</span>
    </div>
  );
};

export default ChatMessage;
