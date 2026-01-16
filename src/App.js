import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import Category from './components/Category';
import Contact from './components/Contact';
import ProductLists from './components/ProductLists';
import ProductDetail from './pages/ProductDetail';
import NewProductSpecial from './components/NewProductSpecial';
import Login from './components/Login';
import Register from './components/Register';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App bg-white min-h-screen">
        <Header />
        
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={
            <main className="flex flex-col overflow-hidden">
              <Slider />
              <Categories />
              
              <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-10">
                {/* Section Header: New Product */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                  <div>
                    <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">New Product</h2>
                    <p className="text-teal-600 font-bold uppercase text-sm tracking-widest">Special Collection</p>
                  </div>
                  <Link to="/newproductspecial">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2.5 px-8 rounded-full transition-all shadow-md active:scale-95">
                      View More
                    </button>
                  </Link>
                </div>
                
                <ProductList />
                
                <div className="my-16">
                  <Dress />
                </div>

                {/* Section Header: Special Offer */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                  <div>
                    <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">New One</h2>
                    <p className="text-teal-600 font-bold uppercase text-sm tracking-widest">Limited Special Offer</p>
                  </div>
                </div>

                <Sheets />
              </div>

              <Download />
              <Features />
              <Footer />
            </main>
          } />

          {/* Other Routes */}
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