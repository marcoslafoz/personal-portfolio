import React from 'react'
import './knowledge-data'
import { myKnowledgeData } from './knowledge-data'

export const Knowledge: React.FC = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='studentspace-bold text-5xl'>Conocimientos</div>
          <div className='custom-color-secondary text-sm'>Tecnologías que trabajo</div>
        </div>

        {myKnowledgeData.map((item, index) => (
          <div className='flex flex-col gap-6 justify-center items-center' key={index}>
            
            <div className='flex flex-col justify-center items-center custom-color-secondary max-w-[35rem] gap-4   '>
              <span className='text-xl studentspace-bold justify-center text-center' >{item.title}</span>
              <span className='text-xs justify-center text-center' >{item.description}</span>
            </div>

            <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
              {item.techs.map((tech, index) => (
                
                <img
                  key={index}
                  src={`/assets/icons/${tech.iconUrl}`}
                  alt={tech.name}
                  title={tech.name}
                  className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-125"

                />
                
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
