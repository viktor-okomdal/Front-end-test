import React from 'react';
import './App.css';
import { GridComponent } from './components/GridComponent';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='nav-bar'>
          <span className='cart'></span>
        </div>
      </header>
      <main>
        <div className='main-wrapper'>
          <div className='product-wrapper'>
            <GridComponent />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
