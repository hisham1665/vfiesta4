import React, { useMemo } from 'react'
import Header from './components/Header'
import Ticker from './components/Ticker'
import Countdown from './components/Countdown'
import About from './components/About'
import Gallery from './components/Gallery'
import Tickets from './components/Tickets'
import EventsGrid from './components/EventsGrid'
import SpeakersList from './components/SpeakersList'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'

export default function VFiestaLanding() {
  const stats = useMemo(() => ({ days: 10, hours: 11 }), [])
  const speakers = useMemo(
    () => [
      { name: 'RJ Shambu', role: 'MC', img: '/assets/speaker1.jpg' },
      { name: 'RJ Shambu', role: 'MC', img: '/assets/speaker2.jpg' },
      { name: 'RJ Shambu', role: 'MC', img: '/assets/speaker3.jpg' },
    ],
    []
  )
  const events = useMemo(
    () => [
      { id: 1, title: 'Frame Fiesta — Pre Event #3', date: 'Sept 9' },
      { id: 2, title: 'Frame Fiesta — Pre Event #3', date: 'Sept 9' },
      { id: 3, title: 'Frame Fiesta — Pre Event #3', date: 'Sept 9' },
    ],
    []
  )

  return (
    <GridBackground className="min-h-screen" background="transparent" size={24} lineColor="#80808012">
      <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />

      <section id="home" className="max-w-4xl mx-auto text-center py-16 px-6 lg:py-28" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Medium length hero headline goes here
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          Get ready to dive into a world of innovation, creativity, and discovery brought to you by IEEE PIE Kerala Section
        </p>
        <a href="#tickets" className="inline-block mt-6 bg-red-700 text-white px-6 py-3 rounded shadow hover:opacity-95 font-aderos">REGISTER NOW</a>
      </section>

      <Ticker />

      <section className="max-w-4xl mx-auto px-6">
        <Countdown days={stats.days} hours={stats.hours} />
        <About />
        <Gallery />
        <Tickets />
        <EventsGrid events={events} />
        <SpeakersList speakers={speakers} />
        <Schedule />
        <Contact />
      </section>

      <Footer />
      </main>
    </GridBackground>
  )
}
