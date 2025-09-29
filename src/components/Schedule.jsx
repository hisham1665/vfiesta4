import React, { memo } from 'react'
import ImageWithFallback from './ImageWithFallback'

const ScheduleCard = memo(function ScheduleCard({ day }) {
  return (
    <div className="bg-white border rounded p-4 shadow-sm">
      <ImageWithFallback
        src="/assets/main-poster.jpg"
        alt={`day-${day}`}
        className="w-full h-48 object-cover rounded"
        width={300}
        height={200}
        text="Missing /assets/main-poster.jpg"
      />
      <div className="mt-3 text-sm font-semibold">Day {day}</div>
    </div>
  )
})

export default function Schedule() {
  return (
    <section id="schedule" className="py-12 text-center">
      <h3 className="text-3xl font-bold">SCHEDULE</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScheduleCard day={1} />
        <ScheduleCard day={2} />
      </div>
    </section>
  )
}
