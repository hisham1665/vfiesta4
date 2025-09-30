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
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}

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
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto" />
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

          {/* Features */}
          <div className="space-y-4 mb-8">
            {ticket.features?.map((feature, idx) => (
              <div key={idx} className="flex items-center text-secondary-600">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            )) || (
              <>
                <div className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Full Event Access</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Workshop Materials</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Networking Sessions</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Certificate</span>
                </div>
              </>
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
      features: [
        'Full Event Access',
        'All Workshop Materials',
        'Networking Sessions',
        'Digital Certificate',
        'Event Swag Kit'
      ]
    },
    { 
      heading: 'IEEE Members', 
      price: '₹999',
      originalPrice: '₹1,299',
      features: [
        'Full Event Access',
        'Premium Workshop Materials',
        'VIP Networking Sessions',
        'IEEE Certificate',
        'Premium Swag Kit',
        'Priority Seating'
      ]
    },
    { 
      heading: 'IEEE SB Providence', 
      price: 'Special Price',
      features: [
        'Exclusive Host Benefits',
        'All Premium Features',
        'Special Recognition',
        'Host Institution Certificate',
        'Commemorative Items'
      ]
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
      className="relative py-24 px-6 max-w-7xl mx-auto"
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
            <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
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

        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-aderos">
              Limited Seats Available
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Secure your spot at Kerala's most prestigious innovation event. Join an exclusive community of 
              forward-thinking entrepreneurs and industry leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Early Bird Pricing
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Limited Availability
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Instant Confirmation
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
