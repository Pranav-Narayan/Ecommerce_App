import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Connectuspage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        // form logic mock
        setFormData({ name: '', email: '', subject: '', message: '' })
        alert('Message sent successfully! Our team will get back to you soon.')
    }

    return (
        <div className="bg-gray-50/50 min-h-screen py-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Let's start a conversation.</h1>
                        <p className="text-lg text-gray-500 mb-12 max-w-lg leading-relaxed">Whether you have a question about our products, need help with an order, or just want to say hi, we're ready to listen.</p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-orange-500">
                                    <FaMapMarkerAlt className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Our Headquarters</h4>
                                    <p className="text-gray-500">123 Commerce Blvd, Suite 400<br />San Francisco, CA 94107</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-orange-500">
                                    <FaPhoneAlt className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                                    <p className="text-gray-500">+1 (800) 123-4567<br /><span className="text-sm">Mon-Fri 9am to 6pm PST</span></p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-orange-500">
                                    <FaEnvelope className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                                    <p className="text-gray-500">support@cartwave.com<br /><span className="text-sm">We reply within 24 hours</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="p-4 bg-white text-gray-400 hover:text-orange-500 hover:shadow-md rounded-2xl transition-all duration-300 hover:-translate-y-1"><FaInstagram className="w-5 h-5" /></a>
                            <a href="#" className="p-4 bg-white text-gray-400 hover:text-orange-500 hover:shadow-md rounded-2xl transition-all duration-300 hover:-translate-y-1"><FaTwitter className="w-5 h-5" /></a>
                            <a href="#" className="p-4 bg-white text-gray-400 hover:text-orange-500 hover:shadow-md rounded-2xl transition-all duration-300 hover:-translate-y-1"><FaFacebookF className="w-5 h-5" /></a>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all text-gray-900 border border-gray-100"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all text-gray-900 border border-gray-100"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all text-gray-900 border border-gray-100"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition-all text-gray-900 border border-gray-100 resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-gray-900 hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-orange-500/40 hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Connectuspage
