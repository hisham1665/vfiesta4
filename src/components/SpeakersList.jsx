import React from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function SpeakersList({ speakers }) {
  return (
    <section id="speakers" className="py-12 text-center">
      <h3 className="text-3xl font-bold">SPEAKERS</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {speakers.map((s, idx) => (
          <figure key={idx} className="bg-white rounded shadow-sm p-4">
            <ImageWithFallback
              src={s.img}
              alt={s.name}
              className="mx-auto w-32 h-32 object-cover rounded-full"
              width={150}
              height={150}
              text="Missing speaker image"
            />
            <figcaption className="mt-4">
              <div className="font-semibold">{s.name}</div>
              <div className="text-xs text-gray-500">{s.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
