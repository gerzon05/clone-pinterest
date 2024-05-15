import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/firebase'
import { Check, Share } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { PerfilState } from '../hooks/perfilhook'
import { UserState } from '../../../hooks/user'

export const Perfil = () => {
  const perfil = PerfilState((state) => state.bool)
  const { perfilfalse } = PerfilState()
  const [_, serLocatation] = useLocation()

  const user = UserState((state) => state.user)
  const logout = UserState((state) => state.logout)

  const handlelogout = async () => {
    await signOut(auth).then(() => {
      serLocatation('/')
      logout()
      perfilfalse()
    })
  }

  return (
    <div
      className={
        perfil
          ? 'fixed w-80 top-16 m-1 right-0 bottom-0 bg-white rounded-3xl p-5 overflow-y-auto'
          : 'hidden'
      }
    >
      <section>
        <figure>
          <article className='relative pt-4'>
            <p className='absolute text-xs top-0 left-0'>Actualmente en</p>
            <Check className='absolute right-4 top-10 text-lg' />
            <div
              className='rounded-2xl flex justify-center items-center p-2 gap-2 hover:bg-slate-300 '
            >
              <div>
                  {
                  !(user as { photoURL: string }).photoURL ? <div className="relative inline-flex items-center justify-center w-11 h-11 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">{(user as { email: string }).email.slice(0,1).toUpperCase()}</span>
              </div> : <img
                  src={(user as { photoURL: string }).photoURL}
                  className='rounded-full object-cover w-11 h-11'
                  alt='imagen de perfil'
                />
                }
              </div>
              <div>
                <h2 className='text-sm'>
                  {(user as { displayName: string }).displayName}
                </h2>
                <p className='text-sm'>personal</p>
                <p className='text-sm'>{(user as { email: string }).email}</p>
              </div>
            </div>
          </article>
          <article>
            <p className='text-xs'>Tus cuentas</p>
            <div>
              <button className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Añadir cuenta
              </button>
              <button className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Convertir cuenta para empresa
              </button>
            </div>
          </article>
          <article>
            <p className='text-xs'>Mas opciones</p>
            <div className='pt-3'>
              <Link to='/edit-Perfil'
               onClick={perfilfalse}
                className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 !w-full'
              >
                Ajustes
              </Link>
              <button className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Optimiza tu feed de inicio
              </button>
              <button className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Instala la aplicacion de windows
              </button>
              <button className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Tus derechos de privacidad
              </button>
              <button className='flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                obtener ayuda
                <Share className='font-black text-xs' />
              </button>
              <button className='flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Ver terminos de servicios
                <Share className='font-black text-xs' />
              </button>
              <button className='flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Ver pilotica de privacidad
                <Share className='font-black text-xs' />
              </button>
              <button className='flex justify-between items-center text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'>
                Valora la version beta
                <Share className='font-black text-xs' />
              </button>
              <button
                className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'
                onClick={handlelogout}
              >
                Cerrar sesión
              </button>
            </div>
          </article>
        </figure>
      </section>
    </div>
  )
}
