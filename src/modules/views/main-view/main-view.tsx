import React from 'react'
import { Header, Home, AboutMe, Knowledge, Projects, Footer } from '../../components'

export const MainView: React.FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <div className='flex flex-col gap-48 lg:md:gap-56 my-16 lg:md:my-44  '>
        <span id='home' className='px-8'>
          <Home />
        </span>
        <span id='about-me' className='px-8'>
          <AboutMe />
        </span>
        <span id='knowledge' className='px-8'>
          <Knowledge />
        </span>
        <span id='projects' className='px-8'>
          <Projects />
        </span>
      </div>
      <Footer />
    </div>
  )
}
