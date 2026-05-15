import React from 'react'
import { FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from 'react-icons/fa'

const Features = () => {
    const features = [
        {
            icon: <FaShippingFast className="text-4xl relative z-10 text-orange-500" />,
            title: "Free Shipping",
            subtitle: "On all orders over $150"
        },
        {
            icon: <FaHeadset className="text-4xl relative z-10 text-orange-500" />,
            title: "24/7 Support",
            subtitle: "Dedicated support team"
        },
        {
            icon: <FaShieldAlt className="text-4xl relative z-10 text-orange-500" />,
            title: "Secure Payment",
            subtitle: "100% secure checkout"
        },
        {
            icon: <FaUndo className="text-4xl relative z-10 text-orange-500" />,
            title: "30 Days Return",
            subtitle: "Hassle-free exchange"
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group flex flex-col items-center text-center space-y-5 p-8 rounded-3xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-gray-100 transition-all duration-300 cursor-default">
                            <div className="relative p-5 rounded-2xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                                {feature.icon}
                                <div className="absolute inset-0 bg-orange-200 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 font-medium">{feature.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
