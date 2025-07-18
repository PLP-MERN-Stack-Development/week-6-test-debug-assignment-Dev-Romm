import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bug Tracker</h1>
      <Button onClick={() => alert('Clicked!')}>Click me</Button>
    </div>
  );
}

export default App;