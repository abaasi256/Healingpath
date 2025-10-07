'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, MapPin, ArrowRight, Info, Play, Pause } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const tourStops = [
  {
    id: 'reception',
    name: 'Reception & Lounge',
    description: 'Welcome to our serene reception area with comfortable seating and calming ambiance.',
    coordinates: { x: 20, y: 30 },
    details: 'Our reception area features handcrafted furniture, natural lighting, and a tea service to help you relax before your appointment.',
    amenities: ['Complimentary beverages', 'Free Wi-Fi', 'Reading materials', 'Quiet environment']
  },
  {
    id: 'consultation',
    name: 'Consultation Rooms',
    description: 'Private, comfortable spaces designed for intimate health discussions.',
    coordinates: { x: 60, y: 25 },
    details: 'Each consultation room is soundproof and equipped with the latest medical technology while maintaining a spa-like atmosphere.',
    amenities: ['Soundproof walls', 'Natural lighting', 'Comfortable seating', 'Advanced medical equipment']
  },
  {
    id: 'treatment',
    name: 'Treatment Suites',
    description: 'Luxurious treatment rooms with state-of-the-art medical equipment.',
    coordinates: { x: 40, y: 60 },
    details: 'Our treatment suites combine medical precision with luxury comfort, featuring adjustable lighting and temperature control.',
    amenities: ['Climate control', 'Adjustable lighting', 'Premium linens', 'Entertainment systems']
  },
  {
    id: 'wellness',
    name: 'Wellness Center',
    description: 'Dedicated space for IV therapy, meditation, and relaxation.',
    coordinates: { x: 75, y: 70 },
    details: 'The wellness center offers a tranquil environment for therapeutic treatments and relaxation sessions.',
    amenities: ['Meditation space', 'IV therapy chairs', 'Aromatherapy', 'Soft background music']
  },
  {
    id: 'pharmacy',
    name: 'Integrated Pharmacy',
    description: 'On-site pharmacy for convenient prescription fulfillment.',
    coordinates: { x: 15, y: 75 },
    details: 'Our licensed pharmacy ensures you can fill prescriptions immediately after your consultation.',
    amenities: ['Licensed pharmacists', 'Same-day fulfillment', 'Insurance acceptance', 'Medication counseling']
  }
]

const VirtualTour = () => {
  const [activeStop, setActiveStop] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStopIndex, setCurrentStopIndex] = useState(0)

  const handleStopClick = (stopId: string) => {
    setActiveStop(stopId)
    const index = tourStops.findIndex(stop => stop.id === stopId)
    setCurrentStopIndex(index)
  }

  const nextStop = () => {
    const nextIndex = (currentStopIndex + 1) % tourStops.length
    setCurrentStopIndex(nextIndex)
    setActiveStop(tourStops[nextIndex].id)
  }

  const prevStop = () => {
    const prevIndex = currentStopIndex === 0 ? tourStops.length - 1 : currentStopIndex - 1
    setCurrentStopIndex(prevIndex)
    setActiveStop(tourStops[prevIndex].id)
  }

  const toggleAutoTour = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentStopIndex(prev => {
          const next = (prev + 1) % tourStops.length
          setActiveStop(tourStops[next].id)
          return next
        })
      }, 5000)
      
      setTimeout(() => {
        clearInterval(interval)
        setIsPlaying(false)
      }, tourStops.length * 5000)
    }
  }

  const currentStop = tourStops.find(stop => stop.id === activeStop)

  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">Tour</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our luxurious clinic environment from the comfort of your home. 
              Discover the spaces designed for your wellness journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-4">
              <button
                onClick={prevStop}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              
              <button
                onClick={toggleAutoTour}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isPlaying 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                    : 'bg-gradient-to-r from-teal-500 to-teal-600 text-white'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause Tour' : 'Auto Tour'}</span>
              </button>
              
              <button
                onClick={nextStop}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 text-center">
                  Interactive Floor Plan
                </h3>
                
                <div className="relative w-full h-96 bg-gradient-to-br from-sage-50 to-teal-50 rounded-2xl border-2 border-gray-200 overflow-hidden">
                  
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  
                  {tourStops.map((stop) => (
                    <button
                      key={stop.id}
                      onClick={() => handleStopClick(stop.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeStop === stop.id
                          ? 'scale-110 z-20'
                          : 'scale-100 z-10 hover:scale-105'
                      }`}
                      style={{
                        left: `${stop.coordinates.x}%`,
                        top: `${stop.coordinates.y}%`,
                      }}
                    >
                      <div className={`w-12 h-12 rounded-full shadow-lg border-4 transition-all duration-300 ${
                        activeStop === stop.id
                          ? 'bg-gradient-to-br from-gold-500 to-gold-600 border-white shadow-xl'
                          : 'bg-gradient-to-br from-teal-500 to-teal-600 border-white hover:shadow-xl'
                      }`}>
                        <MapPin className="w-6 h-6 text-white mx-auto mt-1.5" />
                      </div>
                      
                      <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                        activeStop === stop.id
                          ? 'bg-gold-100 text-gold-800 shadow-md'
                          : 'bg-white text-gray-700 shadow-sm'
                      }`}>
                        {stop.name}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                    <p className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full"></div>
                      <span>Click on any location to explore</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {activeStop && currentStop ? (
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="space-y-6">
                      <div className="w-full h-48 bg-gradient-to-br from-sage-100 to-teal-100 rounded-2xl flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                            <Eye className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-gray-600 font-medium">{currentStop.name}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-gray-800">
                          {currentStop.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {currentStop.details}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                          <Info className="w-4 h-4" />
                          <span>Features</span>
                        </h4>
                        <ul className="space-y-2">
                          {currentStop.amenities.map((amenity, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition font-semibold">
                          Schedule Visit
                        </button>
                        <button className="w-full bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 smooth-transition border border-gray-200 font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                    <div className="space-y-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                          Explore Our Clinic
                        </h3>
                        <p className="text-gray-600">
                          Click on any location in the floor plan to learn more about our facilities and amenities.
                        </p>
                      </div>
                      <button
                        onClick={() => handleStopClick(tourStops[0].id)}
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition font-semibold"
                      >
                        Start Tour
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
              Quick Access
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tourStops.map((stop, index) => (
                <button
                  key={stop.id}
                  onClick={() => handleStopClick(stop.id)}
                  className={`group p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                    activeStop === stop.id
                      ? 'border-teal-500 bg-teal-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeStop === stop.id
                      ? 'bg-gradient-to-br from-teal-500 to-teal-600'
                      : 'bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-teal-500 group-hover:to-teal-600'
                  }`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    activeStop === stop.id ? 'text-teal-700' : 'text-gray-800 group-hover:text-teal-600'
                  }`}>
                    {stop.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {stop.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
              Ready to Experience It in Person?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a visit to our clinic and experience our luxury wellness environment firsthand. 
              Our team is ready to welcome you to your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="font-semibold">Schedule Visit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 smooth-transition shadow-lg hover:shadow-xl border border-gray-200 hover:border-teal-300">
                <span className="font-semibold">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default VirtualTour