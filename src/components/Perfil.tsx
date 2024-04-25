import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { Check, Share } from 'lucide-react'
import { useLocation } from 'wouter'
import { CurrentUser, PerfilState } from '@/store/state'

export const Perfil = () => {
  const perfil = PerfilState((state) => state.bool)
  const [_, serLocatation] = useLocation()

  const user = CurrentUser((state) => state.user)
  const logout = CurrentUser((state) => state.logout)

  const handlelogout = async () => {
    await signOut(auth).then(() => {
      serLocatation('/')
      logout()
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
              // onClick={props.handeclick}
              className='rounded-2xl flex justify-center items-center p-2 gap-2 hover:bg-slate-300 '
            >
              <div>
                <img
                  src={
                    (user as { photoURL: string }).photoURL ||
                    'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
                  }
                  className='rounded-full w-12 h-12 object-cover'
                  alt='foto de perfil'
                />
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
            <div>
              <button
                // onClick={() => navigate('/perfil/editarperfil')}
                className='text-start rounded-xl font-bold p-2 gap-2 hover:bg-slate-300 w-full'
              >
                Ajustes
              </button>
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
