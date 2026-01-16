import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();

        const allProducts = data.carts.flatMap(cart => cart.products);
        const selectedProduct = allProducts.find(item => item.id === parseInt(id));

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  );

  if (error) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 inline-block font-bold">
        {error}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors font-semibold"
        >
          &larr; Back to Products
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Left: Product Image */}
          <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative">
            <span className="absolute top-6 left-6 bg-red-500 text-white font-black px-4 py-1.5 rounded-full text-sm shadow-lg z-10">
              {product.discountPercentage}% OFF
            </span>
            <div className="h-64 md:h-[450px] w-full overflow-hidden flex items-center justify-center">
              <img 
                src={product.thumbnail || 'placeholder.jpg'} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black text-gray-800 leading-tight mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-teal-600">₹{product.price}</span>
              <span className="text-gray-400 line-through text-lg">
                ₹{((product.price * 100) / (100 - product.discountPercentage)).toFixed(0)}
              </span>
            </div>

            <div className="space-y-6 mb-10 flex-grow">
              <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-xl w-fit">
                <span className="font-bold">Quantity Available:</span>
                <span className="text-teal-600 font-bold">{product.quantity} units</span>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-gray-800 mb-2 uppercase text-sm tracking-widest">Description</h4>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || "This premium product is carefully selected for our marketplace. Experience quality like never before with SK Prime Mart exclusive collection."}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95 text-lg">
                ADD TO CART
              </button>
              <button className="flex-1 bg-gray-800 hover:bg-black text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95 text-lg">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;