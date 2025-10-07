'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Clock, Shield, Heart, Award } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const services = [
  {
    id: 'general-womens-health',
    name: 'General Women\'s Health',
    description: 'Routine check-ups, exams, and consultations for comprehensive women\'s healthcare',
    longDescription: 'Our general women\'s health services provide comprehensive routine care including annual exams, preventive screenings, and health consultations. Our experienced medical team offers personalized care in a comfortable, confidential environment.',
    duration: 60,
    category: 'routine',
    features: [
      'Annual gynecological exams',
      'Routine health screenings',
      'Preventive care consultations',
      'Health maintenance planning',
      'Confidential medical records',
      'Same-day appointments available',
      'Comfortable examination rooms',
      'Experienced medical staff',
      'Follow-up care coordination'
    ],
    benefits: [
      'Comprehensive women\'s health care',
      'Confidential and comfortable environment',
      'Same-day appointments available',
      'Board-certified physicians',
      'Preventive care focus',
      'Complete health support'
    ],
    image: 'gynecology'
  },
  {
    id: 'abortion-services',
    name: 'Abortion Services',
    description: 'Confidential support with safe medical guidance (where legally permitted)',
    longDescription: 'Professional abortion services with compassionate, confidential care in a safe clinical environment. Our board-certified physicians provide comprehensive medical care with complete privacy and support throughout the process.',
    duration: 120,
    category: 'reproductive',
    features: [
      'Confidential consultation and counseling',
      'Safe medical procedures',
      'Professional medical staff',
      'Complete privacy protection',
      'Supportive care environment',
      'Post-procedure follow-up',
      'Emergency support available',
      'HIPAA-compliant privacy',
      'Compassionate medical care'
    ],
    benefits: [
      'Same-day appointments available',
      'Comprehensive aftercare plan',
      'Emotional counseling included',
      'Private entrance and rooms',
      '24/7 post-procedure support',
      'Board-certified physicians'
    ],
    image: 'reproductive-care'
  },
  {
    id: 'telehealth-consultations',
    name: 'Telehealth Consultations',
    description: 'Virtual appointments for privacy and convenience',
    longDescription: 'Secure virtual consultations providing convenient access to our medical professionals from the privacy of your home. Perfect for follow-up visits, consultations, and non-examination medical care.',
    duration: 30,
    category: 'virtual',
    features: [
      'Secure video consultations',
      'Private virtual appointments',
      'Convenient home access',
      'Professional medical advice',
      'Prescription management',
      'Follow-up care coordination',
      'Flexible scheduling options',
      'HIPAA-compliant platform',
      'Technical support available'
    ],
    benefits: [
      'No travel required',
      'Complete privacy at home',
      'Flexible scheduling',
      'Secure platform',
      'Professional consultation',
      'Cost-effective care'
    ],
    image: 'consultation'
  }
]

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id)

  if (!service) {
    return (
      <main className="min-h-screen luxury-gradient">
        <Navigation />
        <div className="pt-24 pb-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <Link href="/services" className="text-teal-600 hover:text-teal-700">
              Return to Services
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link
              href="/services"
              className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 smooth-transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Reproductive Health</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800">
                {service.name}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <span className="text-gray-700">{service.duration} minutes</span>
                </div>
                <div className="text-lg font-semibold text-teal-600">
                  Contact for Pricing
                </div>
              </div>
            </div>
            
            {/* Service Image */}
            <div className="relative">
              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-xl relative">
                <Image
                  src={`/images/${
                    service.id === 'abortion-services' ? 'Safe_Abortion_Care_Detail.png' :
                    service.id === 'telehealth-consultations' ? 'Telehealth.jpeg' :
                    service.id === 'general-womens-health' ? 'Gynecology_Detail.png' :
                    'Healing_Path_Clinic.png'
                  }`}
                  alt={`${service.name} - Professional service at HealingPath Clinic`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
                  About This Service
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Additional Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Schedule Your Consultation
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{service.duration} minutes</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Pricing</span>
                    <span className="font-semibold text-teal-600">Contact Us</span>
                  </div>
                  
                  <Link
                    href="/booking"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl"
                  >
                    <span className="font-semibold">Book Consultation</span>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 smooth-transition border border-gray-200 hover:border-teal-300"
                  >
                    <span>Ask Questions</span>
                  </Link>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-3xl p-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-6">
                  Your Safety & Privacy
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-teal-600" />
                    <div>
                      <p className="font-medium text-gray-800">HIPAA Compliant</p>
                      <p className="text-sm text-gray-600">Complete privacy protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-gold-500" />
                    <div>
                      <p className="font-medium text-gray-800">Board Certified</p>
                      <p className="text-sm text-gray-600">Expert medical team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-sage-600" />
                    <div>
                      <p className="font-medium text-gray-800">Compassionate Care</p>
                      <p className="text-sm text-gray-600">Supportive environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}