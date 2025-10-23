'use client'

import React from 'react'
import { contactSectionData } from '@/data/sections/contactSection'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">AS</span>
            </div>
              <span className="text-xl font-bold">Athil Shaji</span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              VLSI & Microsystems Engineer passionate about microelectronics, ASIC design, and embedded systems.
            </p>
            <div className="flex space-x-4">
              <a
                href={contactSectionData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${contactSectionData.personalInfo.email}`}
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.545l6.545 4.545V3.821h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-blue-100">
              <p>{contactSectionData.personalInfo.email}</p>
              <p>{contactSectionData.personalInfo.phone}</p>
              <p>{contactSectionData.personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            {contactSectionData.footer.copyright}
          </p>
          <p className="text-blue-200 text-sm mt-2 md:mt-0">
            {contactSectionData.footer.designedBy}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
