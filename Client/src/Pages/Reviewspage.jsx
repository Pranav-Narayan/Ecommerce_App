import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const Reviewspage = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Fashion Blogger",
            content: "Absolutely phenomenal quality. I've bought multiple pieces from the winter collection and every single one feels bespoke and premium.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Michael Chen",
            role: "Verified Buyer",
            content: "The customer service is unmatched. They helped me exchange a size instantly and the new piece fits perfectly. Lifetime customer here.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=michael"
        },
        {
            name: "Elena Rodriguez",
            role: "Design Director",
            content: "Visually stunning apparel. The material holds up excellently in the wash and maintains its shape. Highly recommended for professionals.",
            rating: 4,
            image: "https://i.pravatar.cc/150?u=elena"
        },
        {
            name: "David O'Connor",
            role: "Verified Buyer",
            content: "Great minimalist aesthetic. Exactly what I was looking for. Shipping was incredibly fast, arrived two days early.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=david"
        },
        {
            name: "Jessica Waltz",
            role: "Verified Buyer",
            content: "The packaging alone felt like opening a luxury gift. The accessories complement my outfits perfectly.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=jess"
        },
        {
            name: "Aisha Patel",
            role: "Style Consultant",
            content: "I regularly recommend this store to my clients. The balance of price and premium quality is extraordinary.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=aisha"
        }
    ]

    return (
        <div className="bg-gray-50/30 min-h-screen py-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">Loved by Thousands</h1>
                    <p className="text-xl text-gray-500">Don't just take our word for it. Here is what our amazing community has to say about their experience.</p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 transition-all duration-300"
                        >
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-200"} />
                                ))}
                            </div>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">"{review.content}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-100 p-0.5" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{review.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Reviewspage
