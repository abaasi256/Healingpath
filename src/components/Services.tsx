'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'general-womens-health',
    name: 'General Women\'s Health',
    description: 'Routine check-ups, exams, and consultations for comprehensive women\'s healthcare',
    duration: 60,
    category: 'routine',
    featured: true,
    image: 'gynecology'
  },
  {
    id: 'abortion-services',
    name: 'Abortion Services',
    description: 'Confidential support with safe medical guidance (where legally permitted)',
    duration: 120,
    category: 'reproductive',
    featured: true,
    image: 'reproductive-care'
  },
  {
    id: 'telehealth-consultations',
    name: 'Telehealth Consultations',
    description: 'Virtual appointments for privacy and convenience',
    duration: 30,
    category: 'virtual',
    featured: true,
    image: 'consultation'
  }
]

const Services = () => {
  const featuredServices = services.filter(service => service.featured)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">Medical</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HealingPath Clinic provides discreet medical services by appointment only. Our main areas of care include comprehensive women's health, reproductive services, and convenient telehealth consultations.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 hover:border-gold-200 overflow-hidden"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                Popular
              </div>

              {/* Service Image */}
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 smooth-transition relative">
                <Image
                  src={`/images/${
                    service.id === 'abortion-services' ? 'Safe_Abortion_Care_Detail.png' :
                    service.id === 'telehealth-consultations' ? 'Telehealth.jpeg' :
                    service.id === 'general-womens-health' ? 'Gynecology_Service.png' :
                    'Healing_Path_Clinic.png'
                  }`}
                  alt={`${service.name} - Professional service at HealingPath Clinic`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 smooth-transition">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-gold-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}m</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-lg font-semibold text-teal-600">
                    Contact for Pricing
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="group/btn flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium smooth-transition"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-gold-500/5 opacity-0 group-hover:opacity-100 smooth-transition rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="text-center space-y-6"
        >
          <div className="bg-gradient-to-r from-teal-50 to-gold-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-4">
              Ready for Professional Care?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our expert medical team provides comprehensive women's health services with complete confidentiality and compassionate care tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold">View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/pricing"
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 smooth-transition shadow-lg hover:shadow-xl border border-gray-200 hover:border-teal-300"
              >
                <span className="font-semibold">Pricing Calculator</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services