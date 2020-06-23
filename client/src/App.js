import React from 'react';

import {
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Products />
      {/* cart */}
    </BrowserRouter>
  )
}

export default App;