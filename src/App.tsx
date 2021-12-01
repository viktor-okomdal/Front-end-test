import React from 'react';
import './App.css';
import {ProductsCard} from './components/gridComponent'

function App() {
  return (
    <div className="App">
    <header>
      <div className="nav-bar">
        <span className="cart">
        </span>
      </div>
      </header>
    <main>
     <div className="main-wrapper">
       <div className="product-wrapper">
      <ProductsCard/>
       </div>
       </div>  
    </main>
    <footer>
    </footer>
    </div>
  );
}

export default App;
