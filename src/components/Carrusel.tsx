import { Carousel } from 'flowbite-react'
import { Img } from './ui/Img'

export function DefaultCarousel() {
  return (
    <div className='w-full h-[80vh] bg-yellow-200'>
      <Carousel slideInterval={2000}>
        <Img
          className='w-full h-full object-cover rounded-md'
          alt='imagen de una idea de ropa de verano'
          src='https://i.postimg.cc/Cx5g6FSG/uno.png'
        />
        <Img
          className='w-full h-full object-cover rounded-md'
          alt='imagen de una actividad para niños'
          src='https://i.postimg.cc/PxWs8JQj/dos.png'
        />
        <Img
          className='w-full h-full oobject-cover rounded-md'
          alt='imagen de una idea para una cena especial'
          src='https://i.postimg.cc/zvqmwNxR/tres.png'
        />
        <Img
          className='w-full h-full object-cover rounded-md'
          alt='imagen de un proyecto de bricolaje'
          src='https://i.postimg.cc/ZYLzb9qP/cuatro.png'
        />
      </Carousel>
    </div>
  )
}
