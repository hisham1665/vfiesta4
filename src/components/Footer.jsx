import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/ieeepie.kerala/',
      icon: '/assets/instagram.svg'
    },
    {
      name: 'Facebook', 
      href: 'https://www.facebook.com/ieeepieks',
      icon: '/assets/facebook.svg'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ieee-pie-kerala-section/',
      icon: '/assets/linkedin.svg'
    },
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/show/0efNfgAgQScY8NJeYtUMzB?si=vUpL8efCQua7Ia34cgCz0w&utm_source=copy-link&nd=1&dlsi=511b0693248e4ba6',
      icon: '/assets/spotify.svg'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@IEEEPIEKeralaSection',
      icon: '/assets/youtube.svg'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' }, 
    { name: 'Tickets', href: '#tickets' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white border-t border-secondary-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-5" />
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Logo />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4 font-aderos">
                  VFiesta 4.0
                </h3>
                <p className="text-lg text-secondary-300 leading-relaxed mb-6 max-w-md">
                  Pioneering the future of innovation and entrepreneurship through IEEE PIE Kerala Section's 
                  flagship event that connects visionaries with opportunity.
                </p>
                
                {/* Event Details */}
                <div className="space-y-3 text-secondary-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>October 18, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Providence College of Engineering, Chengannur</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:ieeeeepie@gmail.com" className="hover:text-primary-400 transition-colors duration-200">
                      ieeeeepie@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 font-aderos">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 font-aderos">Connect With Us</h4>
              
              {/* Social Icons */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-600/20 transition-all duration-300 group"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" 
                      loading="lazy" 
                    />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#tickets"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-aderos tracking-wide group"
              >
                <span>SECURE YOUR SPOT</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-secondary-700 bg-secondary-900/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-secondary-400 text-sm">
                <p>&copy; 2025 IEEE PIE Kerala Section. All rights reserved.</p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-secondary-400">
                <span>Crafted with ❤️ for innovation</span>
                <div className="flex items-center gap-2">
                  <span>Powered by</span>
                  <span className="font-bold text-primary-400">IEEE PIE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
