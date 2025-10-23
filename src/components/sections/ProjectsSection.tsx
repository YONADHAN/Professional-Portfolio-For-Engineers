'use client'

import { projectsSectionData } from '@/data/sections/projectsSection'

export default function ProjectsSection() {
  return (
    <section
      id='projects'
      className='min-h-screen py-20 bg-blue-50 text-blue-900'
    >
      <div className='container mx-auto px-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-blue-900'>
              Projects
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto'></div>
            <p className='text-xl text-blue-700 mt-4'>
              Technical Projects & Research Work
            </p>
          </div>

          {/* Projects Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectsSectionData.map((project, index) => (
              <div
                key={index}
                className='bg-white border border-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden'
              >
                {/* Project Header */}
                <div className='p-6 border-b border-blue-100'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-blue-900 mb-2 line-clamp-2'>
                        {project.title}
                      </h3>
                      <div className='flex items-center space-x-2'>
                        <span className='text-sm text-blue-700'>
                          {project.year}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className='p-6'>
                  <p className='text-blue-700 mb-6 line-clamp-3'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex space-x-3'>
                    <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200'>
                      View Details
                    </button>
                    <button className='px-4 py-2 border border-blue-300 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors duration-200'>
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Project Highlight */}
          <div className='mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white'>
            <div className='max-w-4xl mx-auto text-center'>
              <h3 className='text-3xl font-bold mb-4'>
                Featured Project: ASIC Design for MEMS Accelerometer
              </h3>
              <p className='text-xl mb-6 opacity-90'>
                Advanced ASIC design using SGFET technology for high-sensitivity
                MEMS accelerometer applications
              </p>
              <div className='flex flex-wrap justify-center gap-4 mb-6'>
                <span className='bg-white/20 px-4 py-2 rounded-full'>
                  Verilog
                </span>
                <span className='bg-white/20 px-4 py-2 rounded-full'>
                  Cadence
                </span>
                <span className='bg-white/20 px-4 py-2 rounded-full'>MEMS</span>
                <span className='bg-white/20 px-4 py-2 rounded-full'>ASIC</span>
              </div>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200'>
                Learn More
              </button>
            </div>
          </div>

          {/* Project Statistics */}
          <div className='mt-16 grid md:grid-cols-4 gap-6'>
            <div className='text-center bg-white p-6 rounded-lg shadow-lg'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>
                {projectsSectionData.length}
              </div>
              <p className='text-blue-700 font-semibold'>Total Projects</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-lg'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>
                {
                  projectsSectionData.filter((p) => p.status === 'completed')
                    .length
                }
              </div>
              <p className='text-blue-700 font-semibold'>Completed</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-lg'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>8+</div>
              <p className='text-blue-700 font-semibold'>Technologies</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-lg'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>2+</div>
              <p className='text-blue-700 font-semibold'>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
