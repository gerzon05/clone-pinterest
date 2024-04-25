import { Registro } from '../login/components/Registro'
import { Login, Register } from '../login/hooks/loginstate'
import { Img } from '../../ui/Img'

export function Footer() {
  const Loginstate = Login((state) => state.bool)
  const Registerstate = Register((state) => state.bool)
  return (
    <footer className='flex justify-between bg-black/80 items-center flex-wrap relative overflow-hidden'>
      <div className='footer absolute flex-wrap flex gap-3 justify-between top-0 left-0 right-0 bottom-0 -z-10'>
        <div className='-mt-16 flex flex-col gap-10 w-52'>
          <Img
            src='https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/ad/95/72/ad95724c42d984bf497b713f022da48b.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/ad/95/72/ad95724c42d984bf497b713f022da48b.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
        </div>
        <div className='-mt-4 flex flex-col gap-10 w-52'>
          <Img
            src='https://i.pinimg.com/550x/8e/66/3e/8e663eb86a99300280e9f1baab222188.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/94/8e/00/948e0049adfd6c668f1af1190574f726.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/ca/60/2c/ca602cc8e0cd99aa36e6c15451e70eb3.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
        </div>
        <div className='-mt-16 flex flex-col gap-10 w-52'>
          <Img
            src='https://i.pinimg.com/550x/e3/b1/6d/e3b16d726605cab53cd617766201386b.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/a2/f0/1e/a2f01e52288c781082c35077339ce914.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
        </div>
        <div className='-mt-4 flex flex-col gap-10 w-52'>
          <Img
            src='https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/43/e8/58/43e8586f0566075d55e2ca370c839ff0.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
          <Img
            src='https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg'
            className='w-full h-80 rounded-xl object-cover'
          />
        </div>
        <div className='-mt-16 flex flex-col gap-10 w-52'>
          <Img
            src='https://i.pinimg.com/550x/ba/db/b5/badbb52712872fe96a6e9ea9c5274688.jpg'
            className='w-full h-80 rounded-xl'
          />
          <Img
            src='https://i.pinimg.com/550x/6e/6f/0d/6e6f0d71fedbc745f096fc78e029c41e.jpg'
            className='w-full h-80 rounded-xl'
          />
          <Img
            src='https://i.pinimg.com/550x/32/95/26/3295260723631db47f44afca9a8841d7.jpg'
            className='w-full h-80 rounded-xl'
          />
        </div>
        <div className='-mt-4 flex flex-col gap-10 w-52'>
          <Img
            src='https://i.pinimg.com/550x/74/b5/dd/74b5dd70099c1ab5a6bcb4467845f5c1.jpg'
            className='w-full h-80 rounded-xl'
          />
          <Img
            src='https://i.pinimg.com/550x/8b/92/12/8b92123edb5b8bc830c8dbca3267a538.jpg'
            className='w-full h-80 rounded-xl'
          />
          <Img
            src='https://i.pinimg.com/550x/be/4f/77/be4f77a807c33f3594625ce3056d4835.jpg'
            className='w-full h-80 rounded-xl'
          />
        </div>
      </div>
      <article className='w-1/2 p-4'>
        <h2 className='text-6xl sm:text-8xl w-3/4 m-auto text-white'>
          Regístrate para ver ideas
        </h2>
      </article>
      <article
        className={`w-full md:max-w-lg p-2 md:p-14 ${Loginstate && 'pointer-events-none'} ${Registerstate && 'pointer-events-none'}`}
      >
        <Registro style='bg-white w-full p-7 rounded-xl' />
      </article>
    </footer>
  )
}
