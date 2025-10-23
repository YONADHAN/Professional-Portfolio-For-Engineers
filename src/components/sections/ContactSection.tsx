'use client'

import { contactSectionData } from '@/data/sections/contactSection'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-blue-50 text-blue-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-blue-700 mt-4">
              Let's discuss opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Contact Information
                </h3>
                
                {/* Personal Info */}
                <div className="space-y-6">
                  {[
                    { icon: '👤', label: contactSectionData.personalInfo.name, sub: 'VLSI & Microsystems Engineer' },
                    { icon: '📧', label: 'Email', sub: contactSectionData.personalInfo.email, link: `mailto:${contactSectionData.personalInfo.email}` },
                    { icon: '📞', label: 'Phone', sub: contactSectionData.personalInfo.phone, link: `tel:${contactSectionData.personalInfo.phone}` },
                    { icon: '📍', label: 'Location', sub: contactSectionData.personalInfo.location },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-blue-900">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} className="text-blue-600 hover:underline">{item.sub}</a>
                        ) : (
                          <p className="text-blue-700">{item.sub}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">
                    Connect With Me
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {contactSectionData.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center space-x-2"
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
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                {[
                  { id: 'name', type: 'text', label: 'Full Name', placeholder: 'Your full name' },
                  { id: 'email', type: 'email', label: 'Email Address', placeholder: 'your.email@example.com' },
                  { id: 'subject', type: 'text', label: 'Subject', placeholder: "What's this about?" },
                ].map((field, idx) => (
                  <div key={idx}>
                    <label htmlFor={field.id} className="block text-sm font-semibold text-blue-900 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-900"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-900 resize-none"
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
            {[
              { icon: '💼', title: 'Career Opportunities', desc: 'Looking for VLSI design, embedded systems, or research positions', subject: 'Career Opportunity' },
              { icon: '🤝', title: 'Collaboration', desc: 'Interested in research collaborations and joint projects', subject: 'Collaboration Proposal' },
              { icon: '💬', title: 'General Inquiry', desc: 'Have questions about my work or want to connect?', subject: 'General Inquiry' },
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-blue-700 mb-4">{item.desc}</p>
                <a
                  href={`mailto:${contactSectionData.personalInfo.email}?subject=${encodeURIComponent(item.subject)}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  {item.title === 'Career Opportunities' ? 'Send Opportunity' : item.title === 'Collaboration' ? 'Propose Collaboration' : 'Get In Touch'}
                </a>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-blue-200">
            <div className="text-center">
              <p className="text-blue-700 mb-2">
                {contactSectionData.footer.copyright}
              </p>
              <p className="text-sm text-blue-500">
                {contactSectionData.footer.designedBy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
