'use client'

import { useState } from 'react'
import { Calculator, Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  { id: 'safe-abortion', name: 'Safe Abortion Care', price: 850, duration: 120 },
  { id: 'gynecology', name: 'Gynecology', price: 275, duration: 60 },
  { id: 'consultation', name: 'Wellness Consultation', price: 299, duration: 60 },
  { id: 'iv-therapy', name: 'IV Therapy', price: 199, duration: 45 },
  { id: 'aesthetic', name: 'Aesthetic Medicine', price: 399, duration: 90 },
  { id: 'hormone', name: 'Hormone Therapy', price: 449, duration: 75 },
  { id: 'nutrition', name: 'Nutritional Counseling', price: 179, duration: 50 },
  { id: 'executive', name: 'Executive Physical', price: 699, duration: 120 },
]

const packages = [
  {
    id: 'reproductive-care',
    name: 'Reproductive Care Package',
    description: 'Comprehensive abortion care with wellness support',
    services: ['safe-abortion', 'consultation', 'nutrition'],
    discount: 0.12,
    color: 'teal'
  },
  {
    id: 'wellness-starter',
    name: 'Wellness Starter',
    description: 'Perfect for beginning your health journey',
    services: ['consultation', 'nutrition'],
    discount: 0.1,
    color: 'gold'
  },
  {
    id: 'executive-elite',
    name: 'Executive Elite',
    description: 'Complete health management for professionals',
    services: ['executive', 'iv-therapy', 'nutrition', 'aesthetic'],
    discount: 0.2,
    color: 'sage'
  }
]

const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [customFrequency, setCustomFrequency] = useState(1)

  const toggleService = (serviceId: string) => {
    setSelectedPackage(null)
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const selectPackage = (packageId: string) => {
    const pkg = packages.find(p => p.id === packageId)
    if (pkg) {
      setSelectedPackage(packageId)
      setSelectedServices(pkg.services)
    }
  }

  const calculateTotal = () => {
    const selectedServicesList = services.filter(s => selectedServices.includes(s.id))
    const subtotal = selectedServicesList.reduce((sum, service) => sum + service.price, 0)
    
    let discount = 0
    if (selectedPackage) {
      const pkg = packages.find(p => p.id === selectedPackage)
      if (pkg) discount = pkg.discount
    } else if (selectedServices.length >= 3) {
      discount = 0.1
    }

    const discountAmount = subtotal * discount
    const total = (subtotal - discountAmount) * customFrequency
    const totalDuration = selectedServicesList.reduce((sum, service) => sum + service.duration, 0)

    return {
      subtotal: subtotal * customFrequency,
      discount: discountAmount * customFrequency,
      total,
      totalDuration,
      savings: discountAmount * customFrequency
    }
  }

  const { subtotal, discount, total, totalDuration, savings } = calculateTotal()

  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              Abortion Clinic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, upfront pricing for abortion care and reproductive health services. 
              Create your personalized treatment plan with no hidden costs or surprise fees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Service Selection */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Package Options */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-gray-800">
                  Service Packages
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => (
                    <div
                      key={pkg.id}
                      onClick={() => selectPackage(pkg.id)}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? `border-${pkg.color}-500 bg-${pkg.color}-50 shadow-lg`
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${pkg.color}-500 to-${pkg.color}-600 flex items-center justify-center`}>
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{pkg.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                        </div>
                        <div className="text-sm">
                          <span className={`inline-block px-3 py-1 rounded-full bg-${pkg.color}-100 text-${pkg.color}-700 font-medium`}>
                            {Math.round(pkg.discount * 100)}% off
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Services */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-gray-800">
                  All Available Services
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-teal-500 bg-teal-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{service.name}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{service.duration}m</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-4 h-4" />
                              <span>${service.price}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          selectedServices.includes(service.id)
                            ? 'border-teal-500 bg-teal-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedServices.includes(service.id) && (
                            <CheckCircle className="w-5 h-5 text-white -m-0.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequency Selector */}
              {selectedServices.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Treatment Frequency
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Sessions per year:</span>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={customFrequency}
                      onChange={(e) => setCustomFrequency(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-xl font-bold text-teal-600 min-w-[3rem]">
                      {customFrequency}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Pricing Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                  Price Summary
                </h3>

                {selectedServices.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select services to see pricing</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Selected Services */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700">Selected Services:</h4>
                      {services.filter(s => selectedServices.includes(s.id)).map((service) => (
                        <div key={service.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{service.name}</span>
                          <span className="font-medium">${service.price}</span>
                        </div>
                      ))}
                    </div>

                    <hr className="border-gray-200" />

                    {/* Pricing Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">${subtotal.toLocaleString()}</span>
                      </div>
                      
                      {savings > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Savings:</span>
                          <span className="font-medium">-${savings.toLocaleString()}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Duration:</span>
                        <span className="font-medium">{totalDuration * customFrequency} minutes</span>
                      </div>
                      
                      <hr className="border-gray-200" />
                      
                      <div className="flex justify-between text-xl font-bold text-gray-800">
                        <span>Annual Total:</span>
                        <span>${total.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-4 pt-6">
                      <Link
                        href="/booking"
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl"
                      >
                        <span className="font-semibold">Book Confidential Consultation</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      
                      <button className="w-full bg-white text-gray-700 px-6 py-4 rounded-full hover:bg-gray-50 smooth-transition border border-gray-200 hover:border-teal-300 font-semibold">
                        Download Quote
                      </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>All-inclusive pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>No hidden fees or charges</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Confidential billing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Financial assistance available</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
              Financial Assistance Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe cost shouldn't be a barrier to accessing safe, professional abortion care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Plans</h3>
              <p className="text-gray-600">Flexible payment options to make care accessible when you need it most.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Insurance Coverage</h3>
              <p className="text-gray-600">We work with most insurance providers and can verify coverage before your visit.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Same-Day Care</h3>
              <p className="text-gray-600">Quick appointment scheduling with transparent pricing discussion upfront.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="font-semibold">Discuss Financial Options</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PricingCalculator