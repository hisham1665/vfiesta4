import React, { memo } from 'react'
import { motion } from 'framer-motion'

const TicketCard = memo(function TicketCard({ ticket, index, isPopular = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
      className={`relative group ${
        isPopular ? 'transform scale-105' : ''
      }`}
    >
     

      {/* Glow Effect for Popular */}
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-accent-600/20 rounded-3xl blur-xl opacity-50" />
      )}

      <div className={`relative bg-white/90 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-xl transition-all duration-300 overflow-hidden ${
        isPopular 
          ? 'border-accent-300 bg-gradient-to-br from-accent-50/50 to-white' 
          : 'border-secondary-200 hover:border-primary-300'
      }`}>
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-2xl" />
        
        <div className="relative z-10">
          {/* Category Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-secondary-900 mb-2 font-aderos">
              {ticket.heading}
            </h3>
            <div className="w-16 h-0.5 bg-primary-600 mx-auto" />
          </div>

          {/* Price Display */}
          <div className="text-center mb-8">
            <div className={`text-4xl font-extrabold mb-2 ${
              isPopular 
                ? 'bg-gradient-to-r from-accent-600 to-accent-800 bg-clip-text text-transparent' 
                : 'text-secondary-800'
            }`}>
              {ticket.price}
            </div>
            {ticket.originalPrice && (
              <div className="text-lg text-secondary-400 line-through">
                {ticket.originalPrice}
              </div>
            )}
          </div>

        

          {/* CTA Button */}
          <motion.a 
            href="#register"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`block w-full py-4 px-6 text-center text-sm font-bold rounded-xl shadow-lg transition-all duration-300 font-aderos tracking-wide relative overflow-hidden group ${
              isPopular
                ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:shadow-2xl'
                : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-xl'
            }`}
          >
            <span className="relative z-10">
              {ticket.price === 'Special Price' ? 'CONTACT FOR PRICING' : 'SECURE YOUR SPOT'}
            </span>
            <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
              isPopular
                ? 'bg-gradient-to-r from-accent-700 to-accent-800'
                : 'bg-gradient-to-r from-primary-700 to-primary-800'
            }`} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
})

export default function Tickets() {
  const ticketCategories = [
    { 
      heading: 'Non-IEEE Members', 
      price: '₹1,299',
      originalPrice: '₹1,599',
    },
    { 
      heading: 'IEEE Members', 
      price: '₹999',
      originalPrice: '₹1,299',
    },
    { 
      heading: 'IEEE SB PRC', 
      price: '₹899',
      originalPrice: '₹1,199',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <motion.section 
      id="tickets" 
      className="relative py-20 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-accent-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-100/30 to-primary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-bold rounded-full uppercase tracking-wider mb-6">
            Event Pricing
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-900 mb-8 tracking-tight">
            INVESTMENT IN YOUR
            <span className="block bg-primary-600 bg-clip-text text-transparent">
              FUTURE SUCCESS
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your entrepreneurial journey. Every ticket includes access to world-class 
            sessions, premium networking opportunities, and resources that will accelerate your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ticketCategories.map((ticket, index) => (
            <TicketCard 
              key={index} 
              ticket={ticket} 
              index={index}
              isPopular={index === 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
