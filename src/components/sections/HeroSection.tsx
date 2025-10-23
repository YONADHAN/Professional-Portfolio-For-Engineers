'use client'

import { heroSectionData } from '@/data/sections/heroSection'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            {heroSectionData.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">
            {heroSectionData.title}
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {heroSectionData.tagline}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={heroSectionData.buttons.downloadCV.href}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              download
            >
              <span>{heroSectionData.buttons.downloadCV.icon}</span>
              {heroSectionData.buttons.downloadCV.text}
            </a>
            
            <a
              href={heroSectionData.buttons.contact.href}
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>{heroSectionData.buttons.contact.icon}</span>
              {heroSectionData.buttons.contact.text}
            </a>
            
            <a
              href={heroSectionData.buttons.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>{heroSectionData.buttons.linkedin.icon}</span>
              {heroSectionData.buttons.linkedin.text}
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
