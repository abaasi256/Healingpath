'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Heart, Clock, Star } from 'lucide-react'

const stats = [
  { label: 'Years of Excellence', value: '15+', icon: Award },
  { label: 'Satisfied Patients', value: '5,000+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: Star },
  { label: 'Response Time', value: '<24h', icon: Clock },
]

const values = [
  {
    icon: Shield,
    title: 'Privacy & Discretion',
    description: 'Your privacy is paramount. We maintain the highest standards of confidentiality with secure, encrypted communications.'
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every treatment plan is uniquely crafted for you, considering your lifestyle, goals, and individual health profile.'
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Our board-certified physicians use cutting-edge treatments and evidence-based medicine for optimal outcomes.'
  },
]

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-teal-600">HealingPath</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine medical expertise with compassionate care to provide safe abortion services and 
            comprehensive reproductive healthcare. Our clinic prioritizes your privacy, comfort, and 
            emotional support throughout your healthcare journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center lg:text-left space-y-4"
            >
              <div className="w-16 h-16 mx-auto lg:mx-0 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gold-600 smooth-transition">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Doctor/Team Section */}
        <div
          className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
                Meet Our Medical Team
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our physicians are not just medical experts—they're wellness partners committed to your journey. 
                Board-certified in their specialties, they bring decades of combined experience in both conventional 
                and integrative medicine.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span className="text-gray-700">Board-certified physicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Integrative medicine specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                  <span className="text-gray-700">Continuous education & training</span>
                </div>
              </div>
            </div>

            {/* Team Photo Placeholder */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-teal-100 to-gold-100 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center space-y-4">
                  <div className="flex space-x-4 justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 font-medium">Our Expert Medical Team</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Board Certified</p>
                    <p className="text-xs text-gray-600">Medical Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About