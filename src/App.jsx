import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button.jsx'; 


function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-4xl text-blue-400 font-bold">🚀 Tailwind is working!</h1>
    </div>
    </>

    
  );
}

export default App;
