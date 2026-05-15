import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsData } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find product or handle 404
    const product = productsData.find(p => p.id === parseInt(id));

    const [selectedColor, setSelectedColor] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Product Not Found</h1>
                <p className="text-gray-500 mb-8">The item you are looking for does not exist or has been removed.</p>
                <button onClick={() => navigate('/store')} className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform">Back to Store</button>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-10 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <div className="flex items-center text-sm text-gray-500 mb-8 gap-2">
                    <button onClick={() => navigate('/')} className="hover:text-orange-500 transition-colors">Home</button>
                    <span>/</span>
                    <button onClick={() => navigate('/store')} className="hover:text-orange-500 transition-colors">Store</button>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[500px] md:h-[700px] rounded-t-[3rem] rounded-b-2xl overflow-hidden bg-gray-50 border border-gray-100"
                    >
                        {product.badge && (
                            <div className="absolute top-6 left-6 z-10 bg-orange-500 text-white text-sm font-bold tracking-wider px-5 py-2 rounded-full shadow-lg">
                                {product.badge}
                            </div>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>

                    {/* Right: Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-200'}`} viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                                <span className="text-gray-900 font-bold ml-2">{product.rating}</span>
                            </div>
                            <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl font-black text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                            {product.originalPrice && (
                                <span className="text-xl text-gray-400 font-semibold line-through decoration-gray-300">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                            )}
                        </div>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed border-b border-gray-100 pb-10">
                            {product.description || "Premium quality product designed meticulously for modern lifestyles. Perfect addition to your daily routine."}
                        </p>

                        {/* Options */}
                        {product.colors && (
                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Available Colors</h3>
                                <div className="flex items-center gap-3">
                                    {product.colors.map((color, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedColor(i)}
                                            className={`w-10 h-10 rounded-full ${color} flex items-center justify-center transition-all ${selectedColor === i ? 'ring-4 ring-orange-500/50 ring-offset-2 scale-110' : 'border border-gray-200 hover:scale-110'}`}
                                        >
                                            {selectedColor === i && <svg className="w-5 h-5 text-white mix-blend-difference" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mb-10">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Quantity</h3>
                            <div className="flex items-center border border-gray-200 rounded-2xl w-32 bg-gray-50">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-gray-500 hover:text-gray-900 transition-colors">-</button>
                                <span className="flex-1 text-center font-bold text-gray-900">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-gray-500 hover:text-gray-900 transition-colors">+</button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-gray-100 pb-12">
                            <button className="flex-1 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-gray-900/20 hover:-translate-y-1 text-lg">
                                Add to Cart
                            </button>
                            <button className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 text-lg">
                                Buy it Now
                            </button>
                            <button className="p-4 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors rounded-2xl border border-gray-200 flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </button>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                In stock, ready to ship
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                Free shipping on orders over ₹15,000
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-6 h-6 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                100% secure encrypted checkout
                            </li>
                        </ul>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
