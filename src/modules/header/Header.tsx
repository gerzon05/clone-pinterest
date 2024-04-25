import { LogoPinterest } from '../../components/icons/LogoPinterest'
import { LinkA } from '../../components/ui/LinkA'
import { Link } from 'wouter'
import { Registro } from '../../components/Registro'
import { IniciarSesion } from '../../components/IniciarSesion'
import { Login, Register } from '@/store/state'
import { Button } from '../../components/ui/Button'

export const Header = () => {
  const Loginstate = Login((state) => state.bool)
  const { converttrue, convertfalse } = Login()

  const Registerstate = Register((state) => state.bool)
  const { regitrue, regifalse } = Register()

  function handlelogin() {
    converttrue()
    regifalse()
  }

  function handleregister() {
    regitrue()
    convertfalse()
  }

  return (
    <>
      <div>
        <header className='flex justify-between p-5 sticky w-full flex-wrap bg-white z-10'>
          <Link to='/' className='flex items-center'>
            <LogoPinterest />
            <h1 className='text-1xl text-red-700 font-sans font-semibold'>
              Pinterest
            </h1>
          </Link>
          <nav className='flex gap-4 items-center'>
            <LinkA className='hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950'>
              Info
            </LinkA>
            <LinkA className='hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950'>
              Empresas
            </LinkA>
            <LinkA className='hidden md:block font-semibold px-2 after:content-normal cursor-pointer hover:border-b-2 border-b-gray-950'>
              Block
            </LinkA>
            <Button
              onClick={() => handlelogin()}
              className='text-xs md:text-xl translate font-semibold py-2 px-5 bg-red-600 rounded-3xl text-white'
            >
              Iniciar Sesión
            </Button>
            <Button
              onClick={() => handleregister()}
              className='text-xs md:text-xl font-semibold py-2 px-5 bg-gray-200 rounded-3xl '
            >
              Registrarse
            </Button>
          </nav>
          <IniciarSesion
            style={
              Loginstate === false
                ? 'hidden'
                : 'fixed bg-white py-10 left-1/2 top-1/2 w-11/12 md:w-[60vh] -translate-x-1/2 -translate-y-1/2 sm:w-[70vh] rounded-3xl border-2 border-black'
            }
          />
          <Registro
            style={
              Registerstate === false
                ? 'hidden'
                : ' fixed bg-white py-8 left-1/2 top-1/2 w-11/12 md:w-[70vh] -translate-x-1/2 -translate-y-1/2  rounded-3xl border-2 border-black'
            }
          />
        </header>
      </div>
    </>
  )
}
