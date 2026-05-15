import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const heroImages = [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497339100210-9e87df79c218?q=80&w=1200&auto=format&fit=crop",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden bg-white mx-4 sm:mx-8 md:mx-16 mt-8 rounded-3xl shadow-xl border border-gray-100">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <style>
                    {`
                    @keyframes blob {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    .animate-blob {
                        animation: blob 7s infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    .animation-delay-4000 {
                        animation-delay: 4s;
                    }
                    `}
                </style>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-purple-200/40 blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-orange-200/40 blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 px-6 py-16 sm:py-24 lg:px-16 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-start text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-medium text-sm mb-6 border border-orange-100 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        New Spring Collection 2026
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Elevate Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-purple-600">
                            Everyday Style
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                        Discover a curated collection of premium products designed to bring elegance and functionality to your modern lifestyle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden relative group">
                            <span className="relative z-10 flex items-center gap-2">
                                Shop the Collection
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        </button>
                        <button className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 rounded-full font-semibold transition-all hover:bg-gray-50 flex items-center justify-center">
                            Explore Deals
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            Free Shipping
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            24/7 Support
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            Secure Checkout
                        </div>
                    </div>
                </motion.div>

                {/* Visual Bento Grid Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 relative h-[450px] sm:h-[550px] grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:my-0 lg:ml-4"
                >
                    {/* Main large block */}
                    <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={heroImages[currentImage]}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.8 }}
                                src={heroImages[currentImage]}
                                alt="Fashion showcase primary"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>

                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md">
                            <p className="text-xs font-bold text-gray-900 tracking-wider uppercase">Trending</p>
                        </div>
                    </div>

                    {/* Top right secondary block */}
                    <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] hidden md:block group">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={heroImages[(currentImage + 1) % heroImages.length]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                src={heroImages[(currentImage + 1) % heroImages.length]}
                                alt="Fashion showcase secondary"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    </div>

                    {/* Bottom right tertiary block */}
                    <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] hidden md:block group">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={heroImages[(currentImage + 2) % heroImages.length]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                src={heroImages[(currentImage + 2) % heroImages.length]}
                                alt="Fashion showcase tertiary"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                        <div className="absolute bottom-4 right-4 z-20 bg-orange-500 text-white p-3 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform cursor-pointer">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
