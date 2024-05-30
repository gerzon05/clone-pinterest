import { useLocation } from 'wouter'
import { useState } from 'react'
import { Avatar } from 'flowbite-react'
import { UserState } from '@/store/user'
import { PinFavorite } from '@/modules/pin/PinFavorite'

export function MyPerfil() {
  const [_, setLocation] = useLocation()
  const user = UserState(state => state.user)
  const [save_image, Set_Save_image] = useState(false)

  const email = (user as ({ email: string })).email
  return (
    <>
      <div className="mt-16">
        <article className="pt-5">
          {!(user as { photoURL: string }).photoURL
            ? (
              <div className="w-20 m-auto">
                <Avatar
                  placeholderInitials={(user as { email: string }).email
                    .slice(0, 1)
                    .toUpperCase()}
                  rounded
                />
              </div>
              )
            : (
              <div className="w-20 m-auto">
                <Avatar
                  img={(user as { photoURL: string }).photoURL}
                  alt={`avatar of ${(user as { displayName: string }).displayName}`}
                  rounded
                />
              </div>
              )}
          <h2 className="text-center font-medium text-3xl py-1">
            {'Usuario'
            || (user as { displayName: string }).displayName.charAt(0).toUpperCase()
            + (user as { displayName: string }).displayName.slice(1)}
          </h2>
          <p className="text-center text-xs py-1">
            @
            {email.split('@')[0]}
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <button className="text-lg px-5 py-3 font-semibold rounded-full bg-slate-200">
              Compartir
            </button>
            <button
              onClick={() => setLocation('/perfil/editar-perfil')}
              className="text-lg px-5 py-3 font-semibold rounded-full bg-slate-200"
            >
              Editar perfil
            </button>
          </div>
        </article>
        <aside className="w-full mt-5 ">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => Set_Save_image(false)}
              className='hover:bg-slate-300 rounded-xl p-2 text-xl relative font-semibold after:content-[""] after:absolute after:w-full after:-bottom-1 after:h-[3px] focus:after:bg-black after:left-0'
            >
              Creados
            </button>
            <button
              onClick={() => Set_Save_image(true)}
              className='hover:bg-slate-300 rounded-xl p-2 text-xl relative font-semibold after:content-[""] after:absolute after:w-full after:-bottom-1 after:h-[3px] focus:after:bg-black after:left-0'
            >
              Guardados
            </button>
          </div>
        </aside>
        <div>
          {save_image
            ? (
              <div className="w-full relative py-5 flex justify-center items-center">
                <div className="container columns-3 md:columns-4 lg:columns-6 xl:columns-7 2xl:columns-8 py-4">
                  <PinFavorite filter={(user as { email: string }).email} />
                </div>
              </div>
              )
            : (
              <div className="p-14 text-center">
                <p className="text-center py-2">
                  Aún no hay nada para mostrar. Los Pines que crees se almacenarán
                  aquí.
                </p>
                <button className="w-36 px-4 py-2 rounded-full bg-red-700 text-base text-white">
                  Crear Idea Pin
                </button>
              </div>
              )}
        </div>
      </div>
    </>
  )
}
