'use client'

import { skillsSectionData } from '@/data/sections/skillsSection'

export default function SkillsSection() {
  // Pre-calculated proficiency levels for technical skills (fixed values)
  const technicalProficiency = [85, 90, 80, 88, 85, 92, 87, 90, 85]

  return (
    <section id='skills' className='min-h-screen py-20 bg-white text-gray-900'>
      <div className='container mx-auto px-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
              Skills & Expertise
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto'></div>
            <p className='text-xl text-gray-600 mt-4'>
              Technical skills, soft skills, and areas of interest
            </p>
          </div>

          {/* Technical Skills */}
          <div className='mb-16'>
            <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
              Technical Skills
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {skillsSectionData.technical.map((skill, index) => (
                <div
                  key={index}
                  className='bg-white border border-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='text-3xl'>
                      {skill === 'Verilog' && '🔧'}
                      {skill === 'Comsol' && '🌊'}
                      {skill === 'CoventorWare' && '🔬'}
                      {skill === 'Innovus' && '⚡'}
                      {skill === 'Genus' && '🎯'}
                      {skill === 'Cadence' && '💻'}
                      {skill === 'PIC Microcontroller' && '🔌'}
                      {skill === 'C Programming' && '💻'}
                      {skill === 'MATLAB Simulink' && '📊'}
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-xl font-bold text-gray-900'>
                        {skill}
                      </h4>
                      <div className='w-full bg-gray-200 rounded-full h-2 mt-2'>
                        <div
                          className='bg-blue-600 h-2 rounded-full transition-all duration-1000'
                          style={{
                            width: `${technicalProficiency[index] || 85}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className='mb-16'>
            <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
              Soft Skills
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {skillsSectionData.soft.map((skill, index) => (
                <div
                  key={index}
                  className='bg-white border border-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='text-3xl'>
                      {skill === 'Leadership' && '👑'}
                      {skill === 'Team Player' && '🤝'}
                      {skill === 'Critical Thinking' && '🧠'}
                      {skill === 'Problem Solving' && '🔍'}
                      {skill === 'Communication' && '💬'}
                      {skill === 'Organization' && '📋'}
                      {skill === 'Hard Working' && '💪'}
                    </div>
                    <div>
                      <h4 className='text-xl font-bold text-gray-900'>
                        {skill}
                      </h4>
                      <p className='text-gray-600 text-sm mt-1'>
                        {skill === 'Leadership' &&
                          'Leading teams and projects effectively'}
                        {skill === 'Team Player' &&
                          'Collaborating seamlessly with others'}
                        {skill === 'Critical Thinking' &&
                          'Analyzing problems from multiple angles'}
                        {skill === 'Problem Solving' &&
                          'Finding innovative solutions to challenges'}
                        {skill === 'Communication' &&
                          'Expressing ideas clearly and effectively'}
                        {skill === 'Organization' &&
                          'Managing tasks and priorities efficiently'}
                        {skill === 'Hard Working' &&
                          'Dedicated to achieving excellence'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className='mb-16'>
            <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
              Areas of Interest
            </h3>
            <div className='flex flex-wrap justify-center gap-4'>
              {skillsSectionData.interests.map((interest, index) => (
                <div
                  key={index}
                  className='bg-white border border-blue-100 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                >
                  <div className='flex items-center space-x-2'>
                    <span className='text-xl'>
                      {interest === 'Analog Electronics' && '⚡'}
                      {interest === 'Microcontrollers' && '🔌'}
                      {interest === 'FPGA' && '🔧'}
                      {interest === 'System Verilog' && '💻'}
                      {interest === 'Technology' && '🚀'}
                      {interest === 'Football' && '⚽'}
                      {interest === 'Travel' && '✈️'}
                    </span>
                    <span className='font-semibold text-gray-800'>
                      {interest}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories Overview */}
          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='text-center bg-white p-8 rounded-xl shadow-lg'>
              <div className='text-5xl mb-4'>🔧</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Technical Expertise
              </h3>
              <p className='text-gray-600 mb-4'>
                {skillsSectionData.technical.length} technical skills
              </p>
              <div className='text-3xl font-bold text-blue-600'>
                Expert Level
              </div>
            </div>

            <div className='text-center bg-white p-8 rounded-xl shadow-lg'>
              <div className='text-5xl mb-4'>🤝</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Soft Skills
              </h3>
              <p className='text-gray-600 mb-4'>
                {skillsSectionData.soft.length} interpersonal skills
              </p>
              <div className='text-3xl font-bold text-green-600'>Advanced</div>
            </div>

            <div className='text-center bg-white p-8 rounded-xl shadow-lg'>
              <div className='text-5xl mb-4'>🎯</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Interests
              </h3>
              <p className='text-gray-600 mb-4'>
                {skillsSectionData.interests.length} areas of focus
              </p>
              <div className='text-3xl font-bold text-purple-600'>Diverse</div>
            </div>
          </div>

          {/* Learning Journey */}
          <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white'>
            <div className='max-w-4xl mx-auto text-center'>
              <h3 className='text-3xl font-bold mb-6'>
                Continuous Learning Journey
              </h3>
              <p className='text-xl mb-8 opacity-90'>
                Committed to staying updated with the latest technologies and
                methodologies in VLSI design, embedded systems, and
                microelectronics
              </p>
              <div className='grid md:grid-cols-4 gap-6 text-center'>
                <div>
                  <div className='text-3xl mb-2'>📚</div>
                  <h4 className='text-lg font-semibold mb-2'>Research</h4>
                  <p className='text-sm opacity-80'>Academic publications</p>
                </div>
                <div>
                  <div className='text-3xl mb-2'>🔬</div>
                  <h4 className='text-lg font-semibold mb-2'>Projects</h4>
                  <p className='text-sm opacity-80'>Hands-on experience</p>
                </div>
                <div>
                  <div className='text-3xl mb-2'>👥</div>
                  <h4 className='text-lg font-semibold mb-2'>Collaboration</h4>
                  <p className='text-sm opacity-80'>Team projects</p>
                </div>
                <div>
                  <div className='text-3xl mb-2'>🚀</div>
                  <h4 className='text-lg font-semibold mb-2'>Innovation</h4>
                  <p className='text-sm opacity-80'>Future technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
