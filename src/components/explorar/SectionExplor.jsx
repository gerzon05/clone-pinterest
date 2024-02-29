import React from 'react'

export const SectionExplor = ({ src, parragraf, title, handle }) => {
  return (
    <>
      <article
        onClick={handle}
        className='cursor-pointer hover:scale-95 relative w-[290px] h-[250px] md:w-[390px] md:h-[350px] rounded-2xl overflow-hidden mb-6'
      >
        <img src={src} className='w-full object-cover object-[0,-200px]' />
        <figure className='absolute  flex flex-col p-8 justify-end items-center top-0 bottom-0 w-full bg-black/40'>
          <p className='text-center text-white text-base'>{parragraf}</p>
          <h3 className='text-center text-white text-3xl'>{title}</h3>
        </figure>
      </article>
    </>
  )
}
