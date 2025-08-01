import React, {useState} from 'react';
import './App.css';
import Layout from '../Layout/Layout'
import PRODUCTS from './PRODUCTS.json';
import Products from '../Products/Products';
import { Routes, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import ThemeContext from '../../context/ThemeContext';
import themeConfig from '../../configs/theme';
import SingleProduct from '../SingleProduct/SingleProduct';

function App() {
  const [activeTheme, setActiveTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{
      theme : themeConfig[activeTheme],
      setActiveTheme,
    }}>
      <div className="App">
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Products props={PRODUCTS} />} />
              <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact />} />
              <Route path='blog' element={<Blog />} />
              <Route path='/product/:id' element={<SingleProduct />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
