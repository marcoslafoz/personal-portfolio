import React from 'react'

export const Header: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-4 lg:md:flex-row justify-between items-center p-8'>
      <div className='text-3xl'>
        <span className='studentspace-bold'>marcos</span>lafoz
      </div>

      <div className='flex flex-row gap-4 flex-wrap lg:md:gap-8 justify-between items-center text-sm font-bold'>
        <a href='#home' className='hover:text-[#00a085]'>
          Inicio
        </a>
        <a href='#about-me' className='hover:text-[#00a085]'>
          Sobre mí
        </a>
        <a href='#3' className='hover:text-[#00a085]'>
          Conocimientos
        </a>
        <a href='#4' className='hover:text-[#00a085]'>
          Proyectos
        </a>
      </div>
    </div>
  )
}
