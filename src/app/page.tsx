// app/page.tsx
'use client'

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import EducationSection from '@/components/sections/EducationSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import PositionsAndLeadershipSection from '@/components/sections/PositionsAndLeadershipSection'
import PublicationsSection from '@/components/sections/PublicationsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className='flex flex-col scroll-smooth'>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <PositionsAndLeadershipSection />
      <PublicationsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
