import React, { memo } from 'react'

const TicketCard = memo(function TicketCard() {
  return null;
})

export default function Tickets() {
  const ticketCategories = [
    { heading: 'Non - IEEE Members', price: '₹1299' },
    { heading: 'IEEE Members', price: '₹999' },
    { heading: 'IEEE SB Providence', price: 'Special Price' },
  ];
  return (
    <section id="tickets" className="py-12 text-center">
      <h3 className="text-3xl font-bold tracking-wider">TICKETS</h3>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
        {ticketCategories.map((ticket, idx) => (
          <div key={idx} className="w-64 border border-gray-200 rounded shadow-sm p-6 bg-white">
            <div className="text-2xl font-bold font-aderos mb-2">{ticket.heading}</div>
            <div className="text-xl font-semibold text-gray-700 mb-6">{ticket.price}</div>
            <a href="#tickets" className="block bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold font-aderos">REGISTER NOW</a>
          </div>
        ))}
      </div>
    </section>
  );
}
