import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';

const Products = () => {
    const categories = ['Trending', 'Most Reviewed', 'New Collection', 'Best Offers'];
    const [activeTab, setActiveTab] = useState('Trending');
    const [expandedProductId, setExpandedProductId] = useState(null);
    const navigate = useNavigate();

    const filteredProducts = productsData.filter(product => product.category.includes(activeTab));

    return (
        <div className="w-full mx-auto md:px-0 py-20 mt-8 relative bg-gray-50/30">
            <div className="flex flex-col items-center mb-16 px-4">
                <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-3">Trending Now</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-center">Our Premium Collection</h2>
                <p className="text-gray-500 text-center max-w-2xl text-lg leading-relaxed">Discover top-tier products meticulously crafted for performance, style, and unmatched quality. Find your next favorite item today.</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-400 ${activeTab === cat
                            ? 'bg-gray-900 text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transform -translate-y-1 border-transparent'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`)}
                                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-500 group/card flex flex-col w-full h-full hover:-translate-y-1 relative cursor-pointer"
                            >
                                {/* Product Image - Compact aesthetic */}
                                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50 rounded-t-3xl border-b border-gray-50/50">
                                    {product.badge && (
                                        <div className="absolute top-5 left-5 z-10 bg-orange-500 text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full shadow-lg">
                                            {product.badge}
                                        </div>
                                    )}
                                    <div className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-md p-3 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all shadow-md text-gray-400 hover:scale-110">
                                        <svg className="w-5 h-5 fill-none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center transform group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-4 sm:p-5 flex flex-col grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center text-yellow-400">
                                                <svg className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <span className="text-gray-700 text-sm font-bold ml-1.5">{product.rating}</span>
                                            </div>
                                            <span className="text-gray-400 text-sm font-medium">({product.reviews})</span>
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug mb-3 hover:text-orange-500 transition-colors">{product.name}</h3>

                                    {/* Color Swatches */}
                                    {product.colors && (
                                        <div className="flex items-center gap-2 mb-6 mt-auto">
                                            {product.colors.map((color, i) => (
                                                <div key={i} className={`w-4 h-4 rounded-full ${color} border border-gray-200 shadow-sm cursor-pointer hover:scale-125 transition-transform`}></div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-50 h-16 relative w-full overflow-hidden">
                                        <AnimatePresence mode="popLayout">
                                            {expandedProductId === product.id ? (
                                                <motion.div
                                                    key="expanded"
                                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                    className="flex items-center justify-between w-full h-full gap-2"
                                                >
                                                    <button onClick={(e) => { e.stopPropagation(); }} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-2 py-2.5 rounded-xl text-xs transition-colors whitespace-nowrap shadow-xs">Cart</button>
                                                    <button onClick={(e) => { e.stopPropagation(); }} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-2 py-2.5 rounded-xl text-xs transition-all shadow-sm flex justify-center whitespace-nowrap">Buy</button>
                                                    <button onClick={(e) => { e.stopPropagation(); setExpandedProductId(null); }} className="p-2.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="collapsed"
                                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                    className="flex items-center justify-between w-full h-full"
                                                >
                                                    <div className="flex flex-col justify-center h-full">
                                                        {product.originalPrice && (
                                                            <span className="text-xs text-gray-400 font-semibold line-through decoration-gray-300">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                                        )}
                                                        <span className="text-lg font-black text-gray-900 leading-none mt-1">₹{product.price.toLocaleString('en-IN')}</span>
                                                    </div>
                                                    <button onClick={(e) => { e.stopPropagation(); setExpandedProductId(product.id); }} className="bg-gray-900 hover:bg-orange-500 hover:-translate-y-1 hover:shadow-sm text-white p-3 rounded-xl transition-all duration-300" aria-label="Add to cart">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="flex justify-center mt-10">
                    <button className="px-10 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow-sm text-lg">
                        Load More Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
