import React, { memo } from 'react'

const Ticker = memo(function Ticker() {
  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap inline-block animate-marquee font-semibold font-aderos">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="mr-6 inline-flex items-center gap-4">
            <span>ENTREPRENEURSHIP</span>
            <img src="/assets/sparkles.png" alt="*" className="h-4 w-4 inline-block" loading="lazy" />
            <span>INNOVATION</span>
            <img src="/assets/sparkles.png" alt="*" className="h-4 w-4 inline-block" loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  )
})

export default Ticker
