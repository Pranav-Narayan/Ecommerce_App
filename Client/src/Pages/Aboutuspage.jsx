import React from 'react'
import { motion } from 'framer-motion'

const Aboutuspage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop"
                    alt="About Us Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center px-4"
                >
                    <span className="text-orange-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Crafting Lifestyle.</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">We believe that premium quality and accessible fashion should go hand in hand.</p>
                </motion.div>
            </div>

            {/* Mission Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Redefining modern retail, one carefully curated piece at a time.</h2>
                        <div className="h-1 w-20 bg-orange-500 rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Founded in 2023, CartWave started as a small capsule collection designed to bridge the gap between high-end luxury and everyday essentials.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, we source the finest sustainable materials to create timeless pieces that empower our community to look and feel their absolute best. Our ethical supply chain ensures that everyone involved in creating your product is treated with respect and dignity.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop"
                            alt="Our Store"
                            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[80px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
                        <div className="px-4">
                            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">50k+</h3>
                            <p className="text-gray-400 font-medium">Happy Customers</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">10k+</h3>
                            <p className="text-gray-400 font-medium">Original Designs</p>
                        </div>
                        <div className="px-4 border-t lg:border-t-0 border-gray-800 pt-8 lg:pt-0">
                            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">99%</h3>
                            <p className="text-gray-400 font-medium">Positive Feedback</p>
                        </div>
                        <div className="px-4 border-t lg:border-t-0 border-gray-800 pt-8 lg:pt-0">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h3>
                            <p className="text-gray-400 font-medium">Expert Support</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutuspage
