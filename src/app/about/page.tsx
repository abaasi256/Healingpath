'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import About from '@/components/About'
import { Heart, ArrowRight, CheckCircle, Globe, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const achievements = [
  'Joint Commission Accredited Healthcare Facility',
  'HIPAA Compliant & Secure Patient Data Protection',
  'Board Certified Physicians with 15+ Years Experience',
  'Over 5,000 Successful Patient Outcomes',
  '98% Patient Satisfaction Rating',
  'Advanced Medical Technology & Equipment'
]

const AboutPage = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  const content = {
    en: {
      heroTitle: 'About Dr. Pavin',
      heroDescription: 'A dedicated gynecologist providing professional women\'s healthcare in Dubai with years of experience and compassionate care.',
      drPavinTitle: 'About Dr. Pavin',
      drPavinDescription: 'Dr. Pavin is a dedicated gynecologist based in Dubai. With years of experience in women\'s health, his focus is on safe, confidential, and respectful care.',
      philosophy: 'Philosophy: Every woman deserves private, professional medical support in a safe environment.',
      missionTitle: 'Our Mission',
      missionDescription: 'To provide exceptional women\'s healthcare in a luxury environment where cutting-edge medical science meets compassionate care. We believe healing happens best in an atmosphere of comfort, privacy, and trust.',
      scheduleBtn: 'Schedule Consultation',
      learnMoreBtn: 'Learn More',
      readyTitle: 'Ready to Begin Your Healthcare Journey?',
      readyDescription: 'Experience professional gynecological care in Dubai. Schedule your consultation today and discover personalized healthcare tailored to your needs.'
    },
    ar: {
      heroTitle: 'حول الدكتور بافين',
      heroDescription: 'طبيب نسائية مكرّس يقدم رعاية صحية مهنية للنساء في دبي مع سنوات من الخبرة والرعاية الرحيمة.',
      drPavinTitle: 'حول الدكتور بافين',
      drPavinDescription: 'الدكتور بافين هو طبيب نسائية مكرّس ومقره دبي. يتمتع بخبرة سنوات في صحة المرأة، ويركّز على تقديم رعاية آمنة وسرية ومحترمة.',
      philosophy: 'الفلسفة: تستحق كل امرأة دعمًا طبيًا خاصًا ومهنيًا في بيئة آمنة.',
      missionTitle: 'مهمتنا',
      missionDescription: 'تقديم رعاية صحية استثنائية للنساء في بيئة فاخرة حيث يلتقي العلم الطبي المتطور بالرعاية الرحيمة. نؤمن أن الشفاء يحدث بشكل أفضل في جو من الراحة والخصوصية والثقة.',
      scheduleBtn: 'احجز استشارة',
      learnMoreBtn: 'اعرف المزيد',
      readyTitle: 'مستعدة لبدء رحلتك الصحية؟',
      readyDescription: 'اختبري الرعاية المهنية لأمراض النساء في دبي. احجزي استشارتك اليوم واكتشفي الرعاية الصحية المخصصة لاحتياجاتك.'
    }
  }

  const currentContent = content[language]
  return (
    <main className={`min-h-screen luxury-gradient ${language === 'ar' ? 'rtl' : ''}`}>
      <Navigation />
      
      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-30">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === 'en'
                ? 'bg-gold-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gold-500'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === 'ar'
                ? 'bg-gold-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gold-500'
            }`}
          >
            العربية
          </button>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {currentContent.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* About Dr. Pavin Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 to-gold-50 rounded-3xl p-8 lg:p-16">
            <div className="text-center space-y-8">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
                  {currentContent.drPavinTitle}
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  {currentContent.drPavinDescription}
                </p>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
                  <p className="text-lg text-gray-800 font-medium italic">
                    {currentContent.philosophy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-white to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2009 by Dr. Sarah Mitchell, HealingPath was born from a vision to transform 
                  the traditional clinical experience. After years of practicing in conventional medical 
                  settings, Dr. Mitchell recognized the need for a more holistic, patient-centered approach 
                  to healthcare.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a small integrative medicine practice has evolved into a premier wellness 
                  destination where luxury meets medicine. Our approach combines the best of traditional 
                  medical science with complementary therapies, all delivered in an environment designed 
                  for healing and rejuvenation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Our Commitment</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl relative">
                <Image
                  src="/images/Healing_Path_Clinic.png"
                  alt="HealingPath Clinic - Professional abortion clinic and reproductive health facility"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">15+ Years</p>
                    <p className="text-sm text-gray-600">Excellence in Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
              {currentContent.readyTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.readyDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold">{currentContent.scheduleBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 smooth-transition shadow-lg hover:shadow-xl border border-gray-200 hover:border-teal-300"
              >
                <span className="font-semibold">{currentContent.learnMoreBtn}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage