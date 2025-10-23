'use client'

import { positionAndLeadershipSectionData } from '@/data/sections/positionAndLeadershipSection'

export default function PositionsAndLeadershipSection() {
  // Group positions by type
  const groupedPositions = positionAndLeadershipSectionData.reduce(
    (acc, position) => {
      if (!acc[position.type]) {
        acc[position.type] = []
      }
      acc[position.type].push(position)
      return acc
    },
    {} as Record<string, typeof positionAndLeadershipSectionData>
  )

  return (
    <section
      id='leadership'
      className='min-h-screen py-20 bg-blue-50 text-gray-900'
    >
      <div className='container mx-auto px-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
              Leadership & Positions
            </h2>
            <div className='w-24 h-1 bg-blue-600 mx-auto'></div>
            <p className='text-xl text-gray-600 mt-4'>
              Leadership roles and organizational contributions
            </p>
          </div>

          {/* Leadership Categories */}
          <div className='space-y-12'>
            {Object.entries(groupedPositions).map(([type, positions]) => (
              <div key={type} className='mb-16'>
                <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
                  {type}
                </h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                    >
                      {/* Position Header */}
                      <div className='flex items-start space-x-4 mb-4'>
                        <div className='text-3xl'>{position.icon}</div>
                        <div className='flex-1'>
                          <h4 className='text-xl font-bold text-gray-900 mb-2'>
                            {position.role}
                          </h4>
                          <p className='text-blue-600 font-semibold mb-2'>
                            {position.organization}
                          </p>
                          <p className='text-gray-600 text-sm'>
                            {position.period}
                          </p>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className='flex justify-end'>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold'>
                          {position.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Statistics */}
          <div className='mt-16 grid md:grid-cols-4 gap-6'>
            <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>
                {positionAndLeadershipSectionData.length}
              </div>
              <p className='text-gray-600'>Total Positions</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                {
                  positionAndLeadershipSectionData.filter(
                    (p) => p.type === 'Leadership'
                  ).length
                }
              </div>
              <p className='text-gray-600'>Leadership Roles</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
              <div className='text-3xl font-bold text-purple-600 mb-2'>3+</div>
              <p className='text-gray-600'>Years Active</p>
            </div>
            <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
              <div className='text-3xl font-bold text-orange-600 mb-2'>5+</div>
              <p className='text-gray-600'>Organizations</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className='mt-16'>
            <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
              Key Achievements
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl'>
                <div className='text-4xl mb-4'>💰</div>
                <h4 className='text-xl font-bold text-gray-900 mb-3'>
                  Financial Management
                </h4>
                <p className='text-gray-600'>
                  Successfully managed finances for multiple organizations
                  including ISTE and TEDx events
                </p>
              </div>

              <div className='bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl'>
                <div className='text-4xl mb-4'>📝</div>
                <h4 className='text-xl font-bold text-gray-900 mb-3'>
                  Content Creation
                </h4>
                <p className='text-gray-600'>
                  Contributed to IEEE CASS Kerala Section content team, creating
                  technical materials
                </p>
              </div>

              <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl'>
                <div className='text-4xl mb-4'>🎉</div>
                <h4 className='text-xl font-bold text-gray-900 mb-3'>
                  Event Management
                </h4>
                <p className='text-gray-600'>
                  Led hospitality and logistics for major college events
                  including HESTA 24
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className='mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white'>
            <div className='max-w-4xl mx-auto text-center'>
              <h3 className='text-3xl font-bold mb-6'>Leadership Philosophy</h3>
              <p className='text-xl mb-8 opacity-90'>
                &quot;Leadership is about empowering others to achieve their
                best potential while driving organizational success through
                strategic thinking, effective communication, and collaborative
                problem-solving.&quot;
              </p>
              <div className='grid md:grid-cols-3 gap-6 text-center'>
                <div>
                  <div className='text-3xl mb-2'>🤝</div>
                  <h4 className='text-lg font-semibold mb-2'>Collaboration</h4>
                  <p className='text-sm opacity-80'>Building strong teams</p>
                </div>
                <div>
                  <div className='text-3xl mb-2'>💡</div>
                  <h4 className='text-lg font-semibold mb-2'>Innovation</h4>
                  <p className='text-sm opacity-80'>
                    Driving creative solutions
                  </p>
                </div>
                <div>
                  <div className='text-3xl mb-2'>🎯</div>
                  <h4 className='text-lg font-semibold mb-2'>Results</h4>
                  <p className='text-sm opacity-80'>Delivering excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
