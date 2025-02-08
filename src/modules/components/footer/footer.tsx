import React from 'react'

import githubIcon from '/assets/icons/github.svg'
import linkedinIcon from '/assets/icons/linkedin.svg'
import gmailIcon from '/assets/icons/mail.svg'

export const Footer: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-4 lg:md:flex-row justify-between items-center p-8 custom-bg-color-primary custom-color-terciary'>
      <div className='text-3xl'>
        <span className='studentspace-bold '>marcos</span>lafoz
      </div>

      <div className='flex flex-row gap-4 flex-wrap lg:md:gap-8 justify-between items-center text-sm font-bold'>
        <a href='https://github.com/marcoslafoz' target='_blank' rel='noreferrer'>
          <img className='object-contain h-5 ' src={githubIcon} alt='Github' />
        </a>
        <a href='https://www.linkedin.com/in/marcoslafoz' target='_blank' rel='noreferrer'>
          <img className='object-contain h-5' src={linkedinIcon} alt='Linkedin' />
        </a>
        <a href='mailto:marcos.lafoz96@gmail.com' target='_blank' rel='noreferrer'>
          <img className='object-contain h-3.5' src={gmailIcon} alt='Gmail' />
        </a>
      </div>
    </div>
  )
}
