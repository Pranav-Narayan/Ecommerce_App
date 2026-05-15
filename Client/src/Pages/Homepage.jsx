import React from 'react'
import HeaderSlider from '../Components/HeaderSlider'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import Features from '../Components/Features'
import Categories from '../Components/Categories'
import Newsletter from '../Components/Newsletter'

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Features />
            <Categories />

            <section className="pt-24 pb-12 bg-white">
                <div className="mx-8 md:mx-16 mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Featured Promotions</h2>
                    <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">Discover the best seasonal deals hand-picked specifically for you.</p>
                    <div className="h-1 w-24 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                </div>
                <HeaderSlider />
            </section>

            <Products />

            <Newsletter />
        </div>
    )
}

export default Homepage