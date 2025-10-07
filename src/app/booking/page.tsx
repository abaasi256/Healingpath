'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  { id: 'general-womens-health', name: 'General Women\'s Health', duration: 60 },
  { id: 'abortion-services', name: 'Abortion Services', duration: 120 },
  { id: 'post-abortion-care', name: 'Post-Abortion Care', duration: 45 },
  { id: 'telehealth-consultations', name: 'Telehealth Consultations', duration: 30 },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
]

const BookingSystem = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    preferredContact: 'email'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const generateCalendarDays = () => {
    const days = []
    const today = new Date()
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip Sundays (0)
      if (date.getDay() !== 0) {
        days.push({
          date: date.toISOString().split('T')[0],
          display: date.getDate(),
          dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
          available: Math.random() > 0.3 // Simulate availability
        })
      }
    }
    return days.slice(0, 21) // Show 3 weeks
  }

  const calendarDays = generateCalendarDays()

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsBooked(true)
  }

  const selectedServiceInfo = services.find(s => s.id === selectedService)

  if (isBooked) {
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
                  Booking Confirmed!
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Thank you for choosing HealingPath. We've sent a confirmation email with all the details.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Appointment Details</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{selectedServiceInfo?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedServiceInfo?.duration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patient:</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <p className="text-sm text-gray-600 text-center">
                    We'll send you a reminder 24 hours before your appointment. 
                    If you need to reschedule, please contact us at least 24 hours in advance.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full hover:from-teal-600 hover:to-teal-700 smooth-transition font-semibold">
                      Add to Calendar
                    </button>
                    <button className="flex-1 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 smooth-transition border border-gray-200 font-semibold">
                      Contact Clinic
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
          <div
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-gold-500">Confidential</span> Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your confidential consultation for abortion care or wellness services. 
              Safe, professional, and completely private. Simple, secure, and convenient online booking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep 
                      ? 'bg-gradient-to-br from-teal-500 to-teal-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-1 mx-2 ${
                      step < currentStep ? 'bg-teal-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {currentStep === 1 && 'Select Service'}
                {currentStep === 2 && 'Choose Date'}
                {currentStep === 3 && 'Pick Time'}
                {currentStep === 4 && 'Your Information'}
              </h2>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Choose Your Service
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-teal-500 bg-teal-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800">{service.name}</h4>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration} min</span>
                          </div>
                          <span className="font-semibold text-teal-600">Contact for Pricing</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {currentStep === 2 && (
              <div
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Select Date
                </h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Mon</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Tue</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Wed</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Thu</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Fri</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Sat</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-2">Sun</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => day.available && setSelectedDate(day.date)}
                      disabled={!day.available}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        selectedDate === day.date
                          ? 'bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg'
                          : day.available
                          ? 'bg-white hover:bg-teal-50 border border-gray-200 hover:border-teal-300 text-gray-800'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="text-xs opacity-75">{day.dayName}</div>
                      <div className="font-semibold">{day.display}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {currentStep === 3 && (
              <div
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Choose Time
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => {
                    const isAvailable = Math.random() > 0.4 // Simulate availability
                    return (
                      <button
                        key={time}
                        onClick={() => isAvailable && setSelectedTime(time)}
                        disabled={!isAvailable}
                        className={`p-3 rounded-xl text-center transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg'
                            : isAvailable
                            ? 'bg-white hover:bg-teal-50 border border-gray-200 hover:border-teal-300 text-gray-800'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Your Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Any specific concerns or questions..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2"
                      />
                      <Phone className="w-4 h-4 mr-2" />
                      Phone
                    </label>
                  </div>
                </div>

                {/* Appointment Summary */}
                <div className="bg-gradient-to-r from-teal-50 to-gold-50 rounded-2xl p-6 mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Appointment Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{selectedServiceInfo?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{selectedServiceInfo?.duration} minutes</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                      <span>Total:</span>
                      <span>Contact for Pricing</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Back
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !selectedService) ||
                    (currentStep === 2 && !selectedDate) ||
                    (currentStep === 3 && !selectedTime)
                  }
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    (currentStep === 1 && !selectedService) ||
                    (currentStep === 2 && !selectedDate) ||
                    (currentStep === 3 && !selectedTime)
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-lg'
                  }`}
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.phone
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Booking</span>
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BookingSystem