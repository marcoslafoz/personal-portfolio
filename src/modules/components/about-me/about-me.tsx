import React from 'react'
import { DownloadCvButton } from './download-cv-button'

export const AboutMe: React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='studentspace-bold text-5xl'>Sobre mí</div>
        <div className='custom-color-secondary text-sm'>Introducción</div>
      </div>

      <div className='custom-color-secondary text-lg max-w-[36rem] justify-center text-center '>
        Soy Marcos Lafoz, estudiante de Administracion de Sistemas informaticos en red en Zaragoza. Me apasiona la
        tecnología y la programación
      </div>
      <div>
        <DownloadCvButton cvFileUrl='https://drive.google.com/file/d/10M8m_JFyQu2HO7t2vK1BhT9nMaAQPoXh/view?usp=sharing' />
      </div>
    </div>
  )
}
