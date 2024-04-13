import React from 'react';
import ChatThread from './components/ChatApp/ChatThread';
import ChatInput from './components/ChatApp/ChatInput';

const App = () => {
  return (
    <div>
      <ChatThread />
      <ChatInput />
    </div>
  );
};

export default App;