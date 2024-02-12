import React from 'react';
import ReactDOM from 'react-dom/client';
import Canvas from './canvas';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="app bg-black">
      <Canvas />
    </main>
  </React.StrictMode>
);
