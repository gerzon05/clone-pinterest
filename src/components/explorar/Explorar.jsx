import React from 'react'
import { Header2 } from '../Header2'
import { SectionExplor } from './SectionExplor'
import { useNavigate } from 'react-router-dom'

export const Explorar = () => {
  const navigate = useNavigate()
  const handleDulces = () => {
    navigate('/explorar/dulces')
  }
  const handlefrases = () => {
    navigate('/explorar/frases')
  }
  const handlefutbol = () => {
    navigate('/explorar/futbol')
  }
  const handlecarro = () => {
    navigate('/explorar/carros')
  }
  return (
    <>
      <Header2 />
      <div className='mt-16'>
        <section className='p-7 flex justify-evenly items-center flex-wrap'>
          <SectionExplor
            handle={handleDulces}
            src='https://i.pinimg.com/736x/55/73/94/557394fd3c32b79870aad69037c58908.jpg'
            parragraf='Dulces o Saladas'
            title='Recetas con manzanas'
          />
          <SectionExplor
            handle={handlefrases}
            src='https://i.pinimg.com/564x/ce/81/a5/ce81a58e62ae23fcbf0588c835af2650.jpg'
            parragraf='Frases motivacionales'
            title='Para daler el ánimo que necesitas'
          />
          <SectionExplor
            handle={handlefutbol}
            src='https://i.pinimg.com/474x/78/d9/e6/78d9e61421c7a59243e86fd99d83831a.jpg'
            parragraf='Amantes al futbol'
            title='Las mejores fotos de futbol'
          />
          <SectionExplor
            handle={handlecarro}
            src='https://i.pinimg.com/474x/15/2e/75/152e756d6cc7430e99125d61a694c7f2.jpg'
            parragraf='encantado de los autos'
            title='Tus mejores Autos'
          />
        </section>
      </div>
    </>
  )
}
