'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Star, CheckCircle } from 'lucide-react'
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
    price: 275,
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
    image: 'gynecology'
  },
  {
    id: 'abortion-services',
    name: 'Abortion Services',
    description: 'Confidential support with safe medical guidance (where legally permitted)',
    longDescription: 'Professional abortion services with compassionate, confidential care in a safe clinical environment. Our board-certified physicians provide comprehensive medical care with complete privacy and support throughout the process.',
    price: 850,
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
    image: 'reproductive-care'
  },
  {
    id: 'post-abortion-care',
    name: 'Post-Abortion Care',
    description: 'Follow-up visits, recovery checks, and counseling for comprehensive aftercare',
    longDescription: 'Comprehensive post-abortion care including follow-up visits, recovery monitoring, and emotional support. Our caring medical team ensures your complete recovery with personalized aftercare plans.',
    price: 225,
    duration: 45,
    category: 'followup',
    features: [
      'Recovery monitoring visits',
      'Medical follow-up care',
      'Emotional support counseling',
      'Personalized recovery plans',
      'Health status assessments',
      'Complication prevention',
      'Ongoing medical support',
      'Confidential care records',
      'Flexible appointment scheduling'
    ],
    image: 'consultation'
  },
  {
    id: 'telehealth-consultations',
    name: 'Telehealth Consultations',
    description: 'Virtual appointments for privacy and convenience',
    longDescription: 'Secure virtual consultations providing convenient access to our medical professionals from the privacy of your home. Perfect for follow-up visits, consultations, and non-examination medical care.',
    price: 175,
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
    image: 'consultation'
  }
]

const Services = () => {
  const routineServices = services.filter(s => s.category === 'routine')
  const reproductiveServices = services.filter(s => s.category === 'reproductive')
  const followupServices = services.filter(s => s.category === 'followup')
  const virtualServices = services.filter(s => s.category === 'virtual')

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <div
      className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 hover:border-gold-200 overflow-hidden"
    >
      {/* Service Image */}
      <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 smooth-transition relative">
        <Image
          src={`/images/${service.image === 'reproductive-care' ? 'Safe_Abortion_Care_Service' : 
            service.image === 'consultation' ? 'Wellness_Consultation_Service' : 
            service.image === 'gynecology' ? 'Gynecology_Service' : 
            service.image === 'iv-therapy' ? 'Wellness_Center' : 
            service.image === 'aesthetic' ? 'Reception_&_Lounge' : 
            service.image === 'hormone' ? 'Integrated_Pharmacy' : 
            service.image === 'nutrition' ? 'Consultation_Rooms' : 
            service.image === 'executive' ? 'Healing_Path_Clinic' : 
            'Healing_Path_Clinic'}.png`}
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

        {/* Features Preview */}
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-teal-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="text-2xl font-bold text-gray-800">
            ${service.price}
          </div>
          <Link
            href={`/services/${service.id}`}
            className="group/btn flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">Medical Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HealingPath Clinic provides discreet medical services by appointment only. Our main areas of care:
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with our expert team to create a personalized treatment plan tailored to your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold">Schedule Consultation</span>
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
      </section>

      <Footer />
    </main>
  )
}

export default Services