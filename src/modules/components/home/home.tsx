import React from 'react'
import { ContactButton } from './contact-button'

import DeveloperImage from '/assets/images/developer.webp'
import GithubOutlinedIcon from '/assets/icons/github-outlined.webp'
import LinkedinOutlinedIcon from '/assets/icons/linkedin-outlined.webp'

export const Home: React.FC = () => {
  return (
    <div className='w-full flex flex-col lg:md:flex-row justify-center items-center gap-10 '>
      <div className='flex flex-row justify-center items-center gap-20'>
        <div className='hidden lg:md:flex lg:md:flex-col justify-center items-center gap-8'>
          <a href='https://github.com/marcoslafoz' target='_blank' rel='noreferrer'>
            <img src={GithubOutlinedIcon} alt='Github' className='object-contain h-8' />
          </a>
          <a href='https://www.linkedin.com/in/marcoslafoz' target='_blank' rel='noreferrer'>
            <img src={LinkedinOutlinedIcon} alt='Linkedin' className='object-contain h-8' />
          </a>
        </div>

        <div className='flex flex-col justify-center items-start gap-4 max-w-[36rem]'>
          <div className='studentspace-bold text-5xl'>Marcos Lafoz</div>
          <div className='font-bold text-2xl custom-color-secondary'>Junior Developer</div>
          <div className='custom-color-secondary text-lg'>
            Conocimientos en desarrollo web, programación y diseño, como desarrollador junior en búsqueda de
            oportunidades para seguir creciendo profesionalmente.
          </div>

          <div className='flex flex-row lg:md:hidden my-4 justify-center items-center gap-8'>
            <a href='https://github.com/marcoslafoz' target='_blank' rel='noreferrer'>
              <img src={GithubOutlinedIcon} alt='Github' className='object-contain h-8' />
            </a>
            <a href='https://www.linkedin.com/in/marcoslafoz' target='_blank' rel='noreferrer'>
              <img src={LinkedinOutlinedIcon} alt='Linkedin' className='object-contain h-8' />
            </a>
          </div>

          <div className='lg:md:mt-6'>
            <ContactButton />
          </div>
          <div className='flex flex-col lg:md:hidden justify-center items-center mt-12'>
            <img src={DeveloperImage} alt='Developer' />
          </div>
        </div>
      </div>

      <div className='hidden lg:md:flex flex-row justify-center items-center'>
        <img src={DeveloperImage} alt='Developer' />
      </div>
    </div>
  )
}
