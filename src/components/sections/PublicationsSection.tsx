'use client'

import { publicationSectionData } from '@/data/sections/publicationSection'

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="min-h-screen py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Publications
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              Research Publications & Academic Contributions
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {publicationSectionData.map((publication, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Publication Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {publication.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                        {publication.type}
                      </span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                        {publication.status}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {publication.year}
                      </span>
                    </div>
                  </div>
                  <div className="text-4xl">📄</div>
                </div>

                {/* Publication Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Journal Information
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Journal:</strong> {publication.journal}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Volume:</strong> {publication.volume}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Pages:</strong> {publication.pages}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Authors
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {publication.authors}
                    </p>
                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      View DOI
                    </a>
                  </div>
                </div>

                {/* Abstract/Description */}
                <div className="bg-gray-50 dark:bg-gray-600 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Research Focus
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    This research focuses on the development of an integrated vehicle health management system using MATLAB Simulink. 
                    The system provides real-time monitoring and diagnostics capabilities for vehicle components, enabling predictive 
                    maintenance and improved reliability. The work demonstrates practical applications of embedded systems in automotive 
                    technology and contributes to the field of vehicle health monitoring systems.
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Impact Factor:</span>
                    <span className="ml-2 font-semibold text-blue-600 dark:text-blue-400">2.5+</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Citations:</span>
                    <span className="ml-2 font-semibold text-green-600 dark:text-green-400">5+</span>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Downloads:</span>
                    <span className="ml-2 font-semibold text-purple-600 dark:text-purple-400">100+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Areas */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Research Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">🚗</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Vehicle Health Monitoring
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Real-time diagnostics and predictive maintenance systems for automotive applications
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">🔬</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Embedded Systems
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Development of intelligent embedded solutions using MATLAB Simulink and microcontrollers
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Data Analysis
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced signal processing and data analysis techniques for system optimization
                </p>
              </div>
            </div>
          </div>

          {/* Future Research */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">
                Future Research Directions
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Continuing research in VLSI design, MEMS applications, and advanced embedded systems for next-generation technologies
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🔬</div>
                  <h4 className="text-lg font-semibold mb-2">MEMS Research</h4>
                  <p className="text-sm opacity-80">Advanced sensor technologies</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="text-lg font-semibold mb-2">VLSI Design</h4>
                  <p className="text-sm opacity-80">Low-power circuit design</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤖</div>
                  <h4 className="text-lg font-semibold mb-2">AI Integration</h4>
                  <p className="text-sm opacity-80">Smart embedded systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
