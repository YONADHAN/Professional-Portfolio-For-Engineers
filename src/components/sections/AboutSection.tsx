'use client'

import { aboutSectionData } from '@/data/sections/aboutSection'

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen py-20 bg-white text-gray-900'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
              About Me
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Text Content */}
            <div className='space-y-8'>
              <div className='prose prose-lg max-w-none text-gray-600'>
                <p className='text-xl leading-relaxed'>
                  {aboutSectionData.summary}
                </p>
              </div>

              {/* Key Facts */}
              <div className='space-y-6'>
                {aboutSectionData.keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-4 p-4 bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow'
                  >
                    <div className='text-3xl'>{fact.icon}</div>
                    <div>
                      <p className='font-semibold text-gray-900'>{fact.text}</p>
                      <p className='text-sm text-blue-600'>{fact.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Image Placeholder */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative'>
                <div className='w-80 h-80 rounded-full overflow-hidden shadow-2xl'>
                  <img
                    src='/images/profilePic.jpg'
                    alt='Friend Profile'
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Floating Elements */}
                <div className='absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-pulse'>
                  ⚡
                </div>
                <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-bounce'>
                  🔬
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className='mt-16 grid md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-3xl mb-3'>🎯</div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                Specialization
              </h3>
              <p className='text-gray-600'>
                VLSI Design, MEMS, ASIC Development, and Embedded Systems
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-3xl mb-3'>🔬</div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                Research Focus
              </h3>
              <p className='text-gray-600'>
                Microelectronics, Sensor Technologies, and Hardware Optimization
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-3xl mb-3'>🚀</div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                Mission
              </h3>
              <p className='text-gray-600'>
                Bridging innovation and real-world applications through
                technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
