'use client'

import { educationSectionData } from '@/data/sections/educationSection'

export default function EducationSection() {
  return (
    <section
      id='education'
      className='min-h-screen py-20 bg-blue-50 text-gray-900'
    >
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
              Education
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto'></div>
            <p className='text-xl text-gray-600 mt-4'>My Academic Journey</p>
          </div>

          {/* Education Items */}
          <div className='space-y-8'>
            {educationSectionData.map((education, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                  education.status === 'current' ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Status Badge */}
                {education.status === 'current' && (
                  <div className='inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4'>
                    Current
                  </div>
                )}

                {/* Degree and Institution */}
                <div className='flex items-start space-x-4 mb-4'>
                  <div className='text-3xl'>{education.icon}</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-gray-900 mb-1'>
                      {education.degree}
                    </h3>
                    <p className='text-lg text-blue-600 font-semibold'>
                      {education.institution}
                    </p>
                  </div>
                </div>

                {/* Period */}
                <p className='text-gray-600 mb-4'>{education.period}</p>

                {/* Performance Metrics */}
                <div className='flex flex-wrap gap-4'>
                  {education.cgpa && (
                    <div className='bg-gray-100 px-4 py-2 rounded-lg'>
                      <span className='text-sm text-gray-600'>CGPA:</span>
                      <span className='ml-2 font-bold text-gray-900'>
                        {education.cgpa}
                      </span>
                    </div>
                  )}
                  {education.percentage && (
                    <div className='bg-gray-100 px-4 py-2 rounded-lg'>
                      <span className='text-sm text-gray-600'>Percentage:</span>
                      <span className='ml-2 font-bold text-gray-900'>
                        {education.percentage}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Progress Bar for Current */}
                {education.status === 'current' && (
                  <div className='mt-4'>
                    <div className='flex justify-between text-sm text-gray-600 mb-2'>
                      <span>Progress</span>
                      <span>Year 1 of 2</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <div className='bg-blue-600 h-2 rounded-full w-1/2'></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className='mt-16 grid md:grid-cols-3 gap-6'>
            <div className='text-center bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>8.41</div>
              <p className='text-gray-600'>Current CGPA (M.Tech)</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl font-bold text-green-600 mb-2'>8.59</div>
              <p className='text-gray-600'>B.Tech CGPA</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl font-bold text-purple-600 mb-2'>
                91.4%
              </div>
              <p className='text-gray-600'>12th Grade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
