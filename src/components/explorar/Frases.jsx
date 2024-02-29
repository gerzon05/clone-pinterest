import { Header2 } from '../Header2'
import { Pin2 } from './Pin2'
import { InicioExplo } from './InicioExplo'
import { FiArrowLeft } from 'react-icons/Fi'
import { useNavigate } from 'react-router-dom'

export const Frases = () => {
  const navigatate = useNavigate()
  return (
    <>
      <Header2 />
      <div className='mt-20 flex flex-col items-center justify-center relative'>
        <div
          onClick={() => navigatate('/explorar')}
          className='bg-white absolute w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 left-3 top-3'
        >
          <FiArrowLeft className='text-3xl font-bold' />
        </div>
        <InicioExplo
          src='https://i.pinimg.com/564x/ce/81/a5/ce81a58e62ae23fcbf0588c835af2650.jpg'
          parragraf='Frases motivacionales'
          title='Para daler el ánimo que necesitas'
        />
        <p className='w-[290px] sm:w-[600px] ms:w-[800px] py-3'>
          Si estás sintiendo un bajón, no hay problema. Abraza tus sentimientos
          y toma un tiempo para reflejar con estas citaciones bonitas que te
          ayudarán a encontrar la motivación que estás buscando.
        </p>
      </div>
      <div className='w-full mt-16 flex justify-center items-center'>
        <div className='container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4'>
          <Pin2 filter='frases' />
        </div>
      </div>
    </>
  )
}
