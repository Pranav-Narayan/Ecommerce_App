import React, { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setEmail('')
        }
    }

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0A0A] sm:rounded-[3rem] sm:mx-4 md:mx-8 lg:mx-16 mb-16">
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-140 h-140 bg-orange-500/20 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-140 h-140 bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Special Offers</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Stay in the Loop</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Subscribe to our exclusive newsletter to receive early access to sales, latest trends, and personalized recommendations directly in your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto bg-white/5 p-2 rounded-3xl sm:rounded-full border border-white/10 backdrop-blur-md">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address..."
                        className="flex-1 w-full px-6 py-4 rounded-full bg-transparent text-white placeholder-gray-500 focus:outline-none transition-all"
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shrink-0 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
                    >
                        Subscribe Now
                    </button>
                </form>
                <p className="text-sm text-gray-500 mt-8 font-medium">By subscribing, you agree to our <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> & <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.</p>
            </div>
        </section>
    )
}

export default Newsletter
