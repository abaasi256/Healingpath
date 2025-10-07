'use client'

import { useState } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'

interface WhatsAppChatProps {
  isOpen: boolean
  onToggle: () => void
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({ isOpen, onToggle }) => {
  const whatsappNumber = '+64220418391' // Replace with actual WhatsApp number
  const defaultMessage = 'Hello, I would like to book an appointment at HealingPath Clinic.'

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const callClinic = () => {
    window.open(`tel:${whatsappNumber}`, '_self')
  }

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-green-600"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-80">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Contact HealingPath</h3>
            <p className="text-xs opacity-90">We're here to help you</p>
          </div>
        </div>
        
        <button
          onClick={onToggle}
          className="p-1 hover:bg-white/20 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="text-center space-y-2">
          <h4 className="font-semibold text-gray-800">Get in Touch</h4>
          <p className="text-sm text-gray-600">
            Contact us directly through WhatsApp for quick responses or call us for immediate assistance.
          </p>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="w-full flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Chat on WhatsApp</span>
        </button>

        {/* Call Button */}
        <button
          onClick={callClinic}
          className="w-full flex items-center justify-center space-x-3 bg-blue-500 text-white px-6 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">Call Now</span>
        </button>

        {/* Info */}
        <div className="pt-3 border-t border-gray-200">
          <div className="text-center space-y-1">
            <p className="text-xs text-gray-500">Available 24/7</p>
            <p className="text-sm font-medium text-gray-700">{whatsappNumber}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppChat