'use client'

import { positionAndLeadershipSectionData } from '@/data/sections/positionAndLeadershipSection'

export default function PositionsAndLeadershipSection() {
  // Group positions by type
  const groupedPositions = positionAndLeadershipSectionData.reduce((acc, position) => {
    if (!acc[position.type]) {
      acc[position.type] = []
    }
    acc[position.type].push(position)
    return acc
  }, {} as Record<string, typeof positionAndLeadershipSectionData>)

  return (
    <section
      id="leadership"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Leadership & Positions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              Leadership roles and organizational contributions
            </p>
          </div>

          {/* Leadership Categories */}
          <div className="space-y-12">
            {Object.entries(groupedPositions).map(([type, positions]) => (
              <div key={type} className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {type}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      {/* Position Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-3xl">{position.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {position.role}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {position.organization}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {position.period}
                          </p>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="flex justify-end">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
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
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {positionAndLeadershipSectionData.length}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Total Positions</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {positionAndLeadershipSectionData.filter(p => p.type === 'Leadership').length}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Leadership Roles</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                3+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Years Active</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                5+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Organizations</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Financial Management
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Successfully managed finances for multiple organizations including ISTE and TEDx events
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">📝</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Content Creation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Contributed to IEEE CASS Kerala Section content team, creating technical materials
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">🎉</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Event Management
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Led hospitality and logistics for major college events including HESTA 24
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">
                Leadership Philosophy
              </h3>
              <p className="text-xl mb-8 opacity-90">
                "Leadership is about empowering others to achieve their best potential while driving organizational success through strategic thinking, effective communication, and collaborative problem-solving."
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                  <p className="text-sm opacity-80">Building strong teams</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💡</div>
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p className="text-sm opacity-80">Driving creative solutions</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="text-lg font-semibold mb-2">Results</h4>
                  <p className="text-sm opacity-80">Delivering excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
