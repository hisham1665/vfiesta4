import React from 'react'

export default function EventsGrid({ events }) {
  return (
    <section id="events" className="py-12">
      <h3 className="text-3xl text-center font-bold">EVENTS</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((e) => (
          <article key={e.id} className="border rounded overflow-hidden bg-white shadow-sm">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <div className="text-sm font-bold">{e.title}</div>
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500">Deadline: {e.date}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
