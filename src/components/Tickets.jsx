import React, { memo } from 'react'

const TicketCard = memo(function TicketCard() {
  return (
    <div className="w-64 border border-gray-200 rounded shadow-sm p-6 bg-white">
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Ticket Mockups</div>
      <div className="mt-6">
        <a href="#tickets" className="block bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold font-aderos">REGISTER NOW</a>
      </div>
    </div>
  )
})

export default function Tickets() {
  return (
    <section id="tickets" className="py-12 text-center">
      <h3 className="text-3xl font-bold tracking-wider">TICKETS</h3>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <TicketCard />
        <TicketCard />
      </div>
    </section>
  )
}
