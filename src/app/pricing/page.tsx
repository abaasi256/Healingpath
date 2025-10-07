'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MessageSquare, Clock } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  { id: 'safe-abortion', name: 'Safe Abortion Care', duration: 120 },
  { id: 'gynecology', name: 'Gynecology', duration: 60 },
  { id: 'consultation', name: 'Wellness Consultation', duration: 60 },
  { id: 'iv-therapy', name: 'IV Therapy', duration: 45 },
  { id: 'aesthetic', name: 'Aesthetic Medicine', duration: 90 },
  { id: 'hormone', name: 'Hormone Therapy', duration: 75 },
  { id: 'nutrition', name: 'Nutritional Counseling', duration: 50 },
  { id: 'executive', name: 'Executive Physical', duration: 120 },
]

const PricingInformation = () => {
  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For personalized pricing information and treatment plans, please contact our team directly. 
              We offer transparent pricing with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional medical services with personalized care and confidential consultations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl smooth-transition border border-gray-100"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration} minutes</span>
                  </div>
                  <div className="text-lg font-semibold text-teal-600">
                    Contact for Pricing
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Options */}
          <div className="bg-gradient-to-r from-teal-50 to-gold-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center space-y-8">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                Get Personalized Pricing
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Contact our team for detailed pricing information tailored to your specific needs. 
                We offer transparent pricing with flexible payment options.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link
                  href="/contact"
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl smooth-transition border border-gray-100 hover:border-teal-200"
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-teal-600 smooth-transition">
                      Call Us
                    </h4>
                    <p className="text-gray-600">+64 22 041 8391</p>
                  </div>
                </Link>

                <Link
                  href="mailto:info@healingpath.care"
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl smooth-transition border border-gray-100 hover:border-gold-200"
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-gold-600 smooth-transition">
                      Email Us
                    </h4>
                    <p className="text-gray-600">info@healingpath.care</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/64220418391"
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl smooth-transition border border-gray-100 hover:border-green-200"
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-green-600 smooth-transition">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600">Quick Response</p>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="font-semibold">Contact for Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/booking"
                  className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 smooth-transition shadow-lg hover:shadow-xl border border-gray-200 hover:border-teal-300"
                >
                  <span className="font-semibold">Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PricingInformation