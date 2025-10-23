'use client'

import { experienceSectionData } from '@/data/sections/experienceSection'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              Professional Experience & Internships
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line - goes behind cards */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 z-0"></div>
            
            {/* Experience Items */}
            <div className="space-y-12 relative z-10">
              {experienceSectionData.map((experience, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Dot */}
                  <div className="flex md:w-1/2 md:justify-center mb-6 md:mb-0 relative z-20">
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-30"></div>
                      <div className="absolute -inset-2 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 md:px-8 relative z-20">
                    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-4xl">{experience.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                              {experience.location}
                            </span>
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                              {experience.type}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-lg">
                            {experience.period}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Responsibilities & Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Space Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hands-on experience with LabVIEW, PXI systems, and scientific payload design at VSSC
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Marketing & Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developed marketing strategies and campaign management skills at Revolt
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Research & Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuous learning in VLSI, MEMS, and embedded systems technologies
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Looking for challenging roles in VLSI design, embedded systems, or research positions
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
