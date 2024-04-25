import { DefaultCarousel } from '../components/Carrusel'
import { Button } from '../components/ui/Button'
import { Img } from '../components/ui/Img'
import { Header } from '../modules/header/Header'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <DefaultCarousel />
        <section className='flex justify-center items-center flex-wrap bg-yellow-200'>
          <div className='flex justify-center items-center flex-wrap'>
            <article className='w-11/12 md:max-w-md flex justify-evenly flex-wrap py-12 gap-2'>
              <Img
                src='https://s.pinimg.com/webapp/center-77497603.png'
                className=' w-48 object-cover'
              />
              <Img
                src='https://s.pinimg.com/webapp/topRight-d0230035.png '
                className=' w-48 object-cover'
              />
              <Img
                src='https://s.pinimg.com/webapp/left-511a9304.png'
                className=' w-48 object-cover'
              />
              <Img
                src='https://s.pinimg.com/webapp/right-88044782.png'
                className=' w-48 object-cover'
              />
            </article>
            <article className='w-11/12 md:w-2/4 px-4 py-16 flex flex-col gap-4'>
              <h2 className='text-6xl font-bold text-center'>Busca una idea</h2>
              <p className='text-2xl w-3/4 m-auto text-center'>
                ¿Qué es lo siguiente que quieres probar? Piensa en algo que te
                interese, como "receta sencilla de pollo para cenar", y a ver
                qué descubres.
              </p>
              <Button className='font-semibold bg-slate-700 w-24 m-auto text-yellow-200 px-2 rounded-3xl'>
                Explorar
              </Button>
            </article>
          </div>
        </section>
        <section className='p-10 overflow-hidden bg-slate-100'>
          <div className='flex justify-center items-center flex-wrap'>
            <article className='w-11/12 md:w-2/4 px-4 py-16 flex flex-col gap-4'>
              <h2 className='text-6xl font-bold text-center'>
                Guarda las ideas que te gusten
              </h2>
              <p className='text-2xl w-3/4 m-auto text-center'>
                Colecciona tus favoritos para poder verlos más tarde.
              </p>
              <Button className='font-semibold bg-slate-700 w-24 m-auto text-slate-100 px-2 rounded-3xl'>
                Explorar
              </Button>
            </article>
            <article className='max-w-md flex justify-evenly flex-wrap py-12 gap-2'>
              <figure className='w-48 relative principal'>
                <Img
                  src='https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png'
                  className='w-full object-cover'
                />
              </figure>
              <figure className='w-48 relative principal1'>
                <Img
                  src='https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png'
                  className='w-full object-cover'
                />
              </figure>
              <figure className='w-48 relative principal2'>
                <Img
                  src='https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png'
                  className=' w-full object-cover'
                />
              </figure>
              <figure className='w-48 relative principal3'>
                <Img
                  src='https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png'
                  className=' w-full object-cover'
                />
              </figure>
            </article>
          </div>
        </section>
        <section className='p-10 overflow-hidden bg-pink-100'>
          <div className='flex justify-between items-center flex-wrap'>
            <article className='w-11/12 md:w-2/4 relative sesion3camb m-auto'>
              <Img
                src='https://s.pinimg.com/webapp/shop-bd0c8a04.png'
                className='w-full object-cover rounded-md'
              />
              <figure className='w-24 absolute bottom-3 left-9'>
                <Img
                  src='https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png'
                  className=' w-full object-cover'
                />
              </figure>
            </article>
            <article className='w-11/12 md:max-w-lg px-0 md:px-11 py-16 flex flex-col gap-4 m-auto'>
              <h2 className='text-4xl sm:text-6xl font-bold text-center'>
                Míralo, fabrícalo, pruébalo, hazlo
              </h2>
              <p className='text-2xl w-3/4 m-auto text-center'>
                Lo mejor de Pinterest es descubrir cosas e ideas nuevas de
                personas de todo el mundo.
              </p>
              <Button className='font-semibold bg-red-700 w-24 m-auto text-slate-100 py-2 px-2 rounded-3xl'>
                Explorar
              </Button>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
