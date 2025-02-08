import React from 'react'
import { DemoSlider } from '../demo-slider'

export const Projects: React.FC = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-6'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='studentspace-bold text-5xl'>Proyectos</div>
          <div className='custom-color-secondary text-sm'>Mis proyectos personales</div>
        </div>
        <DemoSlider />
      </div>
    </>
  )
}
