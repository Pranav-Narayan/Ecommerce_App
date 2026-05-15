import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";
import { logout } from '../Redux/Authslice';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { isAuthenticated, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/api/auth/logout', {}, { withCredentials: true })
            dispatch(logout())
            toast.success("Successfully logged out")
        } catch (error) {
            console.log("Error logging out", error)
            toast.error("Error logging out")
        }
    }

    const navLinks = [
        { name: 'About Us', path: '/aboutus' },
        { name: 'Store', path: '/store' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Enquiries', path: '/enquiries' },
        { name: 'Connect Us', path: '/connectus' },
    ]

    return (
        <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo Segment */}
                    <div className='shrink-0 flex items-center'>
                        <Link to='/'>
                            <img src={logo} alt="CartWave Logo" className='w-auto h-12 md:h-16 object-contain' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center space-x-8'>
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} className='text-base font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200'>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className='hidden lg:flex items-center space-x-4'>
                        {isAuthenticated ? (
                            <div className='flex items-center space-x-1'>
                                <Link to='/profile' className='flex items-center gap-2 text-gray-700 hover:text-orange-500 font-medium px-4 py-2 transition-colors duration-200'>
                                    <FaUserCircle className='text-3xl' />
                                    Profile
                                </Link>
                                <button onClick={handleLogout} className='px-6 py-2 rounded-full font-medium text-black/50 text-sm transition-all duration-200 hover:-translate-y-0.5'>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className='flex items-center space-x-1'>
                                <Link to='/login' className='text-gray-700 hover:text-orange-500 font-medium px-4 py-2 transition-colors duration-200'>
                                    Login
                                </Link>
                                <Link to='/signup' className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] transition-all duration-200 hover:-translate-y-0.5'>
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden flex items-center'>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none transition-colors duration-200'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {/* Hamburger Icon */}
                            {!isMobileMenuOpen ? (
                                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden absolute w-full'
                    >
                        <div className='px-4 pt-2 pb-6 space-y-1 sm:px-6 flex flex-col gap-1'>
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className='block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200'
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className='mt-4 pt-6 border-t border-gray-100 flex flex-col gap-3 px-2'>
                                {isAuthenticated ? (
                                    <div className='flex items-center space-x-4'>
                                        <Link to='/profile' className='text-gray-700 hover:text-orange-500 font-medium px-4 py-2 transition-colors duration-200'>
                                            Profile
                                        </Link>
                                        <button onClick={handleLogout} className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] transition-all duration-200 hover:-translate-y-0.5'>
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className='flex items-center space-x-4'>
                                        <Link to='/login' className='text-gray-700 hover:text-orange-500 font-medium px-4 py-2 transition-colors duration-200'>
                                            Login
                                        </Link>
                                        <Link to='/signup' className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] transition-all duration-200 hover:-translate-y-0.5'>
                                            Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar