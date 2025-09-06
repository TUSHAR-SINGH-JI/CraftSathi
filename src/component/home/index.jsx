import React from 'react'
import { useAuth } from '../../context/authcontext'
import Header from '../header/Header'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'

const Home = () => {
    const { currentUser } = useAuth()

    const heroProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { mass: 1, tension: 120, friction: 14 },
        delay: 200
    })

    const sectionProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { mass: 1, tension: 120, friction: 14 },
        delay: 400
    })

    return (
        <div className='min-h-screen bg-gradient-to-b from-purple-900 via-black to-black text-white font-sans'>
            <Header />
            {/* Hero Section */}
            <animated.section style={heroProps} className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 py-16 md:py-24 lg:py-32 bg-gradient-to-r from-[#1a0010] to-[#200022] backdrop-blur-md border border-purple-600/30 shadow-purple-900/40'>
                {/* Background Elements (simplified for dark theme) */}
                <div className='absolute inset-0 z-0 opacity-30'>
                    <div className='absolute w-91 h-91 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob top-10 left-1/4'></div>
                    <div className='absolute w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                    <div className='absolute w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-10 right-1/4'></div>
                </div>

                <div className='relative z-10 text-center max-w-6xl mx-auto px-4 pt-20 md:pt-0 flex flex-col md:flex-row items-center justify-between'>
                    {/* Hero Text Content */}
                    <div className='md:w-1/2 text-left md:pr-8 mb-10 md:mb-0'>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className='text-5xl lg:text-7xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'
                        >
                            Empowering Artisans, Preserving Heritage
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-lg'
                        >
                            An AI-powered platform connecting India’s timeless craftsmanship with today’s digital world. Help artisans expand their reach, share authentic stories, and grow sustainably.
                        </motion.p>
                        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform shadow-purple-500/50'
                            >
                                Join Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-transparent hover:bg-white hover:text-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out border border-white transform shadow-purple-500/50'
                            >
                                Explore Crafts
                            </motion.button>
                        </div>
                        {/* Small Feature Highlights */}
                        <div className='flex flex-wrap gap-3 mt-6'>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                className='bg-gray-800 text-purple-300 text-sm px-4 py-2 rounded-full shadow-md'
                            >
                                AI Storytelling
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                                className='bg-gray-800 text-purple-300 text-sm px-4 py-2 rounded-full shadow-md'
                            >
                                Multi-language Support   
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                                className='bg-gray-800 text-purple-300 text-sm px-4 py-2 rounded-full shadow-md'
                            >
                                Smart Marketing Tools
                            </motion.span>
                        </div>
                    </div>

                    {/* Side Visual Placeholder */}
                    <div className='md:w-1/2 flex justify-center items-center mt-10 md:mt-0'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className='relative w-full max-w-md h-64 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 border border-purple-500 border-dashed overflow-hidden'
                        >
                            <video src="/src/assets/craft.mp4" loop muted autoPlay className="w-full h-full object-cover rounded-lg"></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>

            </animated.section>
           
            {/* Feature Cards Section */}
            <animated.section style={sectionProps} className='py-16 px-4 bg-gradient-to-b from-black via-purple-900 to-black text-gray-200 shadow-inner-lg flex items-center justify-center'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Card 1: Digital Presence */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className='relative bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-purple-700 group'
                    >
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-600 to-pink-500 blur-md"></div>
                        <div className='relative z-10'>
                            <div className='text-purple-400 text-4xl mb-4'>
                                <i className="fas fa-globe"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>Digital Presence</h3>
                            <p>Establish your online identity and reach a wider audience.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Storytelling */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className='relative bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-purple-700 group'
                    >
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-600 to-pink-500 blur-md"></div>
                        <div className='relative z-10'>
                            <div className='text-purple-400 text-4xl mb-4'>
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>Storytelling</h3>
                            <p>Share the rich history and cultural significance behind your crafts.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Market Access */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className='relative bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-purple-700 group'
                    >
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-600 to-pink-500 blur-md"></div>
                        <div className='relative z-10'>
                            <div className='text-purple-400 text-4xl mb-4'>
                                <i className="fas fa-store"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>Market Access</h3>
                            <p>Connect with buyers globally and expand your market reach.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Tradition + Innovation */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className='relative bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 border border-purple-700 group'
                    >
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-600 to-pink-500 blur-md"></div>
                        <div className='relative z-10'>
                            <div className='text-purple-400 text-4xl mb-4'>
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>Tradition + Innovation</h3>
                            <p>Blend ancient techniques with modern tools for unique creations.</p>
                        </div>
                    </motion.div>
                </div>
            </animated.section>

            <div className='flex flex-col md:flex-row'>
                {/* Our Mission Section */}
                <animated.section style={sectionProps} className='py-16 px-4 bg-gradient-to-b from-purple-900 via-black to-black text-gray-200 shadow-inner-lg min-h-screen flex items-center justify-center md:w-1/2'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className='text-3xl font-bold mb-6 text-purple-400'
                        >
                            Our Mission
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='text-lg leading-relaxed'
                        >
                            To empower Indian artisans by providing a global platform to showcase their unique crafts, ensuring fair livelihoods and preserving traditional art forms for future generations.
                        </motion.p>
                    </div>
                </animated.section>

                {/* Features Section */}
                <animated.section style={sectionProps} className='py-16 px-4 bg-gradient-to-b from-purple-900 via-black to-black text-gray-200 shadow-inner-lg min-h-screen flex items-center justify-center md:w-1/2'>
                    <div className='max-w-5xl mx-auto'>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className='text-3xl font-bold text-center mb-10 text-purple-400'
                        >
                            Key Features
                        </motion.h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className='bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300'
                            >
                                <h3 className='font-semibold text-xl mb-2 text-purple-300'>AI-Powered Storytelling</h3>
                                <p>Craft compelling narratives for your art.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className='bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300'
                            >
                                <h3 className='font-semibold text-xl mb-2 text-purple-300'>Global Marketplace Access</h3>
                                <p>Reach buyers worldwide effortlessly.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className='bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300'
                            >
                                <h3 className='font-semibold text-xl mb-2 text-purple-300'>Secure Payment Processing</h3>
                                <p>Hassle-free transactions for artisans.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className='bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300'
                            >
                                <h3 className='font-semibold text-xl mb-2 text-purple-300'>Skill Development Resources</h3>
                                <p>Grow your craft and business acumen.</p>
                            </motion.div>
                        </div>
                    </div>
                </animated.section>
            </div>
            
            {/* User Journey/Impact Section */}
            <animated.section style={sectionProps} className='py-16 px-4 bg-gradient-to-b from-black via-purple-900 to-black text-gray-200 shadow-inner-lg flex items-center justify-center'>
                <div className='max-w-6xl mx-auto text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className='text-3xl font-bold text-center mb-12 text-purple-400'
                    >
                        Your Journey with CraftSathi
                    </motion.h2>
                    <div className='relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0 md:space-x-8'>
                        {/* Timeline Line */}
                        <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-purple-700 transform -translate-y-1/2'></div>

                        {/* Step 1: Sign Up */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className='relative z-10 bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full md:w-1/4 transform hover:scale-105 transition-transform duration-300 border border-purple-700'
                        >
                            <div className='text-purple-400 text-5xl mb-4'>
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>1. Sign Up</h3>
                            <p>Create your artisan profile and join our community.</p>
                        </motion.div>

                        {/* Step 2: Upload Craft */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className='relative z-10 bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full md:w-1/4 transform hover:scale-105 transition-transform duration-300 border border-purple-700'
                        >
                            <div className='text-purple-400 text-5xl mb-4'>
                                <i className="fas fa-upload"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>2. Upload Craft</h3>
                            <p>Showcase your unique creations with high-quality images and descriptions.</p>
                        </motion.div>

                        {/* Step 3: AI Helps */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className='relative z-10 bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full md:w-1/4 transform hover:scale-105 transition-transform duration-300 border border-purple-700'
                        >
                            <div className='text-purple-400 text-5xl mb-4'>
                                <i className="fas fa-robot"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>3. AI Helps</h3>
                            <p>Our AI assists with storytelling, marketing, and global reach.</p>
                        </motion.div>

                        {/* Step 4: Reach Customers */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            className='relative z-10 bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full md:w-1/4 transform hover:scale-105 transition-transform duration-300 border border-purple-700'
                        >
                            <div className='text-purple-400 text-5xl mb-4'>
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className='font-semibold text-xl mb-2 text-purple-300'>4. Reach Customers</h3>
                            <p>Connect with a global audience and grow your craft business.</p>
                        </motion.div>
                    </div>
                </div>
            </animated.section>
            <Footer />
        </div>
    )
}

export default Home

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-black via-purple-900 to-black text-gray-400 py-12 px-4'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* About Section */}
                <div>
                    <h3 className='text-xl font-bold text-white mb-4'>CraftSathi</h3>
                    <p className='text-sm leading-relaxed'>Empowering Indian artisans by connecting their timeless craftsmanship with the digital world.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className='text-xl font-bold text-white mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li><a href='#' className='hover:text-white transition-colors duration-200'>About Us</a></li>
                        <li><a href='#' className='hover:text-white transition-colors duration-200'>Contact</a></li>
                        <li><a href='#' className='hover:text-white transition-colors duration-200'>Privacy Policy</a></li>
                        <li><a href='#' className='hover:text-white transition-colors duration-200'>Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className='text-xl font-bold text-white mb-4'>Connect With Us</h3>
                    <div className='flex space-x-4'>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            <i className="fab fa-facebook-f text-2xl"></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
                            <i className="fab fa-linkedin-in text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-center text-sm mt-8 border-t border-gray-700 pt-8'>
                &copy; {new Date().getFullYear()} CraftSathi. All rights reserved.
            </div>
        </footer>
    )
}