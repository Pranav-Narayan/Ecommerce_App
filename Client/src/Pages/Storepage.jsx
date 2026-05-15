import React from 'react'
import Products from '../Components/Products'
import { motion } from 'framer-motion'

const Storepage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Store Header */}
            <div className="bg-gray-50/50 py-16 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">The Complete Catalog</h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Explore all our collections in one place. Hand-picked products for your sophisticated lifestyle.</p>
                    </motion.div>
                </div>
            </div>

            {/* Products Wrapper */}
            <div className="-mt-12">
                <Products />
            </div>
        </div>
    )
}

export default Storepage
