'use client'

import { educationSectionData } from '@/data/sections/educationSection'

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              My Academic Journey
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - goes behind cards */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 hidden lg:block z-0"></div>

            {/* Education Items */}
            <div className="space-y-12 relative z-10">
              {educationSectionData.map((education, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex lg:w-1/2 lg:justify-center relative z-20">
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-30"></div>
                      {education.status === 'current' && (
                        <div className="absolute -inset-2 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full lg:w-1/2 lg:px-8 relative z-20">
                    <div
                      className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        education.status === 'current' ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      {/* Status Badge */}
                      {education.status === 'current' && (
                        <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                          Current
                        </div>
                      )}

                      {/* Degree and Institution */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-3xl">{education.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {education.degree}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {education.institution}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {education.period}
                      </p>

                      {/* Performance Metrics */}
                      <div className="flex flex-wrap gap-4">
                        {education.cgpa && (
                          <div className="bg-gray-100 dark:bg-gray-600 px-4 py-2 rounded-lg">
                            <span className="text-sm text-gray-600 dark:text-gray-400">CGPA:</span>
                            <span className="ml-2 font-bold text-gray-900 dark:text-white">
                              {education.cgpa}
                            </span>
                          </div>
                        )}
                        {education.percentage && (
                          <div className="bg-gray-100 dark:bg-gray-600 px-4 py-2 rounded-lg">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Percentage:</span>
                            <span className="ml-2 font-bold text-gray-900 dark:text-white">
                              {education.percentage}%
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Progress Bar for Current */}
                      {education.status === 'current' && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <span>Progress</span>
                            <span>Year 1 of 2</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                8.41
              </div>
              <p className="text-gray-600 dark:text-gray-400">Current CGPA (M.Tech)</p>
            </div>
            <div className="text-center bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                8.59
              </div>
              <p className="text-gray-600 dark:text-gray-400">B.Tech CGPA</p>
            </div>
            <div className="text-center bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                91.4%
              </div>
              <p className="text-gray-600 dark:text-gray-400">12th Grade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
