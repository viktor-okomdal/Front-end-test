import React from 'react';
import './App.css';
import { GridComponent } from './components/GridComponent';
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return (
    <div className='App'>
      <NavbarComponent />
      <GridComponent />
    </div>
  );
}

export default App;
