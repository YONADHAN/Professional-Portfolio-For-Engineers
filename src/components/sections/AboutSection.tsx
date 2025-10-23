'use client'

import { aboutSectionData } from '@/data/sections/aboutSection'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-xl leading-relaxed">
                  {aboutSectionData.summary}
                </p>
              </div>

              {/* Key Facts */}
              <div className="space-y-6">
                {aboutSectionData.keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl">{fact.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {fact.text}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {fact.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-xl font-semibold">Athil Shaji</p>
                    <p className="text-sm opacity-80">VLSI Engineer</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  ⚡
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-bounce">
                  🔬
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Specialization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                VLSI Design, MEMS, ASIC Development, and Embedded Systems
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Research Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Microelectronics, Sensor Technologies, and Hardware Optimization
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bridging innovation and real-world applications through technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
