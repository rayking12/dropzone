import React from 'react';
import Dropzone from './dropzone/Dropzone'
import './App.css';

function App() {
  return (
    <div>
    <p className="title"> Drag and Drop images here</p>
    <div className="content">
      <Dropzone  />
    </div>
    </div>
  );
}

export default App;
