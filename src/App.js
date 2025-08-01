import './App.css';
import Layout from '../Layout/Layout'
import PRODUCTS from './PRODUCTS.json';
import Products from '../Products/Products';
import { Routes, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from './Blog/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Products props={PRODUCTS} />} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
