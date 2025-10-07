'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Award, Shield, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our care coordinators',
    value: '+64 22 041 8391',
    action: 'tel:+64220418391',
    available: '24/7 Emergency Line',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a secure message',
    value: 'info@healingpath.care',
    action: 'mailto:info@healingpath.care',
    available: 'Response within 4 hours',
    color: 'from-gold-500 to-gold-600'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Instant secure messaging via WhatsApp',
    value: 'Chat on WhatsApp',
    action: 'https://wa.me/64220418391?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20services',
    available: 'Available 24/7',
    color: 'from-green-500 to-green-600'
  }
]

const officeHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 3:00 PM' },
  { day: 'Emergency', hours: '24/7 Available' }
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen luxury-gradient">
        <Navigation />
        
        <section className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800">
                  Message Sent Successfully!
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Thank you for reaching out to HealingPath. We've received your message and will respond within 4 hours.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">Our care coordinator will review your message</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-gray-700">You'll receive a personalized response within 4 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                      <span className="text-gray-700">For urgent matters, please call our 24/7 line</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition font-semibold"
                    >
                      Send Another Message
                    </button>
                    <button className="flex-1 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 smooth-transition border border-gray-200 font-semibold">
                      Schedule Consultation
                    </button>
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

  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">HealingPath</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to provide confidential support for your reproductive health needs. 
              Reach out to our dedicated team for safe abortion care consultations, wellness services, 
              or any questions about our private medical services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="group text-center space-y-6 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl smooth-transition border border-gray-100 hover:border-gold-200"
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 smooth-transition">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-800">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {method.available}
                    </p>
                  </div>
                </div>

                <a
                  href={method.action}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-full hover:shadow-lg smooth-transition font-semibold group-hover:scale-105`}
                >
                  <span>Contact Now</span>
                  <method.icon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="abortion-care">Safe Abortion Care Inquiry</option>
                        <option value="gynecology">Gynecology Services</option>
                        <option value="consultation">Confidential Consultation</option>
                        <option value="financial-assistance">Financial Assistance</option>
                        <option value="reproductive-health">Reproductive Health Services</option>
                        <option value="billing">Billing Question</option>
                        <option value="emergency">Urgent/Emergency Care</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 smooth-transition"
                      placeholder="Please describe how we can help you..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <Phone className="w-4 h-4 mr-2" />
                        Phone
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp
                      </label>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-gold-50 rounded-2xl p-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>Your information is secure and HIPAA compliant</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-semibold smooth-transition ${
                      isSubmitting
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Office Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Office Hours</span>
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-800">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Our Location</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800">HealingPath Clinic</p>
                    <p className="text-gray-600">123 Wellness Boulevard</p>
                    <p className="text-gray-600">Suite 200</p>
                    <p className="text-gray-600">Beverly Hills, CA 90210</p>
                  </div>
                  
                  <div className="w-full h-32 bg-gradient-to-br from-sage-100 to-teal-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 mx-auto text-teal-600 mb-2" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full hover:from-gold-600 hover:to-gold-700 smooth-transition font-semibold">
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Emergency Contact</span>
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent medical concerns outside office hours
                </p>
                <a
                  href="tel:+64220418391"
                  className="block w-full text-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 smooth-transition font-semibold"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800">
              Why Choose HealingPath?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">HIPAA Compliant</h3>
                <p className="text-gray-600">Your privacy and data security are our top priorities</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Expert Care</h3>
                <p className="text-gray-600">Board-certified physicians with decades of experience</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">Emergency support available around the clock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage