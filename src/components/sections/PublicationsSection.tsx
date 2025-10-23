'use client'

import { publicationSectionData } from '@/data/sections/publicationSection'

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="min-h-screen py-20 bg-blue-50 text-blue-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Publications
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-blue-700 mt-4">
              Research Publications & Academic Contributions
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {publicationSectionData.map((publication, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Publication Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {publication.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {publication.type}
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {publication.status}
                      </span>
                      <span className="text-blue-700 font-medium">
                        {publication.year}
                      </span>
                    </div>
                  </div>
                  <div className="text-4xl">📄</div>
                </div>

                {/* Publication Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">
                      Journal Information
                    </h4>
                    <p className="text-blue-700 mb-2">
                      <strong>Journal:</strong> {publication.journal}
                    </p>
                    <p className="text-blue-700 mb-2">
                      <strong>Volume:</strong> {publication.volume}
                    </p>
                    <p className="text-blue-700">
                      <strong>Pages:</strong> {publication.pages}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">
                      Authors
                    </h4>
                    <p className="text-blue-700 mb-4">{publication.authors}</p>
                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      View DOI
                    </a>
                  </div>
                </div>

                {/* Abstract/Description */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">
                    Research Focus
                  </h4>
                  <p className="text-blue-700 leading-relaxed">
                    {publication.abstract}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-lg">
                    <span className="text-blue-700 text-sm">Impact Factor:</span>
                    <span className="ml-2 font-semibold text-blue-800">{publication.impact}</span>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg">
                    <span className="text-blue-700 text-sm">Citations:</span>
                    <span className="ml-2 font-semibold text-blue-800">{publication.citations}</span>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg">
                    <span className="text-blue-700 text-sm">Downloads:</span>
                    <span className="ml-2 font-semibold text-blue-800">{publication.downloads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Areas */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Research Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Vehicle Health Monitoring', 'Embedded Systems', 'Data Analysis'].map((area, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{['🚗','🔬','📊'][idx]}</div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{area}</h4>
                  <p className="text-blue-700">
                    {area === 'Vehicle Health Monitoring' && 'Real-time diagnostics and predictive maintenance systems for automotive applications'}
                    {area === 'Embedded Systems' && 'Development of intelligent embedded solutions using MATLAB Simulink and microcontrollers'}
                    {area === 'Data Analysis' && 'Advanced signal processing and data analysis techniques for system optimization'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Research */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
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
