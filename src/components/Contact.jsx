import React from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function Contact() {
  return (
    <section id="contact" className="py-12 text-center">
      <h3 className="text-3xl font-bold">CONTACT US</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start text-left">
        {/* Left: Map only */}
        <div>
          <div className="w-full h-64 md:h-80 lg:h-[420px] rounded overflow-hidden shadow">
            <iframe
              title="Map - Providence College of Engineering & School of Business, Chengannur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.898498176114!2d76.61287717408243!3d9.299333390773205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622984cfaf3af%3A0xd0320f890b6fca5!2sProvidence%20College%20of%20Engineering%20%26%20School%20of%20Business%2C%20Chengannur!5e1!3m2!1sen!2sin!4v1759124074667!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Right: Event heads with email below */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row flex-wrap gap-8 md:gap-12 justify-center items-center">
          <div className="flex flex-col items-center">
            <ImageWithFallback
              src="/assets/contact1.jpg"
              alt="event lead"
              className="w-28 h-28 rounded-full object-cover"
              width={150}
              height={150}
              text="Missing /assets/contact1.jpg"
            />
            <div className="mt-2 font-bold">Sandra Sara Soloman</div>
            <div className="text-sm">+91 9074602051</div>
          </div>

          <div className="flex flex-col items-center">
            <ImageWithFallback
              src="/assets/contact2.jpg"
              alt="event lead 2"
              className="w-28 h-28 rounded-full object-cover"
              width={150}
              height={150}
              text="Missing /assets/contact2.jpg"
            />
            <div className="mt-2 font-bold">Shreyas Abraham</div>
            <div className="text-sm">+91 8078262041</div>
          </div>

          <div className="flex flex-col items-center">
            <ImageWithFallback
              src="/assets/contact3.jpg"
              alt="event lead"
              className="w-28 h-28 rounded-full object-cover"
              width={150}
              height={150}
              text="Missing /assets/contact3.jpg"
            />
            <div className="mt-2 font-bold">Alwin jose</div>
            <div className="text-sm">+91 9846797378</div>
          </div>
          </div>

          <a href="mailto:ieeeeepie@gmail.com" className="inline-flex items-center gap-2 mt-8 font-bold">
            <img src="/assets/mail.svg" alt="Mail" className="w-10 h-10" loading="lazy" />
            ieeeeepie@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
