/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { demoData, SlideDirectionEnum, slideTime } from './demo-slider.vm'
import clsx from 'clsx'
import './demo-slider.scss'

export const DemoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [, setDirection] = React.useState<SlideDirectionEnum>(SlideDirectionEnum.RIGHT)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
  const [startX, setStartX] = React.useState<number | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const nextSlide = React.useCallback(() => {
    setDirection(SlideDirectionEnum.RIGHT)
    setCurrentIndex(prevIndex => (prevIndex + 1) % demoData.length)
  }, [])

  const prevSlide = React.useCallback(() => {
    setDirection(SlideDirectionEnum.LEFT)
    setCurrentIndex(prevIndex => (prevIndex - 1 + demoData.length) % demoData.length)
  }, [])

  const resetInterval = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextSlide, slideTime)
  }, [nextSlide])

  React.useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [resetInterval])

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startX === null) return
    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setStartX(null)
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    resetInterval()
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startX === null) return
    const currentX = e.clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setStartX(null)
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    resetInterval()
  }

  return (
    <div className='flex flex-col items-center w-full'>
      {/* SLIDER */}
      <div
        className='w-full overflow-hidden'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Texto */}
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {demoData.map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-full flex flex-col items-center h-[22rem] lg:md:h-72 justify-center text-center gap-5'
            >
              <h2 className='custom-color-secondary studentspace-bold text-3xl max-w-3xl mx-auto text-balance'>
                {item.title}
              </h2>

              <div className='flex flex-col justify-center text-center gap-4'>
                {item.description.map((description, index) => (
                  <h3 className='custom-color-secondary max-w-2xl mx-auto text-sm text-balance ' key={index}>
                    {description.text}
                  </h3>
                ))}
              </div>

              {item.techIcons && (
                <div className='flex flex-row gap-4'>
                  {item.techIcons.map((tech, index) => (
                    <img
                      src={tech.imageSrc}
                      key={index}
                      alt={tech.title}
                      title={tech.title}
                      className='object-contain h-6 transition-transform duration-300 hover:scale-125'
                    />
                  ))}
                </div>
              )}

              <a href={item.projectUrl} target='_blank' className='custom-color-primary studentspace-medium'>
                Pruebalo!
              </a>
            </div>
          ))}
        </div>

        <div className='relative w-full overflow-hidden cursor-grab active:cursor-grabbing'>
          {/* Carrusel */}
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {demoData.map((item, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-full flex flex-col items-center pointer-events-none select-none '
              >
                <div className='w-full flex justify-center pointer-events-none '>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full max-w-4xl h-auto object-cover rounded-xl pointer-events-none  '
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Imagen fija superpuesta */}
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none'>
            <img
              src='/assets/projects/laptop.webp'
              alt='Imagen fija'
              className='w-full max-w-4xl h-auto object-cover '
            />
          </div>
        </div>
      </div>

      {/* BOTONES */}
      <div className='slider-control flex flex-row justify-center items-center gap-3 py-3 px-3 rounded-full '>
        {demoData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              resetInterval()
            }}
            className={clsx(
              'slider-control-current h-3 rounded-full transition-width duration-200 ease-in',
              currentIndex === index ? 'w-10' : 'w-3 opacity-60'
            )}
          />
        ))}
      </div>
    </div>
  )
}
