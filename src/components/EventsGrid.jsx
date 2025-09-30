import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const EventsGrid = ({ events }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Pre-Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get ready for the main event with our exciting pre-events designed to build anticipation and showcase talent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={`/assets/img/event${event.id}.jpeg`}
                    alt={event.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/assets/placeholder.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Pre-Event
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <CalendarDaysIcon className="w-5 h-5 mr-2 text-pink-500" />
                    <span className="text-lg">{event.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      Coming Soon
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-pink-600 font-semibold cursor-pointer"
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;