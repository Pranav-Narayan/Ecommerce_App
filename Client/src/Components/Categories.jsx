import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {
            title: "Women's Fashion",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
            link: "/shop/women",
            colSpan: "md:col-span-2 lg:col-span-1"
        },
        {
            title: "Men's Essentials",
            image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=2787&auto=format&fit=crop",
            link: "/shop/men",
            colSpan: "md:col-span-1 lg:col-span-1"
        },
        {
            title: "Accessories",
            image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=2787&auto=format&fit=crop",
            link: "/shop/accessories",
            colSpan: "md:col-span-1 lg:col-span-1"
        }
    ]

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
                    <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Explore our carefully curated collections designed to elevate your everyday lifestyle with premium quality.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((cat, idx) => (
                        <Link
                            key={idx}
                            to={cat.link}
                            className={`group relative h-[450px] overflow-hidden rounded-3xl shadow-sm transition-all hover:shadow-2xl ${cat.colSpan}`}
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-10">
                                <h3 className="text-3xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.title}</h3>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white font-medium flex items-center gap-2">
                                    <span className="border-b-2 border-orange-500 pb-1 hover:text-orange-400 hover:border-orange-400 inline-block transition-colors">Discover Now</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
