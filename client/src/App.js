import './App.css';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';

const App = () => {

  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <Products />
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App;