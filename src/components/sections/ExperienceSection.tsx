'use client'

import { experienceSectionData } from '@/data/sections/experienceSection'

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='min-h-screen py-20 bg-blue-50 text-blue-900'
    >
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-blue-900'>
              Experience
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto'></div>
            <p className='text-xl text-blue-700 mt-4'>
              Professional Experience & Internships
            </p>
          </div>

          {/* Experience Timeline */}
          <div className='space-y-8'>
            {experienceSectionData.map((experience, index) => (
              <div
                key={index}
                className='bg-white border border-blue-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
              >
                {/* Header */}
                <div className='flex items-start space-x-4 mb-6'>
                  <div className='text-4xl'>{experience.icon}</div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-blue-900 mb-2'>
                      {experience.title}
                    </h3>
                    <div className='flex flex-wrap items-center gap-4 mb-4'>
                      <span className='text-lg text-blue-600 font-semibold'>
                        {experience.location}
                      </span>
                      <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold'>
                        {experience.type}
                      </span>
                    </div>
                    <p className='text-blue-700 text-lg'>{experience.period}</p>
                  </div>
                </div>

                {/* Description */}
                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-blue-900 mb-3'>
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className='space-y-2'>
                    {experience.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className='flex items-start space-x-3 text-blue-700'
                      >
                        <span className='text-blue-600 mt-1'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className='text-lg font-semibold text-blue-900 mb-3'>
                    Technologies & Skills:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className='mt-16 grid md:grid-cols-3 gap-8'>
            <div className='text-center bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>🚀</div>
              <h3 className='text-xl font-bold text-blue-900 mb-2'>
                Space Technology
              </h3>
              <p className='text-blue-700'>
                Hands-on experience with LabVIEW, PXI systems, and scientific
                payload design at VSSC
              </p>
            </div>

            <div className='text-center bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>📈</div>
              <h3 className='text-xl font-bold text-blue-900 mb-2'>
                Marketing & Strategy
              </h3>
              <p className='text-blue-700'>
                Developed marketing strategies and campaign management skills at
                Revolt
              </p>
            </div>

            <div className='text-center bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow'>
              <div className='text-4xl mb-4'>🔬</div>
              <h3 className='text-xl font-bold text-blue-900 mb-2'>
                Research & Development
              </h3>
              <p className='text-blue-700'>
                Continuous learning in VLSI, MEMS, and embedded systems
                technologies
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-16 text-center'>
            <div className='bg-blue-600 p-8 rounded-xl'>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Ready for New Opportunities
              </h3>
              <p className='text-lg text-blue-100 mb-6'>
                Looking for challenging roles in VLSI design, embedded systems,
                or research positions
              </p>
              <a
                href='#contact'
                className='inline-block bg-white hover:bg-blue-100 text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors duration-200'
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
