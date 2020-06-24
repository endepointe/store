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
      <main>
        <section>
          <Products />
        </section>
      </main>
      {/* cart */}
    </BrowserRouter>
  )
}

export default App;