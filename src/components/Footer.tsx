'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Wellness Consultation', href: '/services/consultation' },
      { name: 'IV Therapy', href: '/services/iv-therapy' },
      { name: 'Aesthetic Medicine', href: '/services/aesthetic' },
      { name: 'Hormone Therapy', href: '/services/hormone' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Virtual Tour', href: '/tour' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    resources: [
      { name: 'Patient Portal', href: '/portal' },
      { name: 'Health Blog', href: '/blog' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <div className="font-serif text-3xl font-bold">
                <span className="text-gold-400">Healing</span>
                <span className="text-teal-400">Path</span>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Experience world-class medical care in our luxurious, spa-like environment. 
              Your wellness journey begins with us.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">info@healingpath.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sage-400 mt-1" />
                <span className="text-gray-300">
                  123 Wellness Avenue<br />
                  Beverly Hills, CA 90210
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sage-400 smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div className="pt-4">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-gold-400" />
                <h4 className="font-semibold text-white">Hours</h4>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for wellness tips, exclusive offers, and updates on our latest services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gold-400"
              />
              <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full hover:from-gold-600 hover:to-gold-700 smooth-transition font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 HealingPath. All rights reserved. | HIPAA Compliant
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gold-500 hover:to-teal-500 smooth-transition"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white smooth-transition">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white smooth-transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer