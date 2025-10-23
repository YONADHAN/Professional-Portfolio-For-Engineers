'use client'

import { contactSectionData } from '@/data/sections/contactSection'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              Let's discuss opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                {/* Personal Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">👤</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {contactSectionData.personalInfo.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        VLSI & Microsystems Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </p>
                      <a 
                        href={`mailto:${contactSectionData.personalInfo.email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {contactSectionData.personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Phone
                      </p>
                      <a 
                        href={`tel:${contactSectionData.personalInfo.phone}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {contactSectionData.personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Location
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contactSectionData.personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    {contactSectionData.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Career Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Looking for VLSI design, embedded systems, or research positions
              </p>
              <a
                href={`mailto:${contactSectionData.personalInfo.email}?subject=Career Opportunity`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Send Opportunity
              </a>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Interested in research collaborations and joint projects
              </p>
              <a
                href={`mailto:${contactSectionData.personalInfo.email}?subject=Collaboration Proposal`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Propose Collaboration
              </a>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                General Inquiry
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Have questions about my work or want to connect?
              </p>
              <a
                href={`mailto:${contactSectionData.personalInfo.email}?subject=General Inquiry`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {contactSectionData.footer.copyright}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {contactSectionData.footer.designedBy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
