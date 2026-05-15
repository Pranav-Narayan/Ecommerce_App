import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Enquiriespage = () => {
    const faqs = [
        {
            question: "What is your standard shipping policy?",
            answer: "We offer free standard shipping on all orders over $150. Standard shipping typically takes 3-5 business days. Express shipping is available for an additional fee at checkout."
        },
        {
            question: "How do I return or exchange an item?",
            answer: "You have 30 days from the date of delivery to return or exchange items. Items must be unworn, with tags attached. Simply log into your profile and click 'Initiate Return' on your order."
        },
        {
            question: "Do you offer wholesale purchasing?",
            answer: "Yes! We work with boutique retailers worldwide. Please visit our Connect Us page and select 'Wholesale Inquiry' in the subject line to get in touch with our B2B team."
        },
        {
            question: "Are your products sustainably made?",
            answer: "Sustainability is at the core of our business. 90% of our materials are organically sourced or recycled, and our packaging is 100% biodegradable and plastic-free."
        },
        {
            question: "How can I track my recent order?",
            answer: "Once your order ships, you will receive a tracking link via email. You can also view real-time tracking updates directly in your account dashboard under 'Order History'."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Support Center</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-500">Quick answers to common questions about our products, shipping, and policies.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === idx ? 'text-orange-500' : 'text-gray-900'}`}>{faq.question}</span>
                                <span className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-orange-500' : 'text-gray-400'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gray-900 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Can't find the answer you're looking for? Our dedicated support team is here to help you out.</p>
                        <Link to="/connectus" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:-translate-y-1">
                            Contact Support
                        </Link>
                    </div>
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none" />
                </div>

            </div>
        </div>
    )
}

export default Enquiriespage
