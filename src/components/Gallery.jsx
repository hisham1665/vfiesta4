import React from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function Gallery() {
  return (
    <div id="gallery" className="py-6">
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <ImageWithFallback
            key={i}
            src="/assets/Main.jpg"
            alt={`gallery-${i}`}
            className="col-span-2 md:col-span-1 w-full h-32 object-cover rounded"
            width={300}
            height={200}
            text="Missing /assets/Main.jpg"
          />
        ))}
      </div>
    </div>
  )
}
