// app/page.tsx
'use client'

export default function HomePage() {
  return (
    <main className='flex flex-col scroll-smooth'>
      {/* Hero Section */}
      <section
        id='hero'
        className='min-h-screen flex items-center justify-center bg-gray-900 text-white'
      >
        <h1 className='text-4xl font-bold'>Hero Section</h1>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='min-h-screen flex items-center justify-center bg-gray-800 text-white'
      >
        <h1 className='text-4xl font-bold'>About Section</h1>
      </section>

      {/* Education Section */}
      <section
        id='education'
        className='min-h-screen flex items-center justify-center bg-gray-700 text-white'
      >
        <h1 className='text-4xl font-bold'>Education Section</h1>
      </section>

      {/* Projects Section */}
      <section
        id='projects'
        className='min-h-screen flex items-center justify-center bg-gray-600 text-white'
      >
        <h1 className='text-4xl font-bold'>Projects Section</h1>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='min-h-screen flex items-center justify-center bg-gray-500 text-white'
      >
        <h1 className='text-4xl font-bold'>Experience Section</h1>
      </section>

      {/* Leadership Section */}
      <section
        id='leadership'
        className='min-h-screen flex items-center justify-center bg-gray-400 text-white'
      >
        <h1 className='text-4xl font-bold'>Leadership Section</h1>
      </section>

      {/* Publications Section */}
      <section
        id='publications'
        className='min-h-screen flex items-center justify-center bg-gray-300 text-black'
      >
        <h1 className='text-4xl font-bold'>Publications Section</h1>
      </section>

      {/* Skills Section */}
      <section
        id='skills'
        className='min-h-screen flex items-center justify-center bg-gray-200 text-black'
      >
        <h1 className='text-4xl font-bold'>Skills Section</h1>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='min-h-screen flex items-center justify-center bg-gray-100 text-black'
      >
        <h1 className='text-4xl font-bold'>Contact Section</h1>
      </section>
    </main>
  )
}
