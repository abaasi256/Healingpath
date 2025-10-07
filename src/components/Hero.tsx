'use client'

import { useState } from 'react'
import { ArrowRight, Shield, Award, Users, Globe, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      title: 'Private women\'s care in Dubai — by appointment.',
      subtitle: 'Dr. Pavin\'s Clinic',
      description: 'Expert gynecological care in a luxury, private setting. Specializing in women\'s health, abortion services, and post-abortion care with complete confidentiality and compassion.',
      bookingBtn: 'Book Appointment',
      tourBtn: 'Virtual Tour',
      trustBadges: {
        compliant: 'UAE Licensed',
        certified: 'Board Certified',
        patients: '5000+ Patients'
      },
      security: {
        title: '100% Secure',
        subtitle: 'Complete Privacy'
      }
    },
    ar: {
      title: 'رعاية نسائية خاصة في دبي — عن طريق المواعيد فقط.',
      subtitle: 'عيادة الدكتورة بافين',
      description: 'رعاية طبية متخصصة في أمراض النساء في بيئة فاخرة وخاصة. متخصصون في صحة المرأة وخدمات الإجهاض والرعاية بعد الإجهاض مع سرية تامة وتعاطف.',
      bookingBtn: 'احجز موعد',
      tourBtn: 'جولة افتراضية',
      trustBadges: {
        compliant: 'مرخص في الإمارات',
        certified: 'معتمد من المجلس',
        patients: 'أكثر من 5000 مريضة'
      },
      security: {
        title: 'آمن 100%',
        subtitle: 'خصوصية تامة'
      }
    }
  }

  const currentContent = content[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary-50 to-sage-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-gold-200/30 to-gold-300/30 rounded-full blur-xl"
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-teal-300/30 rounded-full blur-xl"
        />
      </div>

      <div className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${language === 'ar' ? 'rtl' : ''}`}>
        {/* Language Toggle - Better positioning below navigation */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-md rounded-full px-2 py-1 shadow-md border border-gray-200">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                language === 'en'
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gold-600 hover:bg-gray-50'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                language === 'ar'
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gold-600 hover:bg-gray-50'
              }`}
            >
              عربي
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gold-600 mb-2">
                {currentContent.subtitle}
              </h2>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight"
              >
                {language === 'en' ? (
                  <>
                    Private{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                      women's care
                    </span>{' '}
                    in Dubai — by appointment.
                  </>
                ) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                      رعاية نسائية خاصة
                    </span>{' '}
                    في دبي — عن طريق المواعيد فقط.
                  </>
                )}
              </h1>
              
              <p
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                {currentContent.description}
              </p>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex items-center space-x-8"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-600" />
                <span className="text-sm text-gray-600">{currentContent.trustBadges.compliant}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-gold-500" />
                <span className="text-sm text-gray-600">{currentContent.trustBadges.certified}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-sage-600" />
                <span className="text-sm text-gray-600">{currentContent.trustBadges.patients}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/booking"
                className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full hover:from-gold-600 hover:to-gold-700 smooth-transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{currentContent.bookingBtn}</span>
              </Link>
              
              <Link
                href="/tour"
                className="group flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full hover:bg-white smooth-transition shadow-lg hover:shadow-xl border border-gray-200 hover:border-gold-300"
              >
                <span className="font-semibold">{currentContent.tourBtn}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Clinic Image */}
              <Image
                src="/images/Hero-Healingpath.jpeg"
                alt="HealingPath - Premium women's healthcare facility with modern medical equipment and comfortable environment"
                fill
                className="object-cover"
                priority
              />
              
              {/* Floating Card */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{currentContent.security.title}</p>
                    <p className="text-sm text-gray-600">{currentContent.security.subtitle}</p>
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

export default Hero