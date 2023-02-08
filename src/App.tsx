import React from 'react';
import './App.css';
import { dataChat } from './mock';
import { convertToExtChat } from './untils/convert';

function App() {
  const dataConverted = convertToExtChat(dataChat);
  console.log('data Chat:', dataChat);
  console.log('data Chat Converted:', dataConverted);
  return (
    <div className="App">
    </div>
  );
}

export default App;
