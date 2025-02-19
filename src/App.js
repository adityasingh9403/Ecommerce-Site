import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Dress from './components/Dress';
import Sheets from './components/Sheets';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import Clothing from './components/Clothing';
import Electronics from './components/Electronics';
import Home from './components/Home';
import Beauty from './components/Beauty';
import Toys from './components/Toys';
import Grocery from './components/Grocery';
import Books from './components/Books';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import About from './components/About';
import Seller from './components/Seller';
import './App.css';
import Category from './components/Category';
import Contact from './components/Contact';
import ProductLists from './components/ProductLists';
import ProductDetail from './pages/ProductDetail';
import NewProductSpecial from './components/NewProductSpecial';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <Categories />
              <hr />
              <p className="newproduct"><b>New Product</b></p>
              <p className="newproduct1">special</p>
              <Link to="/newproductspecial" className="footer-link"><button className="footerlink">View More</button></Link>
              <hr />
              <ProductList />
              <hr></hr>
              <Dress />

              <hr />
              <p className="newproduct"><b>New One</b></p>
              <p className="newproduct1">Special Offer</p>
              <hr />
              <Sheets />
              <Download />
              <Features />
              <Footer />
            </>
          } />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/books" element={<Books />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productlists" element={<ProductLists />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/newproductspecial" element={<NewProductSpecial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;